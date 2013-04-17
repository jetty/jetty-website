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
	  <p><img alt="Jetty Logo" src="/jetty/images/jetty-logo-80x22.png"/></p>
	  
	  <p>The Jetty projects has was started in 1995 and since then has been associated with many names and brands:</p>
	  
      <h2>Distributions</h2>
      <br/>
      <ul>
        <li>
	  <p>
	  <b>Jetty</b> <br/> 
	  The <a href="http://eclipse.org/jetty">Jetty Web Server</a> provides an HTTP server and Servlet container capable of
	  serving static and dynamic content either from a standalone or embedded instantiations.   From jetty-7 on, the jetty
	  webserver and other core compoments are hosted by the Eclipse Foundation. The project provides:</p>
	  <ul>
	    <li>Asynchronous HTTP Server</li>
	    <li>Standards based Servlet Container</li>
	    <li><a href="http://en.wikipedia.org/wiki/Web_Sockets">Web Sockets</a> server</li>
	    <li><a href="http://en.wikipedia.org/wiki/SPDY">SPDY</a> server</li>
	    <li>Asynchronous HTTP Client</li>
	    <li>OSGi, JNDI, JMX, JASPI, AJP support</li>
	  </ul>
	  <br/>
    </li>
    
    <li>
    <p>
    <b>Hightide</b> <br/> 
    A note about Jetty Hightide.  Previous releases of Jetty (6, 7 and 8) each released an additional distribution that contained some 3rd party integrations to give a more JEE experience however with Jetty 9 we have stopped providing
    this integration.  What we have found is the vast majority of our users simply start with the jetty-distribution and then layer in whatever extra technologies they want to use, either into the distribution itself or within their
    web applications.  Technologies like JNDI, JMX, and Annotations have always existed in the stock jetty-distribution to weave such things together and that will remain the case.  
    </p>
    </li>
    
    <li>
	  <p>
	  <b>Other</b> <br/> 
	  Previous releases of Jetty have been available in many forms and distributions, including the jetty-maven-plugin (which is now hosted at eclipse), debian and RPMs from 
	  <a href="http://jetty.codehaus.org" rel="nofollow">jetty@codehaus</a> and as part of the <a href="http://geronimo.apache.org/">Geronimo JEE application server</a> from apache.
	  </p>
    </li>
    </ul>
      <h2>Homes</h2>
      <br/>
      <ul>
	  <li>
	  <p>
	  <b>Eclipse</b><br/>
	  In 2009, the Jetty project moved its core components to be a project of the <a href="http://eclipse.org/jetty">Eclipse Foundation</a>,
	  in order to improve the IP processes and broaden the licensing and community of the project.  As of Jetty 9 the project has fully moved to the Eclipse Foundation.
	  </p>
	  </li>
	  <li>
	  <p>
	  <b>Codehaus</b><br/>
	  In 2005, the jetty project moved to <a href="http://codehaus.org" rel="nofollow">the codehaus</a> for its hosting services and 
	  open source community.  In 2009, after the core components of Jetty moved to eclipse, the jetty @ codehaus project continues to provide
	  integrations, extensions and packaging of jetty.
	  </p>
	  </li>
	  <li>
	  <p>
	  <b>Sourceforge</b><br/>
	  From 2000 to 2005, the jetty project was hosted at <a href="http://sourceforge.net/projects/jetty" rel="nofollow">sourceforge.net</a>
	  where versions 3.x, 4.x and 5.x were produced.
	  </p>
    </li>
      </ul>
      <h2>Sponsors</h2>
      <br/> 
      <ul>
      <li>
	  <p>
	  <b>Intalio</b><br/>
	  The role of the development of Jetty was taken over in 2009 by 
	  <a href="http://www.intalio.com">Webtide LLC</a>, who acquired both Webtide and Mort Bay. Intalio is a company that
	  offers both products and services based on open source software and they employ many of the jetty contributors.
	  </p>
    </li>
    <li>
	  <p>
	  <b>Webtide</b><br/>
	  The role of leading the development of Jetty was taken over in 2006 by <a href="http://www.webtide.com">Webtide LLC</a>, 
	  formed as a joint venture between Mort Bay and partners providing marketting, sales and strategic assistance.
	  </p>
    </li>
    <li>
	  <p>
	  <b>Mort Bay</b><br/>
	  The Java HTTP server that became jetty was originally developed in 1995 by
	  Greg Wilkins of <a href="http://mortbay.com">Mort Bay Consulting</a> as part of an issue tracking application.
	  Versions 1.x through to 6.1.x of jetty were developed under org.mortbay packaging and Mort Bay still holds 
	  the major part of the copyright on the jetty code base.  Mort Bay directly hosted the jetty project until version
	  3.x and was the prime sponsor of development until 6.x.
	  </p>
	  </li>
      </ul>
      <h2>Versions</h2>
      <br/>
      <ul>
      <li>
	  <table border="1" cellpadding="2">
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
  </li>
      </ul>


	
</div>

<div id="rightcolumn">
    $sidebar		
</div>
	


EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
