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
<style>
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        top: -5px;
        left: 105%;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>

<div id="midcolumn">
  <h1><?php print $pageTitle;?></h1>

    <div id="content">
        <div class="sect2">
            <h3 id="security-reporting">Reporting Security Issues</h3>
            <div class="paragraph">
                <p>There are a number of avenues for reporting security issues to the Jetty project available.
                    If the issue is directly related to Jetty itself then reporting to the Jetty developers is encouraged.
                    The most direct method is to mail <a href="mailto:security@webtide.com">security@webtide.com</a>.
                    Since Webtide is comprised of the active committers of the Jetty project this is our preferred reporting method.
                    We are generally flexible in how we work with reporters of security issues but we reserve the right to act in the interests of the Jetty project in all circumstances.</p>
            </div>
            <div class="paragraph">
                <p>If the issue is related to Eclipse or its Jetty integration then we encourage you to reach out to <a href="mailto:security@eclipse.org">security@eclipse.org</a>.</p>
            </div>
            <div class="paragraph">
                <p>If the issue is related to integrations with Jetty we are happy to work with you to identify the proper entity and either of the approaches above is fine.</p>
            </div>
            <div class="paragraph">
                <p>We prefer that security issues are reported directly to Jetty developers as opposed through GitHub Issues since it has no facility to tag issues as <em>private</em>.</p>
            </div>
            <div class="paragraph">
                <p>For more information on the process by which we handle security issues, please refer to <a href="/jetty/security_processes.php">this guide.</a></p>
            </div>
        </div>
        <div class="sect2">
            <h3 id="security-reports">Jetty Security Reports</h3>
            <div class="paragraph">
                <p>The following sections provide information about Jetty security issues.</p>
            </div>
            <table class="tableblock frame-all grid-all stretch">
                <caption class="title">Table 1. Resolved Issues</caption>
                <colgroup>
                    <col style="width: 10%;"/>
                    <col style="width: 10%;"/>
                    <col style="width: 10%;"/>
                    <col style="width: 10%;"/>
                    <col style="width: 10%;"/>
                    <col style="width: 10%;"/>
                    <col style="width: 40%;"/>
                </colgroup>
                <thead>
                <tr>
                    <th class="tableblock halign-left valign-top">Date</th>
                    <th class="tableblock halign-left valign-top">ID</th>
                    <th class="tableblock halign-left valign-top">Exploit</th>
                    <th class="tableblock halign-left valign-top">Severity</th>
                    <th class="tableblock halign-left valign-top">Affects</th>
                    <th class="tableblock halign-left valign-top">Fixed Version</th>
                    <th class="tableblock halign-left valign-top">Comment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/11/17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tooltip">TESTCVE-2020-27218<span class="tooltiptext">Testing</span></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.0.RC0 - 9.4.34, 10.0.0.alpha0 - 10.0.0.beta2, 11.0.0.alpha0 - 11.0.0.beta2</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.35, 10.0.0.beta3, 11.0.0.beta3</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27218">If GZIP request body inflation is enabled and requests
                                from different clients are multiplexed onto a single connection, and if an attacker can send a request with a body that is received entirely but not consumed by the application, then a subsequent request on the same connection will see that body prepended to its body.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/10/19</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2020-27216</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.32</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.3.29, 9.4.33</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27216">If using a shared temp directory on UNIX-based systems an attacker could exploit the creation of a randomly generated file or directory allowing them to execute code and allowing for local privilege escalation.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/07/09</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-17638</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.27, &lt; = 9.4.29</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.30</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17638">In the case of too large response headers, Jetty throws an exception to produce an HTTP 431 error. When this happens, the ByteBuffer containing the HTTP response headers is released back to the ByteBufferPool twice.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/11/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9518</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.21, &lt; = 9.4.23</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.24</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17632">The generation of default unhandled Error response content (in text/html and text/json Content-Type) does not escape Exception messages in stacktraces included in error output.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9518</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9518">Some HTTP/2 implementations are vulnerable to a flood of empty frames, potentially leading to a denial of service.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9516</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9516">Some HTTP/2 implementations are vulnerable to a header leak, potentially leading to a denial of service.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9515</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9515">Some HTTP/2 implementations are vulnerable to a settings flood, potentially leading to a denial of service when an attacker sent a stream of SETTINGS frames to the peer.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9514</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9514">Some HTTP/2 implementations are vulnerable to a reset flood, potentially leading to a denial of service.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9512</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9512">Some HTTP/2 implementations are vulnerable to ping floods which could lead to a denial of service.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-9511</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9511">Some HTTP/2 implementations are vulnerable to window size manipulation and stream prioritization manipulation which could lead to a denial of service.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-10247</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.16</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.28, 9.3.27, 9.4.17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10247">If no webapp was mounted to the root namespace and a 404 was encountered, an HTML page would be generated displaying the fully qualified base resource location for each context.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-10246</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.16</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.28, 9.3.27, 9.4.17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10246">Use of <code>DefaultServlet</code> or <code>ResourceHandler</code> with indexing was vulnerable to XSS behaviors to expose the directory listing on Windows operating systems.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2019-10241</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.15</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.27, 9.3.26, 9.4.16</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10241">Use of <code>DefaultServlet</code> or <code>ResourceHandler</code> with indexing was vulnerable to XSS behaviors to expose the directory listing.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2018-12538</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.0, &lt; = 9.4.8</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-12538"><code>HttpSessions</code> present specifically in the FileSystem’s storage could be hijacked/accessed by an unauthorized user.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2018-12536</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/209.html">CWE-202</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-12536"><code>InvalidPathException</code> Message reveals webapp system path.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2017-7658</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-7658">Too Tolerant Parser, Double Content-Length + Transfer-Encoding + Whitespace.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2017-7657</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7657">HTTP/1.1 Request smuggling with carefully crafted body content (Does not apply to HTTP/1.0 or HTTP/2).</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2017-7656</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-7656">HTTP Request Smuggling when used with invalid request headers (for HTTP/0.9).</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2016/05/31</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CVE-2016-4800</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.3.0, &lt; = 9.3.8</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.3.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.ocert.org/advisories/ocert-2016-001.html">Alias vulnerability allowing access to protected resources within a webapp on Windows.</a></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2015/02/24</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://blog.gdssecurity.com/labs/2015/2/25/jetleak-vulnerability-remote-leakage-of-shared-buffers-in-je.html">CVE-2015-2080</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=9.2.3 &lt;9.2.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JetLeak exposure of past buffers during HttpParser error</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2013/11/27</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://en.securitylab.ru/lab/PT-2013-65">PT-2013-65</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=9.0.0 &lt;9.0.5</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.0.6
                            <a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=418014">418014</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Alias checking disabled by NTFS errors on Windows.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2013/07/24</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=413684">413684</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=7.6.9 &lt;9.0.5</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.6.13,8.1.13,9.0.5
                            <a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=413684">413684</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Constraints bypassed if Unix symlink alias checker used on Windows.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2011/12/29</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.ocert.org/advisories/ocert-2011-003.html">CERT2011-003</a> <a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4461">CVE-2011-4461</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">All versions</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.6.0.RCO
                            <a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=367638">Jetty-367638</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Added ContextHandler.setMaxFormKeys (intkeys) to limit the number of parameters (default 1000).</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/120541">CERT2011-003</a> <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555">CERT2011-003</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JVM&lt;1.6u19</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">jetty-7.01.v20091125, jetty-6.1.22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Work
                            around by turning off SSL renegotiation in Jetty. If using JVM &gt; 1.6u19
                            setAllowRenegotiate(true) may be called on connectors.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/06/18</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Jetty-1042</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 6.1.18, &lt; = 7.0.0.M4</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.19, 7.0.0.Rc0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Cookie leak between
                            requests sharing a connection.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/04/30</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/402580">CERT402580</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 6.1.16, &lt; = 7.0.0.M2</p></td>
                    <td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">
                                <p>5.1.15, 6.1.18, 7.0.0.M2</p>
                            </div>
                            <div class="paragraph">
                                <p>Jetty-1004</p>
                            </div></div></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">View arbitrary disk content in some specific configurations.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/12/22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/553235">CERT553235</a> <a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2007-6672">CVE-2007-6672</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.rrc0-6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">
                                <p>6.1.7</p>
                            </div>
                            <div class="paragraph">
                                <p>CERT553235</p>
                            </div></div></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Static content visible in WEB-INF and past security constraints.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/438616">CERT438616</a> <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5614">CVE-2007-5614</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc1 (patch in CVS for jetty5)</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Single quote in
                            cookie name.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/237888">CERT237888&gt;</a> <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5613">CVE-2007-5613</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc0 (patch in CVS for jetty5)</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">XSS in demo dup
                            servlet.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/03</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/212984">CERT212984
                                &gt;</a> <a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5615">CVE-2007-5615</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc0 (patch in CVS for jetty5)</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">CRLF
                            Response splitting.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/11/22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-6969">CVE-2006-6969</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.0, &lt;6.0.2, &lt;5.1.12, &lt;4.2.27</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.0pre3, 6.0.2, 5.1.12,
                            4.2.27</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Session ID predictability.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/06/01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-2759">CVE-2006-2759</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.0.*, &lt;6.0.0Beta17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.0.0Beta17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JSP source
                            visibility.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/01/05</p></td>
                    <td class="tableblock halign-left valign-top"></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;5.1.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">5.1.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed //security
                            constraint bypass on Windows.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2005/11/18</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-2758">CVE-2006-2758</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;5.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">5.1.6, 6.0.0Beta4</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JSP source visibility.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2004/02/04</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JSSE 1.0.3_01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;4.2.7</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.2.7</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Upgraded JSSE
                            to obtain downstream security fix.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2002/09/22</p></td>
                    <td class="tableblock halign-left valign-top"></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;4.1.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.1.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed CGI servlet remove
                            exploit.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2002/03/12</p></td>
                    <td class="tableblock halign-left valign-top"></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;3.1.7</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.0.RC2, 3.1.7</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed // security
                            constraint bypass.</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2001/10/21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;3.1.3</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">3.1.3</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed trailing null security
                            constraint bypass.</p></td>
                </tr>
                </tbody>
            </table>
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
