#!/usr/bin/env bash

function usage() {
  echo "Usage: ";
  echo " ./update_for_releases.sh [command]";
  echo "   settings : configured settings";
#  echo "   clean : clean archive of unused versions";
  echo "   update : update released versions";
  echo "   nightly : update latest documentation from nightlies"
  echo "";
  echo "Artifacts are pulled from configured nexus, central, and lastly staging repositories."
}

function set_global_variables() {
  MIN_JAVA_VERSION=17
  VERSIONS_TXT=$(pwd)/_jettyVersions.txt
  VERSIONS_PHP=$(pwd)/_jettyVersions.php
  ARC_DIR=$(pwd)/_archive
  JAVADOC_DIR=$(pwd)/javadoc
  TEMP_DIR=$ARC_DIR/temp
  SCRIPT_DIR=$(pwd)
  
  # use one of these and set on CLI, default to maven central?
  NEXUS_ROOT="http://10.0.0.15:8081/repository/maven-public"
  MAVEN_ROOT="https://repo1.maven.org/maven2/org/eclipse/jetty"
  STAGING_ROOT="https://oss.sonatype.org/content/groups/jetty-with-staging/org/eclipse/jetty"

  GITHUB_ROOT="https://github.com/eclipse/jetty.project/archive"
  DOC_ROOT_9="$MAVEN_ROOT/jetty-documentation"
  DOC_ROOT_1x="$MAVEN_ROOT/documentation/jetty-documentation"
  LOG_FILE="$ARC_DIR/update.log"
}

function print_global_variables() {
  echo "Log File: $LOG_FILE"
  echo "Versions File (txt): $VERSIONS_TXT"
  echo "Versions File (php): $VERSIONS_PHP"
  echo "Archive Directory: $ARC_DIR"
  echo "Nexus Root URL: $NEXUS_ROOT"
  echo "Maven Root URL: $MAVEN_ROOT"
  echo "Maven Staging Root URL: $STAGING_ROOT"
  echo "Documentation Root 9 URL: $DOC_ROOT_9"
  echo "Documentation Root 1x URL: $DOC_ROOT_1x"
  echo "Github Root URL: $GITHUB_ROOT"
}

function print_execution_variables() {
  # TODO make dynamic
  echo ""
  echo "Version Variables"
  echo "Jetty 9.2 = $jetty_9_2"
  echo "Jetty 9.3 = $jetty_9_3"
  echo "Jetty 9.4 = $jetty_9_4"
  echo "Jetty 10.0 = $jetty_10_0"
  echo "Jetty 11.0 = $jetty_11_0"
  echo "Jetty 12.0 = $jetty_12_0"
  echo "Jetty Nightly = $jetty_12_nightly"
  echo "Jetty Nightly Resolved = $jetty_12_nightly_resolved"
  echo ""
}


function init() {
  echo ""

  set_global_variables;
  check_java_version;
  reset_log;
  create_archive_directory;
}

function check_java_version() {

  if [[ -z "${JAVA_HOME}" ]]; then
    echo "Error: JAVA_HOME environment variable not set, required for javadoc generation."
    exit 1
  fi

  local java_version=$(java -version 2>&1 | head -n1 | sed -r 's/.*version "([0-9]*).*$/\1/');

  if (( $java_version < $MIN_JAVA_VERSION)); then
    echo "Error: java version must be $MIN_JAVA_VERSION+";
  fi

}


function gather_current_versions() {

  local version_file="_jettyVersions.txt"

  # TODO make dynamic
  # shellcheck disable=SC2162
  while IFS= read line; do

    if [[ $line == *"9.2."* ]]; then
      jetty_9_2=$line;
    fi

    if [[ $line == *"9.3."* ]]; then
      jetty_9_3=$line;
    fi

    if [[ $line == *"9.4."* ]]; then
      jetty_9_4=$line;
    fi

    if [[ $line == *"10.0."* ]]; then
      jetty_10_0=$line;
    fi

    if [[ $line == *"11.0."* ]]; then
      jetty_11_0=$line;
    fi

    if [[ $line == *"12.0."* && $line != *"SNAPSHOT"* ]]; then
      jetty_12_0=$line;
    fi

    if [[ $line == *"12.0."* && $line == *"SNAPSHOT"* ]]; then
      jetty_12_nightly=$line;
    fi

  done <"$version_file"

}

function gather_nightly_version() {
  local artifact="jetty-documentation";
  local version="$1";
  local filename="maven-metadata.xml";

  maven_staging_download "documentation/$artifact" $version $filename;

  local baseVersion=$(echo "$version" | tr -d '\-SNAPSHOT');
  local timestamp=$(sed -n -e 's:.*<timestamp>\(.*\)</timestamp>.*:\1:p' "$ARC_DIR/$filename");
  local build=$(sed -n -e 's:.*<buildNumber>\(.*\)</buildNumber>.*:\1:p' "$ARC_DIR/$filename");

  #echo $baseVersion;
  #echo $timestamp;
  #echo $build;

  jetty_12_nightly_resolved="$baseVersion-$timestamp-$build";
}

#
# set up archive directory if it doesn't exist
#
function create_archive_directory() {

  if [ ! -d "$ARC_DIR" ]; then
    mkdir "$ARC_DIR"
  fi

}

function create_temp_directory() {

  if [[ ! -d "$TEMP_DIR" ]]; then
    mkdir "$TEMP_DIR"
  fi
}

function delete_temp_directory() {

  if [[ -d "$TEMP_DIR" ]]; then
    rm -Rf "$TEMP_DIR";
  fi
}

function reset_log() {
  if [[ -e "$LOG_FILE" ]]; then
    rm "$LOG_FILE";
  fi
}

function get_primary_version() {
  local version="$1";

  IFS='.' read -ra ver <<<"$version"

  echo "jetty-${ver[0]}";
}

function get_javadoc_version() {
  local primary_version=$1
  local javadoc_version

  if [[ $primary_version == "jetty-9" ]]; then
    javadoc_version=$(sed -e ':a' -e 'N;$!ba' -e 's/.*Project \([0-9.v]*\) API.*/\1/' "$JAVADOC_DIR/jetty-9/index.html")
  elif [[ $primary_version == "jetty-10" ]]; then
    javadoc_version=$(sed -e ':a' -e 'N;$!ba' -e 's/.*Doc - v\([0-9.]*\)).*/\1/' "$JAVADOC_DIR/jetty-10/index.html")
  elif [[ $primary_version == "jetty-11" ]]; then
    javadoc_version=$(sed -e ':a' -e 'N;$!ba' -e 's/.*Doc - v\([0-9.]*\)).*/\1/' "$JAVADOC_DIR/jetty-11/index.html")
  elif [[ $primary_version == "jetty-12" ]]; then
    javadoc_version=$(sed -e ':a' -e 'N;$!ba' -e 's/.*Doc - v\([0-9.]*\)).*/\1/' "$JAVADOC_DIR/jetty-12/index.html")
  fi

  echo "$javadoc_version"
}

function get_version_from_file_1x() {
  local filename=$1

  version=$("$filename")

  echo "$version"
}

#
# we want to clear out files that are no longer required based on the current versions
#
function clean_archive_directory() {

  # TODO implement correct behavior
  if [ -d "$ARC_DIR" ]; then
    rm -R "$ARC_DIR"
  fi

}

function maven_download() {
  local artifact=$1
  local version=$2
  local filename=$3

  if [[ ! -f "$ARC_DIR/$filename" ]]; then
    echo " - downloading from nexus $filename";
    wget -O "$ARC_DIR/$filename" "$NEXUS_ROOT/$artifact/$version/$filename" &>>"$LOG_FILE";
    local nexus_status=$?;

    if [[ nexus_status -ne 0 ]]; then
      echo "  - downloading from maven $filename";
      wget -O "$ARC_DIR/$filename" "$MAVEN_ROOT/$artifact/$version/$filename" &>>"$LOG_FILE";
      local download_status=$?;

      if [[ download_status -ne 0 ]]; then
        maven_staging_download $1 $2 $3
      fi
    fi
  fi
}

function maven_staging_download() {
  local artifact=$1
  local version=$2
  local filename=$3

  if [[ ! -f "$ARC_DIR/$filename" ]]; then
    echo "  - downloading from staging $filename";

    wget -O "$ARC_DIR/$filename" "$STAGING_ROOT/$artifact/$version/$filename" &>>"$LOG_FILE";
    local staging_status=$?;

    if [[ staging_status -ne 0 ]]; then
      echo "  - download failed: $filename";
      rm "$ARC_DIR/$filename" 2>/dev/null;
      exit 1;
    fi
  fi
}

function github_download() {
  local filename=$1

  if [[ ! -f "$ARC_DIR/$filename" ]]; then
    echo "  - downloading $filename"
    wget -O "$ARC_DIR/$filename" "$GITHUB_ROOT/$filename" &>>"$LOG_FILE";
    local download_status=$?;

    if [[ download_status -ne 0 ]]; then
      echo "  - download failed: $filename";
      rm "$ARC_DIR/$filename";
      exit 1
    fi
  fi
}


function download_distribution_files() {
  local version=$1

  if [[ "$version" == "1"* ]]; then
    local artifact="jetty-home"
    maven_download "$artifact" "$version" "$artifact-$version-with-docs.zip";
  else
    local artifact="jetty-distribution"
  fi

  local filename_zasc="$artifact-$version.zip.asc";
  local filename_zmd5="$artifact-$version.zip.md5";
  local filename_zsha1="$artifact-$version.zip.sha1";
  local filename_tasc="$artifact-$version.tar.gz.asc";
  local filename_tmd5="$artifact-$version.tar.gz.md5";
  local filename_tsha1="$artifact-$version.tar.gz.sha1";
  maven_download "$artifact" "$version" "$filename_zasc";
  maven_download "$artifact" "$version" "$filename_zmd5";
  maven_download "$artifact" "$version" "$filename_zsha1";
  maven_download "$artifact" "$version" "$filename_tasc";
  maven_download "$artifact" "$version" "$filename_tmd5";
  maven_download "$artifact" "$version" "$filename_tsha1";
}

function download_documentation_files() {
  local artifact="jetty-documentation";
  local version=$1;
  local html_filename="$artifact-$version-html.zip";

  local primary_version
  primary_version=$(get_primary_version "$version")

  if [[ $primary_version == "jetty-9" ]]; then
    maven_download "$artifact" "$version" "$html_filename";
  else
    # this is a hack, should clean this up
    maven_download "documentation/$artifact" "$version" "$html_filename";
  fi
}

function download_github_files() {
  local version=$1
  local filename="jetty-$version.zip"

  github_download "$filename"

}

function download_missing_files() {
  create_archive_directory

  echo " - phase: downloads"

  # TODO make dynamic
  # Jetty 9.2
  download_distribution_files "$jetty_9_2"

  # Jetty 9.3
  download_distribution_files "$jetty_9_3"

  local versions=($jetty_9_4 $jetty_10_0 $jetty_11_0 $jetty_12_0)
  for version in "${versions[@]}"; do
    #echo "checking $jetty_12_0" 
    download_distribution_files "$version"
    download_documentation_files "$version"
    download_github_files "$version"
  done
}

function download_nightly_documentation() {
  local artifact="jetty-documentation";
  local version=$jetty_12_nightly;
  local filename="$artifact-$jetty_12_nightly_resolved-html.zip";
  create_archive_directory;

  echo " - phase: download nightly";

  maven_staging_download "documentation/$artifact" $version $filename 
}

function get_dist_info() {
  if [[ "$1" == "1"* ]]; then
    cat "$ARC_DIR/jetty-home-$1.$2"
  else
    cat "$ARC_DIR/jetty-distribution-$1.$2"
  fi
}

function generate_version_php() {

  # shellcheck disable=SC2206
  # TODO make dynamic
  local versions=($jetty_9_2 $jetty_9_3 $jetty_9_4 $jetty_10_0 $jetty_11_0 $jetty_12_0)

    echo " - phase: version_php generation"

  rm "$VERSIONS_PHP"

  {
    echo "<?php"
    echo "/**"
    echo "* Copyright (c) 2020 Eclipse Foundation."
    echo "*"
    echo "* This program and the accompanying materials are made"
    echo "* available under the terms of the Eclipse Public License 2.0"
    echo "* which is available at https://www.eclipse.org/legal/epl-2.0/"
    echo "*"
    echo "* Contributors:"
    echo "*   Jesse McConnell"
    echo "*"
    echo "* SPDX-License-Identifier: EPL-2.0"
    echo "*/"
    echo "\$jetty = array ("
    for version in "${versions[@]}"; do
      # shellcheck disable=SC2206
      IFS='.' read -ra ver <<<"$version"
      # shellcheck disable=SC2128
      # shellcheck disable=SC2211
      echo " 'jetty_${ver[0]}.${ver[1]}' => array ("
      echo "    'version' => '$version',"
      echo "    'zip.md5' => '$(get_dist_info "$version" "zip.md5")',"
      echo "    'zip.sha1' => '$(get_dist_info "$version" "zip.sha1")',"
      #echo "    'zip.asc' => '$(get_dist_info "$version" "zip.asc")',";
      echo "    'tgz.md5' => '$(get_dist_info "$version" "tar.gz.md5")',"
      echo "    'tgz.sha1' => '$(get_dist_info "$version" "tar.gz.sha1")',"
      #echo "    'tgz.asc' => '$(get_dist_info "$version" "tgz.asc")',";
      if [ "$version" == "${versions[-1]}" ]; then
        echo "  )"
      else
        echo "  ),"
      fi
    done
    echo ");"
  } >>"$VERSIONS_PHP"
}

function process_documentation() {
  # shellcheck disable=SC2206
  local versions=($jetty_9_4 $jetty_10_0 $jetty_11_0 $jetty_12_0);
  local directive=$1;

  echo " - phase: documentation $directive"

  create_temp_directory;

  if [[ $directive == "nightly" ]]; then
    local temp_ver_dir="$TEMP_DIR/$jetty_12_nightly_resolved";
    echo "test $temp_ver_dir"

    unzip -d "$temp_ver_dir" "$ARC_DIR/jetty-documentation-$jetty_12_nightly_resolved-html.zip" &>>"$LOG_FILE";
    {
      local primary_version;
      primary_version=$(get_primary_version "$jetty_12_0");

      echo "  - deploying $jetty_12_nightly documentation to $jetty_12_0"
      find $temp_ver_dir -type f -name '*.html' -exec sed -i "s/$jetty_12_nightly/$jetty_12_0/gI" {} \;

      rsync -avh "$TEMP_DIR/$jetty_12_nightly_resolved/$jetty_12_nightly/" "$(pwd)/documentation/$primary_version";
    } &>>"$LOG_FILE";
  else
    for version in "${versions[@]}"; do
      local temp_ver_dir="$TEMP_DIR/$version";
      unzip -d "$temp_ver_dir" "$ARC_DIR/jetty-documentation-$version-html.zip" &>>"$LOG_FILE";
    done

    {
      for version in "${versions[@]}"; do
        local primary_version;
        primary_version=$(get_primary_version "$version");

        echo "  - deploying documentation for $version"

        rsync -avh "$TEMP_DIR/$version/$version/" "$(pwd)/documentation/$primary_version";
      done;
    } &>>"$LOG_FILE";
  fi 
  delete_temp_directory;
}

function process_contribution_guide() {
  local version=$jetty_12_0;
  local directive=$1;

  echo " - phase: position contribution guide $directive";

  create_temp_directory;

  {
    if [[ $directive == "nightly" ]]; then
      local temp_ver_dir="$TEMP_DIR/$jetty_12_nightly_resolved";
      unzip -d "$temp_ver_dir" "$ARC_DIR/jetty-documentation-$jetty_12_nightly_resolved-html.zip";
      find $temp_ver_dir -type f -name '*.html' -exec sed -i "s/$jetty_12_nightly/$jetty_12_0/gI" {} \;
      rsync -avh "$TEMP_DIR/$jetty_12_nightly_resolved/$jetty_12_nightly/contribution-guide" "$(pwd)/documentation";
    else
      local temp_ver_dir="$TEMP_DIR/$version";
      unzip -d "$temp_ver_dir" "$ARC_DIR/jetty-documentation-$version-html.zip";
      rsync -avh "$TEMP_DIR/$version/$version/contribution-guide" "$(pwd)/documentation";
    fi
  } &>>"$LOG_FILE";

  delete_temp_directory;
}

function process_javadoc() {
  # shellcheck disable=SC2206
  # local versions=($jetty_9_4 $jetty_10_0 $jetty_11_0 $jetty_12_0)
  local versions=($jetty_10_0 $jetty_11_0 $jetty_12_0)
  local directive=$1;
  
  echo " - phase: javadoc"

  create_temp_directory

  for version in "${versions[@]}"; do
    local primary_version;
    local javadoc_version;
    local temp_build_dir="$TEMP_DIR/$version";

    primary_version=$(get_primary_version "$version");
    javadoc_version=$(get_javadoc_version "$primary_version");

    if [[ $version == "$javadoc_version" ]]; then
      echo "  - skipping javadoc generation for $version";
    else
      build_javadoc "$primary_version" "$version" "$temp_build_dir"
      deploy_javadoc "$primary_version" "$version" "$temp_build_dir"
    fi
  done;

  delete_temp_directory
}

function build_javadoc() {
  local primary_version=$1
  local version=$2
  local temp_build_dir=$3

  local filename="jetty-$version.zip"

  echo "  - building javadoc for $version"

  {
    if [[ $primary_version == "jetty-9" ]]; then
      github_download "$filename";
      unzip -d "$temp_build_dir" -o "$ARC_DIR/$filename"
      cd "$temp_build_dir/jetty.project-jetty-$version" || exit 1
      mvn clean install -DskipTests
      mvn javadoc:aggregate
    elif [[ $primary_version == "jetty-10" ]]; then
      filename="jetty-home-$version-with-docs.zip"
      unzip -d "$temp_build_dir" -o "$ARC_DIR/$filename"
    elif [[ $primary_version == "jetty-11" ]]; then
      filename="jetty-home-$version-with-docs.zip"
      unzip -d "$temp_build_dir" -o "$ARC_DIR/$filename"
    elif [[ $primary_version == "jetty-12" ]]; then
      filename="jetty-home-$version-with-docs.zip"
      unzip -d "$temp_build_dir" -o "$ARC_DIR/$filename"
      make_canonical $temp_build_dir
    fi

    cd "$SCRIPT_DIR" || exit 1
  } &>>"$LOG_FILE";
}


function make_canonical() {
  local directory;

  find $directory -type f -name '*.html' -exec sed -i 's/<a href/<a rel="canonical" href/gI' {} \;


}

function deploy_javadoc() {
  local primary_version=$1
  local version=$2
  local temp_build_dir=$3
  local javadoc_src_dir

  echo "  - deploying javadoc for $version"

  if [[ $primary_version == "jetty-9" ]]; then
    javadoc_src_dir="$temp_build_dir/jetty.project-jetty-$version/target/site/apidocs/"
  elif [[ $primary_version == "jetty-10" ]]; then
    javadoc_src_dir="$temp_build_dir/jetty-home-$version/javadoc/"
  elif [[ $primary_version == "jetty-11" ]]; then
    javadoc_src_dir="$temp_build_dir/jetty-home-$version/javadoc/"
  elif [[ $primary_version == "jetty-12" ]]; then
    javadoc_src_dir="$temp_build_dir/jetty-home-$version/javadoc/"
  fi

  rsync -avh "$javadoc_src_dir" "$JAVADOC_DIR/$primary_version" &>>"$LOG_FILE";

}


#
# main
#
function main() {
  directive=$1

  # print out the settings this script operates under
  if [[ $directive == "settings" ]]; then
    init;
    gather_current_versions;
    print_global_variables;
    print_execution_variables;
    #echo "test" &>>"$LOG_FILE";
    exit 0;
  fi

  # run an update process for any version changes
  if [[ $directive == "update" ]]; then
    init;
    gather_current_versions;
    download_missing_files;
    generate_version_php;
    process_documentation;
    process_contribution_guide;
    process_javadoc;
    exit 0;
  fi

  # run an update process for any nightly doc changes
  if [[ $directive == "nightly" ]]; then
    init;
    gather_current_versions;
    gather_nightly_version $jetty_12_nightly; 
    #print_execution_variables;
    download_nightly_documentation;
    process_documentation $directive;
    process_contribution_guide $directive;
    exit 0;
  fi

  # print usage
  usage;
  exit 0;
}

main "$1"
