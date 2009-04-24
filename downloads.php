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
		<h1>Downloads</h1>
		<div class="homeitem3col">	
			<h2>Jetty Releases from Eclipse</h2>
            <p>
                Jetty milestone builds are now available.
            </p>            
            <ul>
               <li>
                    <b>Jetty</b>: 7.0.0.M1  |  <b>Date</b>: 21 April 2009  <br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.zip">jetty-distribution-7.0.0.M1.zip</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.zip.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.zip.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.gz">jetty-distribution-7.0.0.M1.tar.gz</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.gz.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.gz.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.bz2">jetty-distribution-7.0.0.M1.tar.bz2</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.bz2.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M1/dist/jetty-distribution-7.0.0.M1.tar.bz2.sha1"><i>SHA1</i></a><br/>                   
               </li>
               <li>
                    <b>Jetty</b>: 7.0.0.M0  |  <b>Date</b>: 3 April 2009  <br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.zip">jetty-distribution-7.0.0.M0.zip</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.zip.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.zip.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.gz">jetty-distribution-7.0.0.M0.tar.gz</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.gz.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.gz.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.bz2">jetty-distribution-7.0.0.M0.tar.bz2</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.bz2.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M0/dist/jetty-distribution-7.0.0.M0.tar.bz2.sha1"><i>SHA1</i></a><br/>                   
               </li>
            </ul>
            
            <p>The <a href="http://wiki.eclipse.org/Jetty/Reference">index of the JavaDoc and Source XRef links</a> for each milestone build is also available. 
		</div>		
		<p>
            All downloads are provided under the terms and conditions of the <a href="http://www.eclipse.org/legal/epl/notice.php">Eclipse Foundation Software User Agreement</a> unless otherwise specified. Please note that the use of the software you are about to access may be subject to third party terms and conditions and you are responsible for abiding by such terms and conditions.
		</p>
		<div class="homeitem3col">
		  <h2>Jetty Releases from codehaus</h2>
		  <p>
		      Download Jetty accessories, integrations, extensions, or older versions of Jetty from the <a href="http://docs.codehaus.org/display/JETTY/Downloading+Jetty">Downloads</a> page at the codehaus.
		  </p>
		</div>
		<h2>Frequently asked questions</h2>
		<p>
            <b>How do I unpack and install Jetty?</b>
		</p>
		<p>
            To get started quickly:
            <ol>
                <li><a href="http://dist.codehaus.org/jetty/">Download from codehaus</li>
                <li>Install <a href="http://docs.codehaus.org/display/JETTY/Installing+Jetty-6.1.x">Jetty-6</a> or <a href="http://docs.codehaus.org/display/JETTY/Installing+Jetty-7.0.x">Jetty-7</a></li>
                <li>Run <a href="http://docs.codehaus.org/display/JETTY/Running+Jetty-6.1.x">Jetty-6</a> or <a href="http://docs.codehaus.org/display/JETTY/Running+Jetty-7.0.x">Jetty-7</a></li>
            </ol>
		</p>
		<p>
            <b>I have been using previous versions of Jetty from the Jetty6 line, is this a drop in replacement?</b>
		</p>
		<p>
			No, while Jetty7 has very much the same architecture as Jetty6, there are packaging changes and other minor tweaks between the versions.  Also, the Jetty7 milestones are not as full featured as Jetty6 in terms of 3rd part integrations being available by default with the distribution bundle.
		</p>
		<p>
		    <b>Are Maven2 artifacts still available?</b>
		</p>
		<p>
			Yes, Jetty still supports our Maven based users to the same degree as previously. The location of artifacts has changed though.
			<ul>
			  <li><a href="http://repo2.maven.org/maven2/org/eclipse/jetty">http://repo2.maven.org/maven2/org/eclipse/jetty</a></li>
			</ul>
		</p>
		<br/>
		<br/>
	</div>	

	<div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
