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

require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");

$Nav  = new Nav();

// Set the theme for your project's web pages.
// See the Committer Tools "Phoenix" secion in the How Do I? for list of themes
// https://dev.eclipse.org/committers/
$theme = NULL;

// Define your project-wide Nav bars here.
// Format is Link text, link URL (can be http://www.someothersite.com/), target
// (_self, _blank).
$Nav->addNavSeparator("Eclipse Jetty", "/jetty/");
$Nav->addCustomNav("Documentation", "/jetty/distribution-guide", "_self", NULL);
$Nav->addCustomNav("Source code", "https://github.com/eclipse/jetty.project", "_self", NULL);
$Nav->addCustomNav("Using Jetty", "/jetty/quickstart-guide", "_self", NULL);

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
  'url' => '/jetty/downloads/', // Required
  'title' => 'Download', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Distributions, Javadoc, Checksums ' // Optional
);

$links[] = array(
  'icon' => 'fa-users', // Required
  'url' => '/jetty/contribution-guide/', // Required
  'title' => 'Contribution Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Contributions, Community' // Optional
);

$links[] = array(
  'icon' => 'fa-book', // Required
  'url' => '/jetty/distribution-guide/', // Required
  'title' => 'Distribution Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Tutorials, Howto, Features, etc.' // Optional
);

$links[] = array(
  'icon' => 'fa-support', // Required
  'url' => '/jetty/quickstart-guide/', // Required
  'title' => 'Quickstart Guide', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Quickstart, For beginners, etc.' // Optional
);

$variables['header_nav'] = array(
  'links' => $links, // Required
  'logo' => array( // Required
    'src' => '/jetty/common/images/jetty-logo.svg', // Required
    'alt' => 'Eclipse Jetty Project', // Optional
    'url' => 'http://www.eclipse.org/jetty' // Optional
    // 'target' => '_blank' // Optional
  )
);

// Set Solstice theme variables. (Array)
$App->setThemeVariables($variables);
