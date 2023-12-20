#!/usr/bin/env bash

CANONICAL_URL=https://eclipse.dev/jetty/documentation/jetty-12/
IGNORED_HITS=".*(contribution-guide\/).*"
html_docs=($(find "documentation/" -type f -name "*.html" -printf "%P\n"));

for html in ${html_docs[@]};
do
  file="documentation/$html"
  echo "file = $file"
  canonical_file=$(echo $html | sed -e "s+^.[^/]*/++")
  if [[ $file =~ $IGNORED_HITS ]] ;
  then
    echo "Ignoring $file"
  else
    if grep -q 'link rel="canonical" href' $file;
    then
      echo "found canonical header in $file"
      sed -i -e "s+<head><link rel=\"canonical\".*+<head><link rel=\"canonical\" href=\"${CANONICAL_URL}${canonical_file}\"/>+gI" "$file"
    else
      echo "Adding canonical header in $file"
      sed -i -e "s+<head>+<head><link rel=\"canonical\" href=\"${CANONICAL_URL}${canonical_file}\"/>+gI" "$file"
    fi
  fi
done

