var tarteaucitronExpireInDay = true,
  tarteaucitronForceExpire = 365;
var tarteaucitronIsMagicPossible = true;
var tarteaucitronStatsEnabled = true;
tarteaucitronForceCDN = "https://cdn.tarteaucitron.io/";
tarteaucitronUseMin = true;
var scripts = document.getElementsByTagName("script"),
  tarteaucitronPath = (
    document.currentScript || scripts[scripts.length - 1]
  ).src.split("?")[0],
  tarteaucitronForceCDN =
    tarteaucitronForceCDN === undefined ? "" : tarteaucitronForceCDN,
  tarteaucitronUseMin =
    tarteaucitronUseMin === undefined ? "" : tarteaucitronUseMin,
  cdn =
    tarteaucitronForceCDN === ""
      ? tarteaucitronPath.split("/").slice(0, -1).join("/") + "/"
      : tarteaucitronForceCDN,
  alreadyLaunch = alreadyLaunch === undefined ? 0 : alreadyLaunch,
  tarteaucitronForceLanguage =
    tarteaucitronForceLanguage === undefined ? "" : tarteaucitronForceLanguage,
  tarteaucitronForceExpire =
    tarteaucitronForceExpire === undefined ? "" : tarteaucitronForceExpire,
  tarteaucitronCustomText =
    tarteaucitronCustomText === undefined ? "" : tarteaucitronCustomText,
  tarteaucitronExpireInDay =
    tarteaucitronExpireInDay === undefined ||
    typeof tarteaucitronExpireInDay !== "boolean"
      ? true
      : tarteaucitronExpireInDay,
  timeExpire = 31536e6,
  tarteaucitronProLoadServices,
  tarteaucitronNoAdBlocker = false,
  tarteaucitronIsLoaded = false;
var tarteaucitron = {
  version: 1.19,
  cdn: cdn,
  user: {},
  lang: {},
  services: {},
  added: [],
  idprocessed: [],
  state: {},
  launch: [],
  parameters: {},
  isAjax: false,
  reloadThePage: false,
  events: { init: function () {}, load: function () {} },
  init: function (params) {
    "use strict";
    var origOpen;
    tarteaucitron.parameters = params;
    if (alreadyLaunch === 0) {
      alreadyLaunch = 1;
      if (window.addEventListener) {
        window.addEventListener(
          "load",
          function () {
            tarteaucitron.initEvents.loadEvent(false);
          },
          false
        );
        window.addEventListener(
          "scroll",
          function () {
            tarteaucitron.initEvents.scrollEvent();
          },
          false
        );
        window.addEventListener(
          "keydown",
          function (evt) {
            tarteaucitron.initEvents.keydownEvent(false, evt);
          },
          false
        );
        window.addEventListener(
          "hashchange",
          function () {
            tarteaucitron.initEvents.hashchangeEvent();
          },
          false
        );
        window.addEventListener(
          "resize",
          function () {
            tarteaucitron.initEvents.resizeEvent();
          },
          false
        );
      } else {
        window.attachEvent("onload", function () {
          tarteaucitron.initEvents.loadEvent(true);
        });
        window.attachEvent("onscroll", function () {
          tarteaucitron.initEvents.scrollEvent();
        });
        window.attachEvent("onkeydown", function (evt) {
          tarteaucitron.initEvents.keydownEvent(true, evt);
        });
        window.attachEvent("onhashchange", function () {
          tarteaucitron.initEvents.hashchangeEvent();
        });
        window.attachEvent("onresize", function () {
          tarteaucitron.initEvents.resizeEvent();
        });
      }
      if (typeof XMLHttpRequest !== "undefined") {
        origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
          if (window.addEventListener) {
            this.addEventListener(
              "load",
              function () {
                if (typeof tarteaucitronProLoadServices === "function") {
                  tarteaucitronProLoadServices();
                }
              },
              false
            );
          } else if (typeof this.attachEvent !== "undefined") {
            this.attachEvent("onload", function () {
              if (typeof tarteaucitronProLoadServices === "function") {
                tarteaucitronProLoadServices();
              }
            });
          } else {
            if (typeof tarteaucitronProLoadServices === "function") {
              setTimeout(tarteaucitronProLoadServices, 1e3);
            }
          }
          try {
            origOpen.apply(this, arguments);
          } catch (err) {}
        };
      }
    }
    if (tarteaucitron.events.init) {
      tarteaucitron.events.init();
    }
  },
  initEvents: {
    loadEvent: function (isOldBrowser) {
      tarteaucitron.load();
      tarteaucitron.fallback(
        ["tarteaucitronOpenPanel"],
        function (elem) {
          if (isOldBrowser) {
            elem.attachEvent("onclick", function (event) {
              tarteaucitron.userInterface.openPanel();
              event.preventDefault();
            });
          } else {
            elem.addEventListener(
              "click",
              function (event) {
                tarteaucitron.userInterface.openPanel();
                event.preventDefault();
              },
              false
            );
          }
        },
        true
      );
    },
    keydownEvent: function (isOldBrowser, evt) {
      if (evt.keyCode === 27) {
        tarteaucitron.userInterface.closePanel();
      }
      if (isOldBrowser) {
        if (evt.keyCode === 9 && focusableEls.indexOf(evt.target) >= 0) {
          if (evt.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
              evt.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              evt.preventDefault();
            }
          }
        }
      }
    },
    hashchangeEvent: function () {
      if (
        document.location.hash === tarteaucitron.hashtag &&
        tarteaucitron.hashtag !== ""
      ) {
        tarteaucitron.userInterface.openPanel();
      }
    },
    resizeEvent: function () {
      var tacElem = document.getElementById("tarteaucitron");
      var tacCookieContainer = document.getElementById(
        "tarteaucitronCookiesListContainer"
      );
      if (tacElem && tacElem.style.display === "block") {
        tarteaucitron.userInterface.jsSizing("main");
      }
      if (tacCookieContainer && tacCookieContainer.style.display === "block") {
        tarteaucitron.userInterface.jsSizing("cookie");
      }
    },
    scrollEvent: function () {
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      var heightPosition;
      var tacPercentage = document.getElementById("tarteaucitronPercentage");
      var tacAlertBig = document.getElementById("tarteaucitronAlertBig");
      if (tacAlertBig && !tarteaucitron.highPrivacy) {
        if (tacAlertBig.style.display === "block") {
          heightPosition = tacAlertBig.offsetHeight + "px";
          if (scrollPos > screen.height * 2) {
            tarteaucitron.userInterface.respondAll(true);
          } else if (scrollPos > screen.height / 2) {
            document.getElementById("tarteaucitronDisclaimerAlert").innerHTML =
              "<strong>" +
              tarteaucitron.lang.alertBigScroll +
              "</strong> " +
              tarteaucitron.lang.alertBig;
          }
          if (tacPercentage) {
            if (tarteaucitron.orientation === "top") {
              tacPercentage.style.top = heightPosition;
            } else {
              tacPercentage.style.bottom = heightPosition;
            }
            tacPercentage.style.width =
              (100 / (screen.height * 2)) * scrollPos + "%";
          }
        }
      }
    },
  },
  load: function () {
    "use strict";
    if (tarteaucitronIsLoaded === true) {
      return;
    }
    var cdn = tarteaucitron.cdn,
      language = tarteaucitron.getLanguage(),
      useMinifiedJS =
        cdn.indexOf("cdn.jsdelivr.net") >= 0 ||
        tarteaucitronPath.indexOf(".min.") >= 0 ||
        tarteaucitronUseMin !== "",
      pathToLang =
        cdn +
        "lang/tarteaucitron." +
        language +
        (useMinifiedJS ? ".min" : "") +
        ".js",
      pathToServices =
        cdn + "tarteaucitron.services" + (useMinifiedJS ? ".min" : "") + ".js",
      linkElement = document.createElement("link"),
      defaults = {
        adblocker: false,
        hashtag: "#tarteaucitron",
        cookieName: "tarteaucitron",
        highPrivacy: true,
        orientation: "middle",
        bodyPosition: "bottom",
        removeCredit: false,
        showAlertSmall: false,
        showDetailsOnClick: true,
        showIcon: true,
        iconPosition: "BottomRight",
        cookieslist: false,
        handleBrowserDNTRequest: false,
        DenyAllCta: true,
        AcceptAllCta: true,
        moreInfoLink: true,
        privacyUrl: "",
        useExternalCss: false,
        useExternalJs: false,
        mandatory: true,
        mandatoryCta: true,
        closePopup: false,
        groupServices: false,
        serviceDefaultState: "wait",
        googleConsentMode: true,
        partnersList: false,
        alwaysNeedConsent: false,
      },
      params = tarteaucitron.parameters;
    tarteaucitronIsLoaded = true;
    if (
      ((tarteaucitron.parameters.readmoreLink !== undefined &&
        window.location.href == tarteaucitron.parameters.readmoreLink) ||
        window.location.href == tarteaucitron.parameters.privacyUrl) &&
      tarteaucitron.parameters.orientation == "middle"
    ) {
      tarteaucitron.parameters.orientation = "bottom";
    }
    if (typeof tarteaucitronCustomPremium !== "undefined") {
      tarteaucitronCustomPremium();
    }
    if (params !== undefined) {
      for (var k in defaults) {
        if (!tarteaucitron.parameters.hasOwnProperty(k)) {
          tarteaucitron.parameters[k] = defaults[k];
        }
      }
    }
    tarteaucitron.orientation = tarteaucitron.parameters.orientation;
    tarteaucitron.hashtag = tarteaucitron.parameters.hashtag;
    tarteaucitron.highPrivacy = tarteaucitron.parameters.highPrivacy;
    tarteaucitron.handleBrowserDNTRequest =
      tarteaucitron.parameters.handleBrowserDNTRequest;
    tarteaucitron.customCloserId = tarteaucitron.parameters.customCloserId;
    if (tarteaucitron.parameters.googleConsentMode === true) {
      window.dataLayer = window.dataLayer || [];
      window.tac_gtag = function tac_gtag() {
        dataLayer.push(arguments);
      };
      window.tac_gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 800,
      });
      document.addEventListener("googleads_added", function () {
        if (tarteaucitron.added["gcmads"] === true) {
          return;
        }
        tarteaucitron.services.gcmads = {
          key: "gcmads",
          type: "ads",
          name: "Google Ads (personalized ads)",
          uri: "https://support.google.com/analytics/answer/9976101",
          needConsent: true,
          cookies: [],
          js: function () {},
          fallback: function () {},
        };
        tarteaucitron.job.push("gcmads");
        var i,
          allowBtns = document.getElementsByClassName("tarteaucitronAllow"),
          denyBtns = document.getElementsByClassName("tarteaucitronDeny");
        for (i = 0; i < allowBtns.length; i++) {
          tarteaucitron.addClickEventToElement(allowBtns[i], function () {
            tarteaucitron.userInterface.respond(this, true);
          });
        }
        for (i = 0; i < denyBtns.length; i++) {
          tarteaucitron.addClickEventToElement(denyBtns[i], function () {
            tarteaucitron.userInterface.respond(this, false);
          });
        }
      });
      document.addEventListener("gcmads_allowed", function () {
        tarteaucitron.setConsent("googleads", true);
      });
      document.addEventListener("gcmads_loaded", function () {
        window.tac_gtag("consent", "update", {
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      });
      document.addEventListener("gcmads_allowed", function () {
        window.tac_gtag("consent", "update", {
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      });
      document.addEventListener("gcmads_disallowed", function () {
        window.tac_gtag("consent", "update", {
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      });
      document.addEventListener("googleads_loaded", function () {
        window.tac_gtag("consent", "update", { ad_storage: "granted" });
      });
      document.addEventListener("googleads_allowed", function () {
        window.tac_gtag("consent", "update", { ad_storage: "granted" });
      });
      document.addEventListener("googleads_disallowed", function () {
        tarteaucitron.setConsent("gcmads", false);
        window.tac_gtag("consent", "update", { ad_storage: "denied" });
      });
      document.addEventListener("gtag_loaded", function () {
        window.tac_gtag("consent", "update", { analytics_storage: "granted" });
      });
      document.addEventListener("gtag_allowed", function () {
        window.tac_gtag("consent", "update", { analytics_storage: "granted" });
      });
      document.addEventListener("gtag_disallowed", function () {
        window.tac_gtag("consent", "update", { analytics_storage: "denied" });
      });
      window.addEventListener("tac.root_available", function () {
        if (typeof tarteaucitron_block !== "undefined") {
          tarteaucitron_block.unblock(/www\.googletagmanager\.com\/gtag\/js/);
          tarteaucitron_block.unblock(
            /www\.googleadservices\.com\/pagead\/conversion/
          );
          tarteaucitron_block.unblock(/AW-/);
          tarteaucitron_block.unblock(/google-analytics\.com\/analytics\.js/);
          tarteaucitron_block.unblock(/google-analytics\.com\/ga\.js/);
        }
      });
    }
    if (!tarteaucitron.parameters.useExternalCss) {
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      linkElement.href =
        cdn + "css/tarteaucitron" + (useMinifiedJS ? ".min" : "") + ".css";
      document.getElementsByTagName("head")[0].appendChild(linkElement);
    }
    tarteaucitron.addInternalScript(pathToLang, "", function () {
      if (tarteaucitronCustomText !== "") {
        tarteaucitron.lang = tarteaucitron.AddOrUpdate(
          tarteaucitron.lang,
          tarteaucitronCustomText
        );
      }
      tarteaucitron.addInternalScript(pathToServices, "", function () {
        if (tarteaucitron.orientation === "middle") {
          var customThemeMiddle = document.createElement("style"),
            cssRuleMiddle =
              "div#tarteaucitronRoot.tarteaucitronBeforeVisible:before {content: '';position: fixed;width: 100%;height: 100%;background: white;top: 0;left: 0;z-index: 999;opacity: 0.5;}div#tarteaucitronAlertBig:before {content: '" +
              tarteaucitron.lang.middleBarHead +
              "';font-size: 35px;}body #tarteaucitronRoot div#tarteaucitronAlertBig {width: 60%;min-width: 285px;height: auto;margin: auto;left: 50%;top: 50%;transform: translate(-50%, -50%);box-shadow: 0 0 9000px #000;border-radius: 20px;padding: 35px 25px;}span#tarteaucitronDisclaimerAlert {padding: 0 30px;}#tarteaucitronRoot span#tarteaucitronDisclaimerAlert {margin: 10px 0 30px;display: block;text-align: center;font-size: 21px;}@media screen and (max-width: 900px) {div#tarteaucitronAlertBig button {margin: 0 auto 10px!important;display: block!important;}}";
          customThemeMiddle.type = "text/css";
          if (customThemeMiddle.styleSheet) {
            customThemeMiddle.styleSheet.cssText = cssRuleMiddle;
          } else {
            customThemeMiddle.appendChild(
              document.createTextNode(cssRuleMiddle)
            );
          }
          document
            .getElementsByTagName("head")[0]
            .appendChild(customThemeMiddle);
        }
        if (tarteaucitron.parameters.groupServices == true) {
          tarteaucitron.parameters.showDetailsOnClick = true;
        }
        if (tarteaucitron.orientation === "popup") {
          var customThemePopup = document.createElement("style"),
            cssRulePopup =
              "div#tarteaucitronAlertBig:before {content: '" +
              tarteaucitron.lang.middleBarHead +
              "';font-size: 22px;}body #tarteaucitronRoot div#tarteaucitronAlertBig {bottom: 0;top: auto!important;left: 8px!important;right: auto!important;transform: initial!important;border-radius: 5px 5px 0 0!important;max-width: 250px!important;width: calc(100% - 16px)!important;min-width: 0!important;padding: 25px 0;}span#tarteaucitronDisclaimerAlert {padding: 0 30px;font-size: 15px!important;}#tarteaucitronRoot span#tarteaucitronDisclaimerAlert {margin: 10px 0 30px;display: block;text-align: center;font-size: 21px;}div#tarteaucitronAlertBig button {margin: 0 auto 10px!important;display: block!important;width: calc(100% - 60px);box-sizing: border-box;}";
          customThemePopup.type = "text/css";
          if (customThemePopup.styleSheet) {
            customThemePopup.styleSheet.cssText = cssRulePopup;
          } else {
            customThemePopup.appendChild(document.createTextNode(cssRulePopup));
          }
          document
            .getElementsByTagName("head")[0]
            .appendChild(customThemePopup);
        }
        var body = document.body,
          div = document.createElement("div"),
          html = "",
          index,
          orientation = "Top",
          modalAttrs = "",
          cat = [
            "ads",
            "analytic",
            "api",
            "comment",
            "social",
            "support",
            "video",
            "other",
            "google",
          ],
          i;
        cat = cat.sort(function (a, b) {
          if (tarteaucitron.lang[a].title > tarteaucitron.lang[b].title) {
            return 1;
          }
          if (tarteaucitron.lang[a].title < tarteaucitron.lang[b].title) {
            return -1;
          }
          return 0;
        });
        html +=
          '<div role="heading" aria-level="1" id="tac_title" class="tac_visually-hidden">' +
          tarteaucitron.lang.title +
          "</div>";
        html += '<div id="tarteaucitronPremium"></div>';
        if (tarteaucitron.reloadThePage) {
          html +=
            '<button type="button" id="tarteaucitronBack" aria-label="' +
            tarteaucitron.lang.close +
            " (" +
            tarteaucitron.lang.reload +
            ')" title="' +
            tarteaucitron.lang.close +
            " (" +
            tarteaucitron.lang.reload +
            ')"></button>';
        } else {
          html +=
            '<button type="button" id="tarteaucitronBack" aria-label="' +
            tarteaucitron.lang.close +
            '" title="' +
            tarteaucitron.lang.close +
            '"></button>';
        }
        html +=
          '<div id="tarteaucitron" role="dialog" aria-modal="true" aria-labelledby="dialogTitle" tabindex="-1">';
        if (tarteaucitron.reloadThePage) {
          html +=
            '   <button type="button" id="tarteaucitronClosePanel" aria-label="' +
            tarteaucitron.lang.close +
            " (" +
            tarteaucitron.lang.reload +
            ')" title="' +
            tarteaucitron.lang.close +
            " (" +
            tarteaucitron.lang.reload +
            ')">';
        } else {
          html += '   <button type="button" id="tarteaucitronClosePanel">';
        }
        html += "       " + tarteaucitron.lang.close;
        html += "   </button>";
        html += '   <div id="tarteaucitronServices">';
        html +=
          '      <div class="tarteaucitronLine tarteaucitronMainLine" id="tarteaucitronMainLineOffset">';
        html +=
          '         <span class="tarteaucitronH1" role="heading" aria-level="1" id="dialogTitle">' +
          tarteaucitron.lang.title +
          "</span>";
        html += '         <div id="tarteaucitronInfo">';
        html += "         " + tarteaucitron.lang.disclaimer;
        if (tarteaucitron.parameters.privacyUrl !== "") {
          html += "   <br/><br/>";
          html +=
            '   <button type="button" id="tarteaucitronPrivacyUrlDialog" role="link">';
          html += "       " + tarteaucitron.lang.privacyUrl;
          html += "   </button>";
        }
        html += "         </div>";
        html += '         <div class="tarteaucitronName">';
        html +=
          '            <span class="tarteaucitronH2" role="heading" aria-level="2">' +
          tarteaucitron.lang.all +
          "</span>";
        html += "         </div>";
        html +=
          '         <div class="tarteaucitronAsk" id="tarteaucitronScrollbarAdjust">';
        html +=
          '            <button type="button" id="tarteaucitronAllAllowed" class="tarteaucitronAllow">';
        html +=
          '               <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
          tarteaucitron.lang.allowAll;
        html += "            </button> ";
        html +=
          '            <button type="button" id="tarteaucitronAllDenied" class="tarteaucitronDeny">';
        html +=
          '               <span class="tarteaucitronCross" aria-hidden="true"></span> ' +
          tarteaucitron.lang.denyAll;
        html += "            </button>";
        html += "         </div>";
        html += "      </div>";
        html += '      <div class="tarteaucitronBorder">';
        html += '         <div class="clear"></div><ul>';
        if (tarteaucitron.parameters.mandatory == true) {
          html += '<li id="tarteaucitronServicesTitle_mandatory">';
          html += '<div class="tarteaucitronTitle">';
          if (tarteaucitron.parameters.showDetailsOnClick) {
            html +=
              '   <button type="button" tabindex="-1"><span class="tarteaucitronPlus" aria-hidden="true"></span> ' +
              tarteaucitron.lang.mandatoryTitle +
              "</button>";
          } else {
            html +=
              '   <span class="asCatToggleBtn">' +
              tarteaucitron.lang.mandatoryTitle +
              "</span>";
          }
          html += "</div>";
          html += '<ul id="tarteaucitronServices_mandatory">';
          html += '<li class="tarteaucitronLine">';
          html += '   <div class="tarteaucitronName">';
          html +=
            '       <span class="tarteaucitronH3" role="heading" aria-level="3">' +
            tarteaucitron.lang.mandatoryText +
            "</span>";
          html +=
            '       <span class="tarteaucitronListCookies" aria-hidden="true"></span><br/>';
          html += "   </div>";
          if (tarteaucitron.parameters.mandatoryCta == true) {
            html += '   <div class="tarteaucitronAsk">';
            html +=
              '       <button type="button" class="tarteaucitronAllow" tabindex="-1" disabled>';
            html +=
              '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
              tarteaucitron.lang.allow;
            html += "       </button> ";
            html +=
              '       <button type="button" class="tarteaucitronDeny" tabindex="-1">';
            html +=
              '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' +
              tarteaucitron.lang.deny;
            html += "       </button> ";
            html += "   </div>";
          }
          html += "</li>";
          html += "</ul></li>";
        }
        for (i = 0; i < cat.length; i += 1) {
          html +=
            '         <li id="tarteaucitronServicesTitle_' +
            cat[i] +
            '" class="tarteaucitronHidden">';
          html +=
            '            <div class="tarteaucitronTitle" role="heading" aria-level="2">';
          if (tarteaucitron.parameters.showDetailsOnClick) {
            html +=
              '               <button type="button" class="catToggleBtn" aria-expanded="false" data-cat="tarteaucitronDetails' +
              cat[i] +
              '"><span class="tarteaucitronPlus" aria-hidden="true"></span> ' +
              tarteaucitron.lang[cat[i]].title +
              "</button>";
          } else {
            html +=
              '               <span class="asCatToggleBtn" data-cat="tarteaucitronInlineDetails' +
              cat[i] +
              '">' +
              tarteaucitron.lang[cat[i]].title +
              "</span>";
          }
          html += "            </div>";
          html +=
            '            <div id="tarteaucitronDetails' +
            cat[i] +
            '" class="tarteaucitronDetails ' +
            (tarteaucitron.parameters.showDetailsOnClick
              ? "tarteaucitronInfoBox"
              : "tarteaucitronDetailsInline") +
            '">';
          html += "               " + tarteaucitron.lang[cat[i]].details;
          html += "            </div>";
          html +=
            '         <ul id="tarteaucitronServices_' + cat[i] + '"></ul></li>';
        }
        html +=
          '             <li id="tarteaucitronNoServicesTitle" class="tarteaucitronLine">' +
          tarteaucitron.lang.noServices +
          "</li>";
        html += "         </ul>";
        html +=
          '         <div class="tarteaucitronHidden tarteaucitron-spacer-20" id="tarteaucitronScrollbarChild"></div>';
        if (tarteaucitron.parameters.removeCredit === false) {
          html +=
            '     <a class="tarteaucitronSelfLink" href="https://tarteaucitron.io/" rel="nofollow noreferrer noopener" target="_blank" title="tarteaucitron ' +
            tarteaucitron.lang.newWindow +
            '"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAeCAYAAAAWwoEYAAADl0lEQVRoge1Y0W3bQAx9CjKARlC+9GVUmqDJBHEmiDyB6wkcTxBngtgTxJ0gzgQW4C/9aYOmE6g4lTQo+k6y3Rb94QOERNQd+cjj8XiGwWAwGAwGg8FgMBgMBoPB8F8RNRXe+whEKe7c36ZCAeCRxC9Rig2PUd8kPgAsoxSfQ3YAzAA8D/HwYYCb05kBKKO0teFkmbC1jlKsAnq/Abjn+QBqAIsoRS30ttwG/HNz1wH/XIxWTicLdvtW7xTAGEAMtP685CNsBTe2d/BLydfXAG57SEnMAST0zgYZSUCPk02bCvkJduIzuJzDLfPolbY+tLKmar+/8+IRePy4qdpE03qHuH8fipFb4N2+XdA3AJ/0vaQxt7s9FvkIS2XvtqnwM0rxpOQfbnE5G2LhTCmUO2fHIngOmcv+KG3HafDchB6ntwjYqenR2PqC7sOZ3E7FXHB0vqxoFyUyLh7OEH7LOGouvhhN3eIBeKXv0n5MsufdHqXcwYR5U2EbpV35lSspVPJmQj4TcgRK7jTg5IzmPUhhwM5a2WHUFCx+NgiDucmgh7idikLovHFlL0pxQ9xzX+IIP9Y6FrJsqhjlQpZRAkFVDCjZfcCHt6bqJDmuh5ylCWx0RVnk3oumaknqTH5sqrY0fBWyULaHUIgAgxb46MxV3DbieAhxOxUxjSuljig9lMQ/Bcfoi9BTEv9aLORSndVxYOH525sUDC6u2gWxcNzBNRxPanyh3ktKinOgy3WoxPbtUM0t6RkbQnzBnFPgi9GCOEubY9UffIryz9iKRe8s/FUfEWosJJGxagp85bpUO3VywQ46lOtAWfNxKwa4JXQ+628+bpxYGXXMzp5rXH401VEyXwIdowXFaKWSMFHvMTVmGnc+P3oXV2QOiBCfgex8QtcQCbcQE/H+eoHzrkFo1KM7zVO4jVVj5s6lRiWF7zyXyfRMc97J3tzj87mYqZ7E2YjzUct9GUi4tjHLR8dVkBLjQcuHFleWvQfRNEhFR7uX7pkctOwvZXsft7sAtyldEUIN2UTeLxnEfxKYswzdi88BdbZ8hifUoSMftQvP+muRwN6+Q3DeqqRExP9QmTtcheiHh0Ot1x2i2km1bP9pbufw5zZdyWsOrh7vQae5OZWbsMv30pi7cd/CKj3coPEVaCP4Zhx4eQWhOZ1Y9MTXGyP8/iGjEyfa1T4fO/4Lea9vBoPBYDAYDAaDwWAwGAwGwz8GgF8siXCCbrSRhgAAAABJRU5ErkJggg==" alt="tarteaucitron.io" /></a>';
        }
        html += "       </div>";
        html += "   </div>";
        html += "</div>";
        if (tarteaucitron.parameters.orientation === "bottom") {
          orientation = "Bottom";
        }
        if (
          tarteaucitron.parameters.orientation === "middle" ||
          tarteaucitron.parameters.orientation === "popup"
        ) {
          modalAttrs =
            ' role="dialog" aria-modal="true" aria-labelledby="tac_title"';
        }
        if (
          tarteaucitron.parameters.highPrivacy &&
          !tarteaucitron.parameters.AcceptAllCta
        ) {
          html +=
            '<div tabindex="-1" id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' +
            orientation +
            '"' +
            modalAttrs +
            ">";
          html +=
            '   <span id="tarteaucitronDisclaimerAlert" role="paragraph">';
          html += "       " + tarteaucitron.lang.alertBigPrivacy;
          html += "   </span>";
          html +=
            '   <button type="button" id="tarteaucitronPersonalize" aria-label="' +
            tarteaucitron.lang.personalize +
            " " +
            tarteaucitron.lang.modalWindow +
            '" title="' +
            tarteaucitron.lang.personalize +
            " " +
            tarteaucitron.lang.modalWindow +
            '">';
          html += "       " + tarteaucitron.lang.personalize;
          html += "   </button>";
          if (tarteaucitron.parameters.privacyUrl !== "") {
            html +=
              '   <button role="link" type="button" id="tarteaucitronPrivacyUrl">';
            html += "       " + tarteaucitron.lang.privacyUrl;
            html += "   </button>";
          }
          html += "</div>";
        } else {
          html +=
            '<div tabindex="-1" id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' +
            orientation +
            '"' +
            modalAttrs +
            ">";
          html +=
            '   <span id="tarteaucitronDisclaimerAlert" role="paragraph">';
          if (tarteaucitron.parameters.highPrivacy) {
            html += "       " + tarteaucitron.lang.alertBigPrivacy;
          } else {
            html +=
              "       " +
              tarteaucitron.lang.alertBigClick +
              " " +
              tarteaucitron.lang.alertBig;
          }
          html += "   </span>";
          html +=
            '   <button type="button" class="tarteaucitronCTAButton tarteaucitronAllow" id="tarteaucitronPersonalize2">';
          html +=
            '       <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
            tarteaucitron.lang.acceptAll;
          html += "   </button>";
          if (tarteaucitron.parameters.DenyAllCta) {
            if (tarteaucitron.reloadThePage) {
              html +=
                '   <button type="button" class="tarteaucitronCTAButton tarteaucitronDeny" id="tarteaucitronAllDenied2" aria-label="' +
                tarteaucitron.lang.denyAll +
                " (" +
                tarteaucitron.lang.reload +
                ')" title="' +
                tarteaucitron.lang.denyAll +
                " (" +
                tarteaucitron.lang.reload +
                ')">';
            } else {
              html +=
                '   <button type="button" class="tarteaucitronCTAButton tarteaucitronDeny" id="tarteaucitronAllDenied2">';
            }
            html +=
              '       <span class="tarteaucitronCross" aria-hidden="true"></span> ' +
              tarteaucitron.lang.denyAll;
            html += "   </button>";
          }
          html +=
            '   <button type="button" id="tarteaucitronCloseAlert" aria-label="' +
            tarteaucitron.lang.personalize +
            " " +
            tarteaucitron.lang.modalWindow +
            '" title="' +
            tarteaucitron.lang.personalize +
            " " +
            tarteaucitron.lang.modalWindow +
            '">';
          html += "       " + tarteaucitron.lang.personalize;
          html += "   </button>";
          if (tarteaucitron.parameters.privacyUrl !== "") {
            html +=
              '   <button type="button" id="tarteaucitronPrivacyUrl" role="link">';
            html += "       " + tarteaucitron.lang.privacyUrl;
            html += "   </button>";
          }
          html += "</div>";
          html += '<div id="tarteaucitronPercentage"></div>';
        }
        if (tarteaucitron.parameters.showIcon === true) {
          html +=
            '<div id="tarteaucitronIcon" class="tarteaucitronIcon' +
            tarteaucitron.parameters.iconPosition +
            '">';
          html +=
            '   <button type="button" id="tarteaucitronManager" aria-label="' +
            tarteaucitron.lang.icon +
            " " +
            tarteaucitron.lang.modalWindow +
            '" title="' +
            tarteaucitron.lang.icon +
            " " +
            tarteaucitron.lang.modalWindow +
            '">';
          html +=
            '       <img src="' +
            (tarteaucitron.parameters.iconSrc
              ? tarteaucitron.parameters.iconSrc
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAGA0lEQVRoge1a207bWBRdBtJwLYZhKDMVmlSK1LxNkPo+ZH6g8B6p5AuALwC+APoFoVLeoT8whPeRSt+CZKmZVu3AiIsRlEtCktGyjy8xzuXYhvahS0JJHJ/4rLP3XnuffcAPfGdQ7mM6jRLSAF4BxqsbewB2lRS2o35mpEQaJcwCyANIdLi1DGBNSWEzqmdHRqRRwjqAJclhtExOSUEP+/xIiDRKhhUWfL7ShTtBuJnqcw+/z4Ql0xNmMEwSSz4kuNIzSgpjSsqYJP/GeE185wYJroedRyiLNEpGLLzzrHSuk+83SgbxvOcyyRaDziWsRVZkSRDinpzPbwVGWIucuohsKynMS47fAQyls/BMSRmKJo3AFhG5wm2N1wF+Zs3zebbFfR0RxrXcJHQlgH+LMW616pR/WiIMEXfW3mtzXyeEGWsjKot8c4TOI98L+iKaR5PS6IUk88RLAO9F8UjrbYoYMOosNavpfmODIiwRXRR/G3ohaWVo1RU/c30jV8ab2mV8qVGzHWBOLyTLZiWs5Rolg/C3ySOi0tXP/k4aEwOwSBKPJs7Rp16ABJTe+p1xVX0It/owqqdDEMRoqd3RFxqDPh20Ig6VEPVC0i5RSCD+6wl6HlW7GksSlUMV11/GrUs5NasFLusDE9ELSVphXemtJwaT/8JyIRvxNNCfBmIiNdR04LII3DSrbe0yjqvyJF/ppptqVlt+MCLCEh/oOkPPP6N38Mb5cnQBGFsEqmXg5j3QMwoMzwGnr4HYbybBq13gZAOom/FO63zdf2qQArCsZrUN2TlJy69eSDKYV+6Q4MpP75ivHzPA53ngaBW4eGuSOt0A/lsGPmXMz0+3TFJcTfFbPfFbfnwlhON+iQhlWmA82CQ4ocQ7c6KcfL3DHuls0yT6Sx4YnLXJDCQOIRRv5yGIJBgP8Sdisj2qubpc5UGJmo+W49ifVmzL8HcpGhQPvZCUKiCliIhEN0tr2OCqHuSA8gwQ/92MkU7gxEmeVqGrTTgpxPXbUrtGWYus0I9thRIraagRQUIDf7Qn4yZhKRiFQIyhfMfUr3yblokVWSJ6k8xSnc7eNN/RjowfCYiFoDUFer1S3gW6JiJ8Nt30EMbEhU+vzSIztuRYjRLsR8IHLjlf7HZ+MrWWEXxNmbvapt4jGSqZRYSkGUetSNTPzHsui5YMQ2ajJUNks6mw4wT54Ok2ShnzzIPCUGshzawCRKy5FqvrTZe0RWzQGvw79m67XZjKmxJrLsICjtZa55gxXy+6F4sYsEtxTqhXdRTLC8ulSDaWoCLsolfN+8YUhOsJV709H7Cudr0LlVEtzqBcN+shEyThdR941OnAbF8pirKJqXyupTRTtQSReiVmXW1j7oBErB0d9xM2WEd5J9ZKYtuR4WKwwBSoORbpGrJ5ZI9lt71irJmGX1px0JYE26uNErawr2zfIcP4OHEKXm66PA3wjpCNEfpJunI4muifPjKvsFCkGjExTq63yxMJsZNMYF/J4HmDC5A3Yq36jy0ClePHVhwuu/b1HSFlEfHD5ZtD1bEK44Qu1mWys6tbWmZyPWckzlPTGiRw/XHCuk+q4Rek+mVrVL/UppwrdDEGNV2kpyuhccgc5Oxm9vWnn+19vJrVpLor0kTUrGacMplb1CfOFyTD4o9uNrHqr2Z+ZMSp1c2XcVSORnh9Q81q3k599ETgkNnjg0nGzi10K7rX+bZpHbrblPcY5A4Zxk2xcjzCvTpd9027Aa0QtouyyrKFRR6D/04DwkFGvHPXM3Qda/Jb4nPgI7hQLVM1q5HIBt2MzQNa57Z1DiiLAGa5Mi+O4Sz3Mpp6laPHO6InII3ITnX1QtI+EOX+m9ZxleOZ/j9PiuKoLi3aqXPuEoSye/Vhkm+LalbLtHhMS0R6zu7aZ3vP2jOjL7QVv4McxhcDnZIelAQibGIbULOapf3PuE1Vs9qeaOTdkVKr00gCQiw4NlBzDvf1Lxx+uP5r3Dgv5KQZRzWn+GRwz8jmDS8itUg7iB6vLuJCF5Uty4A9mVKkFR6MiJDachST/oHvHgD+B4SoUIitpF05AAAAAElFTkSuQmCC") +
            '" alt="' +
            tarteaucitron.lang.icon +
            " " +
            tarteaucitron.lang.modalWindow +
            '" title="' +
            tarteaucitron.lang.icon +
            " " +
            tarteaucitron.lang.modalWindow +
            '">';
          html += "   </button>";
          html += "</div>";
        }
        if (tarteaucitron.parameters.showAlertSmall === true) {
          html +=
            '<div id="tarteaucitronAlertSmall" class="tarteaucitronAlertSmall' +
            orientation +
            '">';
          html +=
            '   <button type="button" id="tarteaucitronManager" aria-label="' +
            tarteaucitron.lang.alertSmall +
            " " +
            tarteaucitron.lang.modalWindow +
            '" title="' +
            tarteaucitron.lang.alertSmall +
            " " +
            tarteaucitron.lang.modalWindow +
            '">';
          html += "       " + tarteaucitron.lang.alertSmall;
          html += '       <span id="tarteaucitronDot">';
          html += '           <span id="tarteaucitronDotGreen"></span>';
          html += '           <span id="tarteaucitronDotYellow"></span>';
          html += '           <span id="tarteaucitronDotRed"></span>';
          html += "       </span>";
          if (tarteaucitron.parameters.cookieslist === true) {
            html += "   </button>\x3c!-- @whitespace";
            html +=
              '   --\x3e<button type="button" id="tarteaucitronCookiesNumber" aria-expanded="false" aria-controls="tarteaucitronCookiesListContainer">0</button>';
            html += '   <div id="tarteaucitronCookiesListContainer">';
            if (tarteaucitron.reloadThePage) {
              html +=
                '       <button type="button" id="tarteaucitronClosePanelCookie" aria-label="' +
                tarteaucitron.lang.close +
                " (" +
                tarteaucitron.lang.reload +
                ')" title="' +
                tarteaucitron.lang.close +
                " (" +
                tarteaucitron.lang.reload +
                ')">';
            } else {
              html +=
                '       <button type="button" id="tarteaucitronClosePanelCookie">';
            }
            html += "           " + tarteaucitron.lang.close;
            html += "       </button>";
            html +=
              '       <div class="tarteaucitronCookiesListMain" id="tarteaucitronCookiesTitle">';
            html +=
              '            <span class="tarteaucitronH2" role="heading" aria-level="2" id="tarteaucitronCookiesNumberBis">0 cookie</span>';
            html += "       </div>";
            html += '       <div id="tarteaucitronCookiesList"></div>';
            html += "    </div>";
          } else {
            html += "   </div>";
          }
          html += "</div>";
        }
        tarteaucitron.addInternalScript(
          tarteaucitron.cdn +
            "advertising" +
            (useMinifiedJS ? ".min" : "") +
            ".js",
          "",
          function () {
            if (
              tarteaucitronNoAdBlocker === true ||
              tarteaucitron.parameters.adblocker === false
            ) {
              div.id = "tarteaucitronRoot";
              if (tarteaucitron.parameters.bodyPosition === "top") {
                var bodyFirstChild = body.firstChild;
                body.insertBefore(div, bodyFirstChild);
              } else {
                body.appendChild(div, body);
              }
              div.setAttribute("data-nosnippet", "true");
              div.setAttribute("lang", language);
              div.setAttribute("role", "region");
              div.setAttribute("aria-labelledby", "tac_title");
              div.innerHTML = html;
              var tacRootAvailableEvent;
              if (typeof Event === "function") {
                tacRootAvailableEvent = new Event("tac.root_available");
              } else if (typeof document.createEvent === "function") {
                tacRootAvailableEvent = document.createEvent("Event");
                tacRootAvailableEvent.initEvent(
                  "tac.root_available",
                  true,
                  true
                );
              }
              if (typeof window.dispatchEvent === "function") {
                window.dispatchEvent(tacRootAvailableEvent);
              }
              if (tarteaucitron.job !== undefined) {
                tarteaucitron.job = tarteaucitron.cleanArray(tarteaucitron.job);
                for (index = 0; index < tarteaucitron.job.length; index += 1) {
                  tarteaucitron.addService(tarteaucitron.job[index]);
                }
              } else {
                tarteaucitron.job = [];
              }
              if (tarteaucitron.job.length === 0) {
                tarteaucitron.userInterface.closeAlert();
              }
              tarteaucitron.isAjax = true;
              tarteaucitron.job.push = function (id) {
                if (typeof tarteaucitron.job.indexOf === "undefined") {
                  tarteaucitron.job.indexOf = function (obj, start) {
                    var i,
                      j = this.length;
                    for (i = start || 0; i < j; i += 1) {
                      if (this[i] === obj) {
                        return i;
                      }
                    }
                    return -1;
                  };
                }
                if (tarteaucitron.job.indexOf(id) === -1) {
                  Array.prototype.push.call(this, id);
                }
                tarteaucitron.launch[id] = false;
                tarteaucitron.addService(id);
              };
              if (
                document.location.hash === tarteaucitron.hashtag &&
                tarteaucitron.hashtag !== ""
              ) {
                tarteaucitron.userInterface.openPanel();
              }
              tarteaucitron.cookie.number();
              setInterval(tarteaucitron.cookie.number, 6e4);
            }
          },
          tarteaucitron.parameters.adblocker
        );
        if (tarteaucitron.parameters.adblocker === true) {
          setTimeout(function () {
            if (tarteaucitronNoAdBlocker === false) {
              html =
                '<div id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' +
                orientation +
                ' tarteaucitron-display-block" role="alert" aria-live="polite">';
              html += '   <p id="tarteaucitronDisclaimerAlert">';
              html += "       " + tarteaucitron.lang.adblock + "<br/>";
              html +=
                "       <strong>" +
                tarteaucitron.lang.adblock_call +
                "</strong>";
              html += "   </p>";
              html +=
                '   <button type="button" class="tarteaucitronCTAButton" id="tarteaucitronCTAButton">';
              html += "       " + tarteaucitron.lang.reload;
              html += "   </button>";
              html += "</div>";
              html +=
                '<div role="heading" aria-level="1" id="tac_title" class="tac_visually-hidden">' +
                tarteaucitron.lang.title +
                "</div>";
              html += '<div id="tarteaucitronPremium"></div>';
              div.id = "tarteaucitronRoot";
              if (tarteaucitron.parameters.bodyPosition === "top") {
                var bodyFirstChild = body.firstChild;
                body.insertBefore(div, bodyFirstChild);
              } else {
                body.appendChild(div, body);
              }
              div.setAttribute("data-nosnippet", "true");
              div.setAttribute("lang", language);
              div.setAttribute("role", "region");
              div.setAttribute("aria-labelledby", "tac_title");
              div.innerHTML = html;
            }
          }, 1500);
        }
        if (tarteaucitron.parameters.closePopup === true) {
          setTimeout(function () {
            var closeElement = document.getElementById("tarteaucitronAlertBig"),
              closeButton = document.createElement("button");
            if (closeElement) {
              closeButton.innerHTML =
                '<span aria-hidden="true">X</span><span class="tac_visually-hidden">' +
                tarteaucitron.lang.closeBanner +
                "</span>";
              closeButton.setAttribute("id", "tarteaucitronCloseCross");
              closeElement.insertAdjacentElement("beforeend", closeButton);
            }
          }, 100);
        }
        if (tarteaucitron.parameters.groupServices === true) {
          var tac_group_style = document.createElement("style");
          tac_group_style.innerHTML = ".tarteaucitronTitle{display:none}";
          document.head.appendChild(tac_group_style);
          var cats = document.querySelectorAll(
            '[id^="tarteaucitronServicesTitle_"]'
          );
          Array.prototype.forEach.call(cats, function (item) {
            var cat = item
              .getAttribute("id")
              .replace(/^(tarteaucitronServicesTitle_)/, "");
            if (cat !== "mandatory") {
              var html = "";
              html += '<li  class="tarteaucitronLine">';
              html += '   <div class="tarteaucitronName">';
              html +=
                '       <span class="tarteaucitronH3" role="heading" aria-level="2">' +
                tarteaucitron.lang[cat].title +
                "</span>";
              html +=
                "       <span>" + tarteaucitron.lang[cat].details + "</span>";
              html +=
                '   <button type="button" aria-expanded="false" class="tarteaucitron-toggle-group" id="tarteaucitron-toggle-group-' +
                cat +
                '">' +
                tarteaucitron.lang.alertSmall +
                " (" +
                document.getElementById("tarteaucitronServices_" + cat)
                  .childElementCount +
                ")</button>";
              html += "   </div>";
              html +=
                '   <div class="tarteaucitronAsk" id="tarteaucitron-group-' +
                cat +
                '">';
              html +=
                '       <button type="button" aria-label="' +
                tarteaucitron.lang.allow +
                " " +
                tarteaucitron.lang[cat].title +
                '" class="tarteaucitronAllow" id="tarteaucitron-accept-group-' +
                cat +
                '">';
              html +=
                '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
                tarteaucitron.lang.allow;
              html += "       </button> ";
              html +=
                '       <button type="button" aria-label="' +
                tarteaucitron.lang.deny +
                " " +
                tarteaucitron.lang[cat].title +
                '" class="tarteaucitronDeny" id="tarteaucitron-reject-group-' +
                cat +
                '">';
              html +=
                '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' +
                tarteaucitron.lang.deny;
              html += "       </button>";
              html += "   </div>";
              html += "</li>";
              var ul = document.createElement("ul");
              ul.innerHTML = html;
              item.insertBefore(
                ul,
                item.querySelector("#tarteaucitronServices_" + cat + "")
              );
              document.querySelector(
                "#tarteaucitronServices_" + cat
              ).style.display = "none";
              tarteaucitron.addClickEventToId(
                "tarteaucitron-toggle-group-" + cat,
                function () {
                  tarteaucitron.userInterface.toggle(
                    "tarteaucitronServices_" + cat
                  );
                  if (
                    document.getElementById("tarteaucitronServices_" + cat)
                      .style.display == "block"
                  ) {
                    tarteaucitron.userInterface.addClass(
                      "tarteaucitronServicesTitle_" + cat,
                      "tarteaucitronIsExpanded"
                    );
                    document
                      .getElementById("tarteaucitron-toggle-group-" + cat)
                      .setAttribute("aria-expanded", "true");
                  } else {
                    tarteaucitron.userInterface.removeClass(
                      "tarteaucitronServicesTitle_" + cat,
                      "tarteaucitronIsExpanded"
                    );
                    document
                      .getElementById("tarteaucitron-toggle-group-" + cat)
                      .setAttribute("aria-expanded", "false");
                  }
                }
              );
              tarteaucitron.addClickEventToId(
                "tarteaucitron-accept-group-" + cat,
                function () {
                  tarteaucitron.userInterface.respondAll(true, cat);
                }
              );
              tarteaucitron.addClickEventToId(
                "tarteaucitron-reject-group-" + cat,
                function () {
                  tarteaucitron.userInterface.respondAll(false, cat);
                }
              );
            }
          });
        }
        if (
          tarteaucitron.parameters.partnersList === true &&
          (tarteaucitron.parameters.orientation === "middle" ||
            tarteaucitron.parameters.orientation === "popup")
        ) {
          setTimeout(function () {
            var liPartners = "";
            var tarteaucitronPartnersCat = [];
            tarteaucitron.job.forEach(function (id) {
              if (
                tarteaucitronPartnersCat[tarteaucitron.services[id].type] ===
                undefined
              ) {
                tarteaucitronPartnersCat[
                  tarteaucitron.services[id].type
                ] = true;
                liPartners +=
                  "<li>" +
                  tarteaucitron.lang[tarteaucitron.services[id].type].title +
                  "</li>";
              }
            });
            var tacPartnersInfoParent = document.getElementById(
              "tarteaucitronDisclaimerAlert"
            );
            if (tacPartnersInfoParent !== null) {
              tacPartnersInfoParent.insertAdjacentHTML(
                "beforeend",
                '<div class="tarteaucitronPartnersList"><b>' +
                  tarteaucitron.lang.ourpartners +
                  " (" +
                  tarteaucitron.job.length +
                  ")</b> <ul>" +
                  liPartners +
                  "</ul></div>"
              );
            }
          }, 100);
        }
        setTimeout(function () {
          var tacSaveButtonParent = document.getElementById(
            "tarteaucitronServices"
          );
          if (tacSaveButtonParent !== null) {
            tacSaveButtonParent.insertAdjacentHTML(
              "beforeend",
              '<div id="tarteaucitronSave"><button class="tarteaucitronAllow" id="tarteaucitronSaveButton">' +
                tarteaucitron.lang.save +
                "</button></div>"
            );
          }
        }, 100);
        tarteaucitron.userInterface.color("", true);
        setTimeout(function () {
          tarteaucitron.addClickEventToId(
            "tarteaucitronCloseCross",
            function () {
              tarteaucitron.userInterface.closeAlert();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronPersonalize",
            function () {
              tarteaucitron.userInterface.openPanel();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronPersonalize2",
            function () {
              tarteaucitron.userInterface.respondAll(true);
            }
          );
          tarteaucitron.addClickEventToId("tarteaucitronManager", function () {
            tarteaucitron.userInterface.openPanel();
          });
          tarteaucitron.addClickEventToId("tarteaucitronBack", function () {
            tarteaucitron.userInterface.closePanel();
          });
          tarteaucitron.addClickEventToId(
            "tarteaucitronClosePanel",
            function () {
              tarteaucitron.userInterface.closePanel();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronClosePanelCookie",
            function () {
              tarteaucitron.userInterface.closePanel();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronPrivacyUrl",
            function () {
              document.location = tarteaucitron.parameters.privacyUrl;
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronPrivacyUrlDialog",
            function () {
              document.location = tarteaucitron.parameters.privacyUrl;
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronCookiesNumber",
            function () {
              tarteaucitron.userInterface.toggleCookiesList();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronAllAllowed",
            function () {
              tarteaucitron.userInterface.respondAll(true);
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronAllDenied",
            function () {
              tarteaucitron.userInterface.respondAll(false);
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronAllDenied2",
            function () {
              tarteaucitron.userInterface.respondAll(false, "", true);
              if (tarteaucitron.reloadThePage === true) {
                window.location.reload();
              }
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronCloseAlert",
            function () {
              tarteaucitron.userInterface.openPanel();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronCTAButton",
            function () {
              location.reload();
            }
          );
          tarteaucitron.addClickEventToId(
            "tarteaucitronSaveButton",
            function () {
              var timeoutSaveButton = 0;
              tarteaucitron.job.forEach(function (id) {
                if (
                  tarteaucitron.state[id] !== true &&
                  tarteaucitron.state[id] !== false
                ) {
                  timeoutSaveButton = 500;
                  tarteaucitron.setConsent(id, false);
                }
              });
              setTimeout(
                tarteaucitron.userInterface.closePanel,
                timeoutSaveButton
              );
            }
          );
          var toggleBtns = document.getElementsByClassName("catToggleBtn"),
            i;
          for (i = 0; i < toggleBtns.length; i++) {
            toggleBtns[i].dataset.index = i;
            tarteaucitron.addClickEventToElement(toggleBtns[i], function () {
              if (!tarteaucitron.parameters.showDetailsOnClick) return false;
              tarteaucitron.userInterface.toggle(
                "tarteaucitronDetails" + cat[this.dataset.index],
                "tarteaucitronInfoBox"
              );
              if (
                document.getElementById(
                  "tarteaucitronDetails" + cat[this.dataset.index]
                ).style.display === "block"
              ) {
                this.setAttribute("aria-expanded", "true");
              } else {
                this.setAttribute("aria-expanded", "false");
              }
              return false;
            });
          }
          var allowBtnsInSite = document.querySelectorAll(
            ".tac_activate .tarteaucitronAllow"
          );
          for (i = 0; i < allowBtnsInSite.length; i++) {
            tarteaucitron.addClickEventToElement(
              allowBtnsInSite[i],
              function () {
                if (
                  this.closest(".tac_activate") !== null &&
                  this.closest(".tac_activate").parentNode !== null
                ) {
                  this.closest(".tac_activate").parentNode.setAttribute(
                    "tabindex",
                    "-1"
                  );
                  this.closest(".tac_activate").parentNode.focus();
                }
              }
            );
          }
          var allowBtns = document.getElementsByClassName("tarteaucitronAllow");
          for (i = 0; i < allowBtns.length; i++) {
            tarteaucitron.addClickEventToElement(allowBtns[i], function () {
              tarteaucitron.userInterface.respond(this, true);
            });
          }
          var denyBtns = document.getElementsByClassName("tarteaucitronDeny");
          for (i = 0; i < denyBtns.length; i++) {
            tarteaucitron.addClickEventToElement(denyBtns[i], function () {
              tarteaucitron.userInterface.respond(this, false);
            });
          }
          if (tarteaucitron.events.load) {
            tarteaucitron.events.load();
          }
        }, 500);
      });
    });
  },
  addService: function (serviceId) {
    "use strict";
    var html = "",
      s = tarteaucitron.services,
      service = s[serviceId];
    if (tarteaucitron.parameters.alwaysNeedConsent === true) {
      service.needConsent = true;
    }
    var cookie = tarteaucitron.cookie.read(),
      hostname = document.location.hostname,
      hostRef = document.referrer.split("/")[2],
      isNavigating =
        hostRef === hostname &&
        window.location.href !== tarteaucitron.parameters.privacyUrl,
      isAutostart = !service.needConsent,
      isWaiting = cookie.indexOf(service.key + "=wait") >= 0,
      isDenied = cookie.indexOf(service.key + "=false") >= 0,
      isAllowed =
        cookie.indexOf(service.key + "=true") >= 0 ||
        (!service.needConsent && cookie.indexOf(service.key + "=false") < 0),
      isResponded =
        cookie.indexOf(service.key + "=false") >= 0 ||
        cookie.indexOf(service.key + "=true") >= 0,
      isDNTRequested =
        navigator.doNotTrack === "1" ||
        navigator.doNotTrack === "yes" ||
        navigator.msDoNotTrack === "1" ||
        window.doNotTrack === "1",
      currentStatus = isAllowed
        ? tarteaucitron.lang.allowed
        : tarteaucitron.lang.disallowed,
      state =
        undefined !== service.defaultState
          ? service.defaultState
          : undefined !== tarteaucitron.parameters.serviceDefaultState
          ? tarteaucitron.parameters.serviceDefaultState
          : "wait";
    if (tarteaucitron.added[service.key] !== true) {
      tarteaucitron.added[service.key] = true;
      html += '<li id="' + service.key + 'Line" class="tarteaucitronLine">';
      html += '   <div class="tarteaucitronName">';
      html +=
        '       <span class="tarteaucitronH3" role="heading" aria-level="3">' +
        service.name +
        "</span>";
      html += '       <div class="tarteaucitronStatusInfo">';
      html +=
        '          <span class="tacCurrentStatus" id="tacCurrentStatus' +
        service.key +
        '">' +
        currentStatus +
        "</span>";
      html +=
        '          <span class="tarteaucitronReadmoreSeparator"> - </span>';
      html +=
        '          <span id="tacCL' +
        service.key +
        '" class="tarteaucitronListCookies"></span>';
      html += "       </div>";
      if (tarteaucitron.parameters.moreInfoLink == true) {
        var link = "https://tarteaucitron.io/service/" + service.key + "/";
        if (service.readmoreLink !== undefined && service.readmoreLink !== "") {
          link = service.readmoreLink;
        }
        if (
          tarteaucitron.parameters.readmoreLink !== undefined &&
          tarteaucitron.parameters.readmoreLink !== ""
        ) {
          link = tarteaucitron.parameters.readmoreLink;
        }
        html +=
          '       <a href="' +
          link +
          '" target="_blank" rel="noreferrer noopener nofollow" title="' +
          tarteaucitron.lang.more +
          " : " +
          tarteaucitron.lang.cookieDetail +
          " " +
          service.name +
          " " +
          tarteaucitron.lang.ourSite +
          " " +
          tarteaucitron.lang.newWindow +
          '" class="tarteaucitronReadmoreInfo">' +
          tarteaucitron.lang.more +
          "</a>";
        html +=
          '       <span class="tarteaucitronReadmoreSeparator"> - </span>';
        html +=
          '       <a href="' +
          service.uri +
          '" target="_blank" rel="noreferrer noopener" title="' +
          tarteaucitron.lang.source +
          " " +
          service.name +
          " " +
          tarteaucitron.lang.newWindow +
          '" class="tarteaucitronReadmoreOfficial">' +
          tarteaucitron.lang.source +
          "</a>";
      }
      html += "   </div>";
      html += '   <div class="tarteaucitronAsk">';
      html +=
        '       <button type="button" aria-label="' +
        tarteaucitron.lang.allow +
        " " +
        service.name +
        '" id="' +
        service.key +
        'Allowed" class="tarteaucitronAllow">';
      html +=
        '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
        tarteaucitron.lang.allow;
      html += "       </button> ";
      html +=
        '       <button type="button" aria-label="' +
        tarteaucitron.lang.deny +
        " " +
        service.name +
        '" id="' +
        service.key +
        'Denied" class="tarteaucitronDeny">';
      html +=
        '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' +
        tarteaucitron.lang.deny;
      html += "       </button>";
      html += "   </div>";
      html += "</li>";
      tarteaucitron.userInterface.css(
        "tarteaucitronServicesTitle_" + service.type,
        "display",
        "block"
      );
      if (
        document.getElementById("tarteaucitronServices_" + service.type) !==
        null
      ) {
        document.getElementById(
          "tarteaucitronServices_" + service.type
        ).innerHTML += html;
      }
      tarteaucitron.userInterface.css(
        "tarteaucitronNoServicesTitle",
        "display",
        "none"
      );
      tarteaucitron.userInterface.order(service.type);
      tarteaucitron.addClickEventToId(service.key + "Allowed", function () {
        tarteaucitron.userInterface.respond(this, true);
      });
      tarteaucitron.addClickEventToId(service.key + "Denied", function () {
        tarteaucitron.userInterface.respond(this, false);
      });
    }
    tarteaucitron.pro("!" + service.key + "=" + isAllowed);
    if (isResponded === false && tarteaucitron.user.bypass === true) {
      isAllowed = true;
      tarteaucitron.cookie.create(service.key, true);
    }
    if (
      (!isResponded &&
        (isAutostart || (isNavigating && isWaiting)) &&
        !tarteaucitron.highPrivacy) ||
      isAllowed
    ) {
      if (
        !isAllowed ||
        (!service.needConsent && cookie.indexOf(service.key + "=false") < 0)
      ) {
        tarteaucitron.cookie.create(service.key, true);
      }
      if (tarteaucitron.launch[service.key] !== true) {
        tarteaucitron.launch[service.key] = true;
        if (
          typeof tarteaucitronMagic === "undefined" ||
          tarteaucitronMagic.indexOf("_" + service.key + "_") < 0
        ) {
          service.js();
        }
        tarteaucitron.sendEvent(service.key + "_loaded");
      }
      tarteaucitron.state[service.key] = true;
      tarteaucitron.userInterface.color(service.key, true);
    } else if (isDenied) {
      if (typeof service.fallback === "function") {
        if (
          typeof tarteaucitronMagic === "undefined" ||
          tarteaucitronMagic.indexOf("_" + service.key + "_") < 0
        ) {
          service.fallback();
        }
      }
      tarteaucitron.state[service.key] = false;
      tarteaucitron.userInterface.color(service.key, false);
    } else if (
      !isResponded &&
      isDNTRequested &&
      tarteaucitron.handleBrowserDNTRequest
    ) {
      tarteaucitron.cookie.create(service.key, "false");
      if (typeof service.fallback === "function") {
        if (
          typeof tarteaucitronMagic === "undefined" ||
          tarteaucitronMagic.indexOf("_" + service.key + "_") < 0
        ) {
          service.fallback();
        }
      }
      tarteaucitron.state[service.key] = false;
      tarteaucitron.userInterface.color(service.key, false);
    } else if (!isResponded) {
      tarteaucitron.cookie.create(service.key, state);
      if (
        typeof tarteaucitronMagic === "undefined" ||
        tarteaucitronMagic.indexOf("_" + service.key + "_") < 0
      ) {
        if (true === state && typeof service.js === "function") {
          service.js();
          tarteaucitron.sendEvent(service.key + "_loaded");
        } else if (typeof service.fallback === "function") {
          service.fallback();
        }
      }
      tarteaucitron.userInterface.color(service.key, state);
      if ("wait" === state) {
        tarteaucitron.userInterface.openAlert();
      }
    }
    tarteaucitron.cookie.checkCount(service.key);
    tarteaucitron.sendEvent(service.key + "_added");
  },
  sendEvent: function (event_key) {
    if (event_key !== undefined) {
      var send_event_item;
      if (typeof Event === "function") {
        send_event_item = new Event(event_key);
      } else if (typeof document.createEvent === "function") {
        send_event_item = document.createEvent("Event");
        send_event_item.initEvent(event_key, true, true);
      }
      document.dispatchEvent(send_event_item);
    }
  },
  cleanArray: function cleanArray(arr) {
    "use strict";
    var i,
      len = arr.length,
      out = [],
      obj = {},
      s = tarteaucitron.services;
    for (i = 0; i < len; i += 1) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = {};
        if (tarteaucitron.services[arr[i]] !== undefined) {
          out.push(arr[i]);
        }
      }
    }
    out = out.sort(function (a, b) {
      if (s[a].type + s[a].key > s[b].type + s[b].key) {
        return 1;
      }
      if (s[a].type + s[a].key < s[b].type + s[b].key) {
        return -1;
      }
      return 0;
    });
    return out;
  },
  setConsent: function (id, status) {
    if (status === true) {
      tarteaucitron.userInterface.respond(
        document.getElementById(id + "Allowed"),
        true
      );
    } else if (status === false) {
      tarteaucitron.userInterface.respond(
        document.getElementById(id + "Denied"),
        false
      );
    }
  },
  userInterface: {
    css: function (id, property, value) {
      "use strict";
      if (document.getElementById(id) !== null) {
        if (
          property == "display" &&
          value == "none" &&
          (id == "tarteaucitron" ||
            id == "tarteaucitronBack" ||
            id == "tarteaucitronAlertBig")
        ) {
          document.getElementById(id).style["opacity"] = "0";
          document.getElementById(id).style[property] = value;
        } else {
          document.getElementById(id).style[property] = value;
          if (
            property == "display" &&
            value == "block" &&
            (id == "tarteaucitron" || id == "tarteaucitronAlertBig")
          ) {
            document.getElementById(id).style["opacity"] = "1";
          }
          if (
            property == "display" &&
            value == "block" &&
            id == "tarteaucitronBack"
          ) {
            document.getElementById(id).style["opacity"] = "0.7";
          }
          if (
            property == "display" &&
            value == "block" &&
            id == "tarteaucitronAlertBig" &&
            (tarteaucitron.parameters.orientation == "middle" ||
              tarteaucitron.parameters.orientation == "popup")
          ) {
            tarteaucitron.userInterface.focusTrap("tarteaucitronAlertBig");
          }
        }
      }
    },
    addClass: function (id, className) {
      "use strict";
      if (
        document.getElementById(id) !== null &&
        document.getElementById(id).classList !== undefined
      ) {
        document.getElementById(id).classList.add(className);
      }
    },
    removeClass: function (id, className) {
      "use strict";
      if (
        document.getElementById(id) !== null &&
        document.getElementById(id).classList !== undefined
      ) {
        document.getElementById(id).classList.remove(className);
      }
    },
    respondAll: function (status, type, allowSafeAnalytics) {
      "use strict";
      var s = tarteaucitron.services,
        service,
        key,
        index = 0;
      for (index = 0; index < tarteaucitron.job.length; index += 1) {
        if (
          typeof type !== "undefined" &&
          type !== "" &&
          s[tarteaucitron.job[index]].type !== type
        ) {
          continue;
        }
        if (
          allowSafeAnalytics &&
          typeof s[tarteaucitron.job[index]].safeanalytic !== "undefined" &&
          s[tarteaucitron.job[index]].safeanalytic === true
        ) {
          continue;
        }
        service = s[tarteaucitron.job[index]];
        key = service.key;
        if (tarteaucitron.state[key] !== status) {
          if (status === false && tarteaucitron.launch[key] === true) {
            tarteaucitron.reloadThePage = true;
            if (tarteaucitron.checkIfExist("tarteaucitronClosePanel")) {
              var ariaCloseValue =
                document
                  .getElementById("tarteaucitronClosePanel")
                  .textContent.trim() +
                " (" +
                tarteaucitron.lang.reload +
                ")";
              document
                .getElementById("tarteaucitronClosePanel")
                .setAttribute("aria-label", ariaCloseValue);
              document
                .getElementById("tarteaucitronClosePanel")
                .setAttribute("title", ariaCloseValue);
            }
          }
          if (tarteaucitron.launch[key] !== true && status === true) {
            tarteaucitron.pro("!" + key + "=engage");
            tarteaucitron.launch[key] = true;
            if (
              typeof tarteaucitronMagic === "undefined" ||
              tarteaucitronMagic.indexOf("_" + key + "_") < 0
            ) {
              tarteaucitron.services[key].js();
            }
            tarteaucitron.sendEvent(key + "_loaded");
          }
          var itemStatusElem = document.getElementById(
            "tacCurrentStatus" + key
          );
          tarteaucitron.state[key] = status;
          tarteaucitron.cookie.create(key, status);
          tarteaucitron.userInterface.color(key, status);
          if (status == true) {
            itemStatusElem.innerHTML = tarteaucitron.lang.allowed;
            tarteaucitron.sendEvent(key + "_allowed");
          } else {
            itemStatusElem.innerHTML = tarteaucitron.lang.disallowed;
            tarteaucitron.sendEvent(key + "_disallowed");
          }
        }
      }
    },
    respond: function (el, status) {
      "use strict";
      if (el.id === "") {
        return;
      }
      var key = el.id.replace(new RegExp("(Eng[0-9]+|Allow|Deni)ed", "g"), "");
      if (key.substring(0, 13) === "tarteaucitron" || key === "") {
        return;
      }
      if (tarteaucitron.state[key] === status) {
        return;
      }
      if (status === false && tarteaucitron.launch[key] === true) {
        tarteaucitron.reloadThePage = true;
        if (tarteaucitron.checkIfExist("tarteaucitronClosePanel")) {
          var ariaCloseValue =
            document
              .getElementById("tarteaucitronClosePanel")
              .textContent.trim() +
            " (" +
            tarteaucitron.lang.reload +
            ")";
          document
            .getElementById("tarteaucitronClosePanel")
            .setAttribute("aria-label", ariaCloseValue);
          document
            .getElementById("tarteaucitronClosePanel")
            .setAttribute("title", ariaCloseValue);
        }
      }
      if (status === true) {
        if (tarteaucitron.launch[key] !== true) {
          tarteaucitron.pro("!" + key + "=engage");
          tarteaucitron.launch[key] = true;
          if (
            typeof tarteaucitronMagic === "undefined" ||
            tarteaucitronMagic.indexOf("_" + key + "_") < 0
          ) {
            tarteaucitron.services[key].js();
          }
          tarteaucitron.sendEvent(key + "_loaded");
        }
      }
      var itemStatusElem = document.getElementById("tacCurrentStatus" + key);
      tarteaucitron.state[key] = status;
      tarteaucitron.cookie.create(key, status);
      tarteaucitron.userInterface.color(key, status);
      if (status == true) {
        itemStatusElem.innerHTML = tarteaucitron.lang.allowed;
        tarteaucitron.sendEvent(key + "_allowed");
      } else {
        itemStatusElem.innerHTML = tarteaucitron.lang.disallowed;
        tarteaucitron.sendEvent(key + "_disallowed");
      }
    },
    color: function (key, status) {
      "use strict";
      var c = "tarteaucitron",
        nbDenied = 0,
        nbPending = 0,
        nbAllowed = 0,
        sum = tarteaucitron.job.length,
        index,
        s = tarteaucitron.services;
      if (key !== "") {
        if (status === true) {
          tarteaucitron.userInterface.addClass(
            key + "Line",
            "tarteaucitronIsAllowed"
          );
          tarteaucitron.userInterface.removeClass(
            key + "Line",
            "tarteaucitronIsDenied"
          );
          document
            .getElementById(key + "Allowed")
            .setAttribute("aria-pressed", "true");
          document
            .getElementById(key + "Denied")
            .setAttribute("aria-pressed", "false");
        } else if (status === false) {
          tarteaucitron.userInterface.removeClass(
            key + "Line",
            "tarteaucitronIsAllowed"
          );
          tarteaucitron.userInterface.addClass(
            key + "Line",
            "tarteaucitronIsDenied"
          );
          document
            .getElementById(key + "Allowed")
            .setAttribute("aria-pressed", "false");
          document
            .getElementById(key + "Denied")
            .setAttribute("aria-pressed", "true");
        } else {
          document
            .getElementById(key + "Allowed")
            .setAttribute("aria-pressed", "false");
          document
            .getElementById(key + "Denied")
            .setAttribute("aria-pressed", "false");
        }
        var sumToRemove = 0;
        for (index = 0; index < sum; index += 1) {
          if (
            typeof s[tarteaucitron.job[index]].safeanalytic !== "undefined" &&
            s[tarteaucitron.job[index]].safeanalytic === true
          ) {
            sumToRemove += 1;
            continue;
          }
          if (tarteaucitron.state[tarteaucitron.job[index]] === false) {
            nbDenied += 1;
          } else if (
            tarteaucitron.state[tarteaucitron.job[index]] === undefined
          ) {
            nbPending += 1;
          } else if (tarteaucitron.state[tarteaucitron.job[index]] === true) {
            nbAllowed += 1;
          }
        }
        sum -= sumToRemove;
        tarteaucitron.userInterface.css(
          c + "DotGreen",
          "width",
          (100 / sum) * nbAllowed + "%"
        );
        tarteaucitron.userInterface.css(
          c + "DotYellow",
          "width",
          (100 / sum) * nbPending + "%"
        );
        tarteaucitron.userInterface.css(
          c + "DotRed",
          "width",
          (100 / sum) * nbDenied + "%"
        );
        if (nbDenied === 0 && nbPending === 0) {
          tarteaucitron.userInterface.removeClass(
            c + "AllDenied",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.addClass(
            c + "AllAllowed",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.addClass(
            c + "MainLineOffset",
            c + "IsAllowed"
          );
          tarteaucitron.userInterface.removeClass(
            c + "MainLineOffset",
            c + "IsDenied"
          );
          document
            .getElementById(c + "AllDenied")
            .setAttribute("aria-pressed", "false");
          document
            .getElementById(c + "AllAllowed")
            .setAttribute("aria-pressed", "true");
        } else if (nbAllowed === 0 && nbPending === 0) {
          tarteaucitron.userInterface.removeClass(
            c + "AllAllowed",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.addClass(
            c + "AllDenied",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.removeClass(
            c + "MainLineOffset",
            c + "IsAllowed"
          );
          tarteaucitron.userInterface.addClass(
            c + "MainLineOffset",
            c + "IsDenied"
          );
          document
            .getElementById(c + "AllDenied")
            .setAttribute("aria-pressed", "true");
          document
            .getElementById(c + "AllAllowed")
            .setAttribute("aria-pressed", "false");
        } else {
          tarteaucitron.userInterface.removeClass(
            c + "AllAllowed",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.removeClass(
            c + "AllDenied",
            c + "IsSelected"
          );
          tarteaucitron.userInterface.removeClass(
            c + "MainLineOffset",
            c + "IsAllowed"
          );
          tarteaucitron.userInterface.removeClass(
            c + "MainLineOffset",
            c + "IsDenied"
          );
          document
            .getElementById(c + "AllDenied")
            .setAttribute("aria-pressed", "false");
          document
            .getElementById(c + "AllAllowed")
            .setAttribute("aria-pressed", "false");
        }
        if (nbPending === 0) {
          tarteaucitron.userInterface.closeAlert();
        }
        if (
          tarteaucitron.services[key].cookies.length > 0 &&
          status === false
        ) {
          tarteaucitron.cookie.purge(tarteaucitron.services[key].cookies);
        }
        if (status === true) {
          if (document.getElementById("tacCL" + key) !== null) {
            document.getElementById("tacCL" + key).innerHTML = "...";
          }
          setTimeout(function () {
            tarteaucitron.cookie.checkCount(key);
          }, 2500);
        } else {
          tarteaucitron.cookie.checkCount(key);
        }
      }
      var cats = document.querySelectorAll(
        '[id^="tarteaucitronServicesTitle_"]'
      );
      Array.prototype.forEach.call(cats, function (item) {
        var cat = item
            .getAttribute("id")
            .replace(/^(tarteaucitronServicesTitle_)/, ""),
          total = document.getElementById(
            "tarteaucitronServices_" + cat
          ).childElementCount;
        var doc = document.getElementById("tarteaucitronServices_" + cat),
          groupdenied = 0,
          groupallowed = 0;
        for (var ii = 0; ii < doc.children.length; ii++) {
          if (
            doc.children[ii].className ==
            "tarteaucitronLine tarteaucitronIsDenied"
          ) {
            groupdenied++;
          }
          if (
            doc.children[ii].className ==
            "tarteaucitronLine tarteaucitronIsAllowed"
          ) {
            groupallowed++;
          }
        }
        if (total === groupallowed) {
          tarteaucitron.userInterface.removeClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsDenied"
          );
          tarteaucitron.userInterface.addClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsAllowed"
          );
          if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
            document
              .getElementById("tarteaucitron-reject-group-" + cat)
              .setAttribute("aria-pressed", "false");
            document
              .getElementById("tarteaucitron-accept-group-" + cat)
              .setAttribute("aria-pressed", "true");
          }
        }
        if (total === groupdenied) {
          tarteaucitron.userInterface.addClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsDenied"
          );
          tarteaucitron.userInterface.removeClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsAllowed"
          );
          if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
            document
              .getElementById("tarteaucitron-reject-group-" + cat)
              .setAttribute("aria-pressed", "true");
            document
              .getElementById("tarteaucitron-accept-group-" + cat)
              .setAttribute("aria-pressed", "false");
          }
        }
        if (total !== groupdenied && total !== groupallowed) {
          tarteaucitron.userInterface.removeClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsDenied"
          );
          tarteaucitron.userInterface.removeClass(
            "tarteaucitron-group-" + cat,
            "tarteaucitronIsAllowed"
          );
          if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
            document
              .getElementById("tarteaucitron-reject-group-" + cat)
              .setAttribute("aria-pressed", "false");
            document
              .getElementById("tarteaucitron-accept-group-" + cat)
              .setAttribute("aria-pressed", "false");
          }
        }
        groupdenied = 0;
        groupallowed = 0;
      });
    },
    openPanel: function () {
      "use strict";
      tarteaucitron.userInterface.css("tarteaucitron", "display", "block");
      tarteaucitron.userInterface.css("tarteaucitronBack", "display", "block");
      tarteaucitron.userInterface.css(
        "tarteaucitronCookiesListContainer",
        "display",
        "none"
      );
      document.getElementById("tarteaucitronClosePanel").focus();
      if (document.getElementsByTagName("body")[0].classList !== undefined) {
        document
          .getElementsByTagName("body")[0]
          .classList.add("tarteaucitron-modal-open");
      }
      tarteaucitron.userInterface.focusTrap("tarteaucitron");
      tarteaucitron.userInterface.jsSizing("main");
      var tacOpenPanelEvent;
      if (typeof Event === "function") {
        tacOpenPanelEvent = new Event("tac.open_panel");
      } else if (typeof document.createEvent === "function") {
        tacOpenPanelEvent = document.createEvent("Event");
        tacOpenPanelEvent.initEvent("tac.open_panel", true, true);
      }
      if (typeof window.dispatchEvent === "function") {
        window.dispatchEvent(tacOpenPanelEvent);
      }
    },
    closePanel: function () {
      "use strict";
      if (document.location.hash === tarteaucitron.hashtag) {
        if (window.history) {
          window.history.replaceState(
            "",
            document.title,
            window.location.pathname + window.location.search
          );
        } else {
          document.location.hash = "";
        }
      }
      if (tarteaucitron.checkIfExist("tarteaucitron")) {
        if (tarteaucitron.checkIfExist("tarteaucitronCloseAlert")) {
          document.getElementById("tarteaucitronCloseAlert").focus();
        } else if (tarteaucitron.checkIfExist("tarteaucitronManager")) {
          document.getElementById("tarteaucitronManager").focus();
        } else if (
          tarteaucitron.customCloserId &&
          tarteaucitron.checkIfExist(tarteaucitron.customCloserId)
        ) {
          document.getElementById(tarteaucitron.customCloserId).focus();
        }
        tarteaucitron.userInterface.css("tarteaucitron", "display", "none");
      }
      if (
        tarteaucitron.checkIfExist("tarteaucitronCookiesListContainer") &&
        tarteaucitron.checkIfExist("tarteaucitronCookiesNumber")
      ) {
        document.getElementById("tarteaucitronCookiesNumber").focus();
        document
          .getElementById("tarteaucitronCookiesNumber")
          .setAttribute("aria-expanded", "false");
        tarteaucitron.userInterface.css(
          "tarteaucitronCookiesListContainer",
          "display",
          "none"
        );
      }
      tarteaucitron.fallback(
        ["tarteaucitronInfoBox"],
        function (elem) {
          elem.style.display = "none";
        },
        true
      );
      if (tarteaucitron.reloadThePage === true) {
        window.location.reload();
      } else {
        tarteaucitron.userInterface.css("tarteaucitronBack", "display", "none");
      }
      if (document.getElementsByTagName("body")[0].classList !== undefined) {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("tarteaucitron-modal-open");
      }
      var tacClosePanelEvent;
      if (typeof Event === "function") {
        tacClosePanelEvent = new Event("tac.close_panel");
      } else if (typeof document.createEvent === "function") {
        tacClosePanelEvent = document.createEvent("Event");
        tacClosePanelEvent.initEvent("tac.close_panel", true, true);
      }
      if (typeof window.dispatchEvent === "function") {
        window.dispatchEvent(tacClosePanelEvent);
      }
    },
    focusTrap: function (parentElement) {
      "use strict";
      var focusableEls, firstFocusableEl, lastFocusableEl, filtered;
      focusableEls = document
        .getElementById(parentElement)
        .querySelectorAll("a[href], button");
      filtered = [];
      for (var i = 0, max = focusableEls.length; i < max; i++) {
        if (focusableEls[i].offsetHeight > 0) {
          filtered.push(focusableEls[i]);
        }
      }
      firstFocusableEl = filtered[0];
      lastFocusableEl = filtered[filtered.length - 1];
      document
        .getElementById(parentElement)
        .addEventListener("keydown", function (evt) {
          if (evt.key === "Tab" || evt.keyCode === 9) {
            if (evt.shiftKey) {
              if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                evt.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                evt.preventDefault();
              }
            }
          }
        });
    },
    openAlert: function () {
      "use strict";
      var c = "tarteaucitron";
      tarteaucitron.userInterface.css(c + "Percentage", "display", "block");
      tarteaucitron.userInterface.css(c + "AlertSmall", "display", "none");
      tarteaucitron.userInterface.css(c + "Icon", "display", "none");
      tarteaucitron.userInterface.css(c + "AlertBig", "display", "block");
      tarteaucitron.userInterface.addClass(
        c + "Root",
        "tarteaucitronBeforeVisible"
      );
      var tacOpenAlertEvent;
      if (typeof Event === "function") {
        tacOpenAlertEvent = new Event("tac.open_alert");
      } else if (typeof document.createEvent === "function") {
        tacOpenAlertEvent = document.createEvent("Event");
        tacOpenAlertEvent.initEvent("tac.open_alert", true, true);
      }
      if (
        document.getElementById("tarteaucitronAlertBig") !== null &&
        tarteaucitron.parameters.orientation === "middle"
      ) {
        document.getElementById("tarteaucitronAlertBig").focus();
      }
      if (typeof window.dispatchEvent === "function") {
        window.dispatchEvent(tacOpenAlertEvent);
      }
    },
    closeAlert: function () {
      "use strict";
      var c = "tarteaucitron";
      tarteaucitron.userInterface.css(c + "Percentage", "display", "none");
      tarteaucitron.userInterface.css(c + "AlertSmall", "display", "block");
      tarteaucitron.userInterface.css(c + "Icon", "display", "block");
      tarteaucitron.userInterface.css(c + "AlertBig", "display", "none");
      tarteaucitron.userInterface.removeClass(
        c + "Root",
        "tarteaucitronBeforeVisible"
      );
      tarteaucitron.userInterface.jsSizing("box");
      var tacCloseAlertEvent;
      if (typeof Event === "function") {
        tacCloseAlertEvent = new Event("tac.close_alert");
      } else if (typeof document.createEvent === "function") {
        tacCloseAlertEvent = document.createEvent("Event");
        tacCloseAlertEvent.initEvent("tac.close_alert", true, true);
      }
      if (typeof window.dispatchEvent === "function") {
        window.dispatchEvent(tacCloseAlertEvent);
      }
    },
    toggleCookiesList: function () {
      "use strict";
      var div = document.getElementById("tarteaucitronCookiesListContainer"),
        togglediv = document.getElementById("tarteaucitronCookiesNumber");
      if (div === null) {
        return;
      }
      if (div.style.display !== "block") {
        tarteaucitron.cookie.number();
        div.style.display = "block";
        togglediv.setAttribute("aria-expanded", "true");
        tarteaucitron.userInterface.jsSizing("cookie");
        tarteaucitron.userInterface.css("tarteaucitron", "display", "none");
        tarteaucitron.userInterface.css(
          "tarteaucitronBack",
          "display",
          "block"
        );
        tarteaucitron.fallback(
          ["tarteaucitronInfoBox"],
          function (elem) {
            elem.style.display = "none";
          },
          true
        );
      } else {
        div.style.display = "none";
        togglediv.setAttribute("aria-expanded", "false");
        tarteaucitron.userInterface.css("tarteaucitron", "display", "none");
        tarteaucitron.userInterface.css("tarteaucitronBack", "display", "none");
      }
    },
    toggle: function (id, closeClass) {
      "use strict";
      var div = document.getElementById(id);
      if (div === null) {
        return;
      }
      if (closeClass !== undefined) {
        tarteaucitron.fallback(
          [closeClass],
          function (elem) {
            if (elem.id !== id) {
              elem.style.display = "none";
            }
          },
          true
        );
      }
      if (div.style.display !== "block") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    },
    order: function (id) {
      "use strict";
      var main = document.getElementById("tarteaucitronServices_" + id),
        allDivs,
        store = [],
        i;
      if (main === null) {
        return;
      }
      allDivs = main.childNodes;
      if (
        typeof Array.prototype.map === "function" &&
        typeof Enumerable === "undefined"
      ) {
        Array.prototype.map
          .call(main.children, Object)
          .sort(function (a, b) {
            if (
              tarteaucitron.services[a.id.replace(/Line/g, "")].name >
              tarteaucitron.services[b.id.replace(/Line/g, "")].name
            ) {
              return 1;
            }
            if (
              tarteaucitron.services[a.id.replace(/Line/g, "")].name <
              tarteaucitron.services[b.id.replace(/Line/g, "")].name
            ) {
              return -1;
            }
            return 0;
          })
          .forEach(function (element) {
            main.appendChild(element);
          });
      }
    },
    jsSizing: function (type) {
      "use strict";
      var scrollbarMarginRight = 10,
        scrollbarWidthParent,
        scrollbarWidthChild,
        servicesHeight,
        e = window,
        a = "inner",
        windowInnerHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
        mainTop,
        mainHeight,
        closeButtonHeight,
        headerHeight,
        cookiesListHeight,
        cookiesCloseHeight,
        cookiesTitleHeight,
        paddingBox,
        alertSmallHeight,
        cookiesNumberHeight;
      if (type === "box") {
        if (
          document.getElementById("tarteaucitronAlertSmall") !== null &&
          document.getElementById("tarteaucitronCookiesNumber") !== null
        ) {
          tarteaucitron.userInterface.css(
            "tarteaucitronCookiesNumber",
            "padding",
            "0px 10px"
          );
          alertSmallHeight = document.getElementById(
            "tarteaucitronAlertSmall"
          ).offsetHeight;
          cookiesNumberHeight = document.getElementById(
            "tarteaucitronCookiesNumber"
          ).offsetHeight;
          paddingBox = (alertSmallHeight - cookiesNumberHeight) / 2;
          tarteaucitron.userInterface.css(
            "tarteaucitronCookiesNumber",
            "padding",
            paddingBox + "px 10px"
          );
        }
      } else if (type === "main") {
        if (window.innerWidth === undefined) {
          a = "client";
          e = document.documentElement || document.body;
        }
        if (
          document.getElementById("tarteaucitron") !== null &&
          document.getElementById("tarteaucitronClosePanel") !== null &&
          document.getElementById("tarteaucitronMainLineOffset") !== null
        ) {
          tarteaucitron.userInterface.css(
            "tarteaucitronServices",
            "height",
            "auto"
          );
          mainHeight = document.getElementById("tarteaucitron").offsetHeight;
          closeButtonHeight = document.getElementById(
            "tarteaucitronClosePanel"
          ).offsetHeight;
          servicesHeight = mainHeight - closeButtonHeight + 4;
          tarteaucitron.userInterface.css(
            "tarteaucitronServices",
            "height",
            servicesHeight + "px"
          );
          tarteaucitron.userInterface.css(
            "tarteaucitronServices",
            "overflow-x",
            "auto"
          );
        }
        if (
          document.getElementById("tarteaucitronServices") !== null &&
          document.getElementById("tarteaucitronScrollbarChild") !== null
        ) {
          if (e[a + "Width"] <= 479) {
          } else if (e[a + "Width"] <= 767) {
            scrollbarMarginRight = 12;
          }
          scrollbarWidthParent = document.getElementById(
            "tarteaucitronServices"
          ).offsetWidth;
          scrollbarWidthChild = document.getElementById(
            "tarteaucitronScrollbarChild"
          ).offsetWidth;
        }
        if (document.getElementById("tarteaucitron") !== null) {
          if (e[a + "Width"] <= 767) {
            mainTop = 0;
          } else {
            mainTop =
              (windowInnerHeight -
                document.getElementById("tarteaucitron").offsetHeight) /
                2 -
              21;
          }
          if (document.getElementById("tarteaucitronMainLineOffset") !== null) {
            if (
              document.getElementById("tarteaucitron").offsetHeight <
              windowInnerHeight / 2
            ) {
              mainTop -= document.getElementById(
                "tarteaucitronMainLineOffset"
              ).offsetHeight;
            }
          }
          if (mainTop < 0) {
            mainTop = 0;
          }
          tarteaucitron.userInterface.css(
            "tarteaucitron",
            "top",
            mainTop + "px"
          );
        }
      } else if (type === "cookie") {
        if (document.getElementById("tarteaucitronAlertSmall") !== null) {
          tarteaucitron.userInterface.css(
            "tarteaucitronCookiesListContainer",
            "bottom",
            document.getElementById("tarteaucitronAlertSmall").offsetHeight +
              "px"
          );
        }
        if (
          document.getElementById("tarteaucitronCookiesListContainer") !== null
        ) {
          tarteaucitron.userInterface.css(
            "tarteaucitronCookiesList",
            "height",
            "auto"
          );
          cookiesListHeight = document.getElementById(
            "tarteaucitronCookiesListContainer"
          ).offsetHeight;
          cookiesCloseHeight = document.getElementById(
            "tarteaucitronClosePanelCookie"
          ).offsetHeight;
          cookiesTitleHeight = document.getElementById(
            "tarteaucitronCookiesTitle"
          ).offsetHeight;
          tarteaucitron.userInterface.css(
            "tarteaucitronCookiesList",
            "height",
            cookiesListHeight -
              cookiesCloseHeight -
              cookiesTitleHeight -
              2 +
              "px"
          );
        }
      }
    },
  },
  cookie: {
    owner: {},
    create: function (key, status) {
      "use strict";
      if (tarteaucitronForceExpire !== "") {
        if (
          (tarteaucitronExpireInDay && tarteaucitronForceExpire < 365) ||
          (!tarteaucitronExpireInDay && tarteaucitronForceExpire < 8760)
        ) {
          if (tarteaucitronExpireInDay) {
            timeExpire = tarteaucitronForceExpire * 864e5;
          } else {
            timeExpire = tarteaucitronForceExpire * 36e5;
          }
        }
      }
      var d = new Date(),
        time = d.getTime(),
        expireTime = time + timeExpire,
        regex = new RegExp("!" + key + "=(wait|true|false)", "g"),
        cookie = tarteaucitron.cookie.read().replace(regex, ""),
        value =
          tarteaucitron.parameters.cookieName +
          "=" +
          cookie +
          "!" +
          key +
          "=" +
          status,
        domain =
          tarteaucitron.parameters.cookieDomain !== undefined &&
          tarteaucitron.parameters.cookieDomain !== ""
            ? "; domain=" + tarteaucitron.parameters.cookieDomain
            : "",
        secure = location.protocol === "https:" ? "; Secure" : "";
      d.setTime(expireTime);
      document.cookie =
        value +
        "; expires=" +
        d.toGMTString() +
        "; path=/" +
        domain +
        secure +
        "; samesite=lax";
      tarteaucitron.sendEvent("tac.consent_updated");
    },
    read: function () {
      "use strict";
      var nameEQ = tarteaucitron.parameters.cookieName + "=",
        ca = document.cookie.split(";"),
        i,
        c;
      for (i = 0; i < ca.length; i += 1) {
        c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return "";
    },
    purge: function (arr) {
      "use strict";
      var i;
      for (i = 0; i < arr.length; i += 1) {
        var rgxpCookie = new RegExp(
          "^(.*;)?\\s*" + arr[i] + "\\s*=\\s*[^;]+(.*)?$"
        );
        if (document.cookie.match(rgxpCookie)) {
          document.cookie =
            arr[i] + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/;";
          document.cookie =
            arr[i] +
            "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=." +
            location.hostname +
            ";";
          document.cookie =
            arr[i] +
            "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=." +
            location.hostname.split(".").slice(-2).join(".") +
            ";";
        }
      }
    },
    checkCount: function (key) {
      "use strict";
      var arr = tarteaucitron.services[key].cookies,
        nb = arr.length,
        nbCurrent = 0,
        html = "",
        i,
        status = document.cookie.indexOf(key + "=true");
      if (status >= 0 && nb === 0) {
        html += tarteaucitron.lang.useNoCookie;
      } else if (status >= 0) {
        for (i = 0; i < nb; i += 1) {
          if (document.cookie.indexOf(arr[i] + "=") !== -1) {
            nbCurrent += 1;
            if (tarteaucitron.cookie.owner[arr[i]] === undefined) {
              tarteaucitron.cookie.owner[arr[i]] = [];
            }
            if (
              tarteaucitron.cookie.crossIndexOf(
                tarteaucitron.cookie.owner[arr[i]],
                tarteaucitron.services[key].name
              ) === false
            ) {
              tarteaucitron.cookie.owner[arr[i]].push(
                tarteaucitron.services[key].name
              );
            }
          }
        }
        if (nbCurrent > 0) {
          html +=
            tarteaucitron.lang.useCookieCurrent + " " + nbCurrent + " cookie";
          if (nbCurrent > 1) {
            html += "s";
          }
          html += ".";
        } else {
          html += tarteaucitron.lang.useNoCookie;
        }
      } else if (nb === 0) {
        html = tarteaucitron.lang.noCookie;
      } else {
        html += tarteaucitron.lang.useCookie + " " + nb + " cookie";
        if (nb > 1) {
          html += "s";
        }
        html += ".";
      }
      if (document.getElementById("tacCL" + key) !== null) {
        document.getElementById("tacCL" + key).innerHTML = html;
      }
    },
    crossIndexOf: function (arr, match) {
      "use strict";
      var i;
      for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === match) {
          return true;
        }
      }
      return false;
    },
    number: function () {
      "use strict";
      var cookies = document.cookie.split(";"),
        nb = document.cookie !== "" ? cookies.length : 0,
        html = "",
        i,
        name,
        namea,
        nameb,
        c,
        d,
        s = nb > 1 ? "s" : "",
        savedname,
        regex = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i,
        regexedDomain =
          tarteaucitron.cdn.match(regex) !== null
            ? tarteaucitron.cdn.match(regex)[1]
            : tarteaucitron.cdn,
        host =
          tarteaucitron.domain !== undefined
            ? tarteaucitron.domain
            : regexedDomain;
      cookies = cookies.sort(function (a, b) {
        namea = a.split("=", 1).toString().replace(/ /g, "");
        nameb = b.split("=", 1).toString().replace(/ /g, "");
        c =
          tarteaucitron.cookie.owner[namea] !== undefined
            ? tarteaucitron.cookie.owner[namea]
            : "0";
        d =
          tarteaucitron.cookie.owner[nameb] !== undefined
            ? tarteaucitron.cookie.owner[nameb]
            : "0";
        if (c + a > d + b) {
          return 1;
        }
        if (c + a < d + b) {
          return -1;
        }
        return 0;
      });
      if (document.cookie !== "") {
        for (i = 0; i < nb; i += 1) {
          name = cookies[i].split("=", 1).toString().replace(/ /g, "");
          if (
            tarteaucitron.cookie.owner[name] !== undefined &&
            tarteaucitron.cookie.owner[name].join(" // ") !== savedname
          ) {
            savedname = tarteaucitron.cookie.owner[name].join(" // ");
            html += '<div class="tarteaucitronHidden">';
            html +=
              '     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">';
            html += "        " + tarteaucitron.cookie.owner[name].join(" // ");
            html += "    </span>";
            html += '</div><ul class="cookie-list">';
          } else if (
            tarteaucitron.cookie.owner[name] === undefined &&
            host !== savedname
          ) {
            savedname = host;
            html += '<div class="tarteaucitronHidden">';
            html +=
              '     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">';
            html += "        " + host;
            html += "    </span>";
            html += '</div><ul class="cookie-list">';
          }
          html += '<li class="tarteaucitronCookiesListMain">';
          html +=
            '    <div class="tarteaucitronCookiesListLeft"><button type="button" class="purgeBtn" data-cookie="' +
            tarteaucitron.fixSelfXSS(cookies[i].split("=", 1)) +
            '"><strong>&times;</strong></button> <strong>' +
            tarteaucitron.fixSelfXSS(name) +
            "</strong>";
          html += "    </div>";
          html +=
            '    <div class="tarteaucitronCookiesListRight">' +
            tarteaucitron.fixSelfXSS(cookies[i].split("=").slice(1).join("=")) +
            "</div>";
          html += "</li>";
        }
        html += "</ul>";
      } else {
        html += '<div class="tarteaucitronCookiesListMain">';
        html +=
          '    <div class="tarteaucitronCookiesListLeft"><strong>-</strong></div>';
        html += '    <div class="tarteaucitronCookiesListRight"></div>';
        html += "</div>";
      }
      html += '<div class="tarteaucitronHidden tarteaucitron-spacer-20"></div>';
      if (document.getElementById("tarteaucitronCookiesList") !== null) {
        document.getElementById("tarteaucitronCookiesList").innerHTML = html;
      }
      if (document.getElementById("tarteaucitronCookiesNumber") !== null) {
        document.getElementById("tarteaucitronCookiesNumber").innerHTML = nb;
        document
          .getElementById("tarteaucitronCookiesNumber")
          .setAttribute(
            "aria-label",
            nb + " cookie" + s + " - " + tarteaucitron.lang.toggleInfoBox
          );
        document
          .getElementById("tarteaucitronCookiesNumber")
          .setAttribute(
            "title",
            nb + " cookie" + s + " - " + tarteaucitron.lang.toggleInfoBox
          );
      }
      if (document.getElementById("tarteaucitronCookiesNumberBis") !== null) {
        document.getElementById("tarteaucitronCookiesNumberBis").innerHTML =
          nb + " cookie" + s;
      }
      var purgeBtns = document.getElementsByClassName("purgeBtn");
      for (i = 0; i < purgeBtns.length; i++) {
        tarteaucitron.addClickEventToElement(purgeBtns[i], function () {
          tarteaucitron.cookie.purge([this.dataset.cookie]);
          tarteaucitron.cookie.number();
          tarteaucitron.userInterface.jsSizing("cookie");
          return false;
        });
      }
      for (i = 0; i < tarteaucitron.job.length; i += 1) {
        tarteaucitron.cookie.checkCount(tarteaucitron.job[i]);
      }
    },
  },
  fixSelfXSS: function (html) {
    return html
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },
  getLanguage: function () {
    "use strict";
    var availableLanguages =
        "ar,bg,ca,cn,cs,da,de,et,el,en,es,fi,fr,hr,hu,it,ja,ko,lb,lt,lv,nl,no,oc,pl,pt,ro,ru,se,sk,sv,tr,uk,vi,zh",
      defaultLanguage = "en";
    if (tarteaucitronForceLanguage !== "") {
      if (availableLanguages.indexOf(tarteaucitronForceLanguage) !== -1) {
        return tarteaucitronForceLanguage;
      }
    }
    if (
      document.documentElement.getAttribute("lang") !== undefined &&
      document.documentElement.getAttribute("lang") !== null
    ) {
      if (
        availableLanguages.indexOf(
          document.documentElement.getAttribute("lang").substr(0, 2)
        ) !== -1
      ) {
        return document.documentElement.getAttribute("lang").substr(0, 2);
      }
    }
    if (!navigator) {
      return defaultLanguage;
    }
    var lang =
        navigator.language ||
        navigator.browserLanguage ||
        navigator.systemLanguage ||
        navigator.userLang ||
        null,
      userLanguage = lang ? lang.substr(0, 2) : null;
    if (availableLanguages.indexOf(userLanguage) !== -1) {
      return userLanguage;
    }
    return defaultLanguage;
  },
  getLocale: function () {
    "use strict";
    if (!navigator) {
      return "en_US";
    }
    var lang =
        navigator.language ||
        navigator.browserLanguage ||
        navigator.systemLanguage ||
        navigator.userLang ||
        null,
      userLanguage = lang ? lang.substr(0, 2) : null;
    if (userLanguage === "fr") {
      return "fr_FR";
    } else if (userLanguage === "en") {
      return "en_US";
    } else if (userLanguage === "de") {
      return "de_DE";
    } else if (userLanguage === "es") {
      return "es_ES";
    } else if (userLanguage === "it") {
      return "it_IT";
    } else if (userLanguage === "pt") {
      return "pt_PT";
    } else if (userLanguage === "nl") {
      return "nl_NL";
    } else if (userLanguage === "el") {
      return "el_EL";
    } else {
      return "en_US";
    }
  },
  addScript: function (
    url,
    id,
    callback,
    execute,
    attrName,
    attrVal,
    internal
  ) {
    "use strict";
    var script,
      done = false;
    if (execute === false) {
      if (typeof callback === "function") {
        callback();
      }
    } else {
      script = document.createElement("script");
      if (id !== undefined) {
        script.id = id;
      }
      script.async = true;
      script.src = url;
      if (attrName !== undefined && attrVal !== undefined) {
        script.setAttribute(attrName, attrVal);
      }
      if (typeof callback === "function") {
        if (!tarteaucitron.parameters.useExternalJs || !internal) {
          script.onreadystatechange = script.onload = function () {
            var state = script.readyState;
            if (!done && (!state || /loaded|complete/.test(state))) {
              done = true;
              callback();
            }
          };
        } else {
          callback();
        }
      }
      if (!tarteaucitron.parameters.useExternalJs || !internal) {
        document.getElementsByTagName("head")[0].appendChild(script);
      }
    }
  },
  addInternalScript: function (url, id, callback, execute, attrName, attrVal) {
    tarteaucitron.addScript(
      url,
      id,
      callback,
      execute,
      attrName,
      attrVal,
      true
    );
  },
  checkIfExist: function (elemId) {
    "use strict";
    return (
      document.getElementById(elemId) !== null &&
      document.getElementById(elemId).offsetWidth !== 0 &&
      document.getElementById(elemId).offsetHeight !== 0
    );
  },
  makeAsync: {
    antiGhost: 0,
    buffer: "",
    init: function (url, id) {
      "use strict";
      var savedWrite = document.write,
        savedWriteln = document.writeln;
      document.write = function (content) {
        tarteaucitron.makeAsync.buffer += content;
      };
      document.writeln = function (content) {
        tarteaucitron.makeAsync.buffer += content.concat("\n");
      };
      setTimeout(function () {
        document.write = savedWrite;
        document.writeln = savedWriteln;
      }, 2e4);
      tarteaucitron.makeAsync.getAndParse(url, id);
    },
    getAndParse: function (url, id) {
      "use strict";
      if (tarteaucitron.makeAsync.antiGhost > 9) {
        tarteaucitron.makeAsync.antiGhost = 0;
        return;
      }
      tarteaucitron.makeAsync.antiGhost += 1;
      tarteaucitron.addInternalScript(url, "", function () {
        if (document.getElementById(id) !== null) {
          document.getElementById(id).innerHTML +=
            "<span class='tarteaucitron-display-none'>&nbsp;</span>" +
            tarteaucitron.makeAsync.buffer;
          tarteaucitron.makeAsync.buffer = "";
          tarteaucitron.makeAsync.execJS(id);
        }
      });
    },
    execJS: function (id) {
      var i, scripts, childId, type;
      if (document.getElementById(id) === null) {
        return;
      }
      scripts = document.getElementById(id).getElementsByTagName("script");
      for (i = 0; i < scripts.length; i += 1) {
        type =
          scripts[i].getAttribute("type") !== null
            ? scripts[i].getAttribute("type")
            : "";
        if (type === "") {
          type =
            scripts[i].getAttribute("language") !== null
              ? scripts[i].getAttribute("language")
              : "";
        }
        if (
          scripts[i].getAttribute("src") !== null &&
          scripts[i].getAttribute("src") !== ""
        ) {
          childId = id + Math.floor(Math.random() * 99999999999);
          document.getElementById(id).innerHTML +=
            '<div id="' + childId + '"></div>';
          tarteaucitron.makeAsync.getAndParse(
            scripts[i].getAttribute("src"),
            childId
          );
        } else if (type.indexOf("javascript") !== -1 || type === "") {
          eval(scripts[i].innerHTML);
        }
      }
    },
  },
  fallback: function (matchClass, content, noInner) {
    "use strict";
    var elems = document.getElementsByTagName("*"),
      i,
      index = 0;
    for (i in elems) {
      if (elems[i] !== undefined) {
        for (index = 0; index < matchClass.length; index += 1) {
          if (
            (" " + elems[i].className + " ").indexOf(
              " " + matchClass[index] + " "
            ) > -1
          ) {
            if (typeof content === "function") {
              if (noInner === true) {
                content(elems[i]);
              } else {
                elems[i].innerHTML = content(elems[i]);
              }
            } else {
              elems[i].innerHTML = content;
            }
          }
        }
      }
    }
  },
  engage: function (id) {
    "use strict";
    var html = "",
      r = Math.floor(Math.random() * 1e5),
      engage =
        tarteaucitron.services[id].name + " " + tarteaucitron.lang.fallback;
    if (tarteaucitron.lang["engage-" + id] !== undefined) {
      engage = tarteaucitron.lang["engage-" + id];
    }
    html += '<div class="tac_activate tac_activate_' + id + '">';
    html += '   <div class="tac_float">';
    html += "      " + engage;
    html +=
      '      <button type="button" class="tarteaucitronAllow" id="Eng' +
      r +
      "ed" +
      id +
      '">';
    html +=
      '          <span class="tarteaucitronCheck" aria-hidden="true"></span> ' +
      tarteaucitron.lang.allow;
    html += "       </button>";
    html += "   </div>";
    html += "</div>";
    return html;
  },
  extend: function (a, b) {
    "use strict";
    var prop;
    for (prop in b) {
      if (b.hasOwnProperty(prop)) {
        a[prop] = b[prop];
      }
    }
  },
  proTemp: "",
  proTimer: function () {
    "use strict";
    setTimeout(
      tarteaucitron.proPing,
      Math.floor(Math.random() * (1200 - 500 + 1)) + 500
    );
  },
  pro: function (list) {
    "use strict";
    tarteaucitron.proTemp += list;
    clearTimeout(tarteaucitron.proTimer);
    tarteaucitron.proTimer = setTimeout(
      tarteaucitron.proPing,
      Math.floor(Math.random() * (1200 - 500 + 1)) + 500
    );
  },
  proPing: function () {
    "use strict";
    if (
      tarteaucitron.uuid !== "" &&
      tarteaucitron.uuid !== undefined &&
      tarteaucitron.proTemp !== "" &&
      tarteaucitronStatsEnabled
    ) {
      var div = document.getElementById("tarteaucitronPremium"),
        timestamp = new Date().getTime(),
        url = "https://tarteaucitron.io/log/?";
      if (div === null) {
        return;
      }
      url += "account=" + tarteaucitron.uuid + "&";
      url += "domain=" + tarteaucitron.domain + "&";
      url += "status=" + encodeURIComponent(tarteaucitron.proTemp) + "&";
      url += "_time=" + timestamp;
      div.innerHTML =
        '<img src="' + url + '" class="tarteaucitron-display-none" alt="" />';
      tarteaucitron.proTemp = "";
    }
    tarteaucitron.cookie.number();
  },
  AddOrUpdate: function (source, custom) {
    for (var key in custom) {
      if (custom[key] instanceof Object) {
        source[key] = tarteaucitron.AddOrUpdate(source[key], custom[key]);
      } else {
        source[key] = custom[key];
      }
    }
    return source;
  },
  getElemWidth: function (elem) {
    return tarteaucitron.getElemAttr(elem, "width") || elem.clientWidth;
  },
  getElemHeight: function (elem) {
    return tarteaucitron.getElemAttr(elem, "height") || elem.clientHeight;
  },
  getElemAttr: function (elem, attr) {
    var attribute =
      elem.getAttribute("data-" + attr) || elem.getAttribute(attr);
    if (typeof attribute === "string") {
      return tarteaucitron.fixSelfXSS(attribute);
    }
    return "";
  },
  addClickEventToId: function (elemId, func) {
    tarteaucitron.addClickEventToElement(document.getElementById(elemId), func);
  },
  addClickEventToElement: function (e, func) {
    if (e) {
      if (e.addEventListener) {
        e.addEventListener("click", func);
      } else {
        e.attachEvent("onclick", func);
      }
    }
  },
  triggerJobsAfterAjaxCall: function () {
    tarteaucitron.job.forEach(function (e) {
      tarteaucitron.job.push(e);
    });
    var i;
    var allowBtns = document.getElementsByClassName("tarteaucitronAllow");
    for (i = 0; i < allowBtns.length; i++) {
      tarteaucitron.addClickEventToElement(allowBtns[i], function () {
        tarteaucitron.userInterface.respond(this, true);
      });
    }
    var denyBtns = document.getElementsByClassName("tarteaucitronDeny");
    for (i = 0; i < denyBtns.length; i++) {
      tarteaucitron.addClickEventToElement(denyBtns[i], function () {
        tarteaucitron.userInterface.respond(this, false);
      });
    }
  },
};
if (tarteaucitronForceLanguage == "") {
  var tarteaucitronForceLanguage = "fr";
}
var tarteaucitronCustomTextAll = {
  de: { middleBarHead: " Wir haben so viele Kekse!" },
  en: {
    middleBarHead: "We are the cookies!",
    alertBigPrivacy:
      "We would love to be your companions during your visit... is it ok for you?",
  },
  es: { middleBarHead: " \u00a1Nosotros somos algunas galletas!" },
  fr: {
    more: "Voir notre politique de cookies",
    middleBarHead: "Nous sommes les cookies !",
  },
  it: { middleBarHead: " I biscotti siamo noi!" },
};
if (tarteaucitronCustomTextAll[tarteaucitron.getLanguage()] !== undefined) {
  var tarteaucitronCustomText =
    tarteaucitronCustomTextAll[tarteaucitron.getLanguage()];
  window.addEventListener("tac.root_available", function () {
    if (
      tarteaucitronCustomTextAll[tarteaucitron.getLanguage()][
        "customprivacyurl"
      ] !== undefined &&
      tarteaucitronCustomTextAll[tarteaucitron.getLanguage()][
        "customprivacyurl"
      ] != ""
    ) {
      setTimeout(function () {
        tarteaucitron.addClickEventToId("tarteaucitronPrivacyUrl", function () {
          document.location =
            tarteaucitronCustomTextAll[tarteaucitron.getLanguage()][
              "customprivacyurl"
            ];
        });
        tarteaucitron.addClickEventToId(
          "tarteaucitronPrivacyUrlDialog",
          function () {
            document.location =
              tarteaucitronCustomTextAll[tarteaucitron.getLanguage()][
                "customprivacyurl"
              ];
          }
        );
      }, 600);
    }
  });
}
if (document.readyState !== "loading") {
  tarteaucitron.job = tarteaucitron.job || [];
  tarteaucitron.uuid = "227981ceac15a345a6eff30d4420ee2da90b83c3";
  tarteaucitron.user.facebookpixelId = "qwertyuiop";
  tarteaucitron.user.facebookpixelMore = function () {
    /* add here your optionnal facebook pixel function */
  };
  (tarteaucitron.job = tarteaucitron.job || []).push("facebookpixel");
  tarteaucitron.user.googleadsId = "dsfdsfsdf";
  (tarteaucitron.job = tarteaucitron.job || []).push("googleads");
  tarteaucitron.user.hubspotId = "sfsdf12efdsf1";
  (tarteaucitron.job = tarteaucitron.job || []).push("hubspot");
  tarteaucitron.user.googletagmanagerId = "GTM-5LS73DS";
  (tarteaucitron.job = tarteaucitron.job || []).push("googletagmanager");
  (tarteaucitron.job = tarteaucitron.job || []).push("gcmanalyticsstorage");
  function tarteaucitronProLoadServices() {}
  tarteaucitron.domain = "www.eskimoz.fr";
  tarteaucitronProLoadServices();
  tarteaucitron.init({
    partnersList: false,
    googleConsentMode: true,
    showDetailsOnClick: true,
    groupServices: false,
    mandatory: true,
    AcceptAllCta: true,
    DenyAllCta: true,
    cookieslist: false,
    adblocker: false,
    european: true,
    hashtag: "#consent",
    highPrivacy: true,
    orientation: "middle",
    removeCredit: true,
    showAlertSmall: false,
    privacyUrl: "https://www.eskimoz.fr/politique-de-confidentialite/",
    cookieName: "consent",
    useExternalCss: true,
    closePopup: false,
    enablemagic: false,
    expireindays: 365,
    handleBrowserDNTRequest: false,
    moreInfoLink: true,
    readmoreLink: "https://www.eskimoz.fr/politique-cookies/",
    iconSrc:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/%3E%3C/svg%3E",
    showIcon: true,
    iconPosition: "BottomRight",
    bodyPosition: "bottom",
    serviceDefaultState: "wait",
  });
  setTimeout(function () {
    tarteaucitronIsMagicPossible = false;
  }, 101);
} else {
  document.addEventListener("DOMContentLoaded", function () {
    tarteaucitron.job = tarteaucitron.job || [];
    tarteaucitron.uuid = "227981ceac15a345a6eff30d4420ee2da90b83c3";
    tarteaucitron.user.facebookpixelId = "qwertyuiop";
    tarteaucitron.user.facebookpixelMore = function () {
      /* add here your optionnal facebook pixel function */
    };
    (tarteaucitron.job = tarteaucitron.job || []).push("facebookpixel");
    tarteaucitron.user.googleadsId = "dsfdsfsdf";
    (tarteaucitron.job = tarteaucitron.job || []).push("googleads");
    tarteaucitron.user.hubspotId = "sfsdf12efdsf1";
    (tarteaucitron.job = tarteaucitron.job || []).push("hubspot");
    tarteaucitron.user.googletagmanagerId = "GTM-5LS73DS";
    (tarteaucitron.job = tarteaucitron.job || []).push("googletagmanager");
    (tarteaucitron.job = tarteaucitron.job || []).push("gcmanalyticsstorage");
    function tarteaucitronProLoadServices() {}
    tarteaucitron.domain = "www.eskimoz.fr";
    tarteaucitronProLoadServices();
    tarteaucitron.init({
      partnersList: false,
      googleConsentMode: true,
      showDetailsOnClick: true,
      groupServices: false,
      mandatory: true,
      AcceptAllCta: true,
      DenyAllCta: true,
      cookieslist: false,
      adblocker: false,
      european: true,
      hashtag: "#consent",
      highPrivacy: true,
      orientation: "middle",
      removeCredit: true,
      showAlertSmall: false,
      privacyUrl: "https://www.eskimoz.fr/politique-de-confidentialite/",
      cookieName: "consent",
      useExternalCss: true,
      closePopup: false,
      enablemagic: false,
      expireindays: 365,
      handleBrowserDNTRequest: false,
      moreInfoLink: true,
      readmoreLink: "https://www.eskimoz.fr/politique-cookies/",
      iconSrc:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath d='M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/%3E%3C/svg%3E",
      showIcon: true,
      iconPosition: "BottomRight",
      bodyPosition: "bottom",
      serviceDefaultState: "wait",
    });
    setTimeout(function () {
      tarteaucitronIsMagicPossible = false;
    }, 101);
  });
}
