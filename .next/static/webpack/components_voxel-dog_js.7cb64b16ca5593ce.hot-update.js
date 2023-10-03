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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst VoxelDog = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // Add a new state variable to hold the position\n    const [modelPosition, setModelPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0,\n        z: 0\n    });\n    // Updated model URL\n    const urlMozartGLB = \"/models/dragons.glb\";\n    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const { current: renderer  } = refRenderer;\n        const { current: container  } = refContainer;\n        if (container && renderer) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { current: container  } = refContainer;\n        if (container) {\n            const scW = container.clientWidth;\n            const scH = container.clientHeight;\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n            const target = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1, 0);\n            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(300 * Math.sin(0.2 * Math.PI), 20, 10 * Math.cos(0.2 * Math.PI));\n            const scale = scH * 0.005 + 4.8;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            // Existing AmbientLight for general illumination\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0x638592, 1);\n            scene.add(ambientLight);\n            const spotLight = new three__WEBPACK_IMPORTED_MODULE_4__.SpotLight(0xffffff); // Green light\n            spotLight.position.set(0, 5, 0);\n            spotLight.castShadow = true;\n            //scene.add(spotLight);\n            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            // Updated loadGLTFModel function call\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, urlMozartGLB, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(()=>{\n                animate();\n                setLoading(false);\n            });\n            let req = null;\n            let frame = 0;\n            const animate = ()=>{\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    const p = initialCameraPosition;\n                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 50;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer.render(scene, camera);\n            };\n            return ()=>{\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogSpinner, {}, void 0, false, {\n            fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/voxel-dog.js\",\n            lineNumber: 136,\n            columnNumber: 50\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/maxi/Desktop/Clone/maxis-website/components/voxel-dog.js\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VoxelDog, \"vhh2aENnEezYB4a6VNy5smrMpTw=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8wQyxnQkFBZ0IsQ0FBQyxVQUFVdkQsb0JBQW9CLEtBQUs7UUFDM0QsT0FBTyxJQUFNO1lBQ1hhLE9BQU8yQyxtQkFBbUIsQ0FBQyxVQUFVeEQsb0JBQW9CLEtBQUs7UUFDaEU7SUFDRixHQUFHO1FBQUNBO0tBQW1CO0lBRXZCLHFCQUNFLDhEQUFDaEIsMkRBQVlBO1FBQUN5RSxLQUFLbEU7a0JBQWVDLHlCQUFXLDhEQUFDVCx5REFBVUE7Ozs7Ozs7Ozs7QUFFNUQ7R0EvSE1PO0tBQUFBO0FBaUlOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgRG9nU3Bpbm5lciwgRG9nQ29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1kb2ctbG9hZGVyJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHJlZlJlbmRlcmVyID0gdXNlUmVmKClcblxuICAvLyBBZGQgYSBuZXcgc3RhdGUgdmFyaWFibGUgdG8gaG9sZCB0aGUgcG9zaXRpb25cbiAgY29uc3QgW21vZGVsUG9zaXRpb24sIHNldE1vZGVsUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwLCB6OiAwIH0pO1xuICBcbiAgXG4gIC8vIFVwZGF0ZWQgbW9kZWwgVVJMXG4gIGNvbnN0IHVybE1vemFydEdMQiA9ICcvbW9kZWxzL2RyYWdvbnMuZ2xiJztcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiByZW5kZXJlciB9ID0gcmVmUmVuZGVyZXJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgfVxuICB9LCBbXSlcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIGFscGhhOiB0cnVlXG4gICAgICB9KVxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXJcbiAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMSwgMClcbiAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAzMDAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgIClcblxuICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgMC4wMSxcbiAgICAgICAgNTAwMDBcbiAgICAgIClcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuXG4gIC8vIEV4aXN0aW5nIEFtYmllbnRMaWdodCBmb3IgZ2VuZXJhbCBpbGx1bWluYXRpb25cbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg2Mzg1OTIsIDEpOyAgXG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICAgIGNvbnN0IHNwb3RMaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYpOyAvLyBHcmVlbiBsaWdodFxuICAgICAgc3BvdExpZ2h0LnBvc2l0aW9uLnNldCgwLCA1LCAwKTtcbiAgICAgIHNwb3RMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgIC8vc2NlbmUuYWRkKHNwb3RMaWdodCk7XG5cbiAgICAgXG5cbiAgICAgIFxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgIC8vIFVwZGF0ZWQgbG9hZEdMVEZNb2RlbCBmdW5jdGlvbiBjYWxsXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmxNb3phcnRHTEIsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGFuaW1hdGUoKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcblxuICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICBpZiAoZnJhbWUgPD0gMTAwKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSA1MFxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID1cbiAgICAgICAgICAgIHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID1cbiAgICAgICAgICAgIHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgfVxuICB9LCBbaGFuZGxlV2luZG93UmVzaXplXSlcblxuICByZXR1cm4gKFxuICAgIDxEb2dDb250YWluZXIgcmVmPXtyZWZDb250YWluZXJ9Pntsb2FkaW5nICYmIDxEb2dTcGlubmVyIC8+fTwvRG9nQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiRG9nU3Bpbm5lciIsIkRvZ0NvbnRhaW5lciIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZlJlbmRlcmVyIiwibW9kZWxQb3NpdGlvbiIsInNldE1vZGVsUG9zaXRpb24iLCJ5IiwieiIsInVybE1vemFydEdMQiIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJyZW5kZXJlciIsImNvbnRhaW5lciIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2VuZSIsIlNjZW5lIiwidGFyZ2V0IiwiVmVjdG9yMyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJzcG90TGlnaHQiLCJTcG90TGlnaHQiLCJzZXQiLCJjYXN0U2hhZG93IiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n"));

/***/ })

});