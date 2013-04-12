<?php  																														
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

	#
	# Begin: page-specific settings.  Change these. 
	$pageTitle 		= "Eclipse Jetty - Downloads";
	$pageKeywords	= "Jetty, Servlets, Async, Web Server, Web Client, Eclipse RT, Eclipse Runtime, Eclipse Jetty downloads";
	$pageAuthor		= "jmcconnell";
	
	# Paste your HTML content between the EOHTML markers!	
	$html = <<<EOHTML

	<div id="midcolumn">
	<p><img alt="Jetty Logo" src="/jetty/images/jetty-logo-80x22.png"/></p>
		<h1>Downloads</h1>
		<div class="homeitem3col">	
			<h2>Jetty Distributions from Eclipse</h2>
			<p>
			        The Jetty Web Server and core components such as Web Sockets, SPDY, OSGi, JASPI, JMX, JNDI, AJP are
				available from eclipse.  These distributions and its dependencies are provided under the terms and conditions of the <a
				href="http://www.eclipse.org/legal/epl/notice.php">Eclipse Foundation Software User Agreement</a> unless otherwise specified: </p>
				<ul>
					<li><a href="http://download.eclipse.org/jetty/">Jetty Downloads</a></li>
					<li><a href="http://www.eclipse.org/jetty/documentation">Jetty 9 Documentation</a></li>
					<li><a href="http://wiki.eclipse.org/Jetty">Jetty 7 and Jetty 8 Documentation</a></li> 
				</ul>
			</p>
			</p>
		</div>
	</div>	

	<div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
