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
	  <p>Jetty was originally developed by Greg Wilkins  of Mort Bay Consulting.</p>

      <p>Mort Bay is at the heart of Balmain, Sydney NSW, Australia. A former working class suburb, now yuppieville in Sydney's close inner-west.</p>

      <p>Greg was living by Mort Bay when the company was formed, hence the company name.</p>

      <p>Jetty was originally called IssueTracker (its original application) and then MBServler (Mort Bay SERVLet servER). Neither of these were much liked, so Jetty was finally picked as:</p>

	  <ul class="midlist">
			<li>it starts with a J</li>
			<li>jetty:// looks a little like http://</li>
			<li>there is a jetty in the Mort Bay logo</li>
			<li>there were no better suggestions</li>
	  </ul>
	
    </div>

    <div id="rightcolumn">
        $sidebar		
	</div>

EOHTML;


	# Generate the web page
	$App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
