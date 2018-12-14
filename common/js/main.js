function solsticeCreateCookie(e, t, n) {
  document.cookie = e + "=" + escape(t) + "; path=" + n + ";"
}

function solsticeFetchCookie(e) {
  for (var t = "", n = "", i = e + "=", o = document.cookie.split(";"), r = o.length, a = 0; a < r; a++)
    if (n = o[a].trim(), 0 == n.indexOf(i)) {
      t = n.substring(i.length, n.length);
      break
    } return t
}
if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {
      var i, o = (t = t || ae).createElement("script");
      if (o.text = e, n)
        for (i in be) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o)
    }

    function i(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[de.call(e)] || "object" : typeof e
    }

    function o(e) {
      var t = !!e && "length" in e && e.length,
        n = i(e);
      return !me(e) && !xe(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function a(e, t, n) {
      return me(t) ? we.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n
      }) : t.nodeType ? we.grep(e, function(e) {
        return e === t !== n
      }) : "string" != typeof t ? we.grep(e, function(e) {
        return ue.call(t, e) > -1 !== n
      }) : we.filter(t, e, n)
    }

    function s(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function l(e) {
      var t = {};
      return we.each(e.match(De) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function c(e) {
      return e
    }

    function p(e) {
      throw e
    }

    function u(e, t, n, i) {
      var o;
      try {
        e && me(o = e.promise) ? o.call(e).done(t).fail(n) : e && me(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }

    function h() {
      ae.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), we.ready()
    }

    function d(e, t) {
      return t.toUpperCase()
    }

    function f(e) {
      return e.replace(Ie, "ms-").replace(Pe, d)
    }

    function y() {
      this.expando = we.expando + y.uid++
    }

    function g(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
          try {
            n = g(n)
          } catch (e) {}
          qe.set(e, t, n)
        } else n = void 0;
      return n
    }

    function m(e, t, n, i) {
      var o, r, a = 20,
        s = i ? function() {
          return i.cur()
        } : function() {
          return we.css(e, t, "")
        },
        l = s(),
        c = n && n[3] || (we.cssNumber[t] ? "" : "px"),
        p = (we.cssNumber[t] || "px" !== c && +l) && Fe.exec(we.css(e, t));
      if (p && p[3] !== c) {
        for (l /= 2, c = c || p[3], p = +l || 1; a--;) we.style(e, t, p + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), p /= r;
        p *= 2, we.style(e, t, p + c), n = n || []
      }
      return n && (p = +p || +l || 0, o = n[1] ? p + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = p, i.end = o)), o
    }

    function x(e) {
      var t, n = e.ownerDocument,
        i = e.nodeName,
        o = Qe[i];
      return o || (t = n.body.appendChild(n.createElement(i)), o = we.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Qe[i] = o, o)
    }

    function b(e, t) {
      for (var n, i, o = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Re.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ue(i) && (o[r] = x(i))) : "none" !== n && (o[r] = "none", Re.set(i, "display", n)));
      for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
      return e
    }

    function w(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? we.merge([e], n) : n
    }

    function k(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
    }

    function T(e, t, n, o, r) {
      for (var a, s, l, c, p, u, h = t.createDocumentFragment(), d = [], f = 0, y = e.length; f < y; f++)
        if ((a = e[f]) || 0 === a)
          if ("object" === i(a)) we.merge(d, a.nodeType ? [a] : a);
          else if (Ze.test(a)) {
        for (s = s || h.appendChild(t.createElement("div")), l = (Ge.exec(a) || ["", ""])[1].toLowerCase(), c = Ke[l] || Ke._default, s.innerHTML = c[1] + we.htmlPrefilter(a) + c[2], u = c[0]; u--;) s = s.lastChild;
        we.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
      } else d.push(t.createTextNode(a));
      for (h.textContent = "", f = 0; a = d[f++];)
        if (o && we.inArray(a, o) > -1) r && r.push(a);
        else if (p = we.contains(a.ownerDocument, a), s = w(h.appendChild(a), "script"), p && k(s), n)
        for (u = 0; a = s[u++];) Ye.test(a.type || "") && n.push(a);
      return h
    }

    function C() {
      return !0
    }

    function S() {
      return !1
    }

    function E() {
      try {
        return ae.activeElement
      } catch (e) {}
    }

    function A(e, t, n, i, o, r) {
      var a, s;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (s in t) A(e, s, n, i, t[s], r);
        return e
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = S;
      else if (!o) return e;
      return 1 === r && (a = o, (o = function(e) {
        return we().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = we.guid++)), e.each(function() {
        we.event.add(this, t, o, i, n)
      })
    }

    function M(e, t) {
      return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? we(e).children("tbody")[0] || e : e
    }

    function O(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function N(e, t) {
      var n, i, o, r, a, s, l, c;
      if (1 === t.nodeType) {
        if (Re.hasData(e) && (r = Re.access(e), a = Re.set(t, r), c = r.events)) {
          delete a.handle, a.events = {};
          for (o in c)
            for (n = 0, i = c[o].length; n < i; n++) we.event.add(t, o, c[o][n])
        }
        qe.hasData(e) && (s = qe.access(e), l = we.extend({}, s), qe.set(t, l))
      }
    }

    function D(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function $(e, t, i, o) {
      t = ce.apply([], t);
      var r, a, s, l, c, p, u = 0,
        h = e.length,
        d = h - 1,
        f = t[0],
        y = me(f);
      if (y || h > 1 && "string" == typeof f && !ve.checkClone && at.test(f)) return e.each(function(n) {
        var r = e.eq(n);
        y && (t[0] = f.call(this, n, r.html())), $(r, t, i, o)
      });
      if (h && (r = T(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
        for (l = (s = we.map(w(r, "script"), O)).length; u < h; u++) c = r, u !== d && (c = we.clone(c, !0, !0), l && we.merge(s, w(c, "script"))), i.call(e[u], c, u);
        if (l)
          for (p = s[s.length - 1].ownerDocument, we.map(s, j), u = 0; u < l; u++) c = s[u], Ye.test(c.type || "") && !Re.access(c, "globalEval") && we.contains(p, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(c.src) : n(c.textContent.replace(st, ""), p, c))
      }
      return e
    }

    function H(e, t, n) {
      for (var i, o = t ? we.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || we.cleanData(w(i)), i.parentNode && (n && we.contains(i.ownerDocument, i) && k(w(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function L(e, t, n) {
      var i, o, r, a, s = e.style;
      return (n = n || ct(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || we.contains(e.ownerDocument, e) || (a = we.style(e, t)), !ve.pixelBoxStyles() && lt.test(a) && pt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function I(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }

    function P(e) {
      if (e in gt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--;)
        if ((e = yt[n] + t) in gt) return e
    }

    function _(e) {
      var t = we.cssProps[e];
      return t || (t = we.cssProps[e] = P(e) || e), t
    }

    function R(e, t, n) {
      var i = Fe.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function q(e, t, n, i, o, r) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (l += we.css(e, n + We[a], !0, o)), i ? ("content" === n && (l -= we.css(e, "padding" + We[a], !0, o)), "margin" !== n && (l -= we.css(e, "border" + We[a] + "Width", !0, o))) : (l += we.css(e, "padding" + We[a], !0, o), "padding" !== n ? l += we.css(e, "border" + We[a] + "Width", !0, o) : s += we.css(e, "border" + We[a] + "Width", !0, o));
      return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l
    }

    function z(e, t, n) {
      var i = ct(e),
        o = L(e, t, i),
        r = "border-box" === we.css(e, "boxSizing", !1, i),
        a = r;
      if (lt.test(o)) {
        if (!n) return o;
        o = "auto"
      }
      return a = a && (ve.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === we.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + q(e, t, n || (r ? "border" : "content"), a, i, o) + "px"
    }

    function B(e, t, n, i, o) {
      return new B.prototype.init(e, t, n, i, o)
    }

    function V() {
      mt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(V) : e.setTimeout(V, we.fx.interval), we.fx.tick())
    }

    function F() {
      return e.setTimeout(function() {
        vt = void 0
      }), vt = Date.now()
    }

    function W(e, t) {
      var n, i = 0,
        o = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = We[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function U(e, t, n) {
      for (var i, o = (J.tweeners[t] || []).concat(J.tweeners["*"]), r = 0, a = o.length; r < a; r++)
        if (i = o[r].call(n, t, e)) return i
    }

    function X(e, t, n) {
      var i, o, r, a, s, l, c, p, u = "width" in t || "height" in t,
        h = this,
        d = {},
        f = e.style,
        y = e.nodeType && Ue(e),
        g = Re.get(e, "fxshow");
      n.queue || (null == (a = we._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
        a.unqueued || s()
      }), a.unqueued++, h.always(function() {
        h.always(function() {
          a.unqueued--, we.queue(e, "fx").length || a.empty.fire()
        })
      }));
      for (i in t)
        if (o = t[i], xt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (y ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;
            y = !0
          }
          d[i] = g && g[i] || we.style(e, i)
        } if ((l = !we.isEmptyObject(t)) || !we.isEmptyObject(d)) {
        u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Re.get(e, "display")), "none" === (p = we.css(e, "display")) && (c ? p = c : (b([e], !0), c = e.style.display || c, p = we.css(e, "display"), b([e]))), ("inline" === p || "inline-block" === p && null != c) && "none" === we.css(e, "float") && (l || (h.done(function() {
          f.display = c
        }), null == c && (p = f.display, c = "none" === p ? "" : p)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
          f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        })), l = !1;
        for (i in d) l || (g ? "hidden" in g && (y = g.hidden) : g = Re.access(e, "fxshow", {
          display: c
        }), r && (g.hidden = !y), y && b([e], !0), h.done(function() {
          y || b([e]), Re.remove(e, "fxshow");
          for (i in d) we.style(e, i, d[i])
        })), l = U(y ? g[i] : 0, i, h), i in g || (g[i] = l.start, y && (l.end = l.start, l.start = 0))
      }
    }

    function Q(e, t) {
      var n, i, o, r, a;
      for (n in e)
        if (i = f(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = we.cssHooks[i]) && "expand" in a) {
          r = a.expand(r), delete e[i];
          for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }

    function J(e, t, n) {
      var i, o, r = 0,
        a = J.prefilters.length,
        s = we.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (o) return !1;
          for (var t = vt || F(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
          return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
          elem: e,
          props: we.extend({}, t),
          opts: we.extend(!0, {
            specialEasing: {},
            easing: we.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: vt || F(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = we.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function(t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
          }
        }),
        p = c.props;
      for (Q(p, c.opts.specialEasing); r < a; r++)
        if (i = J.prefilters[r].call(c, e, p, c.opts)) return me(i.stop) && (we._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return we.map(p, U, c), me(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), we.fx.timer(we.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c
    }

    function G(e) {
      return (e.match(De) || []).join(" ")
    }

    function Y(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(De) || [] : []
    }

    function Z(e, t, n, o) {
      var r;
      if (Array.isArray(t)) we.each(t, function(t, i) {
        n || Nt.test(e) ? o(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
      });
      else if (n || "object" !== i(t)) o(e, t);
      else
        for (r in t) Z(e + "[" + r + "]", t[r], n, o)
    }

    function ee(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0,
          r = t.toLowerCase().match(De) || [];
        if (me(n))
          for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function te(e, t, n, i) {
      function o(s) {
        var l;
        return r[s] = !0, we.each(e[s] || [], function(e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
        }), l
      }
      var r = {},
        a = e === Vt;
      return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function ne(e, t) {
      var n, i, o = we.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && we.extend(!0, e, i), e
    }

    function ie(e, t, n) {
      for (var i, o, r, a, s = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (o in s)
          if (s[o] && s[o].test(i)) {
            l.unshift(o);
            break
          } if (l[0] in n) r = l[0];
      else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break
          }
          a || (a = o)
        }
        r = r || a
      }
      if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function oe(e, t, n, i) {
      var o, r, a, s, l, c = {},
        p = e.dataTypes.slice();
      if (p[1])
        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
      for (r = p.shift(); r;)
        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = p.shift())
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
        if (!(a = c[l + " " + r] || c["* " + r]))
          for (o in c)
            if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
              !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], p.unshift(s[1]));
              break
            } if (!0 !== a)
          if (a && e.throws) t = a(t);
          else try {
            t = a(t)
          } catch (e) {
            return {
              state: "parsererror",
              error: a ? e : "No conversion from " + l + " to " + r
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }
    var re = [],
      ae = e.document,
      se = Object.getPrototypeOf,
      le = re.slice,
      ce = re.concat,
      pe = re.push,
      ue = re.indexOf,
      he = {},
      de = he.toString,
      fe = he.hasOwnProperty,
      ye = fe.toString,
      ge = ye.call(Object),
      ve = {},
      me = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      xe = function(e) {
        return null != e && e === e.window
      },
      be = {
        type: !0,
        src: !0,
        noModule: !0
      },
      we = function(e, t) {
        return new we.fn.init(e, t)
      },
      ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
      jquery: "3.3.1",
      constructor: we,
      length: 0,
      toArray: function() {
        return le.call(this)
      },
      get: function(e) {
        return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
        var t = we.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function(e) {
        return we.each(this, e)
      },
      map: function(e) {
        return this.pushStack(we.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(le.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: pe,
      sort: re.sort,
      splice: re.splice
    }, we.extend = we.fn.extend = function() {
      var e, t, n, i, o, r, a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || me(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
        if (null != (e = arguments[s]))
          for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (we.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && we.isPlainObject(n) ? n : {}, a[t] = we.extend(c, r, i)) : void 0 !== i && (a[t] = i));
      return a
    }, we.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(!e || "[object Object]" !== de.call(e) || (t = se(e)) && ("function" != typeof(n = fe.call(t, "constructor") && t.constructor) || ye.call(n) !== ge))
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function(e) {
        n(e)
      },
      each: function(e, t) {
        var n, i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ke, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (o(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : pe.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : ue.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return e.length = o, e
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
        return i
      },
      map: function(e, t, n) {
        var i, r, a = 0,
          s = [];
        if (o(e))
          for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
        else
          for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
        return ce.apply([], s)
      },
      guid: 1,
      support: ve
    }), "function" == typeof Symbol && (we.fn[Symbol.iterator] = re[Symbol.iterator]), we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      he["[object " + t + "]"] = t.toLowerCase()
    });
    var Te = function(e) {
      function t(e, t, n, i) {
        var o, r, a, s, l, p, h, d = t && t.ownerDocument,
          f = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
        if (!i && ((t ? t.ownerDocument || t : R) !== N && j(t), t = t || N, $)) {
          if (11 !== f && (l = ye.exec(e)))
            if (o = l[1]) {
              if (9 === f) {
                if (!(a = t.getElementById(o))) return n;
                if (a.id === o) return n.push(a), n
              } else if (d && (a = d.getElementById(o)) && P(t, a) && a.id === o) return n.push(a), n
            } else {
              if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
              if ((o = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n
            } if (b.qsa && !F[e + " "] && (!H || !H.test(e))) {
            if (1 !== f) d = t, h = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = _), r = (p = C(e)).length; r--;) p[r] = "#" + s + " " + u(p[r]);
              h = p.join(","), d = ge.test(e) && c(t.parentNode) || t
            }
            if (h) try {
              return G.apply(n, d.querySelectorAll(h)), n
            } catch (e) {} finally {
              s === _ && t.removeAttribute("id")
            }
          }
        }
        return E(e.replace(re, "$1"), t, n, i)
      }

      function n() {
        function e(n, i) {
          return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
        }
        var t = [];
        return e
      }

      function i(e) {
        return e[_] = !0, e
      }

      function o(e) {
        var t = N.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function r(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
      }

      function a(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function s(e) {
        return function(t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function l(e) {
        return i(function(t) {
          return t = +t, i(function(n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
          })
        })
      }

      function c(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function p() {}

      function u(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function h(e, t, n) {
        var i = t.dir,
          o = t.next,
          r = o || i,
          a = n && "parentNode" === r,
          s = z++;
        return t.first ? function(t, n, o) {
          for (; t = t[i];)
            if (1 === t.nodeType || a) return e(t, n, o);
          return !1
        } : function(t, n, l) {
          var c, p, u, h = [q, s];
          if (l) {
            for (; t = t[i];)
              if ((1 === t.nodeType || a) && e(t, n, l)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || a)
                if (u = t[_] || (t[_] = {}), p = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                else {
                  if ((c = p[r]) && c[0] === q && c[1] === s) return h[2] = c[2];
                  if (p[r] = h, h[2] = e(t, n, l)) return !0
                } return !1
        }
      }

      function d(e) {
        return e.length > 1 ? function(t, n, i) {
          for (var o = e.length; o--;)
            if (!e[o](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function f(e, n, i) {
        for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
        return i
      }

      function y(e, t, n, i, o) {
        for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
        return a
      }

      function g(e, t, n, o, r, a) {
        return o && !o[_] && (o = g(o)), r && !r[_] && (r = g(r, a)), i(function(i, a, s, l) {
          var c, p, u, h = [],
            d = [],
            g = a.length,
            v = i || f(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !i && t ? v : y(v, h, e, s, l),
            x = n ? r || (i ? e : g || o) ? [] : a : m;
          if (n && n(m, x, s, l), o)
            for (c = y(x, d), o(c, [], s, l), p = c.length; p--;)(u = c[p]) && (x[d[p]] = !(m[d[p]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], p = x.length; p--;)(u = x[p]) && c.push(m[p] = u);
                r(null, x = [], c, l)
              }
              for (p = x.length; p--;)(u = x[p]) && (c = r ? K(i, u) : h[p]) > -1 && (i[c] = !(a[c] = u))
            }
          } else x = y(x === a ? x.splice(g, x.length) : x), r ? r(null, a, x, l) : G.apply(a, x)
        })
      }

      function v(e) {
        for (var t, n, i, o = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = h(function(e) {
            return e === t
          }, a, !0), c = h(function(e) {
            return K(t, e) > -1
          }, a, !0), p = [function(e, n, i) {
            var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
            return t = null, o
          }]; s < o; s++)
          if (n = w.relative[e[s].type]) p = [h(d(p), n)];
          else {
            if ((n = w.filter[e[s].type].apply(null, e[s].matches))[_]) {
              for (i = ++s; i < o && !w.relative[e[i].type]; i++);
              return g(s > 1 && d(p), s > 1 && u(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(re, "$1"), n, s < i && v(e.slice(s, i)), i < o && v(e = e.slice(i)), i < o && u(e))
            }
            p.push(n)
          } return d(p)
      }

      function m(e, n) {
        var o = n.length > 0,
          r = e.length > 0,
          a = function(i, a, s, l, c) {
            var p, u, h, d = 0,
              f = "0",
              g = i && [],
              v = [],
              m = A,
              x = i || r && w.find.TAG("*", c),
              b = q += null == m ? 1 : Math.random() || .1,
              k = x.length;
            for (c && (A = a === N || a || c); f !== k && null != (p = x[f]); f++) {
              if (r && p) {
                for (u = 0, a || p.ownerDocument === N || (j(p), s = !$); h = e[u++];)
                  if (h(p, a || N, s)) {
                    l.push(p);
                    break
                  } c && (q = b)
              }
              o && ((p = !h && p) && d--, i && g.push(p))
            }
            if (d += f, o && f !== d) {
              for (u = 0; h = n[u++];) h(g, v, a, s);
              if (i) {
                if (d > 0)
                  for (; f--;) g[f] || v[f] || (v[f] = Q.call(l));
                v = y(v)
              }
              G.apply(l, v), c && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
            }
            return c && (q = b, A = m), g
          };
        return o ? i(a) : a
      }
      var x, b, w, k, T, C, S, E, A, M, O, j, N, D, $, H, L, I, P, _ = "sizzle" + 1 * new Date,
        R = e.document,
        q = 0,
        z = 0,
        B = n(),
        V = n(),
        F = n(),
        W = function(e, t) {
          return e === t && (O = !0), 0
        },
        U = {}.hasOwnProperty,
        X = [],
        Q = X.pop,
        J = X.push,
        G = X.push,
        Y = X.slice,
        K = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        oe = new RegExp(ee + "+", "g"),
        re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        ae = new RegExp("^" + ee + "*," + ee + "*"),
        se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ce = new RegExp(ie),
        pe = new RegExp("^" + te + "$"),
        ue = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + ie),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        he = /^(?:input|select|textarea|button)$/i,
        de = /^h\d$/i,
        fe = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        me = function(e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        be = function(e, t) {
          return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        we = function() {
          j()
        },
        ke = h(function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        G.apply(X = Y.call(R.childNodes), R.childNodes), X[R.childNodes.length].nodeType
      } catch (e) {
        G = {
          apply: X.length ? function(e, t) {
            J.apply(e, Y.call(t))
          } : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }
      b = t.support = {}, T = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, j = t.setDocument = function(e) {
        var t, n, i = e ? e.ownerDocument || e : R;
        return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, D = N.documentElement, $ = !T(N), R !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = o(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), b.getElementsByTagName = o(function(e) {
          return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
        }), b.getElementsByClassName = fe.test(N.getElementsByClassName), b.getById = o(function(e) {
          return D.appendChild(e).id = _, !N.getElementsByName || !N.getElementsByName(_).length
        }), b.getById ? (w.filter.ID = function(e) {
          var t = e.replace(ve, me);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }, w.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && $) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (w.filter.ID = function(e) {
          var t = e.replace(ve, me);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }, w.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && $) {
            var n, i, o, r = t.getElementById(e);
            if (r) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
              for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
            }
            return []
          }
        }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, i = [],
            o = 0,
            r = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return r
        }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && $) return t.getElementsByClassName(e)
        }, L = [], H = [], (b.qsa = fe.test(N.querySelectorAll)) && (o(function(e) {
          D.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || H.push(".#.+[+~]")
        }), o(function(e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = N.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
        })), (b.matchesSelector = fe.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
          b.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), L.push("!=", ie)
        }), H = H.length && new RegExp(H.join("|")), L = L.length && new RegExp(L.join("|")), t = fe.test(D.compareDocumentPosition), P = t || fe.test(D.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, W = t ? function(e, t) {
          if (e === t) return O = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === R && P(R, e) ? -1 : t === N || t.ownerDocument === R && P(R, t) ? 1 : M ? K(M, e) - K(M, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return O = !0, 0;
          var n, i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            l = [t];
          if (!o || !r) return e === N ? -1 : t === N ? 1 : o ? -1 : r ? 1 : M ? K(M, e) - K(M, t) : 0;
          if (o === r) return a(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) l.unshift(n);
          for (; s[i] === l[i];) i++;
          return i ? a(s[i], l[i]) : s[i] === R ? -1 : l[i] === R ? 1 : 0
        }, N) : N
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== N && j(e), n = n.replace(le, "='$1']"), b.matchesSelector && $ && !F[n + " "] && (!L || !L.test(n)) && (!H || !H.test(n))) try {
          var i = I.call(e, n);
          if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {}
        return t(n, N, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== N && j(e), P(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== N && j(e);
        var n = w.attrHandle[t.toLowerCase()],
          i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
        return void 0 !== i ? i : b.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.escape = function(e) {
        return (e + "").replace(xe, be)
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          i = 0,
          o = 0;
        if (O = !b.detectDuplicates, M = !b.sortStable && e.slice(0), e.sort(W), O) {
          for (; t = e[o++];) t === e[o] && (i = n.push(o));
          for (; i--;) e.splice(n[i], 1)
        }
        return M = null, e
      }, k = t.getText = function(e) {
        var t, n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else
          for (; t = e[i++];) n += k(t);
        return n
      }, (w = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: ue,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ve, me), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ve, me).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = B[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, i) {
            return function(o) {
              var r = t.attr(o, e);
              return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === o ? function(e) {
              return !!e.parentNode
            } : function(t, n, l) {
              var c, p, u, h, d, f, y = r !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !l && !s,
                x = !1;
              if (g) {
                if (r) {
                  for (; y;) {
                    for (h = t; h = h[y];)
                      if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                    f = y = "only" === e && !f && "nextSibling"
                  }
                  return !0
                }
                if (f = [a ? g.firstChild : g.lastChild], a && m) {
                  for (x = (d = (c = (p = (u = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === q && c[1]) && c[2], h = d && g.childNodes[d]; h = ++d && h && h[y] || (x = d = 0) || f.pop();)
                    if (1 === h.nodeType && ++x && h === t) {
                      p[e] = [q, d, x];
                      break
                    }
                } else if (m && (x = d = (c = (p = (u = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === q && c[1]), !1 === x)
                  for (;
                    (h = ++d && h && h[y] || (x = d = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++x || (m && ((p = (u = h[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [q, x]), h !== t)););
                return (x -= o) === i || x % i == 0 && x / i >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return r[_] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
              for (var i, o = r(e, n), a = o.length; a--;) e[i = K(e, o[a])] = !(t[i] = o[a])
            }) : function(e) {
              return r(e, 0, o)
            }) : r
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              o = S(e.replace(re, "$1"));
            return o[_] ? i(function(e, t, n, i) {
              for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
            }) : function(e, i, r) {
              return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
            }
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: i(function(e) {
            return e = e.replace(ve, me),
              function(t) {
                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
              }
          }),
          lang: i(function(e) {
            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, me).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === D
          },
          focus: function(e) {
            return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: s(!1),
          disabled: s(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !w.pseudos.empty(e)
          },
          header: function(e) {
            return de.test(e.nodeName)
          },
          input: function(e) {
            return he.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: l(function() {
            return [0]
          }),
          last: l(function(e, t) {
            return [t - 1]
          }),
          eq: l(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: l(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: l(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: l(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e
          }),
          gt: l(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }).pseudos.nth = w.pseudos.eq;
      for (x in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[x] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(x);
      for (x in {
          submit: !0,
          reset: !0
        }) w.pseudos[x] = function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }(x);
      return p.prototype = w.filters = w.pseudos, w.setFilters = new p, C = t.tokenize = function(e, n) {
        var i, o, r, a, s, l, c, p = V[e + " "];
        if (p) return n ? 0 : p.slice(0);
        for (s = e, l = [], c = w.preFilter; s;) {
          i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
            value: i,
            type: o[0].replace(re, " ")
          }), s = s.slice(i.length));
          for (a in w.filter) !(o = ue[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
            value: i,
            type: a,
            matches: o
          }), s = s.slice(i.length));
          if (!i) break
        }
        return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
      }, S = t.compile = function(e, t) {
        var n, i = [],
          o = [],
          r = F[e + " "];
        if (!r) {
          for (t || (t = C(e)), n = t.length; n--;)(r = v(t[n]))[_] ? i.push(r) : o.push(r);
          (r = F(e, m(o, i))).selector = e
        }
        return r
      }, E = t.select = function(e, t, n, i) {
        var o, r, a, s, l, p = "function" == typeof e && e,
          h = !i && C(e = p.selector || e);
        if (n = n || [], 1 === h.length) {
          if ((r = h[0] = h[0].slice(0)).length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && $ && w.relative[r[1].type]) {
            if (!(t = (w.find.ID(a.matches[0].replace(ve, me), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(r.shift().value.length)
          }
          for (o = ue.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
            if ((l = w.find[s]) && (i = l(a.matches[0].replace(ve, me), ge.test(r[0].type) && c(t.parentNode) || t))) {
              if (r.splice(o, 1), !(e = i.length && u(r))) return G.apply(n, i), n;
              break
            }
        }
        return (p || S(e, h))(i, t, !$, n, !t || ge.test(e) && c(t.parentNode) || t), n
      }, b.sortStable = _.split("").sort(W).join("") === _, b.detectDuplicates = !!O, j(), b.sortDetached = o(function(e) {
        return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
      }), o(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), b.attributes && o(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || r("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), o(function(e) {
        return null == e.getAttribute("disabled")
      }) || r(Z, function(e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), t
    }(e);
    we.find = Te, we.expr = Te.selectors, we.expr[":"] = we.expr.pseudos, we.uniqueSort = we.unique = Te.uniqueSort, we.text = Te.getText, we.isXMLDoc = Te.isXML, we.contains = Te.contains, we.escapeSelector = Te.escape;
    var Ce = function(e, t, n) {
        for (var i = [], o = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && we(e).is(n)) break;
            i.push(e)
          } return i
      },
      Se = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      Ee = we.expr.match.needsContext,
      Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? we.find.matchesSelector(i, e) ? [i] : [] : we.find.matches(e, we.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, we.fn.extend({
      find: function(e) {
        var t, n, i = this.length,
          o = this;
        if ("string" != typeof e) return this.pushStack(we(e).filter(function() {
          for (t = 0; t < i; t++)
            if (we.contains(o[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < i; t++) we.find(e, o[t], n);
        return i > 1 ? we.uniqueSort(n) : n
      },
      filter: function(e) {
        return this.pushStack(a(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(a(this, e || [], !0))
      },
      is: function(e) {
        return !!a(this, "string" == typeof e && Ee.test(e) ? we(e) : e || [], !1).length
      }
    });
    var Me, Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function(e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || Me, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Oe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), Ae.test(i[1]) && we.isPlainObject(t))
            for (i in t) me(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return (o = ae.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : me(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this)
    }).prototype = we.fn, Me = we(ae);
    var je = /^(?:parents|prev(?:Until|All))/,
      Ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    we.fn.extend({
      has: function(e) {
        var t = we(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (we.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, i = 0,
          o = this.length,
          r = [],
          a = "string" != typeof e && we(e);
        if (!Ee.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                r.push(n);
                break
              } return this.pushStack(r.length > 1 ? we.uniqueSort(r) : r)
      },
      index: function(e) {
        return e ? "string" == typeof e ? ue.call(we(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), we.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return Ce(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return Ce(e, "parentNode", n)
      },
      next: function(e) {
        return s(e, "nextSibling")
      },
      prev: function(e) {
        return s(e, "previousSibling")
      },
      nextAll: function(e) {
        return Ce(e, "nextSibling")
      },
      prevAll: function(e) {
        return Ce(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return Ce(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return Ce(e, "previousSibling", n)
      },
      siblings: function(e) {
        return Se((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return Se(e.firstChild)
      },
      contents: function(e) {
        return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), we.merge([], e.childNodes))
      }
    }, function(e, t) {
      we.fn[e] = function(n, i) {
        var o = we.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = we.filter(i, o)), this.length > 1 && (Ne[e] || we.uniqueSort(o), je.test(e) && o.reverse()), this.pushStack(o)
      }
    });
    var De = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function(e) {
      e = "string" == typeof e ? l(e) : we.extend({}, e);
      var t, n, o, r, a = [],
        s = [],
        c = -1,
        p = function() {
          for (r = r || e.once, o = t = !0; s.length; c = -1)
            for (n = s.shift(); ++c < a.length;) !1 === a[c].apply(n[0], n[1]) && e.stopOnFalse && (c = a.length, n = !1);
          e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
        },
        u = {
          add: function() {
            return a && (n && !t && (c = a.length - 1, s.push(n)), function t(n) {
              we.each(n, function(n, o) {
                me(o) ? e.unique && u.has(o) || a.push(o) : o && o.length && "string" !== i(o) && t(o)
              })
            }(arguments), n && !t && p()), this
          },
          remove: function() {
            return we.each(arguments, function(e, t) {
              for (var n;
                (n = we.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= c && c--
            }), this
          },
          has: function(e) {
            return e ? we.inArray(e, a) > -1 : a.length > 0
          },
          empty: function() {
            return a && (a = []), this
          },
          disable: function() {
            return r = s = [], a = n = "", this
          },
          disabled: function() {
            return !a
          },
          lock: function() {
            return r = s = [], n || t || (a = n = ""), this
          },
          locked: function() {
            return !!r
          },
          fireWith: function(e, n) {
            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || p()), this
          },
          fire: function() {
            return u.fireWith(this, arguments), this
          },
          fired: function() {
            return !!o
          }
        };
      return u
    }, we.extend({
      Deferred: function(t) {
        var n = [
            ["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2],
            ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          o = {
            state: function() {
              return i
            },
            always: function() {
              return r.done(arguments).fail(arguments), this
            },
            catch: function(e) {
              return o.then(null, e)
            },
            pipe: function() {
              var e = arguments;
              return we.Deferred(function(t) {
                we.each(n, function(n, i) {
                  var o = me(e[i[4]]) && e[i[4]];
                  r[i[1]](function() {
                    var e = o && o.apply(this, arguments);
                    e && me(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            then: function(t, i, o) {
              function r(t, n, i, o) {
                return function() {
                  var s = this,
                    l = arguments,
                    u = function() {
                      var e, u;
                      if (!(t < a)) {
                        if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, me(u) ? o ? u.call(e, r(a, n, c, o), r(a, n, p, o)) : (a++, u.call(e, r(a, n, c, o), r(a, n, p, o), r(a, n, c, n.notifyWith))) : (i !== c && (s = void 0, l = [e]), (o || n.resolveWith)(s, l))
                      }
                    },
                    h = o ? u : function() {
                      try {
                        u()
                      } catch (e) {
                        we.Deferred.exceptionHook && we.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= a && (i !== p && (s = void 0, l = [e]), n.rejectWith(s, l))
                      }
                    };
                  t ? h() : (we.Deferred.getStackHook && (h.stackTrace = we.Deferred.getStackHook()), e.setTimeout(h))
                }
              }
              var a = 0;
              return we.Deferred(function(e) {
                n[0][3].add(r(0, e, me(o) ? o : c, e.notifyWith)), n[1][3].add(r(0, e, me(t) ? t : c)), n[2][3].add(r(0, e, me(i) ? i : p))
              }).promise()
            },
            promise: function(e) {
              return null != e ? we.extend(e, o) : o
            }
          },
          r = {};
        return we.each(n, function(e, t) {
          var a = t[2],
            s = t[5];
          o[t[1]] = a.add, s && a.add(function() {
            i = s
          }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function() {
            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
          }, r[t[0] + "With"] = a.fireWith
        }), o.promise(r), t && t.call(r, r), r
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = le.call(arguments),
          r = we.Deferred(),
          a = function(e) {
            return function(n) {
              i[e] = this, o[e] = arguments.length > 1 ? le.call(arguments) : n, --t || r.resolveWith(i, o)
            }
          };
        if (t <= 1 && (u(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || me(o[n] && o[n].then))) return r.then();
        for (; n--;) u(o[n], a(n), r.reject);
        return r.promise()
      }
    });
    var $e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && $e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, we.readyException = function(t) {
      e.setTimeout(function() {
        throw t
      })
    };
    var He = we.Deferred();
    we.fn.ready = function(e) {
      return He.then(e).catch(function(e) {
        we.readyException(e)
      }), this
    }, we.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --we.readyWait : we.isReady) || (we.isReady = !0, !0 !== e && --we.readyWait > 0 || He.resolveWith(ae, [we]))
      }
    }), we.ready.then = He.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(we.ready) : (ae.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
    var Le = function(e, t, n, o, r, a, s) {
        var l = 0,
          c = e.length,
          p = null == n;
        if ("object" === i(n)) {
          r = !0;
          for (l in n) Le(e, t, l, n[l], !0, a, s)
        } else if (void 0 !== o && (r = !0, me(o) || (s = !0), p && (s ? (t.call(e, o), t = null) : (p = t, t = function(e, t, n) {
            return p.call(we(e), n)
          })), t))
          for (; l < c; l++) t(e[l], n, s ? o : o.call(e[l], l, t(e[l], n)));
        return r ? e : p ? t.call(e) : c ? t(e[0], n) : a
      },
      Ie = /^-ms-/,
      Pe = /-([a-z])/g,
      _e = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    y.uid = 1, y.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[f(t)] = n;
        else
          for (i in t) o[f(i)] = t[i];
        return o
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
      },
      access: function(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in i ? [t] : t.match(De) || []).length;
            for (; n--;) delete i[t[n]]
          }(void 0 === t || we.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !we.isEmptyObject(t)
      }
    };
    var Re = new y,
      qe = new y,
      ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Be = /[A-Z]/g;
    we.extend({
      hasData: function(e) {
        return qe.hasData(e) || Re.hasData(e)
      },
      data: function(e, t, n) {
        return qe.access(e, t, n)
      },
      removeData: function(e, t) {
        qe.remove(e, t)
      },
      _data: function(e, t, n) {
        return Re.access(e, t, n)
      },
      _removeData: function(e, t) {
        Re.remove(e, t)
      }
    }), we.fn.extend({
      data: function(e, t) {
        var n, i, o, r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (o = qe.get(r), 1 === r.nodeType && !Re.get(r, "hasDataAttrs"))) {
            for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = f(i.slice(5)), v(r, i, o[i]));
            Re.set(r, "hasDataAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each(function() {
          qe.set(this, e)
        }) : Le(this, function(t) {
          var n;
          if (r && void 0 === t) {
            if (void 0 !== (n = qe.get(r, e))) return n;
            if (void 0 !== (n = v(r, e))) return n
          } else this.each(function() {
            qe.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          qe.remove(this, e)
        })
      }
    }), we.extend({
      queue: function(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || Array.isArray(n) ? i = Re.access(e, t, we.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = we.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = we._queueHooks(e, t),
          a = function() {
            we.dequeue(e, t)
          };
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Re.get(e, n) || Re.access(e, n, {
          empty: we.Callbacks("once memory").add(function() {
            Re.remove(e, [t + "queue", n])
          })
        })
      }
    }), we.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? we.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = we.queue(this, e, t);
          we._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && we.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          we.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, i = 1,
          o = we.Deferred(),
          r = this,
          a = this.length,
          s = function() {
            --i || o.resolveWith(r, [r])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Re.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
        return s(), o.promise(t)
      }
    });
    var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Fe = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"),
      We = ["Top", "Right", "Bottom", "Left"],
      Ue = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
      },
      Xe = function(e, t, n, i) {
        var o, r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = a[r];
        return o
      },
      Qe = {};
    we.fn.extend({
      show: function() {
        return b(this, !0)
      },
      hide: function() {
        return b(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Ue(this) ? we(this).show() : we(this).hide()
        })
      }
    });
    var Je = /^(?:checkbox|radio)$/i,
      Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ye = /^$|^module$|\/(?:java|ecma)script/i,
      Ke = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
    var Ze = /<|&#?\w+;/;
    ! function() {
      var e = ae.createDocumentFragment().appendChild(ae.createElement("div")),
        t = ae.createElement("input");
      t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = ae.documentElement,
      tt = /^key/,
      nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      it = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
      global: {},
      add: function(e, t, n, i, o) {
        var r, a, s, l, c, p, u, h, d, f, y, g = Re.get(e);
        if (g)
          for (n.handler && (n = (r = n).handler, o = r.selector), o && we.find.matchesSelector(et, o), n.guid || (n.guid = we.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
              return void 0 !== we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(De) || [""]).length; c--;) d = y = (s = it.exec(t[c]) || [])[1], f = (s[2] || "").split(".").sort(), d && (u = we.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = we.event.special[d] || {}, p = we.extend({
            type: d,
            origType: y,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && we.expr.match.needsContext.test(o),
            namespace: f.join(".")
          }, r), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, a) || e.addEventListener && e.addEventListener(d, a)), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), we.event.global[d] = !0)
      },
      remove: function(e, t, n, i, o) {
        var r, a, s, l, c, p, u, h, d, f, y, g = Re.hasData(e) && Re.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(De) || [""]).length; c--;)
            if (s = it.exec(t[c]) || [], d = y = s[1], f = (s[2] || "").split(".").sort(), d) {
              for (u = we.event.special[d] || {}, h = l[d = (i ? u.delegateType : u.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) p = h[r], !o && y !== p.origType || n && n.guid !== p.guid || s && !s.test(p.namespace) || i && i !== p.selector && ("**" !== i || !p.selector) || (h.splice(r, 1), p.selector && h.delegateCount--, u.remove && u.remove.call(e, p));
              a && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || we.removeEvent(e, d, g.handle), delete l[d])
            } else
              for (d in l) we.event.remove(e, d + t[c], n, i, !0);
          we.isEmptyObject(l) && Re.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, i, o, r, a, s = we.event.fix(e),
          l = new Array(arguments.length),
          c = (Re.get(this, "events") || {})[s.type] || [],
          p = we.event.special[s.type] || {};
        for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (s.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, s)) {
          for (a = we.event.handlers.call(this, s, c), t = 0;
            (o = a[t++]) && !s.isPropagationStopped();)
            for (s.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((we.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          return p.postDispatch && p.postDispatch.call(this, s), s.result
        }
      },
      handlers: function(e, t) {
        var n, i, o, r, a, s = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? we(o, this).index(c) > -1 : we.find(o, this, null, [c]).length), a[o] && r.push(i);
              r.length && s.push({
                elem: c,
                handlers: r
              })
            } return c = this, l < t.length && s.push({
          elem: c,
          handlers: t.slice(l)
        }), s
      },
      addProp: function(e, t) {
        Object.defineProperty(we.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: me(t) ? function() {
            if (this.originalEvent) return t(this.originalEvent)
          } : function() {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function(e) {
        return e[we.expando] ? e : new we.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== E() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === E() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return r(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, we.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, we.Event = function(e, t) {
      if (!(this instanceof we.Event)) return new we.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? C : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[we.expando] = !0
    }, we.Event.prototype = {
      constructor: we.Event,
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, we.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
        var t = e.button;
        return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, we.event.addProp), we.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      we.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = this,
            o = e.relatedTarget,
            r = e.handleObj;
          return o && (o === i || we.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), we.fn.extend({
      on: function(e, t, n, i) {
        return A(this, e, t, n, i)
      },
      one: function(e, t, n, i) {
        return A(this, e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, we(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function() {
          we.event.remove(this, e, n, t)
        })
      }
    });
    var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      rt = /<script|<style|<link/i,
      at = /checked\s*(?:[^=]|=\s*.checked.)/i,
      st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
      htmlPrefilter: function(e) {
        return e.replace(ot, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var i, o, r, a, s = e.cloneNode(!0),
          l = we.contains(e.ownerDocument, e);
        if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
          for (a = w(s), i = 0, o = (r = w(e)).length; i < o; i++) D(r[i], a[i]);
        if (t)
          if (n)
            for (r = r || w(e), a = a || w(s), i = 0, o = r.length; i < o; i++) N(r[i], a[i]);
          else N(e, s);
        return (a = w(s, "script")).length > 0 && k(a, !l && w(e, "script")), s
      },
      cleanData: function(e) {
        for (var t, n, i, o = we.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (_e(n)) {
            if (t = n[Re.expando]) {
              if (t.events)
                for (i in t.events) o[i] ? we.event.remove(n, i) : we.removeEvent(n, i, t.handle);
              n[Re.expando] = void 0
            }
            n[qe.expando] && (n[qe.expando] = void 0)
          }
      }
    }), we.fn.extend({
      detach: function(e) {
        return H(this, e, !0)
      },
      remove: function(e) {
        return H(this, e)
      },
      text: function(e) {
        return Le(this, function(e) {
          return void 0 === e ? we.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return $(this, arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, e).appendChild(e)
        })
      },
      prepend: function() {
        return $(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = M(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return $(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return $(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (we.cleanData(w(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return we.clone(this, e, t)
        })
      },
      html: function(e) {
        return Le(this, function(e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !rt.test(e) && !Ke[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = we.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (we.cleanData(w(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return $(this, arguments, function(t) {
          var n = this.parentNode;
          we.inArray(this, e) < 0 && (we.cleanData(w(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), we.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      we.fn[e] = function(e) {
        for (var n, i = [], o = we(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), we(o[a])[t](n), pe.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var lt = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"),
      ct = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
      },
      pt = new RegExp(We.join("|"), "i");
    ! function() {
      function t() {
        if (c) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", et.appendChild(l).appendChild(c);
          var t = e.getComputedStyle(c);
          i = "1%" !== t.top, s = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", et.removeChild(l), c = null
        }
      }

      function n(e) {
        return Math.round(parseFloat(e))
      }
      var i, o, r, a, s, l = ae.createElement("div"),
        c = ae.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === c.style.backgroundClip, we.extend(ve, {
        boxSizingReliable: function() {
          return t(), o
        },
        pixelBoxStyles: function() {
          return t(), a
        },
        pixelPosition: function() {
          return t(), i
        },
        reliableMarginLeft: function() {
          return t(), s
        },
        scrollboxSize: function() {
          return t(), r
        }
      }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/,
      ht = /^--/,
      dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      ft = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      yt = ["Webkit", "Moz", "ms"],
      gt = ae.createElement("div").style;
    we.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = L(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, a, s = f(t),
            l = ht.test(t),
            c = e.style;
          if (l || (t = _(s)), a = we.cssHooks[t] || we.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
          "string" == (r = typeof n) && (o = Fe.exec(n)) && o[1] && (n = m(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (we.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
        }
      },
      css: function(e, t, n, i) {
        var o, r, a, s = f(t);
        return ht.test(t) || (t = _(s)), (a = we.cssHooks[t] || we.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = L(e, t, i)), "normal" === o && t in ft && (o = ft[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
      }
    }), we.each(["height", "width"], function(e, t) {
      we.cssHooks[t] = {
        get: function(e, n, i) {
          if (n) return !ut.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, i) : Xe(e, dt, function() {
            return z(e, t, i)
          })
        },
        set: function(e, n, i) {
          var o, r = ct(e),
            a = "border-box" === we.css(e, "boxSizing", !1, r),
            s = i && q(e, t, i, a, r);
          return a && ve.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - q(e, t, "border", !1, r) - .5)), s && (o = Fe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = we.css(e, t)), R(e, n, s)
        }
      }
    }), we.cssHooks.marginLeft = I(ve.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), we.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      we.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + We[i] + t] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, "margin" !== e && (we.cssHooks[e + t].set = R)
    }), we.fn.extend({
      css: function(e, t) {
        return Le(this, function(e, t, n) {
          var i, o, r = {},
            a = 0;
          if (Array.isArray(t)) {
            for (i = ct(e), o = t.length; a < o; a++) r[t[a]] = we.css(e, t[a], !1, i);
            return r
          }
          return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), we.Tween = B, B.prototype = {
      constructor: B,
      init: function(e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || we.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (we.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = B.propHooks[this.prop];
        return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
      }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
          we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, we.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, we.fx = B.prototype.init, we.fx.step = {};
    var vt, mt, xt = /^(?:toggle|show|hide)$/,
      bt = /queueHooks$/;
    we.Animation = we.extend(J, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return m(n.elem, e, Fe.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          me(e) ? (t = e, e = ["*"]) : e = e.match(De);
          for (var n, i = 0, o = e.length; i < o; i++) n = e[i], J.tweeners[n] = J.tweeners[n] || [], J.tweeners[n].unshift(t)
        },
        prefilters: [X],
        prefilter: function(e, t) {
          t ? J.prefilters.unshift(e) : J.prefilters.push(e)
        }
      }), we.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? we.extend({}, e) : {
          complete: n || !n && t || me(e) && e,
          duration: e,
          easing: n && t || t && !me(t) && t
        };
        return we.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in we.fx.speeds ? i.duration = we.fx.speeds[i.duration] : i.duration = we.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          me(i.old) && i.old.call(this), i.queue && we.dequeue(this, i.queue)
        }, i
      }, we.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(Ue).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function(e, t, n, i) {
          var o = we.isEmptyObject(e),
            r = we.speed(t, n, i),
            a = function() {
              var t = J(this, we.extend({}, e), r);
              (o || Re.get(this, "finish")) && t.stop(!0)
            };
          return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
          var i = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = we.timers,
              a = Re.get(this);
            if (o) a[o] && a[o].stop && i(a[o]);
            else
              for (o in a) a[o] && a[o].stop && bt.test(o) && i(a[o]);
            for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
            !t && n || we.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = Re.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = we.timers,
              a = i ? i.length : 0;
            for (n.finish = !0, we.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          })
        }
      }), we.each(["toggle", "show", "hide"], function(e, t) {
        var n = we.fn[t];
        we.fn[t] = function(e, i, o) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
        }
      }), we.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        we.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i)
        }
      }), we.timers = [], we.fx.tick = function() {
        var e, t = 0,
          n = we.timers;
        for (vt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || we.fx.stop(), vt = void 0
      }, we.fx.timer = function(e) {
        we.timers.push(e), we.fx.start()
      }, we.fx.interval = 13, we.fx.start = function() {
        mt || (mt = !0, V())
      }, we.fx.stop = function() {
        mt = null
      }, we.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, we.fn.delay = function(t, n) {
        return t = we.fx ? we.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function() {
            e.clearTimeout(o)
          }
        })
      },
      function() {
        var e = ae.createElement("input"),
          t = ae.createElement("select").appendChild(ae.createElement("option"));
        e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = t.selected, (e = ae.createElement("input")).value = "t", e.type = "radio", ve.radioValue = "t" === e.value
      }();
    var wt, kt = we.expr.attrHandle;
    we.fn.extend({
      attr: function(e, t) {
        return Le(this, we.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          we.removeAttr(this, e)
        })
      }
    }), we.extend({
      attr: function(e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? we.prop(e, t, n) : (1 === r && we.isXMLDoc(e) || (o = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? wt : void 0)), void 0 !== n ? null === n ? void we.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = we.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ve.radioValue && "radio" === t && r(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i = 0,
          o = t && t.match(De);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];) e.removeAttribute(n)
      }
    }), wt = {
      set: function(e, t, n) {
        return !1 === t ? we.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = kt[t] || we.find.attr;
      kt[t] = function(e, t, i) {
        var o, r, a = t.toLowerCase();
        return i || (r = kt[a], kt[a] = o, o = null != n(e, t, i) ? a : null, kt[a] = r), o
      }
    });
    var Tt = /^(?:input|select|textarea|button)$/i,
      Ct = /^(?:a|area)$/i;
    we.fn.extend({
      prop: function(e, t) {
        return Le(this, we.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[we.propFix[e] || e]
        })
      }
    }), we.extend({
      prop: function(e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && we.isXMLDoc(e) || (t = we.propFix[t] || t, o = we.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = we.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), ve.optSelected || (we.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      we.propFix[this.toLowerCase()] = this
    }), we.fn.extend({
      addClass: function(e) {
        var t, n, i, o, r, a, s, l = 0;
        if (me(e)) return this.each(function(t) {
          we(this).addClass(e.call(this, t, Y(this)))
        });
        if ((t = K(e)).length)
          for (; n = this[l++];)
            if (o = Y(n), i = 1 === n.nodeType && " " + G(o) + " ") {
              for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (s = G(i)) && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(e) {
        var t, n, i, o, r, a, s, l = 0;
        if (me(e)) return this.each(function(t) {
          we(this).removeClass(e.call(this, t, Y(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = K(e)).length)
          for (; n = this[l++];)
            if (o = Y(n), i = 1 === n.nodeType && " " + G(o) + " ") {
              for (a = 0; r = t[a++];)
                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
              o !== (s = G(i)) && n.setAttribute("class", s)
            } return this
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : me(e) ? this.each(function(n) {
          we(this).toggleClass(e.call(this, n, Y(this), t), t)
        }) : this.each(function() {
          var t, o, r, a;
          if (i)
            for (o = 0, r = we(this), a = K(e); t = a[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = Y(this)) && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Re.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + G(Y(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var St = /\r/g;
    we.fn.extend({
      val: function(e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = me(e), this.each(function(n) {
          var o;
          1 === this.nodeType && (null == (o = i ? e.call(this, n, we(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = we.map(o, function(e) {
            return null == e ? "" : e + ""
          })), (t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
        })) : o ? (t = we.valHooks[o.type] || we.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(St, "") : null == n ? "" : n : void 0
      }
    }), we.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = we.find.attr(e, "value");
            return null != t ? t : G(we.text(e))
          }
        },
        select: {
          get: function(e) {
            var t, n, i, o = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              l = s ? null : [],
              c = s ? a + 1 : o.length;
            for (i = a < 0 ? c : s ? a : 0; i < c; i++)
              if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                if (t = we(n).val(), s) return t;
                l.push(t)
              } return l
          },
          set: function(e, t) {
            for (var n, i, o = e.options, r = we.makeArray(t), a = o.length; a--;)((i = o[a]).selected = we.inArray(we.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), we.each(["radio", "checkbox"], function() {
      we.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t)) return e.checked = we.inArray(we(e).val(), t) > -1
        }
      }, ve.checkOn || (we.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    }), ve.focusin = "onfocusin" in e;
    var Et = /^(?:focusinfocus|focusoutblur)$/,
      At = function(e) {
        e.stopPropagation()
      };
    we.extend(we.event, {
      trigger: function(t, n, i, o) {
        var r, a, s, l, c, p, u, h, d = [i || ae],
          f = fe.call(t, "type") ? t.type : t,
          y = fe.call(t, "namespace") ? t.namespace.split(".") : [];
        if (a = h = s = i = i || ae, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(f + we.event.triggered) && (f.indexOf(".") > -1 && (f = (y = f.split(".")).shift(), y.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[we.expando] ? t : new we.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : we.makeArray(n, [t]), u = we.event.special[f] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
          if (!o && !u.noBubble && !xe(i)) {
            for (l = u.delegateType || f, Et.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
            s === (i.ownerDocument || ae) && d.push(s.defaultView || s.parentWindow || e)
          }
          for (r = 0;
            (a = d[r++]) && !t.isPropagationStopped();) h = a, t.type = r > 1 ? l : u.bindType || f, (p = (Re.get(a, "events") || {})[t.type] && Re.get(a, "handle")) && p.apply(a, n), (p = c && a[c]) && p.apply && _e(a) && (t.result = p.apply(a, n), !1 === t.result && t.preventDefault());
          return t.type = f, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), n) || !_e(i) || c && me(i[f]) && !xe(i) && ((s = i[c]) && (i[c] = null), we.event.triggered = f, t.isPropagationStopped() && h.addEventListener(f, At), i[f](), t.isPropagationStopped() && h.removeEventListener(f, At), we.event.triggered = void 0, s && (i[c] = s)), t.result
        }
      },
      simulate: function(e, t, n) {
        var i = we.extend(new we.Event, n, {
          type: e,
          isSimulated: !0
        });
        we.event.trigger(i, null, t)
      }
    }), we.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          we.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return we.event.trigger(e, t, n, !0)
      }
    }), ve.focusin || we.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        we.event.simulate(t, e.target, we.event.fix(e))
      };
      we.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this,
            o = Re.access(i, t);
          o || i.addEventListener(e, n, !0), Re.access(i, t, (o || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            o = Re.access(i, t) - 1;
          o ? Re.access(i, t, o) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
        }
      }
    });
    var Mt = e.location,
      Ot = Date.now(),
      jt = /\?/;
    we.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + t), n
    };
    var Nt = /\[\]$/,
      Dt = /\r?\n/g,
      $t = /^(?:submit|button|image|reset|file)$/i,
      Ht = /^(?:input|select|textarea|keygen)/i;
    we.param = function(e, t) {
      var n, i = [],
        o = function(e, t) {
          var n = me(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function() {
        o(this.name, this.value)
      });
      else
        for (n in e) Z(n, e[n], t, o);
      return i.join("&")
    }, we.fn.extend({
      serialize: function() {
        return we.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = we.prop(this, "elements");
          return e ? we.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !we(this).is(":disabled") && Ht.test(this.nodeName) && !$t.test(e) && (this.checked || !Je.test(e))
        }).map(function(e, t) {
          var n = we(this).val();
          return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Dt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Dt, "\r\n")
          }
        }).get()
      }
    });
    var Lt = /%20/g,
      It = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qt = /^(?:GET|HEAD)$/,
      zt = /^\/\//,
      Bt = {},
      Vt = {},
      Ft = "*/".concat("*"),
      Wt = ae.createElement("a");
    Wt.href = Mt.href, we.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mt.href,
        type: "GET",
        isLocal: Rt.test(Mt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": we.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
      },
      ajaxPrefilter: ee(Bt),
      ajaxTransport: ee(Vt),
      ajax: function(t, n) {
        function i(t, n, i, s) {
          var c, h, d, b, w, k = n;
          p || (p = !0, l && e.clearTimeout(l), o = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = ie(f, T, i)), b = oe(f, b, T, c), c ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (we.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (we.etag[r] = w)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, h = b.data, c = !(d = b.error))) : (d = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || k) + "", c ? v.resolveWith(y, [h, k, T]) : v.rejectWith(y, [T, k, d]), T.statusCode(x), x = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? h : d]), m.fireWith(y, [T, k]), u && (g.trigger("ajaxComplete", [T, f]), --we.active || we.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var o, r, a, s, l, c, p, u, h, d, f = we.ajaxSetup({}, n),
          y = f.context || f,
          g = f.context && (y.nodeType || y.jquery) ? we(y) : we.event,
          v = we.Deferred(),
          m = we.Callbacks("once memory"),
          x = f.statusCode || {},
          b = {},
          w = {},
          k = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (p) {
                if (!s)
                  for (s = {}; t = _t.exec(a);) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return p ? a : null
            },
            setRequestHeader: function(e, t) {
              return null == p && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
            },
            overrideMimeType: function(e) {
              return null == p && (f.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (p) T.always(e[T.status]);
                else
                  for (t in e) x[t] = [x[t], e[t]];
              return this
            },
            abort: function(e) {
              var t = e || k;
              return o && o.abort(t), i(0, t), this
            }
          };
        if (v.promise(T), f.url = ((t || f.url || Mt.href) + "").replace(zt, Mt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(De) || [""], null == f.crossDomain) {
          c = ae.createElement("a");
          try {
            c.href = f.url, c.href = c.href, f.crossDomain = Wt.protocol + "//" + Wt.host != c.protocol + "//" + c.host
          } catch (e) {
            f.crossDomain = !0
          }
        }
        if (f.data && f.processData && "string" != typeof f.data && (f.data = we.param(f.data, f.traditional)), te(Bt, f, n, T), p) return T;
        (u = we.event && f.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qt.test(f.type), r = f.url.replace(It, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (jt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Pt, "$1"), d = (jt.test(r) ? "&" : "?") + "_=" + Ot++ + d), f.url = r + d), f.ifModified && (we.lastModified[r] && T.setRequestHeader("If-Modified-Since", we.lastModified[r]), we.etag[r] && T.setRequestHeader("If-None-Match", we.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]);
        for (h in f.headers) T.setRequestHeader(h, f.headers[h]);
        if (f.beforeSend && (!1 === f.beforeSend.call(y, T, f) || p)) return T.abort();
        if (k = "abort", m.add(f.complete), T.done(f.success), T.fail(f.error), o = te(Vt, f, n, T)) {
          if (T.readyState = 1, u && g.trigger("ajaxSend", [T, f]), p) return T;
          f.async && f.timeout > 0 && (l = e.setTimeout(function() {
            T.abort("timeout")
          }, f.timeout));
          try {
            p = !1, o.send(b, i)
          } catch (e) {
            if (p) throw e;
            i(-1, e)
          }
        } else i(-1, "No Transport");
        return T
      },
      getJSON: function(e, t, n) {
        return we.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return we.get(e, void 0, t, "script")
      }
    }), we.each(["get", "post"], function(e, t) {
      we[t] = function(e, n, i, o) {
        return me(n) && (o = o || i, i = n, n = void 0), we.ajax(we.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, we.isPlainObject(e) && e))
      }
    }), we._evalUrl = function(e) {
      return we.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, we.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (me(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      },
      wrapInner: function(e) {
        return me(e) ? this.each(function(t) {
          we(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = we(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = me(e);
        return this.each(function(n) {
          we(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          we(this).replaceWith(this.childNodes)
        }), this
      }
    }), we.expr.pseudos.hidden = function(e) {
      return !we.expr.pseudos.visible(e)
    }, we.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, we.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest
      } catch (e) {}
    };
    var Ut = {
        0: 200,
        1223: 204
      },
      Xt = we.ajaxSettings.xhr();
    ve.cors = !!Xt && "withCredentials" in Xt, ve.ajax = Xt = !!Xt, we.ajaxTransport(function(t) {
      var n, i;
      if (ve.cors || Xt && !t.crossDomain) return {
        send: function(o, r) {
          var a, s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
            for (a in t.xhrFields) s[a] = t.xhrFields[a];
          t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          for (a in o) s.setRequestHeader(a, o[a]);
          n = function(e) {
            return function() {
              n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()))
            }
          }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
            4 === s.readyState && e.setTimeout(function() {
              n && i()
            })
          }, n = n("abort");
          try {
            s.send(t.hasContent && t.data || null)
          } catch (e) {
            if (n) throw e
          }
        },
        abort: function() {
          n && n()
        }
      }
    }), we.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
    }), we.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return we.globalEval(e), e
        }
      }
    }), we.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), we.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, o) {
            t = we("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
            }), ae.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var Qt = [],
      Jt = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Qt.pop() || we.expando + "_" + Ot++;
        return this[e] = !0, e
      }
    }), we.ajaxPrefilter("json jsonp", function(t, n, i) {
      var o, r, a, s = !1 !== t.jsonp && (Jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");
      if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Jt, "$1" + o) : !1 !== t.jsonp && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
        return a || we.error(o + " was not called"), a[0]
      }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
        a = arguments
      }, i.always(function() {
        void 0 === r ? we(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Qt.push(o)), a && me(r) && r(a[0]), a = r = void 0
      }), "script"
    }), ve.createHTMLDocument = function() {
      var e = ae.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), we.parseHTML = function(e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = !1);
      var i, o, r;
      return t || (ve.createHTMLDocument ? ((i = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href, t.head.appendChild(i)) : t = ae), o = Ae.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = T([e], t, r), r && r.length && we(r).remove(), we.merge([], o.childNodes))
    }, we.fn.load = function(e, t, n) {
      var i, o, r, a = this,
        s = e.indexOf(" ");
      return s > -1 && (i = G(e.slice(s)), e = e.slice(0, s)), me(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && we.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        r = arguments, a.html(i ? we("<div>").append(we.parseHTML(e)).find(i) : e)
      }).always(n && function(e, t) {
        a.each(function() {
          n.apply(this, r || [e.responseText, t, e])
        })
      }), this
    }, we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      we.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), we.expr.pseudos.animated = function(e) {
      return we.grep(we.timers, function(t) {
        return e === t.elem
      }).length
    }, we.offset = {
      setOffset: function(e, t, n) {
        var i, o, r, a, s, l, c = we.css(e, "position"),
          p = we(e),
          u = {};
        "static" === c && (e.style.position = "relative"), s = p.offset(), r = we.css(e, "top"), l = we.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = p.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), me(t) && (t = t.call(e, n, we.extend({}, s))), null != t.top && (u.top = t.top - s.top + a), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : p.css(u)
      }
    }, we.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          we.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n, i = this[0],
            o = {
              top: 0,
              left: 0
            };
          if ("fixed" === we.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === we.css(e, "position");) e = e.parentNode;
            e && e !== i && 1 === e.nodeType && ((o = we(e).offset()).top += we.css(e, "borderTopWidth", !0), o.left += we.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - o.top - we.css(i, "marginTop", !0),
            left: t.left - o.left - we.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === we.css(e, "position");) e = e.offsetParent;
          return e || et
        })
      }
    }), we.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      we.fn[e] = function(i) {
        return Le(this, function(e, i, o) {
          var r;
          if (xe(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
          r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
        }, e, i, arguments.length)
      }
    }), we.each(["top", "left"], function(e, t) {
      we.cssHooks[t] = I(ve.pixelPosition, function(e, n) {
        if (n) return n = L(e, t), lt.test(n) ? we(e).position()[t] + "px" : n
      })
    }), we.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      we.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        we.fn[i] = function(o, r) {
          var a = arguments.length && (n || "boolean" != typeof o),
            s = n || (!0 === o || !0 === r ? "margin" : "border");
          return Le(this, function(t, n, o) {
            var r;
            return xe(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? we.css(t, n, s) : we.style(t, n, o, s)
          }, t, a ? o : void 0, a)
        }
      })
    }), we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      we.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), we.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), we.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), we.proxy = function(e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), me(e)) return i = le.call(arguments, 2), o = function() {
        return e.apply(t || this, i.concat(le.call(arguments)))
      }, o.guid = e.guid = e.guid || we.guid++, o
    }, we.holdReady = function(e) {
      e ? we.readyWait++ : we.ready(!0)
    }, we.isArray = Array.isArray, we.parseJSON = JSON.parse, we.nodeName = r, we.isFunction = me, we.isWindow = xe, we.camelCase = f, we.type = i, we.now = Date.now, we.isNumeric = function(e) {
      var t = we.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return we
    });
    var Gt = e.jQuery,
      Yt = e.$;
    return we.noConflict = function(t) {
      return e.$ === we && (e.$ = Yt), t && e.jQuery === we && (e.jQuery = Gt), we
    }, t || (e.jQuery = e.$ = we), we
  }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
  "use strict";
  var t = e.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(e) {
  "use strict";

  function t() {
    var e = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var n in t)
      if (void 0 !== e.style[n]) return {
        end: t[n]
      };
    return !1
  }
  e.fn.emulateTransitionEnd = function(t) {
    var n = !1,
      i = this;
    e(this).one("bsTransitionEnd", function() {
      n = !0
    });
    var o = function() {
      n || e(i).trigger(e.support.transition.end)
    };
    return setTimeout(o, t), this
  }, e(function() {
    e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var n = e(this),
        o = n.data("bs.alert");
      o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
    })
  }
  var n = '[data-dismiss="alert"]',
    i = function(t) {
      e(t).on("click", n, this.close)
    };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
    function n() {
      a.detach().trigger("closed.bs.alert").remove()
    }
    var o = e(this),
      r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
    var a = e("#" === r ? [] : r);
    t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  };
  var o = e.fn.alert;
  e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
    return e.fn.alert = o, this
  }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.button"),
        r = "object" == typeof t && t;
      o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
    })
  }
  var n = function(t, i) {
    this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
  };
  n.VERSION = "3.3.7", n.DEFAULTS = {
    loadingText: "loading..."
  }, n.prototype.setState = function(t) {
    var n = "disabled",
      i = this.$element,
      o = i.is("input") ? "val" : "html",
      r = i.data();
    t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
      i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
    }, this), 0)
  }, n.prototype.toggle = function() {
    var e = !0,
      t = this.$element.closest('[data-toggle="buttons"]');
    if (t.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var i = e.fn.button;
  e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
    return e.fn.button = i, this
  }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = e(n.target).closest(".btn");
    t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.carousel"),
        r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
        a = "string" == typeof t ? t : r.slide;
      o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
    })
  }
  var n = function(t, n) {
    this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, n.prototype.keydown = function(e) {
    if (!/input|textarea/i.test(e.target.tagName)) {
      switch (e.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      e.preventDefault()
    }
  }, n.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
  }, n.prototype.getItemIndex = function(e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
  }, n.prototype.getItemForDirection = function(e, t) {
    var n = this.getItemIndex(t);
    if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
    var i = "prev" == e ? -1 : 1,
      o = (n + i) % this.$items.length;
    return this.$items.eq(o)
  }, n.prototype.to = function(e) {
    var t = this,
      n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      t.to(e)
    }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
  }, n.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, n.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, n.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, n.prototype.slide = function(t, i) {
    var o = this.$element.find(".item.active"),
      r = i || this.getItemForDirection(t, o),
      a = this.interval,
      s = "next" == t ? "left" : "right",
      l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var c = r[0],
      p = e.Event("slide.bs.carousel", {
        relatedTarget: c,
        direction: s
      });
    if (this.$element.trigger(p), !p.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var u = e(this.$indicators.children()[this.getItemIndex(r)]);
        u && u.addClass("active")
      }
      var h = e.Event("slid.bs.carousel", {
        relatedTarget: c,
        direction: s
      });
      return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
        r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(h)
        }, 0)
      }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
    }
  };
  var i = e.fn.carousel;
  e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
    return e.fn.carousel = i, this
  };
  var o = function(n) {
    var i, o = e(this),
      r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
      var a = e.extend({}, r.data(), o.data()),
        s = o.attr("data-slide-to");
      s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
    }
  };
  e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {
      var n = e(this);
      t.call(n, n.data())
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return e(i)
  }

  function n(t) {
    return this.each(function() {
      var n = e(this),
        o = n.data("bs.collapse"),
        r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
      !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
    })
  }
  var i = function(t, n) {
    this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n),
      this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
  }, i.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
  }, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
        var r = e.Event("show.bs.collapse");
        if (this.$element.trigger(r), !r.isDefaultPrevented()) {
          o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
          var a = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var s = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!e.support.transition) return s.call(this);
          var l = e.camelCase(["scroll", a].join("-"));
          this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
        }
      }
    }
  }, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = e.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var n = this.dimension();
        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var o = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
      }
    }
  }, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, i.prototype.getParent = function() {
    return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
      var o = e(i);
      this.addAriaAndCollapsedClass(t(o), o)
    }, this)).end()
  }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var o = e.fn.collapse;
  e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
    return e.fn.collapse = o, this
  }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o = e(this);
    o.attr("data-target") || i.preventDefault();
    var r = t(o),
      a = r.data("bs.collapse"),
      s = a ? "toggle" : o.data();
    n.call(r, s)
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    var n = t.attr("data-target");
    n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && e(n);
    return i && i.length ? i : t.parent()
  }

  function n(n) {
    n && 3 === n.which || (e(o).remove(), e(r).each(function() {
      var i = e(this),
        o = t(i),
        r = {
          relatedTarget: this
        };
      o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
    }))
  }

  function i(t) {
    return this.each(function() {
      var n = e(this),
        i = n.data("bs.dropdown");
      i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
    })
  }
  var o = ".dropdown-backdrop",
    r = '[data-toggle="dropdown"]',
    a = function(t) {
      e(t).on("click.bs.dropdown", this.toggle)
    };
  a.VERSION = "3.3.7", a.prototype.toggle = function(i) {
    var o = e(this);
    if (!o.is(".disabled, :disabled")) {
      var r = t(o),
        a = r.hasClass("open");
      if (n(), !a) {
        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
        var s = {
          relatedTarget: this
        };
        if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
        o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
      }
      return !1
    }
  }, a.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
      var i = e(this);
      if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
        var o = t(i),
          a = o.hasClass("open");
        if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
        var s = o.find(".dropdown-menu li:not(.disabled):visible a");
        if (s.length) {
          var l = s.index(n.target);
          38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
        }
      }
    }
  };
  var s = e.fn.dropdown;
  e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
    return e.fn.dropdown = s, this
  }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
    e.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
function(e) {
  "use strict";

  function t(t, i) {
    return this.each(function() {
      var o = e(this),
        r = o.data("bs.modal"),
        a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
      r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
    })
  }
  var n = function(t, n) {
    this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, n.prototype.toggle = function(e) {
    return this.isShown ? this.hide() : this.show(e)
  }, n.prototype.show = function(t) {
    var i = this,
      o = e.Event("show.bs.modal", {
        relatedTarget: t
      });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      i.$element.one("mouseup.dismiss.bs.modal", function(t) {
        e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var o = e.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
      var r = e.Event("shown.bs.modal", {
        relatedTarget: t
      });
      o ? i.$dialog.one("bsTransitionEnd", function() {
        i.$element.trigger("focus").trigger(r)
      }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
    }))
  }, n.prototype.hide = function(t) {
    t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }, n.prototype.enforceFocus = function() {
    e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
      document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
    }, this))
  }, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
      27 == e.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, n.prototype.resize = function() {
    this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
  }, n.prototype.hideModal = function() {
    var e = this;
    this.$element.hide(), this.backdrop(function() {
      e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
    })
  }, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, n.prototype.backdrop = function(t) {
    var i = this,
      o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var r = e.support.transition && o;
      if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var a = function() {
        i.removeBackdrop(), t && t()
      };
      e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
    } else t && t()
  }, n.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, n.prototype.adjustDialog = function() {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
    })
  }, n.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, n.prototype.checkScrollbar = function() {
    var e = window.innerWidth;
    if (!e) {
      var t = document.documentElement.getBoundingClientRect();
      e = t.right - Math.abs(t.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
  }, n.prototype.setScrollbar = function() {
    var e = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
  }, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, n.prototype.measureScrollbar = function() {
    var e = document.createElement("div");
    e.className = "modal-scrollbar-measure", this.$body.append(e);
    var t = e.offsetWidth - e.clientWidth;
    return this.$body[0].removeChild(e), t
  };
  var i = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
    return e.fn.modal = i, this
  }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = e(this),
      o = i.attr("href"),
      r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
      a = r.data("bs.modal") ? "toggle" : e.extend({
        remote: !/#/.test(o) && o
      }, r.data(), i.data());
    i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
      e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
        i.is(":visible") && i.trigger("focus")
      })
    }), t.call(r, a, this)
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.tooltip"),
        r = "object" == typeof t && t;
      !o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
    })
  }
  var n = function(e, t) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, n.prototype.init = function(t, n, i) {
    if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
      var a = o[r];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
      else if ("manual" != a) {
        var s = "hover" == a ? "mouseenter" : "focusin",
          l = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = e.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.getOptions = function(t) {
    return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, n.prototype.getDelegateOptions = function() {
    var t = {},
      n = this.getDefaults();
    return this._options && e.each(this._options, function(e, i) {
      n[e] != i && (t[e] = i)
    }), t
  }, n.prototype.enter = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
      "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show())
  }, n.prototype.isInStateTrue = function() {
    for (var e in this.inState)
      if (this.inState[e]) return !0;
    return !1
  }, n.prototype.leave = function(t) {
    var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
    if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
      "out" == n.hoverState && n.hide()
    }, n.options.delay.hide)) : n.hide()
  }, n.prototype.show = function() {
    var t = e.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !i) return;
      var o = this,
        r = this.tip(),
        a = this.getUID(this.type);
      this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
      var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        c = l.test(s);
      c && (s = s.replace(l, "") || "top"), r.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var p = this.getPosition(),
        u = r[0].offsetWidth,
        h = r[0].offsetHeight;
      if (c) {
        var d = s,
          f = this.getPosition(this.$viewport);
        s = "bottom" == s && p.bottom + h > f.bottom ? "top" : "top" == s && p.top - h < f.top ? "bottom" : "right" == s && p.right + u > f.width ? "left" : "left" == s && p.left - u < f.left ? "right" : s, r.removeClass(d).addClass(s)
      }
      var y = this.getCalculatedOffset(s, p, u, h);
      this.applyPlacement(y, s);
      var g = function() {
        var e = o.hoverState;
        o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
      };
      e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
    }
  }, n.prototype.applyPlacement = function(t, n) {
    var i = this.tip(),
      o = i[0].offsetWidth,
      r = i[0].offsetHeight,
      a = parseInt(i.css("margin-top"), 10),
      s = parseInt(i.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
      using: function(e) {
        i.css({
          top: Math.round(e.top),
          left: Math.round(e.left)
        })
      }
    }, t), 0), i.addClass("in");
    var l = i[0].offsetWidth,
      c = i[0].offsetHeight;
    "top" == n && c != r && (t.top = t.top + r - c);
    var p = this.getViewportAdjustedDelta(n, t, l, c);
    p.left ? t.left += p.left : t.top += p.top;
    var u = /top|bottom/.test(n),
      h = u ? 2 * p.left - o + l : 2 * p.top - r + c,
      d = u ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(h, i[0][d], u)
  }, n.prototype.replaceArrow = function(e, t, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
  }, n.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle();
    e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
  }, n.prototype.hide = function(t) {
    function i() {
      "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
    }
    var o = this,
      r = e(this.$tip),
      a = e.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
  }, n.prototype.fixTitle = function() {
    var e = this.$element;
    (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
  }, n.prototype.hasContent = function() {
    return this.getTitle()
  }, n.prototype.getPosition = function(t) {
    t = t || this.$element;
    var n = t[0],
      i = "BODY" == n.tagName,
      o = n.getBoundingClientRect();
    null == o.width && (o = e.extend({}, o, {
      width: o.right - o.left,
      height: o.bottom - o.top
    }));
    var r = window.SVGElement && n instanceof window.SVGElement,
      a = i ? {
        top: 0,
        left: 0
      } : r ? null : t.offset(),
      s = {
        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      l = i ? {
        width: e(window).width(),
        height: e(window).height()
      } : null;
    return e.extend({}, o, s, l, a)
  }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
    return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - n / 2
    } : "top" == e ? {
      top: t.top - i,
      left: t.left + t.width / 2 - n / 2
    } : "left" == e ? {
      top: t.top + t.height / 2 - i / 2,
      left: t.left - n
    } : {
      top: t.top + t.height / 2 - i / 2,
      left: t.left + t.width
    }
  }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
    var o = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(e)) {
      var s = t.top - r - a.scroll,
        l = t.top + r - a.scroll + i;
      s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
    } else {
      var c = t.left - r,
        p = t.left + r + n;
      c < a.left ? o.left = a.left - c : p > a.right && (o.left = a.left + a.width - p)
    }
    return o
  }, n.prototype.getTitle = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
  }, n.prototype.getUID = function(e) {
    do {
      e += ~~(1e6 * Math.random())
    } while (document.getElementById(e));
    return e
  }, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, n.prototype.enable = function() {
    this.enabled = !0
  }, n.prototype.disable = function() {
    this.enabled = !1
  }, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, n.prototype.toggle = function(t) {
    var n = this;
    t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
  }, n.prototype.destroy = function() {
    var e = this;
    clearTimeout(this.timeout), this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
    })
  };
  var i = e.fn.tooltip;
  e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
    return e.fn.tooltip = i, this
  }
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.popover"),
        r = "object" == typeof t && t;
      !o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
    })
  }
  var n = function(e, t) {
    this.init("popover", e, t)
  };
  if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
  n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
  }, n.prototype.setContent = function() {
    var e = this.tip(),
      t = this.getTitle(),
      n = this.getContent();
    e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
  }, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, n.prototype.getContent = function() {
    var e = this.$element,
      t = this.options;
    return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
  }, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var i = e.fn.popover;
  e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
    return e.fn.popover = i, this
  }
}(jQuery),
function(e) {
  "use strict";

  function t(n, i) {
    this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
  }

  function n(n) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.scrollspy"),
        r = "object" == typeof n && n;
      o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
    })
  }
  t.VERSION = "3.3.7", t.DEFAULTS = {
    offset: 10
  }, t.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, t.prototype.refresh = function() {
    var t = this,
      n = "offset",
      i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var t = e(this),
        o = t.data("target") || t.attr("href"),
        r = /^#./.test(o) && e(o);
      return r && r.length && r.is(":visible") && [
        [r[n]().top + i, o]
      ] || null
    }).sort(function(e, t) {
      return e[0] - t[0]
    }).each(function() {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, t.prototype.process = function() {
    var e, t = this.$scrollElement.scrollTop() + this.options.offset,
      n = this.getScrollHeight(),
      i = this.options.offset + n - this.$scrollElement.height(),
      o = this.offsets,
      r = this.targets,
      a = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
    if (a && t < o[0]) return this.activeTarget = null, this.clear();
    for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
  }, t.prototype.activate = function(t) {
    this.activeTarget = t, this.clear();
    var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      i = e(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
  }, t.prototype.clear = function() {
    e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var i = e.fn.scrollspy;
  e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
    return e.fn.scrollspy = i, this
  }, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {
      var t = e(this);
      n.call(t, t.data())
    })
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.tab");
      o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
    })
  }
  var n = function(t) {
    this.element = e(t)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var t = this.element,
      n = t.closest("ul:not(.dropdown-menu)"),
      i = t.data("target");
    if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var o = n.find(".active:last a"),
        r = e.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        a = e.Event("show.bs.tab", {
          relatedTarget: o[0]
        });
      if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var s = e(i);
        this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
          o.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          })
        })
      }
    }
  }, n.prototype.activate = function(t, i, o) {
    function r() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var a = i.find("> .active"),
      s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
    a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
  };
  var i = e.fn.tab;
  e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
    return e.fn.tab = i, this
  };
  var o = function(n) {
    n.preventDefault(), t.call(e(this), "show")
  };
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {
    return this.each(function() {
      var i = e(this),
        o = i.data("bs.affix"),
        r = "object" == typeof t && t;
      o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
    })
  }
  var n = function(t, i) {
    this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
  }, n.prototype.getState = function(e, t, n, i) {
    var o = this.$target.scrollTop(),
      r = this.$element.offset(),
      a = this.$target.height();
    if (null != n && "top" == this.affixed) return o < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= e - i) && "bottom";
    var s = null == this.affixed,
      l = s ? o : r.top,
      c = s ? a : t;
    return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom"
  }, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var e = this.$target.scrollTop(),
      t = this.$element.offset();
    return this.pinnedOffset = t.top - e
  }, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(e.proxy(this.checkPosition, this), 1)
  }, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        i = this.options.offset,
        o = i.top,
        r = i.bottom,
        a = Math.max(e(document).height(), e(document.body).height());
      "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
      var s = this.getState(a, t, o, r);
      if (this.affixed != s) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (s ? "-" + s : ""),
          c = e.Event(l + ".bs.affix");
        if (this.$element.trigger(c), c.isDefaultPrevented()) return;
        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == s && this.$element.offset({
        top: a - t - r
      })
    }
  };
  var i = e.fn.affix;
  e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
    return e.fn.affix = i, this
  }, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {
      var n = e(this),
        i = n.data();
      i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
    })
  })
}(jQuery),
function(e) {
  if (!e.hasInitialised) {
    var t = {
      escapeRegExp: function(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      },
      hasClass: function(e, t) {
        var n = " ";
        return 1 === e.nodeType && (n + e.className + n).replace(/[\n\t]/g, n).indexOf(n + t + n) >= 0
      },
      addClass: function(e, t) {
        e.className += " " + t
      },
      removeClass: function(e, t) {
        var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
        e.className = e.className.replace(n, "")
      },
      interpolateString: function(e, t) {
        var n = /{{([a-z][a-z0-9\-_]*)}}/gi;
        return e.replace(n, function(e) {
          return t(arguments[1]) || ""
        })
      },
      getCookie: function(e) {
        var t = "; " + document.cookie,
          n = t.split("; " + e + "=");
        return n.length < 2 ? void 0 : n.pop().split(";").shift()
      },
      setCookie: function(e, t, n, i, o) {
        var r = new Date;
        r.setDate(r.getDate() + (n || 365));
        var a = [e + "=" + t, "expires=" + r.toUTCString(), "path=" + (o || "/")];
        i && a.push("domain=" + i), document.cookie = a.join(";")
      },
      deepExtend: function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
        return e
      },
      throttle: function(e, t) {
        var n = !1;
        return function() {
          n || (e.apply(this, arguments), n = !0, setTimeout(function() {
            n = !1
          }, t))
        }
      },
      hash: function(e) {
        var t, n, i, o = 0;
        if (0 === e.length) return o;
        for (t = 0, i = e.length; t < i; ++t) n = e.charCodeAt(t), o = (o << 5) - o + n, o |= 0;
        return o
      },
      normaliseHex: function(e) {
        return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
      },
      getContrast: function(e) {
        return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
      },
      getLuminance: function(e) {
        var t = parseInt(this.normaliseHex(e), 16),
          n = 38 + (t >> 16),
          i = 38 + (t >> 8 & 255),
          o = 38 + (255 & t);
        return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
      },
      isMobile: function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      },
      isPlainObject: function(e) {
        return "object" == typeof e && null !== e && e.constructor == Object
      }
    };
    e.status = {
      deny: "deny",
      allow: "allow",
      dismiss: "dismiss"
    }, e.transitionEnd = function() {
      var e = document.createElement("div"),
        t = {
          t: "transitionend",
          OT: "oTransitionEnd",
          msT: "MSTransitionEnd",
          MozT: "transitionend",
          WebkitT: "webkitTransitionEnd"
        };
      for (var n in t)
        if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"]) return t[n];
      return ""
    }(), e.hasTransition = !!e.transitionEnd;
    var n = Object.keys(e.status).map(t.escapeRegExp);
    e.customStyles = {}, e.Popup = function() {
      function i() {
        this.initialise.apply(this, arguments)
      }

      function o(e) {
        this.openingTimeout = null, t.removeClass(e, "cc-invisible")
      }

      function r(t) {
        t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
      }

      function a() {
        var t = this.options.onInitialise.bind(this);
        if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
        if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
        var n = Object.keys(e.status),
          i = this.getStatus(),
          o = n.indexOf(i) >= 0;
        return o && t(i), o
      }

      function s() {
        var e = this.options.position.split("-"),
          t = [];
        return e.forEach(function(e) {
          t.push("cc-" + e)
        }), t
      }

      function l() {
        var e = this.options,
          n = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
        t.isMobile() && (n = "floating");
        var i = ["cc-" + n, "cc-type-" + e.type, "cc-theme-" + e.theme];
        e.static && i.push("cc-static"), i.push.apply(i, s.call(this));
        h.call(this, this.options.palette);
        return this.customStyleSelector && i.push(this.customStyleSelector), i
      }

      function c() {
        var e = {},
          n = this.options;
        n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message), Object.keys(n.elements).forEach(function(i) {
          e[i] = t.interpolateString(n.elements[i], function(e) {
            var t = n.content[e];
            return e && "string" == typeof t && t.length ? t : ""
          })
        });
        var i = n.compliance[n.type];
        i || (i = n.compliance.info), e.compliance = t.interpolateString(i, function(t) {
          return e[t]
        });
        var o = n.layouts[n.layout];
        return o || (o = n.layouts.basic), t.interpolateString(o, function(t) {
          return e[t]
        })
      }

      function p(n) {
        var i = this.options,
          o = document.createElement("div"),
          r = i.container && 1 === i.container.nodeType ? i.container : document.body;
        o.innerHTML = n;
        var a = o.children[0];
        return a.style.display = "none", t.hasClass(a, "cc-window") && e.hasTransition && t.addClass(a, "cc-invisible"), this.onButtonClick = u.bind(this), a.addEventListener("click", this.onButtonClick), i.autoAttach && (r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a)), a
      }

      function u(i) {
        var o = i.target;
        if (t.hasClass(o, "cc-btn")) {
          var r = o.className.match(new RegExp("\\bcc-(" + n.join("|") + ")\\b")),
            a = r && r[1] || !1;
          a && (this.setStatus(a), this.close(!0))
        }
        t.hasClass(o, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(o, "cc-revoke") && this.revokeChoice()
      }

      function h(e) {
        var n = t.hash(JSON.stringify(e)),
          i = "cc-color-override-" + n,
          o = t.isPlainObject(e);
        return this.customStyleSelector = o ? i : null, o && d(n, e, "." + i), o
      }

      function d(n, i, o) {
        if (e.customStyles[n]) return void++e.customStyles[n].references;
        var r = {},
          a = i.popup,
          s = i.button,
          l = i.highlight;
        a && (a.text = a.text ? a.text : t.getContrast(a.background), a.link = a.link ? a.link : a.text, r[o + ".cc-window"] = ["color: " + a.text, "background-color: " + a.background], r[o + ".cc-revoke"] = ["color: " + a.text, "background-color: " + a.background], r[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + a.link], s && (s.text = s.text ? s.text : t.getContrast(s.background), s.border = s.border ? s.border : "transparent", r[o + " .cc-btn"] = ["color: " + s.text, "border-color: " + s.border, "background-color: " + s.background], "transparent" != s.background && (r[o + " .cc-btn:hover, " + o + " .cc-btn:focus"] = ["background-color: " + f(s.background)]), l ? (l.text = l.text ? l.text : t.getContrast(l.background), l.border = l.border ? l.border : "transparent", r[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : r[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + a.text]));
        var c = document.createElement("style");
        document.head.appendChild(c), e.customStyles[n] = {
          references: 1,
          element: c.sheet
        };
        var p = -1;
        for (var u in r) r.hasOwnProperty(u) && c.sheet.insertRule(u + "{" + r[u].join(";") + "}", ++p)
      }

      function f(e) {
        return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
      }

      function y(n) {
        if (t.isPlainObject(n)) {
          var i = t.hash(JSON.stringify(n)),
            o = e.customStyles[i];
          if (o && !--o.references) {
            var r = o.element.ownerNode;
            r && r.parentNode && r.parentNode.removeChild(r), e.customStyles[i] = null
          }
        }
      }

      function g(e, t) {
        for (var n = 0, i = e.length; n < i; ++n) {
          var o = e[n];
          if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
        }
        return !1
      }

      function v() {
        var t = this.setStatus.bind(this),
          n = this.options.dismissOnTimeout;
        "number" == typeof n && n >= 0 && (this.dismissTimeout = window.setTimeout(function() {
          t(e.status.dismiss)
        }, Math.floor(n)));
        var i = this.options.dismissOnScroll;
        if ("number" == typeof i && i >= 0) {
          var o = function(n) {
            window.pageYOffset > Math.floor(i) && (t(e.status.dismiss), window.removeEventListener("scroll", o), this.onWindowScroll = null)
          };
          this.onWindowScroll = o, window.addEventListener("scroll", o)
        }
      }

      function m() {
        if ("info" != this.options.type && (this.options.revokable = !0), t.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
          var e = s.call(this);
          this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
          var n = this.options.revokeBtn.replace("{{classes}}", e.join(" "));
          this.revokeBtn = p.call(this, n);
          var i = this.revokeBtn;
          if (this.options.animateRevokable) {
            var o = t.throttle(function(e) {
              var n = !1,
                o = window.innerHeight - 20;
              t.hasClass(i, "cc-top") && e.clientY < 20 && (n = !0), t.hasClass(i, "cc-bottom") && e.clientY > o && (n = !0), n ? t.hasClass(i, "cc-active") || t.addClass(i, "cc-active") : t.hasClass(i, "cc-active") && t.removeClass(i, "cc-active")
            }, 200);
            this.onMouseMove = o, window.addEventListener("mousemove", o)
          }
        }
      }
      var x = {
        enabled: !0,
        container: null,
        cookie: {
          name: "cookieconsent_status",
          path: "/",
          domain: "",
          expiryDays: 365
        },
        onPopupOpen: function() {},
        onPopupClose: function() {},
        onInitialise: function(e) {},
        onStatusChange: function(e, t) {},
        onRevokeChoice: function() {},
        content: {
          header: "Cookies used on the website!",
          message: "This website uses cookies to ensure you get the best experience on our website.",
          dismiss: "Got it!",
          allow: "Allow cookies",
          deny: "Decline",
          link: "Learn more",
          href: "http://cookiesandyou.com",
          close: "&#x274c;"
        },
        elements: {
          header: '<span class="cc-header">{{header}}</span>&nbsp;',
          message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
          messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
          dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
          allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
          deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
          link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
          close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
        },
        window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
        revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
        compliance: {
          info: '<div class="cc-compliance">{{dismiss}}</div>',
          "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
          "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
        },
        type: "info",
        layouts: {
          basic: "{{messagelink}}{{compliance}}",
          "basic-close": "{{messagelink}}{{compliance}}{{close}}",
          "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
        },
        layout: "basic",
        position: "bottom",
        theme: "block",
        static: !1,
        palette: null,
        revokable: !1,
        animateRevokable: !0,
        showLink: !0,
        dismissOnScroll: !1,
        dismissOnTimeout: !1,
        autoOpen: !0,
        autoAttach: !0,
        whitelistPage: [],
        blacklistPage: [],
        overrideHTML: null
      };
      return i.prototype.initialise = function(e) {
        this.options && this.destroy(), t.deepExtend(this.options = {}, x), t.isPlainObject(e) && t.deepExtend(this.options, e), a.call(this) && (this.options.enabled = !1), g(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), g(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
        var n = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", c.call(this)),
          i = this.options.overrideHTML;
        if ("string" == typeof i && i.length && (n = i), this.options.static) {
          var o = p.call(this, '<div class="cc-grower">' + n + "</div>");
          o.style.display = "", this.element = o.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
        } else this.element = p.call(this, n);
        v.call(this), m.call(this), this.options.autoOpen && this.autoOpen()
      }, i.prototype.destroy = function() {
        this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, y(this.options.palette), this.options = null
      }, i.prototype.open = function(t) {
        if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
      }, i.prototype.close = function(t) {
        if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
      }, i.prototype.fadeIn = function() {
        var n = this.element;
        if (e.hasTransition && n && (this.afterTransition && r.call(this, n), t.hasClass(n, "cc-invisible"))) {
          if (n.style.display = "", this.options.static) {
            var i = this.element.clientHeight;
            this.element.parentNode.style.maxHeight = i + "px"
          }
          this.openingTimeout = setTimeout(o.bind(this, n), 20)
        }
      }, i.prototype.fadeOut = function() {
        var n = this.element;
        e.hasTransition && n && (this.openingTimeout && (clearTimeout(this.openingTimeout), o.bind(this, n)), t.hasClass(n, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = r.bind(this, n), n.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(n, "cc-invisible")))
      }, i.prototype.isOpen = function() {
        return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
      }, i.prototype.toggleRevokeButton = function(e) {
        this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
      }, i.prototype.revokeChoice = function(e) {
        this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
      }, i.prototype.hasAnswered = function(t) {
        return Object.keys(e.status).indexOf(this.getStatus()) >= 0
      }, i.prototype.hasConsented = function(t) {
        var n = this.getStatus();
        return n == e.status.allow || n == e.status.dismiss
      }, i.prototype.autoOpen = function(e) {
        !this.hasAnswered() && this.options.enabled && this.open()
      }, i.prototype.setStatus = function(n) {
        var i = this.options.cookie,
          o = t.getCookie(i.name),
          r = Object.keys(e.status).indexOf(o) >= 0;
        Object.keys(e.status).indexOf(n) >= 0 ? (t.setCookie(i.name, n, i.expiryDays, i.domain, i.path), this.options.onStatusChange.call(this, n, r)) : this.clearStatus()
      }, i.prototype.getStatus = function() {
        return t.getCookie(this.options.cookie.name)
      }, i.prototype.clearStatus = function() {
        var e = this.options.cookie;
        t.setCookie(e.name, "", -1, e.domain, e.path)
      }, i
    }(), e.Location = function() {
      function e(e) {
        t.deepExtend(this.options = {}, r), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
      }

      function n(e, t, n) {
        var i, o = document.createElement("script");
        o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
          var e = o.readyState;
          clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
        }, document.body.appendChild(o), i = setTimeout(function() {
          t.done = !0, t(), o.onreadystatechange = o.onload = null
        }, n)
      }

      function i(e, t, n, i, o) {
        var r = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
        if (r.open(i ? "POST" : "GET", e, 1), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
          for (var a = 0, s = o.length; a < s; ++a) {
            var l = o[a].split(":", 2);
            r.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
          }
        "function" == typeof t && (r.onreadystatechange = function() {
          r.readyState > 3 && t(r)
        }), r.send(i)
      }

      function o(e) {
        return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
      }
      var r = {
        timeout: 5e3,
        services: ["freegeoip", "ipinfo", "maxmind"],
        serviceDefinitions: {
          freegeoip: function() {
            return {
              url: "//freegeoip.net/json/?callback={callback}",
              isScript: !0,
              callback: function(e, t) {
                try {
                  var n = JSON.parse(t);
                  return n.error ? o(n) : {
                    code: n.country_code
                  }
                } catch (e) {
                  return o({
                    error: "Invalid response (" + e + ")"
                  })
                }
              }
            }
          },
          ipinfo: function() {
            return {
              url: "//ipinfo.io",
              headers: ["Accept: application/json"],
              callback: function(e, t) {
                try {
                  var n = JSON.parse(t);
                  return n.error ? o(n) : {
                    code: n.country
                  }
                } catch (e) {
                  return o({
                    error: "Invalid response (" + e + ")"
                  })
                }
              }
            }
          },
          ipinfodb: function(e) {
            return {
              url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
              isScript: !0,
              callback: function(e, t) {
                try {
                  var n = JSON.parse(t);
                  return "ERROR" == n.statusCode ? o({
                    error: n.statusMessage
                  }) : {
                    code: n.countryCode
                  }
                } catch (e) {
                  return o({
                    error: "Invalid response (" + e + ")"
                  })
                }
              }
            }
          },
          maxmind: function() {
            return {
              url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
              isScript: !0,
              callback: function(e) {
                if (!window.geoip2) return void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"));
                geoip2.country(function(t) {
                  try {
                    e({
                      code: t.country.iso_code
                    })
                  } catch (t) {
                    e(o(t))
                  }
                }, function(t) {
                  e(o(t))
                })
              }
            }
          }
        }
      };
      return e.prototype.getNextService = function() {
        var e;
        do {
          e = this.getServiceByIdx(++this.currentServiceIndex)
        } while (this.currentServiceIndex < this.options.services.length && !e);
        return e
      }, e.prototype.getServiceByIdx = function(e) {
        var n = this.options.services[e];
        if ("function" == typeof n) {
          var i = n();
          return i.name && t.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i
        }
        return "string" == typeof n ? this.options.serviceDefinitions[n]() : t.isPlainObject(n) ? this.options.serviceDefinitions[n.name](n) : null
      }, e.prototype.locate = function(e, t) {
        var n = this.getNextService();
        if (!n) return void t(new Error("No services to run"));
        this.callbackComplete = e, this.callbackError = t, this.runService(n, this.runNextServiceOnError.bind(this))
      }, e.prototype.setupUrl = function(e) {
        var t = this.getCurrentServiceOpts();
        return e.url.replace(/\{(.*?)\}/g, function(n, i) {
          if ("callback" === i) {
            var o = "callback" + Date.now();
            return window[o] = function(t) {
              e.__JSONP_DATA = JSON.stringify(t)
            }, o
          }
          if (i in t.interpolateUrl) return t.interpolateUrl[i]
        })
      }, e.prototype.runService = function(e, t) {
        var o = this;
        if (e && e.url && e.callback) {
          (e.isScript ? n : i)(this.setupUrl(e), function(n) {
            var i = n ? n.responseText : "";
            e.__JSONP_DATA && (i = e.__JSONP_DATA, delete e.__JSONP_DATA), o.runServiceCallback.call(o, t, e, i)
          }, this.options.timeout, e.data, e.headers)
        }
      }, e.prototype.runServiceCallback = function(e, t, n) {
        var i = this,
          o = function(t) {
            r || i.onServiceResult.call(i, e, t)
          },
          r = t.callback(o, n);
        r && this.onServiceResult.call(this, e, r)
      }, e.prototype.onServiceResult = function(e, t) {
        t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
      }, e.prototype.runNextServiceOnError = function(e, t) {
        if (e) {
          this.logError(e);
          var n = this.getNextService();
          n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
        } else this.completeService.call(this, this.callbackComplete, t)
      }, e.prototype.getCurrentServiceOpts = function() {
        var e = this.options.services[this.currentServiceIndex];
        return "string" == typeof e ? {
          name: e
        } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
      }, e.prototype.completeService = function(e, t) {
        this.currentServiceIndex = -1, e && e(t)
      }, e.prototype.logError = function(e) {
        var t = this.currentServiceIndex,
          n = this.getServiceByIdx(t);
        console.error("The service[" + t + "] (" + n.url + ") responded with the following error", e)
      }, e
    }(), e.Law = function() {
      function e(e) {
        this.initialise.apply(this, arguments)
      }
      var n = {
        regionalLaw: !0,
        hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
        revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
        explicitAction: ["HR", "IT", "ES"]
      };
      return e.prototype.initialise = function(e) {
        t.deepExtend(this.options = {}, n), t.isPlainObject(e) && t.deepExtend(this.options, e)
      }, e.prototype.get = function(e) {
        var t = this.options;
        return {
          hasLaw: t.hasLaw.indexOf(e) >= 0,
          revokable: t.revokable.indexOf(e) >= 0,
          explicitAction: t.explicitAction.indexOf(e) >= 0
        }
      }, e.prototype.applyLaw = function(e, t) {
        var n = this.get(t);
        return n.hasLaw || (e.enabled = !1), this.options.regionalLaw && (n.revokable && (e.revokable = !0), n.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
      }, e
    }(), e.initialise = function(t, n, i) {
      var o = new e.Law(t.law);
      n || (n = function() {}), i || (i = function() {}), e.getCountryCode(t, function(i) {
        delete t.law, delete t.location, i.code && (t = o.applyLaw(t, i.code)), n(new e.Popup(t))
      }, function(n) {
        delete t.law, delete t.location, i(n, new e.Popup(t))
      })
    }, e.getCountryCode = function(t, n, i) {
      if (t.law && t.law.countryCode) return void n({
        code: t.law.countryCode
      });
      if (t.location) {
        return void new e.Location(t.location).locate(function(e) {
          n(e || {})
        }, i)
      }
      n({})
    }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
  }
}(window.cookieconsent || {}), window.addEventListener("load", function() {
    window.cookieconsent.Popup.prototype.revokeChoice = function(e) {
      this.options.enabled = !0, this.options.onRevokeChoice.call(this), e || this.autoOpen(), this.open()
    }, window.cookieconsent.Popup.prototype.removeCookies = function() {
      for (var e = ["eclipse_cookieconsent_status", "has_js"], t = document.cookie.split(";"), n = 0; n < t.length; n++) {
        var i = t[n],
          o = i.indexOf("="),
          r = o > -1 ? i.substr(0, o) : i;
        r = r.trim(), void 0 !== e && 0 != e.length && -1 != e.indexOf(r) || (document.cookie = r + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;")
      }
    }, window.cookieconsent.initialise({
      type: "opt-in",
      position: "bottom",
      revokable: !0,
      enabled: !0,
      cookie: {
        name: "eclipse_cookieconsent_status",
        expiryDays: 90,
        domain: "." + location.hostname.split(".").reverse()[1] + "." + location.hostname.split(".").reverse()[0]
      },
      compliance: {
        "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
      },
      onStatusChange: function(e, t) {
        document.cookie = "eclipse_cookieconsent_status=" + e + "; expires=0; path=/;", "allow" !== e && this.removeCookies()
      },
      onInitialise: function(e, t) {
        document.getElementsByClassName("toolbar-manage-cookies").length <= 0 && setTimeout(function() {
          document.getElementsByClassName("cc-revoke")[0].style.display = "block"
        })
      },
      revokeBtn: '<div class="cc-revoke {{classes}}">Cookie settings</div>',
      palette: {
        popup: {
          background: "#353434",
          text: "#ffffff"
        },
        highlight: {
          background: "#fff",
          text: "#000000"
        },
        button: {
          background: "#da7a08",
          text: "#ffffff"
        }
      },
      content: {
        href: "https://www.eclipse.org/legal/privacy.php",
        dismiss: "Dismiss",
        link: "click here.",
        message: "Some Eclipse Foundation pages use cookies to better serve you when you return to the site. You can set your browser to notify you before you receive a cookie or turn off cookies. If you do so, however, some areas of some sites may not function properly. To read Eclipse Foundation Privacy Policy"
      }
    })
  }),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["ef"], t(e)) : "object" == typeof exports ? module.exports = t(require("ef")) : e.eclipseFdnVideos = t(e, e.ef)
  }(this, function(e) {
    "use strict";
    var t = {},
      n = {
        selector: ".eclipsefdn-video",
        resolution: "16by9",
        cookie: {
          name: "eclipse_cookieconsent_status",
          value: "allow"
        }
      };
    return t.replace = function(e) {
      document.onreadystatechange = function() {
        if ("interactive" == document.readyState) {
          if (void 0 !== e && "object" == typeof e)
            for (var t in n) "cookie" === t && "object" != typeof e.cookie || void 0 !== e[t] && "string" == typeof e[t] && ("resolution" === t && "16by9" !== e.cookie || "4by3" !== e.cookie || (n[t] = e[t]));
          this.el = document.querySelectorAll(n.selector);
          var i = "";
          if (void 0 !== n.cookie.name) {
            var o = "; " + document.cookie,
              r = o.split("; " + n.cookie.name + "=");
            r.length >= 2 && (i = r.pop().split(";").shift())
          }
          for (var a = 0; a < this.el.length; a++) {
            var s = this.el[a].offsetWidth,
              l = n.resolution.split("by"),
              c = l[1] / l[0] * 100;
            this.el[a].setAttribute("style", "height:" + s * c / 100 + "px;");
            var p = this.el[a].getAttribute("href").replace(/http(s|):\/\/(www|)(\.|)(youtube\.com\/watch\?v=|youtu\.be\/)/i, "//www.youtube.com/watch?v=");
            if (i === n.cookie.value) {
              var u = document.createElement("div");
              u.className = "eclipsefdn-video embed-responsive embed-responsive-" + n.resolution, u.innerHTML = '<iframe src="' + p.replace(/watch\?v\=/i, "embed/") + '"></iframe>', this.el[a].parentNode.replaceChild(u, this.el[a])
            } else if (this.el[a].setAttribute("class", "eclipsefdn-video eclipsefdn-video-with-js"), 1 != this.el[a].getElementsByTagName("img").length) {
              var h = p.replace("//www.youtube.com/watch?v=", "");
              this.el[a].innerHTML = '<img class="img-responsive" src="//img.youtube.com/vi/' + h + '/maxresdefault.jpg">'
            }
          }
        }
      }
    }, t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(e) {
    var t = -1,
      n = -1,
      i = function(e) {
        return parseFloat(e) || 0
      },
      o = function(t) {
        var n = e(t),
          o = null,
          r = [];
        return n.each(function() {
          var t = e(this),
            n = t.offset().top - i(t.css("margin-top")),
            a = r.length > 0 ? r[r.length - 1] : null;
          null === a ? r.push(t) : Math.floor(Math.abs(o - n)) <= 1 ? r[r.length - 1] = a.add(t) : r.push(t), o = n
        }), r
      },
      r = function(t) {
        var n = {
          byRow: !0,
          property: "height",
          target: null,
          remove: !1
        };
        return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
      },
      a = e.fn.matchHeight = function(t) {
        var n = r(t);
        if (n.remove) {
          var i = this;
          return this.css(n.property, ""), e.each(a._groups, function(e, t) {
            t.elements = t.elements.not(i)
          }), this
        }
        return this.length <= 1 && !n.target ? this : (a._groups.push({
          elements: this,
          options: n
        }), a._apply(this, n), this)
      };
    a.version = "0.7.2", a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._rows = o, a._parse = i, a._parseOptions = r, a._apply = function(t, n) {
      var s = r(n),
        l = e(t),
        c = [l],
        p = e(window).scrollTop(),
        u = e("html").outerHeight(!0),
        h = l.parents().filter(":hidden");
      return h.each(function() {
        var t = e(this);
        t.data("style-cache", t.attr("style"))
      }), h.css("display", "block"), s.byRow && !s.target && (l.each(function() {
        var t = e(this),
          n = t.css("display");
        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), t.data("style-cache", t.attr("style")), t.css({
          display: n,
          "padding-top": "0",
          "padding-bottom": "0",
          "margin-top": "0",
          "margin-bottom": "0",
          "border-top-width": "0",
          "border-bottom-width": "0",
          height: "100px",
          overflow: "hidden"
        })
      }), c = o(l), l.each(function() {
        var t = e(this);
        t.attr("style", t.data("style-cache") || "")
      })), e.each(c, function(t, n) {
        var o = e(n),
          r = 0;
        if (s.target) r = s.target.outerHeight(!1);
        else {
          if (s.byRow && o.length <= 1) return void o.css(s.property, "");
          o.each(function() {
            var t = e(this),
              n = t.attr("style"),
              i = t.css("display");
            "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
            var o = {
              display: i
            };
            o[s.property] = "", t.css(o), t.outerHeight(!1) > r && (r = t.outerHeight(!1)), n ? t.attr("style", n) : t.css("display", "")
          })
        }
        o.each(function() {
          var t = e(this),
            n = 0;
          s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(s.property, r - n + "px"))
        })
      }), h.each(function() {
        var t = e(this);
        t.attr("style", t.data("style-cache") || null)
      }), a._maintainScroll && e(window).scrollTop(p / u * e("html").outerHeight(!0)), this
    }, a._applyDataApi = function() {
      var t = {};
      e("[data-match-height], [data-mh]").each(function() {
        var n = e(this),
          i = n.attr("data-mh") || n.attr("data-match-height");
        t[i] = i in t ? t[i].add(n) : n
      }), e.each(t, function() {
        this.matchHeight(!0)
      })
    };
    var s = function(t) {
      a._beforeUpdate && a._beforeUpdate(t, a._groups), e.each(a._groups, function() {
        a._apply(this.elements, this.options)
      }), a._afterUpdate && a._afterUpdate(t, a._groups)
    };
    a._update = function(i, o) {
      if (o && "resize" === o.type) {
        var r = e(window).width();
        if (r === t) return;
        t = r
      }
      i ? -1 === n && (n = setTimeout(function() {
        s(o), n = -1
      }, a._throttle)) : s(o)
    }, e(a._applyDataApi);
    var l = e.fn.on ? "on" : "bind";
    e(window)[l]("load", function(e) {
      a._update(!1, e)
    }), e(window)[l]("resize orientationchange", function(e) {
      a._update(!0, e)
    })
  }),
  function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.feather = t() : e.feather = t()
  }("undefined" != typeof self ? self : this, function() {
    return function(e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
          i: i,
          l: !1,
          exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
      }
      var n = {};
      return t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: i
        })
      }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return t.d(n, "a", n), n
      }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, t.p = "", t(t.s = 61)
    }([function(e, t, n) {
      var i = n(20)("wks"),
        o = n(11),
        r = n(1).Symbol,
        a = "function" == typeof r;
      (e.exports = function(e) {
        return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e))
      }).store = i
    }, function(e, t) {
      var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n)
    }, function(e, t) {
      var n = e.exports = {
        version: "2.5.6"
      };
      "number" == typeof __e && (__e = n)
    }, function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t)
      }
    }, function(e, t, n) {
      e.exports = !n(27)(function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      })
    }, function(e, t, n) {
      var i = n(13);
      e.exports = function(e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
      }
    }, function(e, t, n) {
      var i = n(5),
        o = n(56),
        r = n(55),
        a = Object.defineProperty;
      t.f = n(4) ? Object.defineProperty : function(e, t, n) {
        if (i(e), t = r(t, !0), i(n), o) try {
          return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
      }
    }, function(e, t, n) {
      var i = n(6),
        o = n(12);
      e.exports = n(4) ? function(e, t, n) {
        return i.f(e, t, o(1, n))
      } : function(e, t, n) {
        return e[t] = n, e
      }
    }, function(e, t, n) {
      "use strict";

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = i(n(35)),
        r = i(n(33)),
        a = i(n(32));
      t.default = Object.keys(r.default).map(function(e) {
        return new o.default(e, r.default[e], a.default[e])
      }).reduce(function(e, t) {
        return e[t.name] = t, e
      }, {})
    }, function(e, t, n) {
      var i = n(20)("keys"),
        o = n(11);
      e.exports = function(e) {
        return i[e] || (i[e] = o(e))
      }
    }, function(e, t) {
      e.exports = {}
    }, function(e, t) {
      var n = 0,
        i = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
      }
    }, function(e, t) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }
    }, function(e, t) {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    }, function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
      }
    }, function(e, t) {
      var n = Math.ceil,
        i = Math.floor;
      e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
      }
    }, function(e, t, n) {
      var i;
      ! function() {
        "use strict";
        var n = function() {
          function e() {}

          function t(e, t) {
            for (var i = t.length, o = 0; o < i; ++o) n(e, t[o])
          }

          function n(e, n) {
            if (n) {
              var r = typeof n;
              "string" === r ? function(e, t) {
                for (var n = t.split(o), i = n.length, r = 0; r < i; ++r) e[n[r]] = !0
              }(e, n) : Array.isArray(n) ? t(e, n) : "object" === r ? function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = !!t[n])
              }(e, n) : "number" === r && function(e, t) {
                e[t] = !0
              }(e, n)
            }
          }
          e.prototype = Object.create(null);
          var i = {}.hasOwnProperty,
            o = /\s+/;
          return function() {
            for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            var r = new e;
            t(r, i);
            var a = [];
            for (var s in r) r[s] && a.push(s);
            return a.join(" ")
          }
        }();
        void 0 !== e && e.exports ? e.exports = n : void 0 === (i = function() {
          return n
        }.apply(t, [])) || (e.exports = i)
      }()
    }, function(e, t, n) {
      var i = n(14);
      e.exports = function(e) {
        return Object(i(e))
      }
    }, function(e, t, n) {
      var i = n(6).f,
        o = n(3),
        r = n(0)("toStringTag");
      e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, r) && i(e, r, {
          configurable: !0,
          value: t
        })
      }
    }, function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
      var i = n(2),
        o = n(1),
        r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
      })("versions", []).push({
        version: i.version,
        mode: n(29) ? "pure" : "global",
        copyright: "Â© 2018 Denis Pushkarev (zloirock.ru)"
      })
    }, function(e, t, n) {
      var i = n(15),
        o = Math.min;
      e.exports = function(e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
      }
    }, function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1)
      }
    }, function(e, t, n) {
      var i = n(48),
        o = n(14);
      e.exports = function(e) {
        return i(o(e))
      }
    }, function(e, t, n) {
      var i = n(54);
      e.exports = function(e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            };
          case 2:
            return function(n, i) {
              return e.call(t, n, i)
            };
          case 3:
            return function(n, i, o) {
              return e.call(t, n, i, o)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    }, function(e, t, n) {
      var i = n(1),
        o = n(7),
        r = n(3),
        a = n(11)("src"),
        s = Function.toString,
        l = ("" + s).split("toString");
      n(2).inspectSource = function(e) {
        return s.call(e)
      }, (e.exports = function(e, t, n, s) {
        var c = "function" == typeof n;
        c && (r(n, "name") || o(n, "name", t)), e[t] !== n && (c && (r(n, a) || o(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : s ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
      })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[a] || s.call(this)
      })
    }, function(e, t, n) {
      var i = n(13),
        o = n(1).document,
        r = i(o) && i(o.createElement);
      e.exports = function(e) {
        return r ? o.createElement(e) : {}
      }
    }, function(e, t) {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    }, function(e, t, n) {
      var i = n(1),
        o = n(2),
        r = n(7),
        a = n(25),
        s = n(24),
        l = function(e, t, n) {
          var c, p, u, h, d = e & l.F,
            f = e & l.G,
            y = e & l.S,
            g = e & l.P,
            v = e & l.B,
            m = f ? i : y ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
            x = f ? o : o[t] || (o[t] = {}),
            b = x.prototype || (x.prototype = {});
          for (c in f && (n = t), n) u = ((p = !d && m && void 0 !== m[c]) ? m : n)[c], h = v && p ? s(u, i) : g && "function" == typeof u ? s(Function.call, u) : u, m && a(m, c, u, e & l.U), x[c] != u && r(x, c, h), g && b[c] != u && (b[c] = u)
        };
      i.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
    }, function(e, t) {
      e.exports = !1
    }, function(e, t, n) {
      "use strict";

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        },
        r = i(n(16)),
        a = i(n(8));
      t.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
        var t = document.querySelectorAll("[data-feather]");
        Array.from(t).forEach(function(t) {
          return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = function(e) {
                return Array.from(e.attributes).reduce(function(e, t) {
                  return e[t.name] = t.value, e
                }, {})
              }(e),
              i = n["data-feather"];
            delete n["data-feather"];
            var s = a.default[i].toSvg(o({}, t, n, {
                class: (0, r.default)(t.class, n.class)
              })),
              l = (new DOMParser).parseFromString(s, "image/svg+xml").querySelector("svg");
            e.parentNode.replaceChild(l, e)
          }(t, e)
        })
      }
    }, function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, o = n(8),
        r = (i = o) && i.__esModule ? i : {
          default: i
        };
      t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
        if (!r.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
        return r.default[e].toSvg(t)
      }
    }, function(e) {
      e.exports = {
        activity: ["pulse", "health", "action", "motion"],
        airplay: ["stream", "cast", "mirroring"],
        "alert-circle": ["warning"],
        "alert-octagon": ["warning"],
        "alert-triangle": ["warning"],
        "at-sign": ["mention"],
        award: ["achievement", "badge"],
        aperture: ["camera", "photo"],
        bell: ["alarm", "notification"],
        "bell-off": ["alarm", "notification", "silent"],
        bluetooth: ["wireless"],
        "book-open": ["read"],
        book: ["read", "dictionary", "booklet", "magazine"],
        bookmark: ["read", "clip", "marker", "tag"],
        briefcase: ["work", "bag", "baggage", "folder"],
        clipboard: ["copy"],
        clock: ["time", "watch", "alarm"],
        "cloud-drizzle": ["weather", "shower"],
        "cloud-lightning": ["weather", "bolt"],
        "cloud-rain": ["weather"],
        "cloud-snow": ["weather", "blizzard"],
        cloud: ["weather"],
        codepen: ["logo"],
        coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
        command: ["keyboard", "cmd"],
        compass: ["navigation", "safari", "travel"],
        copy: ["clone", "duplicate"],
        "corner-down-left": ["arrow"],
        "corner-down-right": ["arrow"],
        "corner-left-down": ["arrow"],
        "corner-left-up": ["arrow"],
        "corner-right-down": ["arrow"],
        "corner-right-up": ["arrow"],
        "corner-up-left": ["arrow"],
        "corner-up-right": ["arrow"],
        "credit-card": ["purchase", "payment", "cc"],
        crop: ["photo", "image"],
        crosshair: ["aim", "target"],
        database: ["storage"],
        delete: ["remove"],
        disc: ["album", "cd", "dvd", "music"],
        "dollar-sign": ["currency", "money", "payment"],
        droplet: ["water"],
        edit: ["pencil", "change"],
        "edit-2": ["pencil", "change"],
        "edit-3": ["pencil", "change"],
        eye: ["view", "watch"],
        "eye-off": ["view", "watch"],
        "external-link": ["outbound"],
        facebook: ["logo"],
        "fast-forward": ["music"],
        film: ["movie", "video"],
        "folder-minus": ["directory"],
        "folder-plus": ["directory"],
        folder: ["directory"],
        gift: ["present", "box", "birthday", "party"],
        "git-branch": ["code", "version control"],
        "git-commit": ["code", "version control"],
        "git-merge": ["code", "version control"],
        "git-pull-request": ["code", "version control"],
        github: ["logo", "version control"],
        gitlab: ["logo", "version control"],
        global: ["world", "browser", "language", "translate"],
        "hard-drive": ["computer", "server"],
        hash: ["hashtag", "number", "pound"],
        headphones: ["music", "audio"],
        heart: ["like", "love"],
        "help-circle": ["question mark"],
        home: ["house"],
        image: ["picture"],
        inbox: ["email"],
        instagram: ["logo", "camera"],
        "life-bouy": ["help", "life ring", "support"],
        linkedin: ["logo"],
        lock: ["security", "password"],
        "log-in": ["sign in", "arrow"],
        "log-out": ["sign out", "arrow"],
        mail: ["email"],
        "map-pin": ["location", "navigation", "travel", "marker"],
        map: ["location", "navigation", "travel"],
        maximize: ["fullscreen"],
        "maximize-2": ["fullscreen", "arrows"],
        menu: ["bars", "navigation", "hamburger"],
        "message-circle": ["comment", "chat"],
        "message-square": ["comment", "chat"],
        "mic-off": ["record"],
        mic: ["record"],
        minimize: ["exit fullscreen"],
        "minimize-2": ["exit fullscreen", "arrows"],
        monitor: ["tv"],
        moon: ["dark", "night"],
        "more-horizontal": ["ellipsis"],
        "more-vertical": ["ellipsis"],
        move: ["arrows"],
        navigation: ["location", "travel"],
        "navigation-2": ["location", "travel"],
        octagon: ["stop"],
        package: ["box"],
        paperclip: ["attachment"],
        pause: ["music", "stop"],
        "pause-circle": ["music", "stop"],
        play: ["music", "start"],
        "play-circle": ["music", "start"],
        plus: ["add", "new"],
        "plus-circle": ["add", "new"],
        "plus-square": ["add", "new"],
        pocket: ["logo", "save"],
        power: ["on", "off"],
        radio: ["signal"],
        rewind: ["music"],
        rss: ["feed", "subscribe"],
        save: ["floppy disk"],
        send: ["message", "mail", "paper airplane"],
        settings: ["cog", "edit", "gear", "preferences"],
        shield: ["security"],
        "shield-off": ["security"],
        "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
        "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
        shuffle: ["music"],
        "skip-back": ["music"],
        "skip-forward": ["music"],
        slash: ["ban", "no"],
        sliders: ["settings", "controls"],
        speaker: ["music"],
        star: ["bookmark", "favorite", "like"],
        sun: ["brightness", "weather", "light"],
        sunrise: ["weather"],
        sunset: ["weather"],
        tag: ["label"],
        target: ["bullseye"],
        terminal: ["code", "command line"],
        "thumbs-down": ["dislike", "bad"],
        "thumbs-up": ["like", "good"],
        "toggle-left": ["on", "off", "switch"],
        "toggle-right": ["on", "off", "switch"],
        trash: ["garbage", "delete", "remove"],
        "trash-2": ["garbage", "delete", "remove"],
        triangle: ["delta"],
        truck: ["delivery", "van", "shipping"],
        twitter: ["logo"],
        umbrella: ["rain", "weather"],
        "video-off": ["camera", "movie", "film"],
        video: ["camera", "movie", "film"],
        voicemail: ["phone"],
        volume: ["music", "sound", "mute"],
        "volume-1": ["music", "sound"],
        "volume-2": ["music", "sound"],
        "volume-x": ["music", "sound", "mute"],
        watch: ["clock", "time"],
        wind: ["weather", "air"],
        "x-circle": ["cancel", "close", "delete", "remove", "times"],
        "x-square": ["cancel", "close", "delete", "remove", "times"],
        x: ["cancel", "close", "delete", "remove", "times"],
        youtube: ["logo", "video", "play"],
        "zap-off": ["flash", "camera", "lightning"],
        zap: ["flash", "camera", "lightning"]
      }
    }, function(e) {
      e.exports = {
        activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
        "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
        "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
        "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
        "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
        "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
        "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
        anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
        aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
        "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
        "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
        "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
        "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
        "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
        "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
        "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
        "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
        "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
        "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
        "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
        "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
        "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
        award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
        "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
        battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
        "bell-off": '<path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        bell: '<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>',
        bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
        bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
        "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        box: '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>',
        briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
        camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
        cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
        "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>',
        "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
        "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
        "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
        "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
        "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
        "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
        "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
        "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
        chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
        circle: '<circle cx="12" cy="12" r="10"></circle>',
        clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
        clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
        "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
        cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
        coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
        compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
        "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
        "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
        "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
        "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
        "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
        "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
        "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
        "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
        "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
        crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
        crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
        disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
        "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
        "edit-2": '<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>',
        "edit-3": '<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line>',
        edit: '<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>',
        "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
        "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
        facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
        feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
        "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
        file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
        film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
        "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
        "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
        folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
        gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
        "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
        "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
        "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
        "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
        hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
        headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
        heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
        inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
        instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
        italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
        layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
        layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
        loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
        "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
        menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
        "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
        "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
        "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
        minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
        monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
        "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
        move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
        music: '<path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>',
        "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
        navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
        octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
        package: '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>',
        paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
        pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
        percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
        "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
        "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
        "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
        pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
        power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
        radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
        "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
        "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
        rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
        "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
        save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
        scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
        search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
        settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
        share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
        "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
        "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
        sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
        "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
        "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
        slack: '<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>',
        slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
        smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
        speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
        square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
        sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
        sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
        sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
        tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
        tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
        target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
        "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
        "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
        "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
        "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
        trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
        "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
        "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
        triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
        truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
        umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
        underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
        unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
        "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
        upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
        "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
        "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
        "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
        volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
        watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
        "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
        wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
        "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
        x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
        "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
      }
    }, function(e) {
      e.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }, function(e, t, n) {
      "use strict";

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        },
        r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
          }
        }(),
        a = i(n(16)),
        s = i(n(34)),
        l = function() {
          function e(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.name = t, this.contents = n, this.tags = i, this.attrs = o({}, s.default, {
              class: "feather feather-" + t
            })
          }
          return r(e, [{
            key: "toSvg",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return "<svg " + function(e) {
                return Object.keys(e).map(function(t) {
                  return t + '="' + e[t] + '"'
                }).join(" ")
              }(o({}, this.attrs, e, {
                class: (0, a.default)(this.attrs.class, e.class)
              })) + ">" + this.contents + "</svg>"
            }
          }, {
            key: "toString",
            value: function() {
              return this.contents
            }
          }]), e
        }();
      t.default = l
    }, function(e, t, n) {
      "use strict";

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var o = i(n(8)),
        r = i(n(31)),
        a = i(n(30));
      e.exports = {
        icons: o.default,
        toSvg: r.default,
        replace: a.default
      }
    }, function(e, t, n) {
      var i = n(0)("iterator"),
        o = !1;
      try {
        var r = [7][i]();
        r.return = function() {
          o = !0
        }, Array.from(r, function() {
          throw 2
        })
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
          var r = [7],
            a = r[i]();
          a.next = function() {
            return {
              done: n = !0
            }
          }, r[i] = function() {
            return a
          }, e(r)
        } catch (e) {}
        return n
      }
    }, function(e, t, n) {
      var i = n(22),
        o = n(0)("toStringTag"),
        r = "Arguments" == i(function() {
          return arguments
        }());
      e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
          try {
            return e[t]
          } catch (e) {}
        }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
      }
    }, function(e, t, n) {
      var i = n(38),
        o = n(0)("iterator"),
        r = n(10);
      e.exports = n(2).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || r[i(e)]
      }
    }, function(e, t, n) {
      "use strict";
      var i = n(6),
        o = n(12);
      e.exports = function(e, t, n) {
        t in e ? i.f(e, t, o(0, n)) : e[t] = n
      }
    }, function(e, t, n) {
      var i = n(10),
        o = n(0)("iterator"),
        r = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (i.Array === e || r[o] === e)
      }
    }, function(e, t, n) {
      var i = n(5);
      e.exports = function(e, t, n, o) {
        try {
          return o ? t(i(n)[0], n[1]) : t(n)
        } catch (t) {
          var r = e.return;
          throw void 0 !== r && i(r.call(e)), t
        }
      }
    }, function(e, t, n) {
      "use strict";
      var i = n(24),
        o = n(28),
        r = n(17),
        a = n(42),
        s = n(41),
        l = n(21),
        c = n(40),
        p = n(39);
      o(o.S + o.F * !n(37)(function(e) {
        Array.from(e)
      }), "Array", {
        from: function(e) {
          var t, n, o, u, h = r(e),
            d = "function" == typeof this ? this : Array,
            f = arguments.length,
            y = f > 1 ? arguments[1] : void 0,
            g = void 0 !== y,
            v = 0,
            m = p(h);
          if (g && (y = i(y, f > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && s(m))
            for (n = new d(t = l(h.length)); t > v; v++) c(n, v, g ? y(h[v], v) : h[v]);
          else
            for (u = m.call(h), n = new d; !(o = u.next()).done; v++) c(n, v, g ? a(u, y, [o.value, v], !0) : o.value);
          return n.length = v, n
        }
      })
    }, function(e, t, n) {
      var i = n(3),
        o = n(17),
        r = n(9)("IE_PROTO"),
        a = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), i(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
      }
    }, function(e, t, n) {
      var i = n(1).document;
      e.exports = i && i.documentElement
    }, function(e, t, n) {
      var i = n(15),
        o = Math.max,
        r = Math.min;
      e.exports = function(e, t) {
        return (e = i(e)) < 0 ? o(e + t, 0) : r(e, t)
      }
    }, function(e, t, n) {
      var i = n(23),
        o = n(21),
        r = n(46);
      e.exports = function(e) {
        return function(t, n, a) {
          var s, l = i(t),
            c = o(l.length),
            p = r(a, c);
          if (e && n != n) {
            for (; c > p;)
              if ((s = l[p++]) != s) return !0
          } else
            for (; c > p; p++)
              if ((e || p in l) && l[p] === n) return e || p || 0;
          return !e && -1
        }
      }
    }, function(e, t, n) {
      var i = n(22);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
      }
    }, function(e, t, n) {
      var i = n(3),
        o = n(23),
        r = n(47)(!1),
        a = n(9)("IE_PROTO");
      e.exports = function(e, t) {
        var n, s = o(e),
          l = 0,
          c = [];
        for (n in s) n != a && i(s, n) && c.push(n);
        for (; t.length > l;) i(s, n = t[l++]) && (~r(c, n) || c.push(n));
        return c
      }
    }, function(e, t, n) {
      var i = n(49),
        o = n(19);
      e.exports = Object.keys || function(e) {
        return i(e, o)
      }
    }, function(e, t, n) {
      var i = n(6),
        o = n(5),
        r = n(50);
      e.exports = n(4) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, a = r(t), s = a.length, l = 0; s > l;) i.f(e, n = a[l++], t[n]);
        return e
      }
    }, function(e, t, n) {
      var i = n(5),
        o = n(51),
        r = n(19),
        a = n(9)("IE_PROTO"),
        s = function() {},
        l = function() {
          var e, t = n(26)("iframe"),
            i = r.length;
          for (t.style.display = "none", n(45).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[r[i]];
          return l()
        };
      e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : o(n, t)
      }
    }, function(e, t, n) {
      "use strict";
      var i = n(52),
        o = n(12),
        r = n(18),
        a = {};
      n(7)(a, n(0)("iterator"), function() {
        return this
      }), e.exports = function(e, t, n) {
        e.prototype = i(a, {
          next: o(1, n)
        }), r(e, t + " Iterator")
      }
    }, function(e, t) {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }
    }, function(e, t, n) {
      var i = n(13);
      e.exports = function(e, t) {
        if (!i(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
      }
    }, function(e, t, n) {
      e.exports = !n(4) && !n(27)(function() {
        return 7 != Object.defineProperty(n(26)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      })
    }, function(e, t, n) {
      "use strict";
      var i = n(29),
        o = n(28),
        r = n(25),
        a = n(7),
        s = n(10),
        l = n(53),
        c = n(18),
        p = n(44),
        u = n(0)("iterator"),
        h = !([].keys && "next" in [].keys()),
        d = function() {
          return this
        };
      e.exports = function(e, t, n, f, y, g, v) {
        l(n, t, f);
        var m, x, b, w = function(e) {
            if (!h && e in S) return S[e];
            switch (e) {
              case "keys":
              case "values":
                return function() {
                  return new n(this, e)
                }
            }
            return function() {
              return new n(this, e)
            }
          },
          k = t + " Iterator",
          T = "values" == y,
          C = !1,
          S = e.prototype,
          E = S[u] || S["@@iterator"] || y && S[y],
          A = E || w(y),
          M = y ? T ? w("entries") : A : void 0,
          O = "Array" == t && S.entries || E;
        if (O && (b = p(O.call(new e))) !== Object.prototype && b.next && (c(b, k, !0), i || "function" == typeof b[u] || a(b, u, d)), T && E && "values" !== E.name && (C = !0, A = function() {
            return E.call(this)
          }), i && !v || !h && !C && S[u] || a(S, u, A), s[t] = A, s[k] = d, y)
          if (m = {
              values: T ? A : w("values"),
              keys: g ? A : w("keys"),
              entries: M
            }, v)
            for (x in m) x in S || r(S, x, m[x]);
          else o(o.P + o.F * (h || C), t, m);
        return m
      }
    }, function(e, t, n) {
      var i = n(15),
        o = n(14);
      e.exports = function(e) {
        return function(t, n) {
          var r, a, s = String(o(t)),
            l = i(n),
            c = s.length;
          return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
        }
      }
    }, function(e, t, n) {
      "use strict";
      var i = n(58)(!0);
      n(57)(String, "String", function(e) {
        this._t = String(e), this._i = 0
      }, function() {
        var e, t = this._t,
          n = this._i;
        return n >= t.length ? {
          value: void 0,
          done: !0
        } : (e = i(t, n), this._i += e.length, {
          value: e,
          done: !1
        })
      })
    }, function(e, t, n) {
      n(59), n(43), e.exports = n(2).Array.from
    }, function(e, t, n) {
      n(60), e.exports = n(36)
    }])
  }),
  function(e, t) {
    e(window).on("load", function() {
      window.location.hash && e(window.location.hash).hasClass("tab-pane") && (window.scrollTo(0, 0), setTimeout(function() {
        window.scrollTo(0, 0)
      }, 1))
    }), e(t).ready(function() {
      var t = window.location.hash;
      0 == e("#rightcolumn").length && (e("#midcolumn").attr("class", "no-right-sidebar"), t && (window.location.hash = t)), 0 == e("#main-sidebar").length && (e("#midcolumn").attr("class", "no-left-nav"), t && (window.location.hash = t)), e("#showalltabs").click(function() {
        e(".tabs li").each(function(t, n) {
          e(this).removeClass("active")
        }), e(".tab-pane").each(function(t, n) {
          e(this).addClass("active")
        })
      }), t && e('ul.nav a[href="' + t + '"]').tab("show")
    }), e(t).on("click", ".yamm .dropdown-menu", function(e) {
      e.stopPropagation()
    }), e(window).on("load resize scroll", function() {
      if (e(window).width() < 1270) return e(".scrollup").hide(), !1;
      e(this).scrollTop() > 100 ? e(".scrollup").fadeIn() : e(".scrollup").fadeOut()
    }), e(".scrollup").click(function() {
      return e("html, body").animate({
        scrollTop: 0
      }, 600), !1
    }), e(".nav-tabs a").click(function(t) {
      e(this).tab("show"), history.pushState({}, "", this.href), e(".alert:not(.stay-visible)").remove()
    }), e("a[data-tab-destination]").on("click", function() {
      var t = e(this).attr("data-tab-destination");
      e("#" + t).click()
    }), e(".solstice-collapse").click(function() {
      e(this).find("i").toggleClass("fa-chevron-down fa-chevron-up")
    }), feather.replace(), e(".featured-highlights-item").matchHeight(), e(".featured-story-block").matchHeight(), e(".news-list-match-height .media-link").matchHeight({
      byRow: !1
    }), e(".main-menu-search").on("shown.bs.dropdown", function() {
      e(".gsc-input").focus()
    }), e(t).bind("keydown", "27", function(t) {
      e(".eclipse-search a").dropdown("toggle")
    }), e(".toolbar-manage-cookies").click(function() {
      e(".cc-window").show(), setTimeout(function() {
        e(".cc-window").removeClass("cc-invisible")
      }, 20)
    }), eclipseFdnVideos.replace();
    var n = e(".toggle-text").html();
    e(".toggle-text").click(function() {
      e(this).hasClass("toggle-text-close") ? e(this).removeClass("toggle-text-close").html(n) : e(this).addClass("toggle-text-close").html(e(this).attr("data-toggle-text"))
    }), e("a[href]").click(function() {
      if ("function" == typeof ga) {
        var t = e(this).attr("href").split("/").pop(),
          n = t.split(".").pop(),
          i = ga.getAll()[0].get("name");
        i && -1 !== e.inArray(n, ["pdf", "jpg", "png", "zip", "dmg", "gz", "exe", "doc", "odt", "rtf", "7z", "arj", "deb", "pkg", "rar", "rpm", "z", "tar", "xml", "csv", "xls", "xlr", "ods", "rss"]) && ga(i + ".send", "event", {
          eventCategory: "solstice-event-tracker",
          eventAction: window.location.href,
          eventLabel: t
        })
      }
    })
  }(jQuery, document),
  function(e, t) {
    e(t).ready(function() {
      function t() {
        var t = e("input[name=type]:radio:checked").val();
        "paypal" === t ? e("input[name=subscription]").attr("disabled", !1) : e("input[name=subscription]").attr("disabled", !0);
        var n = e("input[name=credit_process_url]").val();
        if ("credit" === t && n) e("#donation_default_eclipse_form").attr("action", n);
        else {
          var i = e("input[name=default_process_url]").val();
          i && e("#donation_default_eclipse_form").attr("action", i), e("#subscription_default").prop("checked", !0)
        }
      }
      e("input.recognition-checkbox").is(":checked") && e(".recognition-fields").slideDown(300), e("input.recognition-checkbox").click(function() {
        1 == e(this).prop("checked") ? e(".recognition-fields").slideDown(300) : 0 == e(this).prop("checked") && e(".recognition-fields").slideUp(300)
      }), e(".btn-square").click(function() {
        e(".btn-square, .amount-body, .highlight-amount-body").removeClass("active"), e(this).addClass("active"), e("input[name=amount]").val(e(this).val())
      }), e("input[name=amount]").click(function() {
        e("input[name=amount]").bind("keyup change", function(t) {
          e(".btn-square").removeClass("active")
        })
      }), t(), e("input[name=type]:radio").change(function(e) {
        t()
      }), e(".btn-donate-close").click(function() {
        var t = eclipse_org_common.settings.cookies_class.name,
          n = jQuery.parseJSON(unescape(solsticeFetchCookie(t)));
        n.donation_banner.value.visible = 0, n = JSON.stringify(n), solsticeCreateCookie(t, n, "/"), e(".donate-ad").slideUp(300)
      })
    })
  }(jQuery, document);
