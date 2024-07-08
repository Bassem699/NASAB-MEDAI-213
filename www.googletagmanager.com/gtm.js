// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "29",

      macros: [
        { function: "__e" },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-22174854-21",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "formId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "response.3.value",
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__c", vtp_value: "G-V0RLRTGJ6R" },
        { function: "__c", vtp_value: "https://tss.eskimoz.fr/" },
        {
          function: "__k",
          vtp_decodeCookie: true,
          vtp_name: "__gtm_campaign_url",
        },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "__gtm_referrer" },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__twitter_website_tag",
          metadata: ["map"],
          once_per_event: true,
          vtp_event_type: "PageView",
          vtp_twitter_pixel_id: "o0y1l",
          tag_id: 1,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "577964",
          tag_id: 2,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 1],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 3,
        },
        {
          function: "__sp",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableDynamicRemarketing: false,
          vtp_conversionId: "1019106421",
          vtp_customParamsFormat: "NONE",
          vtp_enableOgtRmktParams: true,
          vtp_enableUserId: true,
          vtp_url: ["macro", 2],
          vtp_enableRdpCheckbox: true,
          vtp_enableConversionLinkingSettings: true,
          tag_id: 5,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Form submission",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 1],
          vtp_eventAction: ["template", "Form ID: ", ["macro", 3]],
          vtp_eventLabel: ["template", "Form Subject: ", ["macro", 4]],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 7,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableCookieOverrides: false,
          tag_id: 17,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionValue: "1",
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "1019106421",
          vtp_conversionLabel: "qLKjCOmXltMBEPWo-eUD",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 18,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_conversionId: "1019106421",
          vtp_conversionLabel: "ul5wCLeOodMBEPWo-eUD",
          vtp_rdp: false,
          vtp_url: ["macro", 2],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 23,
        },
        {
          function: "__cvt_12829987_27",
          metadata: ["map"],
          once_per_event: true,
          vtp_originalLocationOption: false,
          vtp_urlCookieName: "__gtm_campaign_url",
          vtp_triggerParameters:
            "utm_source,utm_medium,utm_campaign,utm_term,utm_content,utm_id,gclid,adgroup,matchtype,placement,device",
          vtp_referrerCookieName: "__gtm_referrer",
          vtp_storeInCookieOption: true,
          tag_id: 28,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-72PR6RBQMG",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 37,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "Category",
              "parameterValue",
              "form_submission",
            ],
          ],
          vtp_eventName: "contact_form",
          vtp_measurementIdOverride: "G-72PR6RBQMG",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 38,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_load: true,
          vtp_tagId: ["macro", 7],
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "server_container_url",
              "parameterValue",
              ["macro", 8],
            ],
          ],
          tag_id: 43,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","289212398472413");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=289212398472413\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 4,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Edocument.addEventListener("wpcf7submit",function(a){window.dataLayer.push({event:"cf7submission_contact",formId:a.detail.contactFormId,response:a.detail.inputs})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 6,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Edocument.addEventListener("wpcf7mailsent",function(a){window.dataLayer.push({event:"cf7submission_course",formId:a.detail.contactFormId,response:a.detail.inputs})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 21,
        },
        {
          function: "__html",
          metadata: ["map"],
          teardown_tags: ["list", ["tag", 12, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efbq("track","Contact");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 26,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript" id="hs-script-loader" async defer data-gtmsrc="//js.hs-scripts.com/7930343.js"\u003E\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 34,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "cf7submission_contact" },
        { function: "_cn", arg0: ["macro", 5], arg1: "?submissionGuid" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
        { function: "_eq", arg0: ["macro", 0], arg1: "cf7submission_course" },
        { function: "_cn", arg0: ["macro", 5], arg1: "eskimoz.fr" },
        { function: "_cn", arg0: ["macro", 6], arg1: "/confirmation/" },
        { function: "_eq", arg0: ["macro", 6], arg1: "/contact/" },
        { function: "_cn", arg0: ["macro", 5], arg1: "/formation-seo/" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 2, 3, 5, 8, 12, 16],
        ],
        [
          ["if", 1],
          ["add", 4, 6, 15],
        ],
        [
          ["if", 2, 3],
          ["add", 6],
        ],
        [
          ["if", 4],
          ["add", 7],
        ],
        [
          ["if", 0, 5],
          ["add", 9, 11],
        ],
        [
          ["if", 0, 6],
          ["add", 10],
        ],
        [
          ["if", 0, 7],
          ["add", 13],
        ],
        [
          ["if", 0, 8],
          ["add", 14],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_12829987_27",
        [46, "a"],
        [52, "b", ["require", "getUrl"]],
        [52, "c", ["require", "getReferrerUrl"]],
        [52, "d", ["require", "createQueue"]],
        [52, "e", ["require", "setCookie"]],
        [52, "f", ["require", "queryPermission"]],
        [52, "g", ["require", "logToConsole"]],
        [41, "h"],
        [3, "h", false],
        [
          22,
          [17, [15, "a"], "storeInCookieOption"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [2, [17, [15, "a"], "triggerParameters"], "split", [7, ","]],
              ],
              [52, "j", ["b", "query"]],
              [
                52,
                "k",
                [
                  39,
                  [17, [15, "j"], "length"],
                  [2, [15, "j"], "split", [7, "&"]],
                  [7],
                ],
              ],
              [
                22,
                [
                  17,
                  [
                    2,
                    [15, "k"],
                    "filter",
                    [
                      7,
                      [
                        51,
                        "",
                        [7, "m"],
                        [
                          36,
                          [
                            18,
                            [
                              2,
                              [15, "i"],
                              "indexOf",
                              [7, [16, [2, [15, "m"], "split", [7, "="]], 0]],
                            ],
                            [27, 1],
                          ],
                        ],
                      ],
                    ],
                  ],
                  "length",
                ],
                [
                  46,
                  [
                    22,
                    ["f", "set_cookies", [17, [15, "a"], "urlCookieName"]],
                    [
                      46,
                      [
                        "e",
                        [17, [15, "a"], "urlCookieName"],
                        ["b"],
                        [8, "domain", "auto", "path", "/"],
                      ],
                    ],
                    [
                      46,
                      [
                        "g",
                        [
                          0,
                          [
                            0,
                            "Invalid permissions for writing ",
                            [17, [15, "a"], "urlCookieName"],
                          ],
                          " cookie!",
                        ],
                      ],
                      [3, "h", true],
                    ],
                  ],
                ],
              ],
              [52, "l", ["c", "host"]],
              [
                22,
                [
                  1,
                  [20, [2, [15, "l"], "indexOf", [7, ["b", "host"]]], [27, 1]],
                  [21, [15, "l"], ""],
                ],
                [
                  46,
                  [
                    22,
                    ["f", "set_cookies", [17, [15, "a"], "referrerCookieName"]],
                    [
                      46,
                      [
                        "e",
                        [17, [15, "a"], "referrerCookieName"],
                        ["c"],
                        [8, "domain", "auto", "path", "/"],
                      ],
                    ],
                    [
                      46,
                      [
                        "g",
                        [
                          0,
                          [
                            0,
                            "Invalid permissions for writing ",
                            [17, [15, "a"], "referrerCookieName"],
                          ],
                          " cookie!",
                        ],
                      ],
                      [3, "h", true],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "originalLocationOption"],
          [
            46,
            [
              22,
              [
                "f",
                "access_globals",
                "readwrite",
                [17, [15, "a"], "dataLayerName"],
              ],
              [
                46,
                [
                  53,
                  [52, "i", ["d", [17, [15, "a"], "dataLayerName"]]],
                  [52, "j", [8, "event", "originalLocation"]],
                  [43, [15, "j"], [17, [15, "a"], "dataLayerKey"], ["b"]],
                  ["i", [15, "j"]],
                ],
              ],
              [
                46,
                [
                  "g",
                  [
                    0,
                    [
                      0,
                      "Invalid permissions for creating ",
                      [17, [15, "a"], "dataLayerName"],
                    ],
                    " queue!",
                  ],
                ],
                [3, "h", true],
              ],
            ],
          ],
        ],
        [
          22,
          [15, "h"],
          [46, [2, [15, "a"], "gtmOnFailure", [7]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
        ],
      ],
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__twitter_website_tag",
        [46, "a"],
        [
          50,
          "h",
          [46],
          [41, "k"],
          [3, "k", ["c", "twq"]],
          [22, [15, "k"], [46, [36, [15, "k"]]]],
          [
            "g",
            "twq",
            [
              51,
              "",
              [7],
              [52, "m", ["c", "twq.exe.apply"]],
              [
                22,
                [15, "m"],
                [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]],
                [46, ["b", "twq.queue.push", [15, "arguments"]]],
              ],
            ],
            true,
          ],
          ["g", "twq.version", "1", true],
          ["g", "twq.queue", [7], true],
          [52, "l", [51, "", [7]]],
          [
            "d",
            "https://static.ads-twitter.com/uwt.js",
            [15, "l"],
            [15, "l"],
            "twitter_website_tag",
          ],
          [36, ["c", "twq"]],
        ],
        [52, "b", ["require", "callInWindow"]],
        [52, "c", ["require", "copyFromWindow"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setInWindow"]],
        [41, "i"],
        [3, "i", ["h"]],
        ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
        [
          52,
          "j",
          [
            "f",
            [30, [17, [15, "a"], "event_parameters"], [7]],
            "param_table_key_column",
            "param_table_value_column",
          ],
        ],
        [
          22,
          [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]],
          [
            46,
            [
              53,
              [41, "k"],
              [3, "k", [16, [15, "j"], "content_ids"]],
              [
                3,
                "k",
                [2, [2, [15, "k"], "split", [7, '"']], "join", [7, "'"]],
              ],
              [41, "l"],
              [
                3,
                "l",
                [
                  2,
                  [
                    2,
                    [15, "k"],
                    "slice",
                    [
                      7,
                      [2, [15, "k"], "indexOf", [7, "["]],
                      [2, [15, "k"], "indexOf", [7, "]"]],
                    ],
                  ],
                  "split",
                  [7, ","],
                ],
              ],
              [
                3,
                "l",
                [
                  2,
                  [15, "l"],
                  "map",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "m"],
                      [
                        36,
                        [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""],
                      ],
                    ],
                  ],
                ],
              ],
              [43, [15, "j"], "content_ids", [15, "l"]],
            ],
          ],
        ],
        ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __c: { 2: true, 4: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "29" },
    permissions: {
      __cvt_12829987_27: {
        access_globals: {
          keys: [{ key: "dataLayer", read: true, write: true, execute: false }],
        },
        get_referrer: { urlParts: "any" },
        set_cookies: {
          allowedCookies: [
            {
              name: "__gtm_campaign_url",
              domain: "*",
              path: "*",
              secure: "any",
              session: "any",
            },
            {
              name: "__gtm_referrer",
              domain: "*",
              path: "*",
              secure: "any",
              session: "any",
            },
          ],
        },
        get_url: { urlParts: "any" },
        logging: { environments: "debug" },
      },
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __c: {},
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __twitter_website_tag: {
        access_globals: {
          keys: [
            { key: "twq", read: true, write: true, execute: true },
            { key: "twq.exe", read: true, write: true, execute: true },
            { key: "twq.queue", read: true, write: true, execute: true },
            { key: "twq.queue.push", read: true, write: true, execute: true },
            { key: "twq.version", read: true, write: true, execute: false },
            { key: "twq.exe.apply", read: true, write: true, execute: true },
          ],
        },
        inject_script: { urls: ["https://static.ads-twitter.com/uwt.js"] },
      },
    },

    sandboxed_scripts: ["__cvt_12829987_27"],

    security_groups: {
      google: ["__c", "__e", "__googtag"],
      nonGoogleScripts: ["__bzi", "__twitter_website_tag"],
    },
  };

  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ja = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ea(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ka = function (a) {
      return (a.raw = a);
    },
    la = function (a, b) {
      a.raw = b;
      return a;
    },
    na = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    pa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    qa = function (a) {
      return a instanceof Array ? a : pa(na(a));
    },
    ra =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ja("Object.assign", function (a) {
    return a || ra;
  });
  var sa =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ta;
  if (typeof Object.setPrototypeOf == "function") ta = Object.setPrototypeOf;
  else {
    var ua;
    a: {
      var va = { a: !0 },
        wa = {};
      try {
        wa.__proto__ = va;
        ua = wa.a;
        break a;
      } catch (a) {}
      ua = !1;
    }
    ta = ua
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var xa = ta,
    ya = function (a, b) {
      a.prototype = sa(b.prototype);
      a.prototype.constructor = a;
      if (xa) xa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Qn = b.prototype;
    },
    Aa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Ba = this || self,
    Ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? Ca
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ia = function () {
    this.j = {};
    this.H = {};
  };
  ca = Ia.prototype;
  ca.get = function (a) {
    return this.j["dust." + a];
  };
  ca.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.j[a] = b);
  };
  ca.Lh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  ca.has = function (a) {
    return this.j.hasOwnProperty("dust." + a);
  };
  ca.vf = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.j[a];
  };
  var Ja = function () {};
  Ja.prototype.reset = function () {};
  var Ka = function (a, b) {
    this.O = a;
    this.parent = b;
    this.j = this.D = void 0;
    this.K = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ia();
  };
  Ka.prototype.add = function (a, b) {
    La(this, a, b, !1);
  };
  var La = function (a, b, c, d) {
    d ? a.values.Lh(b, c) : a.values.set(b, c);
  };
  Ka.prototype.set = function (a, b) {
    !this.values.has(a) && this.parent && this.parent.has(a)
      ? this.parent.set(a, b)
      : this.values.set(a, b);
  };
  Ka.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ka.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Na = function (a) {
    var b = new Ka(a.O, a);
    a.D && (b.D = a.D);
    b.K = a.K;
    b.j = a.j;
    return b;
  };
  Ka.prototype.H = function () {
    return this.O;
  };
  function Oa(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Pa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Pa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || typeof c.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.D;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Qa = function () {
    this.K = new Ja();
    this.j = new Ka(this.K);
  };
  Qa.prototype.H = function () {
    return this.K;
  };
  Qa.prototype.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.D(b);
  };
  Qa.prototype.D = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Pa(this.j, arguments[b]);
    return a;
  };
  Qa.prototype.O = function (a) {
    var b = Na(this.j);
    b.j = a;
    for (var c, d = 1; d < arguments.length; d++) c = Pa(b, arguments[d]);
    return c;
  };
  var Ra = function () {
    Ia.call(this);
    this.D = !1;
  };
  ya(Ra, Ia);
  var Ta = function (a, b) {
    var c = [],
      d;
    for (d in a.j)
      if (a.j.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Ra.prototype.set = function (a, b) {
    this.D || Ia.prototype.set.call(this, a, b);
  };
  Ra.prototype.Lh = function (a, b) {
    this.D || Ia.prototype.Lh.call(this, a, b);
  };
  Ra.prototype.vf = function (a) {
    this.D || Ia.prototype.vf.call(this, a);
  };
  Ra.prototype.Mb = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (a == null) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Wa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Xa = function (a) {
      if (!a || Va(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Wa(a, "constructor") &&
          !Wa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Wa(a, b);
    },
    h = function (a, b) {
      var c = b || (Va(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Wa(a, d)) {
          var e = a[d];
          Va(e) == "array"
            ? (Va(c[d]) != "array" && (c[d] = []), (c[d] = h(e, c[d])))
            : Xa(e)
            ? (Xa(c[d]) || (c[d] = {}), (c[d] = h(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Ya(a) {
    if (a == void 0 || Array.isArray(a) || Xa(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Za(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var $a = function (a) {
    this.j = [];
    this.H = !1;
    this.D = new Ra();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Za(b) ? (this.j[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  ca = $a.prototype;
  ca.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.j.length; c++) {
      var d = this.j[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof $a
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  ca.set = function (a, b) {
    if (!this.H)
      if (a === "length") {
        if (!Za(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.j.length = Number(b);
      } else Za(a) ? (this.j[Number(a)] = b) : this.D.set(a, b);
  };
  ca.get = function (a) {
    return a === "length"
      ? this.length()
      : Za(a)
      ? this.j[Number(a)]
      : this.D.get(a);
  };
  ca.length = function () {
    return this.j.length;
  };
  ca.fc = function () {
    for (var a = Ta(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
    return new $a(a);
  };
  var ab = function (a, b) {
    Za(b) ? delete a.j[Number(b)] : a.D.vf(b);
  };
  ca = $a.prototype;
  ca.pop = function () {
    return this.j.pop();
  };
  ca.push = function () {
    return this.j.push.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ca.shift = function () {
    return this.j.shift();
  };
  ca.splice = function (a, b) {
    return new $a(this.j.splice.apply(this.j, arguments));
  };
  ca.unshift = function () {
    return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ca.has = function (a) {
    return (Za(a) && this.j.hasOwnProperty(a)) || this.D.has(a);
  };
  ca.Mb = function () {
    this.H = !0;
    Object.freeze(this.j);
    this.D.Mb();
  };
  function bb(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var cb = function () {
    Ra.call(this);
  };
  ya(cb, Ra);
  cb.prototype.fc = function () {
    return new $a(Ta(this, 1));
  };
  var db = function (a) {
    for (var b = Ta(a, 3), c = new $a(), d = 0; d < b.length; d++) {
      var e = new $a(b[d]);
      c.push(e);
    }
    return c;
  };
  function eb() {
    for (var a = fb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function gb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var fb, hb;
  function jb(a) {
    fb = fb || gb();
    hb = hb || eb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(fb[m], fb[n], fb[p], fb[q]);
    }
    return b.join("");
  }
  function kb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = hb[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    fb = fb || gb();
    hb = hb || eb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var lb = {};
  function mb(a, b) {
    lb[a] = lb[a] || [];
    lb[a][b] = !0;
  }
  function nb(a) {
    var b = lb[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return jb(c.join("")).replace(/\.+$/, "");
  }
  function ob() {
    for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function pb() {}
  function qb(a) {
    return typeof a === "function";
  }
  function l(a) {
    return typeof a === "string";
  }
  function rb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function sb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function tb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function ub(a, b) {
    if (!rb(a) || !rb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function vb(a, b) {
    for (var c = new wb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function xb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function yb(a) {
    return Math.round(Number(a)) || 0;
  }
  function zb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function Ab(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function Bb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function Cb() {
    return new Date(Date.now());
  }
  function Db() {
    return Cb().getTime();
  }
  var wb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  wb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  function Eb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Fb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Gb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Hb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Ib(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function Jb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function Kb(a, b) {
    var c = G;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function Lb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Mb = /^\w{1,9}$/;
  function Nb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function (d, e) {
      Mb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Ob(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Pb(a) {
    if (a) {
      var b = a.split(",");
      if (b.length === 2 && b[0] === b[1]) return b[0];
    }
    return a;
  }
  var Qb,
    Rb = function () {
      if (Qb === void 0) {
        var a = null,
          b = Ba.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Ba.console && Ba.console.error(c.message);
          }
          Qb = a;
        } else Qb = a;
      }
      return Qb;
    };
  var Sb = function (a) {
    this.j = a;
  };
  Sb.prototype.toString = function () {
    return this.j + "";
  };
  var Tb = function (a) {
      return a instanceof Sb && a.constructor === Sb
        ? a.j
        : "type_error:TrustedResourceUrl";
    },
    Ub = {},
    Vb = function (a) {
      var b = a,
        c = Rb(),
        d = c ? c.createScriptURL(b) : b;
      return new Sb(d, Ub);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Wb = ka([""]),
    Xb = la(["\x00"], ["\\0"]),
    Yb = la(["\n"], ["\\n"]),
    Zb = la(["\x00"], ["\\u0000"]);
  function $b(a) {
    return a.toString().indexOf("`") === -1;
  }
  $b(function (a) {
    return a(Wb);
  }) ||
    $b(function (a) {
      return a(Xb);
    }) ||
    $b(function (a) {
      return a(Yb);
    }) ||
    $b(function (a) {
      return a(Zb);
    });
  var ac = function (a) {
    this.j = a;
  };
  ac.prototype.toString = function () {
    return this.j;
  };
  var bc = new ac("about:invalid#zClosurez");
  var cc = function (a) {
    this.Yl = a;
  };
  function dc(a) {
    return new cc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var ec = [
    dc("data"),
    dc("http"),
    dc("https"),
    dc("mailto"),
    dc("ftp"),
    new cc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function fc(a, b) {
    b = b === void 0 ? ec : b;
    if (a instanceof ac) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof cc && d.Yl(a)) return new ac(a);
    }
  }
  function gc(a) {
    var b;
    b = b === void 0 ? ec : b;
    return fc(a, b) || bc;
  }
  var hc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function ic(a) {
    var b;
    if (a instanceof ac)
      if (a instanceof ac) b = a.j;
      else throw Error("");
    else b = hc.test(a) ? a : void 0;
    return b;
  }
  var kc = function () {
    this.j = jc[0].toLowerCase();
  };
  kc.prototype.toString = function () {
    return this.j;
  };
  var lc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var mc = {},
    nc = function (a) {
      this.j = a;
    };
  nc.prototype.toString = function () {
    return this.j.toString();
  };
  function oc(a, b) {
    var c = [new kc()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof kc) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function pc(a, b) {
    var c = ic(b);
    c !== void 0 && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function qc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var G = window,
    H = document,
    rc = navigator,
    sc = function () {
      var a;
      try {
        a = rc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    tc = H.currentScript,
    uc = tc && tc.src,
    vc = function (a, b) {
      var c = G[a];
      G[a] = c === void 0 ? b : c;
      return G[a];
    };
  function wc(a) {
    return (rc.userAgent || "").indexOf(a) !== -1;
  }
  var xc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    yc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    zc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Ac(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Bc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      Ac(f, d, yc);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = Vb(qc(a));
      f.src = Tb(g);
      var k,
        m,
        n,
        p =
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector) == null
            ? void 0
            : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", k);
      xc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Cc = function () {
      if (uc) {
        var a = uc.toLowerCase();
        if (a.indexOf("https://") === 0) return 2;
        if (a.indexOf("http://") === 0) return 3;
      }
      return 1;
    },
    Dc = function (a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = H.createElement("iframe")), (k = !0));
      Ac(g, c, zc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      a !== void 0 && (g.src = a);
      if (k) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      xc(g, b);
      return g;
    },
    Ec = function (a, b, c, d) {
      var e = new Image(1, 1);
      Ac(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
      return e;
    },
    Fc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Gc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      G.setTimeout(a, 0);
    },
    Hc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Ic = function (a) {
      var b = a.innerText || a.textContent || "";
      b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Jc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d,
        e = qc("A<div>" + a + "</div>"),
        f = Rb(),
        g = f ? f.createHTML(e) : e;
      d = new nc(g, mc);
      if (c.nodeType === 1) {
        var k = c.tagName;
        if (k === "SCRIPT" || k === "STYLE") throw Error("");
      }
      c.innerHTML =
        d instanceof nc && d.constructor === nc ? d.j : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Kc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Lc = function (a) {
      var b;
      try {
        b = rc.sendBeacon && rc.sendBeacon(a);
      } catch (c) {
        mb("TAGGING", 15);
      }
      b || Ec(a);
    },
    Mc = function (a, b) {
      try {
        return rc.sendBeacon(a, b);
      } catch (c) {
        mb("TAGGING", 15);
      }
      return !1;
    },
    Nc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Oc = function (a, b, c) {
      if ("fetch" in G) {
        var d = Object.assign({}, Nc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          var e = G.fetch(a, d);
          e && e.catch(pb);
          return !0;
        } catch (f) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Mc(a, b);
      Lc(a);
      return !0;
    },
    Pc = function (a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c;
    },
    Qc = function () {
      var a = G.performance;
      if (a && qb(a.now)) return a.now();
    },
    Rc = function () {
      return G.performance || void 0;
    };
  function Sc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Tc(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Uc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Vc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Wc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Xc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = G.location.href;
        b instanceof cb &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var Yc = function (a, b) {
    Ra.call(this);
    this.K = a;
    this.O = b;
  };
  ya(Yc, Ra);
  ca = Yc.prototype;
  ca.toString = function () {
    return this.K;
  };
  ca.getName = function () {
    return this.K;
  };
  ca.fc = function () {
    return new $a(Ta(this, 1));
  };
  ca.invoke = function (a) {
    return this.O.apply(
      new Zc(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ca.fb = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var Zc = function (a, b) {
    this.j = a;
    this.F = b;
  };
  Zc.prototype.evaluate = function (a) {
    var b = this.F;
    return Array.isArray(a) ? Pa(b, a) : a;
  };
  Zc.prototype.getName = function () {
    return this.j.getName();
  };
  Zc.prototype.H = function () {
    return this.F.H();
  };
  var $c = function () {
    this.map = new Map();
  };
  $c.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  $c.prototype.get = function (a) {
    return this.map.get(a);
  };
  var ad = function () {
    this.keys = [];
    this.values = [];
  };
  ad.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  ad.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function bd() {
    try {
      return Map ? new $c() : new ad();
    } catch (a) {
      return new ad();
    }
  }
  var cd = function (a) {
    if (a instanceof cd) return a;
    if (Ya(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  cd.prototype.getValue = function () {
    return this.value;
  };
  cd.prototype.toString = function () {
    return String(this.value);
  };
  var ed = function (a) {
    Ra.call(this);
    this.promise = a;
    this.set("then", dd(this));
    this.set("catch", dd(this, !0));
    this.set("finally", dd(this, !1, !0));
  };
  ya(ed, cb);
  var dd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Yc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Yc || (d = void 0);
      e instanceof Yc || (e = void 0);
      var f = Na(this.F),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new ed(k);
    });
  };
  function J(a, b, c) {
    var d = bd(),
      e = function (g, k) {
        for (var m = Ta(g, 1), n = 0; n < m.length; n++)
          k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof $a) {
          var m = [];
          d.set(g, m);
          for (var n = g.fc(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof ed) return g.promise;
        if (g instanceof cb) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Yc) {
          var r = function () {
            for (
              var u = Array.prototype.slice.call(arguments, 0), v = 0;
              v < u.length;
              v++
            )
              u[v] = fd(u[v], b, c);
            var w = new Ka(b ? b.H() : new Ja());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(u)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof cd && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function fd(a, b, c) {
    var d = bd(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || xb(g)) {
          var m = new $a([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Xa(g)) {
          var p = new cb();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Yc("", function () {
            for (
              var x = Array.prototype.slice.call(arguments, 0), y = 0;
              y < x.length;
              y++
            )
              x[y] = J(this.evaluate(x[y]), b, c);
            return f((0, this.F.K)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var v = typeof g;
        if (g === null || v === "string" || v === "number" || v === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new cd(g);
      };
    return f(a);
  }
  function gd() {
    var a = !1;
    return a;
  }
  var hd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof $a)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new $a(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new $a(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new $a(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = bb(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : ab(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new $a(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = bb(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : ab(this, d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var id = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ya(id, Error);
  var jd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    kd = new Ha("break"),
    ld = new Ha("continue");
  function md(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function nd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function od(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof $a))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (gd()) throw new id(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = J(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (gd()) throw new id(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (jd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = J(c, void 0, k);
        return fd(a[b].apply(a, m), this.F);
      }
      var n = "TypeError: " + b + " is not a function";
      if (gd()) throw new id(n);
      throw Error(n);
    }
    if (a instanceof $a) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Yc) {
          var q = bb(c);
          q.unshift(this.F);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (gd()) throw new id(r);
        throw Error(r);
      }
      if (hd.supportedMethods.indexOf(b) >= 0) {
        var t = bb(c);
        t.unshift(this.F);
        return hd[b].apply(a, t);
      }
    }
    if (a instanceof Yc || a instanceof cb) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof Yc) {
          var v = bb(c);
          v.unshift(this.F);
          return u.invoke.apply(u, v);
        }
        var w = "TypeError: " + b + " is not a function";
        if (gd()) throw new id(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Yc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a, bb(c));
    }
    if (a instanceof cd && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (gd()) throw new id(x);
    throw Error(x);
  }
  function pd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.F;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function qd() {
    var a = Na(this.F),
      b = Oa(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Ha) return b;
  }
  function rd() {
    return kd;
  }
  function sd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ha) return d;
    }
  }
  function td() {
    for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        La(a, c, d, !0);
      }
    }
  }
  function ud() {
    return ld;
  }
  function vd(a, b) {
    return new Ha(a, this.evaluate(b));
  }
  function wd(a, b) {
    var c = new $a();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.F.add(a, this.evaluate(e));
  }
  function xd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function yd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof cd,
      d = b instanceof cd;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function zd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Ad(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Oa(f, d);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Bd(a, b, c) {
    if (typeof b === "string")
      return Ad(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof cb || b instanceof $a || b instanceof Yc) {
      var d = b.fc(),
        e = d.length();
      return Ad(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        var f = Na(d);
        La(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Bd(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        var f = Na(d);
        La(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Id(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Gd(
      function (e) {
        var f = Na(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    if (typeof b === "string")
      return Ad(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof $a)
      return Ad(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (gd()) throw new id("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Jd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof $a))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.F;
    d = this.evaluate(d);
    var k = Na(g);
    for (e(g, k); Pa(k, b); ) {
      var m = Oa(k, d);
      if (m instanceof Ha) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Na(g);
      e(k, n);
      Pa(n, c);
      k = n;
    }
  }
  function Kd(a, b) {
    var c = this.F,
      d = this.evaluate(b);
    if (!(d instanceof $a))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Yc(
      a,
      (function () {
        return function (f) {
          var g = Na(c);
          g.j === void 0 && (g.j = this.F.j);
          for (
            var k = Array.prototype.slice.call(arguments, 0), m = 0;
            m < k.length;
            m++
          )
            if (((k[m] = this.evaluate(k[m])), k[m] instanceof Ha)) return k[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new $a(k));
          var q = Oa(g, e);
          if (q instanceof Ha) return q.type === "return" ? q.data : q;
        };
      })()
    );
  }
  function Ld(a) {
    a = this.evaluate(a);
    var b = this.F;
    if (Md && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Nd(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (gd()) throw new id(d);
      throw Error(d);
    }
    if (a instanceof cb || a instanceof $a || a instanceof Yc) c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Za(b) && (c = a[b]);
    else if (a instanceof cd) return;
    return c;
  }
  function Od(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Pd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Qd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof cd && (a = a.getValue());
    b instanceof cd && (b = b.getValue());
    return a === b;
  }
  function Rd(a, b) {
    return !Qd.call(this, a, b);
  }
  function Sd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Oa(this.F, d);
    if (e instanceof Ha) return e;
  }
  var Md = !1;
  function Td(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Ud(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Vd() {
    for (var a = new $a(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Wd() {
    for (var a = new cb(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Xd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Yd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Zd(a) {
    return -this.evaluate(a);
  }
  function $d(a) {
    return !this.evaluate(a);
  }
  function ae(a, b) {
    return !yd.call(this, a, b);
  }
  function be() {
    return null;
  }
  function ce(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function de(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ee(a) {
    return this.evaluate(a);
  }
  function fe() {
    return Array.prototype.slice.apply(arguments);
  }
  function ge(a) {
    return new Ha("return", this.evaluate(a));
  }
  function he(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (gd()) throw new id(d);
      throw Error(d);
    }
    (a instanceof Yc || a instanceof $a || a instanceof cb) && a.set(b, c);
    return c;
  }
  function ie(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function je(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ha)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ha && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function ke(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function le(a) {
    a = this.evaluate(a);
    return a instanceof Yc ? "function" : typeof a;
  }
  function me() {
    for (var a = this.F, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function ne(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Oa(this.F, e);
      if (f instanceof Ha) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Oa(this.F, e);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function oe(a) {
    return ~Number(this.evaluate(a));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function ue(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ve() {}
  function we(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ha) return g;
    } catch (r) {
      if (!(r instanceof id && a)) throw ((f = r instanceof id), r);
      var k = Na(this.F),
        m = new cd(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Oa(k, n);
      if (p instanceof Ha) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ha) return q;
      }
    }
  }
  var ye = function () {
    this.j = new Qa();
    xe(this);
  };
  ye.prototype.execute = function (a) {
    return this.j.D(a);
  };
  var xe = function (a) {
    var b = function (c, d) {
      var e = new Yc(String(c), d);
      e.Mb();
      a.j.j.set(String(c), e);
    };
    b("map", Wd);
    b("and", Sc);
    b("contains", Vc);
    b("equals", Tc);
    b("or", Uc);
    b("startsWith", Wc);
    b("variable", Xc);
  };
  var Ae = function () {
    this.D = !1;
    this.j = new Qa();
    ze(this);
    this.D = !0;
  };
  Ae.prototype.execute = function (a) {
    return Be(this.j.D(a));
  };
  var Ce = function (a, b, c) {
      return Be(a.j.O(b, c));
    },
    ze = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new Yc(e, d);
        f.Mb();
        a.j.j.set(e, f);
      };
      b(0, md);
      b(1, nd);
      b(2, od);
      b(3, pd);
      b(56, se);
      b(57, pe);
      b(58, oe);
      b(59, ue);
      b(60, qe);
      b(61, re);
      b(62, te);
      b(53, qd);
      b(4, rd);
      b(5, sd);
      b(52, td);
      b(6, ud);
      b(49, vd);
      b(7, Vd);
      b(8, Wd);
      b(9, sd);
      b(50, wd);
      b(10, xd);
      b(12, yd);
      b(13, zd);
      b(51, Kd);
      b(47, Cd);
      b(54, Dd);
      b(55, Ed);
      b(63, Jd);
      b(64, Fd);
      b(65, Hd);
      b(66, Id);
      b(15, Ld);
      b(16, Nd);
      b(17, Nd);
      b(18, Od);
      b(19, Pd);
      b(20, Qd);
      b(21, Rd);
      b(22, Sd);
      b(23, Td);
      b(24, Ud);
      b(25, Xd);
      b(26, Yd);
      b(27, Zd);
      b(28, $d);
      b(29, ae);
      b(45, be);
      b(30, ce);
      b(32, de);
      b(33, de);
      b(34, ee);
      b(35, ee);
      b(46, fe);
      b(36, ge);
      b(43, he);
      b(37, ie);
      b(38, je);
      b(39, ke);
      b(67, we);
      b(40, le);
      b(44, ve);
      b(41, me);
      b(42, ne);
    };
  Ae.prototype.H = function () {
    return this.j.H();
  };
  function Be(a) {
    if (
      a instanceof Ha ||
      a instanceof Yc ||
      a instanceof $a ||
      a instanceof cb ||
      a instanceof cd ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var De = function (a) {
    this.message = a;
  };
  function Ee(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new De(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Fe(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function He(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Ee(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Ee(a | b) + c);
  }
  var Ie = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      kk: a("consent"),
      Vh: a("convert_case_to"),
      Wh: a("convert_false_to"),
      Xh: a("convert_null_to"),
      Yh: a("convert_true_to"),
      Zh: a("convert_undefined_to"),
      dn: a("debug_mode_metadata"),
      oa: a("function"),
      Jg: a("instance_name"),
      Jk: a("live_only"),
      Kk: a("malware_disabled"),
      Lk: a("metadata"),
      Ok: a("original_activity_id"),
      sn: a("original_vendor_template_id"),
      rn: a("once_on_load"),
      Nk: a("once_per_event"),
      gj: a("once_per_load"),
      wn: a("priority_override"),
      xn: a("respected_consent_types"),
      pj: a("setup_tags"),
      me: a("tag_id"),
      vj: a("teardown_tags"),
    };
  })();
  var df;
  var ef = [],
    ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = {},
    lf,
    mf;
  function nf(a) {
    mf = mf || a;
  }
  function of(a) {}
  var pf,
    qf = [],
    rf = [];
  function sf(a, b) {
    var c = {};
    c[Ie.oa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function tf(a, b, c) {
    try {
      return lf(uf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function vf(a) {
    var b = a[Ie.oa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!kf[b];
  }
  var uf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
      return d;
    },
    wf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(wf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ef[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Ie.Jg]);
            try {
              var m = uf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = xf(m, { event: b, index: f, type: 2, name: k });
              pf && (d = pf.il(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = wf(a[q], b, c);
              mf && (p = p || mf.Vl(r));
              d.push(r);
            }
            return mf && p ? mf.ml(d) : d.join("");
          case "escape":
            d = wf(a[1], b, c);
            if (mf && Array.isArray(a[1]) && a[1][0] === "macro" && mf.Wl(a))
              return mf.wm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Je[a[t]] && (d = Je[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!hf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Dj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Ie.oa] = a[1];
            var w = tf(v, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xf = function (a, b) {
      var c = a[Ie.oa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = kf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          qf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          Ib(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ef[q];
                  break;
                case 1:
                  r = hf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Ie.Jg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && rf.indexOf(c) === -1) {
        rf.push(c);
        var x = Db();
        u = e(g);
        var y = Db() - x,
          B = Db();
        v = df(c, k, b);
        w = y - (Db() - B);
      } else if ((e && (u = e(g)), !e || f)) v = df(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Ya(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : Xa(u)
              ? Xa(v)
              : typeof u === "function"
              ? typeof v === "function"
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    };
  var yf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ya(yf, Error);
  function zf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) zf(a[c], b[c]);
    }
  }
  var Af = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.lm = a;
    this.j = [];
    this.D = b;
  };
  ya(Af, Error);
  var Cf = function () {
    return function (a, b) {
      a instanceof Af || (a = new Af(a, Bf));
      b && a.j.push(b);
      throw a;
    };
  };
  function Bf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) rb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Ff = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Df(a), f = 0; f < ff.length; f++) {
        var g = ff[f],
          k = Ef(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else k === null && b(g.block || []);
      }
      for (var p = [], q = 0; q < hf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ef = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (e === 0) return !1;
        if (e === 2) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (k === 2) return null;
        if (k === 1) return !1;
      }
      return !0;
    },
    Df = function (a) {
      var b = [];
      return function (c) {
        b[c] === void 0 && (b[c] = tf(gf[c], a));
        return b[c];
      };
    };
  var Gf = {
    il: function (a, b) {
      b[Ie.Vh] &&
        typeof a === "string" &&
        (a = b[Ie.Vh] == 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ie.Xh) && a === null && (a = b[Ie.Xh]);
      b.hasOwnProperty(Ie.Zh) && a === void 0 && (a = b[Ie.Zh]);
      b.hasOwnProperty(Ie.Yh) && a === !0 && (a = b[Ie.Yh]);
      b.hasOwnProperty(Ie.Wh) && a === !1 && (a = b[Ie.Wh]);
      return a;
    },
  };
  var Hf = function () {
      this.j = {};
    },
    Jf = function (a, b) {
      var c = If.D,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, qa(Aa.apply(0, arguments)));
      });
    };
  function Kf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new yf(c, d, g);
      }
  }
  function Lf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Kf(e, b, d, g);
          Kf(f, b, d, g);
        }
      }
    };
  }
  var Pf = function () {
      var a = data.permissions || {},
        b = Mf.ctid,
        c = this;
      this.D = new Hf();
      this.j = {};
      var d = {},
        e = {},
        f = Lf(this.D, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, k) {
        var m = {};
        z(k, function (p, q) {
          var r = Nf(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.yj && !e[p] && (e[p] = r.yj);
        });
        var n = function (p) {
          var q = Aa.apply(1, arguments);
          if (!m[p])
            throw Of(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(qa(q)));
        };
        c.j[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw Of(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(qa(t.slice(1))));
        };
      });
    },
    Qf = function (a) {
      return If.j[a] || function () {};
    };
  function Nf(a, b) {
    var c = sf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Of;
    try {
      return xf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new yf(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new yf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Of(a, b, c) {
    return new yf(a, b, c);
  }
  var Rf = !1;
  var Sf = {};
  Sf.Um = zb("");
  Sf.pl = zb("");
  var Tf = Rf,
    Uf = Sf.pl,
    Vf = Sf.Um;
  var cg = {},
    dg =
      ((cg.uaa = !0),
      (cg.uab = !0),
      (cg.uafvl = !0),
      (cg.uamb = !0),
      (cg.uam = !0),
      (cg.uap = !0),
      (cg.uapv = !0),
      (cg.uaw = !0),
      cg);
  var hg = /^[a-z$_][\w$]*$/i,
    ig = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    jg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!ig.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!hg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length != e.length)
            ? 0
            : g
            ? Ib(d, k) && (d === k || d.charAt(k.length) == ".")
            : d === k
        )
          return !0;
      }
      return !1;
    };
  var kg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function lg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) === c;
  }
  var mg = new wb();
  function ng(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = mg.get(e);
      f || ((f = new RegExp(b, d)), mg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function og(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function pg(a, b) {
    return String(a) === String(b);
  }
  function qg(a, b) {
    return Number(a) >= Number(b);
  }
  function rg(a, b) {
    return Number(a) <= Number(b);
  }
  function sg(a, b) {
    return Number(a) > Number(b);
  }
  function tg(a, b) {
    return Number(a) < Number(b);
  }
  function ug(a, b) {
    return Ib(String(a), String(b));
  }
  var vg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    wg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      vg(b, "/*") && (b = b.slice(0, -2));
      vg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    xg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    Ag = function (a, b) {
      var c;
      if (!(c = !xg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!yg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!zg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (u.indexOf("*.") !== 0) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            v === -1
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : t[v - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = wg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    yg = /^[a-z0-9-]+$/i,
    zg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Bg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Cg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Bg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Yc
          ? (n = "Fn")
          : m instanceof $a
          ? (n = "List")
          : m instanceof cb
          ? (n = "PixieMap")
          : m instanceof cd && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Cg[n] || n) + ", which does not match required type ") +
              ((Cg[k] || k) + ".")
          );
      }
    }
  }
  function Dg(a) {
    return "" + a;
  }
  function Eg(a, b) {
    var c = [];
    return c;
  }
  function Fg(a, b) {
    var c = new Yc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (gd()) throw new id(g.message);
        throw g;
      }
    });
    c.Mb();
    return c;
  }
  function Gg(a, b) {
    var c = new cb(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        qb(e)
          ? c.set(d, Fg(a + "_" + d, e))
          : Xa(e)
          ? c.set(d, Gg(a + "_" + d, e))
          : (rb(e) || l(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Mb();
    return c;
  }
  var Hg = function (a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new cb();
    return (d = Gg("AssertApiSubject", c));
  };
  var Ig = function (a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof ed)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new cb();
    return (d = Gg("AssertThatSubject", c));
  };
  function Jg(a) {
    return function () {
      for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
        b.push(J(arguments[d], c));
      return fd(a.apply(null, b));
    };
  }
  var Lg = function () {
    for (var a = Math, b = Kg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Jg(a[e].bind(a)));
    }
    return c;
  };
  var Mg = function (a) {
    var b;
    return b;
  };
  var Ng = function (a) {
    var b;
    return b;
  };
  var Og = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Pg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  var Ug = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var Vg = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return ub(a, b);
  };
  var Wg = function () {
    return new Date().getTime();
  };
  var Xg = function (a) {
    if (a === null) return "null";
    if (a instanceof $a) return "array";
    if (a instanceof Yc) return "function";
    if (a instanceof cd) {
      a = a.getValue();
      if (a.constructor === void 0 || a.constructor.name === void 0) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Yg = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Tf || Vf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return fd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(J(c));
      }),
    };
  };
  var Zg = function (a) {
    return yb(J(a, this.F));
  };
  var $g = function (a) {
    return Number(J(a, this.F));
  };
  var ah = function (a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  };
  var bh = function (a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new cb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof cb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Kg = "floor ceil round max min abs pow sqrt".split(" ");
  var ch = function () {
      var a = {};
      return {
        Al: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Yj: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    dh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return Yc.prototype.invoke.apply(a, c);
      };
    },
    eh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    },
    fh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
  var gh = {};
  var hh = function (a) {
    var b = new cb();
    if (a instanceof $a)
      for (var c = a.fc(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Yc)
      for (var f = Ta(a, 1), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  gh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Yc || typeof a === "string") a = hh(a);
    if (a instanceof cb) return a.fc();
    return new $a();
  };
  gh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Yc || typeof a === "string") a = hh(a);
    if (a instanceof cb) return new $a(Ta(a, 2));
    return new $a();
  };
  gh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof $a || a instanceof Yc || typeof a === "string") a = hh(a);
    if (a instanceof cb) return db(a);
    return new $a();
  };
  gh.freeze = function (a) {
    (a instanceof cb || a instanceof $a || a instanceof Yc) && a.Mb();
    return a;
  };
  gh.delete = function (a, b) {
    if (a instanceof cb && !a.D) return a.vf(b), !0;
    return !1;
  };
  var N = function (a, b, c) {
    var d = a.F.j;
    if (!d) throw Error("Missing program state.");
    if (d.Cm) {
      try {
        d.zj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (mb("TAGGING", 21), e);
      }
      return;
    }
    d.zj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var ih = function () {
    this.j = {};
    this.D = {};
  };
  ih.prototype.get = function (a, b) {
    var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
    return c;
  };
  ih.prototype.add = function (a, b, c) {
    if (this.j.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.D.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.j[a] = c ? void 0 : qb(b) ? Fg(a, b) : Gg(a, b);
  };
  function jh(a, b) {
    var c = void 0;
    return c;
  }
  function kh() {
    var a = {};
    return a;
  }
  function lh(a) {
    return mh ? H.querySelectorAll(a) : null;
  }
  function nh(a, b) {
    if (!mh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var oh = !1;
  if (H.querySelectorAll)
    try {
      var ph = H.querySelectorAll(":root");
      ph && ph.length == 1 && ph[0] == H.documentElement && (oh = !0);
    } catch (a) {}
  var mh = oh;
  var sh = /^[0-9A-Fa-f]{64}$/;
  function th(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function uh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = G.crypto) == null ? 0 : b.subtle) {
      if (sh.test(a)) return Promise.resolve(a);
      try {
        var c = th(a);
        return G.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return G.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function O(a) {
    mb("GTM", a);
  }
  var yh = function (a) {
      var b = {},
        c = ["tv.1"],
        d = 0;
      for (var e = na(a), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if (g.value !== "") {
          var k,
            m = void 0,
            n = g.name,
            p = g.value,
            q = vh[n];
          if (q) {
            var r = (m = g.index) != null ? m : "",
              t = q + "__" + d;
            wh.indexOf(n) === -1 || /^e\d+$/.test(p) || xh.test(p) || sh.test(p)
              ? (k = encodeURIComponent(encodeURIComponent(p)))
              : ((k = "${userData." + t + "|sha256}"), (b[t] = p), d++);
            c.push("" + q + r + "." + k);
          }
        }
      }
      var u = c.join("~");
      return { Mh: { userData: b }, Nm: u, Wm: d };
    },
    Ah = function (a) {
      if (G.Promise)
        try {
          return new Promise(function (b) {
            zh(a, function (c, d) {
              b({ Kj: c, Jf: d });
            });
          });
        } catch (b) {}
    },
    Bh = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          k = vh[e];
        k &&
          f &&
          (wh.indexOf(e) === -1 ||
            /^e\d+$/.test(f) ||
            xh.test(f) ||
            sh.test(f)) &&
          (g !== void 0 && (k += g), b.push(k + "." + f), c++);
      }
      a.length === 1 && a[0].name === "error_code" && (c = 0);
      return { Lj: encodeURIComponent(b.join("~")), Jf: c };
    },
    zh = function (a, b) {
      Ch(a, function (c) {
        var d = Bh(c);
        b(d.Lj, d.Jf);
      });
    },
    Kh = function (a) {
      function b(r, t, u, v) {
        var w = Dh(r);
        w !== "" &&
          (sh.test(w)
            ? k.push({ name: t, value: w, index: v })
            : k.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = sb(r);
          for (var v = 0; v < u.length; ++v) {
            var w = Dh(u[v]),
              x = sh.test(w);
            t && !x && O(89);
            !t && x && O(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Eh[t];
        r[v] && (r[t] && O(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        for (var v = sb(d(r, t)), w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          O(64);
          return r(t);
        };
      }
      var k = [];
      if (G.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", Fh);
      e(a, "phone_number", Gh);
      e(a, "first_name", g(Hh));
      e(a, "last_name", g(Hh));
      var m = a.home_address || {};
      e(m, "street", g(Ih));
      e(m, "city", g(Ih));
      e(m, "postal_code", g(Jh));
      e(m, "region", g(Ih));
      e(m, "country", g(Jh));
      for (var n = sb(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Hh, p);
        f(q, "last_name", Hh, p);
        f(q, "street", Ih, p);
        f(q, "city", Ih, p);
        f(q, "postal_code", Jh, p);
        f(q, "region", Ih, p);
        f(q, "country", Jh, p);
      }
      return k;
    },
    Ch = function (a, b) {
      var c = Kh(a);
      Lh(c, b);
    },
    Dh = function (a) {
      return a == null ? "" : l(a) ? Bb(String(a)) : "e0";
    },
    Jh = function (a) {
      return a.replace(Mh, "");
    },
    Hh = function (a) {
      return Ih(a.replace(/\s/g, ""));
    },
    Ih = function (a) {
      return Bb(a.replace(Nh, "").toLowerCase());
    },
    Gh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Oh.test(a) ? a : "e0";
    },
    Fh = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ph.test(c)) return c;
      }
      return "e0";
    },
    Lh = function (a, b) {
      a.some(function (c) {
        c.value && wh.indexOf(c.name);
      })
        ? b(a)
        : G.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && wh.indexOf(c.name) !== -1
                ? uh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Nh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ph = /^\S+@\S+\.\S+$/,
    Oh = /^\+\d{10,15}$/,
    Mh = /[.~]/g,
    xh = /^[0-9A-Za-z_-]{43}$/,
    Qh = {},
    vh =
      ((Qh.email = "em"),
      (Qh.phone_number = "pn"),
      (Qh.first_name = "fn"),
      (Qh.last_name = "ln"),
      (Qh.street = "sa"),
      (Qh.city = "ct"),
      (Qh.region = "rg"),
      (Qh.country = "co"),
      (Qh.postal_code = "pc"),
      (Qh.error_code = "ec"),
      Qh),
    Rh = {},
    Eh =
      ((Rh.email = "sha256_email_address"),
      (Rh.phone_number = "sha256_phone_number"),
      (Rh.first_name = "sha256_first_name"),
      (Rh.last_name = "sha256_last_name"),
      (Rh.street = "sha256_street"),
      Rh),
    wh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
      g: {
        ya: "ad_personalization",
        R: "ad_storage",
        P: "ad_user_data",
        U: "analytics_storage",
        nc: "region",
        Qb: "consent_updated",
        Qe: "wait_for_update",
        bi: "app_remove",
        di: "app_store_refund",
        ei: "app_store_subscription_cancel",
        fi: "app_store_subscription_convert",
        gi: "app_store_subscription_renew",
        nk: "consent_update",
        Sf: "add_payment_info",
        Tf: "add_shipping_info",
        oc: "add_to_cart",
        qc: "remove_from_cart",
        Uf: "view_cart",
        Rb: "begin_checkout",
        rc: "select_item",
        hb: "view_item_list",
        Cb: "select_promotion",
        ib: "view_promotion",
        Ia: "purchase",
        sc: "refund",
        Ma: "view_item",
        Vf: "add_to_wishlist",
        pk: "exception",
        hi: "first_open",
        ii: "first_visit",
        ba: "gtag.config",
        Ta: "gtag.get",
        ji: "in_app_purchase",
        Sb: "page_view",
        qk: "screen_view",
        ki: "session_start",
        rk: "timing_complete",
        sk: "track_social",
        Nc: "user_engagement",
        tk: "user_id_update",
        jb: "gclgb",
        Ua: "gclid",
        li: "gclgs",
        mi: "gclst",
        fa: "ads_data_redaction",
        ni: "gad_source",
        Fd: "gclid_url",
        oi: "gclsrc",
        Wf: "gbraid",
        Re: "wbraid",
        ka: "allow_ad_personalization_signals",
        Se: "allow_custom_scripts",
        Te: "allow_display_features",
        Gd: "allow_enhanced_conversions",
        kb: "allow_google_signals",
        Ca: "allow_interest_groups",
        uk: "app_id",
        vk: "app_installer_id",
        wk: "app_name",
        xk: "app_version",
        Db: "auid",
        ri: "auto_detection_enabled",
        Tb: "aw_remarketing",
        Ue: "aw_remarketing_only",
        Hd: "discount",
        Id: "aw_feed_country",
        Jd: "aw_feed_language",
        da: "items",
        Kd: "aw_merchant_id",
        Xf: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        lb: "client_id",
        si: "rnd",
        Yf: "consent_update_type",
        ui: "content_group",
        vi: "content_type",
        Za: "conversion_cookie_prefix",
        Vc: "conversion_id",
        ra: "conversion_linker",
        wi: "conversion_linker_disabled",
        Ub: "conversion_api",
        Ve: "cookie_deprecation",
        Va: "cookie_domain",
        Wa: "cookie_expires",
        ab: "cookie_flags",
        uc: "cookie_name",
        Eb: "cookie_path",
        Na: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        za: "currency",
        Ld: "customer_lifetime_value",
        Wc: "custom_map",
        Zf: "gcldc",
        Md: "dclid",
        xi: "debug_mode",
        la: "developer_id",
        yi: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        zi: "dc_natural_search",
        cg: "dynamic_event_settings",
        dg: "affiliation",
        Nd: "checkout_option",
        We: "checkout_step",
        eg: "coupon",
        Yc: "item_list_name",
        Xe: "list_name",
        Ai: "promotions",
        Zc: "shipping",
        Ye: "tax",
        Od: "engagement_time_msec",
        Pd: "enhanced_client_id",
        Qd: "enhanced_conversions",
        fg: "enhanced_conversions_automatic_settings",
        Rd: "estimated_delivery_date",
        Ze: "euid_logged_in_state",
        bd: "event_callback",
        yk: "event_category",
        ob: "event_developer_id_string",
        zk: "event_label",
        xc: "event",
        Sd: "event_settings",
        Td: "event_timeout",
        Ak: "description",
        Bk: "fatal",
        Bi: "experiments",
        af: "firebase_id",
        yc: "first_party_collection",
        Ud: "_x_20",
        pb: "_x_19",
        Ci: "fledge_drop_reason",
        gg: "fledge",
        hg: "flight_error_code",
        ig: "flight_error_message",
        Di: "fl_activity_category",
        Ei: "fl_activity_group",
        jg: "fl_advertiser_id",
        Fi: "fl_ar_dedupe",
        kg: "match_id",
        Gi: "fl_random_number",
        Hi: "tran",
        Ii: "u",
        Vd: "gac_gclid",
        zc: "gac_wbraid",
        lg: "gac_wbraid_multiple_conversions",
        mg: "ga_restrict_domain",
        ng: "ga_temp_client_id",
        Ac: "gdpr_applies",
        og: "geo_granularity",
        Fb: "value_callback",
        qb: "value_key",
        Bc: "_google_ng",
        Vb: "google_signals",
        pg: "google_tld",
        Wd: "groups",
        qg: "gsa_experiment_id",
        Ji: "gtm_up",
        Gb: "iframe_state",
        dd: "ignore_referrer",
        bf: "internal_traffic_results",
        Wb: "is_legacy_converted",
        Hb: "is_legacy_loaded",
        Xd: "is_passthrough",
        ed: "_lps",
        Oa: "language",
        Yd: "legacy_developer_id_string",
        sa: "linker",
        Cc: "accept_incoming",
        sb: "decorate_forms",
        W: "domains",
        Ib: "url_position",
        rg: "method",
        Ck: "name",
        fd: "new_customer",
        sg: "non_interaction",
        Ki: "optimize_id",
        Li: "page_hostname",
        gd: "page_path",
        Da: "page_referrer",
        Jb: "page_title",
        ug: "passengers",
        vg: "phone_conversion_callback",
        Mi: "phone_conversion_country_code",
        wg: "phone_conversion_css_class",
        Ni: "phone_conversion_ids",
        xg: "phone_conversion_number",
        yg: "phone_conversion_options",
        zg: "_protected_audience_enabled",
        hd: "quantity",
        Zd: "redact_device_info",
        cf: "referral_exclusion_definition",
        Xb: "restricted_data_processing",
        Oi: "retoken",
        Dk: "sample_rate",
        df: "screen_name",
        Kb: "screen_resolution",
        Pi: "search_term",
        Ja: "send_page_view",
        Yb: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        ae: "session_engaged",
        ef: "session_engaged_time",
        tb: "session_id",
        be: "session_number",
        ff: "_shared_user_id",
        ld: "delivery_postal_code",
        Ek: "temporary_client_id",
        hf: "topmost_url",
        Qi: "tracking_id",
        jf: "traffic_type",
        Aa: "transaction_id",
        Lb: "transport_url",
        Ag: "trip_type",
        Zb: "update",
        Xa: "url_passthrough",
        kf: "_user_agent_architecture",
        lf: "_user_agent_bitness",
        nf: "_user_agent_full_version_list",
        pf: "_user_agent_mobile",
        qf: "_user_agent_model",
        rf: "_user_agent_platform",
        tf: "_user_agent_platform_version",
        uf: "_user_agent_wow64",
        Ea: "user_data",
        Bg: "user_data_auto_latency",
        Cg: "user_data_auto_meta",
        Dg: "user_data_auto_multi",
        Eg: "user_data_auto_selectors",
        Fg: "user_data_auto_status",
        md: "user_data_mode",
        ce: "user_data_settings",
        Ba: "user_id",
        cb: "user_properties",
        Ri: "_user_region",
        de: "us_privacy_string",
        na: "value",
        Gg: "wbraid_multiple_conversions",
        Zi: "_host_name",
        aj: "_in_page_command",
        bj: "_is_passthrough_cid",
        Nb: "non_personalized_ads",
        je: "_sst_parameters",
        nb: "conversion_label",
        wa: "page_location",
        rb: "global_developer_id_string",
        Dc: "tc_privacy_string",
      },
    },
    Sh = {},
    Th = Object.freeze(
      ((Sh[P.g.ka] = 1),
      (Sh[P.g.Te] = 1),
      (Sh[P.g.Gd] = 1),
      (Sh[P.g.kb] = 1),
      (Sh[P.g.da] = 1),
      (Sh[P.g.Va] = 1),
      (Sh[P.g.Wa] = 1),
      (Sh[P.g.ab] = 1),
      (Sh[P.g.uc] = 1),
      (Sh[P.g.Eb] = 1),
      (Sh[P.g.Na] = 1),
      (Sh[P.g.vc] = 1),
      (Sh[P.g.Wc] = 1),
      (Sh[P.g.la] = 1),
      (Sh[P.g.cg] = 1),
      (Sh[P.g.bd] = 1),
      (Sh[P.g.Sd] = 1),
      (Sh[P.g.Td] = 1),
      (Sh[P.g.yc] = 1),
      (Sh[P.g.mg] = 1),
      (Sh[P.g.Vb] = 1),
      (Sh[P.g.pg] = 1),
      (Sh[P.g.Wd] = 1),
      (Sh[P.g.bf] = 1),
      (Sh[P.g.Wb] = 1),
      (Sh[P.g.Hb] = 1),
      (Sh[P.g.sa] = 1),
      (Sh[P.g.cf] = 1),
      (Sh[P.g.Xb] = 1),
      (Sh[P.g.Ja] = 1),
      (Sh[P.g.Yb] = 1),
      (Sh[P.g.jd] = 1),
      (Sh[P.g.kd] = 1),
      (Sh[P.g.ef] = 1),
      (Sh[P.g.ld] = 1),
      (Sh[P.g.Lb] = 1),
      (Sh[P.g.Zb] = 1),
      (Sh[P.g.ce] = 1),
      (Sh[P.g.cb] = 1),
      (Sh[P.g.je] = 1),
      Sh)
    );
  Object.freeze([
    P.g.wa,
    P.g.Da,
    P.g.Jb,
    P.g.Oa,
    P.g.df,
    P.g.Ba,
    P.g.af,
    P.g.ui,
  ]);
  var Uh = {},
    Vh = Object.freeze(
      ((Uh[P.g.bi] = 1),
      (Uh[P.g.di] = 1),
      (Uh[P.g.ei] = 1),
      (Uh[P.g.fi] = 1),
      (Uh[P.g.gi] = 1),
      (Uh[P.g.hi] = 1),
      (Uh[P.g.ii] = 1),
      (Uh[P.g.ji] = 1),
      (Uh[P.g.ki] = 1),
      (Uh[P.g.Nc] = 1),
      Uh)
    ),
    Wh = {},
    Xh = Object.freeze(
      ((Wh[P.g.Sf] = 1),
      (Wh[P.g.Tf] = 1),
      (Wh[P.g.oc] = 1),
      (Wh[P.g.qc] = 1),
      (Wh[P.g.Uf] = 1),
      (Wh[P.g.Rb] = 1),
      (Wh[P.g.rc] = 1),
      (Wh[P.g.hb] = 1),
      (Wh[P.g.Cb] = 1),
      (Wh[P.g.ib] = 1),
      (Wh[P.g.Ia] = 1),
      (Wh[P.g.sc] = 1),
      (Wh[P.g.Ma] = 1),
      (Wh[P.g.Vf] = 1),
      Wh)
    ),
    Yh = Object.freeze([
      P.g.ka,
      P.g.kb,
      P.g.vc,
      P.g.yc,
      P.g.dd,
      P.g.Ja,
      P.g.Zb,
    ]),
    Zh = Object.freeze([].concat(qa(Yh))),
    $h = Object.freeze([P.g.Wa, P.g.Td, P.g.kd, P.g.ef, P.g.Od]),
    ai = Object.freeze([].concat(qa($h))),
    bi = {},
    ci =
      ((bi[P.g.R] = "1"),
      (bi[P.g.U] = "2"),
      (bi[P.g.P] = "3"),
      (bi[P.g.ya] = "4"),
      bi),
    di = {},
    ei = Object.freeze(
      ((di[P.g.ka] = 1),
      (di[P.g.Gd] = 1),
      (di[P.g.Ca] = 1),
      (di[P.g.Tb] = 1),
      (di[P.g.Ue] = 1),
      (di[P.g.Hd] = 1),
      (di[P.g.Id] = 1),
      (di[P.g.Jd] = 1),
      (di[P.g.da] = 1),
      (di[P.g.Kd] = 1),
      (di[P.g.Za] = 1),
      (di[P.g.ra] = 1),
      (di[P.g.Va] = 1),
      (di[P.g.Wa] = 1),
      (di[P.g.ab] = 1),
      (di[P.g.Na] = 1),
      (di[P.g.za] = 1),
      (di[P.g.Ld] = 1),
      (di[P.g.la] = 1),
      (di[P.g.yi] = 1),
      (di[P.g.Qd] = 1),
      (di[P.g.Rd] = 1),
      (di[P.g.af] = 1),
      (di[P.g.yc] = 1),
      (di[P.g.Wb] = 1),
      (di[P.g.Hb] = 1),
      (di[P.g.Oa] = 1),
      (di[P.g.fd] = 1),
      (di[P.g.wa] = 1),
      (di[P.g.Da] = 1),
      (di[P.g.vg] = 1),
      (di[P.g.wg] = 1),
      (di[P.g.xg] = 1),
      (di[P.g.yg] = 1),
      (di[P.g.Xb] = 1),
      (di[P.g.Ja] = 1),
      (di[P.g.Yb] = 1),
      (di[P.g.jd] = 1),
      (di[P.g.ld] = 1),
      (di[P.g.Aa] = 1),
      (di[P.g.Lb] = 1),
      (di[P.g.Zb] = 1),
      (di[P.g.Xa] = 1),
      (di[P.g.Ea] = 1),
      (di[P.g.Ba] = 1),
      (di[P.g.na] = 1),
      di)
    ),
    fi = {},
    gi = Object.freeze(
      ((fi.search = "s"),
      (fi.youtube = "y"),
      (fi.playstore = "p"),
      (fi.shopping = "h"),
      (fi.ads = "a"),
      (fi.maps = "m"),
      fi)
    );
  Object.freeze(P.g);
  var hi = {},
    ii = (G.google_tag_manager = G.google_tag_manager || {});
  hi.Kg = "46q0";
  hi.ie = Number("0") || 0;
  hi.Ya = "dataLayer";
  hi.Zm =
    "ChEI8MqOtAYQ0bTI6a3U5pWtARIkAL93L38Ng7JfT4hSJx6CMe9OBsCi0xZEQ9mFde/gG3rmlqEMGgI+/w\x3d\x3d";
  var ji = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ki = { __paused: 1, __tg: 1 },
    li;
  for (li in ji) ji.hasOwnProperty(li) && (ki[li] = 1);
  var mi = zb(""),
    ni,
    oi = !1;
  ni = oi;
  var pi,
    qi = !1;
  pi = qi;
  var ri,
    si = !1;
  ri = si;
  hi.Ed = "www.googletagmanager.com";
  var ti = "" + hi.Ed + (ni ? "/gtag/js" : "/gtm.js"),
    ui = null,
    vi = null,
    wi = {},
    xi = {};
  function yi() {
    var a = ii.sequence || 1;
    ii.sequence = a + 1;
    return a;
  }
  hi.lk = "";
  var zi = "";
  hi.yf = zi;
  var Ai = new (function () {
    this.j = "";
    this.H = this.D = !1;
    this.Pa = this.O = this.Z = this.K = "";
  })();
  function Bi() {
    var a = Ai.K.length;
    return Ai.K[a - 1] === "/" ? Ai.K.substring(0, a - 1) : Ai.K;
  }
  function Ci(a) {
    for (var b = {}, c = na(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Di = new wb(),
    Ei = {},
    Fi = {},
    Ii = {
      name: hi.Ya,
      set: function (a, b) {
        h(Lb(a, b), Ei);
        Gi();
      },
      get: function (a) {
        return Hi(a, 2);
      },
      reset: function () {
        Di = new wb();
        Ei = {};
        Gi();
      },
    };
  function Hi(a, b) {
    return b != 2 ? Di.get(a) : Ji(a);
  }
  function Ji(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Ei, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Ki(a, b) {
    Fi.hasOwnProperty(a) || (Di.set(a, b), h(Lb(a, b), Ei), Gi());
  }
  function Li() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Hi(c, 1);
      if (Array.isArray(d) || Xa(d)) d = h(d);
      Fi[c] = d;
    }
  }
  function Gi(a) {
    z(Fi, function (b, c) {
      Di.set(b, c);
      h(Lb(b), Ei);
      h(Lb(b, c), Ei);
      a && delete Fi[b];
    });
  }
  function Mi(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Ji(a) : Di.get(a);
    Va(d) === "array" || Va(d) === "object" ? (c = h(d)) : (c = d);
    return c;
  }
  var Ni = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if (d === "js_variable") {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (Ib(m, "dataLayer.")) f = Hi(m.substring(10));
            else {
              var n = m.split(".");
              f = G[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (f !== void 0) break;
          }
        }
      } else if (d === "css_selector" && mh)
        try {
          var q = lh(e);
          if (q && q.length > 0) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < (b === "email" || b === "phone_number" ? 5 : 1);
              r++
            )
              f.push(Ic(q[r]) || Bb(q[r].value));
            f = f.length === 1 ? f[0] : f;
          }
        } catch (t) {
          O(149);
        }
      return f ? ((a[b] = f), !0) : !1;
    },
    Oi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Ni(b, "email", a.email) || c;
        c = Ni(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Ni(f, "first_name", d[e].first_name) || c;
          c = Ni(f, "last_name", d[e].last_name) || c;
          c = Ni(f, "street", d[e].street) || c;
          c = Ni(f, "city", d[e].city) || c;
          c = Ni(f, "region", d[e].region) || c;
          c = Ni(f, "country", d[e].country) || c;
          c = Ni(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Pi = function (a) {
      return Xa(a) ? !!a.enable_code : !1;
    };
  function Qi(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Ri = [],
    Si = {};
  function Ti(a) {
    return Ri[a] === void 0 ? !1 : Ri[a];
  }
  var Ui = [];
  function Vi(a) {
    switch (a) {
      case 0:
        return 0;
      case 39:
        return 1;
      case 40:
        return 2;
      case 52:
        return 3;
      case 60:
        return 6;
      case 63:
        return 8;
      case 73:
        return 4;
      case 79:
        return 5;
      case 83:
        return 7;
    }
  }
  function S(a) {
    Ui[a] = !0;
    var b = Vi(a);
    b !== void 0 && (Ri[b] = !0);
  }
  S(27);
  S(23);
  S(24);
  S(25);
  S(26);
  S(41);
  S(66);
  S(49);
  S(62);
  S(30);
  S(15);
  S(86);
  S(14);
  S(87);
  S(90);
  S(85);
  S(53);
  S(74);
  S(7);
  S(42);
  S(4);
  S(70);
  S(81);
  S(59);
  S(56);
  S(72);
  S(94);
  S(91);
  S(73);
  S(5);
  S(79);
  Ui[57] = !0;
  Ui[58] = !0;
  Si[1] = Qi("1", 6e4);
  Si[3] = Qi("10", 1);
  Si[2] = Qi("", 50);
  S(20);
  S(12);
  S(55);
  S(82);

  S(69);
  S(63);
  S(75);
  function T(a) {
    return !!Ui[a];
  }
  var Zi = /:[0-9]+$/,
    $i = /^\d+\.fls\.doubleclick\.net$/;
  function aj(a, b, c, d) {
    for (
      var e = [], f = na(a.split("&")), g = f.next();
      !g.done;
      g = f.next()
    ) {
      var k = na(g.value.split("=")),
        m = k.next().value,
        n = pa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function bj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = cj(a.protocol) || cj(G.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : G.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || G.location.hostname)
          .replace(Zi, "")
          .toLowerCase());
    return dj(a, b, c, d, e);
  }
  function dj(a, b, c, d, e) {
    var f,
      g = cj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = ej(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Zi, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || mb("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = aj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function cj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function ej(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var fj = {},
    gj = 0;
  function U(a) {
    var b = fj[a];
    if (!b) {
      var c = H.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || mb("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Zi, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      gj < 5 && ((fj[a] = b), gj++);
    }
    return b;
  }
  function hj(a) {
    function b(n) {
      var p = n.split("=")[0];
      return d.indexOf(p) < 0 ? n : p + "=0";
    }
    function c(n) {
      return n
        .split("&")
        .map(b)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
        " "
      ),
      e = U(a),
      f = a.split(/[?#]/)[0],
      g = e.search,
      k = e.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = c(g);
    k = c(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function ij(a) {
    var b = U(G.location.href),
      c = bj(b, "host", !1);
    if (c && c.match($i)) {
      var d = bj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var jj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function kj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return U("" + c + b).href;
    }
  }
  function lj() {
    return Ai.D || pi;
  }
  function mj() {
    return !!hi.yf && hi.yf.split("@@").join("") !== "SGTM_TOKEN";
  }
  function nj(a) {
    for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function oj(a, b) {
    return Ai.D ? "" + Bi() + (b ? jj[a] || "" : "") : a;
  }
  function pj(a) {
    var b = String(a[Ie.oa] || "").replace(/_/g, "");
    return Ib(b, "cvt") ? "cvt" : b;
  }
  var qj =
    G.location.search.indexOf("?gtm_latency=") >= 0 ||
    G.location.search.indexOf("&gtm_latency=") >= 0;
  var rj = { sampleRate: "0.005000", hk: "", Xm: "0.005" },
    sj = Math.random(),
    tj;
  if (!(tj = qj)) {
    var uj = rj.sampleRate;
    tj = sj < Number(uj);
  }
  var vj = tj,
    wj = qj || (!T(44) && vj) || (T(44) && sj >= 1 - Number(rj.Xm));
  function xj(a, b) {
    var c = yj();
    c.pending || (c.pending = []);
    tb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var zj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
  };
  function yj() {
    var a = vc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new zj()), (a.tidr = b));
    return b;
  }
  var Aj = {},
    Bj = !1,
    Mf = {
      ctid: "GTM-5LS73DS",
      canonicalContainerId: "12829987",
      Mj: "GTM-5LS73DS",
      Nj: "GTM-5LS73DS",
    };
  Aj.fe = zb("");
  function Cj() {
    var a = Dj();
    return Bj ? a.map(Ej) : a;
  }
  function Fj() {
    var a = Gj();
    return Bj ? a.map(Ej) : a;
  }
  function Hj() {
    return Ij(Mf.ctid);
  }
  function Jj() {
    return Ij(Mf.canonicalContainerId || "_" + Mf.ctid);
  }
  function Dj() {
    return Mf.Mj ? Mf.Mj.split("|") : [Mf.ctid];
  }
  function Gj() {
    return Mf.Nj ? Mf.Nj.split("|") : [];
  }
  function Kj() {
    var a = Lj(Mj()),
      b = a && a.parent;
    if (b) return Lj(b);
  }
  function Nj() {
    var a = Lj(Mj());
    if (a) {
      for (; a.parent; ) {
        var b = Lj(a.parent);
        if (!b) break;
        a = b;
      }
      return a;
    }
  }
  function Lj(a) {
    var b = yj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Ij(a) {
    return Bj ? Ej(a) : a;
  }
  function Ej(a) {
    return "siloed_" + a;
  }
  function Oj(a) {
    return Bj ? Pj(a) : a;
  }
  function Pj(a) {
    a = String(a);
    return Ib(a, "siloed_") ? a.substring(7) : a;
  }
  function Qj() {
    var a = !1;
    if (a) {
      var b = yj();
      if (b.siloed) {
        for (
          var c = [], d = Dj().map(Ej), e = Gj().map(Ej), f = {}, g = 0;
          g < b.siloed.length;
          f = { Bf: void 0 }, g++
        )
          (f.Bf = b.siloed[g]),
            !Bj &&
            tb(
              f.Bf.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.Bf.ctid;
                };
              })(f)
            )
              ? (Bj = !0)
              : c.push(f.Bf);
        b.siloed = c;
      }
    }
  }
  function Rj() {
    var a = yj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Cj(), f = Fj(), g = {}, k = 0;
        k < a.pending.length;
        g = { Ke: void 0 }, k++
      )
        (g.Ke = a.pending[k]),
          tb(
            g.Ke.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ke.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Ke.onLoad), (d = !0))
            : c.push(g.Ke);
      a.pending = c;
      if (b)
        try {
          b(Jj());
        } catch (m) {}
    }
  }
  function Sj() {
    for (
      var a = Mf.ctid,
        b = Cj(),
        c = Fj(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Mf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          tc && (q.scriptElement = tc);
          uc && (q.scriptSource = uc);
          var r = p ? e.destination : e.container,
            t = r[n];
          t ? (p && t.state === 0 && O(93), Object.assign(t, q)) : (r[n] = q);
        },
        e = yj(),
        f = na(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = na(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Jj()] = {};
    Rj();
  }
  function Tj(a) {
    return !!yj().container[a];
  }
  function Uj(a) {
    var b = yj().destination[a];
    return !!b && !!b.state;
  }
  function Mj() {
    return { ctid: Hj(), isDestination: Aj.fe };
  }
  function Vj(a) {
    var b = yj();
    (b.siloed = b.siloed || []).push(a);
  }
  function Wj() {
    var a = yj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Xj() {
    var a = {};
    z(yj().destination, function (b, c) {
      c.state === 0 && (a[Pj(b)] = c);
    });
    return a;
  }
  function Yj(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Zj = { gk: Number("5"), Rn: Number("") },
    ak = [],
    bk = [];
  function ck(a) {
    ak.push(a);
  }
  var dk = !1,
    ek = "?id=" + Mf.ctid,
    fk = void 0,
    gk = {},
    hk = void 0,
    ik = new (function () {
      var a = 5;
      Zj.gk > 0 && (a = Zj.gk);
      this.D = a;
      this.j = 0;
      this.H = [];
    })(),
    jk = 1e3;
  function kk(a, b, c, d) {
    var e = fk;
    if (e === void 0)
      if (a) e = 0;
      else if (c) e = yi();
      else return "";
    for (
      var f = [oj("https://www.googletagmanager.com"), a ? "/td" : "/a", ek],
        g = na(a ? bk : ak),
        k = g.next();
      !k.done;
      k = g.next()
    )
      for (
        var m = k.value,
          n = m({
            eventId: e,
            Sa: !!b,
            Cj: !!d,
            mc: function () {
              dk = !0;
            },
          }),
          p = na(n),
          q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = na(q.value),
          t = r.next().value,
          u = r.next().value;
        f.push("&" + t + "=" + u);
      }
    f.push("&z=0");
    return f.join("");
  }
  function lk() {
    hk && (G.clearTimeout(hk), (hk = void 0));
    if (fk !== void 0 && mk) {
      var a;
      (a = gk[fk]) || (a = ik.j < ik.D ? !1 : Db() - ik.H[ik.j % ik.D] < 1e3);
      if (a || jk-- <= 0) O(1), (gk[fk] = !0);
      else {
        var b = ik.j++ % ik.D;
        ik.H[b] = Db();
        var c = kk(!1, !0);
        Ec(c);
        mk = dk = !1;
      }
    }
  }
  function nk() {
    if (wj) {
      var a = kk(!0, !0, !0, !0);
      dk && (Oc(a), (dk = !1));
    }
  }
  var mk = !1;
  function ok(a) {
    gk[a] ||
      (a !== fk && (lk(), (fk = a)),
      (mk = !0),
      hk || (hk = G.setTimeout(lk, 500)),
      kk(!1).length >= 2022 && lk());
  }
  var pk = ub();
  function qk() {
    pk = ub();
  }
  function rk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(pk)],
    ];
  }
  var sk = "/td?id=" + Mf.ctid,
    tk = ["v", "t", "pid", "dl", "tdp"],
    uk = ["mcc"],
    vk = {},
    wk = {};
  function xk(a, b, c) {
    wk[a] = b;
    (c === void 0 || c) && yk(a);
  }
  function yk(a, b) {
    if (vk[a] === void 0 || (b === void 0 ? 0 : b)) vk[a] = !0;
  }
  function zk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(vk)
      .filter(function (c) {
        return vk[c] === !0 && wk[c] !== void 0 && (a || !uk.includes(c));
      })
      .map(function (c) {
        var d = wk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + oj("https://www.googletagmanager.com") + sk + ("" + b + "&z=0");
  }
  function Ak() {
    Object.keys(vk).forEach(function (a) {
      tk.indexOf(a) < 0 && (vk[a] = !1);
    });
  }
  function Bk(a) {
    a = a === void 0 ? !1 : a;
    if (wj)
      if (T(43)) {
        var b = zk(a);
        a ? Oc(b) : Ec(b);
        Ak();
      } else if (wj) {
        var c = kk(!0, !0);
        dk && (Ec(c), (dk = !1));
      }
  }
  function Ck() {
    Object.keys(vk).filter(function (a) {
      return vk[a] && !tk.includes(a);
    }).length > 0 && Bk(!0);
  }
  var Dk = ub();
  function Ek() {
    Dk = ub();
  }
  function Fk() {
    T(43)
      ? (xk("v", "3"),
        xk("t", "t"),
        xk("pid", function () {
          return String(Dk);
        }),
        Fc(G, "pagehide", Ck),
        G.setInterval(Ek, 864e5))
      : bk.push(rk);
  }
  var Gk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Hk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Ik = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    Jk = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var Kk, Lk;
  a: {
    for (var Mk = ["CLOSURE_FLAGS"], Nk = Ba, Ok = 0; Ok < Mk.length; Ok++)
      if (((Nk = Nk[Mk[Ok]]), Nk == null)) {
        Lk = null;
        break a;
      }
    Lk = Nk;
  }
  var Pk = Lk && Lk[610401301];
  Kk = Pk != null ? Pk : !1;
  function Qk() {
    var a = Ba.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Rk,
    Sk = Ba.navigator;
  Rk = Sk ? Sk.userAgentData || null : null;
  function Tk(a) {
    return Kk
      ? Rk
        ? Rk.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function Uk(a) {
    return Qk().indexOf(a) != -1;
  }
  function Vk() {
    return Kk ? !!Rk && Rk.brands.length > 0 : !1;
  }
  function Wk() {
    return Vk() ? !1 : Uk("Opera");
  }
  function Xk() {
    return Uk("Firefox") || Uk("FxiOS");
  }
  function Yk() {
    return Vk()
      ? Tk("Chromium")
      : ((Uk("Chrome") || Uk("CriOS")) && !(Vk() ? 0 : Uk("Edge"))) ||
          Uk("Silk");
  }
  function Zk() {
    return Kk ? !!Rk && !!Rk.platform : !1;
  }
  function $k() {
    return Uk("iPhone") && !Uk("iPod") && !Uk("iPad");
  }
  function al() {
    $k() || Uk("iPad") || Uk("iPod");
  }
  var bl = function (a) {
    bl[" "](a);
    return a;
  };
  bl[" "] = function () {};
  Wk();
  Vk() || Uk("Trident") || Uk("MSIE");
  Uk("Edge");
  !Uk("Gecko") ||
    (Qk().toLowerCase().indexOf("webkit") != -1 && !Uk("Edge")) ||
    Uk("Trident") ||
    Uk("MSIE") ||
    Uk("Edge");
  Qk().toLowerCase().indexOf("webkit") != -1 && !Uk("Edge") && Uk("Mobile");
  Zk() || Uk("Macintosh");
  Zk() || Uk("Windows");
  (Zk() ? Rk.platform === "Linux" : Uk("Linux")) || Zk() || Uk("CrOS");
  Zk() || Uk("Android");
  $k();
  Uk("iPad");
  Uk("iPod");
  al();
  Qk().toLowerCase().indexOf("kaios");
  var cl = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    dl = /#|$/,
    el = function (a, b) {
      var c = a.search(dl),
        d = cl(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    fl = /[?&]($|#)/,
    gl = function (a, b, c) {
      for (
        var d, e = a.search(dl), f = 0, g, k = [];
        (g = cl(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(fl, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          u;
        t < 0 || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var hl = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              bl(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    il = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function jl(a) {
    if (!a || !H.head) return null;
    var b = kl("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var ll = function (a) {
      if (G.top == G) return 0;
      if (a === void 0 ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
      }
      return hl(G.top) ? 1 : 2;
    },
    kl = function (a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  var ml = "",
    nl,
    ol = [],
    pl = !1;
  function ql() {
    var a = U(G.location.href);
    return a.hostname + a.pathname;
  }
  function rl() {
    var a = [];
    ml && a.push(["dl", encodeURIComponent(ml)]);
    ol.length > 0 && a.push(["tdp", ol.join(".")]);
    nl !== void 0 && a.push(["frm", String(nl)]);
    return a;
  }
  var sl = function (a) {
    var b = pl ? [] : rl();
    !pl && a.Sa && ((pl = !0), b.length && a.mc());
    return b;
  };
  function tl() {
    if (T(43)) {
      var a = ql();
      a && xk("dl", encodeURIComponent(a));
      xk("tdp", function () {
        return ol.length > 0 ? ol.join(".") : void 0;
      });
      var b = ll(!0);
      b !== void 0 && xk("frm", String(b));
    } else bk.push(sl);
  }
  var ul = [],
    vl = [];
  function wl(a) {
    if (T(43)) xk(a, "1");
    else {
      if (vl.indexOf(a) !== -1) return;
      ul.push(a);
      vl.push(a);
    }
    Bk();
  }
  function xl(a) {
    if (!ul.length) return [];
    for (var b = rl(), c = na(ul), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Sa && (a.mc(), (ul.length = 0));
    return b;
  }
  function yl(a) {
    mb("HEALTH", a);
  }
  var zl;
  try {
    zl = JSON.parse(
      kb(
        "eyIwIjoiRFoiLCIxIjoiRFotMzEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5keiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    O(123), yl(2), (zl = {});
  }
  function Al() {
    return zl["0"] || "";
  }
  function Bl() {
    return zl["1"] || "";
  }
  function Cl() {
    var a = !1;
    return a;
  }
  function Dl() {
    return zl["6"] !== !1;
  }
  function El() {
    var a = "";
    return a;
  }
  function Fl() {
    var a = !1;
    a = !!zl["5"];
    return a;
  }
  function Gl() {
    var a = "";
    return a;
  }
  var Hl = new (function (a, b) {
    this.j = a;
    this.defaultValue = b === void 0 ? !1 : b;
  })(1933);
  function Il() {
    var a = vc("google_tag_data", {});
    return (a.ics = a.ics || new Jl());
  }
  var Jl = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Jl.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    mb("TAGGING", 19);
    b == null ? mb("TAGGING", 18) : Kl(this, a, b === "granted", c, d, e, f, g);
  };
  Jl.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Kl(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Kl = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        G.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (mb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  ca = Jl.prototype;
  ca.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (c == null ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = na(d), n = m.next(); !n.done; n = m.next())
        Ll(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = na(d), q = p.next(); !q.done; q = p.next())
        Ll(this, q.value);
  };
  ca.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  ca.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    e = d.default;
    if (e !== void 0) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (e !== void 0) return e ? 1 : 2;
      e = f.default;
      if (e !== void 0) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  ca.addListener = function (a, b) {
    this.j.push({ consentTypes: a, vl: b });
  };
  var Ll = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Oj = !0);
    }
  };
  Jl.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Oj) {
        d.Oj = !1;
        try {
          d.vl({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Nl = function () {
    var a = Ml,
      b = "nh";
    if (a.nh && a.hasOwnProperty(b)) return a.nh;
    var c = new a();
    return (a.nh = c);
  };
  var Ml = function () {
    var a = {};
    this.j = function () {
      var b = Hl.j,
        c = Hl.defaultValue;
      return a[b] != null ? a[b] : c;
    };
    this.D = function () {
      a[Hl.j] = !0;
    };
  };
  var Ol = !1,
    Pl = !1,
    Ql = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
    },
    Rl = function (a) {
      var b = Il();
      b.accessedAny = !0;
      return (l(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c, Ql)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Sl = function (a) {
      var b = Il();
      b.accessedAny = !0;
      return b.getConsentState(a, Ql);
    },
    Tl = function (a) {
      for (var b = {}, c = na(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = Ql.corePlatformServices[e] !== !1;
      }
      return b;
    },
    Ul = function (a) {
      var b = Il();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Vl = function () {
      if (!Nl().j()) return !1;
      var a = Il();
      a.accessedAny = !0;
      return a.active;
    },
    Wl = function (a, b) {
      Il().addListener(a, b);
    },
    Xl = function (a, b) {
      Il().notifyListeners(a, b);
    },
    Yl = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ul(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Wl(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Zl = function (a, b) {
      function c() {
        for (var k = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Rl(n) && !f[n] && k.push(n);
        }
        return k;
      }
      function d(k) {
        for (var m = 0; m < k.length; m++) f[k[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        Wl(e, function (k) {
          function m(q) {
            q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
          }
          var n = c();
          if (n.length !== 0) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : G.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  var $l = [P.g.R, P.g.U, P.g.P, P.g.ya],
    am,
    bm;
  function cm(a) {
    for (
      var b = a[P.g.nc], c = Array.isArray(b) ? b : [b], d = { Ae: 0 };
      d.Ae < c.length;
      d = { Ae: d.Ae }, ++d.Ae
    )
      z(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.nc) {
              var k = c[e.Ae],
                m = Al(),
                n = Bl();
              Pl = !0;
              Ol && mb("TAGGING", 20);
              Il().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function dm(a) {
    !bm && am && wl("crc");
    bm = !0;
    var b = a[P.g.nc];
    b && O(40);
    var c = a[P.g.Qe];
    c && O(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Be: 0 };
      e.Be < d.length;
      e = { Be: e.Be }, ++e.Be
    )
      z(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.nc && g !== P.g.Qe) {
              var m = d[f.Be],
                n = Number(c),
                p = Al(),
                q = Bl();
              n = n === void 0 ? 0 : n;
              Ol = !0;
              Pl && mb("TAGGING", 20);
              Il().default(g, k, m, p, q, n, Ql);
            }
          };
        })(e)
      );
  }
  function em(a, b) {
    am = !0;
    z(a, function (c, d) {
      Ol = !0;
      Pl && mb("TAGGING", 20);
      Il().update(c, d, Ql);
    });
    Xl(b.eventId, b.priorityId);
  }
  function fm(a) {
    a.hasOwnProperty("all") &&
      ((Ql.selectedAllCorePlatformServices = !0),
      z(gi, function (b) {
        Ql.corePlatformServices[b] = a.all === "granted";
        Ql.usedCorePlatformServices = !0;
      }));
    z(a, function (b, c) {
      b !== "all" &&
        ((Ql.corePlatformServices[b] = c === "granted"),
        (Ql.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Rl(b);
    });
  }
  function gm(a, b) {
    Wl(a, b);
  }
  function hm(a, b) {
    Zl(a, b);
  }
  function im(a, b) {
    Yl(a, b);
  }
  function jm() {
    var a = [P.g.R, P.g.ya, P.g.P];
    Il().waitForUpdate(a, 500, Ql);
  }
  function km(a) {
    for (var b = na(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Il().clearTimeout(d, void 0, Ql);
    }
    Xl();
  }
  var lm = function () {
    if (ii.pscdl === void 0) {
      var a = function (b) {
        ii.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in rc
          ? (a("pending"), rc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var mm = /[A-Z]+/,
    nm = /\s/;
  function om(a, b) {
    if (l(a)) {
      a = Bb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (mm.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (nm.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, ia: d + "-" + f[0], ma: f };
        }
      }
    }
  }
  function pm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = om(a[d], b);
      e && (c[e.id] = e);
    }
    qm(c);
    var f = [];
    z(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function qm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ma[rm[2]] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var sm = {},
    rm =
      ((sm[0] = 0),
      (sm[1] = 0),
      (sm[2] = 1),
      (sm[3] = 0),
      (sm[4] = 1),
      (sm[5] = 2),
      (sm[6] = 0),
      (sm[7] = 0),
      (sm[8] = 0),
      sm);
  var tm = Number("") || 500,
    um = {},
    vm = {},
    wm = { initialized: 11, complete: 12, interactive: 13 },
    xm = {},
    ym = Object.freeze(((xm[P.g.Ja] = !0), xm)),
    zm =
      H.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      H.location.search.indexOf("&gtm_diagnostics=") >= 0,
    Am = void 0;
  function Bm(a, b) {
    if (b.length && wj) {
      var c;
      (c = um)[a] != null || (c[a] = []);
      vm[a] != null || (vm[a] = []);
      var d = b.filter(function (e) {
        return !vm[a].includes(e);
      });
      um[a].push.apply(um[a], qa(d));
      vm[a].push.apply(vm[a], qa(d));
      !Am &&
        d.length > 0 &&
        (T(43) ? yk("tdc", !0) : Fc(G, "pagehide", Cm),
        (Am = G.setTimeout(function () {
          T(43) || Gc(G, "pagehide", Cm);
          Bk();
          um = {};
          Am = void 0;
        }, tm)));
    }
  }
  function Dm(a, b, c) {
    if (wj && a === "config") {
      var d,
        e = (d = om(b)) == null ? void 0 : d.ma;
      if (!(e && e.length > 1)) {
        var f,
          g = vc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = h(c.K);
        h(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = Em(f[n], k);
            p.length && (zm && console.log(p), m.push(n));
          }
        m.length && (Bm(b, m), mb("TAGGING", wm[H.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function Fm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Em(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var u;
        Va(t) === "object" ? (u = t[r]) : Va(t) === "array" && (u = t[r]);
        return u === void 0 ? ym[r] : u;
      },
      f = Fm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Va(m) === "object" || Va(m) === "array",
          q = Va(n) === "object" || Va(n) === "array";
        if (p && q) Em(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Gm(a) {
    var b = Hm();
    if (!b) return [];
    var c = [["tdc", b]];
    a.Sa && a.mc();
    return c;
  }
  function Cm() {
    Object.keys(um).length !== 0 && (G.clearTimeout(Am), nk());
  }
  function Hm() {
    var a = [],
      b;
    for (b in um) um.hasOwnProperty(b) && a.push(b + "*" + um[b].join("."));
    return a.length ? a.join("!") : void 0;
  }
  function Im() {
    T(43)
      ? xk(
          "tdc",
          function () {
            Am && (G.clearTimeout(Am), (Am = void 0));
            return Hm();
          },
          !1
        )
      : bk.push(Gm);
  }
  var Jm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.O = d;
      this.H = e;
      this.K = f;
      this.D = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Km = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 4:
          c.push(a.j), c.push(a.O), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = na(Km(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Lm = function (a) {
      for (
        var b = {}, c = Km(a, 4), d = na(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = na(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Mm = function (a, b, c) {
      function d(n) {
        Xa(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Km(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Nm = function (a) {
      for (
        var b = [P.g.Sc, P.g.Oc, P.g.Pc, P.g.Qc, P.g.Rc, P.g.Tc, P.g.Uc],
          c = Km(a, 3),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = na(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Om = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.D = {};
      this.O = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Pm = function (a, b) {
      a.D = b;
      return a;
    },
    Qm = function (a, b) {
      a.O = b;
      return a;
    },
    Rm = function (a, b) {
      a.j = b;
      return a;
    },
    Sm = function (a, b) {
      a.H = b;
      return a;
    },
    Tm = function (a, b) {
      a.Z = b;
      return a;
    },
    Um = function (a, b) {
      a.K = b;
      return a;
    },
    Vm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Wm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Xm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Ym = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Zm = function (a) {
      return new Jm(
        a.eventId,
        a.priorityId,
        a.D,
        a.O,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var $m = {};
  function an(a, b, c) {
    vj && a !== void 0 && (($m[a] = $m[a] || []), $m[a].push(c + b), ok(a));
  }
  function bn(a) {
    var b = a.eventId,
      c = a.Sa,
      d = [],
      e = $m[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete $m[b];
    return d;
  }
  function cn(a, b) {
    var c = om(Ij(a), !0);
    c && dn.register(c, b);
  }
  function en(a, b, c, d) {
    var e = om(c, d.isGtmEvent);
    e && dn.push("event", [b, a], e, d);
  }
  function fn(a, b, c, d) {
    var e = om(c, d.isGtmEvent);
    e && dn.push("get", [a, b], e, d);
  }
  function gn(a) {
    var b = om(Ij(a), !0),
      c;
    b ? (c = hn(dn, b).j) : (c = {});
    return c;
  }
  function jn(a, b) {
    var c = om(Ij(a), !0);
    if (c) {
      var d = dn,
        e = h(b, null);
      h(hn(d, c).j, e);
      hn(d, c).j = e;
    }
  }
  var kn = function () {
      this.O = {};
      this.j = {};
      this.D = {};
      this.Z = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    ln = function (a, b, c, d) {
      this.D = Db();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    mn = function () {
      this.destinations = {};
      this.D = {};
      this.j = [];
    },
    hn = function (a, b) {
      var c = b.ia;
      return (a.destinations[c] = a.destinations[c] || new kn());
    },
    nn = function (a, b, c, d) {
      if (d.j) {
        var e = hn(a, d.j),
          f = e.Z;
        if (f) {
          var g = h(c, null),
            k = h(e.O[d.j.id], null),
            m = h(e.K, null),
            n = h(e.j, null),
            p = h(a.D, null),
            q = {};
          if (vj)
            try {
              q = h(Ei);
            } catch (v) {
              O(72);
            }
          var r = d.j.prefix,
            t = function (v) {
              an(d.messageContext.eventId, r, v);
            },
            u = Zm(
              Ym(
                Xm(
                  Wm(
                    Vm(
                      Tm(
                        Sm(
                          Um(
                            Rm(
                              Qm(
                                Pm(
                                  new Om(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            an(d.messageContext.eventId, r, "1"),
              Dm(d.type, d.j.id, u),
              f(d.j.id, b, d.D, u);
          } catch (v) {
            an(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  mn.prototype.register = function (a, b, c) {
    var d = hn(this, a);
    d.status !== 3 &&
      ((d.Z = b), (d.status = 3), c && (h(d.j, c), (d.j = c)), this.flush());
  };
  mn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (hn(this, c).status === 1 &&
        ((hn(this, c).status = 2), this.push("require", [{}], c, {})),
      hn(this, c).H && (d.deferrable = !1));
    this.j.push(new ln(a, c, b, d));
    d.deferrable || this.flush();
  };
  mn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.j.length;
      e = { Ec: void 0, eh: void 0 }
    ) {
      var f = this.j[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || hn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.j.push(f))
          : c.push(f),
          this.j.shift();
      else {
        switch (f.type) {
          case "require":
            if (hn(this, g).status !== 3 && !a) {
              this.j.push.apply(this.j, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              h(Lb(r, t), b.D);
            });
            break;
          case "config":
            var k = hn(this, g);
            e.Ec = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Lb(t, u), r.Ec);
                };
              })(e)
            );
            var m = !!e.Ec[P.g.Zb];
            delete e.Ec[P.g.Zb];
            var n = g.ia === g.id;
            m || (n ? (k.K = {}) : (k.O[g.id] = {}));
            (k.H && m) || nn(this, P.g.ba, e.Ec, f);
            k.H = !0;
            n ? h(e.Ec, k.K) : (h(e.Ec, k.O[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.eh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Lb(t, u), r.eh);
                };
              })(e)
            );
            nn(this, f.args[1], e.eh, f);
            break;
          case "get":
            var p = {},
              q = ((p[P.g.qb] = f.args[0]), (p[P.g.Fb] = f.args[1]), p);
            nn(this, P.g.Ta, q, f);
        }
        this.j.shift();
        on(this, f);
      }
    }
    this.j.push.apply(this.j, c);
    d && this.flush();
  };
  var on = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = hn(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    dn = new mn();
  function pn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = kl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = lc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        Jk(e, "load", f);
        Jk(e, "error", f);
      };
      Ik(e, "load", f);
      Ik(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var rn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      il(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      qn(c, b);
    },
    qn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else pn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var sn = function () {
    this.O = this.O;
    this.D = this.D;
  };
  sn.prototype.O = !1;
  sn.prototype.dispose = function () {
    this.O || ((this.O = !0), this.Pa());
  };
  sn.prototype.addOnDisposeCallback = function (a, b) {
    this.O
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.D || (this.D = []), this.D.push(b !== void 0 ? Fa(a, b) : a));
  };
  sn.prototype.Pa = function () {
    if (this.D) for (; this.D.length; ) this.D.shift()();
  };
  var tn = function (a) {
      a.addtlConsent !== void 0 &&
        typeof a.addtlConsent !== "string" &&
        (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 &&
        typeof a.gdprApplies !== "boolean" &&
        (a.gdprApplies = void 0);
      return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
        (a.listenerId !== void 0 && typeof a.listenerId !== "number")
        ? 2
        : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
    },
    un = function (a, b) {
      b = b === void 0 ? {} : b;
      sn.call(this);
      this.H = a;
      this.j = null;
      this.Z = {};
      this.nd = 0;
      var c;
      this.bc = (c = b.Qm) != null ? c : 500;
      var d;
      this.ac = (d = b.En) != null ? d : !1;
      this.K = null;
    };
  ya(un, sn);
  un.prototype.Pa = function () {
    this.Z = {};
    this.K && (Jk(this.H, "message", this.K), delete this.K);
    delete this.Z;
    delete this.H;
    delete this.j;
    sn.prototype.Pa.call(this);
  };
  var wn = function (a) {
    return typeof a.H.__tcfapi === "function" || vn(a) != null;
  };
  un.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.ac },
      d = Hk(function () {
        return a(c);
      }),
      e = 0;
    this.bc !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.bc));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = tn(c)),
          (c.internalBlockOnErrors = b.ac),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      xn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  un.prototype.removeEventListener = function (a) {
    a && a.listenerId && xn(this, "removeEventListener", null, a.listenerId);
  };
  var zn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = yn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && yn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? yn(a.purpose.legitimateInterests, b) &&
                yn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    yn = function (a, b) {
      return !(!a || !a[b]);
    },
    xn = function (a, b, c, d) {
      c || (c = function () {});
      if (typeof a.H.__tcfapi === "function") {
        var e = a.H.__tcfapi;
        e(b, 2, c, d);
      } else if (vn(a)) {
        An(a);
        var f = ++a.nd;
        a.Z[f] = c;
        if (a.j) {
          var g = {};
          a.j.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    vn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    An = function (a) {
      a.K ||
        ((a.K = function (b) {
          try {
            var c;
            c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Z[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Ik(a.H, "message", a.K));
    },
    Bn = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = tn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (rn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var Cn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function Dn() {
    var a = ii.tcf || {};
    return (ii.tcf = a);
  }
  var En = function () {
      return new un(G, { Qm: -1 });
    },
    Kn = function () {
      var a = Dn(),
        b = En();
      wn(b) && !Fn() && !Gn() && O(124);
      if (!a.active && wn(b)) {
        Fn() &&
          ((a.active = !0),
          (a.kc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Il().active = !0),
          (a.tcString = "tcunavailable"));
        jm();
        try {
          b.addEventListener(function (c) {
            if (c.internalErrorState !== 0)
              Hn(a), km([P.g.R, P.g.ya, P.g.P]), (Il().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              Gn() && (a.active = !0),
              !In(c) || Fn() || Gn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (c.gdprApplies === !1) {
                var e = {},
                  f;
                for (f in Cn) Cn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (In(c)) {
                var g = {},
                  k;
                for (k in Cn)
                  if (Cn.hasOwnProperty(k))
                    if (k === "1") {
                      var m,
                        n = c,
                        p = { zl: !0 };
                      p = p === void 0 ? {} : p;
                      m = Bn(n)
                        ? n.gdprApplies === !1
                          ? !0
                          : n.tcString === "tcunavailable"
                          ? !p.Gj
                          : (p.Gj || n.gdprApplies !== void 0 || p.zl) &&
                            (p.Gj ||
                              (typeof n.tcString === "string" &&
                                n.tcString.length))
                          ? zn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[k] = zn(c, k, Cn[k]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.kc = d;
                var q = {},
                  r = ((q[P.g.R] = a.kc["1"] ? "granted" : "denied"), q);
                a.gdprApplies !== !0
                  ? (km([P.g.R, P.g.ya, P.g.P]), (Il().active = !0))
                  : ((r[P.g.ya] =
                      a.kc["3"] && a.kc["4"] ? "granted" : "denied"),
                    typeof a.tcfPolicyVersion === "number" &&
                    a.tcfPolicyVersion >= 4
                      ? (r[P.g.P] =
                          a.kc["1"] && a.kc["7"] ? "granted" : "denied")
                      : km([P.g.P]),
                    em(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: Jn() || "",
                      }
                    ));
              }
            } else km([P.g.R, P.g.ya, P.g.P]);
          });
        } catch (c) {
          Hn(a), km([P.g.R, P.g.ya, P.g.P]), (Il().active = !0);
        }
      }
    };
  function Hn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function In(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  var Fn = function () {
    return G.gtag_enable_tcf_support === !0;
  };
  function Gn() {
    return Dn().enableAdvertiserConsentMode === !0;
  }
  var Jn = function () {
      var a = Dn();
      if (a.active) return a.tcString;
    },
    Ln = function () {
      var a = Dn();
      if (a.active && a.gdprApplies !== void 0)
        return a.gdprApplies ? "1" : "0";
    },
    Mn = function (a) {
      if (!Cn.hasOwnProperty(String(a))) return !0;
      var b = Dn();
      return b.active && b.kc ? !!b.kc[String(a)] : !0;
    };
  var Nn = [P.g.R, P.g.U, P.g.P, P.g.ya],
    Pn = {},
    Qn = ((Pn[P.g.R] = 1), (Pn[P.g.U] = 2), Pn);
  function Rn(a) {
    if (a === void 0) return 0;
    switch (W(a, P.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Sn() {
    return T(63) && Bl() === "US-CO" && rc.globalPrivacyControl === !0;
  }
  var Tn = function (a) {
      if (Sn()) return !1;
      var b = Rn(a);
      if (b === 3) return !1;
      switch (Sl(P.g.ya)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return b === 2;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    Un = function () {
      return Vl() || !Rl(P.g.R) || !Rl(P.g.U);
    },
    Vn = function () {
      var a = {},
        b;
      for (b in Qn) Qn.hasOwnProperty(b) && (a[Qn[b]] = Sl(b));
      return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0);
    },
    Wn = {},
    Xn =
      ((Wn[P.g.R] = 0), (Wn[P.g.U] = 1), (Wn[P.g.P] = 2), (Wn[P.g.ya] = 3), Wn);
  function Yn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Zn = function (a) {
      for (var b = "1", c = 0; c < Nn.length; c++) {
        var d = b,
          e,
          f = Nn[c],
          g = Ql.delegatedConsentTypes[f];
        e = g === void 0 ? 0 : Xn.hasOwnProperty(g) ? 12 | Xn[g] : 8;
        var k = Il();
        k.accessedAny = !0;
        var m = k.entries[f] || {};
        e = (e << 2) | Yn(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Yn(m.declare) << 4) | (Yn(m.default) << 2) | Yn(m.update)
            ]);
      }
      var n = b,
        p = (Sn() ? 1 : 0) << 3,
        q = (Vl() ? 1 : 0) << 2,
        r = Rn(a);
      return (b =
        n +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          p | q | r
        ]);
    },
    $n = function () {
      if (!Rl(P.g.P)) return "-";
      for (
        var a = Object.keys(gi), b = Tl(a), c = "", d = na(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += gi[f]);
      }
      T(50) &&
        (Ql.usedCorePlatformServices
          ? Ql.selectedAllCorePlatformServices
          : 1) &&
        (c += "o");
      return c || "-";
    },
    ao = function () {
      return Dl() || ((Fn() || Gn()) && Ln() === "1") ? "1" : "0";
    },
    bo = function () {
      return (Dl() ? !0 : !(!Fn() && !Gn()) && Ln() === "1") || !Rl(P.g.P);
    },
    co = function () {
      var a = "0",
        b = "0",
        c;
      var d = Dn();
      c = d.active ? d.cmpId : void 0;
      typeof c === "number" &&
        c >= 0 &&
        c <= 4095 &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = Dn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      typeof f === "number" &&
        f >= 0 &&
        f <= 63 &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var k = 0;
      Dl() && (k |= 1);
      Ln() === "1" && (k |= 2);
      Fn() && (k |= 4);
      var m;
      var n = Dn();
      m =
        n.enableAdvertiserConsentMode !== void 0
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      m === "1" && (k |= 8);
      Il().waitPeriodTimedOut && (k |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
      );
    },
    eo = function () {
      return Bl() === "US-CO";
    };
  function fo() {
    var a = !1;
    return a;
  }
  var go = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function ho(a) {
    a = a === void 0 ? {} : a;
    var b = Mf.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Mf.ctid;
    c.Bm = hi.ie;
    c.Dm = hi.Kg;
    c.Zl = Aj.fe ? 2 : 1;
    c.Km = a.Xj;
    c.qe = Mf.canonicalContainerId;
    c.qe !== a.xa && (c.xa = a.xa);
    var d = Kj();
    c.mm = d ? d.canonicalContainerId : void 0;
    ni ? ((c.Kf = go[b]), c.Kf || (c.Kf = 0)) : (c.Kf = ri ? 13 : 10);
    Ai.H
      ? ((c.Hf = 0), (c.Zk = 2))
      : pi
      ? (c.Hf = 1)
      : fo()
      ? (c.Hf = 2)
      : (c.Hf = 3);
    var e = {};
    e[6] = Bj;
    c.fl = e;
    var f = a.Af,
      g;
    var k = c.Kf,
      m = c.Hf;
    k === void 0
      ? (g = "")
      : (m || (m = 0), (g = "" + He(1, 1) + Ee((k << 2) | m)));
    var n = c.Zk,
      p = "4" + g + (n ? "" + He(2, 1) + Ee(n) : ""),
      q,
      r = c.Dm;
    q = r && Ge.test(r) ? "" + He(3, 2) + r : "";
    var t,
      u = c.Bm;
    t = u ? "" + He(4, 1) + Ee(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var x = w.split("-"),
        y = x[0].toUpperCase();
      if (y !== "GTM" && y !== "OPT") v = "";
      else {
        var B = x[1];
        v = "" + He(5, 3) + Ee(1 + B.length) + (c.Zl || 0) + B;
      }
    } else v = "";
    var A = c.Km,
      D = c.qe,
      E = c.xa,
      C = c.Pn,
      F =
        p +
        q +
        t +
        v +
        (A ? "" + He(6, 1) + Ee(A) : "") +
        (D ? "" + He(7, 3) + Ee(D.length) + D : "") +
        (E ? "" + He(8, 3) + Ee(E.length) + E : "") +
        (C ? "" + He(9, 3) + Ee(C.length) + C : ""),
      M;
    var L = c.fl;
    L = L === void 0 ? {} : L;
    for (
      var R = [], V = na(Object.keys(L)), ba = V.next();
      !ba.done;
      ba = V.next()
    ) {
      var aa = ba.value;
      R[Number(aa)] = L[aa];
    }
    if (R.length) {
      var Q = He(10, 3),
        oa;
      if (R.length === 0) oa = Ee(0);
      else {
        for (var ma = [], ia = 0, za = !1, Ma = 0; Ma < R.length; Ma++) {
          za = !0;
          var Da = Ma % 6;
          R[Ma] && (ia |= 1 << Da);
          Da === 5 && (ma.push(Ee(ia)), (ia = 0), (za = !1));
        }
        za && ma.push(Ee(ia));
        oa = ma.join("");
      }
      var Sa = oa;
      M = "" + Q + Ee(Sa.length) + Sa;
    } else M = "";
    var ib = c.mm;
    return F + M + (ib ? "" + He(11, 3) + Ee(ib.length) + ib : "");
  }
  var io = {
      oj: "service_worker_endpoint",
      Lg: "shared_user_id",
      Mg: "shared_user_id_requested",
      ke: "shared_user_id_source",
    },
    jo;
  function ko(a) {
    if (!jo) {
      jo = {};
      for (var b = na(Object.keys(io)), c = b.next(); !c.done; c = b.next())
        jo[io[c.value]] = !0;
    }
    return !!jo[a];
  }
  function lo(a, b) {
    b = b === void 0 ? !1 : b;
    if (ko(a)) {
      var c,
        d,
        e =
          (d = (c = vc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = na(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function mo(a, b) {
    var c = lo(a, !0);
    c && c.set(b);
  }
  function no(a) {
    var b;
    return (b = lo(a)) == null ? void 0 : b.get();
  }
  function oo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = lo(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function po(a, b) {
    var c = lo(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function qo(a) {
    return a.origin !== "null";
  }
  function ro(a, b, c, d) {
    var e;
    if (so(d)) {
      for (
        var f = [], g = String(b || to()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function uo(a, b, c, d, e) {
    if (so(e)) {
      var f = vo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = wo(
          f,
          function (g) {
            return g.ol;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = wo(
          f,
          function (g) {
            return g.qm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function xo(a, b, c, d) {
    var e = to(),
      f = window;
    qo(f) && (f.document.cookie = a);
    var g = to();
    return e !== g || (c !== void 0 && ro(b, g, !1, d).indexOf(c) >= 0);
  }
  function yo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!so(c.Ab)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = zo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.fm);
    g = e(g, "samesite", c.Em);
    c.Fm && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Ao(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = p[t] !== "none" ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Bo(u, c.path) && xo(v, a, b, c.Ab)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return Bo(n, c.path) ? 1 : xo(g, a, b, c.Ab) ? 0 : 1;
  }
  function Co(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return yo(a, b, c);
  }
  function wo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function vo(a, b, c) {
    for (var d = [], e = ro(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            ol: Number(n[0]) || 1,
            qm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function zo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var Do = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Eo = /(^|\.)doubleclick\.net$/i;
  function Bo(a, b) {
    return (
      a !== void 0 &&
      (Eo.test(window.document.location.hostname) || (b === "/" && Do.test(a)))
    );
  }
  function Fo(a) {
    if (!a) return 1;
    a = a.indexOf(".") === 0 ? a.substring(1) : a;
    return a.split(".").length;
  }
  function Go(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function Ho(a, b) {
    var c = "" + Fo(a),
      d = Go(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var to = function () {
      return qo(window) ? window.document.cookie : "";
    },
    so = function (a) {
      return a && Nl().j()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return Ul(b) && Rl(b);
          })
        : !0;
    },
    Ao = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Eo.test(e) || Do.test(e) || a.push("none");
      return a;
    };
  function Io(a) {
    var b = Math.round(Math.random() * 2147483647),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; f >= 0; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = e !== 0 ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function Jo(a) {
    return [Io(a), Math.round(Db() / 1e3)].join(".");
  }
  function Ko(a, b, c, d, e) {
    var f = Fo(b);
    return uo(a, f, Go(c), d, e);
  }
  function Lo(a, b, c, d) {
    return [b, Ho(c, d), a].join(".");
  }
  function Mo(a, b, c, d) {
    var e,
      f = Number(a.zb != null ? a.zb : void 0);
    f !== 0 && (e = new Date((b || Db()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ab: d,
    };
  }
  var No;
  function Oo() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Po,
      d = Qo,
      e = Ro();
    if (!e.init) {
      Fc(H, "mousedown", a);
      Fc(H, "keyup", a);
      Fc(H, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function So(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Ro().decorators.push(f);
  }
  function To(a, b, c) {
    for (var d = Ro().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== H.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Gb(e, g.callback());
      }
    }
    return e;
  }
  function Ro() {
    var a = vc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Uo = /(.*?)\*(.*?)\*(.*)/,
    Vo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Wo = /^(?:www\.|m\.|amp\.)+/,
    Xo = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Yo(a) {
    var b = Xo.exec(a);
    if (b) return { Bh: b[1], query: b[2], fragment: b[3] };
  }
  function Zo(a, b) {
    var c = [
        rc.userAgent,
        new Date().getTimezoneOffset(),
        rc.userLanguage || rc.language,
        Math.floor(Db() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = No)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    No = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ No[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function $o() {
    return function (a) {
      var b = U(G.location.href),
        c = b.search.replace("?", ""),
        d = aj(c, "_gl", !1, !0) || "";
      a.query = ap(d) || {};
      var e = bj(b, "fragment"),
        f;
      var g = -1;
      if (Ib(e, "_gl=")) g = 4;
      else {
        var k = e.indexOf("&_gl=");
        k > 0 && (g = k + 3 + 2);
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = ap(f || "") || {};
    };
  }
  function bp(a) {
    var b = $o(),
      c = Ro();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Gb(d, e.query), a && Gb(d, e.fragment));
    return d;
  }
  var ap = function (a) {
    try {
      var b = cp(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = kb(d[e + 1]);
          c[f] = g;
        }
        mb("TAGGING", 6);
        return c;
      }
    } catch (k) {
      mb("TAGGING", 8);
    }
  };
  function cp(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = Uo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Zo(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        mb("TAGGING", 7);
      }
    }
  }
  function dp(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = Yo(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.Bh + k + m;
  }
  function ep(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (v.push(w), v.push(jb(String(x))));
          }
        var y = v.join("*");
        u = ["1", Zo(y), y].join("*");
        d
          ? (Ti(3) || Ti(1) || !p) && fp("_gl", u, a, p, q)
          : gp("_gl", u, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = To(b, 1, d),
      f = To(b, 2, d),
      g = To(b, 4, d),
      k = To(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Ti(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && hp(m, k[m], a);
  }
  function hp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? gp(a, b, c)
      : c.tagName.toLowerCase() === "form" && fp(a, b, c);
  }
  function gp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Ti(4) || d)) {
        var k = G.location.href,
          m = Yo(c.href),
          n = Yo(k);
        g = !(m && n && m.Bh === n.Bh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = dp(a, b, c.href, d, e);
      hc.test(p) && (c.href = p);
    }
  }
  function fp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = dp(a, b, c.action, d, e);
          hc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Po(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || ep(e, e.hostname);
      }
    } catch (g) {}
  }
  function Qo(a) {
    try {
      if (a.action) {
        var b = bj(U(a.action), "host");
        ep(a, b);
      }
    } catch (c) {}
  }
  function ip(a, b, c, d) {
    Oo();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    So(a, b, e, d, !1);
    e === 2 && mb("TAGGING", 23);
    d && mb("TAGGING", 24);
  }
  function jp(a, b) {
    Oo();
    So(a, [dj(G.location, "host", !0)], b, !0, !0);
  }
  function kp() {
    var a = H.location.hostname,
      b = Vo.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(Wo, ""),
      m = e.replace(Wo, "");
    return k === m || Jb(k, "." + m);
  }
  function lp(a, b) {
    return a === !1 ? !1 : a || b || kp();
  }
  var mp = ["1"],
    np = {},
    op = {};
  function pp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = qp(a.prefix);
    if (!np[c])
      if (rp(c, a.path, a.domain)) {
        var d = op[qp(a.prefix)];
        sp(a, d ? d.id : void 0, d ? d.vh : void 0);
      } else {
        var e = ij("auiddc");
        if (e) mb("TAGGING", 17), (np[c] = e);
        else if (b) {
          var f = qp(a.prefix),
            g = Jo();
          tp(f, g, a);
          rp(c, a.path, a.domain);
        }
      }
  }
  function sp(a, b, c) {
    var d = qp(a.prefix),
      e = np[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Db() / 1e3)));
          tp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function tp(a, b, c, d) {
    var e = Lo(b, "1", c.domain, c.path),
      f = Mo(c, d);
    f.Ab = up();
    Co(a, e, f);
  }
  function rp(a, b, c) {
    var d = Ko(a, b, c, mp, up());
    if (!d) return !1;
    vp(a, d);
    return !0;
  }
  function vp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((np[a] = c.slice(0, 2).join(".")),
        (op[a] = { id: c.slice(2, 4).join("."), vh: Number(c[4]) || 0 }))
      : c.length === 3
      ? (op[a] = { id: c.slice(0, 2).join("."), vh: Number(c[2]) || 0 })
      : (np[a] = b);
  }
  function qp(a) {
    return (a || "_gcl") + "_au";
  }
  function wp(a) {
    function b() {
      Rl(c) && a();
    }
    var c = up();
    Yl(function () {
      b();
      Rl(c) || Zl(b, c);
    }, c);
  }
  function xp(a) {
    var b = bp(!0),
      c = qp(a.prefix);
    wp(function () {
      var d = b[c];
      if (d) {
        vp(c, d);
        var e = Number(np[c].split(".")[1]) * 1e3;
        if (e) {
          mb("TAGGING", 16);
          var f = Mo(a, e);
          f.Ab = up();
          var g = Lo(d, "1", a.domain, a.path);
          Co(c, g, f);
        }
      }
    });
  }
  function yp(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Ko(a, e.path, e.domain, mp, up());
      k && (g[a] = k);
      return g;
    };
    wp(function () {
      ip(f, b, c, d);
    });
  }
  function up() {
    return ["ad_storage", "ad_user_data"];
  }
  function zp(a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Oh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Ap(a, b) {
    var c = zp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Oh] || (d[c[e].Oh] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, aa: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Oh].push(g);
      }
    }
    return d;
  }
  var Bp = {},
    Cp =
      ((Bp.k = { La: /^[\w-]+$/ }),
      (Bp.b = { La: /^[\w-]+$/, Ih: !0 }),
      (Bp.i = { La: /^[1-9]\d*$/ }),
      Bp);
  var Dp = {},
    Gp =
      ((Dp[5] = { ik: { 2: Ep }, Tg: ["k", "i", "b"] }),
      (Dp[4] = { ik: { 2: Ep, GCL: Fp }, Tg: ["k", "i", "b"] }),
      Dp);
  function Hp(a) {
    var b = Gp[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.ik[c];
        if (d) return d(a, 5);
      }
    }
  }
  function Ep(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = Gp[b];
      if (e) {
        for (
          var f = e.Tg, g = na(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = Cp[n];
              q && (q.Ih ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function Ip(a, b) {
    var c = Gp[5];
    if (c) {
      for (var d = [], e = na(c.Tg), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = Cp[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.Ih && Array.isArray(m))
              for (var n = na(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function Fp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var Jp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Kp(a) {
    if (Gp[5]) {
      for (
        var b = [],
          c = ro(a, void 0, void 0, Jp.get(5)),
          d = na(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Hp(e.value);
        f && (Lp(f), b.push(f));
      }
      return b;
    }
  }
  function Mp(a, b, c, d) {
    c = c || {};
    var e = Ho(c.domain, c.path),
      f = Ip(b, e);
    if (f) {
      var g = Mo(c, d, void 0, Jp.get(5));
      Co(a, f, g);
    }
  }
  function Np(a, b) {
    var c = b.La;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Lp(a) {
    for (
      var b = na(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { te: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.te = Cp[e];
      d.te
        ? d.te.Ih
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Np(k, g.te);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Np(f, d.te)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  var Op = /^\w+$/,
    Pp = /^[\w-]+$/,
    Qp = {},
    Rp =
      ((Qp.aw = "_aw"),
      (Qp.dc = "_dc"),
      (Qp.gf = "_gf"),
      (Qp.gp = "_gp"),
      (Qp.gs = "_gs"),
      (Qp.ha = "_ha"),
      (Qp.ag = "_ag"),
      (Qp.gb = "_gb"),
      Qp);
  function Sp() {
    return ["ad_storage", "ad_user_data"];
  }
  function Tp(a) {
    return !Nl().j() || Rl(a);
  }
  function Up(a, b) {
    function c() {
      var d = Tp(b);
      d && a();
      return d;
    }
    Yl(function () {
      c() || Zl(c, b);
    }, b);
  }
  function Vp(a) {
    return Wp(a).map(function (b) {
      return b.aa;
    });
  }
  function Xp(a) {
    return Yp(a)
      .filter(function (b) {
        return b.aa;
      })
      .map(function (b) {
        return b.aa;
      });
  }
  function Yp(a) {
    var b = Zp(a.prefix),
      c = $p("gb", b),
      d = $p("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Wp(c).map(e("gb")),
      g = (Ti(6) ? aq(d) : []).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function bq(a, b, c, d, e) {
    var f = tb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = cq(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  function aq(a) {
    for (
      var b = Kp(a) || [], c = [], d = na(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = dq(f);
      k && bq(c, "2", g.k, k, g.b || []);
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp;
    });
  }
  function Wp(a) {
    for (
      var b = [], c = ro(a, H.cookie, void 0, Sp()), d = na(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = eq(e.value);
      if (f != null) {
        var g = f;
        bq(b, g.version, g.aa, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return fq(b);
  }
  function cq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Zp(a) {
    return a && typeof a === "string" && a.match(Op) ? a : "_gcl";
  }
  function gq(a, b) {
    var c = Ti(6),
      d = U(a),
      e = bj(d, "query", !1, void 0, "gclid"),
      f = bj(d, "query", !1, void 0, "gclsrc"),
      g = bj(d, "query", !1, void 0, "wbraid");
    Ti(7) && (g = Pb(g));
    var k;
    c && (k = bj(d, "query", !1, void 0, "gbraid"));
    var m = bj(d, "query", !1, void 0, "gad_source"),
      n = bj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !k))) {
      var p = d.hash.replace("#", "");
      e = e || aj(p, "gclid", !1);
      f = f || aj(p, "gclsrc", !1);
      g = g || aj(p, "wbraid", !1);
      c && (k = k || aj(p, "gbraid", !1));
      m = m || aj(p, "gad_source", !1);
    }
    return hq(e, f, n, g, k, m);
  }
  function iq() {
    return gq(G.location.href, !0);
  }
  function hq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Pp))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Pp.test(d) && ((g.wbraid = d), k(d, "gb"));
    Ti(6) && e !== void 0 && Pp.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Pp.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function jq(a) {
    var b = iq();
    if (Ti(5)) {
      for (
        var c = !0, d = na(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && (b = gq(G.document.referrer, !1));
    }
    kq(b, !1, a);
  }
  function kq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Zp(c.prefix),
      g = d || Db(),
      k = Math.round(g / 1e3),
      m = Sp(),
      n = !1,
      p = !1,
      q = function () {
        if (Tp(m)) {
          var r = Mo(c, g, !0);
          r.Ab = m;
          for (
            var t = function (F, M) {
                var L = $p(F, f);
                L && (Co(L, M, r), F !== "gb" && (n = !0));
              },
              u = function (F) {
                var M = ["GCL", k, F];
                e.length > 0 && M.push(e.join("."));
                return M.join(".");
              },
              v = na(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var x = w.value;
            a[x] && t(x, u(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = $p("gb", f);
            (!b &&
              Wp(B).some(function (F) {
                return F.aa === y && F.labels && F.labels.length > 0;
              })) ||
              t("gb", u(y));
          }
        }
        if (!p && Ti(6) && a.gbraid && Tp("ad_storage") && ((p = !0), !n)) {
          var A = a.gbraid,
            D = $p("ag", f);
          if (
            b ||
            !(Ti(6) ? aq(D) : []).some(function (F) {
              return F.aa === A && F.labels && F.labels.length > 0;
            })
          ) {
            var E = {},
              C = ((E.k = A), (E.i = "" + k), (E.b = e), E);
            Mp(D, C, c, g);
          }
        }
        lq(a, f, g, c);
      };
    Yl(function () {
      q();
      Tp(m) || Zl(q, m);
    }, m);
  }
  function lq(a, b, c, d) {
    if (a.gad_source !== void 0 && Tp("ad_storage")) {
      var e = $p("gs", b);
      if (e) {
        var f = Math.round((Db() - (Qc() || 0)) / 1e3),
          g = {},
          k = ((g.k = a.gad_source), (g.i = "" + f), g);
        Mp(e, k, d, c);
      }
    }
  }
  function mq(a, b) {
    var c = bp(!0);
    Up(function () {
      for (var d = Zp(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Rp[f] !== void 0) {
          var g = $p(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(nq(k), Db()),
              n;
            b: {
              for (
                var p = m, q = ro(g, H.cookie, void 0, Sp()), r = 0;
                r < q.length;
                ++r
              )
                if (nq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = Mo(b, m, !0);
              t.Ab = Sp();
              Co(g, k, t);
            }
          }
        }
      }
      kq(hq(c.gclid, c.gclsrc), !1, b);
    }, Sp());
  }
  function oq(a) {
    var b = [];
    Ti(6) && b.push("ag");
    if (b.length !== 0) {
      var c = bp(!0),
        d = Zp(a.prefix);
      Up(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = $p(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var k = Hp(g);
                if (k) {
                  var m = dq(k);
                  m || (m = Db());
                  var n;
                  a: {
                    for (var p = m, q = Kp(f), r = 0; r < q.length; ++r)
                      if (dq(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  k.i = "" + Math.round(m / 1e3);
                  Mp(f, k, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function $p(a, b) {
    var c = Rp[a];
    if (c !== void 0) return b + c;
  }
  function nq(a) {
    return pq(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function dq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function eq(a) {
    var b = pq(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function pq(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Pp.test(a[2])
      ? []
      : a;
  }
  function qq(a, b, c, d, e) {
    if (Array.isArray(b) && qo(G)) {
      var f = Zp(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = $p(a[m], f);
            if (n) {
              var p = ro(n, H.cookie, void 0, Sp());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Up(function () {
        ip(g, b, c, d);
      }, Sp());
    }
  }
  function rq(a, b, c, d) {
    if (Array.isArray(a) && qo(G)) {
      var e = [];
      Ti(6) && e.push("ag");
      if (e.length !== 0) {
        var f = Zp(d),
          g = function () {
            for (var k = {}, m = 0; m < e.length; ++m) {
              var n = $p(e[m], f);
              if (!n) return {};
              var p = Kp(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return dq(t) - dq(r);
                })[0];
                k[n] = Ip(q);
              }
            }
            return k;
          };
        Up(
          function () {
            ip(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function fq(a) {
    return a.filter(function (b) {
      return Pp.test(b.aa);
    });
  }
  function sq(a, b) {
    if (qo(G)) {
      for (var c = Zp(b.prefix), d = {}, e = 0; e < a.length; e++)
        Rp[a[e]] && (d[a[e]] = Rp[a[e]]);
      Up(function () {
        z(d, function (f, g) {
          var k = ro(c + g, H.cookie, void 0, Sp());
          k.sort(function (t, u) {
            return nq(u) - nq(t);
          });
          if (k.length) {
            var m = k[0],
              n = nq(m),
              p = pq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = pq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            kq(q, !0, b, n, p);
          }
        });
      }, Sp());
    }
  }
  function tq(a) {
    var b = [],
      c = [];
    Ti(6) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 &&
      Up(
        function () {
          for (var d = Zp(a.prefix), e = 0; e < b.length; ++e) {
            var f = $p(b[e], d);
            if (!f) break;
            var g = Kp(f);
            if (g.length) {
              var k = g.sort(function (q, r) {
                  return dq(r) - dq(q);
                })[0],
                m = dq(k),
                n = k.b,
                p = {};
              p[c[e]] = k.k;
              kq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function uq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function vq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Vl()) {
      var c = iq();
      if (uq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        Ti(6) && b(d, "gbraid", c.gbraid);
        jp(function () {
          return d;
        }, 3);
        jp(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function wq(a) {
    if (!Ti(1)) return null;
    var b = bp(!0).gad_source;
    if (b != null) return (G.location.hash = ""), b;
    if (Ti(2)) {
      var c = U(G.location.href);
      b = bj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = iq();
      if (uq(d, a)) return "0";
    }
    return null;
  }
  function xq(a) {
    var b = wq(a);
    b != null &&
      jp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function yq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function zq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Tp(Sp())) return e;
    var f = Wp(a),
      g = yq(e, f, b);
    if (g.length && !d)
      for (var k = na(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.aa]
            .concat(n.labels || [], [b])
            .join("."),
          r = Mo(c, p, !0);
        r.Ab = Sp();
        Co(a, q, r);
      }
    return e;
  }
  function Aq(a, b) {
    var c = [];
    b = b || {};
    var d = Yp(b),
      e = yq(c, d, a);
    if (e.length)
      for (var f = na(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Zp(b.prefix),
          n = $p(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.aa,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + v), (w.b = (t || []).concat([a])), w);
          Mp(n, x, b, u);
        } else if (k.type === "gb") {
          var y = [q, v, r].concat(t || [], [a]).join("."),
            B = Mo(b, u, !0);
          B.Ab = Sp();
          Co(n, y, B);
        }
      }
    return c;
  }
  function Bq(a, b) {
    var c = Zp(b),
      d = $p(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? (Ti(6) ? aq(d) : []) : Wp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Cq(a) {
    for (var b = 0, c = na(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Dq(a, b) {
    var c = Math.max(Bq("aw", a), Cq(Tp(Sp()) ? Ap() : {})),
      d = Math.max(Bq("gb", a), Cq(Tp(Sp()) ? Ap("_gac_gb", !0) : {}));
    Ti(6) && b && (d = Math.max(d, Bq("ag", a)));
    return d > c;
  }
  var Eq = function (a, b, c) {
      var d = (ii.joined_auid = ii.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Fq = function () {
      var a = U(G.location.href),
        b = bj(a, "query", !1, void 0, "gad_source");
      if (b === void 0) {
        var c = a.hash.replace("#", "");
        b = aj(c, "gad_source", !1);
      }
      return b;
    },
    Gq = function () {
      var a = U(G.location.href).search.replace("?", "");
      return aj(a, "gad", !1, !0) === "1";
    },
    Hq = function () {
      var a = ll(!1) === 1 ? G.top.location.href : G.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Iq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = fq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Kq = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = ij("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Zp(b);
      if (e === "_gcl") {
        var f = !X(Jq()) && c,
          g;
        g = iq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = $p(a, e);
      return k ? Vp(k) : [];
    },
    Lq = function (a) {
      var b = Jq();
      im(function () {
        a();
        X(b) || Zl(a, b);
      }, b);
    },
    Jq = function () {
      return [P.g.R, P.g.P];
    },
    Mq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Nq = /^www.googleadservices.com$/,
    Oq = function (a, b) {
      return Kq("aw", a, b);
    },
    Pq = function (a, b) {
      return Kq("dc", a, b);
    },
    Qq = function (a, b, c, d, e) {
      var f = iq(),
        g = [],
        k = c && Tn(c),
        m = f.gclid,
        n = f.dclid,
        p = f.gclsrc || "aw",
        q = Gq(),
        r = Fq();
      !m ||
        (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
        g.push({ aa: m, ye: p });
      n && g.push({ aa: n, ye: "ds" });
      g.length === 2 && O(147);
      g.length === 0 && f.wbraid && g.push({ aa: f.wbraid, ye: "gb" });
      g.length === 0 && p === "aw.ds" && g.push({ aa: "", ye: "aw.ds" });
      Lq(function () {
        var t = X(Jq());
        if (t) {
          pp(a);
          var u = [],
            v = t ? np[qp(a.prefix)] : void 0;
          v && u.push("auid=" + v);
          if (X(P.g.P)) {
            e && u.push("userId=" + e);
            var w = no(io.Lg);
            if (w === void 0) mo(io.Mg, !0);
            else {
              var x = no(io.ke);
              u.push("ga_uid=" + x + "." + w);
            }
          }
          var y = H.referrer ? bj(U(H.referrer), "host") : "",
            B = t || !d ? g : [];
          B.length === 0 &&
            (Mq.test(y) || Nq.test(y)) &&
            B.push({ aa: "", ye: "" });
          if (B.length !== 0 || q || r !== void 0) {
            y && u.push("ref=" + encodeURIComponent(y));
            var A = Hq();
            u.push("url=" + encodeURIComponent(A));
            u.push("tft=" + Db());
            var D = Qc();
            D !== void 0 && u.push("tfd=" + Math.round(D));
            var E = ll(!0);
            u.push("frm=" + E);
            q && u.push("gad=1");
            r !== void 0 && u.push("gad_source=" + encodeURIComponent(r));
            if (!c) {
              var C = {};
              c = Zm(Pm(new Om(0), ((C[P.g.ka] = dn.D[P.g.ka]), C)));
            } else if (!T(75)) {
              var F = {};
              c = Zm(Pm(new Om(0), ((F[P.g.ka] = k), F)));
            }
            u.push("gtm=" + ho({ xa: b }));
            Un() && u.push("gcs=" + Vn());
            u.push("gcd=" + Zn(c));
            bo() && u.push("dma_cps=" + $n());
            u.push("dma=" + ao());
            Tn(c) ? u.push("npa=0") : u.push("npa=1");
            T(63) && eo() && u.push("_ng=1");
            wn(En()) && u.push("tcfd=" + co());
            var M = Ln();
            M && u.push("gdpr=" + M);
            var L = Jn();
            L && u.push("gdpr_consent=" + L);
            T(17) && u.push("apve=" + (T(18) ? 1 : 0));
            Ai.j && u.push("tag_exp=" + Ai.j);
            if (B.length > 0)
              for (var R = 0; R < B.length; R++) {
                var V = B[R],
                  ba = V.aa,
                  aa = V.ye;
                if (!Eq(a.prefix, aa + "." + ba, v !== void 0)) {
                  var Q =
                    "https://adservice.google.com/pagead/regclk?" + u.join("&");
                  ba !== ""
                    ? (Q =
                        aa === "gb"
                          ? Q + "&wbraid=" + ba
                          : Q + "&gclid=" + ba + "&gclsrc=" + aa)
                    : aa === "aw.ds" && (Q += "&gclsrc=aw.ds");
                  Lc(Q);
                }
              }
            else if (
              (q || r !== void 0) &&
              !Eq(a.prefix, "gad", v !== void 0)
            ) {
              var oa =
                "https://adservice.google.com/pagead/regclk?" + u.join("&");
              Lc(oa);
            }
          }
        }
      });
    };
  var Rq,
    Sq = !1;
  function Tq() {
    Sq = !0;
    Rq = Rq || {};
  }
  function Uq(a) {
    Sq || Tq();
    return Rq[a];
  }
  var Vq = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.o = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = h(c.eventMetadata || {}, {});
  };
  Vq.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && l(d) && T(56))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.o[a] = d);
  };
  var Wq = function (a, b, c) {
    var d = Uq(a.target.ia);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function Xq() {
    ii.dedupe_gclid || (ii.dedupe_gclid = Jo());
    return ii.dedupe_gclid;
  }
  var Yq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Zq = /^www.googleadservices.com$/;
  function $q(a) {
    a || (a = ar());
    return a.Vm
      ? !1
      : a.Kl || a.Ll || a.Nl || a.Ml || a.lh || a.gh || a.yl || a.Cl
      ? !0
      : !1;
  }
  function ar() {
    var a = {},
      b = bp(!0);
    a.Vm = !!b._up;
    var c = iq();
    a.Kl = c.aw !== void 0;
    a.Ll = c.dc !== void 0;
    a.Nl = c.wbraid !== void 0;
    a.Ml = c.gbraid !== void 0;
    var d = U(G.location.href),
      e = bj(d, "query", !1, void 0, "gad");
    a.lh = e !== void 0;
    if (!a.lh) {
      var f = d.hash.replace("#", ""),
        g = aj(f, "gad", !1);
      a.lh = g !== void 0;
    }
    a.gh = bj(d, "query", !1, void 0, "gad_source");
    if (a.gh === void 0) {
      var k = d.hash.replace("#", ""),
        m = aj(k, "gad_source", !1);
      a.gh = m;
    }
    var n = H.referrer ? bj(U(H.referrer), "host") : "";
    a.Cl = Yq.test(n);
    a.yl = Zq.test(n);
    return a;
  }
  var br = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    cr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    dr = /^\d+\.fls\.doubleclick\.net$/,
    er = /;gac=([^;?]+)/,
    fr = /;gacgb=([^;?]+)/;
  function gr(a, b) {
    if (dr.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && c.length === 2 && c[1].match(br)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = na(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].aa);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function hr(a, b, c) {
    for (
      var d = Tp(Sp()) ? Ap("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = na(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = zq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { xl: f ? e.join(";") : "", wl: gr(d, fr) };
  }
  function ir(a) {
    var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(cr) ? b[1] : void 0;
  }
  function jr(a) {
    var b = { hh: void 0, ih: void 0 },
      c,
      d;
    dr.test(H.location.host) && ((c = ir("gclgs")), (d = ir("gclst")));
    if (c && d) (b.hh = c), (b.ih = d);
    else {
      var e = Db(),
        f = aq((a || "_gcl") + "_gs"),
        g = f.map(function (m) {
          return m.aa;
        }),
        k = f.map(function (m) {
          return e - m.timestamp;
        });
      g.length > 0 &&
        k.length > 0 &&
        ((b.hh = g.join(".")), (b.ih = k.join(".")));
    }
    return b;
  }
  function kr(a, b, c) {
    if (dr.test(H.location.host)) {
      var d = ir(c);
      if (d) return [{ aa: d }];
    } else {
      if (b === "gclid") return Wp((a || "_gcl") + "_aw");
      if (b === "wbraid") return Wp((a || "_gcl") + "_gb");
      if (b === "braids") return Yp({ prefix: a });
    }
    return [];
  }
  function lr(a) {
    return kr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function mr(a) {
    return kr(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function nr(a) {
    return kr(a, "braids", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function or(a, b) {
    return dr.test(H.location.host) ? !(ir("gclaw") || ir("gac")) : Dq(a, b);
  }
  function pr(a, b, c) {
    var d;
    d = c ? Aq(a, b) : zq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  var qr = function () {
    if (qb(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var tr = function (a) {
      if (a.eventName === P.g.ba && a.metadata.hit_type === "page_view")
        if (T(18)) {
          a.metadata.redact_click_ids =
            W(a.m, P.g.fa) != null &&
            W(a.m, P.g.fa) !== !1 &&
            !X([P.g.R, P.g.P]);
          var b = rr(a),
            c = W(a.m, P.g.ra) !== !1;
          c || (a.o[P.g.wi] = "1");
          var d = Zp(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = W(a.m, P.g.Xa),
              g = W(a.m, P.g.sa) || {};
            sr({ rd: c, wd: g, Cd: f, jc: b });
            var k;
            if ((k = !e)) {
              var m;
              var n = (ii.ads_pageview = ii.ads_pageview || {});
              m = n[d] ? !1 : (n[d] = !0);
              k = !m;
            }
            if (k) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.o[P.g.xc] = P.g.Sb;
            if (a.metadata.consent_updated)
              (a.o[P.g.xc] = P.g.nk), (a.o[P.g.Qb] = "1");
            else if (a.metadata.user_id_updated) a.o[P.g.xc] = P.g.tk;
            else {
              var p = iq();
              a.o[P.g.Fd] = p.gclid;
              a.o[P.g.Md] = p.dclid;
              a.o[P.g.oi] = p.gclsrc;
              a.o[P.g.Fd] ||
                a.o[P.g.Md] ||
                ((a.o[P.g.Re] = p.wbraid), (a.o[P.g.Wf] = p.gbraid));
              a.o[P.g.Da] = H.referrer ? bj(U(H.referrer), "host") : "";
              a.o[P.g.wa] = Hq();
              a.o[P.g.ni] = Fq();
              a.o[P.g.Gb] = ll(!0);
              var q = ar();
              $q(q) && (a.o[P.g.ed] = "1");
              a.o[P.g.si] = Xq();
              bp(!1)._up === "1" && (a.o[P.g.Ji] = "1");
            }
            var r = X([P.g.R, P.g.P]);
            c && r && (pp(b), (a.o[P.g.Db] = np[qp(b.prefix)]));
            a.o[P.g.jb] = void 0;
            a.o[P.g.Ua] = void 0;
            var t = T(60);
            if (!a.o[P.g.Fd] && !a.o[P.g.Md] && or(d, t)) {
              var u = t ? Xp(b) : Vp(d + "_gb");
              u.length > 0 && (a.o[P.g.jb] = u.join("."));
            } else if (!a.o[P.g.Re] && r) {
              var v = Vp(d + "_aw");
              v.length > 0 && (a.o[P.g.Ua] = v.join("."));
            }
            a.m.isGtmEvent && (a.m.j[P.g.ka] = dn.D[P.g.ka]);
            Tn(a.m) ? (a.o[P.g.Nb] = !1) : (a.o[P.g.Nb] = !0);
            a.metadata.add_tag_timing = !0;
            var w = qr();
            w !== void 0 && (a.o[P.g.de] = w || "error");
            var x = Ln();
            x && (a.o[P.g.Ac] = x);
            var y = Jn();
            y && (a.o[P.g.Dc] = y);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    rr = function (a) {
      var b = {
        prefix: W(a.m, P.g.Za) || W(a.m, P.g.Na),
        domain: W(a.m, P.g.Va),
        zb: W(a.m, P.g.Wa),
        flags: W(a.m, P.g.ab),
      };
      a.m.isGtmEvent && (b.path = W(a.m, P.g.Eb));
      return b;
    },
    ur = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.rd;
      d = a.wd;
      e = a.Cd;
      f = a.xa;
      g = a.m;
      k = a.xd;
      m = a.Hn;
      n = a.ek;
      sr({ rd: c, wd: d, Cd: e, jc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Qq(b, f, g, k, n));
    },
    sr = function (a) {
      var b, c, d, e;
      b = a.rd;
      c = a.wd;
      d = a.Cd;
      e = a.jc;
      b &&
        (lp(c[P.g.Cc], !!c[P.g.W]) && (mq(vr, e), oq(e), xp(e)),
        jq(e),
        sq(vr, e),
        tq(e));
      c[P.g.W] &&
        (qq(vr, c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e.prefix),
        rq(c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e.prefix),
        yp(qp(e.prefix), c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e),
        yp("FPAU", c[P.g.W], c[P.g.Ib], !!c[P.g.sb], e));
      d && vq(wr);
      xq(wr);
    },
    xr = function (a, b, c, d) {
      var e, f, g;
      e = a.fk;
      f = a.callback;
      g = a.Jj;
      if (typeof f === "function")
        if (e === P.g.Ua && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === P.g.Db ? (O(65), pp(b, !1), f(np[qp(b.prefix)])) : f(g);
    },
    vr = ["aw", "dc", "gb"],
    wr = ["aw", "dc", "gb", "ag"];
  function yr(a) {
    var b = W(a.m, P.g.Hb),
      c = W(a.m, P.g.Wb);
    b && !c
      ? (a.eventName !== P.g.ba && a.eventName !== P.g.Nc && O(131),
        (a.isAborted = !0))
      : !b && c && (O(132), (a.isAborted = !0));
  }
  function zr(a) {
    var b = X(P.g.R) ? ii.pscdl : "denied";
    b != null && (a.o[P.g.Ve] = b);
  }
  function Ar(a) {
    var b = ll(!0);
    a.o[P.g.Gb] = b;
  }
  function Br(a) {
    T(63) && eo() && (a.o[P.g.Bc] = 1);
  }
  var Cr = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    },
    Dr = function (a) {
      var b = a && a[P.g.fg];
      return b && b[P.g.ri];
    },
    Er = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Fr = function (a, b) {
      var c = a && !X([P.g.R, P.g.P]);
      return b && c ? "0" : b;
    },
    Hr = function (a) {
      im(
        function () {
          function b(w) {
            var x = X([P.g.R, P.g.P]),
              y = k && x,
              B = g.prefix || "_gcl",
              A;
            ii.reported_gclid || (ii.reported_gclid = {});
            A = ii.reported_gclid;
            var D =
              (y ? B : "") +
              "." +
              (X(P.g.R) ? 1 : 0) +
              "." +
              (X(P.g.P) ? 1 : 0);
            if (!A[D]) {
              A[D] = !0;
              var E = {},
                C = function (ba, aa) {
                  if (aa || typeof aa === "number") E[ba] = aa.toString();
                },
                F = "https://www.google.com";
              Un() && (C("gcs", Vn()), w && C("gcu", 1));
              C("gcd", Zn(f));
              Ai.j && C("tag_exp", Ai.j);
              if (Vl()) {
                C("rnd", Xq());
                if ((!n || (p && p !== "aw.ds")) && x) {
                  var M = Vp(B + "_aw");
                  C("gclaw", M.join("."));
                }
                C("url", String(G.location).split(/[?#]/)[0]);
                C("dclid", Fr(d, q));
                x || (F = "https://pagead2.googlesyndication.com");
              }
              bo() && C("dma_cps", $n());
              C("dma", ao());
              C("npa", Tn(f) ? 0 : 1);
              T(63) && eo() && C("_ng", 1);
              wn(En()) && C("tcfd", co());
              C("gdpr_consent", Jn() || "");
              C("gdpr", Ln() || "");
              bp(!1)._up === "1" && C("gtm_up", 1);
              C("gclid", Fr(d, n));
              C("gclsrc", p);
              if (
                !(
                  E.hasOwnProperty("gclid") ||
                  E.hasOwnProperty("dclid") ||
                  E.hasOwnProperty("gclaw")
                ) &&
                (C("gbraid", Fr(d, r)),
                !E.hasOwnProperty("gbraid") && Vl() && x)
              ) {
                var L = Vp(B + "_gb");
                L.length > 0 && C("gclgb", L.join("."));
              }
              C("gtm", ho({ xa: f.eventMetadata.source_canonical_id, Af: !e }));
              k &&
                X(P.g.R) &&
                (pp(g || {}), y && C("auid", np[qp(g.prefix)] || ""));
              Gr || (a.Bj && C("did", a.Bj));
              a.jh && C("gdid", a.jh);
              a.ah && C("edid", a.ah);
              a.mh !== void 0 && C("frm", a.mh);
              T(17) && C("apve", T(18) ? 1 : 0);
              var R = Object.keys(E).map(function (ba) {
                  return ba + "=" + encodeURIComponent(E[ba]);
                }),
                V = F + "/pagead/landing?" + R.join("&");
              Lc(V);
            }
          }
          var c = !!a.Ug,
            d = !!a.xd,
            e = a.targetId,
            f = a.m,
            g = a.jc === void 0 ? {} : a.jc,
            k = a.Ef === void 0 ? !0 : a.Ef,
            m = iq(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && p !== "aw.ds") ? !1 : !0) || r),
            u = Vl();
          if (t || u)
            if (u) {
              var v = [P.g.R, P.g.P, P.g.ya];
              b();
              (function () {
                X(v) ||
                  hm(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [P.g.R, P.g.P, P.g.ya]
      );
    },
    Gr = !1;
  function Ir(a, b, c, d) {
    var e = Cc(),
      f;
    if (e === 1)
      a: {
        var g = ti;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" != G.location.protocol ? a : b) + c;
  }
  var Jr = function (a, b) {
      T(5) &&
        ((a.dma = ao()),
        bo() && (a.dmaCps = $n()),
        Tn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    Lr = function (a, b, c) {
      if (G[a.functionName]) return b.Ah && I(b.Ah), G[a.functionName];
      var d = Kr();
      G[a.functionName] = d;
      if (a.zf)
        for (var e = 0; e < a.zf.length; e++) G[a.zf[e]] = G[a.zf[e]] || Kr();
      a.Df && G[a.Df] === void 0 && (G[a.Df] = c);
      Bc(Ir("https://", "http://", a.Kh), b.Ah, b.km);
      return d;
    },
    Kr = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Mr = {
      functionName: "_googWcmImpl",
      Df: "_googWcmAk",
      Kh: "www.gstatic.com/wcm/loader.js",
    },
    Nr = {
      functionName: "_gaPhoneImpl",
      Df: "ga_wpid",
      Kh: "www.gstatic.com/gaphone/loader.js",
    },
    Or = { jk: "9", Qk: "5" },
    Pr = {
      functionName: "_googCallTrackingImpl",
      zf: [Nr.functionName, Mr.functionName],
      Kh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Or.jk || Or.Qk) +
        ".js",
    },
    Qr = {},
    Rr = function (a, b, c, d, e) {
      O(22);
      if (c) {
        e = e || {};
        var f = Lr(Mr, e, a),
          g = { ak: a, cl: b };
        e.Ob === void 0 && (g.autoreplace = c);
        Jr(g, d);
        f(2, e.Ob, g, c, 0, Cb(), e.options);
      }
    },
    Sr = function (a, b, c, d, e) {
      O(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Cb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Qr[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ma.length >= 2
              ? ((f.adData = { ak: k.ma[rm[1]], cl: k.ma[rm[2]] }),
                Jr(f.adData, d),
                (Qr[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.ia }), (Qr[k.id] = !0)));
        }
        (f.gaData || f.adData) && Lr(Pr, e)(e.Ob, f, e.options);
      }
    },
    Tr = function () {
      var a = !1;
      return a;
    },
    Ur = function (a, b) {
      if (a)
        if (fo()) {
        } else if ((a = l(a) ? om(Oj(a)) : om(Oj(a.id)))) {
          var c = void 0,
            d = !1,
            e = W(b, P.g.Ni);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = om(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ia && a.ia === g.ia)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = W(b, P.g.xg),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = W(b, P.g.vg),
                p = W(b, P.g.wg),
                q = W(b, P.g.yg),
                r = W(b, P.g.Mi),
                t = n || p,
                u = 1;
              a.prefix !== "UA" || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) Sr(c, m[v], r, b, { Ob: t, options: q });
                  else if (a.prefix === "AW" && a.ma[rm[2]])
                    Tr()
                      ? Sr([a], m[v], r || "US", b, { Ob: t, options: q })
                      : Rr(a.ma[rm[1]], a.ma[rm[2]], m[v], b, {
                          Ob: t,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (Tr()) Sr([a], m[v], r || "US", b, { Ob: t });
                    else {
                      var w = a.ia,
                        x = m[v],
                        y = { Ob: t };
                      O(23);
                      if (x) {
                        y = y || {};
                        var B = Lr(Nr, y, w),
                          A = {};
                        y.Ob !== void 0 ? (A.receiver = y.Ob) : (A.replace = x);
                        A.ga_wpid = w;
                        A.destination = x;
                        B(2, Cb(), A);
                      }
                    }
            }
          }
        }
    };
  function Vr(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.o[b];
      },
      setHitData: function (b, c) {
        a.o[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.o[b] === void 0 && (a.o[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.m, b);
      },
      Ej: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.o);
      },
    };
  }
  var Xr = function (a) {
      var b = Wr[a.target.ia];
      if (!a.isAborted && b)
        for (var c = Vr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Yr = function (a, b) {
      var c = Wr[a];
      c || (c = Wr[a] = []);
      c.push(b);
    },
    Wr = {};
  var $r = function (a) {
      if (X(Zr)) {
        a = a || {};
        pp(a, !1);
        var b = op[qp(Zp(a.prefix))];
        if (b && !(Db() - b.vh * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(Db() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    Zr = P.g.R;
  var as = function () {
    var a = (rc && rc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function bs() {
    var a = G.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function cs(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  }
  var ms = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = ls(d));
      c && (e.isVisible = !cs(d));
      return e;
    },
    ns = function (a, b, c) {
      return ms({ element: a.element, X: a.X, qa: "1" }, b, c);
    },
    os = function (a) {
      var b = !!a.ud + "." + !!a.vd;
      a && a.ve && a.ve.length && (b += "." + a.ve.join("."));
      a &&
        a.vb &&
        (b += "." + a.vb.email + "." + a.vb.phone + "." + a.vb.address);
      return b;
    },
    rs = function (a) {
      if (a.length != 0) {
        var b;
        b = ps(a, function (c) {
          return !qs.test(c.X);
        });
        b = ps(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = ps(b, function (c) {
          return !cs(c.element);
        });
        return b[0];
      }
    },
    ss = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && nh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    ps = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length == 0 ? a : c;
    },
    ls = function (a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ls(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    us = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(ts);
          if (f) {
            var g = f[0],
              k;
            if (G.location) {
              var m = dj(G.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    ys = function () {
      var a = [],
        b = H.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(vs.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(ws.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (T(22) && xs.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    zs = !1;
  var ts = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    As = /@(gmail|googlemail)\./i,
    qs = /support|noreply/i,
    vs = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    ws = ["BR"],
    Bs = { gn: "1", un: "2", ln: "3", on: "4", bn: "5", vn: "6", qn: "7" },
    Cs = {},
    xs = ["INPUT", "SELECT"];
  var Vs = function (a) {
      a = a || { ud: !0, vd: !0, Lf: void 0 };
      a.vb = a.vb || { email: !0, phone: !1, address: !1 };
      var b = os(a),
        c = Cs[b];
      if (c && Db() - c.timestamp < 200) return c.result;
      var d = ys(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!T(22)) {
        if (a.vb && a.vb.email) {
          var n = us(d.elements);
          f = ss(n, a && a.ve);
          g = rs(f);
          n.length > 10 && (e = "3");
        }
        !a.Lf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(ns(f[p], a.ud, a.vd));
        m = m.slice(0, 10);
      } else if (a.vb) {
      }
      g && (k = ns(g, a.ud, a.vd));
      var D = { elements: m, Eh: k, status: e };
      Cs[b] = { timestamp: Db(), result: D };
      return D;
    },
    Ws = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + As.test(a.X)
      );
    };
  var bt = Number("") || 5,
    ct = Number("") || 50,
    dt = ub();
  var ft = function (a, b) {
      a &&
        (et("sid", a.targetId, b),
        et("cc", a.clientCount, b),
        et("tl", a.totalLifeMs, b),
        et("hc", a.heartbeatCount, b),
        et("cl", a.clientLifeMs, b));
    },
    et = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    gt = function () {
      var a = H.referrer;
      if (a) {
        var b;
        return bj(U(a), "host") === ((b = G.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    ht = function (a) {
      this.O = a;
      this.H = 0;
    };
  ht.prototype.D = function (a, b, c, d) {
    var e = gt(),
      f,
      g = [];
    f =
      G === G.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && et("si", a.Ff, g);
    et("m", 0, g);
    et("iss", f, g);
    et("if", c, g);
    ft(b, g);
    d && et("fm", encodeURIComponent(d.substring(0, ct)), g);
    this.K(g);
  };
  ht.prototype.j = function (a, b, c, d, e) {
    var f = [];
    et("m", 1, f);
    et("s", a, f);
    et("po", gt(), f);
    b && (et("st", b.state, f), et("si", b.Ff, f), et("sm", b.Nf, f));
    ft(c, f);
    et("c", d, f);
    e && et("fm", encodeURIComponent(e.substring(0, ct)), f);
    this.K(f);
  };
  ht.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !vj ||
      this.H >= bt ||
      (et("pid", dt, a),
      et("bc", ++this.H, a),
      a.unshift("ctid=" + Mf.ctid + "&t=s"),
      this.O("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var it = {
    Sk: Number("") || 500,
    Gk: Number("") || 5e3,
    dj: Number("20") || 10,
    mk: Number("") || 5e3,
  };
  function jt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var kt = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Uk = e;
      this.H = g;
      this.j = f;
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.Z = this.Pa = this.heartbeatCount = this.Tk = 0;
      this.ej = !1;
      this.D = {};
      this.state = 0;
      this.Ff = jt(this.j);
      this.Nf = jt(this.j);
      this.O = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.ac();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        Ff: Math.round(jt(this.j) - this.Ff),
        Nf: Math.round(jt(this.j) - this.Nf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.Nf = jt(this.j)));
    };
    d.prototype.ij = function () {
      return String(this.Tk++);
    };
    d.prototype.ac = function () {
      var e = this;
      this.heartbeatCount++;
      this.bc(
        {
          type: 0,
          clientId: this.id,
          requestId: this.ij(),
          maxDelay: this.fj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats), e.Z++, f.isDead || e.Z > it.dj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.O = k || 10;
                e.K(4);
                e.Rk();
                var m, n;
                (n = (m = e.H).im) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.kj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + it.dj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.ej) {
                  var t, u;
                  (u = (t = e.H).Mn) == null || u.call(t);
                } else {
                  e.ej = !0;
                  var v, w;
                  (w = (v = e.H).jm) == null || w.call(v);
                }
              e.Z = 0;
              e.Vk();
              e.kj();
            }
          }
        }
      );
    };
    d.prototype.fj = function () {
      return this.state === 2 ? it.Gk : it.Sk;
    };
    d.prototype.kj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.ac();
      }, Math.max(0, this.fj() - (jt(this.j) - this.Pa)));
    };
    d.prototype.Yk = function (e, f, g) {
      var k = this;
      this.bc(
        { type: 1, clientId: this.id, requestId: this.ij(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                t,
                u;
              (u = (t = k.H).onFailure) == null || u.call(t, r);
              g(r);
            }
        }
      );
    };
    d.prototype.bc = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.O }), f(e);
      else {
        var k = this.state !== 2 && e.type != 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.D[m];
              r && g.cj(r, 7);
            },
            (n = e.maxDelay) != null ? n : it.mk
          ),
          q = { request: e, Wj: f, Qj: k, dm: p };
        this.D[m] = q;
        k || this.qj(q);
      }
    };
    d.prototype.qj = function (e) {
      this.Pa = jt(this.j);
      e.Qj = !1;
      this.Uk(e.request);
    };
    d.prototype.Vk = function () {
      for (var e in this.D) {
        var f = this.D[e];
        f.Qj && this.qj(f);
      }
    };
    d.prototype.Rk = function () {
      for (var e in this.D) this.cj(this.D[e], this.O);
    };
    d.prototype.cj = function (e, f) {
      this.nd(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Wj(g);
    };
    d.prototype.nd = function (e) {
      delete this.D[e.request.requestId];
      this.j.clearTimeout(e.dm);
    };
    d.prototype.Il = function (e) {
      this.Pa = jt(this.j);
      var f = this.D[e.requestId];
      if (f) this.nd(f), f.Wj(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, G, b);
    return c;
  };
  var lt = "https://" + hi.Ed + "/gtm/static/",
    mt;
  var nt = function () {
      mt ||
        (mt = new ht(function (a) {
          return void Ec(a);
        }));
      return mt;
    },
    ot = function (a) {
      if (!a) {
        var b = Ai.Pa;
        a = b ? b : lt;
      }
      var c;
      try {
        c = new URL(a);
      } catch (d) {
        return null;
      }
      return c.protocol !== "https:" ? null : c;
    },
    pt = function (a) {
      var b = no(io.oj);
      return b && b[a];
    },
    qt = function (a, b, c) {
      var d = nt(),
        e = this;
      this.initTime = c;
      this.O = this.K = !1;
      this.Z = null;
      this.D = d;
      this.j = 15;
      this.H = this.kl(a);
      G.setTimeout(function () {
        return e.Ij();
      }, 1e3);
      I(function () {
        e.Ql(a, b);
      });
    };
  ca = qt.prototype;
  ca.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.D.j(this.j, void 0, void 0, a.commandType),
        c({ failureType: this.j }))
      : this.H.Yk(a, b, c);
  };
  ca.getState = function () {
    return this.H.getState().state;
  };
  ca.Ql = function (a, b) {
    var c = G.location.origin,
      d = this,
      e = Dc();
    try {
      var f = e.contentDocument.createElement("iframe"),
        g = a.pathname,
        k = b ? "&1p=1" : "";
      Dc(
        (g[g.length - 1] === "/" ? a.toString() : a.toString() + "/") +
          "sw_iframe.html?origin=" +
          encodeURIComponent(c) +
          k,
        void 0,
        void 0,
        void 0,
        f
      );
      var m = function () {
        e.contentDocument.body.appendChild(f);
        f.addEventListener("load", function () {
          d.Z = f.contentWindow;
          e.contentWindow.addEventListener("message", function (n) {
            n.origin === a.origin && d.H.Il(n.data);
          });
          d.Ij();
        });
      };
      e.contentDocument.readyState === "complete"
        ? m()
        : e.contentWindow.addEventListener("load", function () {
            m();
          });
    } catch (n) {
      e.parentElement.removeChild(e),
        (this.j = 11),
        this.D.D(void 0, void 0, this.j, n.toString());
    }
  };
  ca.kl = function (a) {
    var b = this,
      c = kt(
        function (d) {
          var e;
          (e = b.Z) == null || e.postMessage(d, a.origin);
        },
        {
          jm: function () {
            b.K = !0;
            b.D.D(c.getState(), c.stats);
          },
          im: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.D.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.D.D(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.D.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  ca.Ij = function () {
    this.O || this.H.init();
    this.O = !0;
  };
  function rt(a, b) {
    var c = G.location.origin;
    if (!c) return;
    Ai.D && (a = "" + c + Bi() + "/_");
    var d = ot(a);
    if (d === null || pt(d.origin)) return;
    if (!sc()) {
      nt().D(void 0, void 0, 6);
      return;
    }
    var e = new qt(d, !!a, b || Math.round(Db())),
      f;
    a: {
      var g = io.oj,
        k = {},
        m = lo(g);
      if (!m) {
        m = lo(g, !0);
        if (!m) {
          f = void 0;
          break a;
        }
        m.set(k);
      }
      f = m.get();
    }
    f[d.origin] = e;
  }
  function st(a, b, c, d) {
    var e;
    if ((e = pt(a)) == null || !e.delegate) {
      var f = sc() ? 16 : 6;
      nt().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    pt(a).delegate(b, c, d);
  }
  function tt(a, b, c, d) {
    var e = ot();
    if (e === null) {
      d(sc() ? 16 : 6);
      return;
    }
    var f,
      g = (f = pt(e.origin)) == null ? void 0 : f.initTime,
      k = Math.round(Db());
    st(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: g ? k - g : void 0,
        },
      },
      function () {
        c();
      },
      function (m) {
        d(m.failureType);
      }
    );
  }
  function ut(a, b, c, d) {
    var e = ot(a);
    if (e === null) {
      d("_is_sw=f" + (sc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(Db()),
      k,
      m = (k = pt(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    st(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          t = (r = pt(e.origin)) == null ? void 0 : r.getState();
        t != void 0 && (q += "s" + t);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var vt = void 0;
  function wt(a) {
    var b = [];
    return b;
  }
  var xt = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Xk();
  $k() || Uk("iPod");
  Uk("iPad");
  !Uk("Android") || Yk() || Xk() || Wk() || Uk("Silk");
  Yk();
  !Uk("Safari") ||
    Yk() ||
    (Vk() ? 0 : Uk("Coast")) ||
    Wk() ||
    (Vk() ? 0 : Uk("Edge")) ||
    (Vk() ? Tk("Microsoft Edge") : Uk("Edg/")) ||
    (Vk() ? Tk("Opera") : Uk("OPR")) ||
    Xk() ||
    Uk("Silk") ||
    Uk("Android") ||
    al();
  var zt = {},
    At = null,
    Bt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!At) {
        At = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          zt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            At[q] === void 0 && (At[q] = p);
          }
        }
      }
      for (
        var r = zt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + D + E + C;
      }
      var F = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (M = r[(F & 15) << 2] || u);
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (F >> 4)] + M + u;
      }
      return t.join("");
    };
  var Ct = function () {};
  Object.freeze(new (function () {})());
  Object.freeze(new Ct());
  Object.freeze(new Ct());
  var Dt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Et(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Ft() {
    var a = G.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Gt() {
    var a, b;
    return (b = (a = G.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Ht(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function It() {
    var a = G;
    if (!Ht(a)) return null;
    var b = Et(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Dt)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Jt,
    Kt = function () {
      if (Ht(G) && ((Jt = Db()), !Gt())) {
        var a = It();
        a &&
          (a.then(function () {
            O(95);
          }),
          a.catch(function () {
            O(96);
          }));
      }
    },
    Mt = function (a) {
      var b = Lt.Tm,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = Ft();
      if (d) c(d);
      else {
        var e = Gt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = G.setTimeout(function () {
            c.Ee || ((c.Ee = !0), O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Ee || ((c.Ee = !0), O(104), G.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Ee || ((c.Ee = !0), O(105), G.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Nt = function (a, b) {
      a &&
        ((b.o[P.g.kf] = a.architecture),
        (b.o[P.g.lf] = a.bitness),
        a.fullVersionList &&
          (b.o[P.g.nf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.o[P.g.pf] = a.mobile ? "1" : "0"),
        (b.o[P.g.qf] = a.model),
        (b.o[P.g.rf] = a.platform),
        (b.o[P.g.tf] = a.platformVersion),
        (b.o[P.g.uf] = a.wow64 ? "1" : "0"));
    };
  function Ot(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  var Pt = !1;
  function Qt() {
    if (Ot("join-ad-interest-group") && qb(rc.joinAdInterestGroup)) return !0;
    Pt || (jl(""), (Pt = !0));
    return Ot("join-ad-interest-group") && qb(rc.joinAdInterestGroup);
  }
  function Rt(a, b) {
    var c = Si[3] === void 0 ? 1 : Si[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = H.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(H.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Si[2] === void 0 ? 50 : Si[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && Db() - p < (Si[1] === void 0 ? 6e4 : Si[1])
        ? (mb("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) St(e[0]);
        else {
          if (m) {
            mb("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? St(e[0]) : m && St(k[0]);
      Dc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: Db() }
      );
    }
  }
  function St(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Tt() {
    return "https://td.doubleclick.net";
  }
  var Ut = function () {
      return [P.g.R, P.g.P];
    },
    Vt = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c == -1 ? b : b.substring(0, c);
      }
      return "";
    },
    Wt = function () {
      var a = H.title;
      if (a == void 0 || a == "") return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    Xt = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Yt = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    },
    Zt = function (a) {
      var b = a.target.ma[rm[1]];
      if (b) {
        a.o[P.g.Vc] = b;
        var c = a.target.ma[rm[2]];
        c && (a.o[P.g.nb] = c);
      } else a.isAborted = !0;
    },
    $t = function (a) {
      if (
        Yt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.o[P.g.nb],
          c = W(a.m, P.g.Ue) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Xt(a);
            (T(93)
              ? rc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
                wc("Edg/") ||
                wc("EdgA/") ||
                wc("EdgiOS/")
              : rc.userAgent.toLowerCase().indexOf("firefox") !== -1) &&
              (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || Xt(a);
        }
        Yt(a, ["conversion", "remarketing"]) &&
          (a.o[P.g.Zi] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    au = function (a) {
      Yt(a, ["conversion", "remarketing"]);
    },
    bu = function (a) {
      if (!a.metadata.consent_updated && Yt(a, ["conversion", "remarketing"])) {
        var b = ll(!1);
        a.o[P.g.Gb] = b;
        var c = W(a.m, P.g.wa);
        c || (c = b === 1 ? G.top.location.href : G.location.href);
        a.o[P.g.wa] = Vt(c);
        a.copyToHitData(P.g.Da, H.referrer);
        a.o[P.g.Jb] = Wt();
        a.copyToHitData(P.g.Oa);
        var d = bs();
        a.o[P.g.Kb] = d.width + "x" + d.height;
        for (var e, f = G, g = f; f && f != f.parent; )
          (f = f.parent), hl(f) && (g = f);
        e = g;
        var k;
        var m = e.location.href;
        if (e === e.top) k = { url: m, Xl: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && m.indexOf(r) === -1 && ((n = !1), (m = r));
          }
          k = { url: m, Xl: n };
        }
        var t = k;
        t.url && c !== t.url && (a.o[P.g.hf] = Vt(t.url));
      }
    },
    cu = function (a) {
      Yt(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(P.g.Aa),
        a.copyToHitData(P.g.na),
        a.copyToHitData(P.g.za));
    },
    du = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (Yt(a, b) && X(P.g.P)) {
        a.copyToHitData(P.g.Ba);
        var c = no(io.Lg);
        if (c === void 0) mo(io.Mg, !0);
        else {
          var d = no(io.ke);
          a.o[P.g.ff] = d + "." + c;
        }
      }
    },
    eu = function (a) {
      if (!Ht(G)) O(87);
      else if (Jt !== void 0) {
        O(85);
        var b = Ft();
        b ? Nt(b, a) : O(86);
      }
    },
    hu = function (a) {
      Yt(a, ["conversion"]) &&
        X(P.g.P) &&
        (G._gtmpcm === !0 || as()
          ? (a.o[P.g.Ub] = "2")
          : T(27) &&
            (fu || Ot("attribution-reporting") || (jl(""), (fu = !0)),
            gu ||
              ((gu = !0),
              jl(
                "A4oIpR6f5aUXFRMbL6t6qaMk4lrHWxcV3DcrzORsA9sEsIk1FBRMFzzhfMNLuUpokZH40FV8s7iiXtt/729v8A4AAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcxNDUyMTU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d"
              )),
            Ot("attribution-reporting") && (a.o[P.g.Ub] = "1")));
    },
    iu = function (a) {
      if (Yt(a, ["conversion", "remarketing"]) && T(23)) {
        var b = function (c) {
          return T(25) ? (mb("fdr", c), !0) : !1;
        };
        if (X(P.g.R) || b(0))
          if (X(P.g.P) || b(1))
            if (W(a.m, P.g.Ca) !== !1 || b(2))
              if (Tn(a.m) || b(3))
                if (W(a.m, P.g.Tb) !== !1 || b(4))
                  if (
                    (T(26)
                      ? a.eventName === P.g.ba
                        ? W(a.m, P.g.Ja)
                        : void 0
                      : W(a.m, P.g.Ja)) !== !1 ||
                    b(5)
                  )
                    if (Qt() || b(6))
                      T(25) && ob()
                        ? ((a.o[P.g.Ci] = nb("fdr")), delete lb.fdr)
                        : ((a.o[P.g.gg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    ju = function (a) {
      a.metadata.conversion_linker_enabled = W(a.m, P.g.ra) !== !1;
      a.metadata.cookie_options = rr(a);
      a.metadata.redact_ads_data =
        W(a.m, P.g.fa) != null && W(a.m, P.g.fa) !== !1;
      a.metadata.allow_ad_personalization = Tn(a.m);
    },
    ku = function (a) {
      if (Wq(a, "ccd_add_1p_data", !1) && X(Ut())) {
        var b = a.m.D[P.g.ce];
        if (Pi(b)) {
          var c = W(a.m, P.g.Ea);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Xa(c) && (a.metadata.user_data_from_code = c),
              Xa(b.selectors) &&
                (a.metadata.user_data_from_manual = Oi(b.selectors)));
        }
      }
    },
    lu = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Yt(a, ["conversion", "user_data_web"]),
        c = !Wq(a, "ccd_add_1p_data", !1) && Yt(a, "user_data_lead");
      if ((b || c) && X(P.g.R)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = W(e, P.g.Ea);
        if (d) {
          var k = (W(e, P.g.Qd) || {})[String(a.o[P.g.nb])];
          if (W(e, P.g.Gd) === !0 || k) {
            var m;
            var n;
            if (k)
              b: {
                switch (k.enhanced_conversions_mode) {
                  case "manual":
                    if (g && Xa(g)) {
                      n = g;
                      break b;
                    }
                    var p = k.enhanced_conversions_manual_var;
                    n = p !== void 0 ? p : G.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = Oi(k[P.g.fg]);
                    break b;
                }
                n = void 0;
              }
            else n = G.enhanced_conversion_data;
            var q = n,
              r = (k || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if (r === "manual")
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = r === "automatic" ? (Dr(k) ? "a" : "m") : "c";
              m = { X: q, dk: t };
            } else m = { X: q, dk: void 0 };
            var u = m,
              v = u.dk;
            f = u.X;
            a.o[P.g.md] = v;
          }
        } else if (a.m.isGtmEvent) {
          Xt(a);
          a.metadata.user_data = g;
          a.o[P.g.md] = Cr(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    mu = function (a) {
      Yt(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.o[P.g.xc] = a.eventName)
          : (a.o[P.g.xc] = a.eventName),
        z(a.m.j, function (b, c) {
          ei[b.split(".")[0]] || (a.o[b] = c);
        }));
    },
    nu = function (a) {
      if (
        a.eventName === P.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Yt(a, "conversion") && (a.metadata.speculative = !0),
        !Yt(a, "remarketing") ||
          (W(a.m, P.g.Tb) !== !1 && W(a.m, P.g.Ja) !== !1) ||
          (a.metadata.speculative = !0),
        Yt(a, "landing_page"))
      ) {
        var b = W(a.m, P.g.sa) || {},
          c = W(a.m, P.g.Xa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            rd: d,
            wd: b,
            Cd: c,
            xa: a.metadata.source_canonical_id,
            m: a.m,
            xd: e,
            ek: W(a.m, P.g.Ba),
          },
          g = a.metadata.cookie_options;
        ur(f, g);
        Ur(a.target, a.m);
        Hr({
          Ug: !1,
          xd: e,
          targetId: a.target.id,
          m: a.m,
          jc: d ? g : void 0,
          Ef: d,
          Bj: a.o[P.g.Yd],
          jh: a.o[P.g.rb],
          ah: a.o[P.g.ob],
          mh: a.o[P.g.Gb],
        });
        a.isAborted = !0;
      }
    },
    ou = function (a) {
      if (
        !Wq(a, "hasPreAutoPiiCcdRule", !1) &&
        Yt(a, "conversion") &&
        X(P.g.R)
      ) {
        var b = (W(a.m, P.g.Qd) || {})[String(a.o[P.g.nb])],
          c = a.o[P.g.Vc],
          d;
        if (!(d = Dr(b)))
          if (Fl())
            if (zs) d = !0;
            else {
              var e = Uq("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = Db(),
            g = Vs({ ud: !0, vd: !0, Lf: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + Ws(n) + "*" + n.type);
            }
            a.o[P.g.Dg] = k.join("~");
            var p = g.Eh;
            p && ((a.o[P.g.Eg] = p.querySelector), (a.o[P.g.Cg] = Ws(p)));
            a.o[P.g.Bg] = String(Db() - f);
            a.o[P.g.Fg] = g.status;
          }
        }
      }
    },
    pu = function (a) {
      if (a.eventName === P.g.Ta && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Yt(a, "conversion")) {
          var b = W(a.m, P.g.Fb);
          if (typeof b !== "function") return;
          var c = String(W(a.m, P.g.qb)),
            d = a.o[c],
            e = W(a.m, c);
          c === P.g.Ua || c === P.g.Db
            ? xr(
                { fk: c, callback: b, Jj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Oq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    qu = function (a) {
      if (Yt(a, "conversion") && X(P.g.R) && (a.o[P.g.jb] || a.o[P.g.zc])) {
        var b = a.o[P.g.nb],
          c = h(a.metadata.cookie_options),
          d = Zp(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.o[P.g.jb]) {
          var e = pr(b, c, T(60) && !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.o[P.g.Gg] = e);
        }
        if (a.o[P.g.zc]) {
          var f = hr(b, c).xl;
          f && (a.o[P.g.lg] = f);
        }
      }
    },
    ru = function (a) {
      var b = T(8),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = Mm(c, P.g.la);
        d = Nb(Xa(g) ? g : {});
      }
      var k = Mm(c, P.g.la, 1),
        m = Mm(c, P.g.la, 2);
      e = Nb(Xa(k) ? k : {}, ".");
      f = Nb(Xa(m) ? m : {}, ".");
      b || (a.o[P.g.Yd] = d);
      a.o[P.g.rb] = e;
      a.o[P.g.ob] = f;
    },
    su = function (a) {
      if (Yt(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== P.g.Ia) ||
          (a.copyToHitData(P.g.da),
          b &&
            (a.copyToHitData(P.g.Kd),
            a.copyToHitData(P.g.Id),
            a.copyToHitData(P.g.Jd),
            a.copyToHitData(P.g.Hd),
            (a.o[P.g.Xf] = a.eventName)));
      }
    },
    tu = function (a) {
      if (
        Yt(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Yt(a, ["conversion", "remarketing"])) {
          var c = W(b, P.g.Xb);
          if (c === !0 || c === !1) a.o[P.g.Xb] = c;
        }
        Tn(b)
          ? (a.o[P.g.Nb] = !1)
          : ((a.o[P.g.Nb] = !0), Yt(a, "remarketing") && (a.isAborted = !0));
      }
    },
    uu = function (a) {
      Yt(a, "conversion") &&
        (a.copyToHitData(P.g.fd),
        a.copyToHitData(P.g.Ld),
        a.copyToHitData(P.g.ld),
        a.copyToHitData(P.g.Rd),
        a.copyToHitData(P.g.wc),
        a.copyToHitData(P.g.Zc));
    },
    vu = function (a) {
      Xr(a);
    },
    wu = function (a) {
      if (Yt(a, ["conversion", "remarketing"]) && G.__gsaExp && G.__gsaExp.id) {
        var b = G.__gsaExp.id;
        if (qb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.o[P.g.qg] = c);
          } catch (d) {}
      }
    },
    xu = function (a) {
      if (Yt(a, ["conversion", "remarketing"])) {
        var b = qr();
        b !== void 0 && (a.o[P.g.de] = b || "error");
        var c = Ln();
        c && (a.o[P.g.Ac] = c);
        var d = Jn();
        d && (a.o[P.g.Dc] = d);
      }
    },
    yu = function (a) {
      Yt(a, ["conversion"]) && bp(!1)._up === "1" && (a.o[P.g.Xd] = !0);
    },
    zu = function (a) {
      Yt(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !X(Ut()));
    },
    Au = function (a) {
      if (
        Yt(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        X(P.g.R) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = Zp(b.prefix);
        c === "_gcl" && (c = "");
        var d = jr(c);
        a.o[P.g.li] = d.hh;
        a.o[P.g.mi] = d.ih;
        var e = T(60);
        if (or(c, e)) {
          var f = e ? nr(c) : mr(c);
          f && (a.o[P.g.jb] = f);
          if (!c) {
            var g = a.o[P.g.nb];
            b = h(b);
            b.prefix = c;
            var k = hr(g, b, !0).wl;
            k && (a.o[P.g.zc] = k);
          }
        } else {
          var m = lr(c);
          m && (a.o[P.g.Ua] = m);
          if (!c) {
            var n = gr(Tp(Sp()) ? Ap() : {}, er);
            n && (a.o[P.g.Vd] = n);
          }
        }
      }
    },
    Bu = function (a) {
      if (
        Yt(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        X(P.g.R)
      ) {
        var b = !T(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          pp(c, a.metadata.hit_type === "conversion" && a.eventName !== P.g.Ta);
          X(P.g.P) && (a.o[P.g.Db] = np[qp(c.prefix)]);
        }
      }
    },
    Cu = function (a) {
      lj() || nj(a.m) || (T(77) && rt(void 0, Math.round(Db())));
    },
    Du = function () {},
    Eu = function (a) {
      if (Yt(a, ["conversion"])) {
        var b = $r(a.metadata.cookie_options);
        if (b && !a.o[P.g.Aa]) {
          var c = Jo(a.o[P.g.nb]);
          a.o[P.g.Aa] = c;
        }
        b && ((a.o[P.g.tb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Fu = function (a) {
      var b = X(Ut());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.o[P.g.Qb] = !0);
      }
    },
    Gu = function (a) {
      Yt(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.o[P.g.aj] = !0);
    },
    Hu = function (a) {
      if (!a.metadata.consent_updated && T(21) && Yt(a, ["conversion"])) {
        var b = ar();
        $q(b) && ((a.o[P.g.ed] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Iu = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Xt(a);
            break;
          case "user_data_lead":
            b = 98;
            Xt(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && O(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Ju = function (a) {
      T(18) &&
      a.eventName === P.g.ba &&
      Yt(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? Ur(a.target, a.m)
        : Yt(a, "call_conversion") && (Ur(a.target, a.m), (a.isAborted = !0));
    },
    fu = !1,
    gu = !1;
  var Lu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      z(a.o, function (f, g) {
        var k = Ku[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== P.g.Fd && f !== P.g.Md && f !== P.g.Re && f !== P.g.Wf) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", ho({ xa: a.metadata.source_canonical_id }));
      Un() && d("gcs", Vn());
      d("gcd", Zn(a.m));
      bo() && d("dma_cps", $n());
      d("dma", ao());
      wn(En()) && d("tcfd", co());
      Ai.j && d("tag_exp", Ai.j);
      if (a.metadata.add_tag_timing) {
        d("tft", Db());
        var e = Qc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      T(17) && d("apve", T(18) ? "1" : "0");
      b(c);
    },
    Mu = function (a) {
      Lu(a, function (b) {
        var c = [];
        z(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          a.metadata.hit_type === "page_view"
            ? oj(
                X([P.g.R, P.g.P])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) + "/ccm/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Lc(e);
        if (qb(a.m.onSuccess)) a.m.onSuccess();
      });
    },
    Nu = {},
    Ku =
      ((Nu[P.g.Qb] = "gcu"),
      (Nu[P.g.jb] = "gclgb"),
      (Nu[P.g.Ua] = "gclaw"),
      (Nu[P.g.ni] = "gad_source"),
      (Nu[P.g.Fd] = "gclid"),
      (Nu[P.g.oi] = "gclsrc"),
      (Nu[P.g.Wf] = "gbraid"),
      (Nu[P.g.Re] = "wbraid"),
      (Nu[P.g.Db] = "auid"),
      (Nu[P.g.si] = "rnd"),
      (Nu[P.g.wi] = "ncl"),
      (Nu[P.g.Zf] = "gcldc"),
      (Nu[P.g.Md] = "dclid"),
      (Nu[P.g.ob] = "edid"),
      (Nu[P.g.xc] = "en"),
      (Nu[P.g.Ac] = "gdpr"),
      (Nu[P.g.rb] = "gdid"),
      (Nu[P.g.Bc] = "_ng"),
      (Nu[P.g.Ji] = "gtm_up"),
      (Nu[P.g.Gb] = "frm"),
      (Nu[P.g.ed] = "lps"),
      (Nu[P.g.Yd] = "did"),
      (Nu[P.g.wa] = "dl"),
      (Nu[P.g.Da] = "dr"),
      (Nu[P.g.ff] = "ga_uid"),
      (Nu[P.g.Dc] = "gdpr_consent"),
      (Nu[P.g.Ba] = "uid"),
      (Nu[P.g.de] = "us_privacy"),
      (Nu[P.g.Nb] = "npa"),
      Nu);
  var Ou = {
    M: {
      Qh: "ads_conversion_hit",
      Dd: "container_execute_start",
      Th: "container_setup_end",
      Pf: "container_setup_start",
      Rh: "container_blocking_end",
      Sh: "container_execute_end",
      Uh: "container_yield_end",
      Qf: "container_yield_start",
      Ti: "event_execute_end",
      Si: "event_evaluation_end",
      Hg: "event_evaluation_start",
      Ui: "event_setup_end",
      ee: "event_setup_start",
      Wi: "ga4_conversion_hit",
      he: "page_load",
      tn: "pageview",
      hc: "snippet_load",
      rj: "tag_callback_error",
      sj: "tag_callback_failure",
      tj: "tag_callback_success",
      uj: "tag_execute_end",
      od: "tag_execute_start",
    },
  };
  function Pu() {
    function a(c, d) {
      var e = nb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Qu = !1;
  var yv = function (a, b) {},
    zv = function (a, b) {},
    Av = function (a, b) {},
    Bv = function (a, b) {},
    Cv = function () {
      var a = {};
      return a;
    },
    pv = function (a) {
      a = a === void 0 ? !0 : a;
      var b = {};
      return b;
    },
    Dv = function () {},
    Ev = function (a, b) {},
    Fv = function (a, b, c) {},
    Gv = function () {};
  function Hv(a, b) {
    var c = G,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  var Iv = function (a, b, c) {
    var d = el(a, "fmt");
    if (b) {
      var e = el(a, "random"),
        f = el(a, "label") || "";
      if (!e) return !1;
      var g = Bt(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Hv(g, b)) return !1;
    }
    d && d != 4 && (a = gl(a, "rfmt", d));
    var k = gl(a, "fmt", 4);
    Bc(
      k,
      function () {
        G.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((G.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Jv = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Lv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Kv(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Mv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: Kv(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Kv = function (a) {
      a.id != null &&
        a.item_id != null &&
        (O(138), a.id !== a.item_id && O(148));
      var b = a.id;
      T(16) &&
        (a.item_id != null ? (b = a.item_id) : b == null && (b = a.item_name));
      return b;
    },
    Ov = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(Nv(d.value)),
          e.push(Nv(d.quantity)),
          e.push(Nv(d.item_id)),
          e.push(Nv(d.start_date)),
          e.push(Nv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return b.length > 0 ? b.join("") : "";
    },
    Nv = function (a) {
      return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
    },
    Qv = function (a, b) {
      var c = Pv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Pv = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      z(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Rv(d[k]);
            m != void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Rv(d);
        e = f;
        var n = Rv(c);
        n && e != void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Rv = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Sv = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = dg[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing") ||
        d("random", a.metadata.event_start_timestamp_ms);
      z(b, d);
      return c.join("&");
    },
    Tv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.o[P.g.Vc],
        e = X([P.g.R, P.g.P]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = fo() ? 2 : 3,
        p = 0,
        q = function (y) {
          f.push(y);
          y.Ha && p++;
        },
        r = void 0;
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var t = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (r = 8))
              : ((g = "https://www.googleadservices.com"), (r = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (r = 6));
          a.metadata.is_gcp_conversion &&
            (t = "&gcp=1&sscte=1&ct_cookie_present=1");
          var u = {
            Ka: "" + oj(g, !0) + m + "/" + d + "/?" + Sv(a, b) + t,
            format: n,
            Ha: !0,
            endpoint: r,
          };
          X(P.g.P) && (u.attributes = { attributionsrc: "" });
          q(u);
          a.metadata.send_ccm_parallel_ping &&
            ((r = a.metadata.is_gcp_conversion ? 23 : 22),
            q({
              Ka: "" + oj(g, !0) + "/ccm/conversion/" + d + "/?" + Sv(a, b) + t,
              format: 2,
              Ha: !0,
              endpoint: r,
            }));
          a.metadata.is_gcp_conversion &&
            e &&
            ((t = "&gcp=1&ct_cookie_present=1"),
            q({
              Ka:
                "" +
                oj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Sv(a, b) +
                t,
              format: n,
              Ha: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var v = b.data || "",
            w = Jv(Lv(a.o[P.g.da]));
          if (w.length) {
            for (var x = 0; x < w.length; x++)
              (b.data = Qv(v, w[x])),
                q({
                  Ka:
                    "" +
                    oj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Sv(a, b),
                  format: n,
                  Ha: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    Ka: "" + Tt() + "/td/rul/" + d + "?" + Sv(a, b),
                    format: 4,
                    Ha: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              Ka:
                "" +
                oj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Sv(a, b),
              format: n,
              Ha: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          q({
            Ka:
              "" +
              oj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Sv(a, b),
            format: 1,
            Ha: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          q({
            Ka:
              "" +
              oj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Sv(a, b),
            format: 1,
            Ha: !0,
            endpoint: 21,
          });
      }
      f.length > 1 && qb(a.m.onSuccess) && (k = Ob(a.m.onSuccess, p));
      fo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (T(24) && c === "conversion" && (b.ct_cookie_present = 0),
        q({
          Ka: "" + Tt() + "/td/rul/" + d + "?" + Sv(a, b),
          format: 4,
          Ha: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, Ol: f };
    },
    Uv = function (a, b, c, d, e, f, g) {
      zv(c.m.eventId, c.eventName);
      var k = function () {
        e && e();
      };
      switch (b) {
        case 1:
          Lc(a);
          e && e();
          break;
        case 2:
          Ec(a, k, void 0, f);
          break;
        case 3:
          var m = !1;
          try {
            m = Iv(a, k, f);
          } catch (q) {
            m = !1;
          }
          m || Uv(a, 2, c, d, k, f, g);
          break;
        case 4:
          var n = "AW-" + c.o[P.g.Vc],
            p = c.o[P.g.nb];
          p && (n = n + "/" + p);
          Rt(a, n);
      }
    },
    Vv = function (a) {
      switch (a) {
        case "conversion":
          return T(46);
        case "user_data_lead":
          return T(47);
        case "user_data_web":
          return T(48);
      }
      return !1;
    },
    Wv = {},
    Xv =
      ((Wv[P.g.Qb] = "gcu"),
      (Wv[P.g.jb] = "gclgb"),
      (Wv[P.g.Ua] = "gclaw"),
      (Wv[P.g.li] = "gclgs"),
      (Wv[P.g.mi] = "gclst"),
      (Wv[P.g.Db] = "auid"),
      (Wv[P.g.Hd] = "dscnt"),
      (Wv[P.g.Id] = "fcntr"),
      (Wv[P.g.Jd] = "flng"),
      (Wv[P.g.Kd] = "mid"),
      (Wv[P.g.Xf] = "bttype"),
      (Wv[P.g.nb] = "label"),
      (Wv[P.g.Ub] = "capi"),
      (Wv[P.g.Ve] = "pscdl"),
      (Wv[P.g.za] = "currency_code"),
      (Wv[P.g.Ld] = "vdltv"),
      (Wv[P.g.xi] = "_dbg"),
      (Wv[P.g.Rd] = "oedeld"),
      (Wv[P.g.ob] = "edid"),
      (Wv[P.g.Ci] = "fdr"),
      (Wv[P.g.gg] = "fledge"),
      (Wv[P.g.Vd] = "gac"),
      (Wv[P.g.zc] = "gacgb"),
      (Wv[P.g.lg] = "gacmcov"),
      (Wv[P.g.Ac] = "gdpr"),
      (Wv[P.g.rb] = "gdid"),
      (Wv[P.g.Bc] = "_ng"),
      (Wv[P.g.qg] = "gsaexp"),
      (Wv[P.g.Gb] = "frm"),
      (Wv[P.g.Xd] = "gtm_up"),
      (Wv[P.g.ed] = "lps"),
      (Wv[P.g.Yd] = "did"),
      (Wv[P.g.fd] = void 0),
      (Wv[P.g.Jb] = "tiba"),
      (Wv[P.g.Xb] = "rdp"),
      (Wv[P.g.tb] = "ecsid"),
      (Wv[P.g.ff] = "ga_uid"),
      (Wv[P.g.ld] = "delopc"),
      (Wv[P.g.Dc] = "gdpr_consent"),
      (Wv[P.g.Aa] = "oid"),
      (Wv[P.g.kf] = "uaa"),
      (Wv[P.g.lf] = "uab"),
      (Wv[P.g.nf] = "uafvl"),
      (Wv[P.g.pf] = "uamb"),
      (Wv[P.g.qf] = "uam"),
      (Wv[P.g.rf] = "uap"),
      (Wv[P.g.tf] = "uapv"),
      (Wv[P.g.uf] = "uaw"),
      (Wv[P.g.Bg] = "ec_lat"),
      (Wv[P.g.Cg] = "ec_meta"),
      (Wv[P.g.Dg] = "ec_m"),
      (Wv[P.g.Eg] = "ec_sel"),
      (Wv[P.g.Fg] = "ec_s"),
      (Wv[P.g.md] = "ec_mode"),
      (Wv[P.g.Ba] = "userId"),
      (Wv[P.g.de] = "us_privacy"),
      (Wv[P.g.na] = "value"),
      (Wv[P.g.Gg] = "mcov"),
      (Wv[P.g.Zi] = "hn"),
      (Wv[P.g.aj] = "gtm_ee"),
      (Wv[P.g.Nb] = "npa"),
      (Wv[P.g.Vc] = null),
      (Wv[P.g.Kb] = null),
      (Wv[P.g.Oa] = null),
      (Wv[P.g.da] = null),
      (Wv[P.g.wa] = null),
      (Wv[P.g.Da] = null),
      (Wv[P.g.hf] = null),
      Wv),
    Zv = function (a) {
      a.metadata.hit_type === "page_view"
        ? Mu(a)
        : Yv(a, function (b, c) {
            for (
              var d = Tv(a, b), e = d.onSuccess, f = d.Ol, g = {}, k = 0;
              k < f.length;
              g = {
                Ka: void 0,
                fh: void 0,
                Ha: void 0,
                Og: void 0,
                Zg: void 0,
              },
                k++
            ) {
              var m = f[k];
              g.Ka = m.Ka;
              g.fh = m.format;
              g.Ha = m.Ha;
              g.Og = m.attributes;
              g.Zg = m.endpoint;
              var n = void 0;
              if ((n = c) != null && n.Jm) {
                var p = (function (u) {
                    return function (v) {
                      Lh(c.hm, function (w) {
                        var x = Bh(w),
                          y = u.Ka;
                        if (v) {
                          var B = ho({
                            xa: a.metadata.source_canonical_id,
                            Xj: v,
                          });
                          y = y.replace(b.gtm, B);
                        }
                        Uv(
                          y + "&em=" + encodeURIComponent(x.Lj),
                          u.fh,
                          a,
                          b,
                          u.Ha ? e : void 0,
                          u.Og,
                          u.Zg
                        );
                      });
                    };
                  })(g),
                  q = c,
                  r = q.Mh,
                  t = "" + g.Ka + q.Om.join("");
                tt(t, r, g.Ha && e ? e : function () {}, p);
              } else Uv(g.Ka, g.fh, a, b, g.Ha ? e : void 0, g.Og, g.Zg);
            }
          });
    },
    Yv = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        k = a.metadata.event_start_timestamp_ms;
      if (c === "conversion" || c === "remarketing")
        (d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = wq(["aw", "dc"]);
      m != null && (d.gad_source = m);
      d.gtm = ho({ xa: a.metadata.source_canonical_id });
      c !== "remarketing" && Un() && (d.gcs = Vn());
      d.gcd = Zn(a.m);
      bo() && (d.dma_cps = $n());
      d.dma = ao();
      wn(En()) && (d.tcfd = co());
      Ai.j && (d.tag_exp = Ai.j);
      if (a.o[P.g.Kb]) {
        var n = a.o[P.g.Kb].split("x");
        n.length === 2 && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.o[P.g.Oa]) {
        var p = a.o[P.g.Oa];
        p.length === 2
          ? (d.hl = p)
          : p.length === 5 &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (F, M) {
          var L = a.o[M];
          L && (d[F] = q ? hj(L) : L);
        };
      r("url", P.g.wa);
      r("ref", P.g.Da);
      r("top", P.g.hf);
      z(a.o, function (F, M) {
        if (Xv.hasOwnProperty(F)) {
          var L = Xv[F];
          L && (d[L] = M);
        } else e[F] = M;
      });
      var t = a.o[P.g.fd];
      t != void 0 && t !== "" && (d.vdnc = String(t));
      var u = a.o[P.g.Zc];
      u !== void 0 && (d.shf = u);
      var v = a.o[P.g.wc];
      v !== void 0 && (d.delc = v);
      if (T(21) && a.metadata.add_tag_timing) {
        d.tft = Db();
        var w = Qc();
        w !== void 0 && (d.tfd = Math.round(w));
      }
      d.data = Pv(e);
      var x = a.o[P.g.da];
      x && c === "conversion" && ((d.iedeld = Er(x)), (d.item = Ov(Mv(x))));
      if (
        (c === "conversion" ||
          c === "user_data_lead" ||
          c === "user_data_web") &&
        a.metadata.user_data
      )
        if (!X(P.g.P) || (T(15) && !X(P.g.R))) d.ec_mode = void 0;
        else {
          var y = function () {
            if (c === "user_data_web") {
              var F;
              var M = a.metadata.cookie_options;
              M = M || {};
              var L;
              if (X(Zr)) {
                (L = $r(M)) || (L = Jo());
                var R = M,
                  V = qp(R.prefix);
                sp(R, L);
                delete np[V];
                delete op[V];
                rp(V, R.path, R.domain);
                F = $r(M);
              } else F = void 0;
              d.ecsid = F;
            }
          };
          if (c !== "conversion" && T(77)) {
            d.gtm = ho({ xa: a.metadata.source_canonical_id, Xj: 3 });
            var B = Kh(a.metadata.user_data),
              A = yh(B),
              D = A.Wm;
            f = { Jm: !0, Mh: A.Mh, Om: ["&em=" + A.Nm], hm: B };
            D > 0 && y();
          } else {
            var E = Ah(a.metadata.user_data);
            if (E) {
              var C = E.then(function (F) {
                d.em = F.Kj;
                F.Jf > 0 && y();
                T(67) && Vv(c) && ((d._is_ee = 0), (d._es = 0));
                return F;
              });
              g.push(C);
            }
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (F) {}
      b(d, f);
    };
  function $v(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function aw(a, b, c) {
    c = c === void 0 ? !1 : c;
    bw().addRestriction(0, a, b, c);
  }
  function cw(a, b, c) {
    c = c === void 0 ? !1 : c;
    bw().addRestriction(1, a, b, c);
  }
  function dw() {
    var a = Jj();
    return bw().getRestrictions(1, a);
  }
  var ew = function () {
      this.j = {};
      this.D = {};
    },
    fw = function (a, b) {
      var c = a.j[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.j[b] = c));
      return c;
    };
  ew.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.D[b]) {
      var e = fw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  ew.prototype.getRestrictions = function (a, b) {
    var c = fw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        qa(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        qa(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        qa(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        qa(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  ew.prototype.getExternalRestrictions = function (a, b) {
    var c = fw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  ew.prototype.removeExternalRestrictions = function (a) {
    var b = fw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function bw() {
    var a = ii.r;
    a || ((a = new ew()), (ii.r = a));
    return a;
  }
  var gw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    hw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    iw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    jw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function kw() {
    var a = Hi("gtm.allowlist") || Hi("gtm.whitelist");
    a && O(9);
    ni && (a = ["google", "gtagfl", "lcl", "zone"]);
    gw.test(G.location && G.location.hostname) &&
      (ni
        ? O(116)
        : (O(117),
          lw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Hb(Ab(a), hw),
      c = Hi("gtm.blocklist") || Hi("gtm.blacklist");
    c || ((c = Hi("tagTypeBlacklist")) && O(3));
    c ? O(8) : (c = []);
    gw.test(G.location && G.location.hostname) &&
      ((c = Ab(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    Ab(c).indexOf("google") >= 0 && O(2);
    var d = c && Hb(Ab(c), iw),
      e = {};
    return function (f) {
      var g = f && f[Ie.oa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = xi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    O(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = vb(d, k || []);
          t && O(10);
          q = t;
        }
      }
      var u = !m || q;
      u ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (u = vb(d, jw));
      return (e[g] = u);
    };
  }
  var lw = !1;
  lw = !0;
  function mw() {
    Bj &&
      aw(Jj(), function (a) {
        var b = sf(a.entityId),
          c;
        if (vf(b)) {
          var d = b[Ie.oa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = kf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!$v(b[Ie.oa], 4);
        return c;
      });
  }
  var ow = function (a, b, c, d, e) {
      if (!nw()) {
        var f = d.siloed ? Ej(a) : a;
        if (!Tj(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + hi.Ya,
            k = Ib(a, "GTM-");
          k || (g += "&cx=c");
          T(64) && (g += "&gtm=" + ho());
          var m = mj();
          m && (g += "&sign=" + hi.yf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = lj() ? kj(b, n + g) : void 0;
          if (!p) {
            var q = hi.Ed + n;
            m && uc && k
              ? ((q = uc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = Ir("https://", "http://", q + g)))
              : (p = Ai.D ? Bi() + n + g : Ir("https://", "http://", q + g));
          }
          d.siloed && Vj({ ctid: f, isDestination: !1 });
          var r = Mj();
          yj().container[f] = { state: 1, context: d, parent: r };
          xj({ ctid: f, isDestination: !1 }, e);
          Bc(p);
        }
      }
    },
    pw = function (a, b, c, d) {
      if (!nw()) {
        var e = c.siloed ? Ej(a) : a;
        if (!Uj(e))
          if (!c.siloed && Wj())
            (yj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: Mj(),
            }),
              xj({ ctid: e, isDestination: !0 }, d),
              O(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              hi.Ya +
              "&cx=c";
            T(64) && (f += "&gtm=" + ho());
            mj() && (f += "&sign=" + hi.yf);
            var g = lj() ? kj(b, f) : void 0;
            g || (g = Ai.D ? Bi() + f : Ir("https://", "http://", hi.Ed + f));
            c.siloed && Vj({ ctid: e, isDestination: !0 });
            yj().destination[e] = { state: 1, context: c, parent: Mj() };
            xj({ ctid: e, isDestination: !0 }, d);
            Bc(g);
          }
      }
    };
  function nw() {
    if (fo()) {
      return !0;
    }
    return !1;
  }
  var qw = !1,
    rw = 0,
    sw = [];
  function tw(a) {
    if (!qw) {
      var b = H.createEventObject,
        c = H.readyState === "complete",
        d = H.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        qw = !0;
        for (var e = 0; e < sw.length; e++) I(sw[e]);
      }
      sw.push = function () {
        for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0;
      };
    }
  }
  function uw() {
    if (!qw && rw < 140) {
      rw++;
      try {
        var a, b;
        (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
        tw();
      } catch (c) {
        G.setTimeout(uw, 50);
      }
    }
  }
  function vw(a) {
    qw ? a() : sw.push(a);
  }
  function xw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Hj(),
    };
  }
  var zw = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.O = !1;
      this.D = this.H = 0;
      yw(this, a, b);
    },
    Aw = function (a, b, c, d) {
      if (ki.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Xa(d) && (e = h(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Bw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Cw = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    yw = function (a, b, c) {
      b !== void 0 && a.ne(b);
      c &&
        G.setTimeout(function () {
          Cw(a);
        }, Number(c));
    };
  zw.prototype.ne = function (a) {
    var b = this,
      c = Fb(function () {
        I(function () {
          a(Hj(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Dw = function (a) {
      a.H++;
      return Fb(function () {
        a.D++;
        a.O && a.D >= a.H && Cw(a);
      });
    },
    Ew = function (a) {
      a.O = !0;
      a.D >= a.H && Cw(a);
    };
  var Fw = {},
    Hw = function () {
      return G[Gw()];
    };
  var Iw = function (a) {
      G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
      var b = G.GoogleAnalyticsObject;
      if (G[b]) G.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Cb());
        G[b] = c;
      }
      return G[b];
    },
    Jw = function (a) {
      if (Vl()) {
        var b = Hw();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Gw() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var Kw = function () {
      var a = Hj();
    },
    Lw = function (a, b) {
      return function () {
        var c = Hw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = g.indexOf("&tid=" + b) < 0;
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Qw = ["es", "1"],
    Rw = {},
    Sw = {};
  function Tw(a, b) {
    if (vj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Rw[a] = [
        ["e", c],
        ["eid", a],
      ];
      ok(a);
    }
  }
  function Uw(a) {
    var b = a.eventId,
      c = a.Sa;
    if (!Rw[b]) return [];
    var d = [];
    Sw[b] || d.push(Qw);
    d.push.apply(d, qa(Rw[b]));
    c && (Sw[b] = !0);
    return d;
  }
  var Vw = {},
    Ww = {},
    Xw = {};
  function Yw(a, b, c, d) {
    vj &&
      T(74) &&
      ((d === void 0 ? 0 : d)
        ? ((Xw[b] = Xw[b] || 0), ++Xw[b])
        : c !== void 0
        ? ((Ww[a] = Ww[a] || {}), (Ww[a][b] = Math.round(c)))
        : ((Vw[a] = Vw[a] || {}), (Vw[a][b] = (Vw[a][b] || 0) + 1)));
  }
  function Zw(a) {
    var b = a.eventId,
      c = a.Sa,
      d = Vw[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Vw[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function $w(a) {
    var b = a.eventId,
      c = a.Sa,
      d = Ww[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Ww[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function ax() {
    for (
      var a = [], b = na(Object.keys(Xw)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Xw[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var bx = {},
    cx = {};
  function dx(a, b, c) {
    if (vj && b) {
      var d = pj(b);
      bx[a] = bx[a] || [];
      bx[a].push(c + d);
      var e = (vf(b) ? "1" : "2") + d;
      cx[a] = cx[a] || [];
      cx[a].push(e);
      ok(a);
    }
  }
  function ex(a) {
    var b = a.eventId,
      c = a.Sa,
      d = [],
      e = bx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = cx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete bx[b], delete cx[b]);
    return d;
  }
  function fx(a, b, c, d) {
    var e = hf[a],
      f = gx(a, b, c, d);
    if (!f) return null;
    var g = wf(e[Ie.pj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = fx(
        k.index,
        {
          onSuccess: f,
          onFailure: k.Dj === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function gx(a, b, c, d) {
    function e() {
      if (f[Ie.Kk]) k();
      else {
        var w = uf(f, c, []),
          x = w[Ie.kk];
        if (x != null)
          for (var y = 0; y < x.length; y++)
            if (!X(x[y])) {
              k();
              return;
            }
        var B = Aw(c.ic, String(f[Ie.oa]), Number(f[Ie.me]), w[Ie.Lk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            dx(c.id, hf[a], "5");
            Bw(c.ic, B, "success", C);
            T(65) && Fv(c, f, Ou.M.tj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = Db() - E;
            dx(c.id, hf[a], "6");
            Bw(c.ic, B, "failure", C);
            T(65) && Fv(c, f, Ou.M.sj);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        dx(c.id, f, "1");
        var D = function () {
          yl(3);
          var C = Db() - E;
          dx(c.id, f, "7");
          Bw(c.ic, B, "exception", C);
          T(65) && Fv(c, f, Ou.M.rj);
          A || ((A = !0), k());
        };
        T(65) && Ev(c, f);
        var E = Db();
        try {
          xf(w, { event: c, index: a, type: 1 });
        } catch (C) {
          D(C);
        }
        T(65) && Fv(c, f, Ou.M.uj);
      }
    }
    var f = hf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = wf(f[Ie.vj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = fx(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.Dj === 2 ? m : q;
    }
    if (f[Ie.gj] || f[Ie.Nk]) {
      var r = f[Ie.gj] ? jf : c.Lm,
        t = g,
        u = k;
      if (!r[a]) {
        e = Fb(e);
        var v = hx(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function hx(a, b, c) {
    var d = [],
      e = [];
    b[a] = ix(d, e, c);
    return {
      onSuccess: function () {
        b[a] = jx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = kx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ix(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function jx(a) {
    a();
  }
  function kx(a, b) {
    b();
  }
  var nx = function (a, b) {
    for (var c = [], d = 0; d < hf.length; d++)
      if (a[d]) {
        var e = hf[d];
        var f = Dw(b.ic);
        try {
          var g = fx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Ie.oa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = kf[k];
            c.push({
              bk: d,
              Pj: (m ? m.priorityOverride || 0 : 0) || $v(e[Ie.oa], 1) || 0,
              execute: g,
            });
          } else lx(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(mx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function mx(a, b) {
    var c,
      d = b.Pj,
      e = a.Pj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.bk,
        k = b.bk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function lx(a, b) {
    if (vj) {
      var c = function (d) {
        var e = b.isBlocked(hf[d]) ? "3" : "4",
          f = wf(hf[d][Ie.pj], b, []);
        f && f.length && c(f[0].index);
        dx(b.id, hf[d], e);
        var g = wf(hf[d][Ie.vj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var qx = !1,
    ox;
  var wx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(65)) {
    }
    if (d === "gtm.js") {
      if (qx) return !1;
      qx = !0;
    }
    var e = !1,
      f = dw(),
      g = h(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Tw(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: sx(g, e),
        Lm: [],
        logMacroError: function () {
          O(6);
          yl(0);
        },
        cachedModelValues: tx(),
        ic: new zw(function () {
          if (T(65)) {
          }
          k && k.apply(k, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(74) && vj && (n.reportMacroDiscrepancy = Yw);
    T(65) && Av(n.id, n.name);
    var p = Ff(n);
    T(65) && Bv(n.id, n.name);
    e && (p = ux(p));
    if (T(65)) {
    }
    var q = nx(p, n),
      r = !1;
    Ew(n.ic);
    (d !== "gtm.js" && d !== "gtm.sync") || Kw();
    return vx(p, q) || r;
  };
  function tx() {
    var a = {};
    a.event = Mi("event", 1);
    a.ecommerce = Mi("ecommerce", 1);
    a.gtm = Mi("gtm");
    a.eventModel = Mi("eventModel");
    return a;
  }
  function sx(a, b) {
    var c = kw();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Ie.oa];
      if (!e || typeof e != "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Jj();
      f = bw().getRestrictions(0, g);
      var k = a;
      b && ((k = h(a)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = xi[e] || [], n = na(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function ux(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(hf[c][Ie.oa]);
        if (ji[d] || hf[c][Ie.Ok] !== void 0 || $v(d, 2)) b[c] = !0;
      }
    return b;
  }
  function vx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && hf[c] && !ki[String(hf[c][Ie.oa])]) return !0;
    return !1;
  }
  var xx = 0;
  function yx() {
    xx === 1 && nk();
  }
  var zx = function (a) {
    if (!a.Cj || xx !== 1) return [];
    a.mc();
    var b = rl();
    b.push(["mcc", "1"]);
    xx = 3;
    return b;
  };
  function Ax(a, b) {
    return arguments.length === 1 ? Bx("set", a) : Bx("set", a, b);
  }
  function Cx(a, b) {
    return arguments.length === 1 ? Bx("config", a) : Bx("config", a, b);
  }
  function Dx(a, b, c) {
    c = c || {};
    c[P.g.Yb] = a;
    return Bx("event", b, c);
  }
  function Bx() {
    return arguments;
  }
  var Ex = function () {
    this.messages = [];
    this.j = [];
  };
  Ex.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Ex.prototype.listen = function (a) {
    this.j.push(a);
  };
  Ex.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Ex.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Fx(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
    Gx().enqueue(a, b, c);
  }
  function Hx() {
    var a = Ix;
    Gx().listen(a);
  }
  function Gx() {
    var a = ii.mb;
    a || ((a = new Ex()), (ii.mb = a));
    return a;
  }
  var If;
  var Jx = {},
    Kx = {};
  function Lx(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Dh: void 0, kh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.Dh = om(g, b)), e.Dh)) {
          var k = Fj();
          tb(
            k,
            (function (r) {
              return function (t) {
                return r.Dh.ia === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Jx[g] || [];
        e.kh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.kh[t] = !0;
            };
          })(e)
        );
        for (var n = Cj(), p = 0; p < n.length; p++)
          if (e.kh[n[p]]) {
            c = c.concat(Fj());
            break;
          }
        var q = Kx[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { bm: c, gm: d };
  }
  function Mx(a) {
    z(Jx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Nx(a) {
    z(Kx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var Ox = "HA GF G UA AW DC MC".split(" "),
    Px = !1,
    Qx = !1,
    Rx = !1,
    Sx = !1;
  function Tx(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: yi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Ux = void 0,
    Vx = void 0;
  function Wx(a, b, c) {
    var d = h(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && O(136);
    var e = h(b);
    h(c, e);
    Fx(Cx(Cj()[0], e), a.eventId, d);
  }
  function Xx(a) {
    for (var b = na([P.g.jd, P.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || dn.D[d];
      if (e) return e;
    }
  }
  var Yx = [
      P.g.jd,
      P.g.Lb,
      P.g.yc,
      P.g.lb,
      P.g.tb,
      P.g.Ba,
      P.g.sa,
      P.g.Na,
      P.g.Va,
      P.g.Eb,
    ],
    Zx = {
      config: function (a, b) {
        var c = Tx(a, b);
        if (!(a.length < 2) && l(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] != void 0 && !Xa(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = om(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!Aj.fe) {
                var m = Lj(Mj());
                if (Yj(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { om: Lj(n), am: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.om), (g = q.am));
            Tw(c.eventId, "gtag.config");
            var r = e.ia,
              t = e.id !== r;
            if (t ? Fj().indexOf(r) === -1 : Cj().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Hb]) {
                var u = Xx(d);
                if (t)
                  pw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var v = d;
                  Ux ? Wx(b, v, Ux) : Vx || (Vx = h(v));
                } else
                  ow(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                Vx
                  ? (Wx(b, Vx, x), (w = !1))
                  : ((!x[P.g.Zb] && mi && Ux) || (Ux = h(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!Rx && ((Rx = !0), Qx))
                for (var B = na(Yx), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    wl("erc");
                    break;
                  }
              wj &&
                !Bj &&
                (xx === 1 && (T(43) ? (vk.mcc = !1) : Gc(G, "pagehide", yx)),
                (xx = 2));
              if (mi && !t && !d[P.g.Zb]) {
                var D = Sx;
                Sx = !0;
                if (D) return;
              }
              Px || O(43);
              if (!b.noTargetGroup)
                if (t) {
                  Nx(e.id);
                  var E = e.id,
                    C = d[P.g.Wd] || "default";
                  C = String(C).split(",");
                  for (var F = 0; F < C.length; F++) {
                    var M = Kx[C[F]] || [];
                    Kx[C[F]] = M;
                    M.indexOf(E) < 0 && M.push(E);
                  }
                } else {
                  Mx(e.id);
                  var L = e.id,
                    R = d[P.g.Wd] || "default";
                  R = R.toString().split(",");
                  for (var V = 0; V < R.length; V++) {
                    var ba = Jx[R[V]] || [];
                    Jx[R[V]] = ba;
                    ba.indexOf(L) < 0 && ba.push(L);
                  }
                }
              delete d[P.g.Wd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete d[P.g.bd];
              for (var Q = t ? [e.id] : Fj(), oa = 0; oa < Q.length; oa++) {
                var ma = d,
                  ia = Q[oa],
                  za = h(b),
                  Ma = om(ia, za.isGtmEvent);
                Ma && dn.push("config", [ma], Ma, za);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          O(39);
          var c = Tx(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[P.g.P] && O(139), e[P.g.ya] && O(140));
          d === "default"
            ? dm(e)
            : d === "update"
            ? em(e, c)
            : d === "declare" && b.fromContainerExecution && cm(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && l(c)) {
          var d;
          if (a.length > 2) {
            if ((!Xa(a[2]) && a[2] != void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = h(e)),
            e[P.g.bd] && (g.eventCallback = e[P.g.bd]),
            e[P.g.Td] && (g.eventTimeout = e[P.g.Td]));
          var k = Tx(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Yb];
          r === void 0 &&
            ((r = Hi(P.g.Yb, 2)), r === void 0 && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Lx(t, b.isGtmEvent),
              v = u.bm,
              w = u.gm;
            if (w.length)
              for (var x = Xx(q), y = 0; y < w.length; y++) {
                var B = om(w[y], b.isGtmEvent);
                B &&
                  pw(B.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = pm(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var D;
            !A.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (Qx = !0);
            Tw(m, c);
            for (var E = [], C = 0; C < A.length; C++) {
              var F = A[C],
                M = h(b);
              if (Ox.indexOf(Oj(F.prefix)) !== -1) {
                var L = h(d),
                  R = M.eventMetadata || {};
                R.hasOwnProperty("is_external_event") ||
                  (R.is_external_event = !M.fromContainerExecution);
                M.eventMetadata = R;
                delete L[P.g.bd];
                en(c, L, F.id, M);
                wj &&
                  !Bj &&
                  xx === 0 &&
                  (T(43) ? xk("mcc", "1") : Fc(G, "pagehide", yx), (xx = 1));
              }
              E.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            A.length > 0
              ? (g.eventModel[P.g.Yb] = E.join())
              : delete g.eventModel[P.g.Yb];
            Px || O(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.Wb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (a.length === 4 && l(a[1]) && l(a[2]) && qb(a[3])) {
          var c = om(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Px || O(43);
            var f = Xx();
            if (
              !tb(Fj(), function (k) {
                return c.ia === k;
              })
            )
              pw(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (Ox.indexOf(Oj(c.prefix)) !== -1) {
              Tx(a, b);
              var g = {};
              h(((g[P.g.qb] = d), (g[P.g.Fb] = e), g));
              fn(
                d,
                function (k) {
                  I(function () {
                    return e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length == 2 && a[1].getTime) {
          Px = !0;
          var c = Tx(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && l(a[1]) && qb(a[2])) {
          if ((Jf(a[1], a[2]), O(74), a[1] === "all")) {
            O(75);
            var b = !1;
            try {
              b = a[2](Hj(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else O(73);
      },
      set: function (a, b) {
        var c;
        a.length == 2 && Xa(a[1])
          ? (c = h(a[1]))
          : a.length == 3 &&
            l(a[1]) &&
            ((c = {}),
            Xa(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = h(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = Tx(a, b),
            e = d.eventId,
            f = d.priorityId;
          h(c);
          var g = h(c);
          dn.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    $x = { policy: !0 };
  var by = function (a) {
    if (ay(a)) return a;
    this.value = a;
  };
  by.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var ay = function (a) {
    return !a || Va(a) !== "object" || Xa(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  by.prototype.getUntrustedMessageValue = by.prototype.getUntrustedMessageValue;
  var cy = !1,
    dy = [];
  function ey() {
    if (!cy) {
      cy = !0;
      for (var a = 0; a < dy.length; a++) I(dy[a]);
    }
  }
  function fy(a) {
    cy ? I(a) : dy.push(a);
  }
  var gy = 0,
    hy = {},
    iy = [],
    jy = [],
    ky = !1,
    ly = !1;
  function my(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var ny = function (a) {
      return G[hi.Ya].push(a);
    },
    oy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return ny(a);
    },
    py = function (a, b) {
      if (!rb(b) || b < 0) b = 0;
      var c = ii[hi.Ya],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function qy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      e !== "_clear" && (c && Ki(e), Ki(e, f));
    });
    ui || (ui = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = yi()), (a["gtm.uniqueEventId"] = d), Ki("gtm.uniqueEventId", d));
    return wx(a);
  }
  function ry(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (xb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function sy() {
    var a;
    if (jy.length) a = jy.shift();
    else if (iy.length) a = iy.shift();
    else return;
    var b;
    var c = a;
    if (ky || !ry(c.message)) b = c;
    else {
      ky = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = yi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      iy.unshift(k, c);
      if (wj) {
        var m = Mf.ctid;
        if (m) {
          var n,
            p = Lj(Mj());
          n = p && p.context;
          var q = ll(!0),
            r = Mf.canonicalContainerId,
            t = ql(),
            u = n && n.fromContainerExecution,
            v = Aj.fe,
            w = n && n.source;
          ml || (ml = t);
          ol.push(
            m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0)
          );
          nl = q;
          Bk();
        }
      }
      b = f;
    }
    return b;
  }
  function ty() {
    for (var a = !1, b; !ly && (b = sy()); ) {
      ly = !0;
      delete Ei.eventModel;
      Gi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) ly = !1;
      else {
        e.fromContainerExecution && Li();
        try {
          if (qb(d))
            try {
              d.call(Ii);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Hi(g.join("."), 2);
              if (n != null)
                try {
                  n[k].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (xb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = Zx[d[0]];
                  if (q && (!e.fromContainerExecution || !$x[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = qy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Gi(!0);
          var r = d["gtm.uniqueEventId"];
          if (typeof r === "number") {
            for (var t = hy[String(r)] || [], u = 0; u < t.length; u++)
              jy.push(uy(t[u]));
            t.length && jy.sort(my);
            delete hy[String(r)];
            r > gy && (gy = r);
          }
          ly = !1;
        }
      }
    }
    return !a;
  }
  function vy() {
    if (T(65)) {
      var a = wy();
    }
    var b = ty();
    if (T(65)) {
    }
    try {
      var c = Hj(),
        d = G[hi.Ya].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Ix(a) {
    if (gy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      hy[b] = hy[b] || [];
      hy[b].push(a);
    } else
      jy.push(uy(a)),
        jy.sort(my),
        I(function () {
          ly || ty();
        });
  }
  function uy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var xy = function () {
      function a(f) {
        var g = {};
        if (ay(f)) {
          var k = f;
          f = ay(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = vc(hi.Ya, []),
        c = (ii[hi.Ya] = ii[hi.Ya] || {});
      c.pruned === !0 && O(83);
      hy = Gx().get();
      Hx();
      vw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      fy(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (ii.SANDBOXED_JS_SEMAPHORE > 0) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new by(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        iy.push.apply(iy, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = typeof m !== "boolean" || m;
        return ty() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      iy.push.apply(iy, e);
      if (wy()) {
        if (T(65)) {
        }
        I(vy);
      }
    },
    wy = function () {
      var a = !0;
      return a;
    };
  function yy(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = Db();
    return b < c + 3e5 && b > c - 9e5;
  }
  function zy(a) {
    return a && a.indexOf("pending:") === 0 ? yy(a.substr(8)) : !1;
  }
  var Ay = !1,
    By = function (a) {
      if (Ay) return [];
      var b = [["bt", String(Ai.H ? 2 : pi ? 1 : 0)]];
      a.Sa && ((Ay = !0), a.mc());
      return b;
    };
  var Cy = !1;
  function Dy() {
    var a = Kj();
    if (a) {
      var b;
      return (
        a.canonicalContainerId ||
        "_" +
          (a.scriptContainerId ||
            ((b = a.destinations) == null ? void 0 : b[0]))
      );
    }
  }
  var Ey = function (a) {
    if (Cy) return [];
    var b = [],
      c = Dy();
    c && b.push(["pcid", c]);
    a.Sa && ((Cy = !0), b.length && a.mc());
    return b;
  };
  var Fy = /gtag[.\/]js/,
    Gy = /gtm[.\/]js/,
    Hy = !1;
  function Iy(a) {
    if (a.scriptSource) {
      var b;
      try {
        var c;
        b = (c = Rc()) == null ? void 0 : c.getEntriesByType("resource");
      } catch (k) {}
      if (b) {
        for (var d = {}, e = 0; e < b.length; ++e) {
          var f = b[e],
            g = f.initiatorType;
          if (g === "script" && f.name === a.scriptSource)
            return { Uj: e, Vj: d };
          d[g] = 1 + (d[g] || 0);
        }
        O(146);
      } else O(145);
    }
  }
  function Jy(a) {
    if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
      var b;
      a: {
        if (a.scriptSource) {
          for (
            var c = Ai.H,
              d = U(a.scriptSource),
              e = c ? d.pathname : "" + d.hostname + d.pathname,
              f = H.scripts,
              g = "",
              k = 0;
            k < f.length;
            ++k
          ) {
            var m = f[k];
            if (
              !(
                m.innerHTML.length === 0 ||
                (!c &&
                  m.innerHTML.indexOf(
                    a.scriptContainerId || "SHOULD_NOT_BE_SET"
                  ) < 0) ||
                m.innerHTML.indexOf(e) < 0
              )
            ) {
              if (m.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                b = String(k);
                break a;
              }
              g = String(k);
            }
          }
          if (g) {
            b = g;
            break a;
          }
        }
        b = void 0;
      }
      var n = b;
      if (n) return (Hy = !0), n;
    }
    var p = [].slice.call(document.scripts);
    return a.scriptElement ? String(p.indexOf(a.scriptElement)) : "-1";
  }
  function Ky(a) {
    if (Hy) return "1";
    var b = a.scriptSource;
    if (b) {
      if (Fy.test(b)) return "3";
      if (Gy.test(b)) return "2";
    }
    return "0";
  }
  function Ly() {
    var a = Nj();
    if (!a) O(144);
    else if (a.canonicalContainerId) {
      var b = Iy(a);
      if (b)
        if (T(43))
          xk("rtg", String(a.canonicalContainerId)),
            xk("rlo", String(b.Uj)),
            xk("slo", String(b.Vj.script || "0")),
            T(69) && (xk("hlo", Jy(a)), xk("lst", String(Ky(a))));
        else {
          var c = !1;
          bk.push(function (d) {
            if (c) return [];
            d.Sa && (c = !0);
            d.mc();
            var e = [
              ["rtg", String(a.canonicalContainerId)],
              ["rlo", String(b.Uj)],
              ["slo", String(b.Vj.script || "0")],
            ];
            T(69) && (e.push(["hlo", Jy(a)]), e.push(["lst", Ky(a)]));
            return e;
          });
        }
    }
  }
  var fz = function () {};
  var gz = function () {};
  gz.prototype.toString = function () {
    return "undefined";
  };
  var hz = new gz();
  var jz = function () {
      (ii.rm = ii.rm || {})[Jj()] = function (a) {
        if (iz.hasOwnProperty(a)) return iz[a];
      };
    },
    mz = function (a, b, c) {
      if (a instanceof kz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(yi());
        lz[g] = [f, c];
        a = e.call(d, g);
        b = pb;
      }
      return { Fj: a, onSuccess: b };
    },
    nz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        O(a ? 134 : 135);
        var d = lz[c];
        if (d && typeof d[b] === "function") d[b]();
        lz[c] = void 0;
      };
    },
    kz = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === hz ? b : a[d]);
        return c.join("");
      };
    };
  kz.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var iz = {},
    lz = {};
  function oz(a, b) {
    function c(g) {
      var k = U(g),
        m = bj(k, "protocol"),
        n = bj(k, "host", !0),
        p = bj(k, "port"),
        q = bj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function pz(a) {
    return qz(a) ? 1 : 0;
  }
  function qz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = h(a, {});
        h({ arg1: c[d], any_of: void 0 }, e);
        if (pz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return og(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < kg.length; g++) {
                var k = kg[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return lg(b, c);
      case "_eq":
        return pg(b, c);
      case "_ge":
        return qg(b, c);
      case "_gt":
        return sg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return rg(b, c);
      case "_lt":
        return tg(b, c);
      case "_re":
        return ng(b, c, a.ignore_case);
      case "_sw":
        return ug(b, c);
      case "_um":
        return oz(b, c);
    }
    return !1;
  }
  function rz() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function sz() {
    var a = [
      ["cv", T(82) ? rz() : "29"],
      ["rv", hi.Kg],
      [
        "tc",
        hf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    hi.ie && a.push(["x", hi.ie]);
    Ai.j && a.push(["tag_exp", Ai.j]);
    return a;
  }
  function tz() {
    var a = Al();
    return a.length ? [["exp_geo", a]] : [];
  }
  var uz;
  function vz() {
    try {
      uz != null || (uz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return ((a = uz) == null ? 0 : a.length) ? [["exp_tz", uz]] : [];
  }
  function wz() {
    return !1;
  }
  function xz() {
    var a = {};
    return function (b, c, d) {};
  }
  function yz() {
    var a = zz;
    return function (b, c, d) {
      var e = d && d.event;
      Az(c);
      var f = Ib(b, "__cvt_") ? void 0 : 1,
        g = new cb();
      z(c, function (r, t) {
        var u = fd(t, void 0, f);
        u === void 0 && t !== void 0 && O(44);
        g.set(r, u);
      });
      a.j.j.D = Cf();
      var k = {
        zj: Qf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        ne:
          e !== void 0
            ? function (r) {
                e.ic.ne(r);
              }
            : void 0,
        wb: function () {
          return b;
        },
        log: function () {},
        tl: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        Cm: !!$v(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (wz()) {
        var m = xz(),
          n,
          p;
        k.Ra = {
          Nh: [],
          oe: {},
          xb: function (r, t, u) {
            t === 1 && (n = r);
            t === 7 && (p = u);
            m(r, t, u);
          },
          If: ch(),
        };
        k.log = function (r) {
          var t = Aa.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Ce(a, k, [b, g]);
      a.j.j.D = void 0;
      q instanceof Ha && q.type === "return" && (q = q.data);
      return J(q, void 0, f);
    };
  }
  function Az(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    qb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    qb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function Bz(a, b) {
    var c = this;
  }
  Bz.T = "addConsentListener";
  var Cz = !1;
  function Dz(a) {
    for (var b = 0; b < a.length; ++b)
      if (Cz)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  }
  function Ez(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Ez.J = "internal.addDataLayerEventListener";
  function Fz(a, b, c) {}
  Fz.T = "addDocumentEventListener";
  function Gz(a, b, c, d) {}
  Gz.T = "addElementEventListener";
  function Hz(a) {
    return a.F.j;
  }
  function Iz(a) {}
  Iz.T = "addEventCallback";
  function Yz(a) {}
  Yz.J = "internal.addFormAbandonmentListener";
  function Zz(a, b, c, d) {}
  Zz.J = "internal.addFormData";
  var $z = {},
    aA = [],
    bA = {},
    cA = 0,
    dA = 0;
  function kA(a, b) {}
  kA.J = "internal.addFormInteractionListener";
  function rA(a, b) {}
  rA.J = "internal.addFormSubmitListener";
  function wA(a) {}
  wA.J = "internal.addGaSendListener";
  function xA(a) {
    if (!a) return {};
    var b = a.tl;
    return xw(b.type, b.index, b.name);
  }
  function yA(a) {
    return a ? { originatingEntity: xA(a) } : {};
  }
  var AA = function (a, b, c) {
      zA().updateZone(a, b, c);
    },
    CA = function (a, b, c, d, e, f) {
      var g = zA();
      c = c && Hb(c, BA);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Hj(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (Ib(p, "GTM-"))
            ow(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = Bx("js", Cb());
            ow(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(88) || Fx(v, q, w);
            Fx(Cx(p, r), q, w);
          }
        }
      }
      return k;
    },
    zA = function () {
      var a = ii.zones;
      a || (a = ii.zones = new DA());
      return a;
    },
    EA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    BA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    DA = function () {
      this.j = {};
      this.D = {};
      this.H = 0;
    };
  ca = DA.prototype;
  ca.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Ch], b)) return !1;
    for (var e = 0; e < c.Pe.length; e++) if (this.D[c.Pe[e]].sd(b)) return !0;
    return !1;
  };
  ca.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Pe.length; f++) {
      var g = this.D[c.Pe[f]];
      g.sd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.Ch], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].Rl(m, n)) return !0;
      return !1;
    };
  };
  ca.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  ca.createZone = function (a, b) {
    var c = String(++this.H);
    this.D[c] = new FA(a, b);
    return c;
  };
  ca.updateZone = function (a, b, c) {
    var d = this.D[a];
    d && d.H(b, c);
  };
  ca.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && ii[a]) || (!d && Tj(a)) || (d && d.Ch !== b)) return !1;
    if (d) return d.Pe.push(c), !1;
    this.j[a] = { Ch: b, Pe: [c] };
    return !0;
  };
  var FA = function (a, b) {
    this.D = null;
    this.j = [{ eventId: a, sd: !0 }];
    if (b) {
      this.D = {};
      for (var c = 0; c < b.length; c++) this.D[b[c]] = !0;
    }
  };
  FA.prototype.H = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.sd !== b && this.j.push({ eventId: a, sd: b }));
  };
  FA.prototype.sd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].sd;
    return !1;
  };
  FA.prototype.Rl = function (a, b) {
    b = b || [];
    if (!this.D || EA[a] || this.D[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.D[b[c]]) return !0;
    return !1;
  };
  function GA(a) {
    var b = ii.zones;
    return b
      ? b.getIsAllowedFn(Cj(), a)
      : function () {
          return !0;
        };
  }
  function HA() {
    cw(Jj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = ii.zones;
      return c ? c.isActive(Cj(), b) : !0;
    });
    aw(Jj(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return GA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var IA = function (a, b) {
    this.tagId = a;
    this.qe = b;
  };
  function JA(a, b) {
    var c = this,
      d;
    var e = function (u) {
      aw(
        u,
        function (v) {
          for (
            var w = bw().getExternalRestrictions(0, Jj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      cw(
        u,
        function (v) {
          for (
            var w = bw().getExternalRestrictions(1, Jj()),
              x = na(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new IA(a, u));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = J(b, this.F, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    Dz([
      function () {
        return N(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (Uj(a)) return;
    } else if (Tj(a)) return;
    var q = 6,
      r = Hz(this);
    n && (q = 7);
    r.wb() === "__zone" && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    m ? pw(a, g, t, e) : ow(a, g, !Ib(a, "GTM-"), t, e);
    k &&
      r.wb() === "__zone" &&
      CA(Number.MIN_SAFE_INTEGER, [a], null, {}, xA(Hz(this)));
    d = p ? Ej(a) : a;
    return d;
  }
  JA.J = "internal.loadGoogleTag";
  function KA(a) {
    return new Yc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Yc)
        return new Yc("", function () {
          var d = Aa.apply(0, arguments),
            e = this,
            f = h(Hz(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Na(this.F);
          k.j = f;
          return c.fb.apply(c, [k].concat(qa(g)));
        });
    });
  }
  function LA(a, b, c) {
    var d = this;
  }
  LA.J = "internal.addGoogleTagRestriction";
  var MA = {},
    NA = [];
  function UA(a, b) {}
  UA.J = "internal.addHistoryChangeListener";
  function VA(a, b, c) {}
  VA.T = "addWindowEventListener";
  function WA(a, b) {
    return !0;
  }
  WA.T = "aliasInWindow";
  function XA(a, b, c) {}
  XA.J = "internal.appendRemoteConfigParameter";
  function YA(a) {
    var b;
    K(this.getName(), ["path:!string"], [a]);
    N(this, "access_globals", "execute", a);
    for (
      var c = a.split("."), d = G, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      if (((d = e), (e = e[c[f]]), d === G || d === H)) return;
    if (Va(e) !== "function") return;
    for (var g = [], k = 1; k < arguments.length; k++)
      g.push(J(arguments[k], this.F, 2));
    var m = (0, this.F.K)(e, d, g);
    b = fd(m, this.F, 2);
    b === void 0 && m !== void 0 && O(45);
    return b;
  }
  YA.T = "callInWindow";
  function ZA(a) {}
  ZA.T = "callLater";
  function $A(a) {}
  $A.J = "callOnDomReady";
  function aB(a) {}
  aB.J = "callOnWindowLoad";
  function bB(a, b) {
    var c;
    return c;
  }
  bB.J = "internal.computeGtmParameter";
  function cB(a) {
    var b;
    return b;
  }
  cB.J = "internal.copyFromCrossContainerData";
  function dB(a, b) {
    var c;
    var d = fd(c, this.F, Ib(Hz(this).wb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && O(45);
    return d;
  }
  dB.T = "copyFromDataLayer";
  function eB(a) {
    var b = void 0;
    return b;
  }
  eB.J = "internal.copyFromDataLayerCache";
  function fB(a) {
    var b;
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "read", a);
    var c = a.split("."),
      d = Kb(c, [G, H]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = fd(e, this.F, 2);
    b === void 0 && e !== void 0 && O(45);
    return b;
  }
  fB.T = "copyFromWindow";
  function gB(a) {
    var b = void 0;
    return fd(b, this.F, 1);
  }
  gB.J = "internal.copyKeyFromWindow";
  function hB(a, b) {
    var c;
    return c;
  }
  hB.J = "internal.copyPreHit";
  function iB(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var d = [G, H],
      e = a.split("."),
      f = Kb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !qb(k)) return null;
    if (k) return fd(k, this.F, 2);
    var m;
    k = function () {
      if (!qb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = Kb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return fd(c, this.F, 2);
  }
  iB.T = "createArgumentsQueue";
  function jB(a) {
    return fd(
      function (c) {
        var d = Hw();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Hw(),
                n = m && m.getByName && m.getByName(f);
              return Gk(G.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.F,
      1
    );
  }
  jB.J = "internal.createGaCommandQueue";
  function kB(a) {
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = Kb(b, [G, H]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return fd(
      function () {
        if (!qb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.F,
      Ib(Hz(this).wb(), "__cvt_") ? 2 : 1
    );
  }
  kB.T = "createQueue";
  function lB(a, b) {
    var c = null;
    return c;
  }
  lB.J = "internal.createRegex";
  function mB() {
    var a = {};
    return a;
  }
  function nB(a) {}
  nB.J = "internal.declareConsentState";
  function oB(a) {
    var b = "";
    return b;
  }
  oB.J = "internal.decodeUrlHtmlEntities";
  function pB(a, b, c) {
    var d;
    return d;
  }
  pB.J = "internal.decorateUrlWithGaCookies";
  function qB(a) {
    var b;
    return b;
  }
  qB.J = "internal.detectUserProvidedData";
  function uB(a, b) {
    return b;
  }
  uB.J = "internal.enableAutoEventOnClick";
  function CB(a, b) {
    return b;
  }
  CB.J = "internal.enableAutoEventOnElementVisibility";
  function DB() {}
  DB.J = "internal.enableAutoEventOnError";
  var EB = {},
    FB = [],
    GB = {},
    HB = 0,
    IB = 0;
  function OB(a, b) {
    var c = this;
    return b;
  }
  OB.J = "internal.enableAutoEventOnFormInteraction";
  function TB(a, b) {
    var c = this;
    return b;
  }
  TB.J = "internal.enableAutoEventOnFormSubmit";
  function YB() {
    var a = this;
  }
  YB.J = "internal.enableAutoEventOnGaSend";
  var ZB = {},
    $B = [];
  function gC(a, b) {
    var c = this;
    return b;
  }
  gC.J = "internal.enableAutoEventOnHistoryChange";
  var hC = ["http://", "https://", "javascript:", "file://"];
  function lC(a, b) {
    var c = this;
    return b;
  }
  lC.J = "internal.enableAutoEventOnLinkClick";
  var mC, nC;
  function yC(a, b) {
    var c = this;
    return b;
  }
  yC.J = "internal.enableAutoEventOnScroll";
  function zC(a) {
    return function () {
      if (a.wh && a.yh >= a.wh) a.Gf && G.clearInterval(a.Gf);
      else {
        a.yh++;
        var b = Db();
        ny({
          event: a.eventName,
          "gtm.timerId": a.Gf,
          "gtm.timerEventNumber": a.yh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.wh,
          "gtm.timerStartTime": a.Zj,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Zj,
          "gtm.triggers": a.Sm,
        });
      }
    };
  }
  function AC(a, b) {
    return b;
  }
  AC.J = "internal.enableAutoEventOnTimer";
  var jc = ka(["data-gtm-yt-inspected-"]),
    CC = ["www.youtube.com", "www.youtube-nocookie.com"],
    DC,
    EC = !1;
  function OC(a, b) {
    var c = this;
    return b;
  }
  OC.J = "internal.enableAutoEventOnYouTubeActivity";
  function PC(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? J(b) : {},
      d = a,
      e = !1;
    return e;
  }
  PC.J = "internal.evaluateBooleanExpression";
  var QC;
  function RC(a) {
    var b = !1;
    return b;
  }
  RC.J = "internal.evaluateMatchingRules";
  var SC = function (a) {
      switch (a) {
        case "page_view":
          return [Br, tr, Ju, du, ru, Cu, Du, vu];
        case "call_conversion":
          return [Br, Ju];
        case "conversion":
          return [
            yr,
            Br,
            ju,
            Zt,
            mu,
            $t,
            au,
            bu,
            cu,
            du,
            ru,
            su,
            uu,
            wu,
            Gu,
            Hu,
            tu,
            Cu,
            Du,
            nu,
            xu,
            yu,
            Au,
            ku,
            ou,
            Eu,
            zr,
            pu,
            Bu,
            eu,
            vu,
            lu,
            Iu,
            qu,
            zu,
            iu,
            hu,
            Fu,
          ];
        case "landing_page":
          return [
            yr,
            Br,
            ju,
            Zt,
            ru,
            Ar,
            Cu,
            Du,
            nu,
            ku,
            zr,
            pu,
            eu,
            vu,
            lu,
            Iu,
            Fu,
          ];
        case "remarketing":
          return [
            yr,
            Br,
            ju,
            Zt,
            mu,
            $t,
            au,
            bu,
            cu,
            du,
            ru,
            su,
            wu,
            tu,
            Cu,
            Du,
            nu,
            xu,
            ku,
            zr,
            pu,
            Bu,
            eu,
            vu,
            lu,
            Iu,
            iu,
            Fu,
          ];
        case "user_data_lead":
          return [
            yr,
            Br,
            ju,
            Zt,
            $t,
            du,
            ru,
            tu,
            Cu,
            Du,
            Ar,
            nu,
            Au,
            ku,
            zr,
            pu,
            Bu,
            eu,
            vu,
            lu,
            Iu,
            Fu,
          ];
        case "user_data_web":
          return [
            yr,
            Br,
            ju,
            Zt,
            $t,
            du,
            ru,
            tu,
            Cu,
            Du,
            Ar,
            nu,
            Au,
            ku,
            zr,
            pu,
            Bu,
            eu,
            vu,
            lu,
            Iu,
            Fu,
          ];
        default:
          return [
            yr,
            Br,
            ju,
            Zt,
            mu,
            $t,
            au,
            bu,
            cu,
            du,
            ru,
            su,
            uu,
            wu,
            Gu,
            Hu,
            tu,
            Cu,
            Du,
            nu,
            xu,
            yu,
            Au,
            ku,
            ou,
            Eu,
            zr,
            pu,
            Bu,
            eu,
            vu,
            lu,
            Iu,
            qu,
            zu,
            iu,
            hu,
            Fu,
          ];
      }
    },
    TC = function (a) {
      for (
        var b = SC(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    UC = function (a, b, c, d) {
      var e = new Vq(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Db();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    VC = function (a, b, c, d) {
      function e(t, u) {
        for (var v = na(k), w = v.next(); !w.done; w = v.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = Db();
          x.metadata.consent_event_id = t;
          x.metadata.consent_priority_id = u;
        }
      }
      function f(t) {
        for (var u = {}, v = 0; v < k.length; u = { Qa: void 0 }, v++)
          if (((u.Qa = k[v]), !t || t(u.Qa.metadata.hit_type)))
            if (
              !u.Qa.metadata.consent_updated ||
              u.Qa.metadata.hit_type === "page_view" ||
              X(q)
            )
              TC(k[v]),
                u.Qa.metadata.speculative ||
                  u.Qa.isAborted ||
                  (Zv(u.Qa),
                  u.Qa.metadata.hit_type === "page_view" &&
                    T(19) &&
                    u.Qa.o[P.g.ff] === void 0 &&
                    r === void 0 &&
                    (r = oo(
                      io.ke,
                      (function (w) {
                        return function () {
                          X(P.g.P) &&
                            ((w.Qa.metadata.user_id_updated = !0),
                            (w.Qa.metadata.consent_updated = !1),
                            (w.Qa.o[P.g.Qb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Qa.metadata.user_id_updated = !1),
                            po(io.ke, r),
                            (r = void 0));
                        };
                      })(u)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", ia: "", ma: [] }
          : om(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = UC(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === P.g.ba &&
            (T(18)
              ? k.push(UC("page_view", g, b, d))
              : k.push(UC("landing_page", g, b, d))),
            k.push(UC("conversion", g, b, d)),
            k.push(UC("user_data_lead", g, b, d)),
            k.push(UC("user_data_web", g, b, d)),
            k.push(UC("remarketing", g, b, d));
        var q = [P.g.R, P.g.P],
          r = void 0;
        im(function () {
          f();
          T(20) &&
            (X([P.g.ya]) ||
              hm(
                function (t) {
                  e(t.consentEventId, t.consentPriorityId);
                  f(function (u) {
                    return u === "remarketing";
                  });
                },
                [P.g.ya]
              ));
          X(q) ||
            hm(function (t) {
              e(t.consentEventId, t.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  var zD = function () {
    var a = !0;
    (Mn(7) && Mn(9) && Mn(10)) || (a = !1);
    return a;
  };
  var DD = function (a, b) {
      if (!b.isGtmEvent) {
        var c = W(b, P.g.qb),
          d = W(b, P.g.Fb),
          e = W(b, c);
        if (e === void 0) {
          var f = void 0;
          AD.hasOwnProperty(c)
            ? (f = AD[c])
            : BD.hasOwnProperty(c) && (f = BD[c]);
          f === 1 && (f = CD(c));
          l(f)
            ? Hw()(function () {
                var g = Hw().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    ED = function (a, b) {
      var c = a[P.g.Ib],
        d = b + ".",
        e = a[P.g.W] || "",
        f = c === void 0 ? !!a.use_anchor : c === "fragment",
        g = !!a[P.g.sb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = Hw();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    ID = function (a, b, c) {
      if (!c.isGtmEvent || !FD[a]) {
        var d = !X(P.g.U),
          e = function (f) {
            var g,
              k,
              m = Hw(),
              n = GD(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || HD(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + yi()),
                (k = n.createOnlyFields),
                n.gtmTrackerName && (k.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d &&
                X(P.g.U) &&
                ((d = !1),
                m(function () {
                  var t = Hw().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = ci[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = ci[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        hm(function () {
          return e(P.g.U);
        }, P.g.U);
        hm(function () {
          return e(P.g.R);
        }, P.g.R);
        hm(function () {
          return e(P.g.P);
        }, P.g.P);
        c.isGtmEvent && (FD[a] = !0);
      }
    },
    JD = function (a, b) {
      mj() && b && (a[P.g.pb] = b);
    },
    SD = function (a, b, c) {
      function d() {
        var L = W(c, P.g.Wc);
        k(function () {
          if (!c.isGtmEvent && Xa(L)) {
            var R = u.fieldsToSend,
              V = m().getByName(n),
              ba;
            for (ba in L)
              if (L[ba] != void 0 && /^(dimension|metric)\d+$/.test(ba)) {
                var aa = V.get(CD(L[ba]));
                KD(R, ba, aa);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var L = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: L });
        }
      }
      var f = a,
        g,
        k = c.isGtmEvent ? Iw(W(c, "gaFunctionName")) : Iw();
      if (qb(k)) {
        var m = Hw,
          n;
        c.isGtmEvent
          ? (n = W(c, "name") || W(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (L) {
            var R = [].slice.call(arguments, 0);
            R[0] = n ? n + "." + R[0] : "" + R[0];
            k.apply(window, R);
          },
          q = function (L) {
            var R = function (ma, ia) {
                for (var za = 0; ia && za < ia.length; za++) p(ma, ia[za]);
              },
              V = c.isGtmEvent,
              ba = V ? LD(u) : MD(b, c);
            if (ba) {
              var aa = {};
              JD(aa, L);
              p("require", "ec", "ec.js", aa);
              V && ba.Vg && p("set", "&cu", ba.Vg);
              var Q = ba.action;
              if (V || Q === "impressions")
                if ((R("ec:addImpression", ba.Hj), !V)) return;
              if (Q === "promo_click" || Q === "promo_view" || (V && ba.Me)) {
                var oa = ba.Me;
                R("ec:addPromo", oa);
                if (oa && oa.length > 0 && Q === "promo_click") {
                  V ? p("ec:setAction", Q, ba.ub) : p("ec:setAction", Q);
                  return;
                }
                if (!V) return;
              }
              Q !== "promo_view" &&
                Q !== "impressions" &&
                (R("ec:addProduct", ba.Kc), p("ec:setAction", Q, ba.ub));
            }
          },
          r = function (L) {
            if (L) {
              var R = {};
              if (Xa(L))
                for (var V in ND) ND.hasOwnProperty(V) && OD(ND[V], V, L[V], R);
              JD(R, y);
              p("require", "linkid", R);
            }
          },
          t = function () {
            if (fo()) {
            } else {
              var L = W(c, P.g.Ki);
              L &&
                (p("require", L, { dataLayer: hi.Ya }), p("require", "render"));
            }
          },
          u = GD(n, b, c),
          v = function (L, R, V) {
            V && (R = "" + R);
            u.fieldsToSend[L] = R;
          };
        !c.isGtmEvent &&
          HD(n, u.createOnlyFields) &&
          (k(function () {
            m() && m().remove(n);
          }),
          (PD[n] = !1));
        k("create", f, u.createOnlyFields);
        var w = c.isGtmEvent && u.fieldsToSet[P.g.pb];
        if ((!c.isGtmEvent && u.createOnlyFields[P.g.pb]) || w) {
          var x = lj()
            ? kj(
                c.isGtmEvent
                  ? u.fieldsToSet[P.g.pb]
                  : u.createOnlyFields[P.g.pb],
                "/analytics.js"
              )
            : void 0;
          x && (g = x);
        }
        var y = c.isGtmEvent
          ? u.fieldsToSet[P.g.pb]
          : u.createOnlyFields[P.g.pb];
        if (y) {
          var B = c.isGtmEvent
            ? u.fieldsToSet[P.g.Ud]
            : u.createOnlyFields[P.g.Ud];
          B && !PD[n] && ((PD[n] = !0), k(Lw(n, B)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[P.g.sa];
        A && A[P.g.W] && ED(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var D = {};
            JD(D, y);
            p("require", "linkid", "linkid.js", D);
          }
          ID(f, n, c);
        }
        if (b === P.g.Sb)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: E });
            }
            q(y);
            p("send", "pageview");
            u.createOnlyFields._useUp && Jw(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === P.g.ba
            ? (t(),
              Ur(f, c),
              W(c, P.g.Xa) && (vq(["aw", "dc"]), Jw(n + ".")),
              xq(["aw", "dc"]),
              u.sendPageView != 0 && p("send", "pageview", u.fieldsToSend),
              ID(f, n, c))
            : b === P.g.Ta
            ? DD(n, c)
            : b === "screen_view"
            ? p("send", "screenview", u.fieldsToSend)
            : b === "timing_complete"
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", yb(u.value)),
              u.eventLabel !== void 0 && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : b === "exception"
            ? p("send", "exception", u.fieldsToSend)
            : (b === "" && c.isGtmEvent) ||
              (b === "track_social" && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || QD[b]) && q(y),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  u.eventLabel !== void 0 && v("eventLabel", u.eventLabel, !0),
                  u.value !== void 0 && v("eventValue", yb(u.value))),
              p("send", u.fieldsToSend));
        var C = g && !c.eventMetadata.suppress_script_load;
        if (!RD && (!c.isGtmEvent || C)) {
          g = g || "https://www.google-analytics.com/analytics.js";
          RD = !0;
          var F = function () {
              c.onFailure();
            },
            M = function () {
              m().loaded || F();
            };
          fo() ? I(M) : Bc(g, M, F);
        }
      } else I(c.onFailure);
    },
    TD = function (a, b, c, d) {
      im(
        function () {
          SD(a, b, d);
        },
        [P.g.U, P.g.R]
      );
    },
    VD = function (a) {
      function b(e) {
        function f(k, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[k] = e[p];
              break;
            }
          }
        }
        var g = h(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var k = "", m = 0; m < UD.length; m++)
              e[UD[m]] !== void 0 && (k && (k += "/"), (k += e[UD[m]]));
            k && (g.category = k);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Xa(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    WD = function (a) {
      return X(a);
    },
    XD = !1;
  var RD,
    PD = {},
    FD = {},
    YD = {},
    ZD = Object.freeze(
      ((YD.page_hostname = 1),
      (YD[P.g.ka] = 1),
      (YD[P.g.kb] = 1),
      (YD[P.g.Va] = 1),
      (YD[P.g.Wa] = 1),
      (YD[P.g.ab] = 1),
      (YD[P.g.uc] = 1),
      (YD[P.g.Eb] = 1),
      (YD[P.g.Na] = 1),
      (YD[P.g.vc] = 1),
      (YD[P.g.wa] = 1),
      (YD[P.g.gd] = 1),
      (YD[P.g.Da] = 1),
      (YD[P.g.Jb] = 1),
      YD)
    ),
    $D = {},
    AD = Object.freeze(
      (($D.client_storage = "storage"),
      ($D.sample_rate = 1),
      ($D.site_speed_sample_rate = 1),
      ($D.store_gac = 1),
      ($D.use_amp_client_id = 1),
      ($D[P.g.lb] = 1),
      ($D[P.g.ra] = "storeGac"),
      ($D[P.g.Va] = 1),
      ($D[P.g.Wa] = 1),
      ($D[P.g.ab] = 1),
      ($D[P.g.uc] = 1),
      ($D[P.g.Eb] = 1),
      ($D[P.g.vc] = 1),
      $D)
    ),
    aE = {},
    bE = Object.freeze(
      ((aE._cs = 1),
      (aE._useUp = 1),
      (aE.allowAnchor = 1),
      (aE.allowLinker = 1),
      (aE.alwaysSendReferrer = 1),
      (aE.clientId = 1),
      (aE.cookieDomain = 1),
      (aE.cookieExpires = 1),
      (aE.cookieFlags = 1),
      (aE.cookieName = 1),
      (aE.cookiePath = 1),
      (aE.cookieUpdate = 1),
      (aE.legacyCookieDomain = 1),
      (aE.legacyHistoryImport = 1),
      (aE.name = 1),
      (aE.sampleRate = 1),
      (aE.siteSpeedSampleRate = 1),
      (aE.storage = 1),
      (aE.storeGac = 1),
      (aE.useAmpClientId = 1),
      (aE._cd2l = 1),
      aE)
    ),
    cE = Object.freeze({ anonymize_ip: 1 }),
    dE = {},
    BD = Object.freeze(
      ((dE.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (dE.app_id = 1),
      (dE.app_installer_id = 1),
      (dE.app_name = 1),
      (dE.app_version = 1),
      (dE.description = "exDescription"),
      (dE.fatal = "exFatal"),
      (dE.language = 1),
      (dE.page_hostname = "hostname"),
      (dE.transport_type = "transport"),
      (dE[P.g.za] = "currencyCode"),
      (dE[P.g.sg] = 1),
      (dE[P.g.wa] = "location"),
      (dE[P.g.gd] = "page"),
      (dE[P.g.Da] = "referrer"),
      (dE[P.g.Jb] = "title"),
      (dE[P.g.df] = 1),
      (dE[P.g.Ba] = 1),
      dE)
    ),
    eE = {},
    fE = Object.freeze(
      ((eE.content_id = 1),
      (eE.event_action = 1),
      (eE.event_category = 1),
      (eE.event_label = 1),
      (eE.link_attribution = 1),
      (eE.name = 1),
      (eE[P.g.sa] = 1),
      (eE[P.g.rg] = 1),
      (eE[P.g.Ja] = 1),
      (eE[P.g.na] = 1),
      eE)
    ),
    gE = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    UD = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    hE = {},
    ND = Object.freeze(
      ((hE.levels = 1), (hE[P.g.Wa] = "duration"), (hE[P.g.uc] = 1), hE)
    ),
    iE = {},
    jE = Object.freeze(
      ((iE.anonymize_ip = 1),
      (iE.fatal = 1),
      (iE.send_page_view = 1),
      (iE.store_gac = 1),
      (iE.use_amp_client_id = 1),
      (iE[P.g.ra] = 1),
      (iE[P.g.sg] = 1),
      iE)
    ),
    OD = function (a, b, c, d) {
      if (c !== void 0)
        if (
          (jE[b] && (c = zb(c)),
          b !== "anonymize_ip" || c || (c = void 0),
          a === 1)
        )
          d[CD(b)] = c;
        else if (l(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && c[e] !== void 0 && (d[a[e]] = c[e]);
    },
    CD = function (a) {
      return a && l(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    kE = {},
    QD = Object.freeze(
      ((kE.checkout_progress = 1),
      (kE.select_content = 1),
      (kE.set_checkout_option = 1),
      (kE[P.g.oc] = 1),
      (kE[P.g.qc] = 1),
      (kE[P.g.Rb] = 1),
      (kE[P.g.rc] = 1),
      (kE[P.g.hb] = 1),
      (kE[P.g.Cb] = 1),
      (kE[P.g.ib] = 1),
      (kE[P.g.Ia] = 1),
      (kE[P.g.sc] = 1),
      (kE[P.g.Ma] = 1),
      kE)
    ),
    lE = {},
    mE = Object.freeze(
      ((lE.checkout_progress = 1),
      (lE.set_checkout_option = 1),
      (lE[P.g.Sf] = 1),
      (lE[P.g.Tf] = 1),
      (lE[P.g.oc] = 1),
      (lE[P.g.qc] = 1),
      (lE[P.g.Uf] = 1),
      (lE[P.g.Rb] = 1),
      (lE[P.g.Ia] = 1),
      (lE[P.g.sc] = 1),
      (lE[P.g.Vf] = 1),
      lE)
    ),
    nE = {},
    oE = Object.freeze(
      ((nE.generate_lead = 1),
      (nE.login = 1),
      (nE.search = 1),
      (nE.select_content = 1),
      (nE.share = 1),
      (nE.sign_up = 1),
      (nE.view_search_results = 1),
      (nE[P.g.rc] = 1),
      (nE[P.g.hb] = 1),
      (nE[P.g.Cb] = 1),
      (nE[P.g.ib] = 1),
      (nE[P.g.Ma] = 1),
      nE)
    ),
    pE = function (a) {
      var b = "general";
      mE[a]
        ? (b = "ecommerce")
        : oE[a]
        ? (b = "engagement")
        : a === "exception" && (b = "error");
      return b;
    },
    qE = {},
    rE = Object.freeze(
      ((qE.view_search_results = 1),
      (qE[P.g.hb] = 1),
      (qE[P.g.ib] = 1),
      (qE[P.g.Ma] = 1),
      qE)
    ),
    KD = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    sE = function (a) {
      if (Array.isArray(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (d != void 0) {
            var e = d.id,
              f = d.variant;
            e != void 0 && f != void 0 && b.push(String(e) + "." + String(f));
          }
        }
        return b.length > 0 ? b.join("!") : void 0;
      }
    },
    GD = function (a, b, c) {
      var d = function (L) {
          return W(c, L);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        m = sE(d(P.g.Bi));
      !c.isGtmEvent && m && KD(f, "exp", m);
      g["&gtm"] = ho({ xa: c.eventMetadata.source_canonical_id, Af: !0 });
      c.isGtmEvent || (g._no_slc = !0);
      Vl() && (k._cs = WD);
      var n = d(P.g.Wc);
      if (!c.isGtmEvent && Xa(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            n[p] != void 0
          ) {
            var q = d(String(n[p]));
            q !== void 0 && KD(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = Lm(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          gE.hasOwnProperty(v)
            ? (e[v] = w)
            : bE.hasOwnProperty(v)
            ? (k[v] = w)
            : (g[v] = w);
        } else {
          var x = void 0;
          x = v !== P.g.la ? d(v) : Mm(c, v);
          if (fE.hasOwnProperty(v)) OD(fE[v], v, x, e);
          else if (cE.hasOwnProperty(v)) OD(cE[v], v, x, g);
          else if (BD.hasOwnProperty(v)) OD(BD[v], v, x, f);
          else if (AD.hasOwnProperty(v)) OD(AD[v], v, x, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            OD(1, v, x, f);
          else if (v === P.g.la) {
            if (!XD) {
              var y = Nb(x);
              y && (f["&did"] = y);
            }
            var B = void 0,
              A = void 0;
            b === P.g.ba
              ? (B = Nb(Mm(c, v), "."))
              : ((B = Nb(Mm(c, v, 1), ".")), (A = Nb(Mm(c, v, 2), ".")));
            B && (f["&gdid"] = B);
            A && (f["&edid"] = A);
          } else
            v === P.g.Na && t.indexOf(P.g.uc) < 0 && (k.cookieName = x + "_ga");
          T(90) &&
            ZD[v] &&
            (c.H.hasOwnProperty(v) ||
              (b === P.g.ba && c.j.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      T(90) && r && (f["&jsscut"] = "1");
      (d(P.g.Te) !== !1 && d(P.g.kb) !== !1 && zD()) ||
        (g.allowAdFeatures = !1);
      g.allowAdPersonalizationSignals = Tn(c);
      !c.isGtmEvent && d(P.g.Xa) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          qb(D) && D();
          c.onSuccess();
        };
      } else {
        KD(k, "cookieDomain", "auto");
        KD(g, "forceSSL", !0);
        KD(e, "eventCategory", pE(b));
        rE[b] && KD(f, "nonInteraction", !0);
        b === "login" || b === "sign_up" || b === "share"
          ? KD(e, "eventLabel", d(P.g.rg))
          : b === "search" || b === "view_search_results"
          ? KD(e, "eventLabel", d(P.g.Pi))
          : b === "select_content" && KD(e, "eventLabel", d(P.g.vi));
        var E = e[P.g.sa] || {},
          C = E[P.g.Cc];
        C || (C != 0 && E[P.g.W])
          ? (k.allowLinker = !0)
          : C === !1 && KD(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      Un() && (g["&gcs"] = Vn());
      g["&gcd"] = Zn(c);
      Vl() &&
        (X(P.g.U) || (k.storage = "none"),
        X([P.g.R, P.g.P]) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      bo() && (g["&dma_cps"] = $n());
      g["&dma"] = ao();
      wn(En()) && (g["&tcfd"] = co());
      Ai.j && (g["&tag_exp"] = Ai.j);
      var F = nj(c) || d(P.g.pb),
        M = d(P.g.Ud);
      F && (c.isGtmEvent || (k[P.g.pb] = F), (k._cd2l = !0));
      M && !c.isGtmEvent && (k[P.g.Ud] = M);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    LD = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Vg = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Hj = b.translateIfKeyEquals === "impressions" ? VD(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Me = b.translateIfKeyEquals === "promoView" ? VD(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Me = b.translateIfKeyEquals === "promoClick" ? VD(f) : f;
        c.ub = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b[g] !== void 0 &&
          g !== "translateIfKeyEquals" &&
          g !== "impressions" &&
          g !== "promoView" &&
          g !== "promoClick" &&
          g !== "currencyCode"
        ) {
          c.action = g;
          var k = b[g].products;
          c.Kc = b.translateIfKeyEquals === "products" ? VD(k) : k;
          c.ub = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    MD = function (a, b) {
      function c(u) {
        return {
          id: d(P.g.Aa),
          affiliation: d(P.g.dg),
          revenue: d(P.g.na),
          tax: d(P.g.Ye),
          shipping: d(P.g.Zc),
          coupon: d(P.g.eg),
          list: d(P.g.Xe) || d(P.g.Yc) || u,
        };
      }
      for (
        var d = function (u) {
            return W(b, u);
          },
          e = d(P.g.da),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][P.g.Xe] || e[g][P.g.Yc]);
        g++
      );
      var k = d(P.g.Wc);
      if (Xa(k))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              k[p] != void 0 &&
              KD(n, p, n[k[p]]);
        }
      var q = null,
        r = d(P.g.Ai);
      if (a === P.g.Ia || a === P.g.sc) q = { action: a, ub: c(), Kc: VD(e) };
      else if (a === P.g.oc) q = { action: "add", ub: c(), Kc: VD(e) };
      else if (a === P.g.qc) q = { action: "remove", ub: c(), Kc: VD(e) };
      else if (a === P.g.Ma) q = { action: "detail", ub: c(f), Kc: VD(e) };
      else if (a === P.g.hb) q = { action: "impressions", Hj: VD(e) };
      else if (a === P.g.ib) q = { action: "promo_view", Me: VD(r) || VD(e) };
      else if ((a === "select_content" && r && r.length > 0) || a === P.g.Cb)
        q = { action: "promo_click", Me: VD(r) || VD(e) };
      else if (a === "select_content" || a === P.g.rc)
        q = {
          action: "click",
          ub: { list: d(P.g.Xe) || d(P.g.Yc) || f },
          Kc: VD(e),
        };
      else if (a === P.g.Rb || a === "checkout_progress") {
        var t = { step: a === P.g.Rb ? 1 : d(P.g.We), option: d(P.g.Nd) };
        q = { action: "checkout", Kc: VD(e), ub: h(c(), t) };
      } else
        a === "set_checkout_option" &&
          (q = {
            action: "checkout_option",
            ub: { step: d(P.g.We), option: d(P.g.Nd) },
          });
      q && (q.Vg = d(P.g.za));
      return q;
    },
    tE = {},
    HD = function (a, b) {
      var c = tE[a];
      tE[a] = h(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function uE(a, b, c, d) {}
  uE.J = "internal.executeEventProcessor";
  function vE(a) {
    var b;
    return fd(b, this.F, 1);
  }
  vE.J = "internal.executeJavascriptString";
  function wE(a) {
    var b;
    return b;
  }
  var xE = null;
  function yE() {
    var a = new cb();
    return a;
  }
  yE.T = "getContainerVersion";
  function zE(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  zE.T = "getCookieValues";
  function AE() {
    return Al();
  }
  AE.J = "internal.getCountryCode";
  function BE() {
    var a = [];
    return fd(a);
  }
  BE.J = "internal.getDestinationIds";
  function CE(a, b) {
    var c = null;
    return c;
  }
  CE.J = "internal.getElementAttribute";
  function DE(a) {
    var b = null;
    return b;
  }
  DE.J = "internal.getElementById";
  function EE(a) {
    var b = "";
    return b;
  }
  EE.J = "internal.getElementInnerText";
  function FE(a, b) {
    var c = null;
    return c;
  }
  FE.J = "internal.getElementProperty";
  function GE(a) {
    var b;
    return b;
  }
  GE.J = "internal.getElementValue";
  function HE(a) {
    var b = 0;
    return b;
  }
  HE.J = "internal.getElementVisibilityRatio";
  function IE(a) {
    var b = null;
    return b;
  }
  IE.J = "internal.getElementsByCssSelector";
  function JE(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = Hz(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++)
              n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = na(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var A = B.value;
          A === m
            ? (w.push(x), (x = ""))
            : (x = A === g ? x + "\\" : A === k ? x + "." : x + A);
        }
        x && w.push(x);
        for (var D = na(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = fd(c, this.F, 1);
    return b;
  }
  JE.J = "internal.getEventData";
  var KE = {};
  KE.enableAWFledge = T(23);
  KE.enableAdsConversionValidation = T(14);
  KE.enableAutoPiiOnPhoneAndAddress = T(22);
  KE.enableCachedEcommerceData = T(29);
  KE.enableCcdPreAutoPiiDetection = T(30);
  KE.enableCloudRecommentationsErrorLogging = T(31);
  KE.enableCloudRecommentationsSchemaIngestion = T(32);
  KE.enableCloudRetailInjectPurchaseMetadata = T(34);
  KE.enableCloudRetailLogging = T(33);
  KE.enableCloudRetailPageCategories = T(35);
  KE.enableConsentDisclosureActivity = T(36);
  KE.enableConversionMarkerPageViewRename = T(38);
  KE.enableDCFledge = T(41);
  KE.enableDecodeUri = T(56);
  KE.enableDeferAllEnhancedMeasurement = T(42);
  KE.enableDmaBlockDisclosure = T(45);
  KE.enableEuidAutoMode = T(49);
  KE.enableFormSkipValidation = T(53);
  KE.enableUrlDecodeEventUsage = T(81);
  KE.enableZoneConfigInChildContainers = T(84);
  KE.ignoreServerMacroInGoogleSignal = T(87);
  KE.useEnableAutoEventOnFormApis = T(92);
  KE.autoPiiEligible = Fl();
  function LE() {
    return fd(KE);
  }
  LE.J = "internal.getFlags";
  function ME() {
    return new cd(hz);
  }
  ME.J = "internal.getHtmlId";
  function NE(a, b) {
    var c;
    return c;
  }
  NE.J = "internal.getProductSettingsParameter";
  function OE(a, b) {
    var c;
    return c;
  }
  OE.T = "getQueryParameters";
  function PE(a, b) {
    var c;
    return c;
  }
  PE.T = "getReferrerQueryParameters";
  function QE(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      N(this, "get_referrer", a),
      (b = dj(U(H.referrer), a));
    return b;
  }
  QE.T = "getReferrerUrl";
  function RE() {
    return Bl();
  }
  RE.J = "internal.getRegionCode";
  function SE(a, b) {
    var c;
    return c;
  }
  SE.J = "internal.getRemoteConfigParameter";
  function TE(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      N(this, "get_url", a),
      (b = bj(U(G.location.href), a));
    return b;
  }
  TE.T = "getUrl";
  function UE() {
    N(this, "get_user_agent");
    return rc.userAgent;
  }
  UE.J = "internal.getUserAgent";
  function bF() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  var cF = function () {
      var a = bF();
      a.hid = a.hid || ub();
      return a.hid;
    },
    dF = function (a, b) {
      var c = bF();
      if (c.vid == void 0 || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var OF = function (a) {
      this.D = a;
      this.H = "";
      this.j = this.D;
    },
    PF = function (a, b) {
      a.j = b;
      return a;
    },
    QF = function (a, b) {
      a.K = b;
      return a;
    };
  function RF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function SF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Xa(b) ? b : {}, f = na(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var zG = window,
    AG = document,
    BG = function (a) {
      var b = zG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        AG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && zG["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = zG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(AG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return AG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function LG(a) {
    z(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.cb] || {};
    z(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  var pH = function (a, b) {};
  function oH(a, b) {
    var c = function () {};
    return c;
  }
  function qH(a, b, c) {}
  var rH = oH;
  var sH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function tH(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? J(b) : {};
    Dz([
      function () {
        return N(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? J(c) : {},
      g = Hz(this);
    f.originatingEntity = xA(g);
    Fx(Cx(a, e), g.eventId, f);
  }
  tH.J = "internal.gtagConfig";
  function uH() {
    var a = {};
    return a;
  }
  function wH(a, b) {}
  wH.T = "gtagSet";
  function xH(a, b) {}
  xH.T = "injectHiddenIframe";
  function yH(a, b, c, d, e) {}
  yH.J = "internal.injectHtml";
  var CH = {};
  var DH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Bc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) I(g[k]);
              g.push = function (m) {
                I(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) I(g[k]);
              e[f] = null;
            },
            b
          ))
      : Bc(a, c, d, b);
  };
  function EH(a, b, c, d) {
    if (!fo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      N(this, "inject_script", a);
      var e = this.F;
      DH(
        a,
        void 0,
        function () {
          b && b.fb(e);
        },
        function () {
          c && c.fb(e);
        },
        CH,
        d
      );
    }
  }
  var FH = { dl: 1, id: 1 },
    GH = {};
  function HH(a, b, c, d) {}
  EH.T = "injectScript";
  HH.J = "internal.injectScript";
  function IH(a) {
    var b = !0;
    return b;
  }
  IH.T = "isConsentGranted";
  function JH() {
    return Dl();
  }
  JH.J = "internal.isDmaRegion";
  function KH(a) {
    var b = !1;
    return b;
  }
  KH.J = "internal.isEntityInfrastructure";
  function LH() {
    var a = Yg(function (b) {
      Hz(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function MH(a) {
    var b = void 0;
    return fd(b);
  }
  MH.J = "internal.legacyParseUrl";
  function NH() {
    return !1;
  }
  var OH = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function PH() {
    try {
      N(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = J(a[b], this.F);
    console.log.apply(console, a);
  }
  PH.T = "logToConsole";
  function QH(a, b) {}
  QH.J = "internal.mergeRemoteConfig";
  function RH(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return fd(d);
  }
  RH.J = "internal.parseCookieValuesFromString";
  function SH(a) {
    var b = void 0;
    return b;
  }
  SH.T = "parseUrl";
  function TH(a) {}
  TH.J = "internal.processAsNewEvent";
  function UH(a, b, c) {
    var d;
    return d;
  }
  UH.J = "internal.pushToDataLayer";
  function VH(a) {
    var b = !1;
    K(this.getName(), ["permission:!string"], [a]);
    for (
      var c = Array.prototype.slice.call(arguments, 0), d = 0;
      d < c.length;
      ++d
    )
      c[d] = J(c[d], this.F, 1);
    c.unshift(this);
    try {
      N.apply(null, c), (b = !0);
    } catch (e) {
      return !1;
    }
    return b;
  }
  VH.T = "queryPermission";
  function WH() {
    var a = "";
    return a;
  }
  WH.T = "readCharacterSet";
  function XH() {
    return hi.Ya;
  }
  XH.J = "internal.readDataLayerName";
  function YH() {
    var a = "";
    return a;
  }
  YH.T = "readTitle";
  function ZH(a, b) {
    var c = this;
  }
  ZH.J = "internal.registerCcdCallback";
  function $H(a) {
    return !0;
  }
  $H.J = "internal.registerDestination";
  var aI = ["config", "event", "get", "set"];
  function bI(a, b, c) {}
  bI.J = "internal.registerGtagCommandListener";
  function cI(a, b) {
    var c = !1;
    return c;
  }
  cI.J = "internal.removeDataLayerEventListener";
  function dI(a, b) {}
  dI.J = "internal.removeFormData";
  function eI() {}
  eI.T = "resetDataLayer";
  function fI(a, b, c, d) {}
  fI.J = "internal.sendGtagEvent";
  function gI(a, b, c) {}
  gI.T = "sendPixel";
  function hI(a, b) {}
  hI.J = "internal.setAnchorHref";
  function iI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    K(
      this.getName(),
      ["name:!string", "value:?string", "options:?PixieMap", "encode:?boolean"],
      arguments
    );
    var g = c ? J(c, this.F) : void 0,
      k = {};
    k.encode = !!d;
    g &&
      ((k.path = g.path),
      (k.domain = g.domain),
      (k.expires = g.expires),
      (k.Em = g.samesite),
      (k.fm = g["max-age"]),
      (k.Fm = g.secure));
    f =
      yo(a, b, k, function (m, n) {
        N(e, "set_cookies", m, n);
      }) === 0;
    return f;
  }
  iI.T = "setCookie";
  function jI(a) {}
  jI.J = "internal.setCorePlatformServices";
  function kI(a, b) {}
  kI.J = "internal.setDataLayerValue";
  function lI(a) {}
  lI.T = "setDefaultConsentState";
  function mI(a, b) {}
  mI.J = "internal.setDelegatedConsentType";
  function nI(a, b) {}
  nI.J = "internal.setFormAction";
  function oI(a, b, c) {}
  oI.J = "internal.setInCrossContainerData";
  function pI(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    N(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Kb(d, [G, H]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = J(b, this.F, 2)), !0;
    return !1;
  }
  pI.T = "setInWindow";
  function qI(a, b, c) {}
  qI.J = "internal.setProductSettingsParameter";
  function rI(a, b, c) {}
  rI.J = "internal.setRemoteConfigParameter";
  function sI(a, b, c, d) {
    var e = this;
  }
  sI.T = "sha256";
  function tI(a, b, c) {}
  tI.J = "internal.sortRemoteConfigParameters";
  function uI(a, b) {
    var c = void 0;
    return c;
  }
  uI.J = "internal.subscribeToCrossContainerData";
  var vI = {},
    wI = {};
  vI.getItem = function (a) {
    var b = null;
    return b;
  };
  vI.setItem = function (a, b) {};
  vI.removeItem = function (a) {};
  vI.clear = function () {};
  vI.T = "templateStorage";
  function xI(a, b) {
    var c = !1;
    return c;
  }
  xI.J = "internal.testRegex";
  function yI(a) {
    var b;
    return b;
  }
  function zI(a) {
    var b;
    return b;
  }
  zI.J = "internal.unsiloId";
  function AI(a, b) {
    var c;
    return c;
  }
  AI.J = "internal.unsubscribeFromCrossContainerData";
  function BI(a) {}
  BI.T = "updateConsentState";
  var CI;
  function DI(a, b, c) {
    CI = CI || new ih();
    CI.add(a, b, c);
  }
  function EI(a, b) {
    var c = (CI = CI || new ih());
    if (c.D.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.j.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.D[a] = qb(b) ? Fg(a, b) : Gg(a, b);
  }
  function FI() {
    return function (a) {
      var b;
      var c = CI;
      if (c.j.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.D.hasOwnProperty(a))) {
          var e = !1,
            f = this.F.j;
          if (f) {
            var g = f.wb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var GI = function () {
    var a = function (c) {
        return EI(c.J, c);
      },
      b = function (c) {
        return DI(c.T, c);
      };
    b(Bz);
    b(Iz);
    b(WA);
    b(YA);
    b(ZA);
    b(dB);
    b(fB);
    b(iB);
    b(kB);
    b(yE);
    b(zE);
    b(OE);
    b(PE);
    b(QE);
    b(TE);
    b(wH);
    b(xH);
    b(EH);
    b(IH);
    b(PH);
    b(SH);
    b(VH);
    b(WH);
    b(YH);
    b(gI);
    b(iI);
    b(lI);
    b(pI);
    b(sI);
    b(vI);
    b(BI);
    b(LH());
    DI("Math", Lg());
    DI("Object", gh);
    DI("TestHelper", kh());
    DI("assertApi", Hg);
    DI("assertThat", Ig);
    DI("decodeUri", Mg);
    DI("decodeUriComponent", Ng);
    DI("encodeUri", Og);
    DI("encodeUriComponent", Pg);
    DI("fail", Ug);
    DI("generateRandom", Vg);
    DI("getTimestamp", Wg);
    DI("getTimestampMillis", Wg);
    DI("getType", Xg);
    DI("makeInteger", Zg);
    DI("makeNumber", $g);
    DI("makeString", ah);
    DI("makeTableMap", bh);
    DI("mock", eh);
    DI("fromBase64", wE, !("atob" in G));
    DI("localStorage", OH, !NH());
    DI("toBase64", yI, !("btoa" in G));
    a(Ez);
    a(Zz);
    a(kA);
    a(rA);
    a(wA);
    a(LA);
    a(UA);
    a(XA);
    a($A);
    a(aB);
    a(bB);
    a(cB);
    a(eB);
    a(gB);
    a(hB);
    a(jB);
    a(lB);
    a(nB);
    a(oB);
    a(pB);
    a(qB);
    a(uB);
    a(CB);
    a(DB);
    a(OB);
    a(TB);
    a(YB);
    a(gC);
    a(lC);
    a(yC);
    a(AC);
    a(OC);
    a(PC);
    a(RC);
    a(uE);
    a(vE);
    a(AE);
    a(BE);
    a(CE);
    a(DE);
    a(EE);
    a(FE);
    a(GE);
    a(HE);
    a(IE);
    a(JE);
    a(LE);
    a(ME);
    a(NE);
    a(RE);
    a(SE);
    a(tH);
    a(yH);
    a(HH);
    a(JH);
    a(KH);
    a(MH);
    a(JA);
    a(QH);
    a(RH);
    a(TH);
    a(UH);
    a(XH);
    a(ZH);
    a($H);
    a(bI);
    a(cI);
    a(dI);
    a(fI);
    a(hI);
    a(jI);
    a(kI);
    a(mI);
    a(nI);
    a(oI);
    a(qI);
    a(rI);
    a(tI);
    a(uI);
    a(xI);
    a(zI);
    a(AI);
    EI("internal.CrossContainerSchema", mB());
    EI("internal.GtagSchema", uH());
    DI("mockObject", fh);
    return FI();
  };
  var zz;
  function HI() {
    zz.j.j.K = function (a, b, c) {
      ii.SANDBOXED_JS_SEMAPHORE = ii.SANDBOXED_JS_SEMAPHORE || 0;
      ii.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        ii.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function II(a) {
    a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          xi[e] = xi[e] || [];
          xi[e].push(b);
        }
      });
  }
  var JI = encodeURI,
    Y = encodeURIComponent,
    KI = Array.isArray,
    LI = function (a, b, c) {
      Ec(a, b, c);
    },
    MI = function (a, b) {
      if (!a) return !1;
      var c = bj(U(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          f > 0 && e.charAt(0) != "." && (f--, (e = "." + e));
          if (f >= 0 && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    NI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var WI = G.clearTimeout,
    XI = G.setTimeout,
    YI = function (a, b, c) {
      if (fo()) {
        b && I(b);
      } else return Bc(a, b, c);
    },
    ZI = function () {
      return G.location.href;
    },
    $I = function (a, b) {
      return Hi(a, b || 2);
    },
    aJ = function (a, b) {
      G[a] = b;
    },
    bJ = function (a, b, c) {
      b && (G[a] === void 0 || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    cJ = function (a, b) {
      if (fo()) {
        b && I(b);
      } else Dc(a, b);
    };

  var dJ = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = $I("gtm.referrer", 1) || H.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? bj(
              U(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : ej(U(String(b)))
        : String(b);
    }),
    (Z.__f.C = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = $I("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return ro(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Z.__k.C = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.C = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.C = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : $I("gtm.url", 1)) || ZI();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return ej(U(String(c)));
        var e = U(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = bj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = bj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = $I(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.C = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.get_referrer = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_referrer = b;
        Z.__get_referrer.C = "get_referrer";
        Z.__get_referrer.isVendorTemplate = !0;
        Z.__get_referrer.priorityOverride = 0;
        Z.__get_referrer.isInfrastructure = !1;
        Z.__get_referrer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!l(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!l(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.C = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && jg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Z.__gclidw = b;
        Z.__gclidw.C = "gclidw";
        Z.__gclidw.isVendorTemplate = !0;
        Z.__gclidw.priorityOverride = 100;
        Z.__gclidw.isInfrastructure = !1;
        Z.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = $I(P.g.fa);
        g = g != void 0 && g !== !1;
        if (T(18)) {
          var k = {},
            m =
              ((k[P.g.Na] = e),
              (k[P.g.Eb] = c),
              (k[P.g.Va] = d),
              (k[P.g.ab] = f),
              (k[P.g.fa] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[P.g.Xa] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[P.g.sa] =
              ((n[P.g.Cc] = b.vtp_acceptIncoming),
              (n[P.g.W] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[P.g.Ib] = b.vtp_urlPosition),
              (n[P.g.sb] = b.vtp_formDecoration),
              n);
          }
          var p = Zm(
            Ym(
              Xm(
                Wm(
                  Pm(new Om(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          VC("", P.g.ba, Date.now(), p);
        } else {
          I(b.vtp_gtmOnSuccess);
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || kp()) mq(a, q), xp(q);
          jq(q);
          sq(["aw", "dc"], q);
          Qq(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            qq(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            yp(qp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            yp("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !lj() && T(77) && rt(void 0, Math.round(Db()));
          Hr({
            m: Zm(new Om(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Ug: !1,
            xd: g,
            jc: q,
            Ef: !0,
          });
          b.vtp_enableUrlPassthrough && vq(["aw", "dc", "gb"]);
          xq(["aw", "dc", "gb"]);
        }
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (u, v) {
            m[u] = m[u] || v;
          },
          p = function (u, v, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < u.length; x = { Je: void 0 }, y++)
                (x.Je = {}),
                  z(
                    u[y],
                    (function (A) {
                      return function (D, E) {
                        w && D === "id"
                          ? (A.Je.promotion_id = E)
                          : w && D === "name"
                          ? (A.Je.promotion_name = E)
                          : (A.Je[D] = E);
                      };
                    })(x)
                  ),
                  m.items.push(x.Je);
            }
            if (v)
              for (var B in v) d.hasOwnProperty(B) ? n(d[B], v[B]) : n(B, v[B]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Xa(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Xa(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === P.g.hb
                ? p(q.impressions, null)
                : t === "promoClick" && g === P.g.Cb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === P.g.ib
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          h(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.C = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (Xh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = NI(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = NI(f.vtp_eventParameters, "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[P.g.Ea] = v);
          if (m.hasOwnProperty(P.g.cb) || f.vtp_userProperties) {
            var w = m[P.g.cb] || {};
            h(NI(f.vtp_userProperties, "name", "value"), w);
            m[P.g.cb] = w;
          }
          var x = {
            originatingEntity: xw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, Yh, function (A) {
            return zb(A);
          });
          a(m, $h, function (A) {
            return Number(A);
          });
          var B = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Fx(Dx(g, k, m), B, x);
          I(f.vtp_gtmOnSuccess);
        } else I(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.C = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!l(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Ag(U(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.sp = ["google"]),
    (Z.__sp = function (a) {
      var b,
        c = {};
      a.vtp_customParamsFormat == "DATA_LAYER" && Xa(a.vtp_dataLayerVariable)
        ? (c = h(a.vtp_dataLayerVariable))
        : a.vtp_customParamsFormat == "USER_SPECIFIED" &&
          (c = NI(a.vtp_customParams, "key", "value"));
      b = c;
      b[P.g.Ue] = !0;
      var d =
        !a.hasOwnProperty("vtp_enableConversionLinker") ||
        !!a.vtp_enableConversionLinker;
      b[P.g.Za] = a.vtp_conversionCookiePrefix;
      b[P.g.ra] = d;
      b[P.g.fa] = $I(P.g.fa);
      a.vtp_enableDynamicRemarketing &&
        (a.vtp_eventValue && (b[P.g.na] = a.vtp_eventValue),
        a.vtp_eventItems && (b[P.g.da] = a.vtp_eventItems));
      a.vtp_rdp && (b[P.g.Xb] = !0);
      a.vtp_userId && (b[P.g.Ba] = a.vtp_userId);
      (b[P.g.Ca] = $I(P.g.Ca)),
        (b[P.g.ka] = $I(P.g.ka)),
        (b[P.g.Tb] = $I(P.g.Tb)),
        (b[P.g.Ja] = $I(P.g.Ja));
      var e = "AW-" + a.vtp_conversionId,
        f = e + (a.vtp_conversionLabel ? "/" + a.vtp_conversionLabel : "");
      pw(e, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var g = {},
        k = {
          eventMetadata: ((g.hit_type_override = "remarketing"), g),
          noGtmEvent: !0,
          isGtmEvent: !0,
          onSuccess: a.vtp_gtmOnSuccess,
          onFailure: a.vtp_gtmOnFailure,
        };
      Fx(Dx(Ej(f), a.vtp_eventName || "", b), a.vtp_gtmEventId, k);
    }),
    (Z.__sp.C = "sp"),
    (Z.__sp.isVendorTemplate = !0),
    (Z.__sp.priorityOverride = 0),
    (Z.__sp.isInfrastructure = !1),
    (Z.__sp.runInSiloedMode = !1);

  (Z.securityGroups.ua = ["google"]),
    (function () {
      function a(n, p) {
        for (var q in n)
          if (!k[q] && n.hasOwnProperty(q)) {
            var r = g[q] ? zb(n[q]) : n[q];
            q != "anonymizeIp" || r || (r = void 0);
            p[q] = r;
          }
      }
      function b(n) {
        var p = {};
        n.vtp_gaSettings &&
          h(NI(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), p);
        h(NI(n.vtp_fieldsToSet, "fieldName", "value"), p);
        zb(p.urlPassthrough) && (p._useUp = !0);
        n.vtp_transportUrl && (p._x_19 = n.vtp_transportUrl);
        return p;
      }
      function c(n, p) {
        return p === void 0 ? p : n(p);
      }
      function d(n, p, q) {}
      function e(n, p) {
        if (
          !f &&
          (!lj() ||
            !p._x_19 ||
            n.vtp_useDebugVersion ||
            n.vtp_useInternalVersion)
        ) {
          var q = n.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          n.vtp_useInternalVersion &&
            !n.vtp_useDebugVersion &&
            (q = "internal/" + q);
          f = !0;
          var r = n.vtp_gtmOnFailure,
            t = lj() ? kj(p._x_19, "/analytics.js") : void 0,
            u = Ir(
              "https:",
              "http:",
              "//www.google-analytics.com/" + q,
              p && !!p.forceSSL
            );
          YI(
            q === "analytics.js" && t ? t : u,
            function () {
              var v = Hw();
              (v && v.loaded) || r();
            },
            r
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        k = { urlPassthrough: !0 },
        m = function (n) {
          function p() {
            if (
              n.vtp_doubleClick ||
              n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES"
            )
              w.displayfeatures = !0;
          }
          var q = {},
            r = {},
            t = {};
          if (n.vtp_gaSettings) {
            var u = n.vtp_gaSettings;
            h(NI(u.vtp_contentGroup, "index", "group"), q);
            h(NI(u.vtp_dimension, "index", "dimension"), r);
            h(NI(u.vtp_metric, "index", "metric"), t);
            var v = h(u);
            v.vtp_fieldsToSet = void 0;
            v.vtp_contentGroup = void 0;
            v.vtp_dimension = void 0;
            v.vtp_metric = void 0;
            n = h(n, v);
          }
          h(NI(n.vtp_contentGroup, "index", "group"), q);
          h(NI(n.vtp_dimension, "index", "dimension"), r);
          h(NI(n.vtp_metric, "index", "metric"), t);
          var w = b(n),
            x = String(n.vtp_trackingId || ""),
            y = "",
            B = "",
            A = "";
          n.vtp_setTrackerName && typeof n.vtp_trackerName == "string"
            ? n.vtp_trackerName !== "" &&
              ((A = n.vtp_trackerName), (B = A + "."))
            : ((A = "gtm" + yi()), (B = A + "."));
          var D = function (ma, ia) {
            for (var za in ia) ia.hasOwnProperty(za) && (w[ma + za] = ia[za]);
          };
          D("contentGroup", q);
          D("dimension", r);
          D("metric", t);
          n.vtp_enableEcommerce &&
            ((y = n.vtp_gtmCachedValues.event),
            (w.gtmEcommerceData = d(n, w, y)));
          if (n.vtp_trackType === "TRACK_EVENT")
            (y = "track_event"),
              p(),
              (w.eventCategory = String(n.vtp_eventCategory)),
              (w.eventAction = String(n.vtp_eventAction)),
              (w.eventLabel = c(String, n.vtp_eventLabel)),
              (w.value = c(yb, n.vtp_eventValue));
          else if (n.vtp_trackType == "TRACK_PAGEVIEW") {
            if (
              ((y = P.g.Sb),
              p(),
              n.vtp_advertisingFeaturesType ==
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" &&
                (w.remarketingLists = !0),
              n.vtp_autoLinkDomains)
            ) {
              var E = {};
              E[P.g.W] = n.vtp_autoLinkDomains;
              E.use_anchor = n.vtp_useHashAutoLink;
              E[P.g.sb] = n.vtp_decorateFormsAutoLink;
              w[P.g.sa] = E;
            }
          } else
            n.vtp_trackType === "TRACK_SOCIAL"
              ? ((y = "track_social"),
                (w.socialNetwork = String(n.vtp_socialNetwork)),
                (w.socialAction = String(n.vtp_socialAction)),
                (w.socialTarget = String(n.vtp_socialActionTarget)))
              : n.vtp_trackType == "TRACK_TIMING" &&
                ((y = "timing_complete"),
                (w.eventCategory = String(n.vtp_timingCategory)),
                (w.timingVar = String(n.vtp_timingVar)),
                (w.value = yb(n.vtp_timingValue)),
                (w.eventLabel = c(String, n.vtp_timingLabel)));
          n.vtp_enableRecaptcha && (w.enableRecaptcha = !0);
          n.vtp_enableLinkId && (w.enableLinkId = !0);
          var C = {};
          a(w, C);
          w.name || (C.gtmTrackerName = A);
          C.gaFunctionName = n.vtp_functionName;
          n.vtp_nonInteraction !== void 0 &&
            (C.nonInteraction = n.vtp_nonInteraction);
          var F = Zm(
            Ym(
              Xm(
                Wm(
                  Pm(new Om(n.vtp_gtmEventId, n.vtp_gtmPriorityId), C),
                  n.vtp_gtmOnSuccess
                ),
                n.vtp_gtmOnFailure
              ),
              !0
            )
          );
          n.vtp_useDebugVersion &&
            n.vtp_useInternalVersion &&
            (F.eventMetadata.suppress_script_load = !0);
          TD(x, y, Date.now(), F);
          var M = Iw(n.vtp_functionName);
          if (qb(M)) {
            var L = function (ma) {
              var ia = [].slice.call(arguments, 0);
              ia[0] = B + ia[0];
              M.apply(window, ia);
            };
            if (n.vtp_trackType == "TRACK_TRANSACTION") {
            } else if (n.vtp_trackType == "DECORATE_LINK") {
            } else if (n.vtp_trackType == "DECORATE_FORM") {
            } else if (n.vtp_trackType == "TRACK_DATA") {
            }
            e(n, w);
          } else I(n.vtp_gtmOnFailure);
        };
      Z.__ua = m;
      Z.__ua.C = "ua";
      Z.__ua.isVendorTemplate = !0;
      Z.__ua.priorityOverride = 0;
      Z.__ua.isInfrastructure = !1;
      Z.__ua.runInSiloedMode = !1;
    })();
  (Z.securityGroups.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.C = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
        Z.__get_url.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urlParts === "any" ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && b.vtp_queriesAllowed !== "any" ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (g) {
              if (!l(g)) throw e(f, {}, "URL component must be a string.");
              if (c && c.indexOf(g) < 0)
                throw e(f, {}, "Prohibited URL component: " + g);
              if (g === "query" && d) {
                if (!k)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!l(k)) throw e(f, {}, "Query key must be a string.");
                if (d.indexOf(k) < 0)
                  throw e(f, {}, "Prohibited query key: " + k);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.C = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Ag(U(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = h(a),
        c = b;
      c[Ie.oa] = null;
      c[Ie.Jg] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      e !== void 0 &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.C = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = d === "DATA_LAYER" ? $I(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.C = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
        Z.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = NI(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[P.g.na] = b.vtp_conversionValue || 0),
            (f[P.g.za] = b.vtp_currencyCode),
            (f[P.g.Aa] = b.vtp_orderId),
            (f[P.g.Za] = b.vtp_conversionCookiePrefix),
            (f[P.g.ra] = c),
            (f[P.g.Gd] = d),
            (f[P.g.fa] = $I(P.g.fa)),
            (f[P.g.la] = $I("developer_id")),
            f);
        (g[P.g.Ca] = $I(P.g.Ca)),
          (g[P.g.ka] = $I(P.g.ka)),
          (g[P.g.Tb] = $I(P.g.Tb)),
          (g[P.g.Ja] = $I(P.g.Ja));
        b.vtp_rdp && (g[P.g.Xb] = !0);
        if (b.vtp_enableCustomParams)
          for (var k in e) ei.hasOwnProperty(k) || (g[k] = e[k]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(P.g.Kd, "vtp_awMerchantId", "aw_merchant_id");
          m(P.g.Id, "vtp_awFeedCountry", "aw_feed_country");
          m(P.g.Jd, "vtp_awFeedLanguage", "aw_feed_language");
          m(P.g.Hd, "vtp_discount", "discount");
          m(P.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[P.g.ld] = b.vtp_deliveryPostalCode),
          (g[P.g.Rd] = b.vtp_estimatedDeliveryDate),
          (g[P.g.wc] = b.vtp_deliveryCountry),
          (g[P.g.Zc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[P.g.Lb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(P.g.fd, "vtp_awNewCustomer", "new_customer");
          n(P.g.Ld, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[P.g.Qd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        pw(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Fx(Dx(Ej(v), P.g.Ia, g), b.vtp_gtmEventId, x);
      });
    })();

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.C = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.C = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (e.length > 0) {
              var k = e.shift(),
                m = a(d, e, f, g);
              if (
                String(k.nodeName).toUpperCase() == "SCRIPT" &&
                k.type == "text/gtmscript"
              ) {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = k.id;
                n.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (n.charset = k.charset);
                var p = k.getAttribute("data-gtmsrc");
                p && ((n.src = p), xc(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                k.innerHTML &&
                k.innerHTML.toLowerCase().indexOf("<script") >= 0
              ) {
                for (var q = []; k.firstChild; )
                  q.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, q, m, g)();
              } else d.insertBefore(k, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = mz(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Fj,
            k = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, k, e) : a(H.body, Jc(g), k, e)();
        } else
          XI(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.C = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  (Z.securityGroups.set_cookies = ["google"]),
    (function () {
      function a(c, d, e) {
        var f = c.name;
        if (f !== "*" && f !== d) return !1;
        var g = c.domain;
        if (g !== "*") {
          var k = (e || {}).domain;
          if (g === "") {
            if (k != null && k !== "") return !1;
          } else if (g !== k) return !1;
        }
        var m = c.path;
        if (m !== "*") {
          var n = (e || {}).path;
          if (m === "") {
            if (n != null && n !== "") return !1;
          } else if (m !== n) return !1;
        }
        switch (c.secure) {
          case "any":
            break;
          case "secure":
            if (!(e || {}).secure) return !1;
            break;
          case "non_secure":
            if ((e || {}).secure) return !1;
            break;
          default:
            throw Error(
              "Unexpected cookie secure configuration setting: " + c.secure
            );
        }
        var p = (e || {}).expires !== void 0 || (e || {})["max-age"] !== void 0;
        switch (c.session) {
          case "any":
            break;
          case "session":
            if (p) return !1;
            break;
          case "non_session":
            if (!p) return !1;
            break;
          default:
            throw Error(
              "Unexpected cookie session configuration value: " + c.session
            );
        }
        return !0;
      }
      function b(c, d, e) {
        e = e === void 0 ? {} : e;
        return { name: d, options: e };
      }
      (function (c) {
        Z.__set_cookies = c;
        Z.__set_cookies.C = "set_cookies";
        Z.__set_cookies.isVendorTemplate = !0;
        Z.__set_cookies.priorityOverride = 0;
        Z.__set_cookies.isInfrastructure = !1;
        Z.__set_cookies.runInSiloedMode = !1;
      })(function (c) {
        var d = c.vtp_allowedCookies || [],
          e = c.vtp_createPermissionError;
        return {
          assert: function (f, g, k) {
            if (!l(g)) throw e(f, {}, "Cookie name must be a string.");
            for (var m = 0; m < d.length; ++m) if (a(d[m], g, k)) return;
            throw e(
              f,
              {},
              "Prohibited from setting cookie " +
                g +
                " with options: " +
                JSON.stringify(k)
            );
          },
          N: b,
        };
      });
    })();

  var eJ = {};
  (eJ.onHtmlSuccess = nz(!0)), (eJ.onHtmlFailure = nz(!1));
  eJ.dataLayer = Ii;
  eJ.callback = function (a) {
    wi.hasOwnProperty(a) && qb(wi[a]) && wi[a]();
    delete wi[a];
  };
  eJ.bootstrap = 0;
  eJ._spx = !1;
  function fJ() {
    ii[Hj()] = ii[Hj()] || eJ;
    Sj();
    Wj() ||
      z(Xj(), function (d, e) {
        pw(d, e.transportUrl, e.context);
        O(92);
      });
    Gb(xi, Z.securityGroups);
    var a = Lj(Mj()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || O(142);
    jz(),
      nf({
        Vl: function (d) {
          return d === hz;
        },
        ml: function (d) {
          return new kz(d);
        },
        Wl: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        wm: function (d) {
          var e;
          if (d === hz) e = d;
          else {
            var f = yi();
            iz[f] = d;
            e = 'google_tag_manager["rm"]["' + Jj() + '"](' + f + ")";
          }
          return e;
        },
      });
    pf = Gf;
  }
  (function (a) {
    function b() {
      n = H.documentElement.getAttribute("data-tag-assistant-present");
      yy(n) && (m = k.Vi);
    }
    function c() {
      m && uc ? g(m) : a();
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (H.referrer) {
        var e = U(H.referrer);
        d = dj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = ro("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((G["__TAGGY_INSTALLED"] = !0),
        Bc("https://cct.google/taggy/agent.js"));
    }
    var g = function (u) {
        var v = "GTM",
          w = "GTM";
        ni && ((v = "OGT"), (w = "GTAG"));
        var x = G["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (G["google.tagmanager.debugui2.queue"] = x),
          Bc(
            "https://" +
              hi.Ed +
              "/debug/bootstrap?id=" +
              Mf.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              ho()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: uc,
            containerProduct: v,
            debug: !1,
            id: Mf.ctid,
            targetRef: { ctid: Mf.ctid, isDestination: Aj.fe },
            aliases: Dj(),
            destinations: Gj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        hi.lk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Fk: 1, Xi: 2, mj: 3, ai: 4, Vi: 5 };
    k[k.Fk] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Xi] = "GTM_DEBUG_PARAM";
    k[k.mj] = "REFERRER";
    k[k.ai] = "COOKIE";
    k[k.Vi] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = bj(G.location, "query", !1, void 0, "gtm_debug");
    yy(p) && (m = k.Xi);
    if (!m && H.referrer) {
      var q = U(H.referrer);
      dj(q, "host") === "tagassistant.google.com" && (m = k.mj);
    }
    if (!m) {
      var r = ro("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.ai);
    }
    m || b();
    if (!m && zy(n)) {
      var t = !1;
      Fc(
        H,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      G.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      Qj();
      if (T(65)) {
      }
      Nl().D();
      Kn();
      lm();
      var a = Jj();
      if (yj().canonical[a]) {
        var b = ii.zones;
        b && b.unregisterChild(Cj());
        bw().removeExternalRestrictions(Jj());
      } else {
        Kt();
        a: {
        }
        Ai.j = "0";
        Ai.D = Ai.H;
        Ai.K = "";
        Ai.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Ai.O = "ad_storage|analytics_storage|ad_user_data";
        Ai.Pa = "";
        mw();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          ef.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) hf.push(f[g]);
        for (var k = c.predicates || [], m = 0; m < k.length; m++)
          gf.push(k[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            (u !== "if" && u !== "unless") || of(r[u]);
          }
          ff.push(r);
        }
        kf = Z;
        lf = pz;
        If = new Pf();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          zz = new Ae();
          HI();
          df = yz();
          var B = zz,
            A = GI(),
            D = new Yc("require", A);
          D.Mb();
          B.j.j.set("require", D);
          for (var E = [], C = 0; C < x.length; C++) {
            var F = x[C];
            if (!Array.isArray(F) || F.length < 3) {
              if (F.length === 0) continue;
              break a;
            }
            y && y[C] && y[C].length && zf(F, y[C]);
            try {
              zz.execute(F), T(74) && vj && F[0] === 50 && E.push(F[1]);
            } catch (Da) {}
          }
          T(74) && (qf = E);
        }
        if (v && v.length)
          for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
            var R = v[L].replace(/^_*/, "");
            xi[R] = M;
          }
        II(w);
        fJ();
        if (!ri)
          for (
            var V = Dl() ? Ci(Ai.O) : Ci(Ai.Z), ba = 0;
            ba < $l.length;
            ba++
          ) {
            var aa = $l[ba],
              Q = aa,
              oa = V[aa] ? "granted" : "denied";
            Il().implicit(Q, oa);
          }
        xy();
        qw = !1;
        rw = 0;
        if (
          (H.readyState === "interactive" && !H.createEventObject) ||
          H.readyState === "complete"
        )
          tw();
        else {
          Fc(H, "DOMContentLoaded", tw);
          Fc(H, "readystatechange", tw);
          if (H.createEventObject && H.documentElement.doScroll) {
            var ma = !0;
            try {
              ma = !G.frameElement;
            } catch (Da) {}
            ma && uw();
          }
          Fc(G, "load", tw);
        }
        cy = !1;
        H.readyState === "complete" ? ey() : Fc(G, "load", ey);
        vj &&
          (ck(rk),
          G.setInterval(qk, 864e5),
          ck(sz),
          ck(Uw),
          ck(Pu),
          ck(bn),
          ck(ex),
          ck(wt),
          T(74) && (ck(Zw), ck($w), ck(ax)),
          T(61) && (ck(tz), ck(vz)));
        if (wj) {
          Fk();
          Im();
          tl();
          Ly();
          T(43) || bk.push(xl);
          T(43) || bk.push(zx);
          if (T(43)) {
            var za = Dy();
            za && xk("pcid", za);
          } else bk.push(Ey);
          T(28) &&
            (T(43) ? xk("bt", String(Ai.H ? 2 : pi ? 1 : 0)) : bk.push(By));
        }
        fz();
        yl(1);
        HA();
        vi = Db();
        eJ.bootstrap = vi;
        if (T(65)) {
        }
      }
    } catch (Da) {
      if ((yl(4), vj)) {
        var Ma = kk(!1, !0, !0);
        Ec(Ma);
      }
    }
  });
})();
