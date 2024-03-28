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

/***/ "./src/components/MainComponent.js":
/*!*****************************************!*\
  !*** ./src/components/MainComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction MainComponent() {\n    _s();\n    const [promptData, setPromptData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [output, setOutput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [promptFields, setPromptFields] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const fetchPromptFields = async ()=>{\n            const fields = [\n                \"templateType\",\n                \"language\",\n                \"concept\"\n            ];\n            setPromptFields(fields);\n        };\n        fetchPromptFields();\n    }, []);\n    const handleInputChange = (event)=>{\n        setPromptData({\n            ...promptData,\n            [event.target.name]: event.target.value\n        });\n    };\n    const sendMessage = async ()=>{\n        const newOutput = {\n            id: output.length + 1,\n            ...promptData\n        };\n        setOutput([\n            ...output,\n            newOutput\n        ]);\n        setPromptData({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 flex flex-col p-4 bg-white rounded-l-[12px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-roboto text-2xl text-[#121212] mb-4\",\n                        children: \"Chat Prompt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    promptFields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: field,\n                            value: promptData[field] || \"\",\n                            onChange: handleInputChange,\n                            className: \"mb-2 p-2 font-roboto text-[#121212] border-2 border-[#D4D4D8] rounded-[12px]\",\n                            placeholder: field.charAt(0).toUpperCase() + field.slice(1)\n                        }, field, false, {\n                            fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: sendMessage,\n                            className: \"p-2 bg-[#04F] text-white font-roboto rounded-[12px]\",\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overflow-auto\",\n                        children: output.map((entry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 my-2 bg-white border-2 border-[#D4D4D8] rounded-[12px]\",\n                                children: promptFields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-roboto text-[#121212]\",\n                                        children: \"\".concat(field.charAt(0).toUpperCase() + field.slice(1), \": \").concat(entry[field])\n                                    }, field, false, {\n                                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this))\n                            }, entry.id, false, {\n                                fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 flex flex-col p-4 bg-white rounded-r-[12px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-roboto text-2xl text-[#121212] mb-4\",\n                        children: \"LLM Output\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 font-roboto text-[#121212] overflow-auto rounded-[12px]\",\n                        children: output.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-2 my-2 bg-[#F5F5F5] border-2 border-[#D4D4D8] rounded-[12px]\",\n                                children: promptFields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-roboto text-[#121212]\",\n                                        children: entry[field]\n                                    }, field, false, {\n                                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, this))\n                            }, index, false, {\n                                fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kazu-gor/git/llm_chat_app/src/components/MainComponent.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(MainComponent, \"nDlrwY5lIhTniJKGMg7eDMml1wc=\");\n_c = MainComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainComponent);\nvar _c;\n$RefreshReg$(_c, \"MainComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFFMUIsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILHFEQUFjLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04scURBQWMsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLHFEQUFjLENBQUMsRUFBRTtJQUV6REEsc0RBQWUsQ0FBQztRQUNkLE1BQU1VLG9CQUFvQjtZQUN4QixNQUFNQyxTQUFTO2dCQUFDO2dCQUFnQjtnQkFBWTthQUFVO1lBQ3RESCxnQkFBZ0JHO1FBQ2xCO1FBQ0FEO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCVixjQUFjO1lBQUUsR0FBR0QsVUFBVTtZQUFFLENBQUNXLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLE1BQU1DLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3pFO0lBRUEsTUFBTUMsY0FBYztRQUNsQixNQUFNQyxZQUFZO1lBQ2hCQyxJQUFJZCxPQUFPZSxNQUFNLEdBQUc7WUFDcEIsR0FBR2xCLFVBQVU7UUFDZjtRQUVBSSxVQUFVO2VBQUlEO1lBQVFhO1NBQVU7UUFDaENmLGNBQWMsQ0FBQztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTJDOzs7Ozs7b0JBR3hEZixhQUFhaUIsR0FBRyxDQUFDLENBQUNDLHNCQUNqQiw4REFBQ0M7NEJBRUNYLE1BQU1VOzRCQUNOVCxPQUFPZCxVQUFVLENBQUN1QixNQUFNLElBQUk7NEJBQzVCRSxVQUFVZjs0QkFDVlUsV0FBVTs0QkFDVk0sYUFBYUgsTUFBTUksTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0wsTUFBTU0sS0FBSyxDQUFDOzJCQUxwRE47Ozs7O2tDQVFULDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1U7NEJBQ0NDLFNBQVNoQjs0QkFDVEssV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaakIsT0FBT21CLEdBQUcsQ0FBQyxDQUFDVSxzQkFDWCw4REFBQ2I7Z0NBRUNDLFdBQVU7MENBRVRmLGFBQWFpQixHQUFHLENBQUMsQ0FBQ0Msc0JBQ2pCLDhEQUFDVTt3Q0FBY2IsV0FBVTtrREFBOEIsR0FFbERZLE9BREhULE1BQU1JLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtMLE1BQU1NLEtBQUssQ0FBQyxJQUM3QyxNQUFpQixPQUFiRyxLQUFLLENBQUNULE1BQU07dUNBRlRBOzs7OzsrQkFKTFMsTUFBTWYsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFZckIsOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTJDOzs7Ozs7a0NBQ3pELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWmpCLE9BQU9tQixHQUFHLENBQUMsQ0FBQ1UsT0FBT0Usc0JBQ2xCLDhEQUFDZjtnQ0FFQ0MsV0FBVTswQ0FFVGYsYUFBYWlCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDakIsOERBQUNVO3dDQUFjYixXQUFVO2tEQUN0QlksS0FBSyxDQUFDVCxNQUFNO3VDQURQQTs7Ozs7K0JBSkxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25CO0dBckZTbkM7S0FBQUE7QUF1RlQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC5qcz9hYjAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYWluQ29tcG9uZW50KCkge1xuICBjb25zdCBbcHJvbXB0RGF0YSwgc2V0UHJvbXB0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9tcHRGaWVsZHMsIHNldFByb21wdEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb21wdEZpZWxkcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkcyA9IFtcInRlbXBsYXRlVHlwZVwiLCBcImxhbmd1YWdlXCIsIFwiY29uY2VwdFwiXTtcbiAgICAgIHNldFByb21wdEZpZWxkcyhmaWVsZHMpO1xuICAgIH07XG4gICAgZmV0Y2hQcm9tcHRGaWVsZHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UHJvbXB0RGF0YSh7IC4uLnByb21wdERhdGEsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdPdXRwdXQgPSB7XG4gICAgICBpZDogb3V0cHV0Lmxlbmd0aCArIDEsXG4gICAgICAuLi5wcm9tcHREYXRhLFxuICAgIH07XG5cbiAgICBzZXRPdXRwdXQoWy4uLm91dHB1dCwgbmV3T3V0cHV0XSk7XG4gICAgc2V0UHJvbXB0RGF0YSh7fSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgZmxleCBmbGV4LWNvbCBwLTQgYmctd2hpdGUgcm91bmRlZC1sLVsxMnB4XVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8gdGV4dC0yeGwgdGV4dC1bIzEyMTIxMl0gbWItNFwiPlxuICAgICAgICAgIENoYXQgUHJvbXB0XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHtwcm9tcHRGaWVsZHMubWFwKChmaWVsZCkgPT4gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAga2V5PXtmaWVsZH1cbiAgICAgICAgICAgIG5hbWU9e2ZpZWxkfVxuICAgICAgICAgICAgdmFsdWU9e3Byb21wdERhdGFbZmllbGRdIHx8IFwiXCJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yIHAtMiBmb250LXJvYm90byB0ZXh0LVsjMTIxMjEyXSBib3JkZXItMiBib3JkZXItWyNENEQ0RDhdIHJvdW5kZWQtWzEycHhdXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZpZWxkLnNsaWNlKDEpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1bIzA0Rl0gdGV4dC13aGl0ZSBmb250LXJvYm90byByb3VuZGVkLVsxMnB4XVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VuZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAge291dHB1dC5tYXAoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZW50cnkuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBteS0yIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1bI0Q0RDREOF0gcm91bmRlZC1bMTJweF1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvbXB0RmllbGRzLm1hcCgoZmllbGQpID0+IChcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2ZpZWxkfSBjbGFzc05hbWU9XCJmb250LXJvYm90byB0ZXh0LVsjMTIxMjEyXVwiPntgJHtcbiAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmllbGQuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICB9OiAke2VudHJ5W2ZpZWxkXX1gfTwvcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgZmxleCBmbGV4LWNvbCBwLTQgYmctd2hpdGUgcm91bmRlZC1yLVsxMnB4XVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8gdGV4dC0yeGwgdGV4dC1bIzEyMTIxMl0gbWItNFwiPkxMTSBPdXRwdXQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LXJvYm90byB0ZXh0LVsjMTIxMjEyXSBvdmVyZmxvdy1hdXRvIHJvdW5kZWQtWzEycHhdXCI+XG4gICAgICAgICAge291dHB1dC5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXktMiBiZy1bI0Y1RjVGNV0gYm9yZGVyLTIgYm9yZGVyLVsjRDRENEQ4XSByb3VuZGVkLVsxMnB4XVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9tcHRGaWVsZHMubWFwKChmaWVsZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxwIGtleT17ZmllbGR9IGNsYXNzTmFtZT1cImZvbnQtcm9ib3RvIHRleHQtWyMxMjEyMTJdXCI+XG4gICAgICAgICAgICAgICAgICB7ZW50cnlbZmllbGRdfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5Db21wb25lbnQiLCJwcm9tcHREYXRhIiwic2V0UHJvbXB0RGF0YSIsInVzZVN0YXRlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwicHJvbXB0RmllbGRzIiwic2V0UHJvbXB0RmllbGRzIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9tcHRGaWVsZHMiLCJmaWVsZHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2VuZE1lc3NhZ2UiLCJuZXdPdXRwdXQiLCJpZCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiZmllbGQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYnV0dG9uIiwib25DbGljayIsImVudHJ5IiwicCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MainComponent.js\n"));

/***/ })

});