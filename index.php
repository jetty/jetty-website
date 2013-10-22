<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php");  $App    = new App();    $Nav    = new Nav();    $Menu   = new Menu();       include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

    #
    # Begin: page-specific settings.  Change these. 
    $pageTitle      = "Jetty - Servlet Engine and Http Server";
    $pageKeywords   = "Jetty, Servlets, Async, SPDY, Web Server, Web Client, Eclipse RT, Eclipse Runtime";
    $pageAuthor     = "jmcconnell";
    
    # Add page-specific Nav bars here
    # Format is Link text, link URL (can be http://www.someothersite.com/), target (_self, _blank), level (1, 2 or 3)
    # $Nav->addNavSeparator("My Page Links",    "downloads.php");
    # $Nav->addCustomNav("My Link", "mypage.php", "_self", 3);
    # $Nav->addCustomNav("Google", "http://www.google.com/", "_blank", 3);

    # End: page-specific settings
    #
        
    # Paste your HTML content between the EOHTML markers!   
    $html = <<<EOHTML

    <div id="maincontent">
    <div id="midcolumn">
        <h1>Jetty</h1>
        <table> 
          <tr>
            <td><p>Jetty provides a <a href="http://en.wikipedia.org/wiki/Web_server">Web server</a> and <a
  href="http://java.sun.com/javaee/5/docs/api/javax/servlet/package-summary.html">javax.servlet</a> container, plus support
  for 
  <a href="http://en.wikipedia.org/wiki/SPDY">SPDY</a>, 
  <a href="http://en.wikipedia.org/wiki/WebSocket">WebSocket</a>, 
  <a href="http://en.wikipedia.org/wiki/OSGi">OSGi</a>, 
  <a href="http://en.wikipedia.org/wiki/JMX">JMX</a>, 
  <a href="http://en.wikipedia.org/wiki/JNDI">JNDI</a>, 
  <a href="http://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service">JAAS</a> 
  and many other integrations. These components are open source and 
  available for commercial use and distribution.</p>
            </td>
            <td align="right">
              <img alt="Jetty" src="/jetty/images/jetty-logo-80x22.png"/>
            </td>
           </tr>
         </table>

        <p>Jetty is used in a wide variety of projects and products, both in development and production. Jetty can be easily embedded in devices, tools, frameworks, application servers, and clusters. 
        See the <a href="/jetty/powered">Jetty Powered</a> page for more uses of Jetty.</p>
        <p>The current recommended version for use is Jetty 9 which can be obtained here: <a href="http://download.eclipse.org/jetty">Jetty Downloads</a>.  Also available are the latest maintenance releases of Jetty 8 and Jetty 7.</p>
        <p>The Jetty project is hosted entirely at the Eclipse Foundation and has been for a number of years.  Prior releases of Jetty have existed in part or completely under the Jetty project at the Codehaus. See the <a href="http://www.eclipse.org/jetty/about.php">About</a> page for more information about the history of Jetty.</p> 
      
        <table>
          <tr>
            <th>Features</th>
            <th>Jetty Powered</th>
          </tr>
          
          <tr>
            <td>
              <ul>
                <li>Full-featured and standards-based</li>
                <li>Open source and commercially usable</li>
                <li>Flexible and extensible</li>
                <li>Small footprint</li>
                <li>Embeddable</li>
                <li>Asynchronous</li>
                <li>Enterprise scalable</li>
                <li>Dual <a href="http://www.eclipse.org/jetty/licenses.php">licensed</a> under Apache and Eclipse</li>
              </ul>
            </td>
          
            <td>
              <ul>
                <li>Large clusters, such as the <a href="http://developer.yahoo.net/hadoop/">Yahoo Hadoop Cluster</a></li>
                <li>Cloud computing, such as the <a href="http://code.google.com/appengine/">Google AppEngine</a></li>
                <li>SaaS, such as <a href="http://www.zimbra.com/">Yahoo! Zimbra</a></li> 
                <li>Application Servers, such as <a href="http://geronimo.apache.org/">Apache Geronimo</a></li>
                <li>Frameworks, such as <a href="http://code.google.com/webtoolkit/">GWT</a></li>
                <li>Tools, such as the <a href="http://www.eclipse.org/">Eclipse IDE</a></li>
                <li>Devices, such as <a href="http://code.google.com/p/i-jetty/">phones</a></li>
                <li><a href="/jetty/powered">More...</a></li>
              </ul>
            </td>    
          </tr>
        </table>
      
        <p>You can benefit from committer knowledge and get training, consulting services, professional support and even production SLAs, just ask us about it!</p>
    </div>
    </div>
    <div id="rightcolumn">
        $sidebar        
    </div>

EOHTML;


    # Generate the web page
    $App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
