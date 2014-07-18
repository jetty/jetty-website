<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

	#
	# Begin: page-specific settings.  Change these.
	$pageTitle 		= "Eclipse RT - Jetty - Profiling";
	$pageKeywords	= "Jetty, Servlets, Async, Web Server, Web Client, Mailing Lists, Eclipse RT, Eclipse Runtime";
	$pageAuthor		= "jmcconnell";

	# Paste your HTML content between the EOHTML markers!
	$html = <<<EOHTML

	<div id="midcolumn">
	<p><img alt="Jetty Logo" src="/jetty/images/jetty-logo-80x22.png"/></p>
		<h1>YourKit</h1>
		<p>The Jetty project uses YourKit for profiling Jetty.</p>
		<p>
YourKit is kindly supporting Jetty open source projects with its full-featured Java Profiler.
YourKit, LLC is the creator of innovative and intelligent tools for profiling
Java and .NET applications. Take a look at YourKit&#39;s leading software products:
<a href="http://www.yourkit.com/java/profiler/index.jsp">YourKit Java Profiler</a> and
<a href="http://www.yourkit.com/.net/profiler/index.jsp">YourKit .NET Profiler</a>.
		</p>


    <h1>Intelli-J</h1>
    <p>While Jetty is an Eclipse project, the developers are IDE agnostic and Intelli-J is a popular choice!</p>
    <a href="http://www.jetbrains.com/idea/features/javascript.html" style="display:block; background:#fff url(http://www.jetbrains.com/idea/opensource/img/all/banners/idea468x60_white.gif) no-repeat 0 7px; border:solid 1px #0d3a9e; margin:0;padding:0;text-decoration:none;text-indent:0;letter-spacing:-0.001em; width:466px; height:58px" alt="Java IDE with advanced HTML/CSS/JS editor for hardcore web-developers" title="Java IDE with advanced HTML/CSS/JS editor for hardcore web-developers"><span style="margin: 5px 0 0 61px;padding: 0;float: left;font-size: 12px;cursor:pointer;  background-image:none;border:0;color: #0d3a9e; font-family: trebuchet ms,arial,sans-serif;font-weight: normal;text-align:left;">Developed with</span><span style="margin:0 0 0 205px;padding:18px 0 2px 0; line-height:13px;font-size:11px;cursor:pointer;  background-image:none;border:0;display:block; width:255px; color:#0d3a9e; font-family: trebuchet ms,arial,sans-serif;font-weight: normal;text-align:left;">Java IDE with advanced HTML/CSS/JS<br/>editor for hardcore web-developers</span></a>
	</div>

	<div id="rightcolumn">
        $sidebar
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
