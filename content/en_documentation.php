<div id="midcolumn">
    <h1><?php print $pageTitle;?></h1>
    <p>The latest documentation releases are Eclipse Jetty is below, earlier minor release versions are available in <a href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-documentation">Maven Central.</a></p>

    <table class="frame-all grid-all stretch">
        <colgroup>
            <col style="width: 25%;">
            <col style="width: 40%;">
            <col style="width: 10%;">
            <col style="width: 25%;">
        </colgroup>
        <thead>
        <tr>
            <th class="halign-left valign-top">Release Version</th>
            <th class="halign-left valign-top">   </th>
            <th class="halign-left valign-top">   </th>
            <th class="halign-left valign-top">   </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="halign-left valign-top"><p><b>Jetty 11</b></p></td>
            <td class="halign-left valign-top">
                <p>
                    <a href="/jetty/documentation/jetty-11/operations_guide.php">Operations Guide</a><br/>
                    <a href="/jetty/documentation/jetty-11/programming_guide.php">Programming Guide</a><br/>
                </p>
            </td>
            <td class="halign-left valign-top"><p><a href="http://www.eclipse.org/jetty/javadoc/11.0/index.html?overview-summary.html"> API </a></p></td>
            <td class="halign-left valign-top"><p><a href="https://github.com/eclipse/jetty.project/tree/jetty-<?php print $jetty['jetty_11.0_version']; ?>"> Source Code</a></p></td>
        </tr>
        <tr>
            <td class="halign-left valign-top"><p><b>Jetty 10</b></p></td>
            <td class="halign-left valign-top">
                <p>
                    <a href="/jetty/documentation/jetty-10/operations_guide.php">Operations Guide</a><br/>
                    <a href="/jetty/documentation/jetty-10/programming_guide.php">Programming Guide</a><br/>
                </p>
            </td>
            <td class="halign-left valign-top"><p><a href="http://www.eclipse.org/jetty/javadoc/10.0/index.html?overview-summary.html"> API </a></p></td>
            <td class="halign-left valign-top"><p><a href="https://github.com/eclipse/jetty.project/tree/jetty-<?php print $jetty['jetty_10.0_version']; ?>"> Source Code</a></p></td>
        </tr>
        <tr>
            <td class="halign-left valign-top"><p><b>Jetty 9</p></td>
            <td class="halign-left valign-top"><p><a href="/jetty/documentation/jetty-9/index.html">Documentation</a></p></td>
            <td class="halign-left valign-top"><p><a href="http://www.eclipse.org/jetty/javadoc/9.4/index.html?overview-summary.html"> API </a></p></td>
            <td class="halign-left valign-top"><p><a href="https://github.com/eclipse/jetty.project/tree/jetty-<?php print $jetty['jetty_9.4_version']; ?>"> Source Code</a></p></td>
        </tr>
        </tbody>
    </table>

    <div>
        <h2 id="_prior_versions">Previous Versions</h2>
        <p>The most recent versions of prior Jetty releases can be found <a href="previous_versions.php">here, with their associated documentation.</a></p>
        <p>Note: The canonical repository for Jetty is Maven Central.  All releases are always available there first and this download page may lag a bit update wise as post release resources are put into place.  You can always browse for Jetty releases <a href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution">here</a>.</p>
    </div>
  </div>
