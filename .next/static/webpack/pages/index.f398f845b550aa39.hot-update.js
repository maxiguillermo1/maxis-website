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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/bio */ \"./components/bio.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Define the list of photo URLs\nconst photos = [\n    \"/images/favphotos/1.jpg\",\n    \"/images/favphotos/2.jpg\",\n    \"/images/favphotos/3.jpg\",\n    \"/images/favphotos/4.jpg\",\n    \"/images/favphotos/5.jpg\",\n    \"/images/favphotos/6.jpg\",\n    \"/images/favphotos/7.jpg\",\n    \"/images/favphotos/8.jpg\",\n    \"/images/favphotos/9.jpg\",\n    \"/images/favphotos/10.jpg\",\n    \"/images/favphotos/11.jpg\",\n    \"/images/favphotos/12.jpg\",\n    \"/images/favphotos/13.jpg\",\n    \"/images/favphotos/14.jpg\",\n    \"/images/favphotos/15.jpg\",\n    \"/images/favphotos/16.jpg\",\n    \"/images/favphotos/17.jpg\",\n    \"/images/favphotos/18.jpg\",\n    \"/images/favphotos/19.jpg\",\n    \"/images/favphotos/20.jpg\",\n    \"/images/favphotos/21.jpg\",\n    \"/images/favphotos/22.jpg\",\n    \"/images/favphotos/23.jpg\",\n    \"/images/favphotos/24.jpg\",\n    \"/images/favphotos/25.jpg\",\n    \"/images/favphotos/26.jpg\",\n    \"/images/favphotos/27.jpg\",\n    \"/images/favphotos/28.jpg\",\n    \"/images/favphotos/29.jpg\"\n];\nconst shuffleArray = (array)=>{\n    let shuffledArray = array.slice();\n    for(let i = shuffledArray.length - 1; i > 0; i--){\n        const j = Math.floor(Math.random() * (i + 1));\n        [shuffledArray[i], shuffledArray[j]] = [\n            shuffledArray[j],\n            shuffledArray[i]\n        ];\n    }\n    return shuffledArray;\n};\nconst ProfileImage = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.chakra)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n    shouldForwardProp: (prop)=>[\n            \"width\",\n            \"height\",\n            \"src\",\n            \"alt\"\n        ].includes(prop)\n});\n_c = ProfileImage;\nconst Home = ()=>{\n    _s();\n    const [shuffledPhotos, setShuffledPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(shuffleArray(photos));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                    display: {\n                        md: \"flex\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                        flexGrow: 1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Heading, {\n                                as: \"h2\",\n                                variant: \"page-title\",\n                                children: \"Maxwell Guillermo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                textAlign: \"center\",\n                                className: \"jsx-f07e6b8423036da8\",\n                                children: \"An aspiring software engineer and a passionate product designer, transforming problems into fun and approachable solutions for all.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-f07e6b8423036da8\" + \" \" + \"gallery\",\n                    children: shuffledPhotos.slice(0, 8).map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-f07e6b8423036da8\" + \" \" + \"photo photo-\".concat(index),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-f07e6b8423036da8\" + \" \" + \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: src,\n                                    alt: \"Photo \".concat(index + 1),\n                                    className: \"jsx-f07e6b8423036da8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 5\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 1\n                }, undefined),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"f07e6b8423036da8\",\n                    children: \".gallery.jsx-f07e6b8423036da8{margin-top:20%;margin-bottom:-25%;left:10%;position:relative;width:auto;height:auto;display:grid;grid-template-columns:repeat(6,15%);grid-auto-rows:minmax(100px,auto);gap:4px}.photo.jsx-f07e6b8423036da8{position:relative;-webkit-transition:-webkit-transform 1s ease;-moz-transition:-moz-transform 1s ease;-o-transition:-o-transform 1s ease;transition:-webkit-transform 1s ease;transition:-moz-transform 1s ease;transition:-o-transform 1s ease;transition:transform 1s ease;-webkit-box-shadow:0 0px 0px rgba(0,0,0,0);-moz-box-shadow:0 0px 0px rgba(0,0,0,0);box-shadow:0 0px 0px rgba(0,0,0,0)}.photo-7.jsx-f07e6b8423036da8{grid-column:span 2;grid-row:span 4}.photo-0.jsx-f07e6b8423036da8{grid-column:span 3;grid-row:span 2}.photo-1.jsx-f07e6b8423036da8{grid-column:span 2;grid-row:span 3}.photo-2.jsx-f07e6b8423036da8{grid-column:4/6;grid-row:1/3}.photo-3.jsx-f07e6b8423036da8{grid-column:1/3;grid-row:3/5}.photo-4.jsx-f07e6b8423036da8{grid-column:3/5;grid-row:3/4}.photo-5.jsx-f07e6b8423036da8{grid-column:5/6;grid-row:3/5}.photo-6.jsx-f07e6b8423036da8{grid-column:3/6;grid-row:4/5}@media(max-width:768px){.gallery.jsx-f07e6b8423036da8{grid-template-columns:repeat(3,50%)}.photo-0.jsx-f07e6b8423036da8,.photo-1.jsx-f07e6b8423036da8,.photo-4.jsx-f07e6b8423036da8,.photo-5.jsx-f07e6b8423036da8{grid-column:span 2}}.image-container.jsx-f07e6b8423036da8{width:100%;height:auto;overflow:hidden}.image-container.jsx-f07e6b8423036da8 img.jsx-f07e6b8423036da8{width:100%;height:auto;display:block;border:4px solid lightgrey;-webkit-box-shadow:0px 0px 0px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 0px rgba(0,0,0,.5);box-shadow:0px 0px 0px rgba(0,0,0,.5);-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}\"\n                }, void 0, false, void 0, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/web/maxis-website/pages/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"8c2RcOgVQqoIpY+yAHKldbqH0zw=\");\n_c1 = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProfileImage\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDOzs7QUFBZ0M7QUFZUjtBQUNxQztBQUNmO0FBQ1E7QUFDTDtBQUNQO0FBQ087QUFDNkI7QUFDeEI7QUFHekI7QUFDRztBQUVqQyxnQ0FBZ0M7QUFDaEMsTUFBTTBCLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxlQUFlLENBQUNDLFFBQVU7SUFDOUIsSUFBSUMsZ0JBQWdCRCxNQUFNRSxLQUFLO0lBQy9CLElBQUssSUFBSUMsSUFBSUYsY0FBY0csTUFBTSxHQUFHLEdBQUdELElBQUksR0FBR0EsSUFBSztRQUNqRCxNQUFNRSxJQUFJQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTUwsQ0FBQUEsSUFBSTtRQUMxQyxDQUFDRixhQUFhLENBQUNFLEVBQUUsRUFBRUYsYUFBYSxDQUFDSSxFQUFFLENBQUMsR0FBRztZQUFDSixhQUFhLENBQUNJLEVBQUU7WUFBRUosYUFBYSxDQUFDRSxFQUFFO1NBQUM7SUFDN0U7SUFDQSxPQUFPRjtBQUNUO0FBRUEsTUFBTVEsZUFBZTNCLHlEQUFNQSxDQUFDYyxtREFBS0EsRUFBRTtJQUNqQ2MsbUJBQW1CQyxDQUFBQSxPQUFRO1lBQUM7WUFBUztZQUFVO1lBQU87U0FBTSxDQUFDQyxRQUFRLENBQUNEO0FBQ3hFOztBQUVBLE1BQU1FLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUNFLGFBQWFEO0lBRWxFLHFCQUNFLDhEQUFDVixtRUFBTUE7a0JBQ0wsNEVBQUNkLHdEQUFTQTs7OEJBR1IsOERBQUNFLGtEQUFHQTtvQkFBQ3dDLFNBQVM7d0JBQUVDLElBQUk7b0JBQU87OEJBQ3pCLDRFQUFDekMsa0RBQUdBO3dCQUFDMEMsVUFBVTs7MENBQ2IsOERBQUMzQyxzREFBT0E7Z0NBQUM0QyxJQUFHO2dDQUFLQyxTQUFROzBDQUFhOzs7Ozs7MENBR3RDLDhEQUFDQztnQ0FBRUMsV0FBVTs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVN4Qiw4REFBQ0M7OERBQWM7OEJBQ3RCVCxlQUFlWixLQUFLLENBQUMsR0FBRyxHQUFHc0IsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNwQyw4REFBQ0g7c0VBQTJCLGVBQXFCLE9BQU5HO3NDQUN6Qyw0RUFBQ0g7MEVBQWM7MENBQ2IsNEVBQUNJO29DQUFJRixLQUFLQTtvQ0FBS0csS0FBSyxTQUFtQixPQUFWRixRQUFROzs7Ozs7Ozs7Ozs7MkJBRi9CQTs7Ozs7Ozs7Ozs4QkFRZCw4REFBQ3RDLG1FQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RVA7R0E1R015QjtNQUFBQTs7QUE4R04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyLigKhpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgTGluayxcbiAgQ29udGFpbmVyLFxuICBIZWFkaW5nLFxuICBCb3gsXG4gIFNpbXBsZUdyaWQsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBjaGFrcmFcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IENoZXZyb25SaWdodEljb24sIEVtYWlsSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgQmlvU2VjdGlvbiwgQmlvWWVhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmlvJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCB7IEdyaWRJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9ncmlkLWl0ZW0nXG5pbXBvcnQgeyBJb0xvZ29Ud2l0dGVyLCBJb0xvZ29JbnN0YWdyYW0sIElvTG9nb0dpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XG5pbXBvcnQgeyBGYUxpbmtlZGluLCBGYURpc2NvcmQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gRGVmaW5lIHRoZSBsaXN0IG9mIHBob3RvIFVSTHNcbmNvbnN0IHBob3RvcyA9IFtcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzEuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzIuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzMuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzQuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzUuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzYuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzcuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzguanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzkuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzEwLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xMS5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTIuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzEzLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xNC5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTUuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzE2LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8xNy5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMTguanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzE5LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yMC5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjEuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzIyLmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yMy5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjQuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzI1LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yNi5qcGcnLFxuICAnL2ltYWdlcy9mYXZwaG90b3MvMjcuanBnJyxcbiAgJy9pbWFnZXMvZmF2cGhvdG9zLzI4LmpwZycsXG4gICcvaW1hZ2VzL2ZhdnBob3Rvcy8yOS5qcGcnLFxuXTtcblxuY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycmF5KSA9PiB7XG4gIGxldCBzaHVmZmxlZEFycmF5ID0gYXJyYXkuc2xpY2UoKTtcbiAgZm9yIChsZXQgaSA9IHNodWZmbGVkQXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbc2h1ZmZsZWRBcnJheVtpXSwgc2h1ZmZsZWRBcnJheVtqXV0gPSBbc2h1ZmZsZWRBcnJheVtqXSwgc2h1ZmZsZWRBcnJheVtpXV07XG4gIH1cbiAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59O1xuXG5jb25zdCBQcm9maWxlSW1hZ2UgPSBjaGFrcmEoSW1hZ2UsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gWyd3aWR0aCcsICdoZWlnaHQnLCAnc3JjJywgJ2FsdCddLmluY2x1ZGVzKHByb3ApXG59KVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbc2h1ZmZsZWRQaG90b3MsIHNldFNodWZmbGVkUGhvdG9zXSA9IHVzZVN0YXRlKHNodWZmbGVBcnJheShwaG90b3MpKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICBcblxuICAgICAgICA8Qm94IGRpc3BsYXk9e3sgbWQ6ICdmbGV4JyB9fT5cbiAgICAgICAgICA8Qm94IGZsZXhHcm93PXsxfT5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiB2YXJpYW50PVwicGFnZS10aXRsZVwiPlxuICAgICAgICAgICAgICBNYXh3ZWxsIEd1aWxsZXJtbyBcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxwIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICBBbiBhc3BpcmluZyBzb2Z0d2FyZSBlbmdpbmVlciBhbmQgYSBwYXNzaW9uYXRlIHByb2R1Y3QgZGVzaWduZXIsIHRyYW5zZm9ybWluZyBwcm9ibGVtcyBpbnRvIGZ1biBhbmQgYXBwcm9hY2hhYmxlIHNvbHV0aW9ucyBmb3IgYWxsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XG4gIHtzaHVmZmxlZFBob3Rvcy5zbGljZSgwLCA4KS5tYXAoKHNyYywgaW5kZXgpID0+IChcbiAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17YHBob3RvIHBob3RvLSR7aW5kZXh9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9e2BQaG90byAke2luZGV4ICsgMX1gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkpfVxuPC9kaXY+XG5cbjxMYXlvdXQ+XG4gIFxuPC9MYXlvdXQ+XG48c3R5bGUganN4PntgXG5cblxuLyogQmFzZSBzdHlsZXMgZm9yIHRoZSBnYWxsZXJ5ICovXG4uZ2FsbGVyeSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTI1JTtcbiAgbGVmdDogMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87IC8qIEhlaWdodCBzaG91bGQgYWRqdXN0IHRvIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMTUlKTsgLyogQ3JlYXRlcyBhIDQtY29sdW1uIGdyaWQgKi9cbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7IC8qIEFkanVzdCByb3cgaGVpZ2h0IHRvIGZpdCBjb250ZW50ICovXG4gIGdhcDogNHB4OyAvKiBTcGFjaW5nIGJldHdlZW4gcGhvdG9zICovXG59XG5cbi8qIFN0eWxlcyBmb3IgcGhvdG9zICovXG4ucGhvdG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi8qIEFkanVzdCB0aGUgZ3JpZCBsYXlvdXQgdG8gZml0IGxpa2UgcHV6emxlIHBpZWNlcyAqL1xuLnBob3RvLTcgeyBncmlkLWNvbHVtbjogc3BhbiAyOyBncmlkLXJvdzogc3BhbiA0OyB9IC8qIExhcmdlIGJsb2NrIGF0IHRoZSB0b3AtbGVmdCBjb3JuZXIgKi9cbi5waG90by0wIHsgZ3JpZC1jb2x1bW46IHNwYW4gMzsgZ3JpZC1yb3c6IHNwYW4gMjsgfSAvKiBMYXJnZSBibG9jayBhdCB0aGUgdG9wLWxlZnQgY29ybmVyICovXG4ucGhvdG8tMSB7IGdyaWQtY29sdW1uOiBzcGFuIDI7IGdyaWQtcm93OiBzcGFuIDM7IH0gLyogTGFyZ2UgYmxvY2sgc3Bhbm5pbmcgdGhyZWUgY29sdW1ucyBhbmQgdGhyZWUgcm93cyAqL1xuLnBob3RvLTIgeyBncmlkLWNvbHVtbjogNCAvIDY7IGdyaWQtcm93OiAxIC8gMzsgfSAvKiBWZXJ0aWNhbCBibG9jayBmaXR0aW5nIHRvIHRoZSBzaWRlIG9mIHBob3RvLTEgKi9cbi5waG90by0zIHsgZ3JpZC1jb2x1bW46IDEgLyAzOyBncmlkLXJvdzogMyAvIDU7IH0gLyogTGFyZ2UgYmxvY2sgdW5kZXIgcGhvdG8tMCAqL1xuLnBob3RvLTQgeyBncmlkLWNvbHVtbjogMyAvIDU7IGdyaWQtcm93OiAzIC8gNDsgfSAvKiBIb3Jpem9udGFsIGJsb2NrIG5leHQgdG8gcGhvdG8tMyAqL1xuLnBob3RvLTUgeyBncmlkLWNvbHVtbjogNSAvIDY7IGdyaWQtcm93OiAzIC8gNTsgfSAvKiBWZXJ0aWNhbCBibG9jayBmaXR0aW5nIHRvIHRoZSBzaWRlIG9mIHBob3RvLTQgKi9cbi5waG90by02IHsgZ3JpZC1jb2x1bW46IDMgLyA2OyBncmlkLXJvdzogNCAvIDU7IH0gLyogSG9yaXpvbnRhbCBibG9jayBmaXR0aW5nIHVuZGVyIHBob3RvLTQgYW5kIHBob3RvLTUgKi9cbi8qIEFkZGVkIC5waG90by02IGZvciBhIGNvbXBsZXRlIHB1enpsZSBmaXQgKi9cblxuLyogWW91IGNhbiBjb250aW51ZSB0aGUgcGF0dGVybiBmb3IgbW9yZSBwaG90b3MgaWYgbmVjZXNzYXJ5ICovXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5nYWxsZXJ5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1MCUpOyAvKiBBZGp1c3QgdG8gMi1jb2x1bW4gZ3JpZCBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gIH1cbiAgLnBob3RvLTAsIC5waG90by0xLCAucGhvdG8tNCwgLnBob3RvLTUge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7IC8qIEVhY2ggaW1hZ2UgdGFrZXMgZnVsbCB3aWR0aCBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxufVxuXG5cblxuICAvKiBTdHlsZXMgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC8qIFN0eWxlcyBmb3IgdGhlIGltYWdlICovXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRncmV5O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIFxuXG4gIFxuYH08L3N0eWxlPlxuXG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IHsgZ2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGFrcmEnXG5cblxuIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiTGluayIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJCb3giLCJTaW1wbGVHcmlkIiwiQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJjaGFrcmEiLCJDaGV2cm9uUmlnaHRJY29uIiwiRW1haWxJY29uIiwiUGFyYWdyYXBoIiwiQmlvU2VjdGlvbiIsIkJpb1llYXIiLCJMYXlvdXQiLCJTZWN0aW9uIiwiR3JpZEl0ZW0iLCJJb0xvZ29Ud2l0dGVyIiwiSW9Mb2dvSW5zdGFncmFtIiwiSW9Mb2dvR2l0aHViIiwiRmFMaW5rZWRpbiIsIkZhRGlzY29yZCIsIkltYWdlIiwidXNlU3RhdGUiLCJwaG90b3MiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsInNodWZmbGVkQXJyYXkiLCJzbGljZSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUHJvZmlsZUltYWdlIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiaW5jbHVkZXMiLCJIb21lIiwic2h1ZmZsZWRQaG90b3MiLCJzZXRTaHVmZmxlZFBob3RvcyIsImRpc3BsYXkiLCJtZCIsImZsZXhHcm93IiwiYXMiLCJ2YXJpYW50IiwicCIsInRleHRBbGlnbiIsImRpdiIsIm1hcCIsInNyYyIsImluZGV4IiwiaW1nIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});