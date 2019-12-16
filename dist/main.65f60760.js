// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = h;
exports.Fragment = y;
exports.createRef = p;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    f,
    r = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return v(n, o, l && l.key, l && l.ref);
}

function v(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function y(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, f, r;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, f = (o = (l = n).__v).__e, (r = l.__P) && (i = [], t = T(r, o, s({}, o), l.__n, void 0 !== r.ownerSVGElement, null, i, null == f ? m(o) : f), $(i, o), t != f && w(o)));
}

function _(n, l, u, i, t, o, f, c, s) {
  var h,
      v,
      p,
      y,
      d,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == r && (c = null != o ? o[0] : _ ? m(u, 0) : null), h = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (y = T(n, u, p = p || r, i, t, o, f, c, s), (v = u.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(v, u.__c || y, u)), null != y) {
        if (null == w && (w = y), null != u.__d) y = u.__d, u.__d = null;else if (o == p || y != c || null == y.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(y);else {
            for (d = c, v = 0; (d = d.nextSibling) && v < _; v += 2) if (d == y) break n;

            n.insertBefore(y, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = y.nextSibling, "function" == typeof l.type && (l.__d = y);
      }
    }

    return h++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (h = o.length; h--;) null != o[h] && a(o[h]);

  for (h = _; h--;) null != k[h] && A(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) z(g[h], g[++h], g[++h]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? v(null, n, null, null) : null != n.__e || null != n.__c ? v(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || P(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || P(n, o, l[o], u[o], i);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function P(n, l, u, i, t) {
  var o, f, r, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (f in i) u && f in u || C(o, f, "");
      if (u) for (r in u) i && u[r] === i[r] || C(o, r, u[r]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function T(l, u, i, t, o, f, r, e, c) {
  var a,
      h,
      v,
      p,
      m,
      w,
      g,
      k,
      x,
      C,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, x = (a = P.contextType) && t[a.__c], C = a ? x ? x.props.value : a.__ : t, i.__c ? g = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new d(k, C), h.constructor = P, h.render = D), x && x.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(k, h.__s))), p = h.props, m = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && null == h.__e && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = i.__e, u.__k = i.__k, h.__h.length && r.push(h), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(p, m, w);
        });
      }
      h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = b(null != a && a.type == y && null == a.key ? a.props.children : a), null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, f, r, e, c), h.base = u.__e, h.__h.length && r.push(h), g && (h.__E = h.__ = null), h.__e = null;
    } else u.__e = j(i.__e, u, i, t, o, f, r, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, f, c) {
  var s,
      a,
      h,
      v,
      p,
      y = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), y !== d && (n.data = d);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (y = u.props || r).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !c) {
      if (y === r) for (y = {}, p = 0; p < n.attributes.length; p++) y[n.attributes[p].name] = n.attributes[p].value;
      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
    }

    x(n, d, y, t, c), l.__k = l.props.children, v || _(n, l, u, i, "foreignObject" !== l.type && t, o, f, r, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));
  }
  return n;
}

function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, f;

  if (n.unmount && n.unmount(l), (t = l.ref) && z(t, null, u), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = null, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (f = 0; f < t.length; f++) t[f] && A(t[f], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, f, c;
  n.__ && n.__(l, u), f = (t = i === o) ? null : i && i.__k || u.__k, l = h(y, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, f || r, r, void 0 !== u.ownerSVGElement, i && !t ? [i] : f ? null : e.slice.call(u.childNodes), c, i || r, t), $(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError) u.setState(u.constructor.getDerivedStateFromError(n));else {
        if (null == u.componentDidCatch) continue;
        u.componentDidCatch(n);
      }
      return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (this.__e = !1, l && this.__h.push(l), g(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, d.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = r, f = 0;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/preact-material-components/Elevation/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/IconButton/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/Icon/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/Typography/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/LayoutGrid/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/Snackbar/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/@babel/runtime/helpers/interopRequireDefault.js":[function(require,module,exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"../node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized":"../node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"../node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"../node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"../node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"../node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"../node_modules/@material/base/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }
  /** @return enum{strings} */


  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }
  /** @return enum{numbers} */


  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }
  /** @return {!Object} */


  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }
  /**
   * @param {A=} adapter
   */


  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }

}

var _default = MDCFoundation;
exports.default = _default;
},{}],"../node_modules/@material/base/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("./foundation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation.default());
  }
  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */


  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    /** @protected {!F} */

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize()
  /* ...args */
  {} // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.

  /**
   * @return {!F} foundation
   */


  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  }

  initialSyncWithDOM() {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }
  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }
  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */


  emit(evtType, evtData, shouldBubble = false) {
    let evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }

}

var _default = MDCComponent;
exports.default = _default;
},{"./foundation":"../node_modules/@material/base/foundation.js"}],"../node_modules/@material/ripple/adapter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}
  /** @return {boolean} */


  isUnbounded() {}
  /** @return {boolean} */


  isSurfaceActive() {}
  /** @return {boolean} */


  isSurfaceDisabled() {}
  /** @param {string} className */


  addClass(className) {}
  /** @param {string} className */


  removeClass(className) {}
  /** @param {!EventTarget} target */


  containsEventTarget(target) {}
  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  registerInteractionHandler(evtType, handler) {}
  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  deregisterInteractionHandler(evtType, handler) {}
  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  registerDocumentInteractionHandler(evtType, handler) {}
  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  deregisterDocumentInteractionHandler(evtType, handler) {}
  /**
   * @param {!Function} handler
   */


  registerResizeHandler(handler) {}
  /**
   * @param {!Function} handler
   */


  deregisterResizeHandler(handler) {}
  /**
   * @param {string} varName
   * @param {?number|string} value
   */


  updateCssVariable(varName, value) {}
  /** @return {!ClientRect} */


  computeBoundingRect() {}
  /** @return {{x: number, y: number}} */


  getWindowPageOffset() {}

}

var _default = MDCRippleAdapter;
exports.default = _default;
},{}],"../node_modules/@material/ripple/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};
exports.cssClasses = cssClasses;
const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};
exports.strings = strings;
const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225,
  // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150,
  // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices

};
exports.numbers = numbers;
},{}],"../node_modules/@material/ripple/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */

let supportsPassive_;
/**
 * @param {!Window} windowObj
 * @return {boolean}
 */

function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}
/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */


function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  const weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }

  return supportsCssVariables;
} //

/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */


function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;

    try {
      globalObj.document.addEventListener('test', null, {
        get passive() {
          isSupported = true;
        }

      });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}
/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */


function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(p => p in HTMLElementPrototype).pop();
}
/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */


function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {
    x,
    y
  } = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;
  let normalizedX;
  let normalizedY; // Determine touch point relative to the ripple container.

  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}
},{}],"../node_modules/@material/ripple/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("@material/base/foundation"));

var _adapter = _interopRequireDefault(require("./adapter"));

var _constants = require("./constants");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;
/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */

let ListenerInfoType;
/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */

let ListenersType;
/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */

let PointType; // Activation events registered on the root element of each instance for activation

const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup']; // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations

/** @type {!Array<!EventTarget>} */

let activatedTargets = [];
/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

class MDCRippleFoundation extends _foundation.default {
  static get cssClasses() {
    return _constants.cssClasses;
  }

  static get strings() {
    return _constants.strings;
  }

  static get numbers() {
    return _constants.numbers;
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () =>
      /* boolean - cached */
      {},
      isUnbounded: () =>
      /* boolean */
      {},
      isSurfaceActive: () =>
      /* boolean */
      {},
      isSurfaceDisabled: () =>
      /* boolean */
      {},
      addClass: () =>
      /* className: string */
      {},
      removeClass: () =>
      /* className: string */
      {},
      containsEventTarget: () =>
      /* target: !EventTarget */
      {},
      registerInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      deregisterInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      registerDocumentInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      deregisterDocumentInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      registerResizeHandler: () =>
      /* handler: EventListener */
      {},
      deregisterResizeHandler: () =>
      /* handler: EventListener */
      {},
      updateCssVariable: () =>
      /* varName: string, value: string */
      {},
      computeBoundingRect: () =>
      /* ClientRect */
      {},
      getWindowPageOffset: () =>
      /* {x: number, y: number} */
      {}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));
    /** @private {number} */

    this.layoutFrame_ = 0;
    /** @private {!ClientRect} */

    this.frame_ =
    /** @type {!ClientRect} */
    {
      width: 0,
      height: 0
    };
    /** @private {!ActivationStateType} */

    this.activationState_ = this.defaultActivationState_();
    /** @private {number} */

    this.initialSize_ = 0;
    /** @private {number} */

    this.maxRadius_ = 0;
    /** @private {function(!Event)} */

    this.activateHandler_ = e => this.activate_(e);
    /** @private {function(!Event)} */


    this.deactivateHandler_ = e => this.deactivate_(e);
    /** @private {function(?Event=)} */


    this.focusHandler_ = () => this.handleFocus();
    /** @private {function(?Event=)} */


    this.blurHandler_ = () => this.handleBlur();
    /** @private {!Function} */


    this.resizeHandler_ = () => this.layout();
    /** @private {{left: number, top:number}} */


    this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    /** @private {number} */

    this.fgScale_ = 0;
    /** @private {number} */

    this.activationTimer_ = 0;
    /** @private {number} */

    this.fgDeactivationRemovalTimer_ = 0;
    /** @private {boolean} */

    this.activationAnimationHasEnded_ = false;
    /** @private {!Function} */

    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
    /** @private {?Event} */


    this.previousActivationEvent_ = null;
  }
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  supportsPressRipple_() {
    return this.adapter_.browserSupportsCssVars();
  }
  /**
   * @return {!ActivationStateType}
   */


  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false
    };
  }
  /** @override */


  init() {
    const supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      const {
        ROOT,
        UNBOUNDED
      } = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.addClass(ROOT);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.addClass(UNBOUNDED); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple

          this.layoutInternal_();
        }
      });
    }
  }
  /** @override */


  destroy() {
    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      const {
        ROOT,
        UNBOUNDED
      } = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.removeClass(ROOT);
        this.adapter_.removeClass(UNBOUNDED);
        this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  }
  /**
   * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
   * @private
   */


  registerRootHandlers_(supportsPressRipple) {
    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(type => {
        this.adapter_.registerInteractionHandler(type, this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  }
  /**
   * @param {!Event} e
   * @private
   */


  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }
  /** @private */


  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }
  /** @private */


  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(type => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }
  /** @private */


  removeCssVars_() {
    const {
      strings
    } = MDCRippleFoundation;
    Object.keys(strings).forEach(k => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }
  /**
   * @param {?Event} e
   * @private
   */


  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
    const hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(target => this.adapter_.containsEventTarget(target));

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push(
      /** @type {!EventTarget} */
      e.target);
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);

        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }
  /**
   * @param {?Event} e
   * @private
   */


  checkElementMadeActive_(e) {
    return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  }
  /**
   * @param {?Event=} event Optional event containing position information.
   */


  activate(event = null) {
    this.activate_(event);
  }
  /** @private */


  animateActivation_() {
    const {
      VAR_FG_TRANSLATE_START,
      VAR_FG_TRANSLATE_END
    } = MDCRippleFoundation.strings;
    const {
      FG_DEACTIVATION,
      FG_ACTIVATION
    } = MDCRippleFoundation.cssClasses;
    const {
      DEACTIVATION_TIMEOUT_MS
    } = MDCRippleFoundation.numbers;
    this.layoutInternal_();
    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {
        startPoint,
        endPoint
      } = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }
  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */


  getFgTranslationCoordinates_() {
    const {
      activationEvent,
      wasActivatedByPointer
    } = this.activationState_;
    let startPoint;

    if (wasActivatedByPointer) {
      startPoint = (0, _util.getNormalizedEventCoords)(
      /** @type {!Event} */
      activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    const endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint,
      endPoint
    };
  }
  /** @private */


  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const {
      FG_DEACTIVATION
    } = MDCRippleFoundation.cssClasses;
    const {
      hasDeactivationUXRun,
      isActivated
    } = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants.numbers.FG_DEACTIVATION_MS);
    }
  }
  /** @private */


  rmBoundedActivationClasses_() {
    const {
      FG_ACTIVATION
    } = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(() => this.previousActivationEvent_ = null, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }
  /**
   * @param {?Event} e
   * @private
   */


  deactivate_(e) {
    const activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    const state =
    /** @type {!ActivationStateType} */
    Object.assign({}, activationState);

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }
  /**
   * @param {?Event=} event Optional event containing position information.
   */


  deactivate(event = null) {
    this.deactivate_(event);
  }
  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */


  animateDeactivation_(e, {
    wasActivatedByPointer,
    wasElementMadeActive
  }) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }
  /** @private */


  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  }
  /** @private */


  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE,
      VAR_LEFT,
      VAR_TOP,
      VAR_FG_SCALE
    } = MDCRippleFoundation.strings;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
  /** @param {boolean} unbounded */


  setUnbounded(unbounded) {
    const {
      UNBOUNDED
    } = MDCRippleFoundation.cssClasses;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }

  handleFocus() {
    requestAnimationFrame(() => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }

  handleBlur() {
    requestAnimationFrame(() => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }

}

var _default = MDCRippleFoundation;
exports.default = _default;
},{"@material/base/foundation":"../node_modules/@material/base/foundation.js","./adapter":"../node_modules/@material/ripple/adapter.js","./constants":"../node_modules/@material/ripple/constants.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/@material/ripple/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCRippleFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.util = exports.RippleCapableSurface = exports.MDCRipple = void 0;

var _component = _interopRequireDefault(require("@material/base/component"));

var _adapter = _interopRequireDefault(require("./adapter"));

var _foundation = _interopRequireDefault(require("./foundation"));

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends _component.default {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);
    /** @type {boolean} */

    this.disabled = false;
    /** @private {boolean} */

    this.unbounded_;
  }
  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  static attachTo(root, {
    isUnbounded = undefined
  } = {}) {
    const ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (isUnbounded !== undefined) {
      ripple.unbounded =
      /** @type {boolean} */
      isUnbounded;
    }

    return ripple;
  }
  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */


  static createAdapter(instance) {
    const MATCHES = util.getMatchesProperty(HTMLElement.prototype);
    return {
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: className => instance.root_.classList.add(className),
      removeClass: className => instance.root_.classList.remove(className),
      containsEventTarget: target => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) => instance.root_.addEventListener(evtType, handler, util.applyPassive()),
      deregisterInteractionHandler: (evtType, handler) => instance.root_.removeEventListener(evtType, handler, util.applyPassive()),
      registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, util.applyPassive()),
      deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, util.applyPassive()),
      registerResizeHandler: handler => window.addEventListener('resize', handler),
      deregisterResizeHandler: handler => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      })
    };
  }
  /** @return {boolean} */


  get unbounded() {
    return this.unbounded_;
  }
  /** @param {boolean} unbounded */


  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */


  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }
  /**
   * @return {!MDCRippleFoundation}
   * @override
   */


  getDefaultFoundation() {
    return new _foundation.default(MDCRipple.createAdapter(this));
  }
  /** @override */


  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }

}
/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


exports.MDCRipple = MDCRipple;

class RippleCapableSurface {}
/** @protected {!Element} */


exports.RippleCapableSurface = RippleCapableSurface;
RippleCapableSurface.prototype.root_;
/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */

RippleCapableSurface.prototype.unbounded;
/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */

RippleCapableSurface.prototype.disabled;
},{"@material/base/component":"../node_modules/@material/base/component.js","./adapter":"../node_modules/@material/ripple/adapter.js","./foundation":"../node_modules/@material/ripple/foundation.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/bind-decorator/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;

},{}],"../node_modules/preact-material-components/Base/MaterialComponent.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MaterialComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _ripple = require("@material/ripple");

var _bindDecorator = require("bind-decorator");

var _preact = require("preact");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var doNotRemoveProps = ['disabled'];
/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MaterialComponent, _Component);

  function MaterialComponent() {
    (0, _classCallCheck2.default)(this, MaterialComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaterialComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(MaterialComponent, [{
    key: "render",
    value: function render(props) {
      if (!this.classText) {
        this.classText = this.buildClassName(props);
      } // Fetch a VNode


      var componentProps = props;
      var userDefinedClasses = componentProps.className || componentProps.class || ''; // We delete class props and add them later in the final
      // step so every component does not need to handle user specified classes.

      if (componentProps.class) {
        delete componentProps.class;
      }

      if (componentProps.className) {
        delete componentProps.className;
      }

      var element = this.materialDom(componentProps);
      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      element[propName].className = "".concat(userDefinedClasses, " ").concat(this.getClassName(element)).split(' ').filter(function (value, index, self) {
        return self.indexOf(value) === index && value !== '';
      }) // Unique + exclude empty class names
      .join(' '); // Clean this shit of proxy attributes

      this.mdcProps.forEach(function (prop) {
        // TODO: Fix this better
        if (prop in doNotRemoveProps) {
          return;
        } // @ts-ignore


        delete element[propName][prop];
      });
      return element;
    }
    /** Attach the ripple effect */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ripple && this.control) {
        this.ripple = new _ripple.MDCRipple(this.control);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.mdcNotifyProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;

            if (this.props[prop] !== nextProps[prop]) {
              this.MDComponent[prop] = nextProps[prop];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mdcProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _prop = _step2.value;

          if (this.props[_prop] !== nextProps[_prop]) {
            this.classText = this.buildClassName(nextProps);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ripple) {
        this.ripple.destroy();
      }
    }
  }, {
    key: "afterComponentDidMount",
    value: function afterComponentDidMount() {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mdcNotifyProps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;
            this.MDComponent[prop] = this.props[prop];
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } // Shared setter for the root element ref

  }, {
    key: "setControlRef",
    value: function setControlRef(control) {
      this.control = control;
    }
    /** Build the className based on component names and mdc props */

  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      // Class name based on component name
      var classText = 'mdc-' + this.componentName; // Loop over mdcProps to turn them into classNames

      for (var propKey in props) {
        if (props.hasOwnProperty(propKey)) {
          var prop = props[propKey];

          if (typeof prop === 'boolean' && prop) {
            if (this.mdcProps.indexOf(propKey) !== -1) {
              classText += " mdc-".concat(this.componentName, "--").concat(propKey);
            }
          }
        }
      }

      return classText;
    }
    /** Returns the class name for element */

  }, {
    key: "getClassName",
    value: function getClassName(element) {
      if (!element) {
        return '';
      }

      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      var attrs = element[propName] = element[propName] || {};
      var classText = this.classText;

      if (attrs.class) {
        classText += ' ' + attrs.class;
      }

      if (attrs.className && attrs.className !== attrs.class) {
        classText += ' ' + attrs.className;
      }

      return classText;
    }
  }]);
  return MaterialComponent;
}(_preact.Component);

exports.MaterialComponent = MaterialComponent;

__decorate([_bindDecorator.bind], MaterialComponent.prototype, "setControlRef", null);

var _default = MaterialComponent;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","@material/ripple":"../node_modules/@material/ripple/index.js","bind-decorator":"../node_modules/bind-decorator/index.js","preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-material-components/Elevation/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Elevation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var generatedProps = [];

for (var elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
  generatedProps.push('z' + elevationIndex);
}

var Elevation =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Elevation, _MaterialComponent);

  function Elevation() {
    var _this;

    (0, _classCallCheck2.default)(this, Elevation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Elevation).apply(this, arguments));
    _this.componentName = 'elevation';
    _this.mdcProps = generatedProps;
    return _this;
  }

  (0, _createClass2.default)(Elevation, [{
    key: "materialDom",
    value: function materialDom(props) {
      var className;

      if (props.z) {
        className = 'mdc-elevation--z' + props.z;
      }

      return (0, _preact.h)("p", Object.assign({
        className: className
      }, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return Elevation;
}(_MaterialComponent2.default);

exports.Elevation = Elevation;
var _default = Elevation;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"components/PasswordInput.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PasswordInput =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordInput, _Component);

  function PasswordInput() {
    _classCallCheck(this, PasswordInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).call(this));
  }

  _createClass(PasswordInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("input", {
        className: "password-display",
        type: "text",
        value: this.props.password
      });
    }
  }]);

  return PasswordInput;
}(_preact.Component);

exports.default = PasswordInput;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-material-components/Typography/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Typography = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Typography =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Typography, _MaterialComponent);

  function Typography() {
    var _this;

    (0, _classCallCheck2.default)(this, Typography);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Typography).apply(this, arguments));
    _this.componentName = 'typography';
    _this.mdcProps = ['headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline', 'title'];
    return _this;
  }

  (0, _createClass2.default)(Typography, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var tag = allprops.tag,
          props = __rest(allprops, ["tag"]);

      var Tag = tag ? tag : 'span';
      return (0, _preact.h)(Tag, Object.assign({}, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return Typography;
}(_MaterialComponent2.default);

exports.Typography = Typography;
var _default = Typography;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/@babel/runtime/helpers/superPropBase.js":[function(require,module,exports) {
var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
},{"./getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js"}],"../node_modules/@babel/runtime/helpers/get.js":[function(require,module,exports) {
var superPropBase = require("./superPropBase");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
},{"./superPropBase":"../node_modules/@babel/runtime/helpers/superPropBase.js"}],"../node_modules/@material/slider/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};
/** @enum {string} */

exports.cssClasses = cssClasses;
const strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};
/** @enum {number} */

exports.strings = strings;
const numbers = {
  PAGE_FACTOR: 4
};
exports.numbers = numbers;
},{}],"../node_modules/@material/slider/adapter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCSliderAdapter {
  /**
   * Returns true if className exists for the slider Element
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}
  /**
   * Adds a class to the slider Element
   * @param {string} className
   */


  addClass(className) {}
  /**
   * Removes a class from the slider Element
   * @param {string} className
   */


  removeClass(className) {}
  /**
   * Returns a string if attribute name exists on the slider Element,
   * otherwise returns null
   * @param {string} name
   * @return {?string}
   */


  getAttribute(name) {}
  /**
   * Sets attribute name on slider Element to value
   * @param {string} name
   * @param {string} value
   */


  setAttribute(name, value) {}
  /**
   * Removes attribute name from slider Element
   * @param {string} name
   */


  removeAttribute(name) {}
  /**
   * Returns the bounding client rect for the slider Element
   * @return {?ClientRect}
   */


  computeBoundingRect() {}
  /**
   * Returns the tab index of the slider Element
   * @return {number}
   */


  getTabIndex() {}
  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  registerInteractionHandler(type, handler) {}
  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  deregisterInteractionHandler(type, handler) {}
  /**
   * Registers an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  registerThumbContainerInteractionHandler(type, handler) {}
  /**
   * Deregisters an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  deregisterThumbContainerInteractionHandler(type, handler) {}
  /**
   * Registers an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  registerBodyInteractionHandler(type, handler) {}
  /**
   * Deregisters an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  deregisterBodyInteractionHandler(type, handler) {}
  /**
   * Registers an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */


  registerResizeHandler(handler) {}
  /**
   * Deregisters an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */


  deregisterResizeHandler(handler) {}
  /**
   * Emits a custom event MDCSlider:input from the root
   */


  notifyInput() {}
  /**
   * Emits a custom event MDCSlider:change from the root
   */


  notifyChange() {}
  /**
   * Sets a style property of the thumb container element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */


  setThumbContainerStyleProperty(propertyName, value) {}
  /**
   * Sets a style property of the track element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */


  setTrackStyleProperty(propertyName, value) {}
  /**
   * Sets the inner text of the pin marker to the passed value
   * @param {number} value
   */


  setMarkerValue(value) {}
  /**
   * Appends the passed number of track markers to the track mark container element
   * @param {number} numMarkers
   */


  appendTrackMarkers(numMarkers) {}
  /**
   * Removes all track markers fromt he track mark container element
   */


  removeTrackMarkers() {}
  /**
   * Sets a style property of the last track marker to the passed value
   * @param {string} propertyName
   * @param {string} value
   */


  setLastTrackMarkersStyleProperty(propertyName, value) {}
  /**
   * Returns true if the root element is RTL, otherwise false
   * @return {boolean}
   */


  isRTL() {}

}

var _default = MDCSliderAdapter;
exports.default = _default;
},{}],"../node_modules/@material/animation/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;
exports.transformStyleProperties = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
let VendorPropertyMapType;
/** @const {Object<string, !VendorPropertyMapType>} */

const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};
/** @const {Object<string, !VendorPropertyMapType>} */

const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};
/**
 * @param {!Object} windowObj
 * @return {boolean}
 */

function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}
/**
 * @param {string} eventType
 * @return {boolean}
 */


function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}
/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */


function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}
/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */


function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map =
  /** @type {!Object<string, !VendorPropertyMapType>} */
  eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
} // Public functions to access getAnimationName() for JavaScript events or CSS
// property names.


const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];
/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */

exports.transformStyleProperties = transformStyleProperties;

function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}
/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */


function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}
},{}],"../node_modules/@material/slider/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./constants");

var _adapter = _interopRequireDefault(require("./adapter"));

var _index = require("@material/animation/index");

var _foundation = _interopRequireDefault(require("@material/base/foundation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};
/** @enum {string} */

const MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove'
};
const DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
const UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */

class MDCSliderFoundation extends _foundation.default {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return _constants.cssClasses;
  }
  /** @return enum {strings} */


  static get strings() {
    return _constants.strings;
  }
  /** @return enum {numbers} */


  static get numbers() {
    return _constants.numbers;
  }
  /** @return {!MDCSliderAdapter} */


  static get defaultAdapter() {
    return (
      /** @type {!MDCSliderAdapter} */
      {
        hasClass: () =>
        /* className: string */

        /* boolean */
        false,
        addClass: () =>
        /* className: string */
        {},
        removeClass: () =>
        /* className: string */
        {},
        getAttribute: () =>
        /* name: string */

        /* string|null */
        null,
        setAttribute: () =>
        /* name: string, value: string */
        {},
        removeAttribute: () =>
        /* name: string */
        {},
        computeBoundingRect: () => (
        /* ClientRect */
        {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: 0,
          height: 0
        }),
        getTabIndex: () =>
        /* number */
        0,
        registerInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        deregisterInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        registerThumbContainerInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        deregisterThumbContainerInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        registerBodyInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        deregisterBodyInteractionHandler: () =>
        /* type: string, handler: EventListener */
        {},
        registerResizeHandler: () =>
        /* handler: EventListener */
        {},
        deregisterResizeHandler: () =>
        /* handler: EventListener */
        {},
        notifyInput: () => {},
        notifyChange: () => {},
        setThumbContainerStyleProperty: () =>
        /* propertyName: string, value: string */
        {},
        setTrackStyleProperty: () =>
        /* propertyName: string, value: string */
        {},
        setMarkerValue: () =>
        /* value: number */
        {},
        appendTrackMarkers: () =>
        /* numMarkers: number */
        {},
        removeTrackMarkers: () => {},
        setLastTrackMarkersStyleProperty: () =>
        /* propertyName: string, value: string */
        {},
        isRTL: () =>
        /* boolean */
        false
      }
    );
  }
  /**
   * Creates a new instance of MDCSliderFoundation
   * @param {?MDCSliderAdapter} adapter
   */


  constructor(adapter) {
    super(Object.assign(MDCSliderFoundation.defaultAdapter, adapter));
    /** @private {?ClientRect} */

    this.rect_ = null; // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.

    this.savedTabIndex_ = NaN;
    this.active_ = false;
    this.inTransit_ = false;
    this.isDiscrete_ = false;
    this.hasTrackMarker_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;

    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };

    this.interactionStartHandler_ = evt => this.handleDown_(evt);

    this.keydownHandler_ = evt => this.handleKeydown_(evt);

    this.focusHandler_ = () => this.handleFocus_();

    this.blurHandler_ = () => this.handleBlur_();

    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.isDiscrete_ = this.adapter_.hasClass(_constants.cssClasses.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(_constants.cssClasses.HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach(evtName => this.adapter_.registerInteractionHandler(evtName, this.interactionStartHandler_));
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout(); // At last step, provide a reasonable default value to discrete slider

    if (this.isDiscrete_ && this.getStep() == 0) {
      this.step_ = 1;
    }
  }

  destroy() {
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.deregisterInteractionHandler(evtName, this.interactionStartHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach(evtName => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
      const min = this.getMin();
      const max = this.getMax();
      const step = this.getStep();
      let numMarkers = (max - min) / step; // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value

      const indivisible = Math.ceil(numMarkers) !== numMarkers;

      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        const lastStepRatio = (max - numMarkers * step) / step + 1;
        const flex = (0, _index.getCorrectPropertyName)(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
      }
    }
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }
  /** @return {number} */


  getValue() {
    return this.value_;
  }
  /** @param {number} value */


  setValue(value) {
    this.setValue_(value, false);
  }
  /** @return {number} */


  getMax() {
    return this.max_;
  }
  /** @param {number} max */


  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }

    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  }
  /** @return {number} */


  getMin() {
    return this.min_;
  }
  /** @param {number} min */


  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }

    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(_constants.strings.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  }
  /** @return {number} */


  getStep() {
    return this.step_;
  }
  /** @param {number} step */


  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }

    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }

    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  }
  /** @return {boolean} */


  isDisabled() {
    return this.disabled_;
  }
  /** @param {boolean} disabled */


  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(_constants.cssClasses.DISABLED, this.disabled_);

    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(_constants.strings.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(_constants.strings.ARIA_DISABLED);

      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }
  /**
   * Called when the user starts interacting with the slider
   * @param {!Event} evt
   * @private
   */


  handleDown_(evt) {
    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    const moveHandler = evt => {
      this.handleMove_(evt);
    }; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)


    const upHandler = () => {
      this.handleUp_();
      this.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach(evtName => this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler));
    };

    this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
    UP_EVENTS.forEach(evtName => this.adapter_.registerBodyInteractionHandler(evtName, upHandler));
    this.setValueFromEvt_(evt);
  }
  /**
   * Called when the user moves the slider
   * @param {!Event} evt
   * @private
   */


  handleMove_(evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  }
  /**
   * Called when the user's interaction with the slider ends
   * @private
   */


  handleUp_() {
    this.setActive_(false);
    this.adapter_.notifyChange();
  }
  /**
   * Returns the pageX of the event
   * @param {!Event} evt
   * @return {number}
   * @private
   */


  getPageX_(evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }

    return evt.pageX;
  }
  /**
   * Sets the slider value from an event
   * @param {!Event} evt
   * @private
   */


  setValueFromEvt_(evt) {
    const pageX = this.getPageX_(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }
  /**
   * Computes the new value from the pageX position
   * @param {number} pageX
   * @return {number}
   */


  computeValueFromPageX_(pageX) {
    const {
      max_: max,
      min_: min
    } = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;

    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    } // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].


    return min + pctComplete * (max - min);
  }
  /**
   * Handles keydown events
   * @param {!Event} evt
   */


  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);

    if (isNaN(value)) {
      return;
    } // Prevent page from scrolling due to key presses that would normally scroll the page


    evt.preventDefault();
    this.adapter_.addClass(_constants.cssClasses.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }
  /**
   * Returns the computed name of the event
   * @param {!Event} kbdEvt
   * @return {string}
   */


  getKeyId_(kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }

    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }

    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }

    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }

    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  }
  /**
   * Computes the value given a keyboard key ID
   * @param {string} keyId
   * @return {number}
   */


  getValueForKeyId_(keyId) {
    const {
      max_: max,
      min_: min,
      step_: step
    } = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
      case KEY_IDS.ARROW_LEFT:
      case KEY_IDS.ARROW_DOWN:
        return this.value_ - delta;

      case KEY_IDS.ARROW_RIGHT:
      case KEY_IDS.ARROW_UP:
        return this.value_ + delta;

      case KEY_IDS.HOME:
        return this.min_;

      case KEY_IDS.END:
        return this.max_;

      case KEY_IDS.PAGE_UP:
        return this.value_ + delta * _constants.numbers.PAGE_FACTOR;

      case KEY_IDS.PAGE_DOWN:
        return this.value_ - delta * _constants.numbers.PAGE_FACTOR;

      default:
        return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }

    this.adapter_.addClass(_constants.cssClasses.FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(_constants.cssClasses.FOCUS);
  }
  /**
   * Sets the value of the slider
   * @param {number} value
   * @param {boolean} shouldFireInput
   * @param {boolean=} force
   */


  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const {
      min_: min,
      max_: max
    } = this;
    const valueSetToBoundary = value === min || value === max;

    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }

    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }

    this.value_ = value;
    this.adapter_.setAttribute(_constants.strings.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();

      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  }
  /**
   * Calculates the quantized value
   * @param {number} value
   * @return {number}
   */


  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const {
      max_: max,
      min_: min,
      value_: value
    } = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;

    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = (0, _index.getCorrectPropertyName)(window, 'transform');
    const transitionendEvtName = (0, _index.getCorrectEventName)(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };

      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }
  /**
   * Toggles the active state of the slider
   * @param {boolean} active
   */


  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(_constants.cssClasses.ACTIVE, this.active_);
  }
  /**
   * Toggles the inTransit state of the slider
   * @param {boolean} inTransit
   */


  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(_constants.cssClasses.IN_TRANSIT, this.inTransit_);
  }
  /**
   * Conditionally adds or removes a class based on shouldBePresent
   * @param {string} className
   * @param {boolean} shouldBePresent
   */


  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }

}

var _default = MDCSliderFoundation;
exports.default = _default;
},{"./constants":"../node_modules/@material/slider/constants.js","./adapter":"../node_modules/@material/slider/adapter.js","@material/animation/index":"../node_modules/@material/animation/index.js","@material/base/foundation":"../node_modules/@material/base/foundation.js"}],"../node_modules/@material/slider/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCSliderFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.MDCSlider = void 0;

var _component = _interopRequireDefault(require("@material/base/component"));

var _constants = require("./constants");

var _adapter = _interopRequireDefault(require("./adapter"));

var _foundation = _interopRequireDefault(require("./foundation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @extends MDCComponent<!MDCSliderFoundation>
 */
class MDCSlider extends _component.default {
  static attachTo(root) {
    return new MDCSlider(root);
  }

  constructor(...args) {
    super(...args);
    /** @type {?Element} */

    this.thumbContainer_;
    /** @type {?Element} */

    this.track_;
    /** @type {?Element} */

    this.pinValueMarker_;
    /** @type {?Element} */

    this.trackMarkerContainer_;
  }
  /** @return {number} */


  get value() {
    return this.foundation_.getValue();
  }
  /** @param {number} value */


  set value(value) {
    this.foundation_.setValue(value);
  }
  /** @return {number} */


  get min() {
    return this.foundation_.getMin();
  }
  /** @param {number} min */


  set min(min) {
    this.foundation_.setMin(min);
  }
  /** @return {number} */


  get max() {
    return this.foundation_.getMax();
  }
  /** @param {number} max */


  set max(max) {
    this.foundation_.setMax(max);
  }
  /** @return {number} */


  get step() {
    return this.foundation_.getStep();
  }
  /** @param {number} step */


  set step(step) {
    this.foundation_.setStep(step);
  }
  /** @return {boolean} */


  get disabled() {
    return this.foundation_.isDisabled();
  }
  /** @param {boolean} disabled */


  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(_constants.strings.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(_constants.strings.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(_constants.strings.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(_constants.strings.TRACK_MARKER_CONTAINER_SELECTOR);
  }
  /**
   * @return {!MDCSliderFoundation}
   */


  getDefaultFoundation() {
    return new _foundation.default(
    /** @type {!MDCSliderAdapter} */
    {
      hasClass: className => this.root_.classList.contains(className),
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      getAttribute: name => this.root_.getAttribute(name),
      setAttribute: (name, value) => this.root_.setAttribute(name, value),
      removeAttribute: name => this.root_.removeAttribute(name),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.emit(_constants.strings.INPUT_EVENT, this);
      },
      notifyChange: () => {
        this.emit(_constants.strings.CHANGE_EVENT, this);
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value);
      },
      setMarkerValue: value => {
        this.pinValueMarker_.innerText = value;
      },
      appendTrackMarkers: numMarkers => {
        const frag = document.createDocumentFragment();

        for (let i = 0; i < numMarkers; i++) {
          const marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }

        this.trackMarkerContainer_.appendChild(frag);
      },
      removeTrackMarkers: () => {
        while (this.trackMarkerContainer_.firstChild) {
          this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild);
        }
      },
      setLastTrackMarkersStyleProperty: (propertyName, value) => {
        // We remove and append new nodes, thus, the last track marker must be dynamically found.
        const lastTrackMarker = this.root_.querySelector(_constants.strings.LAST_TRACK_MARKER_SELECTOR);
        lastTrackMarker.style.setProperty(propertyName, value);
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl'
    });
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(_constants.strings.ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(_constants.strings.STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = this.root_.hasAttribute(_constants.strings.ARIA_DISABLED) && this.root_.getAttribute(_constants.strings.ARIA_DISABLED) !== 'false';
    this.foundation_.setupTrackMarker();
  }

  layout() {
    this.foundation_.layout();
  }
  /** @param {number=} amount */


  stepUp(amount = this.step || 1) {
    this.value += amount;
  }
  /** @param {number=} amount */


  stepDown(amount = this.step || 1) {
    this.value -= amount;
  }

}

exports.MDCSlider = MDCSlider;
},{"@material/base/component":"../node_modules/@material/base/component.js","./constants":"../node_modules/@material/slider/constants.js","./adapter":"../node_modules/@material/slider/adapter.js","./foundation":"../node_modules/@material/slider/foundation.js"}],"../node_modules/preact-material-components/Slider/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slider = require("@material/slider");

var _bindDecorator = require("bind-decorator");

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Slider =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Slider, _MaterialComponent);

  function Slider() {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Slider).apply(this, arguments));
    _this.componentName = 'slider';
    _this.mdcProps = ['discrete'];
    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Slider.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _slider.MDCSlider(this.control);
        this.MDComponent.listen('MDCSlider:change', this.onChange);
        this.MDComponent.listen('MDCSlider:input', this.onInput);
      }

      this.setValue(this.props.value); // set initial value programatically because of error if min is greater than initial max
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Slider.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.unlisten('MDCSlider:change', this.onChange);
        this.MDComponent.unlisten('MDCSlider:input', this.onInput);
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.MDComponent) {
        return this.MDComponent.value;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this$props = this.props,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$min = _this$props.min,
          min = _this$props$min === void 0 ? 0 : _this$props$min,
          _this$props$max = _this$props.max,
          max = _this$props$max === void 0 ? 100 : _this$props$max,
          step = _this$props.step;

      if (this.MDComponent) {
        if (min > this.MDComponent.max) {
          this.MDComponent.max = max;
          this.MDComponent.min = min;
        } else {
          this.MDComponent.min = min;
          this.MDComponent.max = max;
        }

        if (value) {
          this.MDComponent.value = value;
        }

        this.MDComponent.disabled = disabled;

        if (step) {
          this.MDComponent.step = step;
        }
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      if (this.props.onInput) {
        this.props.onInput(e);
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _allprops$tabindex = allprops.tabindex,
          tabIndex = _allprops$tabindex === void 0 ? 0 : _allprops$tabindex,
          props = __rest(allprops, ["tabindex"]);

      this.setValue(allprops);
      return (0, _preact.h)("div", Object.assign({
        tabIndex: tabIndex,
        role: "slider",
        "aria-label": "Select Value",
        ref: this.setControlRef
      }, props), (0, _preact.h)("div", {
        class: "mdc-slider__track-container"
      }, (0, _preact.h)("div", {
        class: "mdc-slider__track"
      })), (0, _preact.h)("div", {
        class: "mdc-slider__thumb-container"
      }, props.discrete && (0, _preact.h)("div", {
        class: "mdc-slider__pin"
      }, (0, _preact.h)("span", {
        class: "mdc-slider__pin-value-marker"
      })), (0, _preact.h)("svg", {
        class: "mdc-slider__thumb",
        width: "21",
        height: "21"
      }, (0, _preact.h)("circle", {
        cx: "10.5",
        cy: "10.5",
        r: "7.875"
      })), (0, _preact.h)("div", {
        class: "mdc-slider__focus-ring"
      })));
    }
  }]);
  return Slider;
}(_MaterialComponent2.default);

exports.Slider = Slider;

__decorate([_bindDecorator.bind], Slider.prototype, "onChange", null);

__decorate([_bindDecorator.bind], Slider.prototype, "onInput", null);

var _default = Slider;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","@material/slider":"../node_modules/@material/slider/index.js","bind-decorator":"../node_modules/bind-decorator/index.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/preact-material-components/LayoutGrid/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutGrid = exports.LayoutGridCell = exports.LayoutGridInner = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _preact = require("preact");

var _MaterialComponent4 = _interopRequireDefault(require("../Base/MaterialComponent"));

var LayoutGridInner =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(LayoutGridInner, _MaterialComponent);

  function LayoutGridInner() {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutGridInner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridInner).apply(this, arguments));
    _this.componentName = 'layout-grid__inner';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(LayoutGridInner, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", Object.assign({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGridInner;
}(_MaterialComponent4.default);

exports.LayoutGridInner = LayoutGridInner;

var LayoutGridCell =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(LayoutGridCell, _MaterialComponent2);

  function LayoutGridCell() {
    var _this2;

    (0, _classCallCheck2.default)(this, LayoutGridCell);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridCell).apply(this, arguments));
    _this2.componentName = 'layout-grid__cell';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(LayoutGridCell, [{
    key: "render",
    value: function render(props) {
      var element = (0, _get2.default)((0, _getPrototypeOf2.default)(LayoutGridCell.prototype), "render", this).call(this, props); // remove the extra attributes used for customising this element - keep the DOM clean

      Object.keys(LayoutGridCell.propsDict).forEach(function (key) {
        return (// @ts-ignore
          delete (element.props || element.attributes)[LayoutGridCell.propsDict[key]]
        );
      });
      return element;
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", Object.assign({}, props, {
        className: LayoutGridCell.createClassName(props),
        ref: this.setControlRef
      }), props.children);
    }
  }], [{
    key: "createClassName",
    value: function createClassName(props) {
      var baseClass = 'mdc-layout-grid__cell--';
      var classes = [];

      if (props[LayoutGridCell.propsDict.cols]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.cols]));
      }

      if (props[LayoutGridCell.propsDict.desktop]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.desktop], "-desktop"));
      }

      if (props[LayoutGridCell.propsDict.tablet]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.tablet], "-tablet"));
      }

      if (props[LayoutGridCell.propsDict.phone]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.phone], "-phone"));
      }

      if (props[LayoutGridCell.propsDict.order]) {
        classes.push("".concat(baseClass, "order-").concat(props[LayoutGridCell.propsDict.order]));
      }

      if (props[LayoutGridCell.propsDict.align]) {
        classes.push("".concat(baseClass, "align-").concat(props[LayoutGridCell.propsDict.align]));
      }

      return classes.join(' ');
    }
  }]);
  return LayoutGridCell;
}(_MaterialComponent4.default);

exports.LayoutGridCell = LayoutGridCell;
LayoutGridCell.propsDict = {
  align: 'align',
  cols: 'cols',
  desktop: 'desktopCols',
  order: 'order',
  phone: 'phoneCols',
  tablet: 'tabletCols'
};

var LayoutGrid =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(LayoutGrid, _MaterialComponent3);

  function LayoutGrid() {
    var _this3;

    (0, _classCallCheck2.default)(this, LayoutGrid);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGrid).apply(this, arguments));
    _this3.componentName = 'layout-grid';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(LayoutGrid, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", Object.assign({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGrid;
}(_MaterialComponent4.default);

exports.LayoutGrid = LayoutGrid;

var default_1 =
/*#__PURE__*/
function (_LayoutGrid) {
  (0, _inherits2.default)(default_1, _LayoutGrid);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(LayoutGrid);

exports.default = default_1;
default_1.Cell = LayoutGridCell;
default_1.Inner = LayoutGridInner;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/@material/base/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
Object.defineProperty(exports, "MDCComponent", {
  enumerable: true,
  get: function () {
    return _component.default;
  }
});

var _foundation = _interopRequireDefault(require("./foundation"));

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./foundation":"../node_modules/@material/base/foundation.js","./component":"../node_modules/@material/base/component.js"}],"../node_modules/@material/snackbar/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};
exports.cssClasses = cssClasses;
const strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
  SHOW_EVENT: 'MDCSnackbar:show',
  HIDE_EVENT: 'MDCSnackbar:hide'
};
exports.strings = strings;
const numbers = {
  MESSAGE_TIMEOUT: 2750
};
exports.numbers = numbers;
},{}],"../node_modules/@material/snackbar/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("@material/base/index");

var _constants = require("./constants");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class MDCSnackbarFoundation extends _index.MDCFoundation {
  static get cssClasses() {
    return _constants.cssClasses;
  }

  static get strings() {
    return _constants.strings;
  }

  static get defaultAdapter() {
    return {
      addClass: () =>
      /* className: string */
      {},
      removeClass: () =>
      /* className: string */
      {},
      setAriaHidden: () => {},
      unsetAriaHidden: () => {},
      setActionAriaHidden: () => {},
      unsetActionAriaHidden: () => {},
      setActionText: () =>
      /* actionText: string */
      {},
      setMessageText: () =>
      /* message: string */
      {},
      setFocus: () => {},
      isFocused: () =>
      /* boolean */
      false,
      visibilityIsHidden: () =>
      /* boolean */
      false,
      registerCapturedBlurHandler: () =>
      /* handler: EventListener */
      {},
      deregisterCapturedBlurHandler: () =>
      /* handler: EventListener */
      {},
      registerVisibilityChangeHandler: () =>
      /* handler: EventListener */
      {},
      deregisterVisibilityChangeHandler: () =>
      /* handler: EventListener */
      {},
      registerCapturedInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      deregisterCapturedInteractionHandler: () =>
      /* evtType: string, handler: EventListener */
      {},
      registerActionClickHandler: () =>
      /* handler: EventListener */
      {},
      deregisterActionClickHandler: () =>
      /* handler: EventListener */
      {},
      registerTransitionEndHandler: () =>
      /* handler: EventListener */
      {},
      deregisterTransitionEndHandler: () =>
      /* handler: EventListener */
      {},
      notifyShow: () => {},
      notifyHide: () => {}
    };
  }

  get active() {
    return this.active_;
  }

  constructor(adapter) {
    super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));
    this.active_ = false;
    this.actionWasClicked_ = false;
    this.dismissOnAction_ = true;
    this.firstFocus_ = true;
    this.pointerDownRecognized_ = false;
    this.snackbarHasFocus_ = false;
    this.snackbarData_ = null;
    this.queue_ = [];

    this.actionClickHandler_ = () => {
      this.actionWasClicked_ = true;
      this.invokeAction_();
    };

    this.visibilitychangeHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = true;

      if (!this.adapter_.visibilityIsHidden()) {
        setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || _constants.numbers.MESSAGE_TIMEOUT);
      }
    };

    this.interactionHandler_ = evt => {
      if (evt.type === 'focus' && !this.adapter_.isFocused()) {
        return;
      }

      if (evt.type === 'touchstart' || evt.type === 'mousedown') {
        this.pointerDownRecognized_ = true;
      }

      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type === 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };

    this.blurHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = false;
      this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || _constants.numbers.MESSAGE_TIMEOUT);
    };
  }

  init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  }

  destroy() {
    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
    this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(evtType => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  dismissesOnAction() {
    return this.dismissOnAction_;
  }

  setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  }

  show(data) {
    if (!data) {
      throw new Error('Please provide a data object with at least a message to display.');
    }

    if (!data.message) {
      throw new Error('Please provide a message to be displayed.');
    }

    if (data.actionHandler && !data.actionText) {
      throw new Error('Please provide action text with the handler.');
    }

    if (this.active) {
      this.queue_.push(data);
      return;
    }

    clearTimeout(this.timeoutId_);
    this.snackbarData_ = data;
    this.firstFocus_ = true;
    this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
    this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach(evtType => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
    const {
      ACTIVE,
      MULTILINE,
      ACTION_ON_BOTTOM
    } = _constants.cssClasses;
    this.adapter_.setMessageText(this.snackbarData_.message);

    if (this.snackbarData_.multiline) {
      this.adapter_.addClass(MULTILINE);

      if (this.snackbarData_.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (this.snackbarData_.actionHandler) {
      this.adapter_.setActionText(this.snackbarData_.actionText);
      this.actionHandler_ = this.snackbarData_.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();
    this.adapter_.notifyShow();
    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || _constants.numbers.MESSAGE_TIMEOUT);
  }

  handlePossibleTabKeyboardFocus_() {
    const hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;

    if (hijackFocus) {
      this.setFocusOnAction_();
    }

    this.firstFocus_ = false;
  }

  setFocusOnAction_() {
    this.adapter_.setFocus();
    this.snackbarHasFocus_ = true;
    this.firstFocus_ = false;
  }

  invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        this.cleanup_();
      }
    }
  }

  cleanup_() {
    const allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

    if (allowDismissal) {
      const {
        ACTIVE,
        MULTILINE,
        ACTION_ON_BOTTOM
      } = _constants.cssClasses;
      this.adapter_.removeClass(ACTIVE);

      const handler = () => {
        clearTimeout(this.timeoutId_);
        this.adapter_.deregisterTransitionEndHandler(handler);
        this.adapter_.removeClass(MULTILINE);
        this.adapter_.removeClass(ACTION_ON_BOTTOM);
        this.setActionHidden_(true);
        this.adapter_.setAriaHidden();
        this.active_ = false;
        this.snackbarHasFocus_ = false;
        this.adapter_.notifyHide();
        this.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }

  showNext_() {
    if (!this.queue_.length) {
      return;
    }

    this.show(this.queue_.shift());
  }

  setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  }

}

exports.default = MDCSnackbarFoundation;
},{"@material/base/index":"../node_modules/@material/base/index.js","./constants":"../node_modules/@material/snackbar/constants.js"}],"../node_modules/@material/snackbar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCSnackbarFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.MDCSnackbar = void 0;

var _index = require("@material/base/index");

var _foundation = _interopRequireDefault(require("./foundation"));

var _index2 = require("@material/animation/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class MDCSnackbar extends _index.MDCComponent {
  static attachTo(root) {
    return new MDCSnackbar(root);
  }

  show(data) {
    this.foundation_.show(data);
  }

  getDefaultFoundation() {
    const {
      TEXT_SELECTOR,
      ACTION_BUTTON_SELECTOR
    } = _foundation.default.strings;

    const getText = () => this.root_.querySelector(TEXT_SELECTOR);

    const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);
    /* eslint brace-style: "off" */


    return new _foundation.default({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
      unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
      setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
      unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
      setActionText: text => {
        getActionButton().textContent = text;
      },
      setMessageText: text => {
        getText().textContent = text;
      },
      setFocus: () => getActionButton().focus(),
      isFocused: () => document.activeElement === getActionButton(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: handler => getActionButton().addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: handler => getActionButton().removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: handler => document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: handler => document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) => document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) => document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: handler => getActionButton().addEventListener('click', handler),
      deregisterActionClickHandler: handler => getActionButton().removeEventListener('click', handler),
      registerTransitionEndHandler: handler => this.root_.addEventListener((0, _index2.getCorrectEventName)(window, 'transitionend'), handler),
      deregisterTransitionEndHandler: handler => this.root_.removeEventListener((0, _index2.getCorrectEventName)(window, 'transitionend'), handler),
      notifyShow: () => this.emit(_foundation.default.strings.SHOW_EVENT),
      notifyHide: () => this.emit(_foundation.default.strings.HIDE_EVENT)
    });
  }

  get dismissesOnAction() {
    return this.foundation_.dismissesOnAction();
  }

  set dismissesOnAction(dismissesOnAction) {
    this.foundation_.setDismissOnAction(dismissesOnAction);
  }

}

exports.MDCSnackbar = MDCSnackbar;
},{"@material/base/index":"../node_modules/@material/base/index.js","./foundation":"../node_modules/@material/snackbar/foundation.js","@material/animation/index":"../node_modules/@material/animation/index.js"}],"../node_modules/preact-material-components/Snackbar/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Snackbar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _snackbar = require("@material/snackbar/");

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

// TODO: Is that needed?
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) {
      return true;
    }
  }

  for (var _i in b) {
    // noinspection JSUnfilteredForInLoop
    if (a[_i] !== b[_i]) {
      return true;
    }
  }

  return false;
}

var Snackbar =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Snackbar, _MaterialComponent);

  function Snackbar() {
    var _this;

    (0, _classCallCheck2.default)(this, Snackbar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Snackbar).apply(this, arguments));
    _this.componentName = 'snackbar';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Snackbar.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _snackbar.MDCSnackbar(this.control);

        if (this.props.dismissesOnAction === undefined || this.props.dismissesOnAction === null) {
          this.MDComponent.dismissesOnAction = true;
        } else {
          this.MDComponent.dismissesOnAction = this.props.dismissesOnAction;
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Snackbar.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", Object.assign({
        "aria-live": "assertive",
        "aria-atomic": "true",
        "aria-hidden": "true",
        ref: this.setControlRef
      }, props), (0, _preact.h)("div", {
        className: "mdc-snackbar__text"
      }), (0, _preact.h)("div", {
        className: "mdc-snackbar__action-wrapper"
      }, (0, _preact.h)("button", {
        type: "button",
        className: "mdc-snackbar__action-button"
      })));
    }
  }]);
  return Snackbar;
}(_MaterialComponent2.default);

exports.Snackbar = Snackbar;
var _default = Snackbar;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@material/snackbar/":"../node_modules/@material/snackbar/index.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"components/PasswordGenerator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePassword = void 0;

var generatePassword = function generatePassword(options) {
  var randomSort = function randomSort() {
    return 0.5 - Math.random();
  };

  var chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    symbols: "!@#$%&*",
    numbers: "1234567890"
  };
  var charset = Object.keys(options.chars).filter(function (char) {
    return options.chars[char] && char !== "symbols";
  });
  var symbolCount = !options.formats.easyToSay && options.chars.symbols ? Math.round(0.2 * options.length) : 0;

  if (options.formats.easyToSay) {
    charset = charset.filter(function (char) {
      return char != "numbers";
    }).map(function (char) {
      return chars[char];
    });
  } else if (options.formats.easyToRead) {
    charset = charset.map(function (char) {
      return chars[char].replace(/[il10oILO]/g, '');
    });
  } else {
    charset = charset.map(function (char) {
      return chars[char];
    });
  }

  var allCharCount = options.length - symbolCount;
  var generatedSymbol = chars.symbols.split("").sort(randomSort).slice(0, symbolCount).join("");
  var generated = "";

  while (generated.length < allCharCount) {
    charset.forEach(function (char) {
      if (generated.length < allCharCount) {
        generated += char.charAt(Math.floor(Math.random() * char.length));
      }
    });
  }

  generated += generatedSymbol;
  generated = generated.split('').sort(randomSort).join('');
  return generated;
};

exports.generatePassword = generatePassword;
},{}],"../node_modules/@material/icon-button/adapter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButtonToggleEvent = exports.MDCIconButtonToggleAdapter = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Icon Button Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCIconButtonToggleAdapter {
  /** @param {string} className */
  addClass(className) {}
  /** @param {string} className */


  removeClass(className) {}
  /**
   * @param {string} className
   * @return {boolean}
   * */


  hasClass(className) {}
  /**
   * @param {string} attrName
   * @param {string} attrValue
   */


  setAttr(attrName, attrValue) {}
  /** @param {!IconButtonToggleEvent} evtData */


  notifyChange(evtData) {}

}
/**
 * @typedef {{
 *   isOn: boolean,
 * }}
 */


exports.MDCIconButtonToggleAdapter = MDCIconButtonToggleAdapter;
let IconButtonToggleEvent;
exports.IconButtonToggleEvent = IconButtonToggleEvent;
},{}],"../node_modules/@material/icon-button/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-icon-button',
  ICON_BUTTON_ON: 'mdc-icon-button--on'
};
/** @enum {string} */

exports.cssClasses = cssClasses;
const strings = {
  ARIA_PRESSED: 'aria-pressed',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconButtonToggle:change'
};
exports.strings = strings;
},{}],"../node_modules/@material/icon-button/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("@material/base/foundation"));

var _adapter = require("./adapter");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/**
 * @extends {MDCFoundation<!MDCIconButtonToggleAdapter>}
 */
class MDCIconButtonToggleFoundation extends _foundation.default {
  static get cssClasses() {
    return _constants.cssClasses;
  }

  static get strings() {
    return _constants.strings;
  }

  static get defaultAdapter() {
    return {
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      setAttr: () => {},
      notifyChange: () => {}
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconButtonToggleFoundation.defaultAdapter, adapter));
    /** @private {boolean} */

    this.disabled_ = false;
  }

  init() {
    this.adapter_.setAttr(_constants.strings.ARIA_PRESSED, `${this.isOn()}`);
  }

  handleClick() {
    this.toggle();
    this.adapter_.notifyChange(
    /** @type {!IconButtonToggleEvent} */
    {
      isOn: this.isOn()
    });
  }
  /** @return {boolean} */


  isOn() {
    return this.adapter_.hasClass(_constants.cssClasses.ICON_BUTTON_ON);
  }
  /** @param {boolean=} isOn */


  toggle(isOn = !this.isOn()) {
    if (isOn) {
      this.adapter_.addClass(_constants.cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter_.removeClass(_constants.cssClasses.ICON_BUTTON_ON);
    }

    this.adapter_.setAttr(_constants.strings.ARIA_PRESSED, `${isOn}`);
  }

}
/** @record */


class IconButtonToggleState {}

var _default = MDCIconButtonToggleFoundation;
exports.default = _default;
},{"@material/base/foundation":"../node_modules/@material/base/foundation.js","./adapter":"../node_modules/@material/icon-button/adapter.js","./constants":"../node_modules/@material/icon-button/constants.js"}],"../node_modules/@material/icon-button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCIconButtonToggleFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.MDCIconButtonToggle = void 0;

var _component = _interopRequireDefault(require("@material/base/component"));

var _foundation = _interopRequireDefault(require("./foundation"));

var _index = require("@material/ripple/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @extends {MDCComponent<!MDCIconButtonToggleFoundation>}
 */
class MDCIconButtonToggle extends _component.default {
  static attachTo(root) {
    return new MDCIconButtonToggle(root);
  }

  constructor(...args) {
    super(...args);
    /** @private {!MDCRipple} */

    this.ripple_ = this.initRipple_();
    /** @private {!Function} */

    this.handleClick_;
  }
  /**
   * @return {!MDCRipple}
   * @private
   */


  initRipple_() {
    const ripple = new _index.MDCRipple(this.root_);
    ripple.unbounded = true;
    return ripple;
  }

  destroy() {
    this.root_.removeEventListener('click', this.handleClick_);
    this.ripple_.destroy();
    super.destroy();
  }
  /** @return {!MDCIconButtonToggleFoundation} */


  getDefaultFoundation() {
    return new _foundation.default({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      hasClass: className => this.root_.classList.contains(className),
      setAttr: (attrName, attrValue) => this.root_.setAttribute(attrName, attrValue),
      notifyChange: evtData => this.emit(_foundation.default.strings.CHANGE_EVENT, evtData)
    });
  }

  initialSyncWithDOM() {
    this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
    this.root_.addEventListener('click', this.handleClick_);
  }
  /** @return {!MDCRipple} */


  get ripple() {
    return this.ripple_;
  }
  /** @return {boolean} */


  get on() {
    return this.foundation_.isOn();
  }
  /** @param {boolean} isOn */


  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

}

exports.MDCIconButtonToggle = MDCIconButtonToggle;
},{"@material/base/component":"../node_modules/@material/base/component.js","./foundation":"../node_modules/@material/icon-button/foundation.js","@material/ripple/index":"../node_modules/@material/ripple/index.js"}],"../node_modules/preact-material-components/IconButton/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButton = exports.Icon = void 0;

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _iconButton = require("@material/icon-button");

var _preact = require("preact");

var _MaterialComponent3 = _interopRequireDefault(require("../Base/MaterialComponent"));

var Icon =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Icon, _MaterialComponent);

  function Icon() {
    var _this;

    (0, _classCallCheck2.default)(this, Icon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    _this.componentName = 'icon-button__icon';
    _this.mdcProps = ['on'];
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "materialDom",
    value: function materialDom(props) {
      var IconElement = props.element || 'i';
      return (0, _preact.h)(IconElement, Object.assign({
        class: "material-icons"
      }, props), props.children);
    }
  }]);
  return Icon;
}(_MaterialComponent3.default);

exports.Icon = Icon;

var IconButton =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(IconButton, _MaterialComponent2);

  function IconButton() {
    var _this2;

    (0, _classCallCheck2.default)(this, IconButton);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IconButton).apply(this, arguments));
    _this2.componentName = 'icon-button';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(IconButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(IconButton.prototype), "componentDidMount", this).call(this);
      this.MDComponent = new _iconButton.MDCIconButtonToggle(this.control);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(IconButton.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("button", Object.assign({
        ref: this.setControlRef
      }, props), this.props.children);
    }
  }]);
  return IconButton;
}(_MaterialComponent3.default);

exports.IconButton = IconButton;

var default_1 =
/*#__PURE__*/
function (_IconButton) {
  (0, _inherits2.default)(default_1, _IconButton);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(IconButton);

exports.default = default_1;
default_1.Icon = Icon;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@material/icon-button":"../node_modules/@material/icon-button/index.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/@material/selection-control/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelectionControl = exports.MDCSelectionControlState = void 0;

var _index = require("@material/ripple/index");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
let MDCSelectionControlState;
/**
 * @record
 */

exports.MDCSelectionControlState = MDCSelectionControlState;

class MDCSelectionControl {
  /** @return {?MDCRipple} */
  get ripple() {}

}

exports.MDCSelectionControl = MDCSelectionControl;
},{"@material/ripple/index":"../node_modules/@material/ripple/index.js"}],"../node_modules/@material/radio/adapter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("@material/selection-control/index");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCRadioAdapter {
  /** @param {string} className */
  addClass(className) {}
  /** @param {string} className */


  removeClass(className) {}
  /** @return {!MDCSelectionControlState} */


  getNativeControl() {}

}

var _default = MDCRadioAdapter;
exports.default = _default;
},{"@material/selection-control/index":"../node_modules/@material/selection-control/index.js"}],"../node_modules/@material/radio/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = exports.strings = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
const strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};
/** @enum {string} */

exports.strings = strings;
const cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};
exports.cssClasses = cssClasses;
},{}],"../node_modules/@material/radio/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("@material/base/foundation"));

var _index = require("@material/selection-control/index");

var _adapter = _interopRequireDefault(require("./adapter"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
class MDCRadioFoundation extends _foundation.default {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return _constants.cssClasses;
  }
  /** @return enum {strings} */


  static get strings() {
    return _constants.strings;
  }
  /** @return {!MDCRadioAdapter} */


  static get defaultAdapter() {
    return (
      /** @type {!MDCRadioAdapter} */
      {
        addClass: () =>
        /* className: string */
        {},
        removeClass: () =>
        /* className: string */
        {},
        getNativeControl: () =>
        /* !MDCSelectionControlState */
        {}
      }
    );
  }
  /** @return {boolean} */


  isChecked() {
    return this.getNativeControl_().checked;
  }
  /** @param {boolean} checked */


  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }
  /** @return {boolean} */


  isDisabled() {
    return this.getNativeControl_().disabled;
  }
  /** @param {boolean} disabled */


  setDisabled(disabled) {
    const {
      DISABLED
    } = MDCRadioFoundation.cssClasses;
    this.getNativeControl_().disabled = disabled;

    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }
  /** @return {?string} */


  getValue() {
    return this.getNativeControl_().value;
  }
  /** @param {?string} value */


  setValue(value) {
    this.getNativeControl_().value = value;
  }
  /**
   * @return {!MDCSelectionControlState}
   * @private
   */


  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null
    };
  }

}

var _default = MDCRadioFoundation;
exports.default = _default;
},{"@material/base/foundation":"../node_modules/@material/base/foundation.js","@material/selection-control/index":"../node_modules/@material/selection-control/index.js","./adapter":"../node_modules/@material/radio/adapter.js","./constants":"../node_modules/@material/radio/constants.js"}],"../node_modules/@material/radio/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCRadioFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.MDCRadio = void 0;

var _component = _interopRequireDefault(require("@material/base/component"));

var _index = require("@material/selection-control/index");

var _foundation = _interopRequireDefault(require("./foundation"));

var _index2 = require("@material/ripple/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCRadio extends _component.default {
  static attachTo(root) {
    return new MDCRadio(root);
  }
  /** @return {boolean} */


  get checked() {
    return this.foundation_.isChecked();
  }
  /** @param {boolean} checked */


  set checked(checked) {
    this.foundation_.setChecked(checked);
  }
  /** @return {boolean} */


  get disabled() {
    return this.foundation_.isDisabled();
  }
  /** @param {boolean} disabled */


  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }
  /** @return {?string} */


  get value() {
    return this.foundation_.getValue();
  }
  /** @param {?string} value */


  set value(value) {
    this.foundation_.setValue(value);
  }
  /** @return {!MDCRipple} */


  get ripple() {
    return this.ripple_;
  }

  constructor(...args) {
    super(...args);
    /** @private {!MDCRipple} */

    this.ripple_ = this.initRipple_();
  }
  /**
   * @return {!MDCRipple}
   * @private
   */


  initRipple_() {
    const adapter = Object.assign(_index2.MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler)
    });
    const foundation = new _index2.MDCRippleFoundation(adapter);
    return new _index2.MDCRipple(this.root_, foundation);
  }
  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  get nativeControl_() {
    const {
      NATIVE_CONTROL_SELECTOR
    } = _foundation.default.strings;
    const el =
    /** @type {?MDCSelectionControlState} */
    this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    return el;
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }
  /** @return {!MDCRadioFoundation} */


  getDefaultFoundation() {
    return new _foundation.default({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      getNativeControl: () => this.root_.querySelector(_foundation.default.strings.NATIVE_CONTROL_SELECTOR)
    });
  }

}

exports.MDCRadio = MDCRadio;
},{"@material/base/component":"../node_modules/@material/base/component.js","@material/selection-control/index":"../node_modules/@material/selection-control/index.js","./foundation":"../node_modules/@material/radio/foundation.js","@material/ripple/index":"../node_modules/@material/ripple/index.js"}],"../node_modules/preact-material-components/Radio/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Radio = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _radio = require("@material/radio/");

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Radio =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Radio, _MaterialComponent);

  function Radio() {
    var _this;

    (0, _classCallCheck2.default)(this, Radio);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Radio).apply(this, arguments));
    _this.componentName = 'radio';
    _this.mdcProps = ['disabled'];
    _this.mdcNotifyProps = ['checked'];
    return _this;
  }

  (0, _createClass2.default)(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Radio.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _radio.MDCRadio(this.control);
      }

      this.afterComponentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Radio.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          props = __rest(allprops, ["className"]);

      return (0, _preact.h)("div", {
        className: className,
        ref: this.setControlRef
      }, (0, _preact.h)("input", Object.assign({
        className: "mdc-radio__native-control",
        type: "radio"
      }, props)), (0, _preact.h)("div", {
        className: "mdc-radio__background"
      }, (0, _preact.h)("div", {
        className: "mdc-radio__outer-circle"
      }), (0, _preact.h)("div", {
        className: "mdc-radio__inner-circle"
      })));
    }
  }]);
  return Radio;
}(_MaterialComponent2.default);

exports.Radio = Radio;
var _default = Radio;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@material/radio/":"../node_modules/@material/radio/index.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/preact-material-components/FormField/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Formfield = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var Formfield =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Formfield, _MaterialComponent);

  function Formfield() {
    var _this;

    (0, _classCallCheck2.default)(this, Formfield);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Formfield).apply(this, arguments));
    _this.componentName = 'form-field';
    _this.mdcProps = ['align-end'];
    return _this;
  }

  (0, _createClass2.default)(Formfield, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", Object.assign({}, props), this.props.children);
    }
  }]);
  return Formfield;
}(_MaterialComponent2.default);

exports.Formfield = Formfield;
var _default = Formfield;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/@material/checkbox/adapter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("@material/selection-control/index");

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCCheckboxAdapter {
  /** @param {string} className */
  addClass(className) {}
  /** @param {string} className */


  removeClass(className) {}
  /**
   * Sets an attribute with a given value on the input element.
   * @param {string} attr
   * @param {string} value
   */


  setNativeControlAttr(attr, value) {}
  /**
   * Removes an attribute from the input element.
   * @param {string} attr
   */


  removeNativeControlAttr(attr) {}
  /** @return {!MDCSelectionControlState} */


  getNativeControl() {}

  forceLayout() {}
  /** @return {boolean} */


  isAttachedToDOM() {}

}

var _default = MDCCheckboxAdapter;
exports.default = _default;
},{"@material/selection-control/index":"../node_modules/@material/selection-control/index.js"}],"../node_modules/@material/checkbox/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @const {string} */
const ROOT = 'mdc-checkbox';
/** @enum {string} */

const cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};
/** @enum {string} */

exports.cssClasses = cssClasses;
const strings = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};
/** @enum {number} */

exports.strings = strings;
const numbers = {
  ANIM_END_LATCH_MS: 250
};
exports.numbers = numbers;
},{}],"../node_modules/@material/checkbox/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _foundation = _interopRequireDefault(require("@material/base/foundation"));

var _index = require("@material/selection-control/index");

var _adapter = _interopRequireDefault(require("./adapter"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/** @const {!Array<string>} */
const CB_PROTO_PROPS = ['checked', 'indeterminate'];
/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

class MDCCheckboxFoundation extends _foundation.default {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return _constants.cssClasses;
  }
  /** @return enum {strings} */


  static get strings() {
    return _constants.strings;
  }
  /** @return enum {numbers} */


  static get numbers() {
    return _constants.numbers;
  }
  /** @return {!MDCCheckboxAdapter} */


  static get defaultAdapter() {
    return (
      /** @type {!MDCCheckboxAdapter} */
      {
        addClass: () =>
        /* className: string */
        {},
        removeClass: () =>
        /* className: string */
        {},
        setNativeControlAttr: () =>
        /* attr: string, value: string */
        {},
        removeNativeControlAttr: () =>
        /* attr: string */
        {},
        getNativeControl: () =>
        /* !MDCSelectionControlState */
        {},
        forceLayout: () => {},
        isAttachedToDOM: () =>
        /* boolean */
        {}
      }
    );
  }

  constructor(adapter) {
    super(Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter));
    /** @private {string} */

    this.currentCheckState_ = _constants.strings.TRANSITION_STATE_INIT;
    /** @private {string} */

    this.currentAnimationClass_ = '';
    /** @private {number} */

    this.animEndLatchTimer_ = 0;
    /** @private {boolean} */

    this.enableAnimationEndHandler_ = false;
  }
  /** @override */


  init() {
    this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
    this.updateAriaChecked_();
    this.adapter_.addClass(_constants.cssClasses.UPGRADED);
    this.installPropertyChangeHooks_();
  }
  /** @override */


  destroy() {
    this.uninstallPropertyChangeHooks_();
  }
  /** @return {boolean} */


  isChecked() {
    return this.getNativeControl_().checked;
  }
  /** @param {boolean} checked */


  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }
  /** @return {boolean} */


  isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  }
  /** @param {boolean} indeterminate */


  setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  }
  /** @return {boolean} */


  isDisabled() {
    return this.getNativeControl_().disabled;
  }
  /** @param {boolean} disabled */


  setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;

    if (disabled) {
      this.adapter_.addClass(_constants.cssClasses.DISABLED);
    } else {
      this.adapter_.removeClass(_constants.cssClasses.DISABLED);
    }
  }
  /** @return {?string} */


  getValue() {
    return this.getNativeControl_().value;
  }
  /** @param {?string} value */


  setValue(value) {
    this.getNativeControl_().value = value;
  }
  /**
   * Handles the animationend event for the checkbox
   */


  handleAnimationEnd() {
    if (!this.enableAnimationEndHandler_) return;
    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(() => {
      this.adapter_.removeClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = false;
    }, _constants.numbers.ANIM_END_LATCH_MS);
  }
  /**
   * Handles the change event for the checkbox
   */


  handleChange() {
    this.transitionCheckState_();
  }
  /** @private */


  installPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(controlState => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739

      if (validDescriptor(desc)) {
        const nativeCbDesc =
        /** @type {!ObjectPropertyDescriptor} */
        {
          get: desc.get,
          set: state => {
            desc.set.call(nativeCb, state);
            this.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable
        };
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  }
  /** @private */


  uninstallPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(controlState => {
      const desc =
      /** @type {!ObjectPropertyDescriptor} */
      Object.getOwnPropertyDescriptor(cbProto, controlState);

      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  }
  /** @private */


  transitionCheckState_() {
    const nativeCb = this.adapter_.getNativeControl();

    if (!nativeCb) {
      return;
    }

    const oldState = this.currentCheckState_;
    const newState = this.determineCheckState_(nativeCb);

    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_(); // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.

    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.

    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  }
  /**
   * @param {!MDCSelectionControlState} nativeCb
   * @return {string}
   * @private
   */


  determineCheckState_(nativeCb) {
    const {
      TRANSITION_STATE_INDETERMINATE,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED
    } = _constants.strings;

    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }

    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  }
  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */


  getTransitionAnimationClass_(oldState, newState) {
    const {
      TRANSITION_STATE_INIT,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED
    } = _constants.strings;
    const {
      ANIM_UNCHECKED_CHECKED,
      ANIM_UNCHECKED_INDETERMINATE,
      ANIM_CHECKED_UNCHECKED,
      ANIM_CHECKED_INDETERMINATE,
      ANIM_INDETERMINATE_CHECKED,
      ANIM_INDETERMINATE_UNCHECKED
    } = MDCCheckboxFoundation.cssClasses;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }

      // fallthrough

      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      // TRANSITION_STATE_INDETERMINATE

      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  }

  updateAriaChecked_() {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR, _constants.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR);
    }
  }
  /**
   * @return {!MDCSelectionControlState}
   * @private
   */


  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null
    };
  }

}
/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */


function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

var _default = MDCCheckboxFoundation;
exports.default = _default;
},{"@material/base/foundation":"../node_modules/@material/base/foundation.js","@material/selection-control/index":"../node_modules/@material/selection-control/index.js","./adapter":"../node_modules/@material/checkbox/adapter.js","./constants":"../node_modules/@material/checkbox/constants.js"}],"../node_modules/@material/checkbox/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MDCCheckboxFoundation", {
  enumerable: true,
  get: function () {
    return _foundation.default;
  }
});
exports.MDCCheckbox = void 0;

var _index = require("@material/animation/index");

var _component = _interopRequireDefault(require("@material/base/component"));

var _index2 = require("@material/selection-control/index");

var _foundation = _interopRequireDefault(require("./foundation"));

var _index3 = require("@material/ripple/index");

var _util = require("@material/ripple/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
class MDCCheckbox extends _component.default {
  static attachTo(root) {
    return new MDCCheckbox(root);
  }
  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  get nativeCb_() {
    const {
      NATIVE_CONTROL_SELECTOR
    } = _foundation.default.strings;
    const cbEl =
    /** @type {?MDCSelectionControlState} */
    this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    return cbEl;
  }

  constructor(...args) {
    super(...args);
    /** @private {!MDCRipple} */

    this.ripple_ = this.initRipple_();
    /** @private {!Function} */

    this.handleChange_;
    /** @private {!Function} */

    this.handleAnimationEnd_;
  }

  initialSyncWithDOM() {
    this.handleChange_ = () => this.foundation_.handleChange();

    this.handleAnimationEnd_ = () => this.foundation_.handleAnimationEnd();

    this.nativeCb_.addEventListener('change', this.handleChange_);
    this.listen((0, _index.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd_);
  }
  /**
   * @return {!MDCRipple}
   * @private
   */


  initRipple_() {
    const MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
    const adapter = Object.assign(_index3.MDCRipple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) => this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeCb_.removeEventListener(type, handler)
    });
    const foundation = new _index3.MDCRippleFoundation(adapter);
    return new _index3.MDCRipple(this.root_, foundation);
  }
  /** @return {!MDCCheckboxFoundation} */


  getDefaultFoundation() {
    return new _foundation.default({
      addClass: className => this.root_.classList.add(className),
      removeClass: className => this.root_.classList.remove(className),
      setNativeControlAttr: (attr, value) => this.nativeCb_.setAttribute(attr, value),
      removeNativeControlAttr: attr => this.nativeCb_.removeAttribute(attr),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_.parentNode)
    });
  }
  /** @return {!MDCRipple} */


  get ripple() {
    return this.ripple_;
  }
  /** @return {boolean} */


  get checked() {
    return this.foundation_.isChecked();
  }
  /** @param {boolean} checked */


  set checked(checked) {
    this.foundation_.setChecked(checked);
  }
  /** @return {boolean} */


  get indeterminate() {
    return this.foundation_.isIndeterminate();
  }
  /** @param {boolean} indeterminate */


  set indeterminate(indeterminate) {
    this.foundation_.setIndeterminate(indeterminate);
  }
  /** @return {boolean} */


  get disabled() {
    return this.foundation_.isDisabled();
  }
  /** @param {boolean} disabled */


  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }
  /** @return {?string} */


  get value() {
    return this.foundation_.getValue();
  }
  /** @param {?string} value */


  set value(value) {
    this.foundation_.setValue(value);
  }

  destroy() {
    this.ripple_.destroy();
    this.nativeCb_.removeEventListener('change', this.handleChange_);
    this.unlisten((0, _index.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd_);
    super.destroy();
  }

}

exports.MDCCheckbox = MDCCheckbox;
},{"@material/animation/index":"../node_modules/@material/animation/index.js","@material/base/component":"../node_modules/@material/base/component.js","@material/selection-control/index":"../node_modules/@material/selection-control/index.js","./foundation":"../node_modules/@material/checkbox/foundation.js","@material/ripple/index":"../node_modules/@material/ripple/index.js","@material/ripple/util":"../node_modules/@material/ripple/util.js"}],"../node_modules/preact-material-components/Checkbox/index.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _checkbox = require("@material/checkbox/");

var _preact = require("preact");

var _MaterialComponent2 = _interopRequireDefault(require("../Base/MaterialComponent"));

var Checkbox =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Checkbox, _MaterialComponent);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2.default)(this, Checkbox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
    _this.componentName = 'checkbox';
    _this.mdcProps = ['disabled'];
    _this.mdcNotifyProps = ['checked', 'indeterminate', 'disabled'];
    return _this;
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Checkbox.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _checkbox.MDCCheckbox(this.control);
      }

      this.afterComponentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Checkbox.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      return (0, _preact.h)("div", {
        ref: this.setControlRef
      }, (0, _preact.h)("input", Object.assign({
        type: "checkbox",
        className: "mdc-checkbox__native-control"
      }, allprops)), (0, _preact.h)("div", {
        className: "mdc-checkbox__background"
      }, (0, _preact.h)("svg", {
        version: "1.1",
        className: "mdc-checkbox__checkmark",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, (0, _preact.h)("path", {
        className: "mdc-checkbox__checkmark-path",
        fill: "none",
        stroke: "white",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })), (0, _preact.h)("div", {
        className: "mdc-checkbox__mixedmark"
      })));
    }
  }]);
  return Checkbox;
}(_MaterialComponent2.default);

exports.Checkbox = Checkbox;
var _default = Checkbox;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/get":"../node_modules/@babel/runtime/helpers/get.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@material/checkbox/":"../node_modules/@material/checkbox/index.js","preact":"../node_modules/preact/dist/preact.module.js","../Base/MaterialComponent":"../node_modules/preact-material-components/Base/MaterialComponent.js"}],"../node_modules/preact-material-components/FormField/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/Radio/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact-material-components/Checkbox/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/components.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordChar = exports.PasswordFormat = exports.ButtonIcon = void 0;

var _preact = require("preact");

var _IconButton = _interopRequireDefault(require("preact-material-components/IconButton"));

var _Radio = _interopRequireDefault(require("preact-material-components/Radio"));

var _FormField = _interopRequireDefault(require("preact-material-components/FormField"));

var _Checkbox = _interopRequireDefault(require("preact-material-components/Checkbox"));

require("preact-material-components/FormField/style.css");

require("preact-material-components/Radio/style.css");

require("preact-material-components/Checkbox/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonIcon = function ButtonIcon(props) {
  return (0, _preact.h)(_IconButton.default, {
    onClick: props.onClick
  }, (0, _preact.h)(_IconButton.default.Icon, {
    on: true
  }, props.icon), (0, _preact.h)(_IconButton.default.Icon, null, props.icon));
};

exports.ButtonIcon = ButtonIcon;

var PasswordFormat = function PasswordFormat(_ref) {
  var formats = _ref.formats,
      onChange = _ref.onChange;

  var onChangeValue = function onChangeValue() {
    onChange(this.selected);
  };

  return formats.map(function (option, i) {
    return (0, _preact.h)(_FormField.default, null, (0, _preact.h)(_Radio.default, {
      id: "radio-".concat(i),
      name: "Controlled Options",
      checked: option.checked,
      onChange: onChangeValue.bind({
        selected: option.id
      })
    }), (0, _preact.h)("label", {
      for: "radio-".concat(i)
    }, option.name));
  });
};

exports.PasswordFormat = PasswordFormat;

var PasswordChar = function PasswordChar(_ref2) {
  var chars = _ref2.chars,
      onChange = _ref2.onChange;

  var onChangeValue = function onChangeValue() {
    console.log(this.checked);
    onChange(this.selected, this.checked);
  };

  return chars.map(function (option, i) {
    return (0, _preact.h)(_FormField.default, null, (0, _preact.h)(_Checkbox.default, {
      id: "checkbox-".concat(i),
      name: "Controlled Checkbox",
      checked: option.checked,
      onChange: onChangeValue.bind({
        selected: option.id,
        checked: !option.checked
      })
    }), (0, _preact.h)("label", {
      for: "checkbox-".concat(i)
    }, option.name));
  });
};

exports.PasswordChar = PasswordChar;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-material-components/IconButton":"../node_modules/preact-material-components/IconButton/index.js","preact-material-components/Radio":"../node_modules/preact-material-components/Radio/index.js","preact-material-components/FormField":"../node_modules/preact-material-components/FormField/index.js","preact-material-components/Checkbox":"../node_modules/preact-material-components/Checkbox/index.js","preact-material-components/FormField/style.css":"../node_modules/preact-material-components/FormField/style.css","preact-material-components/Radio/style.css":"../node_modules/preact-material-components/Radio/style.css","preact-material-components/Checkbox/style.css":"../node_modules/preact-material-components/Checkbox/style.css"}],"components/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultState = void 0;
var defaultState = {
  password: '',
  length: 8,
  formats: {
    easyToSay: false,
    easyToRead: false,
    allCharacters: true
  },
  formatRadio: [{
    name: "Easy to say",
    checked: false,
    id: "easyToSay"
  }, {
    name: "Easy to read",
    checked: false,
    id: "easyToRead"
  }, {
    name: "All characters",
    checked: true,
    id: "allCharacters"
  }],
  chars: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  },
  charCheckbox: [{
    name: "Uppercase",
    checked: true,
    id: "uppercase"
  }, {
    name: "Lowercase",
    checked: true,
    id: "lowercase"
  }, {
    name: "Numbers",
    checked: true,
    id: "numbers"
  }, {
    name: "Symbols",
    checked: true,
    id: "symbols"
  }]
};
exports.defaultState = defaultState;
},{}],"../node_modules/preact-material-components/Slider/style.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/PasswordForm.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _Elevation = _interopRequireDefault(require("preact-material-components/Elevation"));

var _PasswordInput = _interopRequireDefault(require("./PasswordInput"));

var _Typography = _interopRequireDefault(require("preact-material-components/Typography"));

var _Slider = _interopRequireDefault(require("preact-material-components/Slider"));

var _LayoutGrid = _interopRequireDefault(require("preact-material-components/LayoutGrid"));

var _Snackbar = _interopRequireDefault(require("preact-material-components/Snackbar"));

var _PasswordGenerator = require("./PasswordGenerator");

var _components = require("./components");

var _config = require("./config");

require("preact-material-components/Slider/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PasswordForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordForm, _Component);

  function PasswordForm() {
    var _this;

    _classCallCheck(this, PasswordForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordForm).call(this));
    _this.passwordController = _this.passwordController.bind(_assertThisInitialized(_this));
    _this.state = _config.defaultState;
    return _this;
  }

  _createClass(PasswordForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.passwordController(this.state.options);
    }
  }, {
    key: "passwordController",
    value: function passwordController() {
      var password = (0, _PasswordGenerator.generatePassword)(this.state);
      console.log(password);
      this.setState({
        password: password
      });
    }
  }, {
    key: "copyPassword",
    value: function copyPassword() {
      if (this.state.password.length > 0) {
        var textArea = document.createElement('textarea');
        textArea.value = this.state.password;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        this.bar.MDComponent.show({
          message: 'Kata sandi berhasil disalin'
        });
      }
    }
  }, {
    key: "onSliderChanges",
    value: function onSliderChanges(e) {
      var value = e.detail.value;
      if (Number.isNaN(Number(value))) return false;
      if (value === this.state.length) return false;
      this.setState({
        length: Number(value)
      }, this.passwordController);
    }
  }, {
    key: "onFormatChanges",
    value: function onFormatChanges(format) {
      var formats = this.state.formats;
      Object.keys(formats).forEach(function (id) {
        formats[id] = format === id ? true : false;
      });
      var formatRadio = this.state.formatRadio.map(function (radio) {
        return _objectSpread({}, radio, {
          checked: radio.id === format ? true : false
        });
      });
      this.setState({
        formats: formats,
        formatRadio: formatRadio
      }, this.passwordController);
    }
  }, {
    key: "onCharChanges",
    value: function onCharChanges(char, checked) {
      var chars = this.state.chars;
      Object.keys(chars).forEach(function (id) {
        chars[id] = id === char ? checked : chars[id];
      });
      var charCheckbox = this.state.charCheckbox.map(function (checkbox) {
        return _objectSpread({}, checkbox, {
          checked: checkbox.id === char ? checked : checkbox.checked
        });
      });
      this.setState({
        chars: chars,
        charCheckbox: charCheckbox
      }, this.passwordController);
    }
  }, {
    key: "onRegenerate",
    value: function onRegenerate() {
      this.passwordController();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _preact.h)("div", null, (0, _preact.h)(_Elevation.default, {
        z: 1,
        className: "padding-8"
      }, (0, _preact.h)(_PasswordInput.default, {
        password: this.state.password
      }), (0, _preact.h)(_components.ButtonIcon, {
        icon: "content_copy",
        onClick: this.copyPassword.bind(this)
      }), (0, _preact.h)(_components.ButtonIcon, {
        icon: "refresh",
        onClick: this.onRegenerate.bind(this)
      })), (0, _preact.h)(_Elevation.default, {
        z: 1,
        className: "padding-8"
      }, (0, _preact.h)(_Typography.default, {
        headline6: true
      }, "Customize your password"), (0, _preact.h)("div", null, (0, _preact.h)(_LayoutGrid.default, {
        id: "control"
      }, (0, _preact.h)(_LayoutGrid.default.Inner, null, (0, _preact.h)(_LayoutGrid.default.Cell, {
        cols: "6"
      }, (0, _preact.h)("span", null, "Password Length ", this.state.length), (0, _preact.h)(_Slider.default, {
        discrete: true,
        onInput: this.onSliderChanges.bind(this),
        step: 1,
        value: this.state.length,
        max: 50,
        min: 3
      })), (0, _preact.h)(_LayoutGrid.default.Cell, {
        className: "password-format",
        cols: "3"
      }, (0, _preact.h)(_components.PasswordFormat, {
        formats: this.state.formatRadio,
        onChange: this.onFormatChanges.bind(this)
      })), (0, _preact.h)(_LayoutGrid.default.Cell, {
        className: "password-char",
        cols: "3"
      }, (0, _preact.h)(_components.PasswordChar, {
        chars: this.state.charCheckbox,
        onChange: this.onCharChanges.bind(this)
      })))))), (0, _preact.h)(_Snackbar.default, {
        ref: function ref(bar) {
          _this2.bar = bar;
        }
      }));
    }
  }]);

  return PasswordForm;
}(_preact.Component);

exports.default = PasswordForm;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-material-components/Elevation":"../node_modules/preact-material-components/Elevation/index.js","./PasswordInput":"components/PasswordInput.jsx","preact-material-components/Typography":"../node_modules/preact-material-components/Typography/index.js","preact-material-components/Slider":"../node_modules/preact-material-components/Slider/index.js","preact-material-components/LayoutGrid":"../node_modules/preact-material-components/LayoutGrid/index.js","preact-material-components/Snackbar":"../node_modules/preact-material-components/Snackbar/index.js","./PasswordGenerator":"components/PasswordGenerator.js","./components":"components/components.jsx","./config":"components/config.js","preact-material-components/Slider/style.css":"../node_modules/preact-material-components/Slider/style.css"}],"main.jsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

require("preact-material-components/Elevation/style.css");

require("preact-material-components/IconButton/style.css");

require("preact-material-components/Icon/style.css");

require("preact-material-components/Typography/style.css");

require("preact-material-components/LayoutGrid/style.css");

require("preact-material-components/Snackbar/style.css");

require("./style.scss");

var _PasswordForm = _interopRequireDefault(require("./components/PasswordForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Custom
(0, _preact.render)((0, _preact.h)(_PasswordForm.default, null), document.getElementById('form'));
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-material-components/Elevation/style.css":"../node_modules/preact-material-components/Elevation/style.css","preact-material-components/IconButton/style.css":"../node_modules/preact-material-components/IconButton/style.css","preact-material-components/Icon/style.css":"../node_modules/preact-material-components/Icon/style.css","preact-material-components/Typography/style.css":"../node_modules/preact-material-components/Typography/style.css","preact-material-components/LayoutGrid/style.css":"../node_modules/preact-material-components/LayoutGrid/style.css","preact-material-components/Snackbar/style.css":"../node_modules/preact-material-components/Snackbar/style.css","./style.scss":"style.scss","./components/PasswordForm":"components/PasswordForm.jsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44351" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.jsx"], null)
//# sourceMappingURL=/main.65f60760.js.map