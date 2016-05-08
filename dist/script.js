/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
"use strict";

(function (window) {

  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }
})(window);
/*global define: false, module: false */
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
"use strict";

!(function (a, b, c, d) {
  "use strict";function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
  }function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }function i(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function k(a, b) {
    return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }function l(a, b) {
    return a === d ? b : a;
  }function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function o(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function p(a, b) {
    return a.indexOf(b) > -1;
  }function q(a) {
    return a.trim().split(/\s+/g);
  }function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function s(a) {
    return Array.prototype.slice.call(a, 0);
  }function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if ((c = ma[g], e = c ? c + f : b, e in a)) return e;g++;
    }return d;
  }function v() {
    return ua++;
  }function w(b) {
    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
  }function x(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function y(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function E(a) {
    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;return { x: pa(c / b), y: pa(d / b) };
  }function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }function H(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function I(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;if ((f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea)) for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }function R() {
    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }function T(a) {
    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
      };setTimeout(e, cb);
    }
  }function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
    }return !1;
  }function V(a, b) {
    this.manager = a, this.set(b);
  }function W(a) {
    if (p(a, jb)) return jb;var b = p(a, kb),
        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }function X() {
    if (!fb) return !1;var b = {},
        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }function _(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function aa() {
    Y.apply(this, arguments);
  }function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }function ca() {
    aa.apply(this, arguments);
  }function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }function ea() {
    aa.apply(this, arguments);
  }function fa() {
    aa.apply(this, arguments);
  }function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ja(a, b) {
    var c = a.element;if (c.style) {
      var d;g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }function ka(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];if (e !== d && null !== e) for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
    }return b;
  } : Object.assign;var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = ("ontouchstart" in a),
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
      var b = Za[a.type];if ((b === Ea && (this.started = !0), this.started)) {
        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
      }
    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
    } });var cb = 2500,
      db = 25;i(R, x, { handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();V.prototype = { set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;if (h && i && j) return;
      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }var c = this,
          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    }, emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
      }this._super.emit.call(this, a);
    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [hb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if ((this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f)) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    }, emit: function emit(a) {
      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ib];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if ((this.reset(), a.eventType & Ea && 0 === this.count)) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }return tb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
      vb = 2;ia.prototype = { set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
      }
    }, get: function get(a) {
      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
      }return this;
    }, on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    }, off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    }, emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) c[d](b), d++;
      }
    }, destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
})(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map
"use strict";

;(function (window, document, undefined) {
  "use strict";

  (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  })({ 1: [function (require, module, exports) {
      'use strict';

      var _interopRequireWildcard = function _interopRequireWildcard(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      };

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      // SweetAlert
      // 2014-2015 (c) - Tristan Edwards
      // github.com/t4t5/sweetalert

      /*
       * jQuery-like functions for manipulating the DOM
       */

      var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = require('./modules/handle-dom');

      /*
       * Handy utilities
       */

      var _extend$hexToRgb$isIE8$logStr$colorLuminance = require('./modules/utils');

      /*
       *  Handle sweetAlert's DOM elements
       */

      var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = require('./modules/handle-swal-dom');

      // Handle button events and keyboard events

      var _handleButton$handleConfirm$handleCancel = require('./modules/handle-click');

      var _handleKeyDown = require('./modules/handle-key');

      var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

      // Default values

      var _defaultParams = require('./modules/default-params');

      var _defaultParams2 = _interopRequireWildcard(_defaultParams);

      var _setParameters = require('./modules/set-params');

      var _setParameters2 = _interopRequireWildcard(_setParameters);

      /*
       * Remember state in cases where opening and handling a modal will fiddle with it.
       * (We also use window.previousActiveElement as a global variable)
       */
      var previousWindowKeyDown;
      var lastFocusedButton;

      /*
       * Global sweetAlert function
       * (this is what the user calls)
       */
      var sweetAlert, swal;

      exports['default'] = sweetAlert = swal = function () {
        var customizations = arguments[0];

        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
        _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

        /*
         * Use argument if defined or default value from params object otherwise.
         * Supports the case where a default value is boolean true and should be
         * overridden by a corresponding explicit argument which is boolean false.
         */
        function argumentOrDefault(key) {
          var args = customizations;
          return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
        }

        if (customizations === undefined) {
          _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
          return false;
        }

        var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

        switch (typeof customizations) {

          // Ex: swal("Hello", "Just testing", "info");
          case 'string':
            params.title = customizations;
            params.text = arguments[1] || '';
            params.type = arguments[2] || '';
            break;

          // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
          case 'object':
            if (customizations.title === undefined) {
              _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
              return false;
            }

            params.title = customizations.title;

            for (var customName in _defaultParams2['default']) {
              params[customName] = argumentOrDefault(customName);
            }

            // Show "Confirm" instead of "OK" if cancel button is visible
            params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
            params.confirmButtonText = argumentOrDefault('confirmButtonText');

            // Callback function when clicking on "OK"/"Cancel"
            params.doneFunction = arguments[1] || null;

            break;

          default:
            _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
            return false;

        }

        _setParameters2['default'](params);
        _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
        _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

        // Modal interactions
        var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

        /*
         * Make sure all modal buttons respond to all events
         */
        var $buttons = modal.querySelectorAll('button');
        var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
        var onButtonEvent = function onButtonEvent(e) {
          return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
        };

        for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
          for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
            var btnEvt = buttonEvents[evtIndex];
            $buttons[btnIndex][btnEvt] = onButtonEvent;
          }
        }

        // Clicking outside the modal dismisses it (if allowed by user)
        _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

        previousWindowKeyDown = window.onkeydown;

        var onKeyEvent = function onKeyEvent(e) {
          return _handleKeyDown2['default'](e, params, modal);
        };
        window.onkeydown = onKeyEvent;

        window.onfocus = function () {
          // When the user has focused away and focused back from the whole window.
          setTimeout(function () {
            // Put in a timeout to jump out of the event sequence.
            // Calling focus() in the event sequence confuses things.
            if (lastFocusedButton !== undefined) {
              lastFocusedButton.focus();
              lastFocusedButton = undefined;
            }
          }, 0);
        };

        // Show alert with enabled buttons always
        swal.enableButtons();
      };

      /*
       * Set default params for each popup
       * @param {Object} userParams
       */
      sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
        if (!userParams) {
          throw new Error('userParams is required');
        }
        if (typeof userParams !== 'object') {
          throw new Error('userParams has to be a object');
        }

        _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
      };

      /*
       * Animation when closing modal
       */
      sweetAlert.close = swal.close = function () {
        var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

        /*
         * Reset icon animations
         */
        var $successIcon = modal.querySelector('.sa-icon.sa-success');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

        var $errorIcon = modal.querySelector('.sa-icon.sa-error');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

        var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

        // Reset custom class (delay so that UI changes aren't visible)
        setTimeout(function () {
          var customClass = modal.getAttribute('data-custom-class');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
        }, 300);

        // Make page scrollable again
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

        // Reset the page to its previous state
        window.onkeydown = previousWindowKeyDown;
        if (window.previousActiveElement) {
          window.previousActiveElement.focus();
        }
        lastFocusedButton = undefined;
        clearTimeout(modal.timeout);

        return true;
      };

      /*
       * Validation of the input field is done by user
       * If something is wrong => call showInputError with errorMessage
       */
      sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
        var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

        var $errorIcon = modal.querySelector('.sa-input-error');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

        var $errorContainer = modal.querySelector('.sa-error-container');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

        $errorContainer.querySelector('p').innerHTML = errorMessage;

        setTimeout(function () {
          sweetAlert.enableButtons();
        }, 1);

        modal.querySelector('input').focus();
      };

      /*
       * Reset input error DOM elements
       */
      sweetAlert.resetInputError = swal.resetInputError = function (event) {
        // If press enter => ignore
        if (event && event.keyCode === 13) {
          return false;
        }

        var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

        var $errorIcon = $modal.querySelector('.sa-input-error');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

        var $errorContainer = $modal.querySelector('.sa-error-container');
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
      };

      /*
       * Disable confirm and cancel buttons
       */
      sweetAlert.disableButtons = swal.disableButtons = function (event) {
        var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
        var $confirmButton = modal.querySelector('button.confirm');
        var $cancelButton = modal.querySelector('button.cancel');
        $confirmButton.disabled = true;
        $cancelButton.disabled = true;
      };

      /*
       * Enable confirm and cancel buttons
       */
      sweetAlert.enableButtons = swal.enableButtons = function (event) {
        var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
        var $confirmButton = modal.querySelector('button.confirm');
        var $cancelButton = modal.querySelector('button.cancel');
        $confirmButton.disabled = false;
        $cancelButton.disabled = false;
      };

      if (typeof window !== 'undefined') {
        // The 'handle-click' module requires
        // that 'sweetAlert' was set as global.
        window.sweetAlert = window.swal = sweetAlert;
      } else {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
      }
      module.exports = exports['default'];
    }, { "./modules/default-params": 2, "./modules/handle-click": 3, "./modules/handle-dom": 4, "./modules/handle-key": 5, "./modules/handle-swal-dom": 6, "./modules/set-params": 8, "./modules/utils": 9 }], 2: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var defaultParams = {
        title: '',
        text: '',
        type: null,
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: false,
        closeOnConfirm: true,
        closeOnCancel: true,
        confirmButtonText: 'OK',
        confirmButtonColor: '#8CD4F5',
        cancelButtonText: 'Cancel',
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: '',
        html: false,
        animation: true,
        allowEscapeKey: true,
        inputType: 'text',
        inputPlaceholder: '',
        inputValue: '',
        showLoaderOnConfirm: false
      };

      exports['default'] = defaultParams;
      module.exports = exports['default'];
    }, {}], 3: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _colorLuminance = require('./utils');

      var _getModal = require('./handle-swal-dom');

      var _hasClass$isDescendant = require('./handle-dom');

      /*
       * User clicked on "Confirm"/"OK" or "Cancel"
       */
      var handleButton = function handleButton(event, params, modal) {
        var e = event || window.event;
        var target = e.target || e.srcElement;

        var targetedConfirm = target.className.indexOf('confirm') !== -1;
        var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
        var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
        var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

        // Since the user can change the background-color of the confirm button programmatically,
        // we must calculate what the color should be on hover/active
        var normalColor, hoverColor, activeColor;
        if (targetedConfirm && params.confirmButtonColor) {
          normalColor = params.confirmButtonColor;
          hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
          activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
        }

        function shouldSetConfirmButtonColor(color) {
          if (targetedConfirm && params.confirmButtonColor) {
            target.style.backgroundColor = color;
          }
        }

        switch (e.type) {
          case 'mouseover':
            shouldSetConfirmButtonColor(hoverColor);
            break;

          case 'mouseout':
            shouldSetConfirmButtonColor(normalColor);
            break;

          case 'mousedown':
            shouldSetConfirmButtonColor(activeColor);
            break;

          case 'mouseup':
            shouldSetConfirmButtonColor(hoverColor);
            break;

          case 'focus':
            var $confirmButton = modal.querySelector('button.confirm');
            var $cancelButton = modal.querySelector('button.cancel');

            if (targetedConfirm) {
              $cancelButton.style.boxShadow = 'none';
            } else {
              $confirmButton.style.boxShadow = 'none';
            }
            break;

          case 'click':
            var clickedOnModal = modal === target;
            var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

            // Ignore click outside if allowOutsideClick is false
            if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
              break;
            }

            if (targetedConfirm && doneFunctionExists && modalIsVisible) {
              handleConfirm(modal, params);
            } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
              handleCancel(modal, params);
            } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
              sweetAlert.close();
            }
            break;
        }
      };

      /*
       *  User clicked on "Confirm"/"OK"
       */
      var handleConfirm = function handleConfirm(modal, params) {
        var callbackValue = true;

        if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
          callbackValue = modal.querySelector('input').value;

          if (!callbackValue) {
            callbackValue = '';
          }
        }

        params.doneFunction(callbackValue);

        if (params.closeOnConfirm) {
          sweetAlert.close();
        }
        // Disable cancel and confirm button if the parameter is true
        if (params.showLoaderOnConfirm) {
          sweetAlert.disableButtons();
        }
      };

      /*
       *  User clicked on "Cancel"
       */
      var handleCancel = function handleCancel(modal, params) {
        // Check if callback function expects a parameter (to track cancel actions)
        var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
        var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

        if (functionHandlesCancel) {
          params.doneFunction(false);
        }

        if (params.closeOnCancel) {
          sweetAlert.close();
        }
      };

      exports['default'] = {
        handleButton: handleButton,
        handleConfirm: handleConfirm,
        handleCancel: handleCancel
      };
      module.exports = exports['default'];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 4: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var hasClass = function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
      };

      var addClass = function addClass(elem, className) {
        if (!hasClass(elem, className)) {
          elem.className += ' ' + className;
        }
      };

      var removeClass = function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      };

      var escapeHtml = function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      };

      var _show = function _show(elem) {
        elem.style.opacity = '';
        elem.style.display = 'block';
      };

      var show = function show(elems) {
        if (elems && !elems.length) {
          return _show(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
          _show(elems[i]);
        }
      };

      var _hide = function _hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
      };

      var hide = function hide(elems) {
        if (elems && !elems.length) {
          return _hide(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
          _hide(elems[i]);
        }
      };

      var isDescendant = function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node !== null) {
          if (node === parent) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      };

      var getTopMargin = function getTopMargin(elem) {
        elem.style.left = '-9999px';
        elem.style.display = 'block';

        var height = elem.clientHeight,
            padding;
        if (typeof getComputedStyle !== 'undefined') {
          // IE 8
          padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
        } else {
          padding = parseInt(elem.currentStyle.padding);
        }

        elem.style.left = '';
        elem.style.display = 'none';
        return '-' + parseInt((height + padding) / 2) + 'px';
      };

      var fadeIn = function fadeIn(elem, interval) {
        if (+elem.style.opacity < 1) {
          interval = interval || 16;
          elem.style.opacity = 0;
          elem.style.display = 'block';
          var last = +new Date();
          var tick = (function (_tick) {
            function tick() {
              return _tick.apply(this, arguments);
            }

            tick.toString = function () {
              return _tick.toString();
            };

            return tick;
          })(function () {
            elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
            last = +new Date();

            if (+elem.style.opacity < 1) {
              setTimeout(tick, interval);
            }
          });
          tick();
        }
        elem.style.display = 'block'; //fallback IE8
      };

      var fadeOut = function fadeOut(elem, interval) {
        interval = interval || 16;
        elem.style.opacity = 1;
        var last = +new Date();
        var tick = (function (_tick2) {
          function tick() {
            return _tick2.apply(this, arguments);
          }

          tick.toString = function () {
            return _tick2.toString();
          };

          return tick;
        })(function () {
          elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
          last = +new Date();

          if (+elem.style.opacity > 0) {
            setTimeout(tick, interval);
          } else {
            elem.style.display = 'none';
          }
        });
        tick();
      };

      var fireClick = function fireClick(node) {
        // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
        // Then fixed for today's Chrome browser.
        if (typeof MouseEvent === 'function') {
          // Up-to-date approach
          var mevt = new MouseEvent('click', {
            view: window,
            bubbles: false,
            cancelable: true
          });
          node.dispatchEvent(mevt);
        } else if (document.createEvent) {
          // Fallback
          var evt = document.createEvent('MouseEvents');
          evt.initEvent('click', false, false);
          node.dispatchEvent(evt);
        } else if (document.createEventObject) {
          node.fireEvent('onclick');
        } else if (typeof node.onclick === 'function') {
          node.onclick();
        }
      };

      var stopEventPropagation = function stopEventPropagation(e) {
        // In particular, make sure the space bar doesn't scroll the main window.
        if (typeof e.stopPropagation === 'function') {
          e.stopPropagation();
          e.preventDefault();
        } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
          window.event.cancelBubble = true;
        }
      };

      exports.hasClass = hasClass;
      exports.addClass = addClass;
      exports.removeClass = removeClass;
      exports.escapeHtml = escapeHtml;
      exports._show = _show;
      exports.show = show;
      exports._hide = _hide;
      exports.hide = hide;
      exports.isDescendant = isDescendant;
      exports.getTopMargin = getTopMargin;
      exports.fadeIn = fadeIn;
      exports.fadeOut = fadeOut;
      exports.fireClick = fireClick;
      exports.stopEventPropagation = stopEventPropagation;
    }, {}], 5: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _stopEventPropagation$fireClick = require('./handle-dom');

      var _setFocusStyle = require('./handle-swal-dom');

      var handleKeyDown = function handleKeyDown(event, params, modal) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;

        var $okButton = modal.querySelector('button.confirm');
        var $cancelButton = modal.querySelector('button.cancel');
        var $modalButtons = modal.querySelectorAll('button[tabindex]');

        if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
          // Don't do work on keys we don't care about.
          return;
        }

        var $targetElement = e.target || e.srcElement;

        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var i = 0; i < $modalButtons.length; i++) {
          if ($targetElement === $modalButtons[i]) {
            btnIndex = i;
            break;
          }
        }

        if (keyCode === 9) {
          // TAB
          if (btnIndex === -1) {
            // No button focused. Jump to the confirm button.
            $targetElement = $okButton;
          } else {
            // Cycle to the next button
            if (btnIndex === $modalButtons.length - 1) {
              $targetElement = $modalButtons[0];
            } else {
              $targetElement = $modalButtons[btnIndex + 1];
            }
          }

          _stopEventPropagation$fireClick.stopEventPropagation(e);
          $targetElement.focus();

          if (params.confirmButtonColor) {
            _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
          }
        } else {
          if (keyCode === 13) {
            if ($targetElement.tagName === 'INPUT') {
              $targetElement = $okButton;
              $okButton.focus();
            }

            if (btnIndex === -1) {
              // ENTER/SPACE clicked outside of a button.
              $targetElement = $okButton;
            } else {
              // Do nothing - let the browser handle it.
              $targetElement = undefined;
            }
          } else if (keyCode === 27 && params.allowEscapeKey === true) {
            $targetElement = $cancelButton;
            _stopEventPropagation$fireClick.fireClick($targetElement, e);
          } else {
            // Fallback - let the browser handle it.
            $targetElement = undefined;
          }
        }
      };

      exports['default'] = handleKeyDown;
      module.exports = exports['default'];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6 }], 6: [function (require, module, exports) {
      'use strict';

      var _interopRequireWildcard = function _interopRequireWildcard(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      };

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _hexToRgb = require('./utils');

      var _removeClass$getTopMargin$fadeIn$show$addClass = require('./handle-dom');

      var _defaultParams = require('./default-params');

      var _defaultParams2 = _interopRequireWildcard(_defaultParams);

      /*
       * Add modal + overlay to DOM
       */

      var _injectedHTML = require('./injected-html');

      var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

      var modalClass = '.sweet-alert';
      var overlayClass = '.sweet-overlay';

      var sweetAlertInitialize = function sweetAlertInitialize() {
        var sweetWrap = document.createElement('div');
        sweetWrap.innerHTML = _injectedHTML2['default'];

        // Append elements to body
        while (sweetWrap.firstChild) {
          document.body.appendChild(sweetWrap.firstChild);
        }
      };

      /*
       * Get DOM element of modal
       */
      var getModal = (function (_getModal) {
        function getModal() {
          return _getModal.apply(this, arguments);
        }

        getModal.toString = function () {
          return _getModal.toString();
        };

        return getModal;
      })(function () {
        var $modal = document.querySelector(modalClass);

        if (!$modal) {
          sweetAlertInitialize();
          $modal = getModal();
        }

        return $modal;
      });

      /*
       * Get DOM element of input (in modal)
       */
      var getInput = function getInput() {
        var $modal = getModal();
        if ($modal) {
          return $modal.querySelector('input');
        }
      };

      /*
       * Get DOM element of overlay
       */
      var getOverlay = function getOverlay() {
        return document.querySelector(overlayClass);
      };

      /*
       * Add box-shadow style to button (depending on its chosen bg-color)
       */
      var setFocusStyle = function setFocusStyle($button, bgColor) {
        var rgbColor = _hexToRgb.hexToRgb(bgColor);
        $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
      };

      /*
       * Animation when opening modal
       */
      var openModal = function openModal(callback) {
        var $modal = getModal();
        _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
        _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
        _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
        _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

        window.previousActiveElement = document.activeElement;
        var $okButton = $modal.querySelector('button.confirm');
        $okButton.focus();

        setTimeout(function () {
          _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
        }, 500);

        var timer = $modal.getAttribute('data-timer');

        if (timer !== 'null' && timer !== '') {
          var timerCallback = callback;
          $modal.timeout = setTimeout(function () {
            var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
            if (doneFunctionExists) {
              timerCallback(null);
            } else {
              sweetAlert.close();
            }
          }, timer);
        }
      };

      /*
       * Reset the styling of the input
       * (for example if errors have been shown)
       */
      var resetInput = function resetInput() {
        var $modal = getModal();
        var $input = getInput();

        _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
        $input.value = _defaultParams2['default'].inputValue;
        $input.setAttribute('type', _defaultParams2['default'].inputType);
        $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

        resetInputError();
      };

      var resetInputError = function resetInputError(event) {
        // If press enter => ignore
        if (event && event.keyCode === 13) {
          return false;
        }

        var $modal = getModal();

        var $errorIcon = $modal.querySelector('.sa-input-error');
        _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

        var $errorContainer = $modal.querySelector('.sa-error-container');
        _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
      };

      /*
       * Set "margin-top"-property on modal based on its computed height
       */
      var fixVerticalPosition = function fixVerticalPosition() {
        var $modal = getModal();
        $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
      };

      exports.sweetAlertInitialize = sweetAlertInitialize;
      exports.getModal = getModal;
      exports.getOverlay = getOverlay;
      exports.getInput = getInput;
      exports.setFocusStyle = setFocusStyle;
      exports.openModal = openModal;
      exports.resetInput = resetInput;
      exports.resetInputError = resetInputError;
      exports.fixVerticalPosition = fixVerticalPosition;
    }, { "./default-params": 2, "./handle-dom": 4, "./injected-html": 7, "./utils": 9 }], 7: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var injectedHTML =

      // Dark overlay
      "<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

      // Modal
      "<div class=\"sweet-alert\">" +

      // Error icon
      "<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

      // Warning icon
      "<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

      // Info icon
      "<div class=\"sa-icon sa-info\"></div>" +

      // Success icon
      "<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

      // Title, text and input
      //<input type=\"text\" id=\"newGameSecondField\" tabIndex=\"4\" value='"+ScoreKeeper.helper.getTime()+"' placeholder=\"Date/time/court\" />\n
      "<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n    <div class=\"sa-input-error\"></div>\n    </fieldset>" +

      // Input errors
      "<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

      // Cancel and confirm buttons
      "<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

      // Loading animation
      "<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

      // End of modal
      "</div>";

      exports["default"] = injectedHTML;
      module.exports = exports["default"];
    }, {}], 8: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _isIE8 = require('./utils');

      var _getModal$getInput$setFocusStyle = require('./handle-swal-dom');

      var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = require('./handle-dom');

      var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

      /*
       * Set type, text and actions on modal
       */
      var setParameters = function setParameters(params) {
        var modal = _getModal$getInput$setFocusStyle.getModal();

        var $title = modal.querySelector('h2');
        var $text = modal.querySelector('p');
        var $cancelBtn = modal.querySelector('button.cancel');
        var $confirmBtn = modal.querySelector('button.confirm');

        /*
         * Title
         */
        $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

        /*
         * Text
         */
        $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
        if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

        /*
         * Custom class
         */
        if (params.customClass) {
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
          modal.setAttribute('data-custom-class', params.customClass);
        } else {
          // Find previously set classes and remove them
          var customClass = modal.getAttribute('data-custom-class');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
          modal.setAttribute('data-custom-class', '');
        }

        /*
         * Icon
         */
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

        if (params.type && !_isIE8.isIE8()) {
          var _ret = (function () {

            var validType = false;

            for (var i = 0; i < alertTypes.length; i++) {
              if (params.type === alertTypes[i]) {
                validType = true;
                break;
              }
            }

            if (!validType) {
              logStr('Unknown alert type: ' + params.type);
              return {
                v: false
              };
            }

            var typesWithIcons = ['success', 'error', 'warning', 'info'];
            var $icon = undefined;

            if (typesWithIcons.indexOf(params.type) !== -1) {
              $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
              _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
            }

            var $input = _getModal$getInput$setFocusStyle.getInput();

            // Animate icon
            switch (params.type) {

              case 'success':
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
                break;

              case 'error':
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
                break;

              case 'warning':
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
                break;

              case 'input':
              case 'prompt':
                $input.setAttribute('type', params.inputType);
                $input.value = params.inputValue;
                $input.setAttribute('placeholder', params.inputPlaceholder);
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
                setTimeout(function () {
                  $input.focus();
                  $input.addEventListener('keyup', swal.resetInputError);
                }, 400);
                break;
            }
          })();

          if (typeof _ret === 'object') {
            return _ret.v;
          }
        }

        /*
         * Custom image
         */
        if (params.imageUrl) {
          var $customIcon = modal.querySelector('.sa-icon.sa-custom');

          $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

          var _imgWidth = 80;
          var _imgHeight = 80;

          if (params.imageSize) {
            var dimensions = params.imageSize.toString().split('x');
            var imgWidth = dimensions[0];
            var imgHeight = dimensions[1];

            if (!imgWidth || !imgHeight) {
              logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
            } else {
              _imgWidth = imgWidth;
              _imgHeight = imgHeight;
            }
          }

          $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
        }

        /*
         * Show cancel button?
         */
        modal.setAttribute('data-has-cancel-button', params.showCancelButton);
        if (params.showCancelButton) {
          $cancelBtn.style.display = 'inline-block';
        } else {
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
        }

        /*
         * Show confirm button?
         */
        modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
        if (params.showConfirmButton) {
          $confirmBtn.style.display = 'inline-block';
        } else {
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
        }

        /*
         * Custom text on cancel/confirm buttons
         */
        if (params.cancelButtonText) {
          $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
        }
        if (params.confirmButtonText) {
          $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
        }

        /*
         * Custom color on confirm button
         */
        if (params.confirmButtonColor) {
          // Set confirm button to selected background color
          $confirmBtn.style.backgroundColor = params.confirmButtonColor;

          // Set the confirm button color to the loading ring
          $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
          $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

          // Set box-shadow to default focused button
          _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
        }

        /*
         * Allow outside click
         */
        modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

        /*
         * Callback function
         */
        var hasDoneFunction = params.doneFunction ? true : false;
        modal.setAttribute('data-has-done-function', hasDoneFunction);

        /*
         * Animation
         */
        if (!params.animation) {
          modal.setAttribute('data-animation', 'none');
        } else if (typeof params.animation === 'string') {
          modal.setAttribute('data-animation', params.animation); // Custom animation
        } else {
            modal.setAttribute('data-animation', 'pop');
          }

        /*
         * Timer
         */
        modal.setAttribute('data-timer', params.timer);
      };

      exports['default'] = setParameters;
      module.exports = exports['default'];
    }, { "./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9 }], 9: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /*
       * Allow user to pass their own params
       */
      var extend = function extend(a, b) {
        for (var key in b) {
          if (b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      };

      /*
       * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
       */
      var hexToRgb = function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
      };

      /*
       * Check if the user is using Internet Explorer 8 (for fallbacks)
       */
      var isIE8 = function isIE8() {
        return window.attachEvent && !window.addEventListener;
      };

      /*
       * IE compatible logging for developers
       */
      var logStr = function logStr(string) {
        if (window.console) {
          // IE...
          window.console.log('SweetAlert: ' + string);
        }
      };

      /*
       * Set hover, active and focus-states for buttons 
       * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
       */
      var colorLuminance = function colorLuminance(hex, lum) {
        // Validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;

        // Convert to decimal and change luminosity
        var rgb = '#';
        var c;
        var i;

        for (i = 0; i < 3; i++) {
          c = parseInt(hex.substr(i * 2, 2), 16);
          c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
          rgb += ('00' + c).substr(c.length);
        }

        return rgb;
      };

      exports.extend = extend;
      exports.hexToRgb = hexToRgb;
      exports.isIE8 = isIE8;
      exports.logStr = logStr;
      exports.colorLuminance = colorLuminance;
    }, {}] }, {}, [1]);

  /*
   * Use SweetAlert with RequireJS
   */

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return sweetAlert;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = sweetAlert;
  }
})(window, document);
'use strict';

var ScoreKeeper = ScoreKeeper || {};
(function () {
    ScoreKeeper.helper = {};
    ScoreKeeper.helper.getTime = function () {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
            ampm = 'am',
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        if (d.getHours() >= 12) {
            ampm = "pm";
            hours = d.getHours() - 12;
        }
        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + days[d.getDay()] + " " + hours + ':' + minutes + ampm;
    };
})();
"use strict";

var ScoreKeeper = ScoreKeeper || {};
(function () {
   /*USER PROFILE*/
   ScoreKeeper.profile = {};
   ScoreKeeper.profile.teamName = "Wisconsin Priemier";
})();
"use strict";

var ScoreKeeper = ScoreKeeper || {};
(function () {
    /*Constants*/
    ScoreKeeper.constants = {};
    ScoreKeeper.constants.DB_URL = "https://keepscore.firebaseio.com/games";
    ScoreKeeper.constants.logInPopup = {
        title: "Login",
        text: "Log into Score Keeper with your code:",
        type: "input",
        inputType: "password",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Code...",
        inputValue: "admin"
    };
    ScoreKeeper.constants.makeNewGame = {
        title: "Make new game!",
        text: "\n                <div style='color: #00ad93;'> \n                    " + ScoreKeeper.profile.teamName + " \n                </div>\n                        -vs- ",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Enter opponent name...",
        html: true
    };
    ScoreKeeper.constants.removeGame = {
        title: "Remove this game?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Remove it!",
        cancelButtonText: "No, cancel please!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, ScoreKeeper.constants.addDateTime = {
        title: "Add date/time to this game",
        text: "",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: true,
        animation: "slide-from-top",
        inputPlaceholder: "Date/time",
        inputValue: ScoreKeeper.helper.getTime(),
        html: true
    };
})();
"use strict";

var ScoreKeeper = ScoreKeeper || {};
(function () {
    ScoreKeeper.admin = {};
    ScoreKeeper.admin.status = null;
    ScoreKeeper.admin.makeNewGame = function () {
        var team1Name = arguments.length <= 0 || arguments[0] === undefined ? ScoreKeeper.profile.teamName : arguments[0];
        var team2Name = arguments.length <= 1 || arguments[1] === undefined ? "Away Team" : arguments[1];
        var team1 = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
        var team2 = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

        return {
            team1Name: team1Name,
            team2Name: team2Name,
            team1: team1,
            team2: team2
        };
    };
    ScoreKeeper.admin.makeGame = function () {
        swal(ScoreKeeper.constants.makeNewGame, function (inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false;
            }
            ScoreKeeper.dataBase.connection.push(ScoreKeeper.admin.makeNewGame(ScoreKeeper.profile.teamName, inputValue), function () {
                swal("Game created!", ScoreKeeper.profile.teamName + " -vs- " + inputValue, "success");
            });
        });
    };
    ScoreKeeper.admin.addDate = function (e) {
        if (ScoreKeeper.admin.status) {
            swal(ScoreKeeper.constants.addDateTime, function (inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("You need to write something!");
                    return false;
                }
                ScoreKeeper.dataBase.connection.child(e.target.gameId).update({
                    "timeStart": inputValue
                });
            });
        }
    };
    ScoreKeeper.admin.toggleUserProfile = function () {};
})();
"use strict";

var ScoreKeeper = ScoreKeeper || {};
var eles = {
    "menuRight": "menuRight",
    "gameListWrapper": "gameListWrapper",
    "showRight": "showRight",
    "sideLeft": "sideLeft",
    "sideRight": "sideRight",
    "leftSideScore": "leftSideScore",
    "rightSideScore": "rightSideScore",
    "gameView": "gameView",
    "makeNewGame": "makeNewGame",
    "leftSideName": "leftSideName",
    "rightSideName": "rightSideName",
    "headerTitle": "headerTitle",
    "menuHeaderText": "menuHeaderText",
    "userProfileIconWrapper": "userProfileIconWrapper",
    "newGameSecondField": "newGameSecondField"
};
(function () {
    var elements = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    /*ELEMENTS*/
    ScoreKeeper.elements = elements;
    for (var ele in ScoreKeeper.elements) {
        ScoreKeeper.elements[ele] = (function (id) {
            return document.getElementById(id);
        })(ele);
    }
})(eles);
'use strict';

var ScoreKeeper = ScoreKeeper || {};
(function () {
    /*VIEWS*/
    ScoreKeeper.views = {};
    ScoreKeeper.views.handleGameClick = function (data) {
        if (ScoreKeeper.currentConnection.off) {
            ScoreKeeper.currentConnection.off();
        }
        classie.remove(ScoreKeeper.elements.showRight, 'active');
        classie.remove(ScoreKeeper.elements.showRight, 'open');
        classie.remove(ScoreKeeper.elements.menuRight, 'menuRight-open');
        //TD: validate id for firebase
        var id = data.target.id && data.target.id !== "" ? data.target.id : data.target.parentNode.id;
        if (id) {
            ScoreKeeper.currentConnection = ScoreKeeper.dataBase.connection.child(id);
            ScoreKeeper.currentConnection.on("value", function (snap) {
                if (snap && snap.val()) {
                    ScoreKeeper.views.buildGame(snap.val());
                } else {
                    ScoreKeeper.views.buildGame();
                }
            });
        }
    };
    ScoreKeeper.views.setGame = function () {
        var name1 = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
        var score1 = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var name2 = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];
        var score2 = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

        var headerText = name1 === "" && name2 === "" ? "Score Keeper 1.0" : name1 + " -vs- " + name2;
        ScoreKeeper.elements.leftSideName.textContent = name1;
        ScoreKeeper.elements.leftSideScore.textContent = score1;
        ScoreKeeper.elements.rightSideName.textContent = name2;
        ScoreKeeper.elements.rightSideScore.textContent = score2;
        ScoreKeeper.elements.headerTitle.textContent = headerText;
    };
    ScoreKeeper.views.buildGame = function (data) {
        if (data) {
            ScoreKeeper.views.setGame(data.team1Name, data.team1, data.team2Name, data.team2);
        } else {
            ScoreKeeper.views.setGame();
        }
    };
    ScoreKeeper.views.buildGameList = function (data) {
        var game = document.createElement("div");
        var teamNameOne = document.createElement("div");
        var teamNameTwo = document.createElement("div");
        var scoreWrapper = document.createElement("div");
        var dateLocation = document.createElement("div");
        teamNameOne.className = "gameList-teamNameOne";
        teamNameTwo.className = "gameList-teamNameTwo";
        scoreWrapper.className = "gameList-scoreWrapper";
        dateLocation.className = "gameList-dateLocation";
        game.className = "gameListItem";
        game.id = data.id;
        teamNameOne.appendChild(document.createTextNode(data.team1));
        teamNameTwo.appendChild(document.createTextNode(data.team2));
        scoreWrapper.appendChild(document.createTextNode(data.score));
        if (data.timeStart) {
            dateLocation.appendChild(document.createTextNode(data.timeStart));
        } else {
            //game.id;
            var ico = document.createElement("i");
            ico.className = "icon-volleyball";
            ico.gameId = game.id;
            ico.addEventListener("click", ScoreKeeper.admin.addDate);
            dateLocation.appendChild(ico);
        }
        game.appendChild(teamNameOne);
        game.appendChild(teamNameTwo);
        game.appendChild(scoreWrapper);
        game.appendChild(dateLocation);
        var h = new Hammer(game);
        h.get('press').set({
            "time": 900
        });
        h.on("press", function (e) {
            if (ScoreKeeper.admin.status) {
                e = e.target.id && e.target.id !== "" ? e.target : e.target.parentNode;
                ScoreKeeper.constants.removeGame.text = data.team1Name + " vs " + data.team2Name;
                swal(ScoreKeeper.constants.removeGame, function (isConfirm) {
                    if (isConfirm) {
                        ScoreKeeper.dataBase.connection.child(e.id).remove();
                        swal("Deleted!", "Game removed", "success");
                    } else {
                        swal("Cancelled", "Action stopped, the game is still there!", "error");
                    }
                });
            }
        });
        game.addEventListener("click", ScoreKeeper.views.handleGameClick);
        ScoreKeeper.elements.gameListWrapper.appendChild(game);
    };
})();
/*
Constants
DB connector
View handler
    view builder
    main view
    list view
Admin Options
    CRUD for games
    Control score of individual game
        scores +/-
        game complete button

Wish list
    Save all games some how.

*/
'use strict';

var ScoreKeeper = ScoreKeeper || {};
(function () {
    var dataBase = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    /*CURRENT GAME Connection*/
    ScoreKeeper.currentConnection = {};
    /*Element EVENTS*/
    ScoreKeeper.elements.showRight.addEventListener("click", function () {
        classie.toggle(ScoreKeeper.elements.showRight, 'active');
        classie.toggle(ScoreKeeper.elements.showRight, 'open');
        classie.toggle(ScoreKeeper.elements.menuRight, 'menuRight-open');
    });
    ScoreKeeper.elements.makeNewGame.addEventListener("click", ScoreKeeper.admin.makeGame);
    ScoreKeeper.elements.userProfileIconWrapper.addEventListener("click", function () {
        alert("user profile ... coming soon");
    });
    /*Listen for Swipes*/
    ScoreKeeper.swipe = {};
    ScoreKeeper.swipe.sideLeft = (function () {
        var h = new Hammer(ScoreKeeper.elements.sideLeft);
        h.get('swipe').set({
            direction: Hammer.DIRECTION_VERTICAL
        });
        return h;
    })();
    ScoreKeeper.swipe.sideRight = (function () {
        var h = new Hammer(ScoreKeeper.elements.sideRight);
        h.get('swipe').set({
            direction: Hammer.DIRECTION_VERTICAL
        });
        return h;
    })();
    ScoreKeeper.swipe.checkDirection = function (direction) {
        return direction === 16 ? false : true;
    };
    ScoreKeeper.swipe.handleSwipeLeftSide = function (data) {
        if (ScoreKeeper.admin.status && data.direction && (data.direction === 16 || data.direction === 8)) {
            (function () {
                var val = Number(ScoreKeeper.elements.leftSideScore.innerText);
                if (ScoreKeeper.swipe.checkDirection(data.direction)) {
                    val++;
                } else {
                    val--;
                }
                val = val < 0 ? 0 : val;
                ScoreKeeper.currentConnection.update({
                    "team1": val
                }, function (err) {
                    if (!err) {
                        ScoreKeeper.elements.leftSideScore.innerText = val;
                    }
                });
            })();
        }
    };
    ScoreKeeper.swipe.handleSwipeRightSide = function (data) {
        if (ScoreKeeper.admin.status && data.direction && (data.direction === 16 || data.direction === 8)) {
            (function () {
                var val = Number(ScoreKeeper.elements.rightSideScore.innerText);
                if (ScoreKeeper.swipe.checkDirection(data.direction)) {
                    val++;
                } else {
                    val--;
                }
                ScoreKeeper.currentConnection.update({
                    "team2": val
                }, function (err) {
                    if (!err) {
                        ScoreKeeper.elements.rightSideScore.innerText = val;
                    }
                });
            })();
        }
    };
    ScoreKeeper.swipe.sideLeft.on("swipe", ScoreKeeper.swipe.handleSwipeLeftSide);
    ScoreKeeper.swipe.sideRight.on("swipe", ScoreKeeper.swipe.handleSwipeRightSide);
    var hammerEvent = new Hammer(ScoreKeeper.elements.menuHeaderText);
    hammerEvent.get('press').set({
        "time": 900
    });
    hammerEvent.on("press", function (e) {
        swal(ScoreKeeper.constants.logInPopup, function (inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to provide your code!");
                return false;
            }
            ScoreKeeper.dataBase.connection.authWithPassword({
                email: "sample@sample.com",
                password: inputValue
            }, function (error, authData) {
                if (error) {
                    swal("Error with login!", error, "error");
                    ScoreKeeper.dataBase.connection.unauth();
                } else {
                    swal("Logged in!", "Logged in as Administrator", "success");
                    classie.toggle(ScoreKeeper.elements.makeNewGame, 'adminControlDisplay');
                    classie.toggle(ScoreKeeper.elements.menuHeaderText, 'adminControlDisplay');
                    classie.toggle(ScoreKeeper.elements.userProfileIconWrapper, 'adminControlDisplay');
                    // console.log("Authenticated successfully with payload:", authData);
                }
            });
        });
    });
})();
/***DATABASE Connector***/
"use strict";

var ScoreKeeper = ScoreKeeper || {};
(function () {
    ScoreKeeper.dataBase = {};
    ScoreKeeper.dataBase.connection = (function () {
        return new Firebase(ScoreKeeper.constants.DB_URL);
    })();
    ScoreKeeper.dataBase.handleDbConnection = function (data) {
        if (data && data.forEach) {
            ScoreKeeper.elements.gameListWrapper.innerHTML = "";
            data.forEach(function (child) {
                ScoreKeeper.views.buildGameList({
                    "id": child.key(),
                    "team1": child.val().team1Name,
                    "team2": child.val().team2Name,
                    "score": child.val().team1 + "  --  " + child.val().team2,
                    "timeStart": child.val().timeStart
                });
            });
        }
    };

    //Listen for db change;
    ScoreKeeper.dataBase.connection.on("value", ScoreKeeper.dataBase.handleDbConnection);
    ScoreKeeper.dataBase.connection.onAuth(function (authData) {
        ScoreKeeper.admin.status = authData;
    });

    ScoreKeeper.dataBase.connection.unauth();
})();