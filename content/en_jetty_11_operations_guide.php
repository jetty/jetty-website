<?php
/**
 * Copyright (c) 2014, 2015, 2016, 2018 Eclipse Foundation.
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
?>


<?php include("en_js_iframe.php"); ?>


<!-- Main content area -->
<div id="midcolumn">
    <p>
        Note: This documentation is for Jetty 11, if you are using another version of Jetty the following table will help get you where you need to go!
    </p>

    <?php include("en_doc_table.php"); ?>

    <br/>

    <iframe id="embeddoc" onload="resizeIframe(this)" style="border: none" src="/jetty/documentation/jetty-11/operations-guide/index.html" title="Jetty 11: Operations Guide"></iframe>
</div>
<!-- ./end  #midcolumn -->

<!-- Start of the right column -->
<!--
<div id="rightcolumn">
  <div class="sideitem">
    <h2>Related Links</h2>
    <ul>
      <li><a target="_self" href="/eclipse.org-common/themes/solstice/docs/">Documentation</a></li>
    </ul>
  </div>
</div>
-->
<!-- ./end  #rightcolumn -->
