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

<!-- Main content area -->
<div id="midcolumn">
    <h1><?php print $pageTitle; ?></h1>
    <p>The latest releases of Eclipse Jetty are below, or as always available in <a
                href="https://repo1.maven.org/maven2/org/eclipse/jetty">Maven Central.</a></p>

    <br/>
    <table class="frame-all grid-all stretch">
        <colgroup>
            <col style="width: 20%;">
            <col style="width: 10%;">
            <col style="width: 10%;">
            <col style="width: 20%;">
            <col style="width: 20%;">
            <col style="width: 20%;">
        </colgroup>
        <thead>
        <tr>
            <th class="tableblock halign-left valign-top">Release</th>
            <th class="tableblock halign-left valign-top"></th>
            <th class="tableblock halign-left valign-top"></th>
            <th class="tableblock halign-left valign-top"></th>
            <th class="tableblock halign-left valign-top"></th>
            <th class="tableblock halign-left valign-top"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><?php print $jetty['jetty_9.4']['version']; ?></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/<?php print $jetty['jetty_9.4']['version']; ?>/jetty-distribution-<?php print $jetty['jetty_9.4']['version']; ?>.zip">.zip</a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/<?php print $jetty['jetty_9.4']['version']; ?>/jetty-distribution-<?php print $jetty['jetty_9.4']['version']; ?>.tar.gz">.tgz</a></p>
                </td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">(<a
                            href="/jetty/download_info.php">info</a>)</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="http://www.eclipse.org/jetty/javadoc/<?php print $jetty['jetty_9.4']['version']; ?>/index.html?overview-summary.html">apidocs </a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://github.com/eclipse/jetty.project/tree/jetty-<?php print $jetty['jetty_9.4']['version']; ?>"> source</a></p>
            </td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><?php print $jetty['jetty_10.0']['version']; ?></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/<?php print $jetty['jetty_10.0']['version']; ?>/jetty-home-<?php print $jetty['jetty_10.0']['version']; ?>.zip">.zip</a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/<?php print $jetty['jetty_10.0']['version']; ?>/jetty-home-<?php print $jetty['jetty_10.0']['version']; ?>.tar.gz">.tgz</a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">(<a
                        href="/jetty/download_info.php">info</a>)</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="http://www.eclipse.org/jetty/javadoc/<?php print $jetty['jetty_10.0']['version']; ?>/index.html?overview-summary.html">apidocs </a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://github.com/eclipse/jetty.project/tree/<?php print $jetty['jetty_10.0']['version']; ?>"> source</a></p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><?php print $jetty['jetty_11.0']['version']; ?></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"></p><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/<?php print $jetty['jetty_11.0']['version']; ?>/jetty-home-<?php print $jetty['jetty_11.0']['version']; ?>.zip">.zip</a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-home/<?php print $jetty['jetty_11.0']['version']; ?>/jetty-home-<?php print $jetty['jetty_11.0']['version']; ?>.tar.gz">.tgz</a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">(<a
                        href="/jetty/download_info.php">info</a>)</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                            href="http://www.eclipse.org/jetty/javadoc/<?php print $jetty['jetty_11.0']['version']; ?>/index.html?overview-summary.html">apidocs </a></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                        href="https://github.com/eclipse/jetty.project/tree/<?php print $jetty['jetty_11.0']['version']; ?>"> source</a></p></td>
        </tr>
        </tbody>
    </table>
    <br/>
    <p><strong>Note:</strong> Release notes can be found in the <code>VERSION.txt</code> file included with the
        distribution and on the <a href="https://github.com/eclipse/jetty.project/releases">GitHub Releases</a> page for
        the Jetty project.</p>
    <p>Release notes are also made available on the <a href="https://www.eclipse.org/jetty/mailinglists.html">jetty-announce@eclipse.org
            mailing list.</a></p>

    <h3 id="what-jetty-version">What Version Do I Use?</h3>
    <div class="paragraph">
        <p>Jetty 10 and 11 are the most recent versions of Jetty and have a great many improvements over previous
            releases.</p>
        <p>While many people continue to use older versions of Jetty like 9.4 for a variety of reasons, we generally recommend using Jetty 10 or 11 as
            they represent the version of Jetty that we will actively maintain and improve over the next few years.  The decision to use Jetty 10 or 11 depends entirely on which flavor of servlet package name needs to be used.</p>
    </div>

    <h3 id="version-table">Jetty Versions</h3>
    <table class="tableblock frame-all grid-all stretch">
        <colgroup>
            <col style="width: 8%;">
            <col style="width: 10%;">
            <col style="width: 14%;">
            <col style="width: 9%;">
            <col style="width: 10%;">
            <col style="width: 6%;">
            <col style="width: 19%;">
            <col style="width: 23%;">
        </colgroup>
        <thead>
        <tr>
            <th class="tableblock halign-left valign-top">Version</th>
            <th class="tableblock halign-left valign-top">Year</th>
            <th class="tableblock halign-left valign-top">Home</th>
            <th class="tableblock halign-left valign-top">Min JVM</th>
            <th class="tableblock halign-left valign-top">Servlet</th>
            <th class="tableblock halign-left valign-top">JSP</th>
            <th class="tableblock halign-left valign-top">Status</th>
            <th class="tableblock halign-left valign-top">Protocols</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">11</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2020-</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">11 <sup>(2)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">5.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><strong>UNSTABLE / Beta</strong></p>
            </td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 (RFC 7230), HTTP/2 (RFC 7540),
                    WebSocket (RFC 6455, JSR 356), FastCGI, <strong>JakartaEE Namespace</strong><sup>(1)</sup></p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">10</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2020-</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">11 <sup>(2)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">4.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock"><strong>UNSTABLE / Beta</strong></p>
            </td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 (RFC 7230), HTTP/2 (RFC 7540),
                    WebSocket (RFC 6455, JSR 356), FastCGI</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">9.4</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2016-</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.8</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Stable</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 (RFC 7230), HTTP/2 (RFC 7540),
                    WebSocket (RFC 6455, JSR 356), FastCGI</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">9.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2015-2020</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.8 <sup>(3)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 (RFC 7230), HTTP/2 (RFC 7540),
                    WebSocket (RFC 6455, JSR 356), FastCGI</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">9.2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2014-2018</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.7 <sup>(3)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, javax.websocket, SPDY
                    v3</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">9.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2013-2014</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.7 <sup>(3)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">9.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2013-2013</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.7 <sup>(3)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.1-beta</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">8</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2009-2014</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse / Codehaus</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.6 <sup>(3)</sup></p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Venerable</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, WebSocket RFC 6455,
                    SPDY v3</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">7</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2008-2014</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse / Codehaus</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Venerable</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, WebSocket RFC 6455,
                    SPDY v3</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">6</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2006-2010</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Codehaus</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.4-1.5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Antique</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2003-2009</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.2-1.5</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.4</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Relic</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">4</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2001-2006</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.2, J2ME</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Ancient</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">3</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1999-2002</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Fossilized</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2068</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1998-2000</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Mortbay</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">2.1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Legendary</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.0 RFC1945</p></td>
        </tr>
        <tr>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1995-1998</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Mortbay</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">1.0</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">-</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">-</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">Mythical</p></td>
            <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.0 RFC1945</p></td>
        </tr>
        </tbody>
    </table>
    <div class="olist arabic">
        <ol class="arabic">
            <li>
                <p>Due to Oracle&#8217;s ownership of the "Java" trademark, usage of the javax.* namespace has been
                    restricted and the jakarta.* namespace <a
                            href="https://www.eclipse.org/lists/jakartaee-platform-dev/msg00029.html">was adopted</a> by
                    the Eclipse Foundation.</p>
            </li>
            <li>
                <p>JPMS module support is optional</p>
            </li>
            <li>
                <p>JDK9 and newer is not supported if using MultiRelease JAR Files, or Bytecode / Annotation
                    scanning.</p>
            </li>
        </ol>
    </div>

    <div class="sect2">
        <h3 id="_prior_versions">Prior Versions</h3>
        <p>The most recent versions of prior Jetty releases can be found <a href="previousversions.html">here, with
                their associated documentation.</a></p>
        <p>Note: The canonical repository for Jetty is Maven Central. All releases are always available there first and
            this download page may lag a bit update wise as post release resources are put into place. You can always
            browse for Jetty releases <a
                    href="https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution">here</a>.</p>
    </div>
    <div class="sect2">
        <h3 id="_jetty_p2_provisioning">Jetty P2 Provisioning</h3>
        <p>This provisioning address is not for general use and are provided strictly for OSGI users.</p>
        <div class="ulist">
            <ul>
                <li>
                    <p>Composite Jetty 9 P2 Provisioning:
                        http://download.eclipse.org/jetty/updates/jetty-bundles-9.x</p>
                </li>
            </ul>
        </div>
    </div>
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
