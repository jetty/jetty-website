<?php
/**
 * Copyright (c) 2018 Eclipse Foundation and others.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
require_once ($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");

// Define your project-wide Nav bars here.
$Nav = new Nav();
$Nav->addCustomNav("About This Project", "https://projects.eclipse.org/projects/rt.jetty", "", 1);
$Theme->setNav($Nav);
