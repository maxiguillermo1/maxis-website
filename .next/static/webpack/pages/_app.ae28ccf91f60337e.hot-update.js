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

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , target , children , ...props } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        href: href,\n        scroll: false,\n        p: 2,\n        bg: active ? \"purple\" : undefined,\n        color: active ? \"#202023\" : inactiveColor,\n        target: target,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst MenuLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c1 = (props, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        ref: ref,\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, undefined));\n_c2 = MenuLink;\nconst Navbar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        css: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 2,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/works\",\n                            path: path,\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/posts\",\n                            path: path,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/me\",\n                            path: path,\n                            children: \"Me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            target: \"_blank\",\n                            href: \"https://github.com/maxiguillermo1/maxis-website\",\n                            path: path,\n                            display: \"inline-flex\",\n                            alignItems: \"center\",\n                            style: {\n                                gap: 4\n                            },\n                            pl: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoGithub, {}, void 0, false, {\n                                    fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"Source\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            ml: 2,\n                            display: {\n                                base: \"inline-block\",\n                                md: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                isLazy: true,\n                                id: \"navbar-menu\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {\n                                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton,\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                        variant: \"outline\",\n                                        \"aria-label\": \"Options\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: \"/\",\n                                                children: \"About\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: \"/works\",\n                                                children: \"Works\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: \"/posts\",\n                                                children: \"Posts\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                                lineNumber: 119,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/navbar.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c3 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"MenuLink$forwardRef\");\n$RefreshReg$(_c2, \"MenuLink\");\n$RefreshReg$(_c3, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akQsd0RBQVVBO3dDQUNUYyxJQUFJYix3REFBVUE7d0NBQ2RpRCxvQkFBTSw4REFBQy9DLDJEQUFhQTt3Q0FDcEJnRCxTQUFRO3dDQUNSQyxjQUFXOzs7Ozs7a0RBRWIsOERBQUNyRCxzREFBUUE7OzBEQUNQLDhEQUFDRCxzREFBUUE7Z0RBQUNnQixJQUFJTTtnREFBVWIsTUFBSzswREFBSTs7Ozs7OzBEQUdqQyw4REFBQ1Qsc0RBQVFBO2dEQUFDZ0IsSUFBSU07Z0RBQVViLE1BQUs7MERBQVM7Ozs7OzswREFHdEMsOERBQUNULHNEQUFRQTtnREFBQ2dCLElBQUlNO2dEQUFVYixNQUFLOzBEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXREO0lBcEZNZTs7UUFRSXBCLCtEQUFpQkE7OztNQVJyQm9CO0FBc0ZOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQm94LFxuICBMaW5rLFxuICBTdGFjayxcbiAgSGVhZGluZyxcbiAgRmxleCxcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBNZW51QnV0dG9uLFxuICBJY29uQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSAnLi90aGVtZS10b2dnbGUtYnV0dG9uJ1xuaW1wb3J0IHsgSW9Mb2dvR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIHRhcmdldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ3doaXRlQWxwaGEuOTAwJylcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgYXM9e05leHRMaW5rfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIHNjcm9sbD17ZmFsc2V9XG4gICAgICBwPXsyfVxuICAgICAgYmc9e2FjdGl2ZSA/ICdwdXJwbGUnIDogdW5kZWZpbmVkfVxuICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XG4gICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IE1lbnVMaW5rID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICA8TGluayByZWY9e3JlZn0gYXM9e05leHRMaW5rfSB7Li4ucHJvcHN9IC8+XG4pKVxuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgYXM9XCJuYXZcIlxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XG4gICAgICBjc3M9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyB9fVxuICAgICAgekluZGV4PXsyfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwPXsyfVxuICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCJcbiAgICAgICAgd3JhcD1cIndyYXBcIlxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvd29ya3NcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgIFdvcmtzXG4gICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wb3N0c1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgUG9zdHNcbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL21lXCIgcGF0aD17cGF0aH0+TWU8L0xpbmtJdGVtPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF4aWd1aWxsZXJtbzEvbWF4aXMtd2Vic2l0ZVwiXG4gICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZ2FwOiA0IH19XG4gICAgICAgICAgICBwbD17Mn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW9Mb2dvR2l0aHViIC8+XG4gICAgICAgICAgICBTb3VyY2VcbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgIDxUaGVtZVRvZ2dsZUJ1dHRvbiAvPlxuXG4gICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17eyBiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6ICdub25lJyB9fT5cbiAgICAgICAgICAgIDxNZW51IGlzTGF6eSBpZD1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9e0ljb25CdXR0b259XG4gICAgICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcHRpb25zXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TWVudUxpbmt9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtNZW51TGlua30gaHJlZj1cIi93b3Jrc1wiPlxuICAgICAgICAgICAgICAgICAgV29ya3NcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TWVudUxpbmt9IGhyZWY9XCIvcG9zdHNcIj5cbiAgICAgICAgICAgICAgICAgIFBvc3RzXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJJb0xvZ29HaXRodWIiLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJhcyIsInNjcm9sbCIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTWVudUxpbmsiLCJyZWYiLCJOYXZiYXIiLCJwb3NpdGlvbiIsInciLCJjc3MiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm10Iiwic3R5bGUiLCJnYXAiLCJwbCIsImZsZXgiLCJtbCIsImlzTGF6eSIsImlkIiwiaWNvbiIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});