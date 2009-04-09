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
	
	  <p>Jetty is an open-source project providing a HTTP server, HTTP client and <a href="http://java.sun.com/javaee/5/docs/api/javax/servlet/package-summary.html">javax.servlet</a> container.  
	  These 100% java components are full-featured, standards based, small foot print, embeddable, 
	  asynchronous and enterprise scalable.
	  Jetty is dual licensed under the <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a> 
	  and/or <a href="http://www.eclipse.org/legal/epl-v10.html">Eclipse Public License 1.0</a>. Jetty is
	  free for commercial use and distribution under the terms of either of those licenses.
	  </p>
	  
	  <p>Jetty is used in a wide variety of projects and products: embedded in <a href="http://code.google.com/p/i-jetty/">phones</a>; in tools like the the <a href="http://www.eclipse.org/">eclipse IDE</a>, in
	  frameworks like <a href="http://code.google.com/webtoolkit/">GWT</a>, in application servers like <a href="http://geronimo.apache.org/">apache geronimo</a> and in huge clusters like 
	  <a href="http://developer.yahoo.net/blogs/hadoop/2008/07/apache_hadoop_wins_terabyte_sort_benchmark.html">yahoo's hadoop cluster</a>. See the <a href="http://docs.codehaus.org/display/JETTY/Jetty+Powered">Jetty Powered</a> page for 
	  more uses of Jetty.</p>
	  
	  <p>The jetty project is coordinated between the <a href="http://www.eclipse.org/jetty/">the eclipse foundation</a> where the latest core components are developed;
	  and <a href="http://jetty.codehaus.org">the codehaus</a>, where older versions are maintained and the latest eclipse components are variously integrated, 
	  extended and repackaged. See the <a href="about.php">about</a> page for more on the project structure.  
	  
	</div>
	
	<div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
