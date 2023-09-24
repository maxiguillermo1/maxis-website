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

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Updated model URL\n    const urlMozartGLB = \"/models/mozart-voxel.glb\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer  } = refRenderer;\n        const { current: container  } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            // Updated loadGLTFModel function call\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, urlMozartGLB, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 100;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogSpinner, {}, void 0, false, {\n            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/voxel-dog.js\",\n            lineNumber: 124,\n            columnNumber: 50\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/voxel-dog.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"zURt50pwc+mytDe3zC6SvtguxBo=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgRG9nU3Bpbm5lciwgRG9nQ29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1kb2ctbG9hZGVyJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHJlZlJlbmRlcmVyID0gdXNlUmVmKClcbiAgXG4gIC8vIFVwZGF0ZWQgbW9kZWwgVVJMXG4gIGNvbnN0IHVybE1vemFydEdMQiA9ICcvbW9kZWxzL21vemFydC12b3hlbC5nbGInO1xuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IHJlbmRlcmVyIH0gPSByZWZSZW5kZXJlclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgIH0pXG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcbiAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgIHJlZlJlbmRlcmVyLmN1cnJlbnQgPSByZW5kZXJlclxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApXG4gICAgICBjb25zdCBpbml0aWFsQ2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgIClcblxuICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgMC4wMSxcbiAgICAgICAgNTAwMDBcbiAgICAgIClcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxuICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgIC8vIFVwZGF0ZWQgbG9hZEdMVEZNb2RlbCBmdW5jdGlvbiBjYWxsXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmxNb3phcnRHTEIsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcblxuICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMDBcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9XG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9XG4gICAgICAgICAgICBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmUoKVxuICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxuICAgIH1cbiAgfSwgW2hhbmRsZVdpbmRvd1Jlc2l6ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8RG9nQ29udGFpbmVyIHJlZj17cmVmQ29udGFpbmVyfT57bG9hZGluZyAmJiA8RG9nU3Bpbm5lciAvPn08L0RvZ0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIkRvZ1NwaW5uZXIiLCJEb2dDb250YWluZXIiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsRG9nIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWZSZW5kZXJlciIsInVybE1vemFydEdMQiIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJyZW5kZXJlciIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2VuZSIsIlNjZW5lIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});