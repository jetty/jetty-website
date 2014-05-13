<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php");  $App    = new App();    $Nav    = new Nav();    $Menu   = new Menu();       include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'


    #
    # Begin: page-specific settings.  Change these. 
    $pageTitle      = "Licenses";
    $pageKeywords   = "Jetty, Servlets, Async, Web Server, Web Client, Mailing Lists, Eclipse RT, Eclipse Runtime";
    $pageAuthor     = "ayao";
    
    # Paste your HTML content between the EOHTML markers!   
    $html = <<<EOHTML

    <div id="midcolumn">
    <p><img alt="Jetty Logo" src="/jetty/images/jetty-logo-80x22.png"/></p>
        <h1>Licenses</h1>
        <p>
            Jetty 9 (as well as 7 and 8) is dual licensed under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a> and <a href="http://www.eclipse.org/legal/epl-v10.html">Eclipse Public License 1.0</a>. Jetty is free for commercial use and distribution under the terms of either license, with exceptions listed in the <a href="http://git.eclipse.org/c/jetty/org.eclipse.jetty.project.git/plain/NOTICE.txt">NOTICE</a> file. 
        </p>
        <p>
            Jetty 6 was distributed solely under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a> with details and exceptions listed in the <a href="http://svn.codehaus.org/jetty/jetty/branches/jetty-6.1/NOTICE.txt">NOTICE</a> file.
        </p>
    </div>
    <div id="rightcolumn">
        $sidebar        
    </div>

EOHTML;


    # Generate the web page
    $App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
