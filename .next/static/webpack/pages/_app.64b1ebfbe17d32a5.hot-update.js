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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/index.mjs\");\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#B0C4DE\", \"#2C3E50\")(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 23,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 5\n            }\n        }\n    },\n    Link: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst colors = {\n    grassTeal: \"#88ccca\",\n    viridian: \"#40826D\",\n    jade: \"#00A86B\",\n    tealGreen: \"#00827F\",\n    caribbeanGreen: \"#00CC99\",\n    mountainMeadow: \"#30BA8F\",\n    skyBlue: \"#87CEFA\",\n    powderBlue: \"#B0E0E6\",\n    aliceBlue: \"#F0F8FF\",\n    cornflowerBlue: \"#6495ED\",\n    cadetBlue: \"#5F9EA0\",\n    lightSteelBlue: \"#B0C4DE\",\n    deepBlue: \"#001F3F\",\n    secondaryBlue: \"#003366\",\n    platinum: \"#E5E5E5\",\n    goldCrayola: \"#E6B800\",\n    steelTeal: \"#5F8A8B\",\n    moonstoneBlue: \"#73A8AF\"\n};\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config,\n    styles,\n    components,\n    fonts,\n    colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsTUFBTUUsU0FBUztJQUNiQyxRQUFRQyxDQUFBQSxRQUFVO1lBQ2hCQyxNQUFNO2dCQUNKQyxJQUFJTCw0REFBSUEsQ0FBQyxXQUFXLFdBQVdHO1lBQ2pDO1FBQ0Y7QUFDRjtBQUVBLE1BQU1HLGFBQWE7SUFDakJDLFNBQVM7UUFDUEMsVUFBVTtZQUNSLGlCQUFpQjtnQkFDZkMsZ0JBQWdCO2dCQUNoQkMsVUFBVTtnQkFDVkMscUJBQXFCO2dCQUNyQkMscUJBQXFCO2dCQUNyQkMseUJBQXlCO2dCQUN6QkMsV0FBVztnQkFDWEMsY0FBYztZQUNoQjtRQUNGO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKQyxXQUFXZCxDQUFBQSxRQUFVO2dCQUNuQmUsT0FBT2xCLDREQUFJQSxDQUFDLFdBQVcsV0FBV0c7Z0JBQ2xDUSxxQkFBcUI7WUFDdkI7SUFDRjtBQUNGO0FBRUEsTUFBTVEsUUFBUTtJQUNaQyxTQUFTO0FBQ1g7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsZ0JBQWdCO0lBQ2hCQyxnQkFBZ0I7SUFDaEJDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGdCQUFnQjtJQUNoQkMsV0FBVztJQUNYQyxnQkFBZ0I7SUFDaEJDLFVBQVU7SUFDVkMsZUFBZTtJQUNmQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsV0FBVztJQUNYQyxlQUFlO0FBQ2pCO0FBR0EsTUFBTUMsU0FBUztJQUNiQyxrQkFBa0I7SUFDbEJDLG9CQUFvQixJQUFJO0FBQzFCO0FBRUEsTUFBTUMsUUFBUTVDLDZEQUFXQSxDQUFDO0lBQUV5QztJQUFRdkM7SUFBUUs7SUFBWWE7SUFBT0U7QUFBTztBQUN0RSwrREFBZXNCLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xuICAgIGJvZHk6IHtcbiAgICAgIGJnOiBtb2RlKCcjQjBDNERFJywgJyMyQzNFNTAnKShwcm9wcylcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIEhlYWRpbmc6IHtcbiAgICB2YXJpYW50czoge1xuICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgZm9udFNpemU6IDIzLFxuICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxuICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgTGluazoge1xuICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcbiAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBmb250cyA9IHtcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcbn1cblxuY29uc3QgY29sb3JzID0ge1xuICBncmFzc1RlYWw6ICcjODhjY2NhJyxcbiAgdmlyaWRpYW46ICcjNDA4MjZEJyxcbiAgamFkZTogJyMwMEE4NkInLFxuICB0ZWFsR3JlZW46ICcjMDA4MjdGJyxcbiAgY2FyaWJiZWFuR3JlZW46ICcjMDBDQzk5JyxcbiAgbW91bnRhaW5NZWFkb3c6ICcjMzBCQThGJyxcbiAgc2t5Qmx1ZTogJyM4N0NFRkEnLFxuICBwb3dkZXJCbHVlOiAnI0IwRTBFNicsXG4gIGFsaWNlQmx1ZTogJyNGMEY4RkYnLFxuICBjb3JuZmxvd2VyQmx1ZTogJyM2NDk1RUQnLFxuICBjYWRldEJsdWU6ICcjNUY5RUEwJyxcbiAgbGlnaHRTdGVlbEJsdWU6ICcjQjBDNERFJyxcbiAgZGVlcEJsdWU6ICcjMDAxRjNGJyxcbiAgc2Vjb25kYXJ5Qmx1ZTogJyMwMDMzNjYnLFxuICBwbGF0aW51bTogJyNFNUU1RTUnLFxuICBnb2xkQ3JheW9sYTogJyNFNkI4MDAnLFxuICBzdGVlbFRlYWw6ICcjNUY4QThCJyxcbiAgbW9vbnN0b25lQmx1ZTogJyM3M0E4QUYnXG59O1xuXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBmb250cywgY29sb3JzIH0pXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ3Jhc3NUZWFsIiwidmlyaWRpYW4iLCJqYWRlIiwidGVhbEdyZWVuIiwiY2FyaWJiZWFuR3JlZW4iLCJtb3VudGFpbk1lYWRvdyIsInNreUJsdWUiLCJwb3dkZXJCbHVlIiwiYWxpY2VCbHVlIiwiY29ybmZsb3dlckJsdWUiLCJjYWRldEJsdWUiLCJsaWdodFN0ZWVsQmx1ZSIsImRlZXBCbHVlIiwic2Vjb25kYXJ5Qmx1ZSIsInBsYXRpbnVtIiwiZ29sZENyYXlvbGEiLCJzdGVlbFRlYWwiLCJtb29uc3RvbmVCbHVlIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n"));

/***/ })

});