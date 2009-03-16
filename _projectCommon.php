<?php

	# Set the theme for your project's web pages.
	# See the Committer Tools "How Do I" for list of themes
	# https://dev.eclipse.org/committers/
	# Optional: defaults to system theme 
	$theme = "Nova";

	# Define your project-wide Nav bars here.
	# Format is Link text, link URL (can be http://www.someothersite.com/), target (_self, _blank), level (1, 2 or 3)
	# these are optional
	$Nav->addNavSeparator("Project Home", 	"downloads.php");
	$Nav->setLinkList( array() );
    $Nav->addNavSeparator( "Project Name", "/jetty" );
    $Nav->addCustomNav( "About This Project", "/projects/project_summary.php?projectid=rt.jetty", "", 1  );
	#$Nav->addCustomNav("Downloads", 		"downloads.php", 	"_self", 2);
	#$Nav->addCustomNav("Installation", 		"install.php", 		"_self", 2);
	#$Nav->addCustomNav("FAQ", 				"faq.php", 			"_self", 2);




?>
