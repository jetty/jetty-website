<?php
/**
 * Copyright (c) 2014-2017, 2018 Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * Contributors:
 *   Christopher Guindon (Eclipse Foundation) - Initial implementation
 *   Eric Poirier (Eclipse Foundation)
 *
 * SPDX-License-Identifier: EPL-2.0
 */
require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");
require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");

$Nav  = new Nav();

// Set the theme for your project's web pages.
// See the Committer Tools "Phoenix" secion in the How Do I? for list of themes
// https://dev.eclipse.org/committers/
$theme = "solstice";

$Theme->setLayout('thin');
$Theme->setDisplayFooterPrefix(FALSE);

// Define your project-wide Nav bars here.
// Format is Link text, link URL (can be http://www.someothersite.com/), target
// (_self, _blank).
$Nav->addNavSeparator("Eclipse Jetty", "/jetty/");
$Nav->addCustomNav("About", "/jetty/about.html", "_self", NULL);
$Nav->addCustomNav("Source code", "https://github.com/eclipse/jetty.project", "_self", NULL);
$Nav->addCustomNav("Project Page", "https://projects.eclipse.org/projects/rt.jetty", "_self", NULL);
$Nav->addCustomNav("IP Log", "http://www.eclipse.org/projects/ip_log.php?projectid=rt.jetty", "_self", NULL);
$Nav->addCustomNav("Enter Bug", "https://github.com/eclipse/jetty.project/issues/new", "_self", NULL);

// Initialize custom solstice $variables.
$variables = array();

// Add classes to <body>. (String)
$variables['body_classes'] = '';

// Insert custom HTML in the breadcrumb region. (String)
$variables['breadcrumbs_html'] = "";

// Hide the breadcrumbs. (Bool)
$variables['hide_breadcrumbs'] = FALSE;

// Insert HTML before the left nav. (String)
$variables['leftnav_html'] = '';

// Update the main container class (String)
$variables['main_container_classes'] = 'container';

// Insert HTML after opening the main content container, before the left
// sidebar. (String)
$variables['main_container_html'] = '';

// Insert header navigation for project websites.
// Bug 436108 - https://bugs.eclipse.org/bugs/show_bug.cgi?id=436108
$links = array();
$links[] = array(
  'icon' => 'fa-download', // Required
  'url' => '/jetty/download.html', // Required
  'title' => 'Download', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Distributions, Javadoc, Checksums' // Optional
);

$links[] = array(
  'icon' => 'fa-users', // Required
  'url' => '/jetty/contribution-guide/index.html', // Required
  'title' => 'Contribution Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Contributions, Community' // Optional
);

$links[] = array(
  'icon' => 'fa-book', // Required
  'url' => '/jetty/operations-guide/index.html', // Required
  'title' => 'Operations Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Tutorials, How-tos, Features, etc.' // Optional
);

/*$links[] = array(
  'icon' => 'fa-support', // Required
  'url' => '/jetty/getting-started-guide/index.html', // Required
  'title' => 'Getting Started Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'For beginners, the best way to get up and running fast, etc.' // Optional
);*/

$links[] = array(
  'icon' => 'fa-anchor', // Required
  'url' => '/jetty/programming-guide/index.html', // Required
  'title' => 'Programming Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Put Jetty inside your app!' // Optional
);

$links[] = array(
    'icon' => 'fa-rocket', // Required
    'url' => '/jetty/documentation.html', // Required
    'title' => 'Documentation Hub', // Required
    // 'target' => '_blank', // Optional
    'text' => 'Current and previous versions of the Jetty documentation!' // Optional
);

$variables['header_nav'] = array(
  'links' => $links, // Required
  'logo' => array( // Required
    'src' => '/jetty/common/images/jetty-logo.svg', // Required
    'alt' => 'Eclipse Jetty Project', // Optional
    'url' => '/jetty' // Optional
    // 'target' => '_blank' // Optional
  )
);

// Set Solstice theme variables. (Array)
$App->setThemeVariables($variables);
