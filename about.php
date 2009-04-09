<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'


	#
	# Begin: page-specific settings.  Change these. 
	$pageTitle 		= "About the Jetty Project";
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
	  
	  <p>The Jetty projects has was started in 1995 and since then has been associated with many names and brands:<dl>
	  
	  <blockquote>
	  
	  <p>
	  <b>Jetty</b> <br/> 
	  Jetty was the name initially given to the HTTP server component from Mort Bay.  The name Jetty has now
	  grown to encompass the suite of components which includes a HTTP server, HTTP client, javax.servlet container, the 
	  hightide application server and many other related components and utilities.   Jetty is now the name of the 
	  encompassing projects at 
	  <a href="http://jetty.mortbay.org">mortbay</a>(v1-v4), 
	  <a href="http://sourceforge.net/projects/jetty">sourceforge</a>(v5), 
	  <a href="http://xircles.codehaus.org/projects/jetty">codehaus</a>(v6-) and 
	  <a href="http://eclipse.org/jetty">eclispe</a>(v7-).
	  </p>
	  
	  <p>
	  <b>Mort Bay</b><br/>
	  The Java HTTP server that became jetty was originally developed in 1995 by
	  Greg Wilkins of <a href="http://mortbay.com">Mort Bay Consulting</a> as part of an issue tracking application.
	  Versions 1.x through to 6.1.x of jetty were developed under org.mortbay packaging and Mort Bay still holds 
	  the major part of the copyright on the jetty code base.  Mort bay directly hosted the jetty project until version
	  3.x and was the prime sponsor of development until 6.x 
	  </p>
	  
	  <p>
	  <b>Webtide</b><br/>
	  The role of mortbay in leading the development of Jetty was taken over in 2006 by 
	  <a href="http://www.webtide.com">Webtide LLC</a>, an open source services company that employ many of the 
	  jetty contributors.
	  </p>
	  
	  <p>
	  <b>Sourceforge</b><br/>
	  From 2000 to 2005, the jetty project was hosted at <a href="http://sourceforge.net/projects/jetty">sourceforge.net</a>
	  where versions 3.x, 4.x and 5.x were produced.
	  </p>
	  
	  <p>
	  <b>Codehaus</b><br/>
	  In 2005, the jetty project moved to <a href="http://codehaus.org">the codehaus</a> for its hosting services and 
	  open source community.  In 2009, after the core components of Jetty moved to eclispe, the jetty @ codehaus project continues to provide
	  integrations, extensions and packaging of jetty.
	  </p>
	  
	  <p>
	  <b>Eclipse</b><br/>
	  In 2009, the Jetty project moved it's core components to be a project of the <a href="http://eclipse.org/jetty">eclipse foundation</a>,
	  in order to improved IP processes and broaden the licensing and community of the project. 
	  </p>
	  
	  </blockquote>
	
	  
	  <table border=1 cellpadding=2>
<tr>
<td><b>Version</b></td>
<td><b>Home</b></td>
<td><b>Java</b></td>
<td><b>HTTP</b></td>
<td><b>Servlet</b></td>
<td><b>JSP</b></td>
<td><b>Status</b></td>

</tr>

<tr>
<td> 8.x </td>
<td> Eclipse,<br/>Codehaus </td>
<td> 1.6 </td>
<td> HTTP/1.1<br/>RFC2616 </td>
<td> 3.0 </td>
<td> 2.1 </td>
<td> Experimental </td>
</tr>

<tr>
<td> 7.x </td>
<td> Eclipse,<br/>Codehaus </td>
<td> 1.5,<br/>J2ME CLDC </td>
<td> HTTP/1.1<br/>RFC2616 </td>
<td> 2.5 </td>
<td> 2.1 </td>
<td> Stabalizing </td>
</tr>


<tr>
<td> Jetty-6.x </td>
<td> Codehaus </td>
<td> 1.4-1.5</td>
<td> HTTP/1.1<br/>RFC2616 </td>
<td> 2.5 </td>
<td> 2.0 </td>
<td> Stable </td>
</tr>

<tr>
<td> Jetty-5.x </td>
<td> Sourceforge </td>
<td> 1.2-1.5 </td>
<td> HTTP/1.1<br/>RFC2616 </td>
<td> 2.4 </td>
<td> 2.0 </td>
<td> Mature </td>
</tr>

<tr>
<td> Jetty-4.x </td>
<td> Sourceforge </td>
<td> 1.2 </td>
<td> HTTP/1.1<br/>RFC2616 </td>
<td> 2.3 </td>
<td> 1.2 </td>
<td> Ancient </td>
</tr>


<tr>
<td> Jetty-3.x </td>
<td> Sourceforge </td>
<td> 1.2 </td>
<td> HTTP/1.1<br/>RFC2068 </td>
<td> 2.2 </td>
<td> 1.1 </td>
<td> Fossilized </td>
</tr>


<tr>
<td> Jetty-2.x </td>
<td> Mortbay </td>
<td> 1.1 </td>
<td> HTTP/1.0<br/>RFC1945 </td>
<td> 2.1 </td>
<td> 1.0 </td>
<td> Legendary </td>
</tr>


<tr>
<td> Jetty-1.0 </td>
<td> Mortbay </td>
<td> 1.0 </td>
<td> HTTP/1.0<br/>RFC1945 </td>
<td> &nbsp; </td>
<td> &nbsp; </td>
<td> Mythical </td>
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
