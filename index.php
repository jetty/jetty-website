<?php
/**
 * Copyright (c) 2005, 2017, 2018 Eclipse Foundation and others.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");
$App = new App();
$Theme = $App->getThemeClass();
include($App->getProjectCommon());

// Begin: page-specific settings.  Change these.
$pageTitle = "The Eclipse Jetty Project";
$Theme->setPageTitle($pageTitle);
$Theme->setPageKeywords("Eclipse Jetty Project, Eclipse Jetty, servlet-api, websocket, http, http2");

// Place your html content in a file called content/en_pagename.php
ob_start();
include("content/en_" . $App->getScriptName());
$html = ob_get_clean();

$Theme->setHtml($html);
$Theme->generatePage();
