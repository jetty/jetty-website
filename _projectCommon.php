<?php

	# Set the theme for your project's web pages.
	# See the Committer Tools "How Do I" for list of themes
	# https://dev.eclipse.org/committers/
	# Optional: defaults to system theme 
	$theme = "Nova";
	include("sidebar.php");

	# Define your project-wide Nav bars here.
	# Format is Link text, link URL (can be http://www.someothersite.com/), target (_self, _blank), level (1, 2 or 3)
	# these are optional
	$Nav->setLinkList( array() );
    $Nav->addNavSeparator( "Jetty Home", "/jetty" );
    $Nav->addCustomNav("About", "/projects/project_summary.php?projectid=rt.jetty", "_self", 2  );
	$Nav->addCustomNav("Mailing Lists", "/jetty/mailinglists.php", "_self", 2);
	$Nav->addCustomNav("Newsgroup", "/jetty/newsgroup.php", "_self", 2);





?>
