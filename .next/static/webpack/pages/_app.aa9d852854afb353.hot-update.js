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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"./node_modules/@wagmi/core/dist/index.js\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core/chains */ \"./node_modules/@wagmi/core/dist/chains.js\");\n/* harmony import */ var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core/providers/public */ \"./node_modules/@wagmi/core/dist/providers/public.js\");\n/* harmony import */ var _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/infura */ \"./node_modules/@wagmi/core/dist/providers/infura.js\");\n/* harmony import */ var _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/connectors/injected */ \"./node_modules/@wagmi/core/dist/connectors/injected.js\");\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const { chains , provider  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n        _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygon,\n        _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_3__.polygonMumbai\n    ], [\n        (0,_wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__.infuraProvider)({\n            apiKey: \"008b21b5a8434832b85c0b0056c80c02\",\n            priority: 0,\n            stallTimeout: 1000\n        }),\n        (0,_wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)({\n            priority: 1\n        })\n    ]);\n    const wagmiClient = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n        autoConnect: true,\n        connectors: [\n            new _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector({\n                chains\n            })\n        ],\n        provider\n    });\n    console.log({\n        chains,\n        provider\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFOEI7QUFDQTtBQUNFO0FBQ0E7QUFDTTtBQUVyRCxTQUFTTyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7SUFDMUIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHWCw0REFBZUEsQ0FDMUM7UUFBQ0UsdURBQU9BO1FBQUVDLDZEQUFhQTtLQUFDLEVBQ3hCO1FBQ0VFLDRFQUFjQSxDQUFDO1lBQ2JPLFFBQVFDLGtDQUFzQztZQUM5Q0csVUFBVTtZQUNWQyxjQUFjO1FBQ2hCO1FBQ0FiLDRFQUFjQSxDQUFDO1lBQUVZLFVBQVU7UUFBRTtLQUM5QjtJQUdILE1BQU1FLGNBQWNqQix5REFBWUEsQ0FBQztRQUMvQmtCLGFBQWEsSUFBSTtRQUNqQkMsWUFBWTtZQUFDLElBQUlkLDhFQUFpQkEsQ0FBQztnQkFBRUk7WUFBTztTQUFHO1FBQy9DQztJQUNGO0lBRUFVLFFBQVFDLEdBQUcsQ0FBQztRQUFFWjtRQUFRQztJQUFTO0lBRS9CLHFCQUFPLDhEQUFDSDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQyxDQUFDO0tBdEJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkB3YWdtaS9jb3JlXCI7XG5pbXBvcnQgeyBwb2x5Z29uLCBwb2x5Z29uTXVtYmFpIH0gZnJvbSBcIkB3YWdtaS9jb3JlL2NoYWluc1wiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwiQHdhZ21pL2NvcmUvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwiQHdhZ21pL2NvcmUvcHJvdmlkZXJzL2luZnVyYVwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdhZ21pL2NvcmUvY29ubmVjdG9ycy9pbmplY3RlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgICBbcG9seWdvbiwgcG9seWdvbk11bWJhaV0sXG4gICAgW1xuICAgICAgaW5mdXJhUHJvdmlkZXIoe1xuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZIGFzIHN0cmluZyxcbiAgICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICAgIHN0YWxsVGltZW91dDogMV8wMDAsXG4gICAgICB9KSxcbiAgICAgIHB1YmxpY1Byb3ZpZGVyKHsgcHJpb3JpdHk6IDEgfSksXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICBjb25uZWN0b3JzOiBbbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgY2hhaW5zIH0pXSxcbiAgICBwcm92aWRlcixcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coeyBjaGFpbnMsIHByb3ZpZGVyIH0pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsInBvbHlnb24iLCJwb2x5Z29uTXVtYmFpIiwicHVibGljUHJvdmlkZXIiLCJpbmZ1cmFQcm92aWRlciIsIkluamVjdGVkQ29ubmVjdG9yIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkiLCJwcmlvcml0eSIsInN0YWxsVGltZW91dCIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});