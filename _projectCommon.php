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
    
    ## required by eclipse guidelines
    $Nav->addNavSeparator("Jetty", "/jetty");
    $Nav->addCustomNav("About Jetty", "/jetty/about.php", "_self", 2);
    # custom links
    $Nav->addCustom("jetty@Eclipse", "http://www.eclipse.org/jetty/", "_self", 2);
    $Nav->addCustom("jetty@codehaus", "http://jetty.mortbay.org/jetty/", "_self", 2);
    $Nav->addCustom("Jetty Powered", "http://docs.codehaus.org/display/JETTY/Jetty+Powered", "_self", 2);
    #FIXME: $Nav->addCustom("Licenses", "", "_self", 2);
    
    $Nav->addCustomNav("Downloads", "/jetty/downloads.php", "_self", 2);
    $Nav->addCustomNav("Mailing Lists", "/jetty/mailinglists.php", "_self", 2);
    $Nav->addCustomNav("Newsgroup", "/jetty/newsgroup.php", "_self", 2);
    $Nav->addCustomNav("Wiki", "http://wiki.eclipse.org/Jetty", "_self", 2);
    $Nav->addCustomNav("Source & Build", "http://wiki.eclipse.org/Jetty/Project/Building", "_self", 2);
    $Nav->addCustomNav("Project Plan", "http://www.eclipse.org/projects/project-plan.php?projectid=rt.jetty", "_self", 2);  
    $Nav->addCustomNav("Bugs", "https://bugs.eclipse.org/bugs/buglist.cgi?query_format=advanced&short_desc_type=allwordssubstr&short_desc=&product=Jetty&long_desc_type=allwordssubstr&long_desc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&status_whiteboard_type=allwordssubstr&status_whiteboard=&keywords_type=allwords&keywords=&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED", "_self", 2);   
    $Nav->addCustomNav("IP Log", "http://www.eclipse.org/projects/ip_log.php?projectid=rt.jetty", "_self", 2);  
    
?>
