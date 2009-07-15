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
			<h2>Previous Jetty Releases from Eclipse</h2>
            <p>
                These downloads are provided as historical releases.
            </p>            
            <ul>
               <li>
                    <b>Jetty</b>: 7.0.0.M4  |  <b>Date</b>: 1 July 2009  <br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.zip">jetty-distribution-7.0.0.M4.zip</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.zip.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.zip.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.gz">jetty-distribution-7.0.0.M4.tar.gz</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.gz.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.gz.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.bz2">jetty-distribution-7.0.0.M4.tar.bz2</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.bz2.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M4/dist/jetty-distribution-7.0.0.M4.tar.bz2.sha1"><i>SHA1</i></a><br/>
               </li>
               <li>
                    <b>Jetty</b>: 7.0.0.M3  |  <b>Date</b>: 22 June 2009  <br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.zip">jetty-distribution-7.0.0.M3.zip</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.zip.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.zip.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.gz">jetty-distribution-7.0.0.M3.tar.gz</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.gz.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.gz.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.bz2">jetty-distribution-7.0.0.M3.tar.bz2</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.bz2.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M3/dist/jetty-distribution-7.0.0.M3.tar.bz2.sha1"><i>SHA1</i></a><br/>
               </li>        
               <li>
                    <b>Jetty</b>: 7.0.0.M2  |  <b>Date</b>: 18 May 2009  <br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.zip">jetty-distribution-7.0.0.M2.zip</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.zip.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.zip.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.gz">jetty-distribution-7.0.0.M2.tar.gz</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.gz.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.gz.sha1"><i>SHA1</i></a><br/>
                    <img src="images/arrow.gif"></img>&nbsp;&nbsp;<b><a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.bz2">jetty-distribution-7.0.0.M2.tar.bz2</a></b>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.bz2.md5"><i>MD5</i></a>&nbsp;&nbsp;<a href="http://www.eclipse.org/downloads/download.php?file=/jetty/7.0.0.M2/dist/jetty-distribution-7.0.0.M2.tar.bz2.sha1"><i>SHA1</i></a><br/>                   
               </li>
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
    	</div>		
		<p>
            All downloads are provided under the terms and conditions of the <a href="http://www.eclipse.org/legal/epl/notice.php">Eclipse Foundation Software User Agreement</a> unless otherwise specified. Please note that the use of the software you are about to access may be subject to third party terms and conditions and you are responsible for abiding by such terms and conditions.
		</p>
	</div>	

	<div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
