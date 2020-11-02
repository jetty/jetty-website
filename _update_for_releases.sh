#!/usr/bin/env bash

version_file="_jettyVersions.php";

while IFS= read line
do
  if [[ $line == *"jetty_9.2_"* ]]; then
    p1=${line#* \'};
    p2=${p1%\'\;};
    jetty_9_2=$p2;
  fi

  if [[ $line == *"jetty_9.4_"* ]]; then
    p1=${line#* \'};
    p2=${p1%\'\;};
    jetty_9_4=$p2;
  fi

  if [[ $line == *"jetty_10.0_"* ]]; then
    p1=${line#* \'};
    p2=${p1%\'\;};
    jetty_10_0=$p2;
  fi

  if [[ $line == *"jetty_11.0_"* ]]; then
    p1=${line#* \'};
    p2=${p1%\'\;};
    jetty_11_0=$p2;
  fi

done <"$version_file";

echo "Jetty 9.2 = "$jetty_9_2;
echo "Jetty 9.4 = "$jetty_9_4;
echo "Jetty 10.0 = "$jetty_10_0;
echo "Jetty 11.0 = "$jetty_11_0;

#
# prepare downloads
#
ARC_DIR="_archive";

mkdir $ARC_DIR;

#
# prepare documentation
#
DOC_URL_BASE="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-documentation"

jetty_9_4_filename="jetty-documentation-$jetty_9_4-html.zip";
wget -O $ARC_DIR/$jetty_9_4_filename "$DOC_URL_BASE/$jetty_9_4/$jetty_9_4_filename";


#
# cleanup downloads
#
# rm -Rf $ARC_DIR;