#!/bin/bash

{
echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">"
echo "<html xmlns=\"http://www.w3.org/1999/xhtml\">"
echo "<head>"
echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\"/>"
echo "<title>Jetty - Powered by Jetty</title>"
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"../css/powered.css\"/>"
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"../css/docbook.css\"/>"
echo "</head>"

echo "<body bgcolor=\"white\" text=\"black\" link=\"#0000FF\" vlink=\"#840084\" alink=\"#0000FF\">"

#echo "<p class=\"hdr\">&nbsp;Jetty Powered</p>"

#echo " <center>"
#echo "    <a href=\"http://www.eclipse.org/jetty\">"
#echo "      <img src=\"../documentation/jetty-logo.svg\" width=\"80\"></a>"
#echo "  </center>"
echo "  <div class=\"navheader\">"
echo "   <table width=\"100%\" summary=\"Navigation header\">"
echo "      <tr>"
echo "        <th colspan=\"3\" align=\"center\">Jetty : Powered By Jetty</th>"
echo "      </tr>"
echo "      <tr>"
echo "        <td width=\"20%\" align=\"left\">&nbsp;</td>"
echo "        <th width=\"60%\" align=\"center\">&nbsp;</th>"
echo "        <td width=\"20%\" align=\"right\">&nbsp;</td>"
echo "      </tr>"
echo "    </table>"
echo "  </div>"

echo "  <div style=\"background-color: #DFF2FD; text-align: left; font-size:80%; font-family: arial, sans; border:thin dotted blue; padding: 4px; \">"
echo "    <span style=\"font-variant: small-caps; font-weight: bold\">"
echo "      <a href=\"http://www.webtide.com/support.jsp\" style=\"text-decoration:none\">"
echo "        Contact the core Jetty developers at"
echo "        <span style=\"color:#fd360b\">www.webtide.com</span>"
echo "      </a>"
echo "    </span>"
echo "    <br/>"
echo "    <span style=\"font-style:oblique;font-size: 80%\">"
echo "      private support for your internal/customer projects ... custom extensions and distributions ... versioned snapshots for indefinite support ... scalability guidance for your apps and Ajax/Comet projects ... development services from 1 day to full product delivery"
echo "    </span>"
echo "  </div>"

echo "<div>"
echo "<h2>Declaring Your Project or Product as Jetty Powered</h2>"
echo "<p>As a small, fast, embeddable web server and servlet container Jetty is used by a multitude of both commercial and open source products."
echo "These Jetty Powered products illustrate Jetty's versatility and the diversity of its community. </p>"
echo "<p>Send your submission with a product logo (if you have one) and brief text describing your product to <code>powered AT mortbay.com</code> if you would like your product or project listed here.</p>"
echo "<p>Feel free to download and use our <i>Powered By Jetty</i> logos:</p>"
echo "<center><img border=\"0\" src=\"images/large_powered_by.gif\"><img border=\"0\" src=\"images/small_powered_by.gif\"></center>"
echo "</div>"

echo "  <div class=\"book\">"
echo "<table cellspacing=\"10\" cellpadding=\"5\" width=\"100%\" summary=\"Power by Jetty Logos\">"

C=0

cat powered.txt | while read LINE
do
  TAG=$(expr "$LINE" : '\([A-Z]*\):')
  ARG=$(expr "$LINE" : "$TAG:\(.*\)")

  case "$TAG" in
    HREF* )   
     HREF=$ARG
     if [ $(expr $C % 2 ) == 0 ]
     then 
         [ $C -gt 0 ] && echo "</p></td></tr>"
         echo "<tr><td colspan=\"2\">&nbsp;</td></tr><tr>"
     else
         echo "</p></td>"
     fi
     echo "<td class=\"power\" align=\"center\" width=\"50%\" valign=\"bottom\">"

     C=$(expr "$C" + 1)
     ;;

    IMAGE* )  
     IMAGE=$ARG
     echo "<a href=\"$HREF\"><img alt=\"a company logo\" border=\"0\" src=\"images/$IMAGE\"/></a><br/>"
     ;;

    NAME* )  
     NAME=$ARG
     echo "<a href=\"$HREF\"><h3>$NAME</h3></a><p class=\"blurb\">"
     ;;

    *) echo $LINE
     ;;
  esac

done

echo "</td></tr></table>"
echo "</div>"
echo "<script type=\"text/javascript\">"

echo "  var _gaq = _gaq || [];"
echo "  _gaq.push(['_setAccount', 'UA-1149868-7']);"
echo "  _gaq.push(['_trackPageview']);"

echo "  (function() {"
echo "    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"
echo "    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"
echo "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"
echo "  })();"

echo "</script>"
echo "</body>"
echo "</html>"

} > index.html

