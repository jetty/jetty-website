<?php  																														    

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
		    Mailing lists are a primary communication channel with the Jetty development team. If you are interested in getting announcements for new versions, or want to participate in discussions of development or integration topics, then you can subscribe to one of the following mailing lists.  If you want to track the svn commits for the Jetty project then there is a list for this as well.
		</p>
		<div class="homeitem3col">	
			<h3>Mailing Lists</h3>
            <ul>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-announce">jetty-announce@eclipse.org</a></b> - A mail list for announcement of new Jetty versions and events. It supposed that all announcements will come from development team, so if you are not Jetty committer, please don't post to this list.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-announce">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-announce/maillist.html">Mailing list archive</a>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-dev">jetty-dev@eclipse.org</a></b> - A mail list for developer discussion. It's a place, where Jetty committers, contributors and integrators discuss all topics related with project development.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-dev">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.html">Mailing list archive</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-dev/maillist.rss">RSS Feed</a><br/>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-defects">jetty-defects@eclipse.org</a></b> - A mail list for defects reporting. If you found a defect, you can send report here. Nevertheless the preferred place for defects reporting is Bugzilla.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-defects">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-defects/maillist.html">Mailing list archive</a>
                </li>
                <li>
                    <b><a href="https://dev.eclipse.org/mailman/listinfo/jetty-commit">jetty-commit@eclipse.org</a></b> - A mail list for svn commit messages.  Posts to this list will be ignored.<br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="https://dev.eclipse.org/mailman/listinfo/jetty-commit">Subscribe/unsubscribe instructions</a><br/>
                    <img src="/jetty/images/arrow.gif"></img>&nbsp;&nbsp;<a href="http://dev.eclipse.org/mhonarc/lists/jetty-commit/maillist.html">Mailing list archive</a>
                </li>
            </ul>
		</div>
		<h2>Frequently asked questions</h2>
		<p>
		    <b>What I need to do in order to use mailing lists?</b>
		</p>
		<p>
		    First of all you need to subscribe to the mailing list. Please follow subscribe instructions. As soon as you will complete subscription process, you will get posts from mailing list to your mailbox. You can also post to mailing list by sending e-mails to mailing list address.
		</p>
		<p>
		    <b>You have mailing lists and newsgroups. What is the difference and what should I use?</b>
        </p>		    
        <p>
		    Mailing lists are mostly used for communication between Jetty committers, integrators, contributors and getting announcements from development team. Newsgroups are aimed to organize general discussions in wider community.
		</p>
		<p>
		    Thus, if you use Jetty and need to get the support or ask questions, then you should post to the newsgroup.<br/>
		    If you are Jetty committer, contributor or integrator, then post to the <a href="https://dev.eclipse.org/mailman/listinfo/jetty-dev">jetty-dev@eclipse.org</a> mailing list.<br/>
		    If you want to get announcement about new Jetty versions, then subscribe to the <a href="https://dev.eclipse.org/mailman/listinfo/jetty-announce">jetty-announce@eclipse.org</a> mailing list.
		</p>
		<p>
		    <b>Can I review mailing lists?</b>
		</p>		
		<p>
		    Mailing list archives allows you to review all posts though simple web interface. You don't need to subscribe or register in order to have access to archives.
		</p>
		<p>
		    <b>I subscribed to the mailing list, but receive only new posts. Where I can find old posts?</b>
		</p>
		<p>
		    Please take a look to mailing list archive. There you can find all posts.
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
