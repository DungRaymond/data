"use strict";
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": () => (/* binding */ HomePage),\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__]);\n([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nconst options = {\n    scales: {\n        x: {\n            stacked: true\n        },\n        y: {\n            stacked: true\n        }\n    },\n    responsive: true,\n    plugins: {\n        title: {\n            display: true,\n            text: \"Mega 6-45 - Stacked\"\n        }\n    }\n};\nconst labels = [\n    \"19\",\n    \"24\",\n    \"30\",\n    \"37\",\n    \"44\",\n    \"06\",\n    \"35\",\n    \"05\",\n    \"04\",\n    \"01\",\n    \"07\",\n    \"25\",\n    \"10\",\n    \"11\",\n    \"40\",\n    \"13\",\n    \"18\",\n    \"27\",\n    \"16\",\n    \"21\",\n    \"22\",\n    \"41\",\n    \"20\",\n    \"26\",\n    \"28\",\n    \"32\",\n    \"17\",\n    \"45\",\n    \"31\",\n    \"33\",\n    \"12\",\n    \"23\",\n    \"34\",\n    \"39\",\n    \"08\",\n    \"36\",\n    \"02\",\n    \"09\",\n    \"29\",\n    \"03\",\n    \"43\",\n    \"14\",\n    \"42\",\n    \"15\",\n    \"38\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"\",\n            data: [\n                149,\n                143,\n                143,\n                139,\n                144,\n                145,\n                137,\n                140,\n                136,\n                137,\n                134,\n                135,\n                136,\n                133,\n                133,\n                131,\n                134,\n                129,\n                126,\n                127,\n                126,\n                127,\n                124,\n                126,\n                128,\n                124,\n                123,\n                127,\n                125,\n                122,\n                123,\n                125,\n                126,\n                120,\n                122,\n                121,\n                116,\n                118,\n                120,\n                117,\n                115,\n                115,\n                113,\n                110,\n                110\n            ],\n            backgroundColor: \"rgba(255, 99, 132, 0.7)\"\n        },\n        {\n            label: \"\",\n            data: [\n                2,\n                6,\n                4,\n                8,\n                2,\n                1,\n                8,\n                3,\n                6,\n                3,\n                5,\n                4,\n                2,\n                3,\n                5,\n                4,\n                2,\n                5,\n                6,\n                4,\n                6,\n                4,\n                6,\n                5,\n                1,\n                6,\n                5,\n                1,\n                3,\n                6,\n                4,\n                2,\n                1,\n                5,\n                3,\n                3,\n                7,\n                5,\n                3,\n                5,\n                7,\n                4,\n                5,\n                6,\n                6\n            ],\n            backgroundColor: \"rgba(53, 162, 235, 0.7)\"\n        }\n    ]\n};\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n        options: options,\n        data: data\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\data\\\\pages\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFRa0I7QUFDb0I7QUFFdENDLG9EQUFnQixDQUNkQyxtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGdEQUFVQSxFQUNWQywyQ0FBS0EsRUFDTEMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdELE1BQU1HLFVBQVU7SUFDckJDLFFBQVE7UUFDTkMsR0FBRztZQUNEQyxTQUFTLElBQUk7UUFDZjtRQUNBQyxHQUFHO1lBQ0RELFNBQVMsSUFBSTtRQUNmO0lBQ0Y7SUFDQUUsWUFBWSxJQUFJO0lBQ2hCQyxTQUFTO1FBQ1BDLE9BQU87WUFDTEMsU0FBUyxJQUFJO1lBQ2JDLE1BQU07UUFDUjtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFNBQVM7SUFBQztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7SUFBSztJQUFLO0lBQUs7Q0FBSztBQUUxTyxNQUFNQyxPQUFPO0lBQ2xCRDtJQUNBRSxVQUFVO1FBQ1I7WUFDRUMsT0FBTztZQUNQRixNQUFNO2dCQUFDO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2FBQUk7WUFDM0xHLGlCQUFpQjtRQUNuQjtRQUNBO1lBQ0VELE9BQU87WUFDUEYsTUFBTTtnQkFBQztnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTtnQkFBRTthQUFFO1lBQ2pHRyxpQkFBaUI7UUFDbkI7S0FDRDtBQUNILEVBQUU7QUFFSyxTQUFTQyxXQUFXO0lBQ3pCLHFCQUNBLDhEQUFDakIsZ0RBQUdBO1FBQUNFLFNBQVNBO1FBQVNXLE1BQU1BOzs7Ozs7QUFFL0IsQ0FBQztBQUlELGlFQUFlSSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgQmFyRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgc2NhbGVzOiB7XHJcbiAgICB4OiB7XHJcbiAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgeToge1xyXG4gICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgcGx1Z2luczoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgdGV4dDogJ01lZ2EgNi00NSAtIFN0YWNrZWQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgbGFiZWxzID0gWycxOScsJzI0JywnMzAnLCczNycsJzQ0JywnMDYnLCczNScsJzA1JywnMDQnLCcwMScsJzA3JywnMjUnLCcxMCcsJzExJywnNDAnLCcxMycsJzE4JywnMjcnLCcxNicsJzIxJywnMjInLCc0MScsJzIwJywnMjYnLCcyOCcsJzMyJywnMTcnLCc0NScsJzMxJywnMzMnLCcxMicsJzIzJywnMzQnLCczOScsJzA4JywnMzYnLCcwMicsJzA5JywnMjknLCcwMycsJzQzJywnMTQnLCc0MicsJzE1JywnMzgnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gIGxhYmVscyxcclxuICBkYXRhc2V0czogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJycsXHJcbiAgICAgIGRhdGE6IFsxNDksMTQzLDE0MywxMzksMTQ0LDE0NSwxMzcsMTQwLDEzNiwxMzcsMTM0LDEzNSwxMzYsMTMzLDEzMywxMzEsMTM0LDEyOSwxMjYsMTI3LDEyNiwxMjcsMTI0LDEyNiwxMjgsMTI0LDEyMywxMjcsMTI1LDEyMiwxMjMsMTI1LDEyNiwxMjAsMTIyLDEyMSwxMTYsMTE4LDEyMCwxMTcsMTE1LDExNSwxMTMsMTEwLDExMF0sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjcpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgZGF0YTogWzIsNiw0LDgsMiwxLDgsMyw2LDMsNSw0LDIsMyw1LDQsMiw1LDYsNCw2LDQsNiw1LDEsNiw1LDEsMyw2LDQsMiwxLDUsMywzLDcsNSwzLDUsNyw0LDUsNiw2XSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1MywgMTYyLCAyMzUsIDAuNyknLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybihcclxuICA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2RhdGF9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkJhciIsInJlZ2lzdGVyIiwib3B0aW9ucyIsInNjYWxlcyIsIngiLCJzdGFja2VkIiwieSIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();