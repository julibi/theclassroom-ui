"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core */ \"./node_modules/@wagmi/core/dist/index.js\");\n/* harmony import */ var _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/providers/wagmiProvider/wagmiProvider */ \"./src/providers/wagmiProvider/wagmiProvider.tsx\");\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    const test = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.getNetwork)();\n    console.log({\n        test\n    });\n    const { address  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.getAccount)();\n    const handleConnect = async ()=>{\n        const result = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.connect)({\n            connector: _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_2__.injectedConnector\n        });\n        console.log({\n            result\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_2__.WagmiProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleConnect,\n                        children: \"connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: address\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVTUE7QUFWdUI7QUFHaUI7QUFDTDtBQUMrQjtBQUNsQztBQUNzQztBQUNuQztBQUkxQixTQUFTUSxPQUFPO0lBQzdCLE1BQU1DLE9BQU9OLHVEQUFVQTtJQUN2Qk8sUUFBUUMsR0FBRyxDQUFDO1FBQUVGO0lBQUs7SUFDbkIsTUFBTSxFQUFFRyxRQUFPLEVBQUUsR0FBR0wsdURBQVVBO0lBQzlCLE1BQU1NLGdCQUFnQixVQUFZO1FBQ2hDLE1BQU1DLFNBQVMsTUFBTVQsb0RBQU9BLENBQUM7WUFDM0JVLFdBQVdULHFGQUFpQkE7UUFDOUI7UUFDQUksUUFBUUMsR0FBRyxDQUFDO1lBQUVHO1FBQU87SUFDdkI7SUFFQSxxQkFDRSw4REFBQ1YsaUZBQWFBOzswQkFDWiw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd0QixxRUFBVzs7a0NBQzFCLDhEQUFDdUI7d0JBQU9DLFNBQVNiO2tDQUFlOzs7Ozs7a0NBQ2hDLDhEQUFDYztrQ0FBS2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLENBQUM7S0F6QnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldE5ldHdvcmsgfSBmcm9tIFwiQHdhZ21pL2NvcmVcIjtcbmltcG9ydCB7IFdhZ21pUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlcnMvd2FnbWlQcm92aWRlci93YWdtaVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIkB3YWdtaS9jb3JlXCI7XG5pbXBvcnQgeyBpbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAL3Byb3ZpZGVycy93YWdtaVByb3ZpZGVyL3dhZ21pUHJvdmlkZXJcIjtcbmltcG9ydCB7IGdldEFjY291bnQgfSBmcm9tIFwiQHdhZ21pL2NvcmVcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB0ZXN0ID0gZ2V0TmV0d29yaygpO1xuICBjb25zb2xlLmxvZyh7IHRlc3QgfSk7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gZ2V0QWNjb3VudCgpO1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Qoe1xuICAgICAgY29ubmVjdG9yOiBpbmplY3RlZENvbm5lY3RvcixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHJlc3VsdCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXYWdtaVByb3ZpZGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9PmNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgPGRpdj57YWRkcmVzc308L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwiZ2V0TmV0d29yayIsIldhZ21pUHJvdmlkZXIiLCJjb25uZWN0IiwiaW5qZWN0ZWRDb25uZWN0b3IiLCJnZXRBY2NvdW50IiwiSG9tZSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImhhbmRsZUNvbm5lY3QiLCJyZXN1bHQiLCJjb25uZWN0b3IiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});