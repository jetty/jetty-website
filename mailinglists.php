<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

	#
	# Begin: page-specific settings.  Change these. 
	$pageTitle 		= "Eclipse RT - Jetty - Mailing Lists";
	$pageKeywords	= "Jetty, Servlets, Async, Web Server, Web Client, Mailing Lists, Eclipse RT, Eclipse Runtime";
	$pageAuthor		= "jmcconnell";
	
	# Paste your HTML content between the EOHTML markers!	
	$html = <<<EOHTML

	<div id="midcolumn">
		<h1>Mailing Lists</h1>
		<p>
		    Mailing lists are a primary communication channel with the Jetty development team. If you are interested in getting announcements for new versions, or want to participate in discussions of development or integration topics, you can subscribe to one of the following mailing lists.  You may also track svn commits for the Jetty project.
		</p>
		<div class="homeitem3col">	
			<h3>Mailing Lists on Eclipse</h3>
            <ul>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-announce">jetty-announce@eclipse.org</a></b> - A mail list for the Jetty team to announce new versions of Jetty and events related to Jetty. Subscribe to this list if you are interested in this information. Please be aware that only Jetty committers can make announcements, so all other subscribers please do not post to this list.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-announce">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-announce/maillist.html">Mailing list archive</a>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-dev">jetty-dev@eclipse.org</a></b> - A mail list for developer discussion. It's a place, where Jetty committers, contributors and integrators discuss all topics related to project development.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-dev">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html">Mailing list archive</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.rss">RSS Feed</a><br/>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-commit">jetty-commit@eclipse.org</a></b> - A mail list for svn commit messages.  Posts to this list will be ignored.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-commit">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-commit/maillist.html">Mailing list archive</a>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-users">jetty-users@eclipse.org</a></b> - A mail list for user discussion. <br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-users">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-users/maillist.html">Mailing list archive</a>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-build">jetty-build@eclipse.org</a></b>
		    - A mail list for jetty build notifications. <br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-build">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-build/maillist.html">Mailing list archive</a>
                </li>
            </ul>
            
            <h3>Mailing Lists on codehaus</h3>
            Mailing lists for Jetty extensions and for older versions of Jetty can be found at <a href="http://xircles.codehaus.org/projects/jetty/lists">codehaus</a>.
		</div>
		<h2>Frequently Asked Questions</h2>
		<div id="subscribe">
		<p>
		    <b>What I need to do to use mailing lists?</b>
		</p>
		<p>
		    First, you need to subscribe the mailing list. To subscribe, follow these <a href="https://dev.eclipse.org/mailman/listinfo/jetty-commit">instructions</a>. When you complete the subscription process, you will receive email from the mailing list.
		</p>
		<p>
            You can post to mailing list by sending e-mails to the list's email address.
        </p>
        </div>
        <div id="archives">
		<p>
		    <b>Can I review mailing lists?</b>
		</p>		
		<p>
		    Yes, the mailing list <a href="http://dev.eclipse.org/mhonarc/lists/jetty-users/maillist.html">archives</a> allow you to review all posts through a simple web interface. You don't need to subscribe or register in order to have access to the archives. 
		</p>
		</div>
		<div id="oldposts">
		<p>
		    <b>I subscribed to the mailing list, but receive only new posts. Where can I find old posts?</b>
		</p>
		<p>
		    You can find the old posts in the mailing list <a href="http://dev.eclipse.org/mhonarc/lists/jetty-users/maillist.html">archive</a>.
		</p>
		</div>
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
