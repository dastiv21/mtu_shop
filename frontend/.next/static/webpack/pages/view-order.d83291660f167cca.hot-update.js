"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view-order",{

/***/ "./pages/view-order/index.tsx":
/*!************************************!*\
  !*** ./pages/view-order/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layouts_hrDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/layouts/hrDashboard */ \"./src/layouts/hrDashboard.tsx\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _src_store_useGlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/store/useGlobalState */ \"./src/store/useGlobalState.tsx\");\n/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/form */ \"./node_modules/@mantine/form/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ViewOrder = ()=>{\n    _s();\n    const { state , setState  } = (0,_src_store_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useStateValue)();\n    console.log(\"state\", state);\n    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n        initialValues: {\n            quantity: 1\n        }\n    });\n    const [viewOrder, setViewOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getProducts = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(\"http://localhost:5001/api/\", \"catalog/getOrders\")).then(function(response) {\n            setViewOrder(response.data.data);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    const rows = viewOrder.map((element, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: element[\"customerName\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: element && element[\"productID\"] && element[\"productID\"][\"name\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: element && element[\"productID\"] && element[\"productID\"][\"image\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: element[\"price\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: element[\"quantity\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: [\n                        moment__WEBPACK_IMPORTED_MODULE_4___default()(element[\"saleDate\"]).format(\"llll\"),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: element[\"status\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, element[\"price\"], true, {\n            fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex-1 dark:bg-hrDarkMode-1 overflow-auto flex bg-xds-eneutral-2 p-6 flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Table, {\n            horizontalSpacing: \"md\",\n            verticalSpacing: \"md\",\n            fontSize: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"font-bold text-[12px] leading-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Customer Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Product Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Picture\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Quantity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Date Purchased\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Shipping Status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: rows\n                }, void 0, false, {\n                    fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n            lineNumber: 67,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rahys/Downloads/Micro1/frontend/pages/view-order/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ViewOrder, \"JyQB/uzILhbBOz6wZJb5ElgXVik=\", false, function() {\n    return [\n        _src_store_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useStateValue,\n        _mantine_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = ViewOrder;\nViewOrder.Layout = _src_layouts_hrDashboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nViewOrder.LayoutProps = {\n    pageLabel: [\n        {\n            label: \"View Order \",\n            link: \"/view-order\"\n        }\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewOrder);\nvar _c;\n$RefreshReg$(_c, \"ViewOrder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3LW9yZGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUVMO0FBQ1Q7QUFDVTtBQUNuQjtBQUVkO0FBQ0U7QUFXNUIsTUFBTVMsWUFBdUIsSUFBTTs7SUFDakMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHTix3RUFBYUE7SUFDM0NPLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSDtJQUlyQixNQUFNSSxPQUFPUixzREFBT0EsQ0FBQztRQUNuQlMsZUFBZTtZQUNiQyxVQUFVO1FBRVo7SUFDRjtJQUVFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNaUIsY0FBYyxJQUFNO1FBQ3hCWixpREFBUyxDQUFDLEdBQW9DLE9BQWpDYyw0QkFBZ0MsRUFBQyxzQkFDN0NHLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7WUFDeEJQLGFBQWFPLFNBQVNDLElBQUksQ0FBQ0EsSUFBSTtRQUNqQyxHQUNDQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1lBQ3RCaEIsUUFBUUMsR0FBRyxDQUFDZTtRQUNkO0lBRUY7SUFHQTNCLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTVUsT0FBT1osVUFBVWEsR0FBRyxDQUFDLENBQUNDLFNBQVNDLG9CQUNuQyw4REFBQ0M7OzhCQUNDLDhEQUFDQzs4QkFBSUgsT0FBTyxDQUFDLGVBQWU7Ozs7Ozs4QkFDNUIsOERBQUNHOzhCQUFJSCxXQUFXQSxPQUFPLENBQUMsWUFBWSxJQUFJQSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7Ozs4QkFDcEUsOERBQUNHOztzQ0FBRyw4REFBQ0M7NEJBQUlDLEtBQUtMLFdBQVdBLE9BQU8sQ0FBQyxZQUFZLElBQUlBLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUTs7Ozs7O3dCQUFLOzs7Ozs7OzhCQUNuRiw4REFBQ0c7OEJBQUlILE9BQU8sQ0FBQyxRQUFROzs7Ozs7OEJBQ3JCLDhEQUFDRzs4QkFBSUgsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs4QkFDeEIsOERBQUNHOzt3QkFBSTFCLDZDQUFNQSxDQUFDdUIsT0FBTyxDQUFDLFdBQVcsRUFBRU0sTUFBTSxDQUFDO3dCQUFROzs7Ozs7OzhCQUNoRCw4REFBQ0g7OEJBQUlILE9BQU8sQ0FBQyxTQUFTOzs7Ozs7O1dBUGZBLE9BQU8sQ0FBQyxRQUFROzs7OztJQVkzQixxQkFDSSw4REFBQ087UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNuQyxnREFBS0E7WUFBQ29DLG1CQUFrQjtZQUFLQyxpQkFBZ0I7WUFBS0MsVUFBUzs7OEJBQzlELDhEQUFDQzs4QkFDQyw0RUFBQ1Y7d0JBQUdNLFdBQVU7OzBDQUNaLDhEQUFDSzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNDOzhCQUFPaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7R0EvRE1wQjs7UUFDd0JKLG9FQUFhQTtRQUs5QkMsa0RBQU9BOzs7S0FOZEc7QUFpRUxBLFVBQVVxQyxNQUFNLEdBQUczQyxnRUFBaUJBO0FBQ2pDTSxVQUFVc0MsV0FBVyxHQUFHO0lBQUVDLFdBQVc7UUFDdkM7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7S0FDQztBQUNIO0FBQ0EsK0RBQWV6QyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXctb3JkZXIvaW5kZXgudHN4PzkyM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlWCB9IGZyb20gXCJAL3R5cGVzL25leHRcIjtcbmltcG9ydCBIUkRhc2hib2FyZExheW91dCBmcm9tIFwiQC9zcmMvbGF5b3V0cy9ockRhc2hib2FyZFwiO1xuaW1wb3J0IHsgVGFibGUsIFRleHRJbnB1dCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIkAvc3JjL3N0b3JlL3VzZUdsb2JhbFN0YXRlXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcIkBtYW50aW5lL2Zvcm1cIjtcbmltcG9ydCB7IHVzZUFwaURhdGEgfSBmcm9tIFwiQC9zcmMvaG9va3MvdXNlQXBpRGF0YVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmludGVyZmFjZSBHZXQge1xuICBfaWQ6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBxdWFudGl0eTogbnVtYmVyLFxuICBwcmljZTogbnVtYmVyLFxuICBpbWFnZTogc3RyaW5nLFxufVxuXG5cbmNvbnN0IFZpZXdPcmRlcjogTmV4dFBhZ2VYID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlU3RhdGVWYWx1ZSgpO1xuY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSApXG5cblxuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBxdWFudGl0eTogMSxcbiAgICBcbiAgfSxcbn0pO1xuXG4gIGNvbnN0IFt2aWV3T3JkZXIsIHNldFZpZXdPcmRlcl0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Y2F0YWxvZy9nZXRPcmRlcnNgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgc2V0Vmlld09yZGVyKHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgICAgICAgICAgICAgIFxuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2R1Y3RzKClcbiAgfSwgW10pXG5cblxuICBjb25zdCByb3dzID0gdmlld09yZGVyLm1hcCgoZWxlbWVudCwgaWR4KSA9PiAoXG4gICAgPHRyIGtleT17ZWxlbWVudFsncHJpY2UnXX0+XG4gICAgICA8dGQ+e2VsZW1lbnRbJ2N1c3RvbWVyTmFtZSddfTwvdGQ+XG4gICAgICA8dGQ+e2VsZW1lbnQgJiYgZWxlbWVudFsncHJvZHVjdElEJ10gJiYgZWxlbWVudFsncHJvZHVjdElEJ11bJ25hbWUnXX08L3RkPlxuICAgICAgPHRkPjxpbWcgc3JjPXtlbGVtZW50ICYmIGVsZW1lbnRbJ3Byb2R1Y3RJRCddICYmIGVsZW1lbnRbJ3Byb2R1Y3RJRCddWydpbWFnZSddfSAgLz4gPC90ZD5cbiAgICAgIDx0ZD57ZWxlbWVudFsncHJpY2UnXX08L3RkPlxuICAgICAgPHRkPntlbGVtZW50WydxdWFudGl0eSddfTwvdGQ+XG4gICAgICA8dGQ+e21vbWVudChlbGVtZW50WydzYWxlRGF0ZSddKS5mb3JtYXQoJ2xsbGwnKX0gPC90ZD5cbiAgICAgIDx0ZD57ZWxlbWVudFsnc3RhdHVzJ119PC90ZD5cbiAgICA8L3RyPlxuXG4gICkpO1xuIFxuICByZXR1cm4gKCBcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXgtMSBkYXJrOmJnLWhyRGFya01vZGUtMSBvdmVyZmxvdy1hdXRvIGZsZXggYmcteGRzLWVuZXV0cmFsLTIgcC02IGZsZXgtY29sXCI+XG4gICAgICAgIDxUYWJsZSBob3Jpem9udGFsU3BhY2luZz1cIm1kXCIgdmVydGljYWxTcGFjaW5nPVwibWRcIiBmb250U2l6ZT1cImxnXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMTJweF0gbGVhZGluZy01XCI+XG4gICAgICAgICAgPHRoPkN1c3RvbWVyIE5hbWU8L3RoPlxuICAgICAgICAgIDx0aD5Qcm9kdWN0IE5hbWU8L3RoPlxuICAgICAgICAgIDx0aD5QaWN0dXJlPC90aD5cbiAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgPHRoPkRhdGUgUHVyY2hhc2VkPC90aD5cbiAgICAgICAgICA8dGg+U2hpcHBpbmcgU3RhdHVzPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICA8L1RhYmxlPlxuICAgICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuIFZpZXdPcmRlci5MYXlvdXQgPSBIUkRhc2hib2FyZExheW91dDtcbiAgICBWaWV3T3JkZXIuTGF5b3V0UHJvcHMgPSB7IHBhZ2VMYWJlbDogW1xuICB7XG4gICAgbGFiZWw6IFwiVmlldyBPcmRlciBcIixcbiAgICBsaW5rOiBcIi92aWV3LW9yZGVyXCJcbiAgfVxuICBdIFxufTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdPcmRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSFJEYXNoYm9hcmRMYXlvdXQiLCJUYWJsZSIsInVzZVN0YXRlVmFsdWUiLCJ1c2VGb3JtIiwiYXhpb3MiLCJtb21lbnQiLCJWaWV3T3JkZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJpbml0aWFsVmFsdWVzIiwicXVhbnRpdHkiLCJ2aWV3T3JkZXIiLCJzZXRWaWV3T3JkZXIiLCJnZXRQcm9kdWN0cyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwicm93cyIsIm1hcCIsImVsZW1lbnQiLCJpZHgiLCJ0ciIsInRkIiwiaW1nIiwic3JjIiwiZm9ybWF0IiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImhvcml6b250YWxTcGFjaW5nIiwidmVydGljYWxTcGFjaW5nIiwiZm9udFNpemUiLCJ0aGVhZCIsInRoIiwidGJvZHkiLCJMYXlvdXQiLCJMYXlvdXRQcm9wcyIsInBhZ2VMYWJlbCIsImxhYmVsIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view-order/index.tsx\n"));

/***/ })

});