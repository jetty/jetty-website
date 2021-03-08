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
            <h3 id="security-processes">Jetty Security Processes</h3>
            <div class="paragraph">
                <p>While Webtide works diligently to make Jetty as issue-free as possible, with the rapid pace of updates to technology and standards, there is always the possibility that a bug or vulnerability can be found.
                    This is compounded by the fact that Jetty operates as a platform, and as such cannot account for all the permutations and combinations of configurations that users may make to it.
                    What follows is the process by which we address security vulnerabilities.</p>
            </div>
            <div class="admonitionblock note">
                <table>
                    <tr>
                        <td class="icon">
                            <div class="title">Note</div>
                        </td>
                        <td class="content">
                            <div class="paragraph">
                                <p>If you suspect you have found a security issue, please do not report it publicly. Instead, send an email to <a href="mailto:security@webtide.com">security@webtide.com</a>.</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="olist arabic">
                <ol class="arabic">
                    <li><input type="checkbox">
                        <p>On receipt of a security report via <a href="mailto:security@webtide.com">security@webtide.com</a> or other channels, if it cannot be trivially dismissed (already fixed, known not a problem, etc.), then a <a href="https://github.com/eclipse/jetty.project/security/advisories?state=published">Github security advisory</a> is created by project leadership.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Jetty committers and the reporters are added to the security advisory. Individual committers can also be named in the comments for addition.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Copy this list as a markdown in the security advisory for tracking the completion of various tasks.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Initial triage and discussion are performed in the comments of the advisory.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>If enough information exists to attempt reproduction or fix, then a private repository is created as part of the GitHub security advisory.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>If the vulnerability cannot be confirmed then close the security advisory, else continue.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Generate a <a href="https://www.first.org/cvss/calculator/3.0">CVE score</a> and add it to the advisory description.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Identify a <a href="https://cwe.mitre.org/data/definitions/699.html">CWE Definition</a> and add it to the advisory description.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Identify vulnerable version(s), including current and past versions that are affected (e.g. 9.4.0 through 9.4.35, and 10.0.0.alpha1 through 10.0.0.beta3&#8230;&#8203;etc.)</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Identify and document workaround(s), if applicable, in the comments of the security advisory.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Open an <a href="https://bugs.eclipse.org/bugs/">Eclipse Bugzilla</a> to get a CVE allocated. Should be opened under the <em>Community</em> "Product" category with a "Component" of <em>Vulnerability Reports</em>. The CVE <a href="https://www.eclipse.org/projects/handbook/#vulnerability-cve">should include</a> the following:</p>
                        <div class="olist loweralpha">
                            <ol class="loweralpha" type="a">
                                <li><input type="checkbox">
                                    <p>Version(s) affected</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>CVE Score</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>CWE Identifier(s)</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>Brief description of the issue</p>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li><input type="checkbox">
                        <p>Once the CVE is allocated update the Security Advisory with the number</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Build and test fix(es) locally and in CI environment.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Merge tests and fix  - ensure description does not mention vulnerability directly. Do not merge directly from the security advisory as it can be traced back before publication.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Build and stage release candidate.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Notify interested parties of pending security advisory and staged release:</p>
                        <div class="olist loweralpha">
                            <ol class="loweralpha" type="a">
                                <li><input type="checkbox">
                                    <p>Include CVE number, CVE score, and CWE</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>Include Workarounds</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>Stress that it is confidential</p>
                                </li>
                                <li><input type="checkbox">
                                    <p>Advise the security advisory will be published in 2 days unless they indicate they need more time.</p>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li><input type="checkbox">
                        <p>If testing is OK, then the release is promoted.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Interested parties are notified of the availability of release on Maven Central.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Publish security advisory and CVE publicly.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Edit VERSION.txt and so that the CVE number is now recorded against merged PR.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Edit the <a href="https://github.com/eclipse/jetty.project/releases">release(s)</a> on Github to identify CVE number that was addressed/resolved.</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Update downstream images (Docker, etc.).</p>
                    </li>
                    <li><input type="checkbox">
                        <p>Review security processes & completion.</p>
                    </li>
                </ol>
            </div>
            <div class="sect4">
                <h5 id="_a_note_on_releases">A Note On Releases</h5>
                <div class="paragraph">
                    <p>Jetty has a comprehensive test catalog that covers not only functionality but also standard configuration errors that users can make which may result in instability.</p>
                </div>
                <div class="paragraph">
                    <p>When a new version of Jetty is ready to be built it undergoes rigorous testing throughout the Webtide infrastructure to make sure that it both compiles and builds successfully but that it also runs without errors and functions as expected.
                        Webtide uses Jetty for several of its own backend servers and web applications and new builds are tested against these before a release candidate ever moves forward for public availability.</p>
                </div>
                <div class="paragraph">
                    <p>In addition to our own testing, Webtide works with several partners who have opted to test and install early release builds in their environments.
                        These partners test not only Jetty as a platform but install their web applications and perform security and penetration testing against these builds.</p>
                </div>
                <div class="paragraph">
                    <p>Once internal and partner testing is complete, a process that generally takes several days, the Webtide team moves forward with public releases. R
                        elease notes are sent out, and builds are promoted to Maven Central.</p>
                </div>
            </div>
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
