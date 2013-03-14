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
	  
      <h2>Distribtions</h2>
      <br/>
      <ul>
	  <p>
	  <b>Jetty</b> <br/> 
	  The <a href="http://eclipse.org/jetty">Jetty Web Server</a> provides an HTTP server and Servlet container capable of
	  serving static and dynamic content either from a standalone or embedded instantiations.   From jetty-7, the jetty
	  webserver and other core compoments are hosted by the eclipse foundation. The project provides:<ul>
	    <li>Asynchronous HTTP Server</a>
	    <li>Standard based Servlet Container</a>
	    <li><a href="http://en.wikipedia.org/wiki/Web_Sockets">Web Sockets</a> server</li>
	    <li>Asynchronous HTTP Client</li>
	    <li>OSGi, JNDI, JMX, JASPI, AJP support </li>
	  </ul>
	  <br/>
	  </p>

	  <p>
	  <b>Hightide</b> <br/> 
	  The <a href="http://docs.codehaus.org/display/JETTY/Hightide+Documentation">Jetty Hightide</a> application 
	  server is a distribution of the jetty Web Server assembled at codehaus with additional services like JNDI, 
	  XA & JDBC preconfigured.  For jetty-hightide-6 this is an optimized, patched rebuild of jetty-6, while for 
	  jetty-hightide-7 it is distribution based on the standard jetty-7 artifacts combined with other third party
	  integrations.
	  </p>

	  <p>
	  <b>Other distributions</b> <br/> 
	  Jetty is available in many forms and distributions, including the jetty-maven-plugin, debian and RPMs from 
	  <a href="http://jetty.codehaus.org">jetty@codehaus</a>
	  and as part of the <a href="http://geronimo.apache.org/">Geronimo JEE application server</a> from apache.
	  </p>

      </ul>
      <h2>Homes</h2>
      <br/>
      <ul>
	  <p>
	  <b>Eclipse</b><br/>
	  In 2009, the Jetty project moved its core components to be a project of the <a href="http://eclipse.org/jetty">Eclipse Foundation</a>,
	  in order to improve the IP processes and broaden the licensing and community of the project. 
	  </p>
	  
	  <p>
	  <b>Codehaus</b><br/>
	  In 2005, the jetty project moved to <a href="http://codehaus.org">the codehaus</a> for its hosting services and 
	  open source community.  In 2009, after the core components of Jetty moved to eclipse, the jetty @ codehaus project continues to provide
	  integrations, extensions and packaging of jetty.
	  </p>
	  
	  <p>
	  <b>Sourceforge</b><br/>
	  From 2000 to 2005, the jetty project was hosted at <a href="http://sourceforge.net/projects/jetty">sourceforge.net</a>
	  where versions 3.x, 4.x and 5.x were produced.
	  </p>

      </ul>
      <h2>Sponsors</h2>
      <br/> 
      <ul>
	  <p>
	  <b>Intalio</b><br/>
	  The role of the development of Jetty was taken over in 2009 by 
	  <a href="http://www.intalio.com">Webtide LLC</a>, who acquired both Webtide and Mort Bay. Intalio is a company that
	  offers both products and services based on open source software and they employ many of the jetty contributors.
	  </p>

	  <p>
	  <b>Webtide</b><br/>
	  The role of leading the development of Jetty was taken over in 2006 by <a href="http://www.webtide.com">Webtide LLC</a>, 
	  formed as a joint venture between Mort Bay and partners providing marketting, sales and strategic assistance.
	  </p>

	  <p>
	  <b>Mort Bay</b><br/>
	  The Java HTTP server that became jetty was originally developed in 1995 by
	  Greg Wilkins of <a href="http://mortbay.com">Mort Bay Consulting</a> as part of an issue tracking application.
	  Versions 1.x through to 6.1.x of jetty were developed under org.mortbay packaging and Mort Bay still holds 
	  the major part of the copyright on the jetty code base.  Mort Bay directly hosted the jetty project until version
	  3.x and was the prime sponsor of development until 6.x.
	  </p>
	  
      </ul>
      <h2>Versions</h2>
      <br/>
      <ul>
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
<td> 9.0 </td>
<td> Eclipse </td>
<td> 1.7 </td>
<td> HTTP/1.1(RFC2616)<br/>Websocket(RFC6455)<br/>SPDY</td>
<td> 3.0 (3.1 on branch) </td>
<td> 2.2 </td>
<td> Stable </td>
</tr>

<tr>
<td> 8.x </td>
<td> Eclipse,<br/>codehaus </td>
<td> 1.6 </td>
<td> HTTP/1.1(RFC2616)<br/>Websocket(RFC6455)</td>
<td> 3.0 </td>
<td> 2.2 </td>
<td> Mature </td>
</tr>

<tr>
<td> 7.x </td>
<td> Eclipse,<br/>codehaus </td>
<td> 1.5,<br/>J2ME</td>
<td> HTTP/1.1(RFC2616)<br/>Websocket(RFC6455)</td>
<td> 2.5 </td>
<td> 2.1 </td>
<td> Mature </td>
</tr>


<tr>
<td> 6.x </td>
<td> codehaus </td>
<td> 1.4-1.5</td>
<td> HTTP/1.1(RFC2616)</td>
<td> 2.5 </td>
<td> 2.0 </td>
<td> Venerable </td>
</tr>

<tr>
<td> 5.x </td>
<td> Sourceforge </td>
<td> 1.2-1.5 </td>
<td> HTTP/1.1(RFC2616)</td>
<td> 2.4 </td>
<td> 2.0 </td>
<td> Deprecated </td>
</tr>

<tr>
<td> 4.x </td>
<td> Sourceforge </td>
<td> 1.2,<br/>J2ME</td>
<td> HTTP/1.1(RFC2616)</td>
<td> 2.3 </td>
<td> 1.2 </td>
<td> Ancient </td>
</tr>


<tr>
<td> 3.x </td>
<td> Sourceforge </td>
<td> 1.2 </td>
<td> HTTP/1.1(RFC2068)</td>
<td> 2.2 </td>
<td> 1.1 </td>
<td> Fossilized </td>
</tr>


<tr>
<td> 2.x </td>
<td> Mortbay </td>
<td> 1.1 </td>
<td> HTTP/1.0(RFC1945)</td>
<td> 2.1 </td>
<td> 1.0 </td>
<td> Legendary </td>
</tr>


<tr>
<td> 1.x </td>
<td> Mortbay </td>
<td> 1.0 </td>
<td> HTTP/1.0(RFC1945)</td>
<td> &nbsp; </td>
<td> &nbsp; </td>
<td> Mythical </td>
</tr>
</table>
      </ul>


	
</div>

<div id="rightcolumn">
    $sidebar		
</div>
	


EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
