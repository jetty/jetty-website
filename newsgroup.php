<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php"); 	require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php"); 	$App 	= new App();	$Nav	= new Nav();	$Menu 	= new Menu();		include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'
  
    #
	# Begin: page-specific settings.  Change these. 
	$pageTitle 		= "Eclipse Jetty - Newsgroup";
	$pageKeywords	= "Jetty, Servlets, Async, Web Server, Web Client, Eclipse RT, Eclipse Runtime, Newsgroup";
	$pageAuthor		= "jmcconnell";
	
	# Paste your HTML content between the EOHTML markers!	
	$html = <<<EOHTML

	<div id="midcolumn">
		<h1>Newsgroup</h1>
		<p>
		    Jetty newsgroup is a place where our community can discuss general topics related with the project. It's a right place to ask questions about Jetty usage, share feedback and request a help. You can connect to the newsgroup by <a href="news://news.eclipse.org/eclipse.jetty">news://news.eclipse.org/eclipse.jetty</a>. If you need instructions - please see below.
		</p>
		<h2>Get the password</h2>
		<p>
            In order to access newsgroup you should request a free password by filling the registration form on <a href="http://www.eclipse.org/newsgroups/register.php">http://www.eclipse.org/newsgroups/register.php</a>. You'll receive login credentials by e-mail shortly after registering. You can work with newsgroups using simple web interface or setup your favorite NNTP news reader like Outlook, Thunderbird, etc.
        </p>
        <h2>Access through Web interface</h2>
        <p>
            You can work with newsgroup through simple and useful web interface, which allows reading posts and writing answers. Use following link to access the Jetty newsgroup through web interface:<br/><a href="http://www.eclipse.org/newsportal/thread.php?group=eclipse.jetty">http://www.eclipse.org/newsportal/thread.php?group=eclipse.jetty</a>.
        </p>
        <h2>Access through news readers</h2>
        <p>
            You can use any news reader, which supports NNTP. The most popular mail clients like Outlook and Thunderbird can be used to work with newsgroups. In order to setup any news reader use following settings:
            <ul>
                <li>News server: news.eclipse.org</li>
                <li>Port: 119, or 80 for firewalled users</li>
                <li>SSL: no</li>
                <li>UserID and Password are provided during subscription.</li>                                                
            </ul>
        </p>
		<h2>Frequently asked questions</h2>
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
		    <b>What should I do before asking the question?</b>
		</p>
		<p>
		    Development team will be really appreciated if before asking the question you can try to find the answer in previous posts by browsing or searching them.
		</p>
		<p>
		    <b>I found a bug, should I post it to the newsgroup?</b>
		</p>
		<p>
		    If you are sure that the problem caused by Jetty, then create new item on Bugzilla. If you have doubts then post a question to the newsgroup. 
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
