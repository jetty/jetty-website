<?php
/**
 * Copyright (c) 2014-2017, 2018 Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * Contributors:
 * Christopher Guindon (Eclipse Foundation) - Initial implementation
 * Eric Poirier (Eclipse Foundation)
 *
 * SPDX-License-Identifier: EPL-2.0
 */

require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");

$App = new App();
$Theme = $App->getThemeClass();

// Shared variables/configs for all pages of your website.
require_once ('_projectCommon.php');

// Begin: page-specific settings. Change these.
$pageTitle = "Eclipse Jetty - Home";
$Theme->setPageAuthor('Jesse McConnell');
$Theme->setPageKeywords('jetty servlet jakartaee application container jsp');
$Theme->setPageTitle($pageTitle);

if (isset($Nav)) {
  $Theme->setNav($Nav);
}

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
  'url' => '/downloads/', // Required
  'title' => 'Download', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Eclipse Distribution, Update Site, Dropins' // Optional
);

$links[] = array(
  'icon' => 'fa-users', // Required
  'url' => '/users/', // Required
  'title' => 'Geting Involved', // Required
  // 'target' => '_blank', // Optional
  'text' => 'CVS, Workspace Setup, Wiki, Committers' // Optional
);

$links[] = array(
  'icon' => 'fa-book', // Required
  'url' => 'http://help.eclipse.org/luna/index.jsp', // Required
  'title' => 'Documentation', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Tutorials, Examples, Videos, Online Reference' // Optional
);

$links[] = array(
  'icon' => 'fa-support', // Required
  'url' => '/forums/', // Required
  'title' => 'Support', // Required
  // 'target' => '_blank', // Optional
  'text' => 'Bug Tracker, Newsgroup Professional Support' // Optional
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

// CFA Link - Big orange button in header
$variables['btn_cfa'] = array(
  'hide' => FALSE, // Optional - Hide the CFA button.
  'html' => '', // Optional - Replace CFA html and insert custom HTML.
  'class' => 'btn btn-huge btn-warning', // Optional - Replace class on CFA link.
  'href' => '//www.eclipse.org/jetty/downloads/', // Optional - Replace href on CFA link.
  'text' => '<i class="fa fa-download"></i> Download' // Optional - Replace text of CFA link.
);

// Set Solstice theme variables. (Array)
$App->setThemeVariables($variables);

// Place your html content in a file called content/en_pagename.php
ob_start();
include ("content/en_" . $App->getScriptName());
$html = ob_get_clean();
$Theme->setHtml($html);

// Insert extra html before closing </head> tag.
// $App->AddExtraHtmlHeader('<link rel="stylesheet" type="text/css"
// href="style.css" media="screen" />');

// Insert script/html before closing </body> tag.
// $App->AddExtraJSFooter('<script type="text/javascript"
// src="script.min.js"></script>');

// Generate the web page
$Theme->generatePage();
