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
