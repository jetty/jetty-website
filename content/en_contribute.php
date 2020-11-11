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

    <div class="sect2">
        <h3 id="cg-patches"><a class="anchor" href="#cg-patches"></a><a class="link" href="#cg-patches">Contributing Patches</a></h3>
        <div class="paragraph">
            <p>We love seeing people contribute patches to the Jetty project and the process is relatively simple.
                The requirements to commit are modest but very important to the Eclipse Foundation and the intellectual property of the open source project.
                The following is the general process by which we operate.</p>
        </div>
        <div class="ulist">
            <ul>
                <li>
                    <p>You must have a signed Eclipse Contributor Agreement.</p>
                </li>
                <li>
                    <p>This agreement must be under the <em>same</em> email address as the Git pull request originates from.</p>
                </li>
                <li>
                    <p>The commit must be signed.</p>
                </li>
                <li>
                    <p>When the pull request is made, a git-hook will validate the email address.</p>
                    <div class="ulist">
                        <ul>
                            <li>
                                <p>If the result is a green checkbox then the Jetty committers can review the pull request.</p>
                            </li>
                            <li>
                                <p>If the result is a red X then there is absolutely nothing the Jetty committers can do to accept the commit at this point.</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <p>This may not be the final form a commit will take, there may be some back and forth and you may be asked to re-issue a pull request.</p>
                </li>
            </ul>
        </div>
        <div class="paragraph">
            <p>Not everything is specifically relevant since we are at GitHub but the crux of things are detailed there.
                The ECA is <strong>critically</strong> important to the process.</p>
        </div>
        <div class="sect3">
            <h4 id="cg-contributing-eca"><a class="anchor" href="#cg-contributing-eca"></a><a class="link" href="#cg-contributing-eca">Sign an Eclipse Contributor Agreement (ECA)</a></h4>
            <div class="paragraph">
                <p>The Eclipse Foundation has a strong Intellectual Property policy which tracks contributions in detail to ensure that:</p>
            </div>
            <div class="olist arabic">
                <ol class="arabic">
                    <li>
                        <p>Did the contributor author 100% of the content?</p>
                    </li>
                    <li>
                        <p>Does the contributor have the rights to contribute this content to Eclipse?</p>
                    </li>
                    <li>
                        <p>Is the contribution under the project’s license(s) (e.g. EPL)</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p>A contributor needs to e-sign a Eclipse Contributor Agreement (for more explanation see the <a href="http://www.eclipse.org/legal/ecafaq.php">Eclipse ECA FAQ</a> ) regardless of how their contribution patch is provided.
                    You can familiarize yourself with the Eclipse wiki page at <a href="http://wiki.eclipse.org/Development_Resources/Contributing_via_Git">Contributing via Git</a>.
                    In order to have a pull request accepted by any Eclipse project you <strong>must</strong> complete this agreement.</p>
            </div>
            <div class="quoteblock">
                <blockquote>
                    <div class="admonitionblock tip">
                        <table>
                            <tr>
                                <td class="icon">
                                    <i class="fa icon-tip" title="Tip"></i>
                                </td>
                                <td class="content">
                                    Log into the <a href="https://www.eclipse.org">Eclipse home page</a> (you will need to create an account with the Eclipse Foundation if you have not already done so), click on "Eclipse ECA", and complete the form.
                                    Be sure to use the <em>same email address</em> when you create any Git commit records.
                                </td>
                            </tr>
                        </table>
                    </div>
                </blockquote>
            </div>
        </div>
        <div class="sect3">
            <h4 id="t-contributing-git-config"><a class="anchor" href="#t-contributing-git-config"></a><a class="link" href="#t-contributing-git-config">Configuring Git</a></h4>
            <div class="paragraph">
                <p>GitHub has copious amounts of quality documentation on how to interact with the system and you will minimally need to configure the user.email property.
                    Check out the following <a href="https://help.github.com/articles/setting-your-email-in-git">guide on GitHub</a> for more information.</p>
            </div>
        </div>
        <div class="sect3">
            <h4 id="t-contributing-making-the-commit"><a class="anchor" href="#t-contributing-making-the-commit"></a><a class="link" href="#t-contributing-making-the-commit">Making the Commit</a></h4>
            <div class="paragraph">
                <p>When making the commit for the pull request it is  <em>vital</em> that you "sign-off" on the commit using <code>git commit -s</code> option.
                    Without this sign-off, your patch cannot be applied to the Jetty repository because it will be rejected.</p>
            </div>
            <div class="paragraph">
                <p>You can check out the <a href="https://help.github.com/articles/signing-tags-using-gpg">guide at Github</a> for more information.</p>
            </div>
            <div class="quoteblock">
                <blockquote>
                    <div class="admonitionblock tip">
                        <table>
                            <tr>
                                <td class="icon">
                                    <i class="fa icon-tip" title="Tip"></i>
                                </td>
                                <td class="content">
                                    One way to think of this is that when you sign the ECA you are indicating that you are free to contribute to eclipse, but that doesn&#8217;t mean everything you ever do can be contributed.
                                    Using the commit signing mechanism indicates that your commit is under the auspices of your agreement.
                                </td>
                            </tr>
                        </table>
                    </div>
                </blockquote>
            </div>
            <div class="paragraph">
                <p>If a pull request is for a particular issue in our repository then the format of the commit message is important.
                    The message should follow the form "Issue #123 &lt;description of the commit&gt;".
                    When the Jetty project runs releases we have an automated process that scans for commits with this format for inclusion in our VERSION.txt file.</p>
            </div>
            <div class="listingblock">
                <div class="content">
                    <pre class="highlight"><code class="language-screen" data-lang="screen">&gt; git commit -s -m "Issue #123 resolving the issue by adding widget"</code></pre>
                </div>
            </div>
        </div>
        <div class="sect3">
            <h4 id="cg-the-pull-request"><a class="anchor" href="#cg-the-pull-request"></a><a class="link" href="#cg-the-pull-request">The Pull Request</a></h4>
            <div class="paragraph">
                <p>Pull requests are very much a GitHub process so best <a href="https://help.github.com/articles/creating-a-pull-request">explained by Github</a>.</p>
            </div>
        </div>
        <div class="sect3">
            <h4 id="cg-our-policies"><a class="anchor" href="#cg-our-policies"></a><a class="link" href="#cg-our-policies">Our Policies</a></h4>
            <div class="paragraph">
                <p>We wholeheartedly welcome contributions to Jetty and will do our best to process them in a timely fashion.
                    While not every contribution will be accepted, our commitment is to work with interested parties on the things they care about.
                    With that in mind, we can only handle pull requests with actively engaged parties.
                    We reserve the right to abandon pull requests whose authors do no respond in a timely fashion.</p>
            </div>
            <div class="paragraph">
                <p>We will generally adhere to the following time frames for contributions:</p>
            </div>
            <div class="ulist">
                <ul>
                    <li>
                        <p>Invalid Pull Requests - 1 week</p>
                        <div class="ulist">
                            <ul>
                                <li>
                                    <p>These pull requests do not follow the contribution requirements for some reason, be it missing contributor agreement or the wrong email.</p>
                                </li>
                                <li>
                                    <p>We will try and follow up with the pull request author to resolve the issue but much of this is out of our hands and are between committer and the Eclipse Foundation.</p>
                                </li>
                                <li>
                                    <p>If we do not hear from the contributor after a week we will close the pull request.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <p>Valid Pull Requests - 2 weeks</p>
                        <div class="ulist">
                            <ul>
                                <li>
                                    <p>These pull requests have a green check mark after the commit title.</p>
                                </li>
                                <li>
                                    <p>If the pull request can be immediately applied we will do so.</p>
                                </li>
                                <li>
                                    <p>There may need to be some conversation on the issue in which case a committer will follow up with the author in the pull request.</p>
                                </li>
                                <li>
                                    <p>If the original contributor does not respond within 2 weeks we may close the commit.</p>
                                </li>
                                <li>
                                    <p>If we see value in the commit yet the author has not responded after 2 weeks we may make some variation of the commit ourselves.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</div>
<!-- ./end  #rightcolumn -->
