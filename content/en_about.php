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
  <h1>Distributions</h1>
  <h2>Eclipse Jetty</h2>
  <p>
    Eclipse Jetty Web Server provides an HTTP server and Servlet container capable of serving static and dynamic content either from a standalone or embedded instantiations. From jetty-7 on, the jetty web-server and other core components are hosted by the Eclipse Foundation. The project provides:
  </p>

  <ul>
    <li>Asynchronous HTTP Server</li>
    <li>Standards based Servlet Container</li>
    <li>websocket server</li>
    <li>http/2 server</li>
    <li>Asynchronous Client (http/1.1, http/2, websocket)</li>
    <li>OSGI, JNDI, JMX, JASPI, AJP support</li>
  </ul>

  <h2>Hightide<h2>
  <p>
    A quick note about Jetty Hightide. Previous releases of Jetty (6, 7 and 8) each released an additional distribution that contained some 3rd party integrations to give a more JEE experience however with Jetty 9 we have stopped providing this integration. What we have found is the vast majority of our users simply start with the jetty-distribution and then layer in whatever extra technologies they want to use, either into the distribution itself or within their web applications. Technologies like JNDI, JMX, and Annotations have always existed in the stock jetty-distribution to weave such things together and that will remain the case.
  </p>

  <h2>Other</h2>
  <p>
    Previous releases of Jetty have been available in many forms and distributions, including the jetty-maven-plugin (which is now hosted at eclipse), Debian and RPMs from jetty@codehaus and as part of the Geronimo JEE application server from apache.
  </p>

  <h1>Homes</h1>
  <p>
    The Jetty project has found its home in many places over the last 20+ years.
  </p>

  <h2>Eclipse and Github</h2>
  <p>
  In 2009, the Jetty project moved its core components to be a project of the Eclipse Foundation, in order to improve the IP processes and broaden the licensing and community of the project. As of Jetty 9 the project has fully moved to the Eclipse Foundation. Additionally, in 2016 the project moved the canonical source and issue repository to Github.
  </p>

  <h2>Codehaus</h2>
  <p>
    In 2005, the jetty project moved to the The Codehaus for its hosting services and open source community. In 2009, after the core components of Jetty moved to eclipse, the jetty @ codehaus project continues to provide integrations, extensions and packaging of jetty.
  </p>

  <h2>Sourceforge</h2>
  <p>
    From 2000 to 2005, the jetty project was hosted at sourceforge.net where versions 3.x, 4.x and 5.x were produced.
  </p>

  <h1>Sponsors</h1>
  <p>
    The development of the Jetty project has been fully funded over the years through close collaboration with a great many of wonderful clients. We have done with work through a number of entities as mentioned here.
  </p>

  <h2>Webtide</h2>
  <p>
    In 2015 the development of Jetty was once more taken over by Webtide when the developers split away from Intalio, taking over full ownership of the company behind the open source project. Webtide now fully funds the ongoing development of the Jetty project through services and support on the open source version of the Jetty project.
  </p>

  <h2>Intalio</h2>
  <p>
    The role of the development of Jetty was taken over in 2009 by Webtide LLC, who acquired both Webtide and Mort Bay. Intalio is a company that offers both products and services based on open source software and they employ many of the jetty contributors.
  </p>

  <h2>Webtide</h2>
  <p>
    The role of leading the development of Jetty was taken over in 2006 by Webtide LLC, formed as a joint venture between Mort Bay and partners providing marketing, sales and strategic assistance.
  </p>

  <h2>Mort Bay</h2>
  <p>
    The Java HTTP server that became jetty was originally developed in 1995 by Greg Wilkins of Mort Bay Consulting as part of an issue tracking application. Versions 1.x through to 6.1.x of Jetty were developed under org.mortbay packaging and Mort Bay still holds the major part of the copyright on the Jetty code base. Mort Bay directly hosted the jetty project until version 3.x and was the prime sponsor of development until 6.x.
  </p>
</div>
<!-- ./end  #midcolumn -->

<!-- Start of the right column -->
<div id="rightcolumn">
  <div class="sideitem">
    <table class="tableblock frame-all grid-all stretch">
    <caption class="title">Jetty Versions</caption>
    <colgroup>
    <col style="width: 12%;">
    <col style="width: 9%;">
    <col style="width: 15%;">
    <col style="width: 6%;">
    <col style="width: 21%;">
    <col style="width: 10%;">
    <col style="width: 6%;">
    <col style="width: 21%;">
    </colgroup>
    <thead>
    <tr>
    <th class="tableblock halign-left valign-top">Version</th>
    <th class="tableblock halign-left valign-top">Year</th>
    <th class="tableblock halign-left valign-top">Home</th>
    <th class="tableblock halign-left valign-top">JVM</th>
    <th class="tableblock halign-left valign-top">Protocols</th>
    <th class="tableblock halign-left valign-top">Servlet</th>
    <th class="tableblock halign-left valign-top">JSP</th>
    <th class="tableblock halign-left valign-top">Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">9.3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2015</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.8</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 (RFC 7230), HTTP/2 (RFC 7540), WebSocket (RFC 6455, JSR 356), FastCGI</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Stable</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">9.2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2014</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.7</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, javax.websocket, SPDY v3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">3.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Stable</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">8</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2009-</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse/Codehaus</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.6</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, WebSocket RFC 6455, SPDY v3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">3.0</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Venerable</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">7</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2008-</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Eclipse/Codehaus</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616, WebSocket RFC 6455, SPDY v3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Venerable</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">6</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2006-2010</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Codehaus</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.4-1.5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.0</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2003-2009</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.2-1.5</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.4</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.0</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Deprecated</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">4</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2001-2006</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.2, J2ME</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2616</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Ancient</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">3</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1999-2002</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Sourceforge</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.1 RFC2068</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Fossilized</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1998-2000</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Mortbay</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.0 RFC1945</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">2.1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.0</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Legendary</p></td>
    </tr>
    <tr>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1995-1998</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Mortbay</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">1.0</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">HTTP/1.0 RFC1945</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">-</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">-</p></td>
    <td class="tableblock halign-left valign-top"><p class="tableblock">Mythical</p></td>
    </tr>
    </tbody>
    </table>
  </div>
</div>
<!-- ./end  #rightcolumn -->
