var _hsp = (window["_hsp"] = window["_hsp"] || []);
_hsp.push(["setBannerSettings", {}]);
_hsp.push(["setCustomizationSettings", {}]);
_hsp.push(["addCookieDomain", ".hsforms.com"]);
_hsp.push(["addCookieDomain", ".hs-sites.com"]);
_hsp.push(["addCookieDomain", ".hubspot.com"]);
_hsp.push(["addCookieDomain", ".hubspotpagebuilder.com"]);
_hsp.push(["addCookieDomain", ".eskimoz.co.uk"]);
_hsp.push(["addCookieDomain", ".eskimoz.fr"]);
_hsp.push(["addCookieDomain", ".eskimoz.es"]);
_hsp.push(["setApiBaseUrl", "https://js.hs-banner.com/v2"]);
/**
 * HubSpot Cookie Banner Code Copyright 2024 HubSpot, Inc.  http://www.hubspot.com
 */
!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    e[o].call(i.exports, i, i.exports, n);
    i.l = !0;
    return i.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
  };
  n.r = function (e) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(e, "__esModule", { value: !0 });
  };
  n.t = function (e, t) {
    1 & t && (e = n(e));
    if (8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    n.r(o);
    Object.defineProperty(o, "default", { enumerable: !0, value: e });
    if (2 & t && "string" != typeof e)
      for (var i in e)
        n.d(
          o,
          i,
          function (t) {
            return e[t];
          }.bind(null, i)
        );
    return o;
  };
  n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "//static.hsappstatic.net/cookie-banner-js/static-1.2212/";
  n((n.s = 4));
})([
  function (e, t, n) {
    var o;
    function s() {
      var e, t;
      t = arguments[0] || {};
      this.config = {};
      this.config.elements = t.elements ? t.elements : [];
      this.config.attributes = t.attributes ? t.attributes : {};
      this.config.attributes[s.ALL] = this.config.attributes[s.ALL]
        ? this.config.attributes[s.ALL]
        : [];
      this.config.allow_comments = !!t.allow_comments && t.allow_comments;
      this.allowed_elements = {};
      this.config.protocols = t.protocols ? t.protocols : {};
      this.config.add_attributes = t.add_attributes ? t.add_attributes : {};
      this.dom = t.dom ? t.dom : document;
      for (e = 0; e < this.config.elements.length; e++)
        this.allowed_elements[this.config.elements[e]] = !0;
      this.config.remove_element_contents = {};
      this.config.remove_all_contents = !1;
      if (t.remove_contents)
        if (t.remove_contents instanceof Array)
          for (e = 0; e < t.remove_contents.length; e++)
            this.config.remove_element_contents[t.remove_contents[e]] = !0;
        else this.config.remove_all_contents = !0;
      this.transformers = t.transformers ? t.transformers : [];
    }
    s.REGEX_PROTOCOL = /^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i;
    s.RELATIVE = "__RELATIVE__";
    s.ALL = "__ALL__";
    s.prototype.clean_node = function (e) {
      var t = this.dom.createDocumentFragment();
      this.current_element = t;
      this.whitelist_nodes = [];
      function n(e, t) {
        var n;
        for (n = 0; n < t.length; n++) if (t[n] == e) return n;
        return -1;
      }
      function o() {
        var e,
          t,
          n = [],
          o = {};
        for (e = 0; e < arguments.length; e++)
          if (arguments[e] && arguments[e].length)
            for (t = 0; t < arguments[e].length; t++)
              if (!o[arguments[e][t]]) {
                o[arguments[e][t]] = !0;
                n.push(arguments[e][t]);
              }
        return n;
      }
      function r(e) {
        var t;
        switch (e.nodeType) {
          case 1:
            a.call(this, e);
            break;
          case 3:
          case 5:
            t = e.cloneNode(!1);
            this.current_element.appendChild(t);
            break;
          case 8:
            if (this.config.allow_comments) {
              t = e.cloneNode(!1);
              this.current_element.appendChild(t);
            }
            break;
          default:
            console &&
              console.log &&
              console.log("unknown node type", e.nodeType);
        }
      }
      function a(e) {
        var t,
          i,
          a,
          l,
          h,
          d,
          u,
          g,
          _,
          f,
          m = c.call(this, e);
        a = (e = m.node).nodeName.toLowerCase();
        i = this.current_element;
        if (this.allowed_elements[a] || m.whitelist) {
          this.current_element = this.dom.createElement(e.nodeName);
          i.appendChild(this.current_element);
          var p = this.config.attributes;
          l = o(p[a], p[s.ALL], m.attr_whitelist);
          for (t = 0; t < l.length; t++) {
            d = l[t];
            if ((h = e.attributes[d])) {
              f = !0;
              if (this.config.protocols[a] && this.config.protocols[a][d]) {
                g = this.config.protocols[a][d];
                f = (_ = h.value.toLowerCase().match(s.REGEX_PROTOCOL))
                  ? -1 != n(_[1], g)
                  : -1 != n(s.RELATIVE, g);
              }
              if (f) {
                (u = document.createAttribute(d)).value = h.value;
                this.current_element.setAttributeNode(u);
              }
            }
          }
          if (this.config.add_attributes[a])
            for (d in this.config.add_attributes[a]) {
              (u = document.createAttribute(d)).value =
                this.config.add_attributes[a][d];
              this.current_element.setAttributeNode(u);
            }
        } else if (-1 != n(e, this.whitelist_nodes)) {
          this.current_element = e.cloneNode(!0);
          for (; this.current_element.childNodes.length > 0; )
            this.current_element.removeChild(this.current_element.firstChild);
          i.appendChild(this.current_element);
        }
        if (
          !this.config.remove_all_contents &&
          !this.config.remove_element_contents[a]
        )
          for (t = 0; t < e.childNodes.length; t++)
            r.call(this, e.childNodes[t]);
        this.current_element.normalize && this.current_element.normalize();
        this.current_element = i;
      }
      function c(e) {
        var t,
          i,
          s,
          r = { attr_whitelist: [], node: e, whitelist: !1 };
        for (t = 0; t < this.transformers.length; t++)
          if (
            null !=
            (s = this.transformers[t]({
              allowed_elements: this.allowed_elements,
              config: this.config,
              node: e,
              node_name: e.nodeName.toLowerCase(),
              whitelist_nodes: this.whitelist_nodes,
              dom: this.dom,
            }))
          ) {
            if ("object" != typeof s)
              throw new Error("transformer output must be an object or null");
            if (s.whitelist_nodes && s.whitelist_nodes instanceof Array)
              for (i = 0; i < s.whitelist_nodes.length; i++)
                -1 == n(s.whitelist_nodes[i], this.whitelist_nodes) &&
                  this.whitelist_nodes.push(s.whitelist_nodes[i]);
            r.whitelist = !!s.whitelist;
            s.attr_whitelist &&
              (r.attr_whitelist = o(r.attr_whitelist, s.attr_whitelist));
            r.node = s.node ? s.node : r.node;
          }
        return r;
      }
      for (i = 0; i < e.childNodes.length; i++) r.call(this, e.childNodes[i]);
      t.normalize && t.normalize();
      return t;
    };
    void 0 !==
      (o = function () {
        return s;
      }.apply(t, [])) && (e.exports = o);
  },
  function (e, t) {
    e.exports =
      '#hs-banner-parent div,#hs-banner-parent p{color:inherit}#hs-banner-parent *{font-size:inherit;font-family:inherit;background:none;border:none;box-shadow:none;box-sizing:border-box;margin:0;padding:0;display:inline-block;line-height:1.75em}#hs-banner-parent ul{display:block}#hs-banner-parent li{display:list-item;list-style-position:inside}#hs-banner-parent li *{display:inline}#hs-banner-parent .hs-hidden{display:none!important}#hs-banner-parent #hs-banner-gpc{font-size:var(--hs-banner-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);animation:banner_animation .5s forwards}#hs-banner-gpc #hs-banner-gpc-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-banner-gpc #hs-banner-gpc-header{display:flex;flex-direction:row;justify-content:flex-end}#hs-banner-gpc #hs-banner-gpc-close-button{cursor:pointer;display:block}#hs-banner-gpc #hs-banner-gpc-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-banner-parent #hs-eu-cookie-confirmation{font-size:var(--hs-banner-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);animation:banner_animation .5s forwards}@keyframes banner_animation{0%{transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);opacity:0}99%{opacity:0}to{transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px);opacity:1}}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner button:focus{box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px -webkit-focus-ring-color}#hs-eu-cookie-confirmation #hs-eu-header-container{display:var(--hs-banner-close-button-display,none);flex-direction:row;justify-content:flex-end}#hs-eu-cookie-confirmation #hs-eu-close-button{cursor:pointer;display:block}#hs-eu-cookie-confirmation #hs-eu-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-buttons-area{display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:baseline}#hs-eu-cookie-confirmation #hs-eu-confirmation-button-group,#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{flex-grow:1}#hs-eu-cookie-confirmation #hs-eu-confirmation-button,#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button,#hs-eu-cookie-confirmation #hs-eu-decline-button{flex:1;cursor:pointer;border-radius:var(--hs-banner-button-corners,3em);min-width:11em;height:3.3em}#hs-eu-cookie-confirmation #hs-eu-confirmation-button{color:var(--hs-banner-accept-text-color,#fff);background:var(--hs-banner-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-decline-button{color:var(--hs-banner-decline-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-decline-color,#fff);border:1px solid var(--hs-banner-decline-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button{text-decoration:underline;font-weight:800;color:var(--hs-banner-settings-text-color,var(--hs-banner-accentColor,#425b76))}@media print{#hs-banner-gpc,#hs-eu-cookie-confirmation{display:none!important}}';
  },
  function (e, t) {
    e.exports =
      '#hs-banner-parent #hs-modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.28);display:flex;justify-content:center;align-items:center;z-index:3000000001;-webkit-transform:translateZ(3000000001px)}@media print{#hs-banner-parent #hs-modal{display:none!important}}#hs-banner-parent #hs-modal-content{position:absolute;display:flex;flex-direction:column;gap:1.1em;padding:var(--hs-banner-modal-padding,2.2em);width:calc(min(var(--hs-banner-modal-width, 50.3em), 100%));max-height:80%;background-color:var(--hs-banner-modal-color,#fafbff);border-radius:var(--hs-banner-modal-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:var(--hs-banner-modal-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;line-height:1.75em;color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-header-container{display:flex;flex-direction:row;justify-content:flex-end}#hs-modal-content #hs-modal-close-button{cursor:pointer;display:block}#hs-modal-content #hs-modal-close-button svg{width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-body{overflow:auto}#hs-modal-content #hs-modal-body-container{position:relative;display:flex;flex-flow:column;gap:1.1em;height:100%;width:100%}#hs-modal-content #hs-modal-introduction{display:inline-block}#hs-modal-content #hs-modal-introduction span{font-weight:800;font-size:1.3em;color:inherit}#hs-modal-content #hs-categories-container{display:flex;flex-direction:column;gap:1.1em}#hs-modal-content #hs-categories-container .hs-category-row{display:flex;flex-direction:column;background:var(--hs-banner-modal-cateogry-color,#fff);border-radius:var(--hs-banner-modal-category-corners,var(--hs-banner-modal-corners,12px));padding:2em}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-input{opacity:0;width:100%;height:100%;cursor:pointer}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch{width:calc(3.4em + 6px);height:calc(1.7em + 6px);position:relative;background-color:var(--hs-banner-modal-toggle-off-color,#f1f1f1);border:3px solid var(--hs-banner-modal-toggle-off-color,#f1f1f1);border-radius:1.7em;transition:background-color .2s ease,border-color .2s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-nob{position:absolute;height:1.7em;width:1.7em;left:0;border-radius:inherit;box-shadow:0 2px 5px rgba(0,0,0,.3);background:var(--hs-banner-modal-cateogry-color,#fff);transition:left .5s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag{background-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76));border-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag .hs-toggle-switch-nob{left:50%}#hs-modal-content #hs-categories-container .description-accordion-arrow{transition:transform .2s;width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .description-accordion-arrow.rotated{transform:rotate(90deg)}#hs-modal-content #hs-categories-container .hs-category-description{transition:max-height .2s;box-sizing:border-box;overflow:hidden;opacity:0}#hs-modal-content #hs-categories-container .hs-category-description.visible{opacity:1;color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .hs-category-row-header{display:flex;justify-content:space-between;align-items:center}#hs-modal-content #hs-categories-container .hs-category-label{display:flex;flex-grow:1;gap:1.1em;align-items:center;justify-content:left;font-weight:800;color:var(--hs-banner-modal-category-text-color,#15295a);cursor:pointer}#hs-modal-content #hs-categories-container .hs-always-active-label{color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-modal-footer{display:flex;justify-content:flex-end}#hs-modal-content #hs-modal-footer-container{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-modal-content #hs-modal-accept-all,#hs-modal-content #hs-modal-save-settings{flex:1;border-radius:var(--hs-banner-modal-button-corners,3em);min-width:11em;height:3.3em;cursor:pointer}#hs-modal-content #hs-modal-accept-all{color:var(--hs-banner-modal-accept-text-color,#fafbff);background:var(--hs-banner-modal-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-modal-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-modal-save-settings{color:var(--hs-banner-modal-save-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-modal-save-color,#fafbff);border:1px solid var(--hs-banner-modal-save-border-color,var(--hs-banner-accentColor,#425b76))}';
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = "<unknown>";
    function i(e) {
      return e.split("\n").reduce(function (e, t) {
        var n = a(t) || l(t) || u(t) || m(t) || _(t);
        n && e.push(n);
        return e;
      }, []);
    }
    var s =
        /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      r = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function a(e) {
      var t = s.exec(e);
      if (!t) return null;
      var n = t[2] && 0 === t[2].indexOf("native"),
        i = t[2] && 0 === t[2].indexOf("eval"),
        a = r.exec(t[2]);
      if (i && null != a) {
        t[2] = a[1];
        t[3] = a[2];
        t[4] = a[3];
      }
      return {
        file: n ? null : t[2],
        methodName: t[1] || o,
        arguments: n ? [t[2]] : [],
        lineNumber: t[3] ? +t[3] : null,
        column: t[4] ? +t[4] : null,
      };
    }
    var c =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function l(e) {
      var t = c.exec(e);
      return t
        ? {
            file: t[2],
            methodName: t[1] || o,
            arguments: [],
            lineNumber: +t[3],
            column: t[4] ? +t[4] : null,
          }
        : null;
    }
    var h =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
      d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function u(e) {
      var t = h.exec(e);
      if (!t) return null;
      var n = t[3] && t[3].indexOf(" > eval") > -1,
        i = d.exec(t[3]);
      if (n && null != i) {
        t[3] = i[1];
        t[4] = i[2];
        t[5] = null;
      }
      return {
        file: t[3],
        methodName: t[1] || o,
        arguments: t[2] ? t[2].split(",") : [],
        lineNumber: t[4] ? +t[4] : null,
        column: t[5] ? +t[5] : null,
      };
    }
    var g = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function _(e) {
      var t = g.exec(e);
      return t
        ? {
            file: t[3],
            methodName: t[1] || o,
            arguments: [],
            lineNumber: +t[4],
            column: t[5] ? +t[5] : null,
          }
        : null;
    }
    var f =
      /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function m(e) {
      var t = f.exec(e);
      return t
        ? {
            file: t[2],
            methodName: t[1] || o,
            arguments: [],
            lineNumber: +t[3],
            column: t[4] ? +t[4] : null,
          }
        : null;
    }
    t.parse = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    const o = "_hspb_loaded",
      i = "_hsp",
      s = "_hsq",
      r = "_hsGeoTargetingTest",
      a = "_hsGpcSignal",
      c = "_hsScanningMode",
      l = "_hspb_ran",
      h = "hsdbg",
      d = "_hsPrivacyTest",
      u = "hs-eu-cookie-confirmation",
      g = "hs-banner-gpc",
      _ = "hs-banner-parent",
      f = "hs-modal",
      m = "hs-modal-content",
      p = {
        NECESSARY: "necessary",
        ANALYTICS: "analytics",
        ADVERTISEMENT: "advertisement",
        FUNCTIONALITY: "functionality",
      },
      b = "hs-hidden",
      y = "hs-banner-style",
      v = "hs-banner-modal-style",
      C = "disabledHsPopups",
      x = "PRIVACY",
      S = "hsCookieBannerLoaded",
      w = [
        ...[
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
        ],
        ...["IS", "LI", "NO"],
        "GB",
      ],
      T = "hs-banner-google-font",
      k = "google-font-injected",
      O = [
        [0, 400],
        [0, 700],
        [1, 400],
      ],
      E = "https://fonts.googleapis.com/css2";
    class I {
      constructor(e, t) {
        this.win = e;
        this.doc = t;
        this.hasLoadedBaseStyle = !1;
        this.hasLoadedCbcStyle = !1;
      }
      setHasLoadedBaseStyle(e) {
        this.hasLoadedBaseStyle = e;
      }
      setHasLoadedCbcStyle(e) {
        this.hasLoadedCbcStyle = e;
      }
      getWindow() {
        return this.win;
      }
      getDocument() {
        return this.doc;
      }
      getNavigator() {
        return this.getWindow().navigator;
      }
      getLocation() {
        return this.getWindow().location;
      }
      getPathname() {
        return this.getLocation().pathname;
      }
      getHostname() {
        try {
          return this.getLocation().hostname;
        } catch (e) {
          return this.getDocument().domain;
        }
      }
      getHasLoadedBaseStyle() {
        return this.hasLoadedBaseStyle;
      }
      getHasLoadedCbcStyle() {
        return this.hasLoadedCbcStyle;
      }
    }
    const A = new I(window, document);
    function L() {
      return A;
    }
    class N {
      constructor(e) {
        this.logPrepend = "[HubSpot cookie banner]";
        this.context = e;
      }
      info(e) {
        this.isDebugEnabled() &&
          this.context.getWindow().console.log(`${this.logPrepend} ${e}`);
      }
      debug(e) {
        this.isDebugEnabled() &&
          this.context.getWindow().console.debug(`${this.logPrepend} ${e}`);
      }
      error(e) {
        this.isDebugEnabled() &&
          this.context.getWindow().console.error(`${this.logPrepend} ${e}`);
      }
      isDebugEnabled() {
        return this.context.getDocument().location.search.includes(h);
      }
    }
    var B = new N(L());
    const R = [0, 0, 0, 0],
      P = (e) => e.some((e) => e > 0),
      D = (e, t) => (e.map((e, n) => e - t[n]).find((e) => 0 !== e) || 0) >= 0;
    class G {
      constructor(e = "", t = [], n = []) {
        this.wildcard = !1;
        this.targetedPathPrefix = e;
        this.targetedCountries = t;
        this.targetedRegions = n;
      }
      test(e, t, n, o) {
        const i = this.targetedPathPrefix.length + 1;
        if (!e.startsWith(this.targetedPathPrefix)) return R;
        if (!o && this.wildcard) return R;
        const s =
            this.targetedCountries.length > 0 ||
            this.targetedRegions.length > 0,
          r = void 0 !== t && this.targetedCountries.includes(t),
          a = t && n ? `${t}-${n}` : void 0,
          c = void 0 !== a && this.targetedRegions.includes(a);
        return !s || r || c
          ? [this.wildcard ? 0 : 1, c ? 1 : 0, r ? 1 : 0, i]
          : R;
      }
      static fromJS(e) {
        const {
          allUrlsAndLocations: t,
          path: n,
          targetedCountries: o,
          targetedRegions: i,
        } = e;
        return t ? new G() : new G(n || "", o || [], i || []);
      }
    }
    var M;
    class U {
      constructor(e) {
        this.value = e;
      }
      getValue() {
        return this.value;
      }
      static fromJS(e) {
        if (!e) return this.TOP;
        switch (e) {
          case 0:
            return this.TOP;
          case 1:
            return this.BOTTOM;
          case 2:
            return this.BOTTOM_LEFT;
          case 3:
            return this.BOTTOM_RIGHT;
          case 4:
            return this.CENTER;
          default:
            return this.TOP;
        }
      }
    }
    M = U;
    U.TOP = new M(0);
    U.BOTTOM = new M(1);
    U.BOTTOM_LEFT = new M(2);
    U.BOTTOM_RIGHT = new M(3);
    U.CENTER = new M(4);
    class F {
      constructor(e, t, n) {
        this.position = e;
        this.accentColor = t;
        this.showCloseButton = n;
      }
      static fromJS(e) {
        const { position: t, accentColor: n, showCloseButton: o } = e;
        return new F(U.fromJS(t), n, o || !1);
      }
    }
    var Y = n(0),
      V = n.n(Y);
    const H = new V.a({
        attributes: {
          a: ["href", "title", "target"],
          blockquote: ["cite"],
          ol: ["start", "type"],
          q: ["cite"],
          ul: ["type"],
          span: ["class"],
        },
        elements: [
          "a",
          "b",
          "blockquote",
          "br",
          "caption",
          "cite",
          "code",
          "dd",
          "dl",
          "dt",
          "em",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "i",
          "li",
          "ol",
          "p",
          "pre",
          "q",
          "small",
          "strike",
          "strong",
          "sub",
          "sup",
          "u",
          "ul",
          "font",
          "div",
          "span",
        ],
        protocols: {
          a: { href: ["http", "https", "mailto", V.a.ALL] },
          blockquote: { cite: ["http", "https", V.a.RELATIVE] },
          q: { cite: ["http", "https", V.a.RELATIVE] },
        },
        remove_contents: ["style", "script"],
        add_attributes: { a: { rel: "noopener" } },
      }),
      z = (e) => {
        if (!e) return e;
        const t = document.createElement("div");
        try {
          const n = document.createRange().createContextualFragment(e),
            o = H.clean_node(n);
          t.appendChild(o.cloneNode(!0));
        } catch (t) {
          B.error("we had an error sanitizing an html string: " + e);
        }
        return t.innerHTML;
      },
      W = (e) => ({ __html: e || "" });
    class $ {
      constructor(e, t, n) {
        this.description = e;
        this.label = t;
        this.toggleLabel = n;
      }
      static fromJS(e) {
        return new $(e.description, e.label, e.toggleLabel);
      }
      getSanitizedText() {
        return new $(z(this.description), z(this.label), z(this.toggleLabel));
      }
    }
    class q {
      constructor(e, t, n, o, i, s, r) {
        this.acceptLabel = e;
        this.saveSettingsLabel = t;
        this.introduction = n;
        this.necessary = o;
        this.analytics = i;
        this.advertisement = s;
        this.functionality = r;
      }
      static fromJS(e) {
        return new q(
          e.acceptAllLabel,
          e.saveSettingsLabel,
          $.fromJS(e.introduction),
          $.fromJS(e.categories.necessary),
          $.fromJS(e.categories.analytics),
          $.fromJS(e.categories.advertisement),
          $.fromJS(e.categories.functionality)
        );
      }
      getSanitizedText() {
        return new q(
          z(this.acceptLabel),
          z(this.saveSettingsLabel),
          this.introduction.getSanitizedText(),
          this.necessary.getSanitizedText(),
          this.analytics.getSanitizedText(),
          this.advertisement.getSanitizedText(),
          this.functionality.getSanitizedText()
        );
      }
    }
    class K {
      constructor(e, t, n, o, i, s) {
        this.notification = e;
        this.acceptLabel = t;
        this.declineLabel = n;
        this.disclaimer = o;
        this.cookieSettingsLabel = i;
        this.modalText = s;
      }
      static fromJS(e) {
        return new K(
          e.notification,
          e.acceptLabel,
          e.declineLabel,
          e.disclaimer,
          e.modalText && e.modalText.cookieSettingsLabel,
          e.modalText && q.fromJS(e.modalText)
        );
      }
      getSanitizedText() {
        return new K(
          z(this.notification),
          z(this.acceptLabel),
          z(this.declineLabel),
          z(this.disclaimer),
          this.cookieSettingsLabel && z(this.cookieSettingsLabel),
          this.modalText && this.modalText.getSanitizedText()
        );
      }
    }
    var j;
    class J {
      constructor(e, t) {
        this.value = e;
        this.name = t;
      }
      getValue() {
        return this.value;
      }
      getName() {
        return this.name;
      }
      static isOptIn(e) {
        return [this.OPT_IN, this.COOKIES_BY_CATEGORY].includes(e);
      }
      static fromJS(e) {
        switch (e) {
          case 0:
            return this.COOKIES_WITHOUT_BANNER;
          case 1:
            return this.NO_COOKIES;
          case 2:
            return this.NOTIFY;
          case 3:
            return this.OPT_IN;
          case 4:
            return this.COOKIES_BY_CATEGORY;
          case 5:
            return this.OPT_OUT;
          case 6:
            return this.OPT_OUT_BY_CATEGORY;
          default:
            return this.COOKIES_BY_CATEGORY;
        }
      }
    }
    j = J;
    J.COOKIES_WITHOUT_BANNER = new j(0, "COOKIES_WITHOUT_BANNER");
    J.NO_COOKIES = new j(1, "NO_COOKIES");
    J.NOTIFY = new j(2, "NOTIFY");
    J.OPT_IN = new j(3, "OPT_IN");
    J.COOKIES_BY_CATEGORY = new j(4, "COOKIES_BY_CATEGORY");
    J.OPT_OUT = new j(5, "OPT_OUT");
    J.OPT_OUT_BY_CATEGORY = new j(6, "OPT_OUT_BY_CATEGORY");
    class Q {
      constructor(e, t) {
        this.type = e;
        this.text = t;
      }
      static fromJS(e) {
        const { type: t, text: n } = e;
        return new Q(J.fromJS(t), K.fromJS(n));
      }
      getSanitizedPolicy() {
        return new Q(this.type, this.text.getSanitizedText());
      }
    }
    class Z {
      constructor(e, t) {
        this.enabled = e;
        this.notificationText = z(t || "");
      }
      static fromJS(e) {
        return new Z(e.enabled, e.notificationText);
      }
    }
    class X {
      constructor(e, t, n, o, i, s, r, a) {
        this.id = e;
        this.portalId = t;
        this.label = n;
        this.enabled = o;
        this.configuration = i;
        this.policy = s;
        this.customizationSettings = r;
        this.gpcSettings = a;
      }
      static fromJS(e) {
        const {
          id: t,
          portalId: n,
          label: o,
          enabled: i,
          configuration: s,
          policy: r,
          legacyCustomization: a,
          gpcSettings: c,
        } = e;
        return new X(
          t,
          n,
          o,
          i,
          G.fromJS(s),
          Q.fromJS(r),
          F.fromJS(a),
          Z.fromJS(c)
        );
      }
      withSanitizedPolicy() {
        return new X(
          this.id,
          this.portalId,
          this.label,
          this.enabled,
          this.configuration,
          this.policy.getSanitizedPolicy(),
          this.customizationSettings,
          this.gpcSettings
        );
      }
      toLegacyPrivacyPolicy() {
        let e;
        switch (this.policy.type) {
          case J.COOKIES_WITHOUT_BANNER:
            e = 0;
            break;
          case J.NO_COOKIES:
            e = 2;
            break;
          case J.OPT_OUT:
          case J.NOTIFY:
          case J.OPT_IN:
            e = 1;
            break;
          case J.OPT_OUT_BY_CATEGORY:
          case J.COOKIES_BY_CATEGORY:
          default:
            e = 3;
        }
        return {
          active: this.enabled,
          testing: !1,
          mode: e,
          policyWording: "not used",
          acceptWording: "not used",
          cancelWording: "not used",
          disclaimerWording: "not used",
          hideDecline: this.policy.type === J.NOTIFY,
          accentColor: this.customizationSettings.accentColor,
          bannerType: "not used",
          label: this.label,
          privacyDefault: !1,
          cookiesByCategory: {},
          id: this.id,
          portalId: this.portalId,
        };
      }
    }
    const ee = 1,
      te = 2,
      ne = 3,
      oe = { [ee]: "analytics", [te]: "advertisement", [ne]: "functionality" };
    class ie {
      constructor(e, t, n) {
        this.allowed = e;
        this.previousCategories = n || {
          necessary: !0,
          analytics: !1,
          advertisement: !1,
          functionality: !1,
        };
        this.categories = t || {
          necessary: !0,
          analytics: e,
          advertisement: e,
          functionality: e,
        };
      }
      hasAnalyticsConsent() {
        return this.allowed || !0 === this.categories.analytics;
      }
      adsHasChangedToFalse() {
        return (
          !0 === this.previousCategories.advertisement &&
          !1 === this.categories.advertisement
        );
      }
      update(e) {
        this.previousCategories = this.categories;
        this.categories = Object.assign({}, this.categories, {
          analytics: e,
          advertisement: e,
          functionality: e,
        });
        this.allowed = e;
        return this;
      }
      updateCategories({ analytics: e, advertisement: t, functionality: n }) {
        this.previousCategories = this.categories;
        this.categories = {
          necessary: !0,
          analytics: e,
          advertisement: t,
          functionality: n,
        };
        this.allowed = e && t && n;
        return this;
      }
      allCategoriesSelected() {
        return (
          this.categories.necessary &&
          this.categories.analytics &&
          this.categories.advertisement &&
          this.categories.functionality
        );
      }
      getSafeCopy() {
        return new ie(
          this.allowed,
          {
            necessary: this.categories.necessary,
            analytics: this.categories.analytics,
            advertisement: this.categories.advertisement,
            functionality: this.categories.functionality,
          },
          {
            necessary: this.previousCategories.necessary,
            analytics: this.previousCategories.analytics,
            advertisement: this.previousCategories.advertisement,
            functionality: this.previousCategories.functionality,
          }
        );
      }
      toCookieString() {
        return `${ee}:${this.categories.analytics}_${te}:${this.categories.advertisement}_${ne}:${this.categories.functionality}`;
      }
      static buildFromCookieString(e) {
        const t = e.includes(",") ? e.split(",") : e.split("_"),
          n = {
            necessary: !0,
            analytics: !1,
            advertisement: !1,
            functionality: !1,
          };
        t.forEach((e) => {
          const t = e.split(":");
          if (2 !== t.length) return;
          const o = t[0],
            i = oe[o];
          i && (n[i] = "true" === t[1]);
        });
        const o =
          n.necessary && n.advertisement && n.analytics && n.functionality;
        return new ie(o, n);
      }
      static buildInitialConsent() {
        return new ie(!1, {
          necessary: !0,
          analytics: !1,
          advertisement: !1,
          functionality: !1,
        });
      }
    }
    const se = (e) => encodeURI(e),
      re = (e) => decodeURI(e),
      ae = "_fbp",
      ce = "1970-01-01T00:00:01-00:00";
    class le {
      constructor(e) {
        this.context = e;
        this.cookiesToSubdomain = !1;
        this.useSecureCookies = !1;
        this.currentDomain = "";
      }
      isEnabled() {
        return (
          this.context.getNavigator().cookieEnabled ||
          ("cookie" in this.context.getDocument() &&
            this.context.getDocument().cookie.length > 0)
        );
      }
      addDomain(e) {
        ("." + this.context.getHostname()).endsWith(
          e.startsWith(".") ? e : "." + e
        ) &&
          (!this.currentDomain || e.length < this.currentDomain.length) &&
          (this.currentDomain = e);
      }
      get(e) {
        const t = new RegExp(`(^|;)[ ]*${e}=([^;]*)`).exec(
          this.context.getDocument().cookie
        );
        return t ? re(t[2]) : "";
      }
      set(e, t, n) {
        let o,
          i,
          s = !1;
        if ((n = n || {}).minsToExpire) {
          o = new Date();
          o.setTime(o.getTime() + 1e3 * n.minsToExpire * 60);
        } else if (n.daysToExpire) {
          o = new Date();
          o.setTime(o.getTime() + 1e3 * n.daysToExpire * 60 * 60 * 24);
        } else
          n.expiryDate && n.expiryDate.toGMTString
            ? (o = n.expiryDate)
            : n.expiryDate && (o = new Date(n.expiryDate));
        if (void 0 !== o) {
          i = o.toGMTString();
          s = !0;
        }
        this.setCookie(e, se(t), {
          expires: s ? ";expires=" + i : "",
          expiresTime: s ? o : null,
          path: ";path=" + (n.path ? n.path : "/"),
          domain:
            !this.cookiesToSubdomain && this.currentDomain
              ? ";domain=" + this.currentDomain
              : "",
          secure: this.useSecureCookies ? ";secure" : "",
          sameSite: ";SameSite=Lax",
        });
      }
      getDomainAncestry(e) {
        if ("" === e || !e) return [];
        const t = e.split(".");
        if (2 === t.length) return [e];
        if ("" === t[t.length - 1] || t.length < 2) {
          console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);
          return [];
        }
        const n = [];
        let o,
          i = "" + t[t.length - 1];
        for (o = t.length - 2; o >= 0; o--) {
          if ("" === t[o]) {
            if (0 !== o) {
              console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);
              return [];
            }
            continue;
          }
          const s = `${t[o]}.${i}`;
          n.push(s);
          i = s;
        }
        return n;
      }
      removeFBPCookie() {
        const e = new Date(ce),
          t = e.toUTCString();
        this.getDomainAncestry(this.context.getDocument().domain).forEach(
          (n) => {
            this.setCookie(ae, "", {
              expires: ";expires=" + t,
              expiresTime: e,
              path: ";path=/",
              domain: ";domain=." + n,
              secure: "",
              sameSite: ";SameSite=Lax",
            });
          }
        );
      }
      getGACookieNames() {
        const e = this.context.getDocument().cookie;
        if (!e) return [];
        const t = e.split(";"),
          n = new RegExp("^(_ga_[a-zA-Z0-9]+)=[^;]+$"),
          o = [];
        t.forEach((e) => {
          const t = e.trim().match(n);
          t && o.push(t[1]);
        });
        return o;
      }
      removeGACookie() {
        this.getGACookieNames().forEach((e) => this.remove(e));
      }
      remove(e) {
        this.set(e, "", { expiryDate: ce });
      }
      setCookie(e, t, n) {
        const o = n.expires + n.path + n.domain + n.sameSite + n.secure;
        this.writeCookie(`${e}=${t}${o}`);
      }
      writeCookie(e) {
        this.context.getDocument().cookie = e;
      }
      setCookiesToSubdomain(e) {
        this.cookiesToSubdomain = e;
      }
      setUseSecureCookies(e) {
        this.useSecureCookies = e;
      }
    }
    var he;
    class de {
      constructor(e, t) {
        this.name = e;
        this.expirationDays = t;
      }
      getName() {
        return this.name;
      }
      getExpirationDays() {
        return this.expirationDays;
      }
    }
    he = de;
    de.CATEGORY_PREFERENCE_COOKIE = new he("__hs_cookie_cat_pref", 180);
    de.GPC_BANNER_DISMISS_COOKIE = new he("__hs_gpc_banner_dismiss", 180);
    de.NOTIFY_BANNER_DIMISS_COOKIE = new he("__hs_notify_banner_dismiss", 180);
    de.OPT_OUT_COOKIE = new he("__hs_opt_out", 180);
    de.INITIAL_OPT_IN = new he("__hs_initial_opt_in", 7);
    var ue,
      ge,
      _e,
      fe,
      me,
      pe,
      be = {},
      ye = [],
      ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function Ce(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function xe(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function Se(e, t, n) {
      var o,
        i,
        s,
        r = {};
      for (s in t)
        "key" == s ? (o = t[s]) : "ref" == s ? (i = t[s]) : (r[s] = t[s]);
      if (
        (arguments.length > 2 &&
          (r.children = arguments.length > 3 ? ue.call(arguments, 2) : n),
        "function" == typeof e && null != e.defaultProps)
      )
        for (s in e.defaultProps) void 0 === r[s] && (r[s] = e.defaultProps[s]);
      return we(e, r, o, i, null);
    }
    function we(e, t, n, o, i) {
      var s = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++_e : i,
      };
      return null == i && null != ge.vnode && ge.vnode(s), s;
    }
    function Te(e) {
      return e.children;
    }
    function ke(e, t) {
      (this.props = e), (this.context = t);
    }
    function Oe(e, t) {
      if (null == t) return e.__ ? Oe(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? Oe(e) : null;
    }
    function Ee(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        return Ee(e);
      }
    }
    function Ie(e) {
      ((!e.__d && (e.__d = !0) && fe.push(e) && !Ae.__r++) ||
        pe !== ge.debounceRendering) &&
        ((pe = ge.debounceRendering) || me)(Ae);
    }
    function Ae() {
      for (var e; (Ae.__r = fe.length); )
        (e = fe.sort(function (e, t) {
          return e.__v.__b - t.__v.__b;
        })),
          (fe = []),
          e.some(function (e) {
            var t, n, o, i, s, r;
            e.__d &&
              ((s = (i = (t = e).__v).__e),
              (r = t.__P) &&
                ((n = []),
                ((o = Ce({}, i)).__v = i.__v + 1),
                Ue(
                  r,
                  i,
                  o,
                  t.__n,
                  void 0 !== r.ownerSVGElement,
                  null != i.__h ? [s] : null,
                  n,
                  null == s ? Oe(i) : s,
                  i.__h
                ),
                Fe(n, i),
                i.__e != s && Ee(i)));
          });
    }
    function Le(e, t, n, o, i, s, r, a, c, l) {
      var h,
        d,
        u,
        g,
        _,
        f,
        m,
        p = (o && o.__k) || ye,
        b = p.length;
      for (n.__k = [], h = 0; h < t.length; h++)
        if (
          null !=
          (g = n.__k[h] =
            null == (g = t[h]) || "boolean" == typeof g
              ? null
              : "string" == typeof g ||
                "number" == typeof g ||
                "bigint" == typeof g
              ? we(null, g, null, null, g)
              : Array.isArray(g)
              ? we(Te, { children: g }, null, null, null)
              : g.__b > 0
              ? we(g.type, g.props, g.key, null, g.__v)
              : g)
        ) {
          if (
            ((g.__ = n),
            (g.__b = n.__b + 1),
            null === (u = p[h]) || (u && g.key == u.key && g.type === u.type))
          )
            p[h] = void 0;
          else
            for (d = 0; d < b; d++) {
              if ((u = p[d]) && g.key == u.key && g.type === u.type) {
                p[d] = void 0;
                break;
              }
              u = null;
            }
          Ue(e, g, (u = u || be), i, s, r, a, c, l),
            (_ = g.__e),
            (d = g.ref) &&
              u.ref != d &&
              (m || (m = []),
              u.ref && m.push(u.ref, null, g),
              m.push(d, g.__c || _, g)),
            null != _
              ? (null == f && (f = _),
                "function" == typeof g.type && g.__k === u.__k
                  ? (g.__d = c = Ne(g, c, e))
                  : (c = Be(e, g, u, p, _, c)),
                "function" == typeof n.type && (n.__d = c))
              : c && u.__e == c && c.parentNode != e && (c = Oe(u));
        }
      for (n.__e = f, h = b; h--; )
        null != p[h] &&
          ("function" == typeof n.type &&
            null != p[h].__e &&
            p[h].__e == n.__d &&
            (n.__d = Oe(o, h + 1)),
          He(p[h], p[h]));
      if (m) for (h = 0; h < m.length; h++) Ve(m[h], m[++h], m[++h]);
    }
    function Ne(e, t, n) {
      for (var o, i = e.__k, s = 0; i && s < i.length; s++)
        (o = i[s]) &&
          ((o.__ = e),
          (t =
            "function" == typeof o.type
              ? Ne(o, t, n)
              : Be(n, o, o, i, o.__e, t)));
      return t;
    }
    function Be(e, t, n, o, i, s) {
      var r, a, c;
      if (void 0 !== t.__d) (r = t.__d), (t.__d = void 0);
      else if (null == n || i != s || null == i.parentNode)
        e: if (null == s || s.parentNode !== e) e.appendChild(i), (r = null);
        else {
          for (a = s, c = 0; (a = a.nextSibling) && c < o.length; c += 2)
            if (a == i) break e;
          e.insertBefore(i, s), (r = s);
        }
      return void 0 !== r ? r : i.nextSibling;
    }
    function Re(e, t, n, o, i) {
      var s;
      for (s in n)
        "children" === s || "key" === s || s in t || De(e, s, null, n[s], o);
      for (s in t)
        (i && "function" != typeof t[s]) ||
          "children" === s ||
          "key" === s ||
          "value" === s ||
          "checked" === s ||
          n[s] === t[s] ||
          De(e, s, t[s], n[s], o);
    }
    function Pe(e, t, n) {
      "-" === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
            null == n ? "" : "number" != typeof n || ve.test(t) ? n : n + "px");
    }
    function De(e, t, n, o, i) {
      var s;
      e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
          if (("string" == typeof o && (e.style.cssText = o = ""), o))
            for (t in o) (n && t in n) || Pe(e.style, t, "");
          if (n) for (t in n) (o && n[t] === o[t]) || Pe(e.style, t, n[t]);
        }
      else if ("o" === t[0] && "n" === t[1])
        (s = t !== (t = t.replace(/Capture$/, ""))),
          (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + s] = n),
          n
            ? o || e.addEventListener(t, s ? Me : Ge, s)
            : e.removeEventListener(t, s ? Me : Ge, s);
      else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (
          "href" !== t &&
          "list" !== t &&
          "form" !== t &&
          "tabIndex" !== t &&
          "download" !== t &&
          t in e
        )
          try {
            e[t] = null == n ? "" : n;
            break e;
          } catch (e) {}
        "function" == typeof n ||
          (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1]))
            ? e.setAttribute(t, n)
            : e.removeAttribute(t));
      }
    }
    function Ge(e) {
      this.l[e.type + !1](ge.event ? ge.event(e) : e);
    }
    function Me(e) {
      this.l[e.type + !0](ge.event ? ge.event(e) : e);
    }
    function Ue(e, t, n, o, i, s, r, a, c) {
      var l,
        h,
        d,
        u,
        g,
        _,
        f,
        m,
        p,
        b,
        y,
        v = t.type;
      if (void 0 !== t.constructor) return null;
      null != n.__h &&
        ((c = n.__h), (a = t.__e = n.__e), (t.__h = null), (s = [a])),
        (l = ge.__b) && l(t);
      try {
        e: if ("function" == typeof v) {
          if (
            ((m = t.props),
            (p = (l = v.contextType) && o[l.__c]),
            (b = l ? (p ? p.props.value : l.__) : o),
            n.__c
              ? (f = (h = t.__c = n.__c).__ = h.__E)
              : ("prototype" in v && v.prototype.render
                  ? (t.__c = h = new v(m, b))
                  : ((t.__c = h = new ke(m, b)),
                    (h.constructor = v),
                    (h.render = ze)),
                p && p.sub(h),
                (h.props = m),
                h.state || (h.state = {}),
                (h.context = b),
                (h.__n = o),
                (d = h.__d = !0),
                (h.__h = [])),
            null == h.__s && (h.__s = h.state),
            null != v.getDerivedStateFromProps &&
              (h.__s == h.state && (h.__s = Ce({}, h.__s)),
              Ce(h.__s, v.getDerivedStateFromProps(m, h.__s))),
            (u = h.props),
            (g = h.state),
            d)
          )
            null == v.getDerivedStateFromProps &&
              null != h.componentWillMount &&
              h.componentWillMount(),
              null != h.componentDidMount && h.__h.push(h.componentDidMount);
          else {
            if (
              (null == v.getDerivedStateFromProps &&
                m !== u &&
                null != h.componentWillReceiveProps &&
                h.componentWillReceiveProps(m, b),
              (!h.__e &&
                null != h.shouldComponentUpdate &&
                !1 === h.shouldComponentUpdate(m, h.__s, b)) ||
                t.__v === n.__v)
            ) {
              (h.props = m),
                (h.state = h.__s),
                t.__v !== n.__v && (h.__d = !1),
                (h.__v = t),
                (t.__e = n.__e),
                (t.__k = n.__k),
                t.__k.forEach(function (e) {
                  e && (e.__ = t);
                }),
                h.__h.length && r.push(h);
              break e;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, b),
              null != h.componentDidUpdate &&
                h.__h.push(function () {
                  h.componentDidUpdate(u, g, _);
                });
          }
          (h.context = b),
            (h.props = m),
            (h.state = h.__s),
            (l = ge.__r) && l(t),
            (h.__d = !1),
            (h.__v = t),
            (h.__P = e),
            (l = h.render(h.props, h.state, h.context)),
            (h.state = h.__s),
            null != h.getChildContext &&
              (o = Ce(Ce({}, o), h.getChildContext())),
            d ||
              null == h.getSnapshotBeforeUpdate ||
              (_ = h.getSnapshotBeforeUpdate(u, g)),
            (y =
              null != l && l.type === Te && null == l.key
                ? l.props.children
                : l),
            Le(e, Array.isArray(y) ? y : [y], t, n, o, i, s, r, a, c),
            (h.base = t.__e),
            (t.__h = null),
            h.__h.length && r.push(h),
            f && (h.__E = h.__ = null),
            (h.__e = !1);
        } else
          null == s && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = Ye(n.__e, t, n, o, i, s, r, c));
        (l = ge.diffed) && l(t);
      } catch (e) {
        (t.__v = null),
          (c || null != s) &&
            ((t.__e = a), (t.__h = !!c), (s[s.indexOf(a)] = null)),
          ge.__e(e, t, n);
      }
    }
    function Fe(e, t) {
      ge.__c && ge.__c(t, e),
        e.some(function (t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t);
              });
          } catch (e) {
            ge.__e(e, t.__v);
          }
        });
    }
    function Ye(e, t, n, o, i, s, r, a) {
      var c,
        l,
        h,
        d = n.props,
        u = t.props,
        g = t.type,
        _ = 0;
      if (("svg" === g && (i = !0), null != s))
        for (; _ < s.length; _++)
          if (
            (c = s[_]) &&
            "setAttribute" in c == !!g &&
            (g ? c.localName === g : 3 === c.nodeType)
          ) {
            (e = c), (s[_] = null);
            break;
          }
      if (null == e) {
        if (null === g) return document.createTextNode(u);
        (e = i
          ? document.createElementNS("http://www.w3.org/2000/svg", g)
          : document.createElement(g, u.is && u)),
          (s = null),
          (a = !1);
      }
      if (null === g) d === u || (a && e.data === u) || (e.data = u);
      else {
        if (
          ((s = s && ue.call(e.childNodes)),
          (l = (d = n.props || be).dangerouslySetInnerHTML),
          (h = u.dangerouslySetInnerHTML),
          !a)
        ) {
          if (null != s)
            for (d = {}, _ = 0; _ < e.attributes.length; _++)
              d[e.attributes[_].name] = e.attributes[_].value;
          (h || l) &&
            ((h && ((l && h.__html == l.__html) || h.__html === e.innerHTML)) ||
              (e.innerHTML = (h && h.__html) || ""));
        }
        if ((Re(e, u, d, i, a), h)) t.__k = [];
        else if (
          ((_ = t.props.children),
          Le(
            e,
            Array.isArray(_) ? _ : [_],
            t,
            n,
            o,
            i && "foreignObject" !== g,
            s,
            r,
            s ? s[0] : n.__k && Oe(n, 0),
            a
          ),
          null != s)
        )
          for (_ = s.length; _--; ) null != s[_] && xe(s[_]);
        a ||
          ("value" in u &&
            void 0 !== (_ = u.value) &&
            (_ !== e.value ||
              ("progress" === g && !_) ||
              ("option" === g && _ !== d.value)) &&
            De(e, "value", _, d.value, !1),
          "checked" in u &&
            void 0 !== (_ = u.checked) &&
            _ !== e.checked &&
            De(e, "checked", _, d.checked, !1));
      }
      return e;
    }
    function Ve(e, t, n) {
      try {
        "function" == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        ge.__e(e, n);
      }
    }
    function He(e, t, n) {
      var o, i;
      if (
        (ge.unmount && ge.unmount(e),
        (o = e.ref) && ((o.current && o.current !== e.__e) || Ve(o, null, t)),
        null != (o = e.__c))
      ) {
        if (o.componentWillUnmount)
          try {
            o.componentWillUnmount();
          } catch (e) {
            ge.__e(e, t);
          }
        o.base = o.__P = null;
      }
      if ((o = e.__k))
        for (i = 0; i < o.length; i++)
          o[i] && He(o[i], t, "function" != typeof e.type);
      n || null == e.__e || xe(e.__e), (e.__e = e.__d = void 0);
    }
    function ze(e, t, n) {
      return this.constructor(e, n);
    }
    function We(e, t, n) {
      var o, i, s;
      ge.__ && ge.__(e, t),
        (i = (o = "function" == typeof n) ? null : (n && n.__k) || t.__k),
        (s = []),
        Ue(
          t,
          (e = ((!o && n) || t).__k = Se(Te, null, [e])),
          i || be,
          be,
          void 0 !== t.ownerSVGElement,
          !o && n
            ? [n]
            : i
            ? null
            : t.firstChild
            ? ue.call(t.childNodes)
            : null,
          s,
          !o && n ? n : i ? i.__e : t.firstChild,
          o
        ),
        Fe(s, e);
    }
    (ue = ye.slice),
      (ge = {
        __e: function (e, t) {
          for (var n, o, i; (t = t.__); )
            if ((n = t.__c) && !n.__)
              try {
                if (
                  ((o = n.constructor) &&
                    null != o.getDerivedStateFromError &&
                    (n.setState(o.getDerivedStateFromError(e)), (i = n.__d)),
                  null != n.componentDidCatch &&
                    (n.componentDidCatch(e), (i = n.__d)),
                  i)
                )
                  return (n.__E = n);
              } catch (t) {
                e = t;
              }
          throw e;
        },
      }),
      (_e = 0),
      function (e) {
        return null != e && void 0 === e.constructor;
      },
      (ke.prototype.setState = function (e, t) {
        var n;
        (n =
          null != this.__s && this.__s !== this.state
            ? this.__s
            : (this.__s = Ce({}, this.state))),
          "function" == typeof e && (e = e(Ce({}, n), this.props)),
          e && Ce(n, e),
          null != e && this.__v && (t && this.__h.push(t), Ie(this));
      }),
      (ke.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), Ie(this));
      }),
      (ke.prototype.render = Te),
      (fe = []),
      (me =
        "function" == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (Ae.__r = 0),
      0;
    var $e,
      qe,
      Ke,
      je = 0,
      Je = [],
      Qe = ge.__b,
      Ze = ge.__r,
      Xe = ge.diffed,
      et = ge.__c,
      tt = ge.unmount;
    function nt(e, t) {
      ge.__h && ge.__h(qe, e, je || t), (je = 0);
      var n = qe.__H || (qe.__H = { __: [], __h: [] });
      return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function ot(e) {
      return (je = 1), it(gt, e);
    }
    function it(e, t, n) {
      var o = nt($e++, 2);
      return (
        (o.t = e),
        o.__c ||
          ((o.__ = [
            n ? n(t) : gt(void 0, t),
            function (e) {
              var t = o.t(o.__[0], e);
              o.__[0] !== t && ((o.__ = [t, o.__[1]]), o.__c.setState({}));
            },
          ]),
          (o.__c = qe)),
        o.__
      );
    }
    function st(e, t) {
      var n = nt($e++, 3);
      !ge.__s && ut(n.__H, t) && ((n.__ = e), (n.__H = t), qe.__H.__h.push(n));
    }
    function rt(e) {
      return (
        (je = 5),
        at(function () {
          return { current: e };
        }, [])
      );
    }
    function at(e, t) {
      var n = nt($e++, 7);
      return ut(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
    }
    function ct() {
      for (var e; (e = Je.shift()); )
        if (e.__P)
          try {
            e.__H.__h.forEach(ht), e.__H.__h.forEach(dt), (e.__H.__h = []);
          } catch (t) {
            (e.__H.__h = []), ge.__e(t, e.__v);
          }
    }
    (ge.__b = function (e) {
      (qe = null), Qe && Qe(e);
    }),
      (ge.__r = function (e) {
        Ze && Ze(e), ($e = 0);
        var t = (qe = e.__c).__H;
        t && (t.__h.forEach(ht), t.__h.forEach(dt), (t.__h = []));
      }),
      (ge.diffed = function (e) {
        Xe && Xe(e);
        var t = e.__c;
        t &&
          t.__H &&
          t.__H.__h.length &&
          ((1 !== Je.push(t) && Ke === ge.requestAnimationFrame) ||
            (
              (Ke = ge.requestAnimationFrame) ||
              function (e) {
                var t,
                  n = function () {
                    clearTimeout(o),
                      lt && cancelAnimationFrame(t),
                      setTimeout(e);
                  },
                  o = setTimeout(n, 100);
                lt && (t = requestAnimationFrame(n));
              }
            )(ct)),
          (qe = null);
      }),
      (ge.__c = function (e, t) {
        t.some(function (e) {
          try {
            e.__h.forEach(ht),
              (e.__h = e.__h.filter(function (e) {
                return !e.__ || dt(e);
              }));
          } catch (n) {
            t.some(function (e) {
              e.__h && (e.__h = []);
            }),
              (t = []),
              ge.__e(n, e.__v);
          }
        }),
          et && et(e, t);
      }),
      (ge.unmount = function (e) {
        tt && tt(e);
        var t,
          n = e.__c;
        n &&
          n.__H &&
          (n.__H.__.forEach(function (e) {
            try {
              ht(e);
            } catch (e) {
              t = e;
            }
          }),
          t && ge.__e(t, n.__v));
      });
    var lt = "function" == typeof requestAnimationFrame;
    function ht(e) {
      var t = qe,
        n = e.__c;
      "function" == typeof n && ((e.__c = void 0), n()), (qe = t);
    }
    function dt(e) {
      var t = qe;
      (e.__c = e.__()), (qe = t);
    }
    function ut(e, t) {
      return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, n) {
          return t !== e[n];
        })
      );
    }
    function gt(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    var _t = 0;
    function ft(e, t, n, o, i) {
      var s,
        r,
        a = {};
      for (r in t) "ref" == r ? (s = t[r]) : (a[r] = t[r]);
      var c = {
        type: e,
        props: a,
        key: n,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --_t,
        __source: o,
        __self: i,
      };
      if ("function" == typeof e && (s = e.defaultProps))
        for (r in s) void 0 === a[r] && (a[r] = s[r]);
      return ge.vnode && ge.vnode(c), c;
    }
    function mt() {
      return ft("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 32 32",
        children: ft("path", {
          fill: "currentColor",
          d: "M4.3,27.7c0.2,0.2,0.6,0.5,1,0.5c0.4,0,0.8-0.2,1-0.5l9.6-9.5l9.6,9.5c0.2,0.2,0.6,0.5,1,0.5 c0.8,0,1.5-0.6,1.5-1.5c0-0.4-0.2-0.8-0.5-1L18.2,16l9.5-9.5c0.2-0.2,0.4-0.6,0.4-1c0-0.8-0.6-1.5-1.5-1.5c-0.4,0-0.7,0.2-1,0.4l0,0 L16,13.8L6.5,4.3C6.2,4,5.8,3.8,5.4,3.8c-0.8,0-1.5,0.6-1.5,1.5c0,0.5,0.2,0.8,0.5,1.1l0,0l9.5,9.5l-9.5,9.6c-0.2,0.2-0.5,0.6-0.5,1 S4.1,27.4,4.3,27.7L4.3,27.7z",
        }),
      });
    }
    function pt(e, t, n, o) {
      n &&
        o &&
        t.addEventListener("keydown", (t) => {
          if (!("Tab" === t.key || "Tab" === t.code)) return;
          const i = e.getDocument().activeElement;
          if (t.shiftKey) {
            if (i === n) {
              o.focus();
              t.preventDefault();
            }
          } else if (i === o) {
            n.focus();
            t.preventDefault();
          }
        });
    }
    function bt({
      context: e,
      onAcceptAll: t,
      onCookieSettingsClick: n,
      onDeclineAll: o,
      setting: i,
      onCloseBannerButtonClick: s,
      isModalDisplayed: r,
    }) {
      const a = rt(null),
        c = rt(null),
        l = rt(null),
        h = rt(null),
        d = rt(null);
      st(() => {
        if (!a.current) return;
        const t = c.current || l.current,
          n = d.current || h.current;
        pt(e, a.current, t, n);
      }, [e, a, c, h, d, l]);
      const g = r ? -1 : 0,
        _ = i.policy,
        f = i.policy.type,
        m = f === J.OPT_OUT_BY_CATEGORY || f === J.COOKIES_BY_CATEGORY,
        p =
          f === J.OPT_IN ||
          f === J.OPT_OUT ||
          f === J.OPT_OUT_BY_CATEGORY ||
          f === J.COOKIES_BY_CATEGORY;
      return ft("div", {
        id: u,
        className:
          i.customizationSettings.position === U.BOTTOM
            ? "hs-cookie-notification-position-bottom"
            : "",
        "data-nosnippet": "true",
        role: "dialog",
        "aria-describedby": "hs-eu-policy-wording",
        "aria-label": "Cookie banner",
        ref: a,
        tabIndex: g,
        children: ft("div", {
          id: "hs-eu-cookie-confirmation-inner",
          children: [
            ft("div", {
              id: "hs-eu-header-container",
              children: ft("button", {
                id: "hs-eu-close-button",
                className: "hs-close-button",
                onClick: () => s(f),
                ref: c,
                "aria-label": "Dismiss cookie banner",
                tabIndex: g,
                children: ft(mt, {}),
              }),
            }),
            ft("div", {
              id: "hs-eu-policy-wording",
              dangerouslySetInnerHTML: W(_.text.notification),
              ref: l,
              tabIndex: g,
            }),
            _.text.disclaimer &&
              p &&
              ft("p", {
                id: "hs-eu-cookie-disclaimer",
                dangerouslySetInnerHTML: W(_.text.disclaimer),
                tabIndex: g,
              }),
            ft("div", {
              id: "hs-eu-cookie-confirmation-buttons-area",
              children: ft("div", {
                id: "hs-eu-confirmation-button-group",
                children: [
                  m &&
                    ft("button", {
                      onClick: () => n(),
                      id: "hs-eu-cookie-settings-button",
                      dangerouslySetInnerHTML: W(_.text.cookieSettingsLabel),
                      "aria-label": _.text.cookieSettingsLabel,
                      tabIndex: g,
                    }),
                  ft("div", {
                    id: "hs-eu-opt-in-buttons",
                    children: [
                      ft("button", {
                        id: "hs-eu-confirmation-button",
                        onClick: () => t(f),
                        dangerouslySetInnerHTML: W(_.text.acceptLabel),
                        "aria-label": _.text.acceptLabel,
                        ref: h,
                        tabIndex: g,
                      }),
                      p &&
                        ft("button", {
                          id: "hs-eu-decline-button",
                          onClick: () => o(),
                          dangerouslySetInnerHTML: W(_.text.declineLabel),
                          ref: d,
                          "aria-label": _.text.declineLabel,
                          tabIndex: g,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    function yt({
      category: e,
      disabled: t,
      onToggleChange: n,
      toggleValue: o,
    }) {
      const i = "hs-category-toggle-" + e,
        s = i + "-help-text";
      return ft("div", {
        className: "hs-toggle-switch " + (o ? "hs-toggle-selected-flag" : ""),
        children: [
          ft("div", { className: "hs-toggle-switch-nob" }),
          ft("label", {
            htmlFor: i,
            children: ft("span", {
              className: "hs-hidden",
              id: s,
              children: `${e} cookies ${o ? "allowed" : "disallowed"}`,
            }),
          }),
          ft("input", {
            id: i,
            className: "hs-toggle-switch-input",
            type: "checkbox",
            onChange: (e) => n(e.currentTarget.checked),
            checked: o,
            disabled: t,
            "aria-pressed": o,
            tabIndex: 0,
            "aria-describedby": s,
            "data-test-id": i,
          }),
        ],
      });
    }
    function vt({ className: e }) {
      return ft("svg", {
        version: "1.1",
        id: "plus-icon-svg",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 32 32",
        className: e,
        children: ft("path", {
          fill: "currentColor",
          d: "M22.6,15.3c-0.1-0.1-0.1-0.2-0.2-0.2l0,0l-0.1-0.2l0,0l0,0l0,0L12.1,4.2c-0.2-0.2-0.6-0.5-1.1-0.5 c-0.9,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.7,0.4,1l0,0l9.3,9.7l-9.3,9.7c-0.3,0.3-0.6,0.7-0.6,1.1c0,0.9,0.7,1.5,1.5,1.5 c0.5,0,1-0.2,1.2-0.6l0,0l10.2-10.7l0,0l0,0l0,0l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0-0.1,0.1-0.2,0.1-0.2l0,0 c0-0.1,0.1-0.2,0.1-0.3l0,0c0-0.1,0-0.2-0.1-0.3l0,0v-0.1C22.6,15.5,22.6,15.4,22.6,15.3L22.6,15.3L22.6,15.3z",
        }),
      });
    }
    function Ct(e, t) {
      if (!t) return !1;
      const n = e.getBoundingClientRect(),
        o = t.getBoundingClientRect();
      return (
        n.top >= o.top &&
        n.left >= o.left &&
        n.bottom <= o.bottom &&
        n.right <= o.right
      );
    }
    function xt({
      category: e,
      onToggleChange: t,
      sectionText: n,
      toggleValue: o,
      modalBodyRef: i,
    }) {
      const [s, r] = ot(!1),
        a = e === p.NECESSARY,
        c = rt(null),
        l = rt(null),
        h = () => {
          r(!s);
        };
      st(() => {
        if (s) {
          const e = c.current;
          e &&
            e.scrollIntoView &&
            !Ct(e, i.current) &&
            e.scrollIntoView({ behavior: "smooth" });
        }
      }, [s, i, c]);
      return ft("div", {
        className: "hs-category-row",
        ref: c,
        children: [
          ft("div", {
            className: "hs-category-row-header",
            children: [
              ft("button", {
                id: "hs-category-" + e,
                className: "hs-category-label",
                onClick: h,
                "aria-expanded": s,
                "aria-controls": "hs-category-description-" + e,
                tabIndex: 0,
                children: [
                  ft(vt, {
                    className:
                      "description-accordion-arrow " + (s ? "rotated" : ""),
                  }),
                  ft("span", { dangerouslySetInnerHTML: W(n.label) }),
                ],
              }),
              !a &&
                ft(yt, {
                  category: e,
                  disabled: e === p.NECESSARY,
                  onToggleChange: (e) => t(e),
                  toggleValue: o,
                }),
              n.toggleLabel &&
                ft("span", {
                  className: "hs-always-active-label",
                  dangerouslySetInnerHTML: W(n.toggleLabel),
                  tabIndex: 0,
                  "aria-label": n.toggleLabel,
                }),
            ],
          }),
          ft("div", {
            className: "hs-category-description " + (s ? "visible" : ""),
            ref: l,
            style: {
              maxHeight: s && l.current ? 2 * l.current.scrollHeight : 0,
            },
            id: "hs-category-description-" + e,
            dangerouslySetInnerHTML: W(n.description),
            tabIndex: 0,
          }),
        ],
      });
    }
    var St = n(1),
      wt = n.n(St),
      Tt = n(2),
      kt = n.n(Tt);
    const Ot = (e, t, n, o, i) => {
      const s = e.getDocument(),
        r = s.createElement("style");
      r.setAttribute("type", "text/css");
      r.setAttribute("id", o);
      const a = new RegExp("https://api_base_url", "g"),
        c = i ? t.replace(a, i) : t,
        l = s.createTextNode(c);
      r.appendChild(l);
      s.head.appendChild(r);
    };
    function Et(e, t, n) {
      if (!e.getHasLoadedBaseStyle()) {
        Ot(e, wt.a, t, y, n);
        e.setHasLoadedBaseStyle(!0);
      }
    }
    function It(e, t) {
      if (!e.getHasLoadedCbcStyle()) {
        Ot(e, kt.a, t, v);
        e.setHasLoadedCbcStyle(!0);
      }
    }
    function At({
      accentColor: e,
      consent: t,
      context: n,
      modalText: o,
      onAcceptCategories: i,
      onCloseModal: s,
    }) {
      const r = rt(null),
        a = rt(null),
        c = rt(null),
        l = rt(null);
      st(() => {
        r.current && pt(n, r.current, a.current, c.current);
      }, [n, r, a, c]);
      const [h, d] = ot(t.categories.analytics),
        [u, g] = ot(t.categories.advertisement),
        [_, b] = ot(t.categories.functionality),
        y = () => {
          i({ [p.ANALYTICS]: h, [p.ADVERTISEMENT]: u, [p.FUNCTIONALITY]: _ });
        },
        v = () => {
          d(!0);
          g(!0);
          b(!0);
          i({
            [p.ANALYTICS]: !0,
            [p.ADVERTISEMENT]: !0,
            [p.FUNCTIONALITY]: !0,
          });
        };
      It(n, e);
      return ft("div", {
        id: f,
        "data-nosnippet": "true",
        children: ft("div", {
          id: m,
          ref: r,
          role: "alertdialog",
          "aria-modal": "true",
          "aria-labelledby": "hs-modal-introduction",
          "aria-describedby": "hs-modal-introduction-description",
          tabIndex: 0,
          children: [
            ft("div", {
              id: "hs-modal-header",
              children: ft("div", {
                id: "hs-modal-header-container",
                children: ft("button", {
                  id: "hs-modal-close-button",
                  className: "hs-close-button",
                  onClick: () => s(),
                  ref: a,
                  tabIndex: 0,
                  "aria-label": "Close modal",
                  children: ft(mt, {}),
                }),
              }),
            }),
            ft("div", {
              id: "hs-modal-body",
              ref: l,
              children: ft("div", {
                id: "hs-modal-body-container",
                children: [
                  ft("div", {
                    id: "hs-modal-introduction",
                    children: ft("span", {
                      dangerouslySetInnerHTML: W(o.introduction.label),
                    }),
                  }),
                  ft("div", {
                    id: "hs-modal-introduction-description",
                    children: ft("p", {
                      dangerouslySetInnerHTML: W(o.introduction.description),
                    }),
                  }),
                  ft("div", {
                    id: "hs-categories-container",
                    children: [
                      ft(xt, {
                        category: p.NECESSARY,
                        onToggleChange: () => {},
                        sectionText: o.necessary,
                        toggleValue: !0,
                        modalBodyRef: l,
                      }),
                      ft(xt, {
                        category: p.ANALYTICS,
                        onToggleChange: (e) => d(e),
                        sectionText: o.analytics,
                        toggleValue: h,
                        modalBodyRef: l,
                      }),
                      ft(xt, {
                        category: p.ADVERTISEMENT,
                        onToggleChange: (e) => g(e),
                        sectionText: o.advertisement,
                        toggleValue: u,
                        modalBodyRef: l,
                      }),
                      ft(xt, {
                        category: p.FUNCTIONALITY,
                        onToggleChange: (e) => b(e),
                        sectionText: o.functionality,
                        toggleValue: _,
                        modalBodyRef: l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            ft("div", {
              id: "hs-modal-footer",
              children: ft("div", {
                id: "hs-modal-footer-container",
                children: [
                  ft("button", {
                    id: "hs-modal-accept-all",
                    onClick: () => v(),
                    tabIndex: 0,
                    children: o.acceptLabel,
                  }),
                  ft("button", {
                    id: "hs-modal-save-settings",
                    onClick: y,
                    ref: c,
                    tabIndex: 0,
                    children: o.saveSettingsLabel,
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    function Lt({
      apiBaseUrl: e,
      consent: t,
      setting: n,
      context: o,
      onConsentChange: i,
      onCloseBannerWithoutConsent: s,
      dismissNotifyBanner: r,
    }) {
      const [a, c] = ot(!1),
        l = (e) => {
          if (e !== J.NOTIFY) {
            t.update(!0);
            i(t);
          } else r();
        },
        h = () => {
          t.update(!1);
          i(t);
        },
        d = ({ analytics: e, advertisement: n, functionality: o }) => {
          t.updateCategories({
            analytics: e,
            advertisement: n,
            functionality: o,
          });
          i(t);
        },
        g = (e) => {
          if (e !== J.OPT_IN && e !== J.COOKIES_BY_CATEGORY)
            if (e !== J.NOTIFY) {
              t.update(!0);
              i(t);
            } else r();
          else s();
        },
        _ = () => {
          c(!0);
        },
        f = () => {
          c(!1);
          const e = o.getDocument().getElementById(u);
          e && e.focus();
        };
      Et(o, n.customizationSettings.accentColor, e);
      return ft(Te, {
        children: [
          ft(bt, {
            context: o,
            setting: n,
            onAcceptAll: l,
            onDeclineAll: h,
            onCookieSettingsClick: _,
            onCloseBannerButtonClick: g,
            isModalDisplayed: a,
          }),
          a &&
            ft(At, {
              accentColor: n.customizationSettings.accentColor,
              consent: t,
              context: o,
              modalText: n.policy.text.modalText,
              onAcceptCategories: d,
              onCloseModal: f,
            }),
        ],
      });
    }
    function Nt({ apiBaseUrl: e, context: t, setting: n, onCloseBanner: o }) {
      Et(t, n.customizationSettings.accentColor, e);
      return ft("div", {
        id: g,
        "data-nosnippet": "true",
        role: "dialog",
        "aria-describedby": "hs-banner-gpc-wording",
        children: ft("div", {
          id: "hs-banner-gpc-inner",
          children: [
            ft("div", {
              id: "hs-banner-gpc-header",
              children: ft("button", {
                id: "hs-banner-gpc-close-button",
                className: "hs-close-button",
                onClick: o,
                "aria-label": "Dismiss banner",
                children: ft(mt, {}),
              }),
            }),
            ft("div", {
              id: "hs-banner-gpc-wording",
              dangerouslySetInnerHTML: W(n.gpcSettings.notificationText),
            }),
          ],
        }),
      });
    }
    var Bt = [
      "helvetica",
      "arial",
      "arial-black",
      "verdana",
      "tahoma",
      "trebuchet ms",
      "impact",
      "times new roman",
      "georgia",
      "palatino",
      "courier",
      "comic sans ms",
      "courier new",
      "sans-serif",
      "system-ui",
    ];
    function Rt(e) {
      return `${E}?family=${e}:ital,wght@${O.join(";")}&display=swap`;
    }
    function Pt(e, t) {
      const n = t || "Lato",
        o = e.getDocument(),
        i = e.getWindow();
      if (Bt.indexOf(n.toLowerCase()) > -1) return;
      if (i[k]) return;
      const s = o.createElement("link");
      s.setAttribute("href", Rt(n));
      s.setAttribute("rel", "stylesheet");
      s.setAttribute("class", T);
      o.head.appendChild(s);
      i[k] = !0;
    }
    const Dt = (e, t) => {
      const n = e.getDocument().createElement("div");
      n.setAttribute("id", _);
      n.setAttribute("style", t);
      const o = e.getDocument().body;
      o.insertBefore(n, o.firstChild);
      return n;
    };
    function Gt(e, t, n, o, i, s, r, a, c) {
      const l = Dt(i, o);
      Pt(i, c);
      We(
        ft(Lt, {
          apiBaseUrl: e,
          consent: t,
          setting: n,
          context: i,
          onConsentChange: (e) => s(e),
          onCloseBannerWithoutConsent: r,
          dismissNotifyBanner: a,
        }),
        l
      );
      return l;
    }
    function Mt(e, t, n, o, i, s) {
      const r = Dt(t, o);
      Pt(t, s);
      We(
        ft(Nt, { apiBaseUrl: e, context: t, setting: n, onCloseBanner: i }),
        r
      );
      return r;
    }
    class Ut {
      static postActivity(e, t, n) {
        fetch(e, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        })
          .then(() => B.info(`Sent a banner ${t} event.`))
          .catch(() =>
            B.error(`There was an issue sending a banner ${t} event.`)
          );
      }
      static sendView(e, t) {
        Ut.postActivity(e + "/activity/view", "VIEW", t);
      }
      static sendClick(e, t) {
        Ut.postActivity(e + "/activity/click", "CLICK", t);
      }
    }
    let Ft;
    !(function (e) {
      e[(e.ROUND = 0)] = "ROUND";
      e[(e.SQUARE = 1)] = "SQUARE";
      e[(e.PILL = 2)] = "PILL";
    })(Ft || (Ft = {}));
    const Yt = { [Ft.ROUND]: "0.5em", [Ft.SQUARE]: "0", [Ft.PILL]: "3em" },
      Vt = { [Ft.ROUND]: "12px", [Ft.SQUARE]: "0", [Ft.PILL]: "0" },
      Ht = (e) => null == e,
      zt = (e, t) => (t ? [{ cssVar: e, value: t }] : []),
      Wt = (e, t) => (t ? [{ cssVar: e, value: t }] : []),
      $t = (e, t) => (t ? [{ cssVar: e, value: `${t.number}${t.units}` }] : []),
      qt = (e, t) => (Ht(t) ? [] : [{ cssVar: e, value: Yt[t] }]),
      Kt = (e, t) => (Ht(t) ? [] : [{ cssVar: e, value: Vt[t] }]),
      jt = (e, t) =>
        Ht(t)
          ? []
          : [
              ...Wt(`--hs-banner-${e}-color`, t.color),
              ...Wt(`--hs-banner-${e}-text-color`, t.textColor),
              ...Wt(`--hs-banner-${e}-border-color`, t.borderColor),
            ],
      Jt = (e) =>
        Ht(e)
          ? []
          : [
              {
                cssVar: "--hs-banner-close-button-display",
                value: e ? "flex" : "none",
              },
            ],
      Qt = (e) => {
        if (Ht(e)) return [];
        switch (U.fromJS(e)) {
          case U.BOTTOM:
            return [
              { cssVar: "--hs-banner-inset", value: "auto 50% 32px" },
              { cssVar: "--hs-banner-translate-x", value: "-50%" },
              { cssVar: "--hs-banner-translate-y", value: "0" },
            ];
          case U.BOTTOM_LEFT:
            return [
              { cssVar: "--hs-banner-inset", value: "auto auto 32px 32px" },
              { cssVar: "--hs-banner-translate-x", value: "0" },
              { cssVar: "--hs-banner-translate-y", value: "0" },
            ];
          case U.BOTTOM_RIGHT:
            return [
              { cssVar: "--hs-banner-inset", value: "auto 32px 32px auto" },
              { cssVar: "--hs-banner-translate-x", value: "0" },
              { cssVar: "--hs-banner-translate-y", value: "0" },
            ];
          case U.CENTER:
            return [
              { cssVar: "--hs-banner-inset", value: "50% auto auto 50%" },
              { cssVar: "--hs-banner-translate-x", value: "-50%" },
              { cssVar: "--hs-banner-translate-y", value: "-50%" },
            ];
          default:
            return [
              { cssVar: "--hs-banner-inset", value: "32px auto auto 50%" },
              { cssVar: "--hs-banner-translate-x", value: "-50%" },
              { cssVar: "--hs-banner-translate-y", value: "0" },
            ];
        }
      },
      Zt = (e) => e.map((e) => `${e.cssVar}:${e.value}`).join(";"),
      Xt = (e) => [
        ...Wt("--hs-banner-color", e.bannerColor),
        ...Wt("--hs-banner-text-color", e.bannerTextColor),
        ...Wt(
          "--hs-banner-settings-text-color",
          e.bannerSettingsButtonTextColor
        ),
        ...$t("--hs-banner-width", e.bannerWidth),
        ...$t("--hs-banner-padding", e.bannerPadding),
        ...Kt("--hs-banner-corners", e.bannerCorners),
        ...qt("--hs-banner-button-corners", e.bannerButtonCorners),
        ...jt("accept", e.bannerAcceptButtonStyle),
        ...jt("decline", e.bannerDeclineButtonStyle),
        ...Jt(e.showCloseButton),
        ...Qt(e.position),
        ...Wt("--hs-banner-modal-color", e.modalColor),
        ...Wt("--hs-banner-modal-text-color", e.modalTextColor),
        ...$t("--hs-banner-modal-padding", e.modalContainerPadding),
        ...$t("--hs-banner-modal-width", e.modalWidth),
        ...Kt("--hs-banner-modal-corners", e.modalCorners),
        ...qt("--hs-banner-modal-button-corners", e.modalButtonCorners),
        ...jt("modal-accept", e.modalAcceptButtonStyle),
        ...jt("modal-save", e.modalSaveSettingsButtonStyle),
        ...Kt("--hs-banner-modal-category-corners", e.modalCategoryCorners),
        ...Wt("--hs-banner-modal-cateogry-color", e.modalCategoryColor),
        ...Wt(
          "--hs-banner-modal-category-text-color",
          e.modalCategoryTextColor
        ),
        ...Wt(
          "--hs-banner-modal-toggle-on-color",
          e.modalCategoryToggleOnColor
        ),
        ...Wt(
          "--hs-banner-modal-toggle-off-color",
          e.modalCategoryToggleOffColor
        ),
        ...zt("--hs-banner-font-family", e.fontFamily),
        ...$t("--hs-banner-font-size", e.fontSize),
      ],
      en = (e) => [
        ...Wt("--hs-banner-accentColor", e.accentColor),
        ...Qt(e.position.getValue()),
        ...Jt(e.showCloseButton),
      ],
      tn = (e) => {
        const t = {};
        if (!e) return t;
        const n = e.indexOf("-"),
          [o, i] =
            -1 === n ? [e, void 0] : [e.substring(0, n), e.substring(n + 1)];
        o && (t.countryCode = o);
        i && (t.regionCode = i);
        return t;
      };
    var nn = n(3);
    const on = (e) =>
        e.stack
          ? nn
              .parse(e.stack)
              .map((e) => ({
                filename: e.file,
                function: e.methodName,
                args: e.arguments,
                lineno: e.lineNumber,
                colno: e.column,
              }))
          : [],
      sn = () => {
        if (!document.currentScript) return null;
        const e = document.currentScript.getAttribute("src");
        return e ? (e.toLowerCase().includes("eu1") ? "eu1" : "na1") : null;
      },
      rn = () => {
        if (!document.currentScript) return null;
        const e = document.currentScript.getAttribute("src");
        if (!e) return null;
        const t = new RegExp("/v2/(\\d+)/banner.js"),
          n = e.match(t);
        return n ? n[1] : null;
      },
      an =
        (() => {
          if (!document.currentScript) return null;
          const e = document.currentScript.getAttribute("src");
          return e ? (e.toLowerCase().includes("qa") ? "qa" : "prod") : null;
        })() || "prod",
      cn = sn() || "na1",
      ln = rn(),
      hn = "https://exceptions{{hublet}}.hs-embed-reporting{{env}}.com/outpost",
      dn = () =>
        "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
          (
            e ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
          ).toString(16)
        ),
      un = () => ("randomUUID" in crypto ? crypto.randomUUID() : dn()),
      gn = (e, t) => {
        const n = "na1" !== e ? "-" + e : "",
          o = "qa" === t ? "qa" : "";
        return hn.replace("{{hublet}}", n).replace("{{env}}", o);
      },
      _n = (e, t, n, o) => {
        const i = Date.now() / 1e3,
          s = on(e);
        return {
          level: "error",
          environment: t,
          tags: { region: n, hostname: window.location.hostname, portalId: ln },
          logger: "javascript",
          platform: "javascript",
          request: {
            headers: { "User-Agent": navigator.userAgent },
            url: window.location.href,
          },
          event_id: un().replace(/-/g, ""),
          transaction: s.length > 0 ? s[0].function : "unknown function",
          exception: {
            values: [
              {
                mechanism: { handled: !0, type: "generic" },
                type: e.name,
                value: e.message,
                stacktrace: { frames: s },
              },
            ],
          },
          timestamp: i,
          extra: o,
        };
      },
      fn = (e) => {
        new Image().src = e;
      },
      mn = (e, t) => {
        const n = e instanceof Error ? e : new Error(String(e)),
          o = _n(n, an, cn, t || {});
        fn(
          `${gn(cn, an)}/cookie-banner-v2/raw/error.gif?url=${
            o.request.url
          }\n    &report=${encodeURIComponent(JSON.stringify(o))}`
        );
      },
      pn = (e, t) => {
        try {
          e();
        } catch (e) {
          console.error(e);
          t && t(e);
        }
      },
      bn = (e) => {
        if (!e.hsCookieBanner) return;
        const t = e.hsCookieBanner.rawPerfMetrics;
        if (!t) return;
        const n = [
          "numSettings",
          "bannerInitAt",
          "bannerStartAt",
          "bannerReadyAt",
        ];
        for (const e of n) if (null == t[e]) return;
        const o =
          null == t.geolocationReceivedAt || null == t.geolocationRequestedAt;
        return t.usesGeolocation && o
          ? void 0
          : {
              numSettings: t.numSettings,
              bannerInitAt: t.bannerInitAt,
              bannerStartAt: t.bannerStartAt,
              bannerReadyAt: t.bannerReadyAt,
              matchedBannerType: t.matchedBannerType,
              usesGpc: t.usesGpc,
              geolocationRequestInCriticalPath:
                t.geolocationRequestInCriticalPath,
              geolocationRequestDuration: t.usesGeolocation
                ? t.geolocationReceivedAt - t.geolocationRequestedAt
                : void 0,
              bannerRendered: t.bannerRendered,
            };
      },
      yn = () => ({
        numSettings: void 0,
        bannerInitAt: void 0,
        bannerStartAt: void 0,
        bannerReadyAt: void 0,
        matchedBannerType: void 0,
        usesGpc: !1,
        usesGeolocation: !1,
        geolocationRequestInCriticalPath: !1,
        geolocationReceivedAt: void 0,
        geolocationRequestedAt: void 0,
        bannerRendered: !1,
      }),
      vn = () =>
        window.performance.now ? Math.round(window.performance.now()) : void 0,
      Cn = (e, t, n) => {
        try {
          if (!e.hsCookieBanner || !e.hsCookieBanner.rawPerfMetrics) return;
          e.hsCookieBanner.rawPerfMetrics[t] = n;
        } catch (e) {
          mn(e);
        }
      };
    function xn(...e) {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    }
    const Sn = (e, t) => !!((e && !w.includes(e)) || (t && J.isOptIn(t))),
      wn = (e, t, n) => {
        const o = tn(t).countryCode;
        if (!Sn(o, n)) return;
        const i = e.categories.advertisement ? "granted" : "denied";
        xn("consent", "update", {
          ad_storage: i,
          analytics_storage: e.categories.analytics ? "granted" : "denied",
          ad_user_data: i,
          ad_personalization: i,
        });
      },
      Tn = (e) =>
        fetch(e).then((t) => {
          if (!t.ok) throw new Error(`Non-2XX status: ${t.status}, url: ${e}`);
          return t.text();
        }),
      kn = async (e) => {
        const t = e + "/cf-location",
          n = await Tn(t).catch((e) => {
            mn(e, { failingComponent: "cfGeolocationWorkerRequest" });
            return null;
          });
        if (n) return n;
        const o = `https://${
          new URL(e).hostname
        }/cookie-banner-public/v2/cf-location`;
        return Tn(o);
      },
      On = "wildcard.hs-banner.com",
      En = (e) => {
        e.configuration.wildcard = !0;
        return e;
      };
    class In {
      constructor(e) {
        this.publicMethods = [
          "showBanner",
          "hideBanner",
          "addPrivacyConsentListener",
          "setApiBaseUrl",
          "setCookiesToSubdomain",
          "setUseSecureCookies",
          "addCookieDomain",
          "addEnabledFeatureGates",
          "setBannerSettings",
          "setCustomizationSettings",
          "setUseGeoLocation",
          "setGeoLocation",
          "addPrivacySettingsListener",
          "revokeCookieConsent",
          "useGoogleConsentModeV2",
          "useV2Wildcard",
        ];
        this.enabledFeatureGates = [];
        this.useWildcard = !0;
        this.context = e;
        this.bannerSettings = [];
        this.privacyConsentListeners = [];
        this.privacySettingsListeners = [];
        this.useGeoLocation = !1;
        this.useGCMV2 = !1;
        this.reportedMissingGeolocation = !1;
        this.cookie = new le(e);
        this.isRunningInTestMode = e.getLocation().search.includes(d);
        this.removeDeprecatedBannerCookies();
      }
      removeDeprecatedBannerCookies() {
        this.cookie.get(de.OPT_OUT_COOKIE.getName()) &&
          this.cookie.remove(de.OPT_OUT_COOKIE.getName());
        this.cookie.get(de.INITIAL_OPT_IN.getName()) &&
          this.cookie.remove(de.INITIAL_OPT_IN.getName());
      }
      run() {
        const e = this.context.getWindow();
        if (this.disableBannerFlagSet()) {
          B.info(
            '"PRIVACY" flag found in disabledHsPopups window queue. Banner script will not run.'
          );
          return !0;
        }
        Cn(e, "numSettings", this.bannerSettings.length);
        this.findMatchingSetting();
        this.logGpcSignal();
        if (!this.matchedSetting) {
          B.debug(
            "we were unable to find the matching settings for this webpages. The banner will not run."
          );
          this.setConsent(new ie(!0), { reportClick: !1 });
          return !1;
        }
        Cn(e, "matchedBannerType", this.matchedSetting.policy.type.getValue());
        if (this.shouldScanningOverride()) {
          this.setConsent(new ie(!0), {
            reportClick: !1,
            persist: !0,
            treatAsConsentEvent: !0,
          });
          return !0;
        }
        const t = !!this.shouldGpcOverride();
        Cn(e, "usesGpc", t);
        if (t) {
          this.setConsent(new ie(!1), { persist: !1, reportClick: !1 });
          this.isGpcBannerDismissCookiePresent() || this.renderGpcBanner();
          return !0;
        }
        switch (this.matchedSetting.policy.type) {
          case J.NO_COOKIES:
            this.setConsent(new ie(!1), { reportClick: !1 });
            break;
          case J.OPT_IN:
          case J.COOKIES_BY_CATEGORY:
            if (this.useConsentFromExistingCookie()) break;
            this.cookie.removeGACookie();
            this.setConsent(ie.buildInitialConsent(), {
              persist: !1,
              reportClick: !1,
            });
            this.renderBanner();
            break;
          case J.OPT_OUT_BY_CATEGORY:
          case J.OPT_OUT:
            if (this.useConsentFromExistingCookie()) break;
            this.setConsent(new ie(!0), { persist: !1, reportClick: !1 });
            this.renderBanner();
            break;
          case J.NOTIFY:
            this.setConsent(new ie(!0), { persist: !1, reportClick: !1 });
            if (this.isNotifyBannerDismissCookiePresent()) break;
            this.renderBanner();
            break;
          case J.COOKIES_WITHOUT_BANNER:
          default:
            this.setConsent(new ie(!0), { reportClick: !1 });
        }
        return !0;
      }
      useConsentFromExistingCookie() {
        const e = this.readConsentCookie();
        if (e) {
          this.setConsent(e, { persist: !1, reportClick: !1 });
          e.hasAnalyticsConsent() || this.cookie.removeGACookie();
          return !0;
        }
        return !1;
      }
      shouldScanningOverride() {
        return (
          [
            J.OPT_OUT,
            J.OPT_OUT_BY_CATEGORY,
            J.COOKIES_BY_CATEGORY,
            J.OPT_IN,
            J.NOTIFY,
          ].includes(this.matchedSetting.policy.type) &&
          this.context.getWindow()[c]
        );
      }
      shouldGpcOverride() {
        return this.matchedSetting.gpcSettings.enabled && this.getGpcSignal();
      }
      getGpcSignal() {
        const e = this.context.getLocation().search;
        if (e.includes(a)) {
          return { TRUE: !0, FALSE: !1 }[
            (new URLSearchParams(e).get(a) || "").toUpperCase()
          ];
        }
        return this.context.getNavigator().globalPrivacyControl;
      }
      logGpcSignal() {
        B.debug("GPC signal: " + this.getGpcSignal());
      }
      findMatchingSetting() {
        const e = this.context.getPathname(),
          { countryCode: t, regionCode: n } = tn(this.geoLocation),
          o = this.bannerSettings
            .filter((e) => e.enabled)
            .map((o) => ({
              setting: o,
              matchResult: o.configuration.test(e, t, n, this.useWildcard),
            }))
            .reduce((e, t) => (D(e.matchResult, t.matchResult) ? e : t), {
              setting: null,
              matchResult: R,
            });
        P(o.matchResult) &&
          o.setting &&
          this.setMatchingSetting(o.setting.withSanitizedPolicy());
      }
      setMatchingSetting(e) {
        this.matchedSetting = e;
        if (0 === this.privacySettingsListeners.length) return;
        const t = e.toLegacyPrivacyPolicy();
        this.privacySettingsListeners.forEach((e) =>
          this.safeCallListener(e, t)
        );
      }
      getMatchingSetting() {
        return this.matchedSetting;
      }
      hasEnabledFeatureGate(e) {
        return this.enabledFeatureGates && this.enabledFeatureGates.includes(e);
      }
      setApiBaseUrl(e) {
        /^https:\/\/js-?.{0,3}\.hs-banner(qa)?\.com.*/.test(e)
          ? (this.apiBaseUrl = e)
          : B.error("unsupported base Api url provided.");
      }
      setBannerSettings(e) {
        (e[this.context.getLocation().hostname] || []).forEach((e) =>
          this.bannerSettings.push(X.fromJS(e))
        );
        (e[On] || []).forEach((e) => this.bannerSettings.push(En(X.fromJS(e))));
      }
      setCustomizationSettings(e) {
        const t = e[this.context.getLocation().hostname];
        this.styleOverrides = t;
        this.bannerParentElement &&
          this.bannerParentElement.setAttribute(
            "style",
            this.getRenderStyles()
          );
      }
      getCurrentGeoLocation() {
        const e = this.context.getWindow();
        Cn(e, "usesGeolocation", !0);
        Cn(e, "geolocationRequestedAt", vn());
        const t = this.context.getLocation().search;
        if (t.includes(r)) {
          const e = new URLSearchParams(t).get(r);
          return Promise.resolve(e || "");
        }
        return kn(this.apiBaseUrl)
          .then((t) => {
            Cn(e, "geolocationReceivedAt", vn());
            return t;
          })
          .catch((e) => {
            B.error("We could not fetch the geolocation.");
            mn(e);
            return "";
          });
      }
      setGeoLocation(e) {
        this.geoLocation = e;
        const { countryCode: t } = tn(this.geoLocation);
        try {
          null == t && this.reportEmptyGeolocation();
        } catch (e) {
          console.error("Failed to report missing geolocation data", e);
        }
      }
      addEnabledFeatureGates(e) {
        e.forEach((e) => this.enabledFeatureGates.push(e));
      }
      addCookieDomain(e) {
        this.cookie.addDomain(e);
      }
      setCookiesToSubdomain(e) {
        this.cookie.setCookiesToSubdomain(e);
      }
      setUseSecureCookies(e) {
        this.cookie.setUseSecureCookies(e);
      }
      setUseGeoLocation() {
        this.useGeoLocation = !0;
      }
      useGoogleConsentModeV2() {
        if (!this.useGCMV2) {
          this.useGCMV2 = !0;
          this.consent && this.sendConsentToGCMV2(this.consent.getSafeCopy());
        }
      }
      sendConsentToGCMV2(e) {
        const t =
          this.matchedSetting &&
          this.matchedSetting.policy &&
          this.matchedSetting.policy.type;
        if (this.geoLocation) wn(e, this.geoLocation, t);
        else {
          null == this.gcmGeoLocationFetchPromise &&
            (this.gcmGeoLocationFetchPromise =
              this.getCurrentGeoLocation().then((e) => {
                this.setGeoLocation(e);
                return e;
              }));
          this.gcmGeoLocationFetchPromise
            .then((n) => {
              wn(e, n, t);
            })
            .catch((e) => {
              mn(e);
            });
        }
      }
      addPrivacyConsentListener(e) {
        this.consent && this.safeCallListener(e, this.consent.getSafeCopy());
        this.privacyConsentListeners.push(e);
      }
      setConsent(e, t) {
        const n = { persist: !0, treatAsConsentEvent: !0, reportClick: !0 },
          {
            persist: o,
            treatAsConsentEvent: i,
            reportClick: s,
          } = Object.assign({}, n, t);
        this.consent = e;
        i && this.hideBanner();
        o && this.setConsentCookie();
        if (!this.isRunningInTestMode) {
          s &&
            (this.consent.hasAnalyticsConsent()
              ? this.trackAction("trackApproveCookieConsent")
              : this.trackAction("trackDeclineCookieConsent"));
          if (i) {
            this.privacyConsentListeners.forEach((t) =>
              this.safeCallListener(t, e.getSafeCopy())
            );
            this.useGCMV2 && this.sendConsentToGCMV2(e.getSafeCopy());
            this.consent.adsHasChangedToFalse() &&
              this.cookie.removeFBPCookie();
          }
          s && this.sendClickActivity();
        }
      }
      getConsent() {
        return this.consent.getSafeCopy();
      }
      setConsentCookie() {
        if (!this.matchedSetting || this.isRunningInTestMode) return;
        const e = this.matchedSetting.policy.type;
        e !== J.NO_COOKIES &&
          e !== J.COOKIES_WITHOUT_BANNER &&
          e !== J.NOTIFY &&
          this.cookie.set(
            de.CATEGORY_PREFERENCE_COOKIE.getName(),
            this.consent.toCookieString(),
            {
              daysToExpire: de.CATEGORY_PREFERENCE_COOKIE.getExpirationDays(),
              path: "/",
            }
          );
      }
      readConsentCookie() {
        const e = this.cookie.get(de.CATEGORY_PREFERENCE_COOKIE.getName());
        return e ? ie.buildFromCookieString(e) : null;
      }
      safeCallListener(e, t) {
        try {
          e(t);
        } catch (e) {
          B.error("error calling listener.");
        }
      }
      isGpcBannerDismissCookiePresent() {
        return !!this.cookie.get(de.GPC_BANNER_DISMISS_COOKIE.getName());
      }
      setGpcBannerDismissCookie() {
        this.cookie.set(de.GPC_BANNER_DISMISS_COOKIE.getName(), "true", {
          daysToExpire: de.GPC_BANNER_DISMISS_COOKIE.getExpirationDays(),
          path: "/",
        });
      }
      isNotifyBannerDismissCookiePresent() {
        return !!this.cookie.get(de.NOTIFY_BANNER_DIMISS_COOKIE.getName());
      }
      setNotifyBannerDismissCookie() {
        this.cookie.set(de.NOTIFY_BANNER_DIMISS_COOKIE.getName(), "true", {
          daysToExpire: de.NOTIFY_BANNER_DIMISS_COOKIE.getExpirationDays(),
          path: "/",
        });
      }
      dismissNotifyBanner() {
        this.hideBanner();
        this.setNotifyBannerDismissCookie();
      }
      dismissGpcBanner() {
        this.hideBanner();
        this.setGpcBannerDismissCookie();
      }
      getRenderStyles() {
        try {
          if (this.styleOverrides) {
            B.debug("using style overrides");
            return Zt(Xt(this.styleOverrides));
          }
          if (this.matchedSetting) {
            B.debug("using legacy customization render styles");
            return Zt(en(this.matchedSetting.customizationSettings));
          }
        } catch (e) {
          console.error("unable to utilize style overrides", e);
        }
        return "";
      }
      renderGpcBanner() {
        this.bannerParentElement = Mt(
          this.apiBaseUrl,
          this.context,
          this.matchedSetting,
          this.getRenderStyles(),
          this.dismissGpcBanner.bind(this),
          this.styleOverrides && this.styleOverrides.fontFamily
        );
        Cn(this.context.getWindow(), "bannerRendered", !0);
        this.sendViewActivity();
      }
      renderBanner() {
        this.bannerParentElement = Gt(
          this.apiBaseUrl,
          this.consent,
          this.matchedSetting,
          this.getRenderStyles(),
          this.context,
          this.setConsent.bind(this),
          this.hideBanner.bind(this),
          this.dismissNotifyBanner.bind(this),
          this.styleOverrides && this.styleOverrides.fontFamily
        );
        Cn(this.context.getWindow(), "bannerRendered", !0);
        this.sendViewActivity();
      }
      hideBanner() {
        if (this.bannerParentElement) {
          const e = this.bannerParentElement.children;
          for (let t = 0; t < e.length; t++) e[t].classList.add(b);
        }
      }
      showBanner() {
        if (
          this.matchedSetting.policy.type === J.NO_COOKIES ||
          this.matchedSetting.policy.type === J.COOKIES_WITHOUT_BANNER
        )
          return;
        this.bannerParentElement ||
          (this.shouldGpcOverride()
            ? this.renderGpcBanner()
            : this.renderBanner());
        const e = this.bannerParentElement.children;
        if (e.length > 1) {
          e[1].classList.remove(b);
        } else e[0].classList.remove(b);
      }
      invoke(e, t) {
        if (!this.publicMethods.includes(e) || !Reflect.has(this, e)) {
          B.debug(`failed to invoke method ${e} of the banner.`);
          throw new Error("Could not invoke banner method.");
        }
        Reflect.get(this, e).apply(this, t);
      }
      getBaseActivityPayload() {
        const e = this.context.getWindow().hsVars,
          t = e && e.page_id;
        return {
          bannerGeoLocation: this.geoLocation || "",
          bannerPolicyId: this.matchedSetting.id,
          bannerType: this.matchedSetting.policy.type.getName(),
          domain: this.context.getHostname(),
          portalId: this.matchedSetting.portalId,
          contentId: t || "",
        };
      }
      sendClickActivity() {
        if (!this.consent || !this.matchedSetting || this.isRunningInTestMode)
          return;
        const e = {
            consentAllowed: this.consent.allowed,
            consentAnalytics: this.consent.categories.analytics,
            consentAdvertisement: this.consent.categories.advertisement,
            consentFunctionality: this.consent.categories.functionality,
          },
          t = Object.assign({}, this.getBaseActivityPayload(), e);
        Ut.sendClick(this.apiBaseUrl, t);
      }
      sendViewActivity() {
        if (!this.matchedSetting || this.isRunningInTestMode) return;
        const e = this.getBaseActivityPayload();
        Ut.sendView(this.apiBaseUrl, e);
      }
      getAnalyticsQueue() {
        return (this.context.getWindow()[s] =
          this.context.getWindow()[s] || []);
      }
      trackAction(e) {
        try {
          this.getAnalyticsQueue().push([e]);
        } catch (e) {
          B.error("Unable to send analytics tracking event: " + e);
        }
      }
      disableBannerFlagSet() {
        const e = this.context.getWindow()[C] || [];
        return Array.isArray(e) && e.includes(x);
      }
      useV2Wildcard(e) {
        this.useWildcard = e;
      }
      revokeCookieConsent() {
        [
          de.INITIAL_OPT_IN.getName(),
          de.OPT_OUT_COOKIE.getName(),
          de.CATEGORY_PREFERENCE_COOKIE.getName(),
          de.GPC_BANNER_DISMISS_COOKIE.getName(),
          de.NOTIFY_BANNER_DIMISS_COOKIE.getName(),
          "__hssc",
          "__hssrc",
          "__hstc",
          "__hs_do_not_track",
          "hubspotutk",
          "messagesUtk",
        ].forEach((e) => this.cookie.remove(e));
        this.trackAction("trackRevokeCookieConsent");
        this.setConsent(new ie(!1), { reportClick: !1 });
      }
      addPrivacySettingsListener(e) {
        this.matchedSetting &&
          this.safeCallListener(e, this.matchedSetting.toLegacyPrivacyPolicy());
        this.privacySettingsListeners.push(e);
      }
      reportEmptyGeolocation() {
        if (!this.reportedMissingGeolocation) {
          this.reportedMissingGeolocation = !0;
          fetch(this.apiBaseUrl + "/geolocation-reporting", {
            keepalive: !0,
          }).catch(() => {
            mn("unable to report missing geolocation data");
          });
        }
      }
    }
    const An = new CustomEvent(S);
    class Ln {
      constructor(e) {
        this.priorityFunctions = [
          "setApiBaseUrl",
          "setCookiesToSubdomain",
          "setUseSecureCookies",
          "addCookieDomain",
          "addEnabledFeatureGates",
          "setBannerSettings",
        ];
        const t = e.getWindow();
        if (Array.isArray(t[i])) this.queue = t[i];
        else {
          this.queue = [];
          t[i] = this.queue;
        }
        this.banner = new In(e);
        this.context = e;
      }
      queuePushFn(e) {
        try {
          if (!(e && Array.isArray(e) && e.length > 0)) {
            B.debug("invalid arguments passed to the banner queue.");
            return !1;
          }
          const t = e[0],
            n = e.slice(1);
          this.banner.invoke(t, n);
          return !0;
        } catch (e) {
          B.error("There was an error running banner method.");
        }
        return !1;
      }
      overrideQueuePush() {
        this.queue.push = this.queuePushFn.bind(this);
      }
      dequeueEntries(e) {
        for (let t = 0; t < this.queue.length; t++) {
          const n = this.queue[t];
          if (!Array.isArray(n) || 0 === n.length) continue;
          const o = n[0];
          if (e.includes(o)) {
            this.queuePushFn(n);
            this.queue.splice(t--, 1);
          }
        }
      }
      dequeueAllEntries() {
        for (let e = 0; e < this.queue.length; e++) {
          const t = this.queue[e];
          if (Array.isArray(t) && 0 !== t.length) {
            this.queuePushFn(t);
            this.queue.splice(e--, 1);
          }
        }
      }
      run() {
        const e = this.context.getWindow(),
          t = this.context.getDocument();
        if (!e[l]) {
          e[l] = !0;
          this.dequeueEntries(["setUseGeoLocation"]);
          this.dequeueEntries(this.priorityFunctions);
          this.dequeueAllEntries();
          this.overrideQueuePush();
          if (this.banner.useGeoLocation) {
            Cn(e, "geolocationRequestInCriticalPath", !0);
            this.banner.getCurrentGeoLocation().then((e) => {
              this.banner.setGeoLocation(e);
              this.banner.run();
              t.dispatchEvent(An);
            });
          } else {
            this.banner.run();
            t.dispatchEvent(An);
          }
        }
      }
    }
    function Nn(e) {
      const t = e.getWindow(),
        n = e.getDocument();
      if (t[o]) {
        B.info("the cookie banner has already been loaded via another script.");
        return;
      }
      t[o] = !0;
      Cn(t, "bannerStartAt", vn());
      n.addEventListener(S, () => {
        Cn(t, "bannerReadyAt", vn());
      });
      new Ln(e).run();
    }
    function Bn(e, t) {
      pn(() => {
        Nn(e);
      }, t);
    }
    function Rn(e, t) {
      const n = e.getWindow(),
        o = e.getDocument();
      n.hsCookieBanner = { rawPerfMetrics: yn(), getPerfMetrics: () => bn(n) };
      Cn(n, "bannerInitAt", vn());
      function i() {
        Bn(e, t);
        o.removeEventListener("DOMContentLoaded", i);
      }
      "loading" === o.readyState
        ? o.addEventListener("DOMContentLoaded", i)
        : Bn(e, t);
    }
    const Pn = L();
    pn(() => {
      Rn(Pn, mn);
    }, mn);
  },
]);
/****** Cookie Banner version static-1.2212 *****/
