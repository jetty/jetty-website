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
                <p>The following sections provide information about Jetty security issues. Mouse-over the CVE IDs for additional information related to each issue.</p>
            </div>
            <table class="tableblock frame-all grid-all stretch">
                <caption class="title">Table 1. Resolved Issues</caption>
                <colgroup>
                    <col style="width: 16%;"/>
                    <col style="width: 17%;"/>
                    <col style="width: 17%;"/>
                    <col style="width: 17%;"/>
                    <col style="width: 17%;"/>
                    <col style="width: 16%;"/>
                </colgroup>
                <thead>
                <tr>
                    <th class="tableblock halign-left valign-top">Date</th>
                    <th class="tableblock halign-left valign-top">ID</th>
                    <th class="tableblock halign-left valign-top">Exploit</th>
                    <th class="tableblock halign-left valign-top">Severity</th>
                    <th class="tableblock halign-left valign-top">Affects</th>
                    <th class="tableblock halign-left valign-top">Fixed Version</th>
                </tr>
                </thead>
                <tbody>
		<tr>
 <!--
                 <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                    <td class="tableblock halign-left valign-top">
                      <p class="tableblock">
                        <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE- - " title="">CVE- - </a>
                      </p>
                    </td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                </tr>
                 -->
                 <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2023/04/18</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-26049" title="Cookie parsing of quoted values can exfiltrate values from other cookies.">CVE-2023-26049</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><=9.4.50, <=10.013, <=11.0.13, <=12.0.0.alpha3</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.51, 10.0.14, 11.0.14, 12.0.0.beta0</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2023/04/18</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-26048" title="OutOfMemoryError for large multipart without filename read via request.getParameter()">CVE-2023-26048</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><=9.4.50, <=10.0.13, <=11.0.13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.51, 10.0.14, 11.0.14</p></td>
                </tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2022/07/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2191" title="SslConnection does not release pooled ByteBuffers in case of errors.">CVE-2022-2191</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><= 10.0.9, <= 11.0.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">10.0.10, 11.0.10</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2022/07/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2047" title="Invalid URI parsing may produce invalid HttpURI.authority.">CVE-2022-2047</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><= 9.4.46, <= 10.0.9, <= 11.0.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.47, 10.0.10, 11.0.10</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2022/07/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2048" title="Invalid HTTP/2 requests can lead to denial of service.">CVE-2022-2048</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><= 9.4.46, <= 10.0.9, <= 11.0.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.47, 10.0.10, 11.0.10</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/07/15</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34429" title="URIs can be crafted using some encoded characters to access the content of the WEB-INF directory and/or bypass some security constraints.">CVE-2021-34429</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.37 - 9.4.42, 10.0.1 - 10.0.5, 11.0.1 - 11.0.5</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.43, 10.0.6, 11.0.6</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/06/22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34428" title="If an exception is thrown from the SessionListener#sessionDestroyed() method, then the session ID is not invalidated in the session ID manager.">CVE-2021-34428</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><= 9.4.40, <= 10.0.2, <= 11.0.2</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.41, 10.0.3, 11.0.3</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/06/08</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-28169" title="Requests to the ConcatServlet and WelcomeFilter are able to access protected resources within the WEB-INF directory.">CVE-2021-28169</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><= 9.4.40, <= 10.0.2, <= 11.0.2</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.41, 10.0.3, 11.0.3</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/04/01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-28165" title="When using SSL/TLS with Jetty, either with HTTP/1.1, HTTP/2, or WebSocket, the server may receive an invalid large (greater than 17408) TLS frame that is incorrectly handled, causing CPU resources to eventually reach 100% usage.">CVE-2021-28165</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.2.2 - 9.4.38, 10.0.0.alpha0 - 10.0.1, 11.0.0.alpha0 - 11.0.1</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.39, 10.0.2, 11.0.2</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/04/01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-28164" title="The default compliance mode allows requests with URIs that contain %2e or %2e%2e segments to access protected resources within the WEB-INF directory. For example a request to /context/%2e/WEB-INF/web.xml can retrieve the web.xml file. This can reveal sensitive information regarding the implementation of a web application.">CVE-2021-28164</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.37, 9.4.38</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.39</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/04/01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-28163" title="If the ${jetty.base} directory or the ${jetty.base}/webapps directory is a symlink (soft link in Linux), the contents of the ${jetty.base}/webapps directory may be deployed as a static web application, exposing the content of the directory for download.">CVE-2021-28163</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.32 - 9.4.38, 10.0.0.beta2 - 10.0.1, 11.0.0.beta2 - 11.0.1</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.39, 10.0.2, 11.0.2</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2021/02/26</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27223" title="When Jetty handles a request containing multiple Accept headers with a large number of “quality” (i.e. q) parameters, the server may enter a denial of service (DoS) state.">CVE-2020-27223</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.6.v20170531 - 9.4.36.v20210114, 10.0.0, 11.0.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.37, 10.0.1, 11.0.1</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/11/17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27218" title="If GZIP request body inflation is enabled and requests from different clients are multiplexed onto a single connection, and if an attacker can send a request with a body that is received entirely but not consumed by the application, then a subsequent request on the same connection will see that body prepended to its body.">CVE-2020-27218</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.0.RC0 - 9.4.34, 10.0.0.alpha0 - 10.0.0.beta2, 11.0.0.alpha0 - 11.0.0.beta2</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.35, 10.0.0.beta3, 11.0.0.beta3</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/10/19</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27216" title="If using a shared temp directory on UNIX-based systems an attacker could exploit the creation of a randomly generated file or directory allowing them to execute code and allowing for local privilege escalation.">CVE-2020-27216</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.32</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.3.29, 9.4.33</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2020/07/09</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17638" title="In the case of too large response headers, Jetty throws an exception to produce an HTTP 431 error. When this happens, the ByteBuffer containing the HTTP response headers is released back to the ByteBufferPool twice.">CVE-2019-17638</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.27, &lt; = 9.4.29</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.30</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/11/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-17632" title="The generation of default unhandled Error response content (in text/html and text/json Content-Type) does not escape Exception messages in stacktraces included in error output.">CVE-2019-17632</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.21, &lt; = 9.4.23</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.24</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9518" title="Some HTTP/2 implementations are vulnerable to a flood of empty frames, potentially leading to a denial of service.">CVE-2019-9518</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"></p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9516" title="Some HTTP/2 implementations are vulnerable to a header leak, potentially leading to a denial of service.">CVE-2019-9516</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9515" title="Some HTTP/2 implementations are vulnerable to a settings flood, potentially leading to a denial of service when an attacker sent a stream of SETTINGS frames to the peer.">CVE-2019-9515</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9514" title="Some HTTP/2 implementations are vulnerable to a reset flood, potentially leading to a denial of service.">CVE-2019-9514</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9512" title="Some HTTP/2 implementations are vulnerable to ping floods which could lead to a denial of service.">CVE-2019-9512</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/08/13</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-9511" title="Some HTTP/2 implementations are vulnerable to window size manipulation and stream prioritization manipulation which could lead to a denial of service.">CVE-2019-9511</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.20</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.21</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10247" title="If no webapp was mounted to the root namespace and a 404 was encountered, an HTML page would be generated displaying the fully qualified base resource location for each context.">CVE-2019-10247</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Med</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.16</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.28, 9.3.27, 9.4.17</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10246" title="Use of DefaultServlet or ResourceHandler with indexing was vulnerable to XSS behaviors to expose the directory listing on Windows operating systems.">CVE-2019-10246</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.16</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.28, 9.3.27, 9.4.17</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2019/04/11</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10241" title="Use of DefaultServlet or <code>ResourceHandler with indexing was vulnerable to XSS behaviors to expose the directory listing.">CVE-2019-10241</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.15</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.27, 9.3.26, 9.4.16</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-12538" title="HttpSessions present specifically in the FileSystem’s storage could be hijacked/accessed by an unauthorized user.">CVE-2018-12538</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.4.0, &lt; = 9.4.8</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.4.9</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-12536" title="InvalidPathException Message reveals webapp system path.">CVE-2018-12536</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">High</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/209.html">CWE-202</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-7658" title="Too Tolerant Parser, Double Content-Length + Transfer-Encoding + Whitespace.">CVE-2017-7658</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7657" title="HTTP/1.1 Request smuggling with carefully crafted body content (Does not apply to HTTP/1.0 or HTTP/2).">CVE-2017-7657</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2018/06/25</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-7656" title="HTTP Request Smuggling when used with invalid request headers (for HTTP/0.9).">CVE-2017-7656</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">See <a href="https://cwe.mitre.org/data/definitions/444.html">CWE-444</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 9.4.10</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.25, 9.3.24, 9.4.11</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2016/05/31</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.ocert.org/advisories/ocert-2016-001.html" title="vulnerability allowing access to protected resources within a webapp on Windows.">CVE-2016-4800</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;= 9.3.0, &lt; = 9.3.8</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.3.9</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2015/02/24</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://blog.gdssecurity.com/labs/2015/2/25/jetleak-vulnerability-remote-leakage-of-shared-buffers-in-je.html" title="JetLeak exposure of past buffers during HttpParser error">CVE-2015-2080</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=9.2.3 &lt;9.2.9</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2.9</p></td>
                </tr>
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2013/11/27</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://en.securitylab.ru/lab/PT-2013-65">PT-2013-65</a></p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=9.0.0 &lt;9.0.5</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">9.0.6-->
<!--                            <a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=418014">418014</a></p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Alias checking disabled by NTFS errors on Windows.</p></td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2013/07/24</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=413684">413684</a></p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&gt;=7.6.9 &lt;9.0.5</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.6.13,8.1.13,9.0.5-->
<!--                            <a href="https://bugs.eclipse.org/bugs/show_bug.cgi?id=413684">413684</a></p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Constraints bypassed if Unix symlink alias checker used on Windows.</p></td>-->
<!--                </tr>-->
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2011/12/29</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4461" title="Added ContextHandler.setMaxFormKeys (intkeys) to limit the number of parameters (default 1000).">CVE-2011-4461</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">All versions</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.6.0.RCO</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555" title="Work around by turning off SSL renegotiation in Jetty. If using JVM 1.6u19 setAllowRenegotiate(true) may be called on connectors.">CVE-2009-3555</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">JVM 1.6u19</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">7.01, 6.1.22</p></td>
                </tr>
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/06/18</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Jetty-1042</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 6.1.18, &lt; = 7.0.0.M4</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.19, 7.0.0.Rc0</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Cookie leak between-->
<!--                            requests sharing a connection.</p></td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2009/04/30</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://www.kb.cert.org/vuls/id/402580">CERT402580</a></p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt; = 6.1.16, &lt; = 7.0.0.M2</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">-->
<!--                                <p>5.1.15, 6.1.18, 7.0.0.M2</p>-->
<!--                            </div>-->
<!--                            <div class="paragraph">-->
<!--                                <p>Jetty-1004</p>-->
<!--                            </div></div></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">View arbitrary disk content in some specific configurations.</p></td>-->
<!--                </tr>-->
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/12/22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2007-6672" title="Static content visible in WEB-INF and past security constraints.">CVE-2007-6672</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.rc0-6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">
                                <p>6.1.7</p>
                            </div></div></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5614" title="Single quote in cookie name.">CVE-2007-5614</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc1 </p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/05</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5613" title="XSS in demo dup servlet.">CVE-2007-5613</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc0 </p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2007/11/03</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-5615" title="CRLF Response splitting.">CVE-2007-5615</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.6rc0 </p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/11/22</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-6969" title="Session ID predictability.">CVE-2006-6969</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">low</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.1.0, &lt;6.0.2, &lt;5.1.12, &lt;4.2.27</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.1.0pre3, 6.0.2, 5.1.12,
                            4.2.27</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/06/01</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-2759" title="JSP source visibility.">CVE-2006-2759</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;6.0.*, &lt;6.0.0Beta17</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">6.0.0Beta17</p></td>
                </tr>
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2006/01/05</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;5.1.10</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">5.1.10</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed //security-->
<!--                            constraint bypass on Windows.</p></td>-->
<!--                </tr>-->
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">2005/11/18</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a href="http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2006-2758" title="JSP source visibility.">CVE-2006-2758</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;5.1.6</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">5.1.6, 6.0.0Beta4</p></td>
                </tr>
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2004/02/04</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">JSSE 1.0.3_01</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;4.2.7</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.2.7</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Upgraded JSSE-->
<!--                            to obtain downstream security fix.</p></td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2002/09/22</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;4.1.0</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.1.0</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed CGI servlet remove-->
<!--                            exploit.</p></td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2002/03/12</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;3.1.7</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">4.0.RC2, 3.1.7</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed // security-->
<!--                            constraint bypass.</p></td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">2001/10/21</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">medium</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">high</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">&lt;3.1.3</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">3.1.3</p></td>-->
<!--                    <td class="tableblock halign-left valign-top"><p class="tableblock">Fixed trailing null security-->
<!--                            constraint bypass.</p></td>-->
<!--                </tr>-->
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
