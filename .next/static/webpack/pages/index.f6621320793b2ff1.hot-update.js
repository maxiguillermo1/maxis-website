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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/bio */ \"./components/bio.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Define the list of photo URLs\nconst photos = [\n    \"/images/favphotos/1.jpg\",\n    \"/images/favphotos/2.jpg\",\n    \"/images/favphotos/3.jpg\",\n    \"/images/favphotos/4.jpg\",\n    \"/images/favphotos/5.jpg\",\n    \"/images/favphotos/6.jpg\",\n    \"/images/favphotos/7.jpg\",\n    \"/images/favphotos/8.jpg\",\n    \"/images/favphotos/9.jpg\",\n    \"/images/favphotos/10.jpg\",\n    \"/images/favphotos/11.jpg\",\n    \"/images/favphotos/12.jpg\",\n    \"/images/favphotos/13.jpg\",\n    \"/images/favphotos/14.jpg\",\n    \"/images/favphotos/15.jpg\",\n    \"/images/favphotos/16.jpg\",\n    \"/images/favphotos/17.jpg\",\n    \"/images/favphotos/18.jpg\",\n    \"/images/favphotos/19.jpg\",\n    \"/images/favphotos/20.jpg\",\n    \"/images/favphotos/21.jpg\",\n    \"/images/favphotos/22.jpg\",\n    \"/images/favphotos/23.jpg\",\n    \"/images/favphotos/24.jpg\",\n    \"/images/favphotos/25.jpg\",\n    \"/images/favphotos/26.jpg\",\n    \"/images/favphotos/27.jpg\",\n    \"/images/favphotos/28.jpg\",\n    \"/images/favphotos/29.jpg\"\n];\nconst shuffleArray = (array)=>{\n    let shuffledArray = array.slice();\n    for(let i = shuffledArray.length - 1; i > 0; i--){\n        const j = Math.floor(Math.random() * (i + 1));\n        [shuffledArray[i], shuffledArray[j]] = [\n            shuffledArray[j],\n            shuffledArray[i]\n        ];\n    }\n    return shuffledArray;\n};\nconst ProfileImage = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.chakra)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n    shouldForwardProp: (prop)=>[\n            \"width\",\n            \"height\",\n            \"src\",\n            \"alt\"\n        ].includes(prop)\n});\n_c = ProfileImage;\nconst Home = ()=>{\n    _s();\n    const [shuffledPhotos, setShuffledPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(shuffleArray(photos));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                    display: {\n                        md: \"flex\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                        flexGrow: 1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Heading, {\n                                as: \"h2\",\n                                variant: \"page-title\",\n                                children: \"Maxwell Guillermo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                textAlign: \"center\",\n                                className: \"jsx-6c194cf74b91f84c\",\n                                children: \"An aspiring software engineer and a passionate product designer, transforming problems into fun and approachable solutions for all.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-6c194cf74b91f84c\" + \" \" + \"gallery\",\n                    children: shuffledPhotos.slice(0, 8).map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-6c194cf74b91f84c\" + \" \" + \"photo photo-\".concat(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-6c194cf74b91f84c\" + \" \" + \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: src,\n                                    alt: \"Photo \".concat(index + 1),\n                                    className: \"jsx-6c194cf74b91f84c\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 5\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"6c194cf74b91f84c\",\n                    children: \".gallery.jsx-6c194cf74b91f84c{position:relative;width:100%;height:100vh;padding:16px;margin:-8px}.photo.jsx-6c194cf74b91f84c{position:absolute;-webkit-transition:-webkit-transform.5s ease;-moz-transition:-moz-transform.5s ease;-o-transition:-o-transform.5s ease;transition:-webkit-transform.5s ease;transition:-moz-transform.5s ease;transition:-o-transform.5s ease;transition:transform.5s ease}.photo-0.jsx-6c194cf74b91f84c{top:15%;left:0%;width:35%;z-index:1}.photo-1.jsx-6c194cf74b91f84c{top:18%;left:35%;width:25%;z-index:2}.photo-2.jsx-6c194cf74b91f84c{top:21%;left:60%;width:40%;z-index:3}.photo-3.jsx-6c194cf74b91f84c{top:24%;left:98%;width:35%;z-index:4}.photo-4.jsx-6c194cf74b91f84c{top:61%;left:0%;width:30%;z-index:5}.photo-5.jsx-6c194cf74b91f84c{top:64%;left:30%;width:25%;z-index:6}.photo-6.jsx-6c194cf74b91f84c{top:67%;left:55%;width:30%;z-index:7}.photo-7.jsx-6c194cf74b91f84c{top:70%;left:85%;width:20%;z-index:8}.image-container.jsx-6c194cf74b91f84c{width:100%;height:auto;overflow:hidden}.image-container.jsx-6c194cf74b91f84c img.jsx-6c194cf74b91f84c{width:100%;height:auto;display:block;border:3px solid white;-webkit-box-shadow:4px 4px 10px rgba(0,0,0,.5);-moz-box-shadow:4px 4px 10px rgba(0,0,0,.5);box-shadow:4px 4px 10px rgba(0,0,0,.5)}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"8c2RcOgVQqoIpY+yAHKldbqH0zw=\");\n_c1 = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfileImage\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDOzs7QUFBZ0M7QUFZUjtBQUNxQztBQUNmO0FBQ1E7QUFDTDtBQUNQO0FBQ087QUFDNkI7QUFDeEI7QUFHekI7QUFDRztBQUVqQyxnQ0FBZ0M7QUFDaEMsTUFBTTBCLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxlQUFlLENBQUNDLFFBQVU7SUFDOUIsSUFBSUMsZ0JBQWdCRCxNQUFNRSxLQUFLO0lBQy9CLElBQUssSUFBSUMsSUFBSUYsY0FBY0csTUFBTSxHQUFHLEdBQUdELElBQUksR0FBR0EsSUFBSztRQUNqRCxNQUFNRSxJQUFJQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTUwsQ0FBQUEsSUFBSTtRQUMxQyxDQUFDRixhQUFhLENBQUNFLEVBQUUsRUFBRUYsYUFBYSxDQUFDSSxFQUFFLENBQUMsR0FBRztZQUFDSixhQUFhLENBQUNJLEVBQUU7WUFBRUosYUFBYSxDQUFDRSxFQUFFO1NBQUM7SUFDN0U7SUFDQSxPQUFPRjtBQUNUO0FBRUEsTUFBTVEsZUFBZTNCLHlEQUFNQSxDQUFDYyxtREFBS0EsRUFBRTtJQUNqQ2MsbUJBQW1CQyxDQUFBQSxPQUFRO1lBQUM7WUFBUztZQUFVO1lBQU87U0FBTSxDQUFDQyxRQUFRLENBQUNEO0FBQ3hFOztBQUVBLE1BQU1FLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUNFLGFBQWFEO0lBRWxFLHFCQUNFLDhEQUFDVixtRUFBTUE7a0JBQ0wsNEVBQUNkLHdEQUFTQTs7OEJBR1IsOERBQUNFLGtEQUFHQTtvQkFBQ3dDLFNBQVM7d0JBQUVDLElBQUk7b0JBQU87OEJBQ3pCLDRFQUFDekMsa0RBQUdBO3dCQUFDMEMsVUFBVTs7MENBQ2IsOERBQUMzQyxzREFBT0E7Z0NBQUM0QyxJQUFHO2dDQUFLQyxTQUFROzBDQUFhOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBRUMsV0FBVTs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVN4Qiw4REFBQ0M7OERBQWM7OEJBQ3RCVCxlQUFlWixLQUFLLENBQUMsR0FBRyxHQUFHc0IsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNwQyw4REFBQ0g7c0VBQTJCLGVBQXFCLE9BQU5HO3NDQUN6Qyw0RUFBQ0g7MEVBQWM7MENBQ2IsNEVBQUNJO29DQUFJRixLQUFLQTtvQ0FBS0csS0FBSyxTQUFtQixPQUFWRixRQUFROzs7Ozs7Ozs7Ozs7MkJBRi9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEZDtHQWpGTWI7TUFBQUE7O0FBbUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsi4oCoaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIExpbmssXG4gIENvbnRhaW5lcixcbiAgSGVhZGluZyxcbiAgQm94LFxuICBTaW1wbGVHcmlkLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgY2hha3JhXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBDaGV2cm9uUmlnaHRJY29uLCBFbWFpbEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEJpb1NlY3Rpb24sIEJpb1llYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2JpbydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGUnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ3JpZC1pdGVtJ1xuaW1wb3J0IHsgSW9Mb2dvVHdpdHRlciwgSW9Mb2dvSW5zdGFncmFtLCBJb0xvZ29HaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnO1xuaW1wb3J0IHsgRmFMaW5rZWRpbiwgRmFEaXNjb3JkIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIERlZmluZSB0aGUgbGlzdCBvZiBwaG90byBVUkxzXG5jb25zdCBwaG90b3MgPSBbXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8zLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy80LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy81LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy82LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy83LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy84LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy85LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xMC5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTEuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzEyLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xMy5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTQuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzE1LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xNi5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTcuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzE4LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xOS5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjAuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzIxLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yMi5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjMuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzI0LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yNS5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjYuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzI3LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yOC5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjkuanBnJyxcbl07XG5cbmNvbnN0IHNodWZmbGVBcnJheSA9IChhcnJheSkgPT4ge1xuICBsZXQgc2h1ZmZsZWRBcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gIGZvciAobGV0IGkgPSBzaHVmZmxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgW3NodWZmbGVkQXJyYXlbaV0sIHNodWZmbGVkQXJyYXlbal1dID0gW3NodWZmbGVkQXJyYXlbal0sIHNodWZmbGVkQXJyYXlbaV1dO1xuICB9XG4gIHJldHVybiBzaHVmZmxlZEFycmF5O1xufTtcblxuY29uc3QgUHJvZmlsZUltYWdlID0gY2hha3JhKEltYWdlLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3NyYycsICdhbHQnXS5pbmNsdWRlcyhwcm9wKVxufSlcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3NodWZmbGVkUGhvdG9zLCBzZXRTaHVmZmxlZFBob3Rvc10gPSB1c2VTdGF0ZShzaHVmZmxlQXJyYXkocGhvdG9zKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgXG5cbiAgICAgICAgPEJveCBkaXNwbGF5PXt7IG1kOiAnZmxleCcgfX0+XG4gICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICAgICAgTWF4d2VsbCBHdWlsbGVybW8gXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8cCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgQW4gYXNwaXJpbmcgc29mdHdhcmUgZW5naW5lZXIgYW5kIGEgcGFzc2lvbmF0ZSBwcm9kdWN0IGRlc2lnbmVyLCB0cmFuc2Zvcm1pbmcgcHJvYmxlbXMgaW50byBmdW4gYW5kIGFwcHJvYWNoYWJsZSBzb2x1dGlvbnMgZm9yIGFsbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICBcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxuICB7c2h1ZmZsZWRQaG90b3Muc2xpY2UoMCwgOCkubWFwKChzcmMsIGluZGV4KSA9PiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2BwaG90byBwaG90by0ke2luZGV4fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXtgUGhvdG8gJHtpbmRleCArIDF9YH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApKX1cbjwvZGl2PlxuXG48c3R5bGUganN4PntgXG4gIC8qIFN0eWxlcyBmb3IgdGhlIHBob3RvIGdhbGxlcnkgKi9cbi5nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBvZiB0aGUgY29udGFpbmVyICovXG4gIGhlaWdodDogMTAwdmg7IC8qIEFkanVzdCB0byB5b3VyIHByZWZlcmVuY2UgKi9cbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAtOHB4OyAvKiBSZWR1Y2UgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGltYWdlcyAqL1xufVxuXG4vKiBTdHlsZXMgZm9yIGluZGl2aWR1YWwgcGhvdG9zICovXG4ucGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5cbi8qIEFkanVzdCB0aGUgcG9zaXRpb25pbmcgZm9yIGVhY2ggcGhvdG8gdG8gY3JlYXRlIGEgc3RhZ2dlcmVkIGxvb2sgKi9cbi5waG90by0wIHsgdG9wOiAxNSU7IGxlZnQ6IDAlOyB3aWR0aDogMzUlOyB6LWluZGV4OiAxOyB9XG4ucGhvdG8tMSB7IHRvcDogMTglOyBsZWZ0OiAzNSU7IHdpZHRoOiAyNSU7IHotaW5kZXg6IDI7IH1cbi5waG90by0yIHsgdG9wOiAyMSU7IGxlZnQ6IDYwJTsgd2lkdGg6IDQwJTsgei1pbmRleDogMzsgfVxuLnBob3RvLTMgeyB0b3A6IDI0JTsgbGVmdDogOTglOyB3aWR0aDogMzUlOyB6LWluZGV4OiA0OyB9XG4ucGhvdG8tNCB7IHRvcDogNjElOyBsZWZ0OiAwJTsgd2lkdGg6IDMwJTsgei1pbmRleDogNTsgfVxuLnBob3RvLTUgeyB0b3A6IDY0JTsgbGVmdDogMzAlOyB3aWR0aDogMjUlOyB6LWluZGV4OiA2OyB9XG4ucGhvdG8tNiB7IHRvcDogNjclOyBsZWZ0OiA1NSU7IHdpZHRoOiAzMCU7IHotaW5kZXg6IDc7IH1cbi5waG90by03IHsgdG9wOiA3MCU7IGxlZnQ6IDg1JTsgd2lkdGg6IDIwJTsgei1pbmRleDogODsgfVxuXG4vKiBTdHlsZXMgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyAvKiBLZWVwIHRoZSBvcmlnaW5hbCBhc3BlY3QgcmF0aW8gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogQ2xpcCB0aGUgb3ZlcmZsb3cgKi9cbn1cblxuLyogU3R5bGVzIGZvciB0aGUgaW1hZ2UgKi9cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFNjYWxlIHRoZSBpbWFnZSB0byBmaWxsIHRoZSBjb250YWluZXIgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7IC8qIEFzc3VtaW5nIHdoaXRlIGJvcmRlcnMgYXMgc2hvd24gaW4gdGhlIGltYWdlICovXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiAgXG5gfTwvc3R5bGU+XG5cblxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NoYWtyYSdcblxuXG4iXSwibmFtZXMiOlsiTmV4dExpbmsiLCJMaW5rIiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkJveCIsIlNpbXBsZUdyaWQiLCJCdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW0iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImNoYWtyYSIsIkNoZXZyb25SaWdodEljb24iLCJFbWFpbEljb24iLCJQYXJhZ3JhcGgiLCJCaW9TZWN0aW9uIiwiQmlvWWVhciIsIkxheW91dCIsIlNlY3Rpb24iLCJHcmlkSXRlbSIsIklvTG9nb1R3aXR0ZXIiLCJJb0xvZ29JbnN0YWdyYW0iLCJJb0xvZ29HaXRodWIiLCJGYUxpbmtlZGluIiwiRmFEaXNjb3JkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInBob3RvcyIsInNodWZmbGVBcnJheSIsImFycmF5Iiwic2h1ZmZsZWRBcnJheSIsInNsaWNlIiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJQcm9maWxlSW1hZ2UiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJpbmNsdWRlcyIsIkhvbWUiLCJzaHVmZmxlZFBob3RvcyIsInNldFNodWZmbGVkUGhvdG9zIiwiZGlzcGxheSIsIm1kIiwiZmxleEdyb3ciLCJhcyIsInZhcmlhbnQiLCJwIiwidGV4dEFsaWduIiwiZGl2IiwibWFwIiwic3JjIiwiaW5kZXgiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});