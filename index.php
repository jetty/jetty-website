<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php");  $App    = new App();    $Nav    = new Nav();    $Menu   = new Menu();       include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

    #
    # Begin: page-specific settings.  Change these. 
    $pageTitle      = "Jetty";
    $pageKeywords   = "Jetty, Servlets, Async, Web Server, Web Client, Eclipse RT, Eclipse Runtime";
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

    <div id="midcolumn">
        <p><image src="/jetty/images/jetty-logo-80x22.png"/></p>
    
        <p>Jetty provides an Web server and <a
	href="http://java.sun.com/javaee/5/docs/api/javax/servlet/package-summary.html">javax.servlet</a> container, plus support
	for Web Sockets, OSGi, JMX, JNDI, JASPI, AJP and many other integrations. These components are open source and 
	available for commercial use and distribution.</p> 
        <p>Jetty is used in a wide variety of projects and products. Jetty can be embedded in devices, tools,  frameworks, application servers, and clusters. See the <a href="http://docs.codehaus.org/display/JETTY/Jetty+Powered">Jetty Powered</a> page for more uses of Jetty.</p>
        <p>The core Jetty project is hosted by the Eclipse Foundation. The <a href="http://jetty.mortbay.org/jetty/">codehaus</a> provides Jetty accessories , integrations, and extensions, as well as hosting older versions of Jetty. See the <a href="http://www.eclipse.org/jetty/about.php">About</a> page for information about the project structure.</p> 
      
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
                <li><a href="http://docs.codehaus.org/display/JETTY/Jetty+Powered">More...</a></li>
              </ul>
            </td>    
          </tr>
        </table>
      
    </div>
    
    <div id="rightcolumn">
        $sidebar        
    </div>

EOHTML;


    # Generate the web page
    $App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
