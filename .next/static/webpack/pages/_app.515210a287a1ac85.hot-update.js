"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"./node_modules/@wagmi/core/dist/index.js\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core/chains */ \"./node_modules/@wagmi/core/dist/chains.js\");\n/* harmony import */ var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core/providers/public */ \"./node_modules/@wagmi/core/dist/providers/public.js\");\n/* harmony import */ var _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/infura */ \"./node_modules/@wagmi/core/dist/providers/infura.js\");\n/* harmony import */ var _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/core/connectors/injected */ \"./node_modules/@wagmi/core/dist/connectors/injected.js\");\n/* harmony import */ var _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/connectors/coinbaseWallet */ \"./node_modules/@wagmi/core/dist/connectors/coinbaseWallet.js\");\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const { chains , provider  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.configureChains)(// what about dev and mainnet environments?\n    [\n        _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n        _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygonMumbai\n    ], [\n        (0,_wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__.infuraProvider)({\n            apiKey: \"008b21b5a8434832b85c0b0056c80c02\",\n            priority: 0,\n            stallTimeout: 1000\n        }),\n        (0,_wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)({\n            priority: 1\n        })\n    ]);\n    const coinbaseConnector = new _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__.CoinbaseWalletConnector({\n        options: {\n            appName: \"TheClassroom\",\n            jsonRpcUrl: \"https://eth-mainnet.alchemyapi.io/v2/\".concat(\"qDySFLl1Qjz8TO4sYO16cguTRQqUxt6s\")\n        }\n    });\n    const injectedConnector = new _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_7__.InjectedConnector({\n        chains\n    });\n    const wagmiClient = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n        autoConnect: true,\n        connectors: [\n            injectedConnector\n        ],\n        provider\n    });\n    console.log({\n        chains,\n        provider\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/_app.tsx\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRThCO0FBQ0E7QUFDRTtBQUNBO0FBQ007QUFDWTtBQUVqRSxTQUFTUSxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7SUFDMUIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHWiw0REFBZUEsQ0FDMUMsMkNBQTJDO0lBQzNDO1FBQUNFLHVEQUFPQTtRQUFFQyw2REFBYUE7S0FBQyxFQUN4QjtRQUNFRSw0RUFBY0EsQ0FBQztZQUNiUSxRQUFRQyxrQ0FBc0M7WUFDOUNHLFVBQVU7WUFDVkMsY0FBYztRQUNoQjtRQUNBZCw0RUFBY0EsQ0FBQztZQUFFYSxVQUFVO1FBQUU7S0FDOUI7SUFHSCxNQUFNRSxvQkFBb0IsSUFBSVosMEZBQXVCQSxDQUFDO1FBQ3BEYSxTQUFTO1lBQ1BDLFNBQVM7WUFDVEMsWUFBWSx3Q0FBdUYsT0FBL0NSLGtDQUE4QztRQUNwRztJQUNGO0lBRUEsTUFBTVUsb0JBQW9CLElBQUlsQiw4RUFBaUJBLENBQUM7UUFBRUs7SUFBTztJQUV6RCxNQUFNYyxjQUFjeEIseURBQVlBLENBQUM7UUFDL0J5QixhQUFhLElBQUk7UUFDakJDLFlBQVk7WUFBQ0g7U0FBa0I7UUFDL0JaO0lBQ0Y7SUFFQWdCLFFBQVFDLEdBQUcsQ0FBQztRQUFFbEI7UUFBUUM7SUFBUztJQUUvQixxQkFBTyw4REFBQ0g7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQztLQWhDdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAd2FnbWkvY29yZVwiO1xuaW1wb3J0IHsgcG9seWdvbiwgcG9seWdvbk11bWJhaSB9IGZyb20gXCJAd2FnbWkvY29yZS9jaGFpbnNcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIkB3YWdtaS9jb3JlL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIkB3YWdtaS9jb3JlL3Byb3ZpZGVycy9pbmZ1cmFcIjtcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3YWdtaS9jb3JlL2Nvbm5lY3RvcnMvaW5qZWN0ZWRcIjtcbmltcG9ydCB7IENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIH0gZnJvbSBcIkB3YWdtaS9jb3JlL2Nvbm5lY3RvcnMvY29pbmJhc2VXYWxsZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gICAgLy8gd2hhdCBhYm91dCBkZXYgYW5kIG1haW5uZXQgZW52aXJvbm1lbnRzP1xuICAgIFtwb2x5Z29uLCBwb2x5Z29uTXVtYmFpXSxcbiAgICBbXG4gICAgICBpbmZ1cmFQcm92aWRlcih7XG4gICAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkgYXMgc3RyaW5nLFxuICAgICAgICBwcmlvcml0eTogMCxcbiAgICAgICAgc3RhbGxUaW1lb3V0OiAxXzAwMCxcbiAgICAgIH0pLFxuICAgICAgcHVibGljUHJvdmlkZXIoeyBwcmlvcml0eTogMSB9KSxcbiAgICBdXG4gICk7XG5cbiAgY29uc3QgY29pbmJhc2VDb25uZWN0b3IgPSBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGFwcE5hbWU6IFwiVGhlQ2xhc3Nyb29tXCIsXG4gICAgICBqc29uUnBjVXJsOiBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9NVU1CQUlfQVBJX0tFWX1gLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGluamVjdGVkQ29ubmVjdG9yID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgY2hhaW5zIH0pO1xuXG4gIGNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICBjb25uZWN0b3JzOiBbaW5qZWN0ZWRDb25uZWN0b3JdLFxuICAgIHByb3ZpZGVyLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh7IGNoYWlucywgcHJvdmlkZXIgfSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwicG9seWdvbiIsInBvbHlnb25NdW1iYWkiLCJwdWJsaWNQcm92aWRlciIsImluZnVyYVByb3ZpZGVyIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNoYWlucyIsInByb3ZpZGVyIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZIiwicHJpb3JpdHkiLCJzdGFsbFRpbWVvdXQiLCJjb2luYmFzZUNvbm5lY3RvciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwianNvblJwY1VybCIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfTVVNQkFJX0FQSV9LRVkiLCJpbmplY3RlZENvbm5lY3RvciIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});