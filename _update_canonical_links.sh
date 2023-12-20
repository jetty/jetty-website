#!/usr/bin/env bash

CANONICAL_URL=https://eclipse.dev/jetty/documentation/jetty-12/index.html
html_docs=($(find "documentation/" -type f -name "*.html" -printf "%P\n"));

echo "html_docs = ${html_docs[@]}"

for html in ${html_docs[@]};
do
  file="documentation/$html"
  echo "file = $file"    
  if grep -q 'link rel="canonical" href' $file;
  then
    echo "found canonical header in $file"
  else
    echo "Adding canonical header in $file"
    sed -i -e "s+<head>+<head><link rel=\"canonical\" href=\"$CANONICAL_URL\"/>+gI" "$file"
  fi
done

