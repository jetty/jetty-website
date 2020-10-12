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
  <p>Eclipse Jetty provides a web server and servlet container, additionally providing support for HTTP/2, WebSocket, OSGi, JMX, JNDI, JAAS and many other integrations.
  These components are open source and are freely available for commercial use and distribution.</p>

  <p>Jetty is used in a wide variety of projects and products, both in development and production.
  Jetty is loved by developers because it has a long history of being easily embedded in devices, tools, frameworks,
  application servers, and modern cloud services. See the Jetty Powered page for more uses of Jetty.</p>

  <p>With the direction Java and the JakartaEE project (formerly JavaEE) have taken, the current
    recommended version of Jetty for use depends on the intended usage.
    <br/>
    <table class="frame-none grid-all stretch">
    <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 50%;">
    </colgroup>
    <thead>
    <tr>
    <th class="halign-left valign-top">Java</th>
    <th class="halign-left valign-top">Servlet</th>
    <th class="halign-left valign-top">Jetty</th>
    </tr>
    </thead>
    <tbody>
     <tr>
      <td class="halign-left valign-top"><div class="content">Java 11+</div></td>
      <td class="halign-left valign-top"><div class="content">JakartaEE 9 licensed (jakartaee.servlet.*)</div></td>
      <td class="halign-left valign-top"><div class="content">Jetty 11.0.x</div></td>
     </tr>
     <tr>
      <td class="halign-left valign-top"><div class="content">Java 11+</div></td>
      <td class="halign-left valign-top"><div class="content">JakartaEE 8 licensed (javax.servlet.*)</div></td>
      <td class="halign-left valign-top"><div class="content">Jetty 10.0.x</div></td>
     </tr>
     <tr>
      <td class="halign-left valign-top"><div class="content">Java 8</div></td>
      <td class="halign-left valign-top"><div class="content">JavaEE 8 licensed (javax.servlet.*)</div></td>
      <td class="halign-left valign-top"><div class="content">Jetty 9.4.x</div></td>
     </tr>
    </tbody>
   </table>
  </p>

  <p>The Jetty project has been hosted at the Eclipse Foundation since 2009.
  Prior releases of Jetty have existed in part or completely under the Jetty project at the The Codehaus and Sourceforge before that.
  See the <a href="/jetty/about.html">About</a> page for more information about the history of Jetty.</p>

  <table class="frame-none grid-all stretch">
  <colgroup>
  <col style="width: 50%;">
  <col style="width: 50%;">
  </colgroup>
  <thead>
  <tr>
  <th class="halign-left valign-top">Features</th>
  <th class="halign-left valign-top">Jetty Powered</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td class="halign-left valign-top"><div class="content"><div class="ulist">
  <ul>
  <li>
  <p>Full-featured and standards-based</p>
  </li>
  <li>
  <p>Open source and commercially usable</p>
  </li>
  <li>
  <p>Flexible and extensible</p>
  </li>
  <li>
  <p>Small footprint</p>
  </li>
  <li>
  <p>Embeddable</p>
  </li>
  <li>
  <p>Asynchronous</p>
  </li>
  <li>
  <p>Enterprise scalable</p>
  </li>
  <li>
  <p>Dual licensed under Apache and Eclipse</p>
  </li>
  </ul>
  </div></div></td>
  <td class="halign-left valign-top"><div class="content"><div class="ulist">
  <ul>
  <li>
  <p>Large clusters, such as the Facebook Presto</p>
  </li>
  <li>
  <p>Cloud computing, such as the Google AppEngine</p>
  </li>
  <li>
  <p>SaaS, such as Yahoo! and Zimbra</p>
  </li>
  <li>
  <p>Application Servers, such as Apache Geronimo</p>
  </li>
  <li>
  <p>Frameworks, such as GWT</p>
  </li>
  <li>
  <p>Tools, such as the Eclipse IDE</p>
  </li>
  <li>
  <p>Devices, such as phones</p>
  </li>
  <li>
  <p>More&#8230;&#8203;</p>
  </li>
  </ul>
  </div></div></td>
  </tr>
  </tbody>
  </table>
  <p>You can benefit from committer knowledge and get training, consulting services, professional support and even production SLAs, just ask us about it!</p>
  <p></p>
  <p></p>
</div>
<!-- ./end  #midcolumn -->
