<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

	#
	# Begin: page-specific settings.  Change these. 
	$pageTitle 		= "Jetty";
	$pageKeywords	= "Jetty, Servlets, Async, Web Server, Web Client, Eclipse RT, Eclipse Runtime";
	$pageAuthor		= "jmcconnell";
	
	# Add page-specific Nav bars here
	# Format is Link text, link URL (can be http://www.someothersite.com/), target (_self, _blank), level (1, 2 or 3)
	# $Nav->addNavSeparator("My Page Links", 	"downloads.php");
	# $Nav->addCustomNav("My Link", "mypage.php", "_self", 3);
	# $Nav->addCustomNav("Google", "http://www.google.com/", "_blank", 3);

	# End: page-specific settings
	#
		
	# Paste your HTML content between the EOHTML markers!	
	$html = <<<EOHTML

	<div id="midcolumn">
	  <p><image src="/jetty/images/jetty-logo-80x22.png"/></p>
	
	  <p>Jetty is an open-source, standards-based, full-featured web server implemented entirely in Java. It is 
	  released under the Apache 2.0 license and is therefore free for commercial use and distribution. Once 
	  established as an Eclipse project, it will be dual-licensed, maintaining its Apache 2.0 license, and adding 
	  the Eclipse Public License. Beyond the license addition, which would not require any changes from the current 
	  large number of users or consuming open source projects or commercial products with use of Jetty, the move is 
	  seen as having numerous benefits for the projects and community...</p>
	  <p>The target is for Jetty 7 to release under the auspices of the Eclipse Foundation, with Jetty 6 continuing
	  on with maintenance releases at The Codehaus for the foreseeable future.</p>
	  <p>Follow this url to access the original <a href="http://www.eclipse.org/proposals/jetty/">proposal</a>.</p>
	 
	</div>
	
	<div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
