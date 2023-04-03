/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"description\": \"Home_description__Qwq1f\",\n\t\"code\": \"Home_code__aGV0U\",\n\t\"grid\": \"Home_grid__c_g6N\",\n\t\"card\": \"Home_card__7oz7W\",\n\t\"center\": \"Home_center__V0nxp\",\n\t\"logo\": \"Home_logo__80mSr\",\n\t\"thirteen\": \"Home_thirteen__ocdUI\",\n\t\"rotate\": \"Home_rotate__99GkW\",\n\t\"content\": \"Home_content___fOQz\",\n\t\"vercelLogo\": \"Home_vercelLogo__lhIxO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlY2xhc3Nyb29tLy4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/MjdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19FdE50MlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fUXdxMWZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19hR1YwVVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX2NfZzZOXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fN296N1dcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fVjBueHBcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX184MG1TclwiLFxuXHRcInRoaXJ0ZWVuXCI6IFwiSG9tZV90aGlydGVlbl9fb2NkVUlcIixcblx0XCJyb3RhdGVcIjogXCJIb21lX3JvdGF0ZV9fOTlHa1dcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19fZk9RelwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2xoSXhPXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"@wagmi/core\");\n/* harmony import */ var _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/providers/wagmiProvider/wagmiProvider */ \"./src/providers/wagmiProvider/wagmiProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wagmi_core__WEBPACK_IMPORTED_MODULE_2__, _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_3__]);\n([_wagmi_core__WEBPACK_IMPORTED_MODULE_2__, _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    const test = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.getNetwork)();\n    console.log({\n        test\n    });\n    const { address  } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.getAccount)();\n    const handleConnect = async ()=>{\n        const result = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.connect)({\n            connector: _providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_3__.injectedConnector\n        });\n        console.log({\n            result\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_wagmiProvider_wagmiProvider__WEBPACK_IMPORTED_MODULE_3__.WagmiProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleConnect,\n                        children: \"connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: address\n                    }, void 0, false, {\n                        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVTUE7QUFWdUI7QUFHaUI7QUFDTDtBQUMrQjtBQUNsQztBQUNzQztBQUNuQztBQUkxQixTQUFTUSxPQUFPO0lBQzdCLE1BQU1DLE9BQU9OLHVEQUFVQTtJQUN2Qk8sUUFBUUMsR0FBRyxDQUFDO1FBQUVGO0lBQUs7SUFDbkIsTUFBTSxFQUFFRyxRQUFPLEVBQUUsR0FBR0wsdURBQVVBO0lBQzlCLE1BQU1NLGdCQUFnQixVQUFZO1FBQ2hDLE1BQU1DLFNBQVMsTUFBTVQsb0RBQU9BLENBQUM7WUFDM0JVLFdBQVdULHFGQUFpQkE7UUFDOUI7UUFDQUksUUFBUUMsR0FBRyxDQUFDO1lBQUVHO1FBQU87SUFDdkI7SUFFQSxxQkFDRSw4REFBQ1YsaUZBQWFBOzswQkFDWiw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd0QixxRUFBVzs7a0NBQzFCLDhEQUFDdUI7d0JBQU9DLFNBQVNiO2tDQUFlOzs7Ozs7a0NBQ2hDLDhEQUFDYztrQ0FBS2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVjbGFzc3Jvb20vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldE5ldHdvcmsgfSBmcm9tIFwiQHdhZ21pL2NvcmVcIjtcbmltcG9ydCB7IFdhZ21pUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlcnMvd2FnbWlQcm92aWRlci93YWdtaVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIkB3YWdtaS9jb3JlXCI7XG5pbXBvcnQgeyBpbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAL3Byb3ZpZGVycy93YWdtaVByb3ZpZGVyL3dhZ21pUHJvdmlkZXJcIjtcbmltcG9ydCB7IGdldEFjY291bnQgfSBmcm9tIFwiQHdhZ21pL2NvcmVcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB0ZXN0ID0gZ2V0TmV0d29yaygpO1xuICBjb25zb2xlLmxvZyh7IHRlc3QgfSk7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gZ2V0QWNjb3VudCgpO1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Qoe1xuICAgICAgY29ubmVjdG9yOiBpbmplY3RlZENvbm5lY3RvcixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHJlc3VsdCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXYWdtaVByb3ZpZGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9PmNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgPGRpdj57YWRkcmVzc308L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwiZ2V0TmV0d29yayIsIldhZ21pUHJvdmlkZXIiLCJjb25uZWN0IiwiaW5qZWN0ZWRDb25uZWN0b3IiLCJnZXRBY2NvdW50IiwiSG9tZSIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImhhbmRsZUNvbm5lY3QiLCJyZXN1bHQiLCJjb25uZWN0b3IiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/providers/wagmiProvider/wagmiProvider.tsx":
/*!*******************************************************!*\
  !*** ./src/providers/wagmiProvider/wagmiProvider.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WagmiProvider\": () => (/* binding */ WagmiProvider),\n/* harmony export */   \"coinbaseConnector\": () => (/* binding */ coinbaseConnector),\n/* harmony export */   \"injectedConnector\": () => (/* binding */ injectedConnector),\n/* harmony export */   \"walletConnectConnector\": () => (/* binding */ walletConnectConnector)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core/chains */ \"@wagmi/core/chains\");\n/* harmony import */ var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core/providers/public */ \"@wagmi/core/providers/public\");\n/* harmony import */ var _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core/providers/infura */ \"@wagmi/core/providers/infura\");\n/* harmony import */ var _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core/connectors/injected */ \"@wagmi/core/connectors/injected\");\n/* harmony import */ var _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/connectors/walletConnect */ \"@wagmi/core/connectors/walletConnect\");\n/* harmony import */ var _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/core/connectors/coinbaseWallet */ \"@wagmi/core/connectors/coinbaseWallet\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__, _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_5__, _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__, _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_7__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_1__, _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_2__, _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_3__, _wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__, _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_5__, _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__, _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst isProd = process.env.ENVIRONMENT == \"PROD\";\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)(// what about dev and mainnet environments?\n[\n    isProd ? _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_2__.polygon : _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_2__.polygonMumbai\n], [\n    (0,_wagmi_core_providers_infura__WEBPACK_IMPORTED_MODULE_4__.infuraProvider)({\n        apiKey: \"008b21b5a8434832b85c0b0056c80c02\",\n        priority: 0,\n        stallTimeout: 1000\n    }),\n    (0,_wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_3__.publicProvider)({\n        priority: 1\n    })\n]);\nconst coinbaseConnector = new _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_7__.CoinbaseWalletConnector({\n    options: {\n        appName: \"TheClassroom\",\n        jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${\"qDySFLl1Qjz8TO4sYO16cguTRQqUxt6s\"}`\n    }\n});\nconst injectedConnector = new _wagmi_core_connectors_injected__WEBPACK_IMPORTED_MODULE_5__.InjectedConnector({\n    chains\n});\nconst walletConnectConnector = new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n    chains,\n    options: {\n        projectId: \"08e91eb93323dfc56f35481e4e055748\"\n    }\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors: [\n        injectedConnector,\n        coinbaseConnector,\n        walletConnectConnector\n    ],\n    provider\n});\nfunction WagmiProvider({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n        client: wagmiClient,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/hyun-kyungyi/JULI/theclassroom-ui/src/providers/wagmiProvider/wagmiProvider.tsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL3dhZ21pUHJvdmlkZXIvd2FnbWlQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUU7QUFDUDtBQUNFO0FBQ0E7QUFDTTtBQUNVO0FBQ0U7QUFHaEYsTUFBTVUsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUk7QUFDMUMsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHZCxzREFBZUEsQ0FDMUMsMkNBQTJDO0FBQzNDO0lBQUNTLFNBQVNQLHVEQUFPQSxHQUFHQyw2REFBYTtDQUFDLEVBQ2xDO0lBQ0VFLDRFQUFjQSxDQUFDO1FBQ2JVLFFBQVFMLGtDQUFzQztRQUM5Q08sVUFBVTtRQUNWQyxjQUFjO0lBQ2hCO0lBQ0FkLDRFQUFjQSxDQUFDO1FBQUVhLFVBQVU7SUFBRTtDQUM5QjtBQUdJLE1BQU1FLG9CQUFvQixJQUFJWCwwRkFBdUJBLENBQUM7SUFDM0RZLFNBQVM7UUFDUEMsU0FBUztRQUNUQyxZQUFZLENBQUMscUNBQXFDLEVBQUVaLGtDQUE4QyxDQUFDLENBQUM7SUFDdEc7QUFDRixHQUFHO0FBRUksTUFBTWMsb0JBQW9CLElBQUlsQiw4RUFBaUJBLENBQUM7SUFBRU87QUFBTyxHQUFHO0FBRTVELE1BQU1ZLHlCQUF5QixJQUFJbEIsd0ZBQXNCQSxDQUFDO0lBQy9ETTtJQUNBTyxTQUFTO1FBQ1BNLFdBQVdoQixrQ0FBZ0Q7SUFDN0Q7QUFDRixHQUFHO0FBRUgsTUFBTWtCLGNBQWMzQixtREFBWUEsQ0FBQztJQUMvQjRCLGFBQWEsSUFBSTtJQUNqQkMsWUFBWTtRQUFDTjtRQUFtQkw7UUFBbUJNO0tBQXVCO0lBQzFFWDtBQUNGO0FBRU8sU0FBU2lCLGNBQWMsRUFBRUMsU0FBUSxFQUFzQixFQUFFO0lBQzlELHFCQUFPLDhEQUFDakMsOENBQVdBO1FBQUNrQyxRQUFRTDtrQkFBY0k7Ozs7OztBQUM1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlY2xhc3Nyb29tLy4vc3JjL3Byb3ZpZGVycy93YWdtaVByb3ZpZGVyL3dhZ21pUHJvdmlkZXIudHN4P2U3N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXYWdtaUNvbmZpZywgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHBvbHlnb24sIHBvbHlnb25NdW1iYWkgfSBmcm9tIFwiQHdhZ21pL2NvcmUvY2hhaW5zXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJAd2FnbWkvY29yZS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJAd2FnbWkvY29yZS9wcm92aWRlcnMvaW5mdXJhXCI7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2FnbWkvY29yZS9jb25uZWN0b3JzL2luamVjdGVkXCI7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSBcIkB3YWdtaS9jb3JlL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdFwiO1xuaW1wb3J0IHsgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3IgfSBmcm9tIFwiQHdhZ21pL2NvcmUvY29ubmVjdG9ycy9jb2luYmFzZVdhbGxldFwiO1xuaW1wb3J0IHsgV2FnbWlQcm92aWRlclR5cGVzIH0gZnJvbSBcIi4vd2FnbWlQcm92aWRlci50eXBlc1wiO1xuXG5jb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5FTlZJUk9OTUVOVCA9PSBcIlBST0RcIjtcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICAvLyB3aGF0IGFib3V0IGRldiBhbmQgbWFpbm5ldCBlbnZpcm9ubWVudHM/XG4gIFtpc1Byb2QgPyBwb2x5Z29uIDogcG9seWdvbk11bWJhaV0sXG4gIFtcbiAgICBpbmZ1cmFQcm92aWRlcih7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZIGFzIHN0cmluZyxcbiAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgc3RhbGxUaW1lb3V0OiAxXzAwMCxcbiAgICB9KSxcbiAgICBwdWJsaWNQcm92aWRlcih7IHByaW9yaXR5OiAxIH0pLFxuICBdXG4pO1xuXG5leHBvcnQgY29uc3QgY29pbmJhc2VDb25uZWN0b3IgPSBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe1xuICBvcHRpb25zOiB7XG4gICAgYXBwTmFtZTogXCJUaGVDbGFzc3Jvb21cIixcbiAgICBqc29uUnBjVXJsOiBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9NVU1CQUlfQVBJX0tFWX1gLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZENvbm5lY3RvciA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWlucyB9KTtcblxuZXhwb3J0IGNvbnN0IHdhbGxldENvbm5lY3RDb25uZWN0b3IgPSBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XG4gIGNoYWlucyxcbiAgb3B0aW9uczoge1xuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUQ09OTkVDVF9QUk9KRUNUX0lEIGFzIHN0cmluZyxcbiAgfSxcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzOiBbaW5qZWN0ZWRDb25uZWN0b3IsIGNvaW5iYXNlQ29ubmVjdG9yLCB3YWxsZXRDb25uZWN0Q29ubmVjdG9yXSxcbiAgcHJvdmlkZXIsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFdhZ21pUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBXYWdtaVByb3ZpZGVyVHlwZXMpIHtcbiAgcmV0dXJuIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT57Y2hpbGRyZW59PC9XYWdtaUNvbmZpZz47XG59XG4iXSwibmFtZXMiOlsiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJwb2x5Z29uIiwicG9seWdvbk11bWJhaSIsInB1YmxpY1Byb3ZpZGVyIiwiaW5mdXJhUHJvdmlkZXIiLCJJbmplY3RlZENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsImlzUHJvZCIsInByb2Nlc3MiLCJlbnYiLCJFTlZJUk9OTUVOVCIsImNoYWlucyIsInByb3ZpZGVyIiwiYXBpS2V5IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkiLCJwcmlvcml0eSIsInN0YWxsVGltZW91dCIsImNvaW5iYXNlQ29ubmVjdG9yIiwib3B0aW9ucyIsImFwcE5hbWUiLCJqc29uUnBjVXJsIiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9NVU1CQUlfQVBJX0tFWSIsImluamVjdGVkQ29ubmVjdG9yIiwid2FsbGV0Q29ubmVjdENvbm5lY3RvciIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1dBTExFVENPTk5FQ1RfUFJPSkVDVF9JRCIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiV2FnbWlQcm92aWRlciIsImNoaWxkcmVuIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/providers/wagmiProvider/wagmiProvider.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@wagmi/core":
/*!******************************!*\
  !*** external "@wagmi/core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core");;

/***/ }),

/***/ "@wagmi/core/chains":
/*!*************************************!*\
  !*** external "@wagmi/core/chains" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/chains");;

/***/ }),

/***/ "@wagmi/core/connectors/coinbaseWallet":
/*!********************************************************!*\
  !*** external "@wagmi/core/connectors/coinbaseWallet" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/coinbaseWallet");;

/***/ }),

/***/ "@wagmi/core/connectors/injected":
/*!**************************************************!*\
  !*** external "@wagmi/core/connectors/injected" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/injected");;

/***/ }),

/***/ "@wagmi/core/connectors/walletConnect":
/*!*******************************************************!*\
  !*** external "@wagmi/core/connectors/walletConnect" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/walletConnect");;

/***/ }),

/***/ "@wagmi/core/providers/infura":
/*!***********************************************!*\
  !*** external "@wagmi/core/providers/infura" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/providers/infura");;

/***/ }),

/***/ "@wagmi/core/providers/public":
/*!***********************************************!*\
  !*** external "@wagmi/core/providers/public" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/providers/public");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();