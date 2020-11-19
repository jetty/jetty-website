#!/usr/bin/env bash

function usage() {
  echo "Usage: "
  echo " ./update_for_releases.sh"
  echo "   -s : configured settings"
  echo "   -c : clean archive of unused versions"
  echo "   -u : update"
}

function set_global_variables() {
  VERSIONS_TXT=$(pwd)/_jettyVersions.txt
  VERSIONS_PHP=$(pwd)/_jettyVersions.php
  ARC_DIR=$(pwd)/_archive
  TEMP_DIR=$ARC_DIR/temp
  MAVEN_ROOT="https://repo1.maven.org/maven2/org/eclipse/jetty"
  DOC_ROOT="$MAVEN_ROOT/jetty-documentation"
  LOG_FILE="$ARC_DIR/update.log"
}

function print_global_variables() {
  echo "Versions File (txt): $VERSIONS_TXT"
  echo "Versions File (php): $VERSIONS_PHP"
  echo "Archive Directory: $ARC_DIR"
  echo "Maven Root URL: $MAVEN_ROOT"
  echo "Documentation Root URL: $DOC_ROOT"
}

function print_execution_variables() {
  # TODO make dynamic
  echo "Jetty 9.2 = $jetty_9_2"
  echo "Jetty 9.3 = $jetty_9_3"
  echo "Jetty 9.4 = $jetty_9_4"
  echo "Jetty 10.0 = $jetty_10_0"
  echo "Jetty 11.0 = $jetty_11_0"
}

function gather_current_versions() {

  version_file="_jettyVersions.txt"

  # TODO make dynamic
  # shellcheck disable=SC2162
  while IFS= read line; do
    if [[ $line == *"9.2."* ]]; then
      jetty_9_2=$line
    fi

    if [[ $line == *"9.3."* ]]; then
      jetty_9_3=$line
    fi

    if [[ $line == *"9.4."* ]]; then
      jetty_9_4=$line
    fi

    if [[ $line == *"10.0."* ]]; then
      jetty_10_0=$line
    fi

    if [[ $line == *"11.0."* ]]; then
      jetty_11_0=$line
    fi

  done <"$version_file"

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

  rm -Rf "$TEMP_DIR"

  if [ ! -d "$TEMP_DIR" ]; then
    mkdir "$TEMP_DIR"
  fi
}

#
# we want to clear out files that are no longer required based on the current versions
#
function clean_archive_directory() {

  # TODO implement
  if [ -d "$ARC_DIR" ]; then
    rm -R "$ARC_DIR"
  fi

}

function download() {
  artifact=$1
  version=$2
  filename=$3

  if [[ ! -f "$ARC_DIR/$filename" ]]; then
    echo "  downloading $filename"
    wget -O "$ARC_DIR/$filename" "$MAVEN_ROOT/$artifact/$version/$filename" &>>"$LOG_FILE"
  #else
  #  echo "  found: $filename";
  fi
}

function download_distribution_files() {
  version=$1

  if [[ "$version" == "1"* ]]; then
    artifact="jetty-home"
  else
    artifact="jetty-distribution"
  fi

  filename_zasc="$artifact-$version.zip.asc"
  filename_zmd5="$artifact-$version.zip.md5"
  filename_zsha1="$artifact-$version.zip.sha1"
  filename_tasc="$artifact-$version.tar.gz.asc"
  filename_tmd5="$artifact-$version.tar.gz.md5"
  filename_tsha1="$artifact-$version.tar.gz.sha1"
  download "$artifact" "$version" "$filename_zasc"
  download "$artifact" "$version" "$filename_zmd5"
  download "$artifact" "$version" "$filename_zsha1"
  download "$artifact" "$version" "$filename_tasc"
  download "$artifact" "$version" "$filename_tmd5"
  download "$artifact" "$version" "$filename_tsha1"
}

function download_documentation_files() {
  artifact="jetty-documentation"
  version=$1
  filename="$artifact-$version-html.zip"
  download "$artifact" "$version" "$filename"
}

function download_missing_files() {
  create_archive_directory

  # TODO make dynamic
  # Jetty 9.2
  download_distribution_files "$jetty_9_2"

  # Jetty 9.3
  download_distribution_files "$jetty_9_3"

  # Jetty 9.4
  download_distribution_files "$jetty_9_4"
  download_documentation_files "$jetty_9_4"

  # Jetty 10.0
  download_distribution_files "$jetty_10_0"
  download_documentation_files "$jetty_10_0"

  # Jetty 11.0
  download_distribution_files "$jetty_11_0"
  download_documentation_files "$jetty_11_0"
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
  versions=($jetty_9_2 $jetty_9_3 $jetty_9_4 $jetty_10_0 $jetty_11_0)

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
  versions=($jetty_9_4 $jetty_10_0 $jetty_11_0)
  create_temp_directory

  for version in "${versions[@]}"; do
    temp_ver_dir="$TEMP_DIR/$version";
    unzip -d "$temp_ver_dir" "$ARC_DIR/jetty-documentation-$version-html.zip" &>>"$LOG_FILE";
  done

  # TODO make dynamic
  {
    rsync -avh "$TEMP_DIR/$jetty_9_4/$jetty_9_4" "$(pwd)/documentation/jetty-9" --delete;
    rsync -avh "$TEMP_DIR/$jetty_10_0/$jetty_10_0/" "$(pwd)/documentation/jetty-10";
    rsync -avh "$TEMP_DIR/$jetty_11_0/$jetty_11_0/" "$(pwd)/documentation/jetty-11";
  } &>>"$LOG_FILE"
}

#
# main
#
function main() {
  directive=$1

  # print out the settings this script operates under
  if [[ $directive == "-s" ]]; then
    set_global_variables
    gather_current_versions
    print_global_variables
    print_execution_variables
    exit
  fi

  # run an update process for any version changes
  if [[ $directive == "-u" ]]; then
    set_global_variables
    gather_current_versions
    download_missing_files
    generate_version_php
    process_documentation
    exit
  fi

  # print usage
  usage
  exit
}

main "$1"
