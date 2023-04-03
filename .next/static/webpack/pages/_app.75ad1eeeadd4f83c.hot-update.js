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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"./node_modules/@wagmi/core/dist/index.js\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core/chains */ \"./node_modules/@wagmi/core/dist/chains.js\");\n/* harmony import */ var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core/providers/public */ \"./node_modules/@wagmi/core/dist/providers/public.js\");\n/* harmony import */ var _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/infura */ \"./node_modules/@wagmi/core/dist/providers/infura.js\");\n/* harmony import */ var _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/core/connectors/injected */ \"./node_modules/@wagmi/core/dist/connectors/injected.js\");\n/* harmony import */ var _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wagmi/core/connectors/walletConnect */ \"./node_modules/@wagmi/core/dist/connectors/walletConnect.js\");\n/* harmony import */ var _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/connectors/coinbaseWallet */ \"./node_modules/@wagmi/core/dist/connectors/coinbaseWallet.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const isProd = process.env.ENVIRONMENT == \"PROD\";\n    const { chains , provider  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.configureChains)(// what about dev and mainnet environments?\n    [\n        isProd ? _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygon : _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygonMumbai\n    ], [\n        (0,_wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__.infuraProvider)({\n            apiKey: \"008b21b5a8434832b85c0b0056c80c02\",\n            priority: 0,\n            stallTimeout: 1000\n        }),\n        (0,_wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)({\n            priority: 1\n        })\n    ]);\n    const coinbaseConnector = new _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_6__.CoinbaseWalletConnector({\n        options: {\n            appName: \"TheClassroom\",\n            jsonRpcUrl: \"https://eth-mainnet.alchemyapi.io/v2/\".concat(\"qDySFLl1Qjz8TO4sYO16cguTRQqUxt6s\")\n        }\n    });\n    const injectedConnector = new _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_7__.InjectedConnector({\n        chains\n    });\n    const walletConnectConnector = new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_8__.WalletConnectConnector({\n        chains,\n        options: {\n            projectId: \"08e91eb93323dfc56f35481e4e055748\"\n        }\n    });\n    const wagmiClient = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n        autoConnect: true,\n        connectors: [\n            injectedConnector,\n            coinbaseConnector,\n            walletConnectConnector\n        ],\n        provider\n    });\n    console.log({\n        chains,\n        provider\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/_app.tsx\",\n        lineNumber: 50,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFOEI7QUFDQTtBQUNFO0FBQ0E7QUFDTTtBQUNVO0FBQ0U7QUFFakUsU0FBU1MsSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDO0lBQzFCLE1BQU1DLFNBQVNDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO0lBQzFDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2pCLDREQUFlQSxDQUMxQywyQ0FBMkM7SUFDM0M7UUFBQ1ksU0FBU1YsdURBQU9BLEdBQUdDLDZEQUFhO0tBQUMsRUFDbEM7UUFDRUUsNEVBQWNBLENBQUM7WUFDYmEsUUFBUUwsa0NBQXNDO1lBQzlDTyxVQUFVO1lBQ1ZDLGNBQWM7UUFDaEI7UUFDQWpCLDRFQUFjQSxDQUFDO1lBQUVnQixVQUFVO1FBQUU7S0FDOUI7SUFHSCxNQUFNRSxvQkFBb0IsSUFBSWQsMEZBQXVCQSxDQUFDO1FBQ3BEZSxTQUFTO1lBQ1BDLFNBQVM7WUFDVEMsWUFBWSx3Q0FBdUYsT0FBL0NaLGtDQUE4QztRQUNwRztJQUNGO0lBRUEsTUFBTWMsb0JBQW9CLElBQUlyQiw4RUFBaUJBLENBQUM7UUFBRVU7SUFBTztJQUV6RCxNQUFNWSx5QkFBeUIsSUFBSXJCLHdGQUFzQkEsQ0FBQztRQUN4RFM7UUFDQU8sU0FBUztZQUNQTSxXQUFXaEIsa0NBQWdEO1FBQzdEO0lBQ0Y7SUFFQSxNQUFNa0IsY0FBYzlCLHlEQUFZQSxDQUFDO1FBQy9CK0IsYUFBYSxJQUFJO1FBQ2pCQyxZQUFZO1lBQUNOO1lBQW1CTDtZQUFtQk07U0FBdUI7UUFDMUVYO0lBQ0Y7SUFFQWlCLFFBQVFDLEdBQUcsQ0FBQztRQUFFbkI7UUFBUUM7SUFBUztJQUUvQixxQkFBTyw4REFBQ1A7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQztLQXhDdUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAd2FnbWkvY29yZVwiO1xuaW1wb3J0IHsgcG9seWdvbiwgcG9seWdvbk11bWJhaSB9IGZyb20gXCJAd2FnbWkvY29yZS9jaGFpbnNcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIkB3YWdtaS9jb3JlL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIkB3YWdtaS9jb3JlL3Byb3ZpZGVycy9pbmZ1cmFcIjtcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3YWdtaS9jb3JlL2Nvbm5lY3RvcnMvaW5qZWN0ZWRcIjtcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tIFwiQHdhZ21pL2NvcmUvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0XCI7XG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJAd2FnbWkvY29yZS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52LkVOVklST05NRU5UID09IFwiUFJPRFwiO1xuICBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgICAvLyB3aGF0IGFib3V0IGRldiBhbmQgbWFpbm5ldCBlbnZpcm9ubWVudHM/XG4gICAgW2lzUHJvZCA/IHBvbHlnb24gOiBwb2x5Z29uTXVtYmFpXSxcbiAgICBbXG4gICAgICBpbmZ1cmFQcm92aWRlcih7XG4gICAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkgYXMgc3RyaW5nLFxuICAgICAgICBwcmlvcml0eTogMCxcbiAgICAgICAgc3RhbGxUaW1lb3V0OiAxXzAwMCxcbiAgICAgIH0pLFxuICAgICAgcHVibGljUHJvdmlkZXIoeyBwcmlvcml0eTogMSB9KSxcbiAgICBdXG4gICk7XG5cbiAgY29uc3QgY29pbmJhc2VDb25uZWN0b3IgPSBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGFwcE5hbWU6IFwiVGhlQ2xhc3Nyb29tXCIsXG4gICAgICBqc29uUnBjVXJsOiBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9NVU1CQUlfQVBJX0tFWX1gLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGluamVjdGVkQ29ubmVjdG9yID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgY2hhaW5zIH0pO1xuXG4gIGNvbnN0IHdhbGxldENvbm5lY3RDb25uZWN0b3IgPSBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XG4gICAgY2hhaW5zLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEIGFzIHN0cmluZyxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgY29ubmVjdG9yczogW2luamVjdGVkQ29ubmVjdG9yLCBjb2luYmFzZUNvbm5lY3Rvciwgd2FsbGV0Q29ubmVjdENvbm5lY3Rvcl0sXG4gICAgcHJvdmlkZXIsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHsgY2hhaW5zLCBwcm92aWRlciB9KTtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJwb2x5Z29uIiwicG9seWdvbk11bWJhaSIsInB1YmxpY1Byb3ZpZGVyIiwiaW5mdXJhUHJvdmlkZXIiLCJJbmplY3RlZENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzUHJvZCIsInByb2Nlc3MiLCJlbnYiLCJFTlZJUk9OTUVOVCIsImNoYWlucyIsInByb3ZpZGVyIiwiYXBpS2V5IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkiLCJwcmlvcml0eSIsInN0YWxsVGltZW91dCIsImNvaW5iYXNlQ29ubmVjdG9yIiwib3B0aW9ucyIsImFwcE5hbWUiLCJqc29uUnBjVXJsIiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9NVU1CQUlfQVBJX0tFWSIsImluamVjdGVkQ29ubmVjdG9yIiwid2FsbGV0Q29ubmVjdENvbm5lY3RvciIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1dBTExFVENPTk5FQ1RfUFJPSkVDVF9JRCIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});