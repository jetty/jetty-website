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
$Theme->setLayout('default');

// Shared variables/configs for all pages of your website.
require_once('_projectCommon.php');

// Begin: page-specific settings. Change these.
$pageTitle = "Jetty 10 Programming Guide";
$Theme->setPageAuthor('Jesse McConnell');
$Theme->setPageKeywords('jetty servlet jakartaee application container jsp');
$Theme->setPageTitle($pageTitle);

if (isset($Nav)) {
    $Theme->setNav($Nav);
}

$variables = array();
$variables['main_container_classes'] = 'container-full';
$variables['header_nav'] = "";
$Theme->setThemeVariables($variables);

// Place your html content in a file called content/en_pagename.php
ob_start();
include ("content/en_10_" . $App->getScriptName());
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