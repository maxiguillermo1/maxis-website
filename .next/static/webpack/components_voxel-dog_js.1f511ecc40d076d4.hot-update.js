"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-dog_js",{

/***/ "./lib/model.js":
/*!**********************!*\
  !*** ./lib/model.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadGLTFModel\": function() { return /* binding */ loadGLTFModel; }\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\nfunction loadGLTFModel(scene, glbPath) {\n    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {\n        receiveShadow: true,\n        castShadow: true\n    };\n    const { receiveShadow , castShadow  } = options;\n    return new Promise((resolve, reject)=>{\n        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\n        loader.load(glbPath, (gltf)=>{\n            const obj = gltf.scene;\n            obj.name = \"dog\";\n            obj.position.y = 0;\n            obj.position.x = 1;\n            obj.receiveShadow = receiveShadow;\n            obj.castShadow = castShadow;\n            scene.add(obj);\n            obj.traverse(function(child) {\n                if (child.isMesh) {\n                    child.castShadow = castShadow;\n                    child.receiveShadow = receiveShadow;\n                }\n            });\n            resolve(obj);\n        }, undefined, function(error) {\n            reject(error);\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0U7QUFFM0QsU0FBU0MsY0FDZEMsS0FBSyxFQUNMQyxPQUFPLEVBRVA7UUFEQUMsVUFBQUEsaUVBQVU7UUFBRUMsZUFBZSxJQUFJO1FBQUVDLFlBQVksSUFBSTtJQUFDLENBQUM7SUFFbkQsTUFBTSxFQUFFRCxjQUFhLEVBQUVDLFdBQVUsRUFBRSxHQUFHRjtJQUN0QyxPQUFPLElBQUlHLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUN0QyxNQUFNQyxTQUFTLElBQUlWLDZFQUFVQTtRQUU3QlUsT0FBT0MsSUFBSSxDQUNUUixTQUNBUyxDQUFBQSxPQUFRO1lBQ04sTUFBTUMsTUFBTUQsS0FBS1YsS0FBSztZQUN0QlcsSUFBSUMsSUFBSSxHQUFHO1lBQ1hELElBQUlFLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHO1lBQ2pCSCxJQUFJRSxRQUFRLENBQUNFLENBQUMsR0FBRztZQUNqQkosSUFBSVIsYUFBYSxHQUFHQTtZQUNwQlEsSUFBSVAsVUFBVSxHQUFHQTtZQUNqQkosTUFBTWdCLEdBQUcsQ0FBQ0w7WUFFVkEsSUFBSU0sUUFBUSxDQUFDLFNBQVVDLEtBQUssRUFBRTtnQkFDNUIsSUFBSUEsTUFBTUMsTUFBTSxFQUFFO29CQUNoQkQsTUFBTWQsVUFBVSxHQUFHQTtvQkFDbkJjLE1BQU1mLGFBQWEsR0FBR0E7Z0JBQ3hCLENBQUM7WUFDSDtZQUNBRyxRQUFRSztRQUNWLEdBQ0FTLFdBQ0EsU0FBVUMsS0FBSyxFQUFFO1lBQ2ZkLE9BQU9jO1FBQ1Q7SUFFSjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL21vZGVsLmpzPzBhM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR0xURk1vZGVsKFxuICBzY2VuZSxcbiAgZ2xiUGF0aCxcbiAgb3B0aW9ucyA9IHsgcmVjZWl2ZVNoYWRvdzogdHJ1ZSwgY2FzdFNoYWRvdzogdHJ1ZSB9XG4pIHtcbiAgY29uc3QgeyByZWNlaXZlU2hhZG93LCBjYXN0U2hhZG93IH0gPSBvcHRpb25zXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuXG4gICAgbG9hZGVyLmxvYWQoXG4gICAgICBnbGJQYXRoLFxuICAgICAgZ2x0ZiA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IGdsdGYuc2NlbmVcbiAgICAgICAgb2JqLm5hbWUgPSAnZG9nJ1xuICAgICAgICBvYmoucG9zaXRpb24ueSA9IDBcbiAgICAgICAgb2JqLnBvc2l0aW9uLnggPSAxXG4gICAgICAgIG9iai5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvd1xuICAgICAgICBvYmouY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcbiAgICAgICAgc2NlbmUuYWRkKG9iailcblxuICAgICAgICBvYmoudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLmlzTWVzaCkge1xuICAgICAgICAgICAgY2hpbGQuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3dcbiAgICAgICAgICAgIGNoaWxkLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXNvbHZlKG9iailcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJHTFRGTG9hZGVyIiwibG9hZEdMVEZNb2RlbCIsInNjZW5lIiwiZ2xiUGF0aCIsIm9wdGlvbnMiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJvYmoiLCJuYW1lIiwicG9zaXRpb24iLCJ5IiwieCIsImFkZCIsInRyYXZlcnNlIiwiY2hpbGQiLCJpc01lc2giLCJ1bmRlZmluZWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/model.js\n"));

/***/ })

});