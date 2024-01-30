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

/***/ "./src/components/graph/graph.tsx":
/*!****************************************!*\
  !*** ./src/components/graph/graph.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\nvar _this = undefined;\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement);\nvar Graph = function() {\n    var mydata;\n    fetch(\"http://localhost:8000/api/data\").then(function(data) {\n        mydata = data;\n    })[\"catch\"](function(error) {\n        console.error(error);\n    });\n    var data = {\n        labels: [\n            \"2016\",\n            \"2017\",\n            \"2018\",\n            \"2019\",\n            \"2020\",\n            \"2021\",\n            \"2022\",\n            \"2023\"\n        ],\n        datasets: [\n            {\n                label: \"# of Votes\",\n                data: [\n                    10,\n                    20,\n                    50,\n                    10,\n                    20,\n                    50,\n                    60,\n                    80\n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    var options = {\n        Colors: [\n            \"black\"\n        ],\n        maintainAspectRatio: false,\n        scales: {\n            y: {\n                beginAtZero: true\n            }\n        },\n        legend: {\n            labels: {\n                fontSize: 26\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                data: data,\n                height: \"210px\",\n                options: options\n            }, void 0, false, {\n                fileName: \"/home/shubham/Desktop/project 1/shubham-app/src/components/graph/graph.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/shubham/Desktop/project 1/shubham-app/src/components/graph/graph.tsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = Graph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\nvar _c;\n$RefreshReg$(_c, \"Graph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ncmFwaC9ncmFwaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQytFO0FBQ2xFO0FBRXRDRSwyQ0FBT0EsQ0FBQ00sUUFBUSxDQUNkTCxtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGlEQUFXQSxFQUNYQyxrREFBWUE7QUFHZCxJQUFNRyxRQUFRO0lBRWIsSUFBSUM7SUFDTEMsTUFBTSxrQ0FDSEMsSUFBSSxDQUFDQyxTQUFBQTtRQUNESCxTQUFPRztJQUNaLEVBQ0NDLENBQUFBLFFBQUssQ0FBQ0MsU0FBQUE7UUFDTEMsUUFBUUQsS0FBSyxDQUFDQTtJQUNoQjtJQUVELElBQU9GLE9BQU07UUFDWEksUUFBUTtZQUFDO1lBQVE7WUFBUTtZQUFRO1lBQVE7WUFBUTtZQUFPO1lBQU87U0FBTztRQUNyRUMsVUFBVTtZQUFDO2dCQUNUQyxPQUFPO2dCQUNQTixNQUFNO29CQUFDO29CQUFJO29CQUFJO29CQUFJO29CQUFJO29CQUFJO29CQUFHO29CQUFHO2lCQUFHO2dCQUNwQ08sYUFBYTtZQUNmO1NBQUU7SUFDSjtJQUNBLElBQU1DLFVBQVE7UUFDWkMsUUFBTztZQUFDO1NBQVE7UUFDaEJDLHFCQUFvQjtRQUNwQkMsUUFBUTtZQUNOQyxHQUFHO2dCQUNEQyxhQUFhO1lBQ2Y7UUFDRjtRQUNBQyxRQUFPO1lBQ0xWLFFBQU87Z0JBQ0xXLFVBQVM7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDQSw0RUFBQ0M7c0JBQ0MsNEVBQUN0QixpREFBSUE7Z0JBRUxNLE1BQU1BO2dCQUNOaUIsUUFBUTtnQkFDUlQsU0FBU0E7Ozs7Ozs7Ozs7OztBQUtmO0tBOUNNWjtBQWdETiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ncmFwaC9ncmFwaC50c3g/NmYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBMaW5lRWxlbWVudCwgUG9pbnRFbGVtZW50LCBDb2xvcnN9IGZyb20gJ2NoYXJ0LmpzJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIExpbmVFbGVtZW50LFxuICBQb2ludEVsZW1lbnRcbilcblxuY29uc3QgR3JhcGggPSAoKSA9PiB7XG5cbiB2YXIgbXlkYXRhO1xuZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZGF0YScpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgICAgIG15ZGF0YT1kYXRhO1xuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9KTtcblxuIGNvbnN0ICBkYXRhPSB7XG4gICBsYWJlbHM6IFsnMjAxNicsICcyMDE3JywgJzIwMTgnLCAnMjAxOScsICcyMDIwJywgJzIwMjEnLCcyMDIyJywnMjAyMyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcbiAgICAgIGRhdGE6IFsxMCwgMjAsIDUwLCAxMCwgMjAsIDUwLDYwLDgwXSxcbiAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgfV1cbiAgfVxuICBjb25zdCBvcHRpb25zPXtcbiAgICBDb2xvcnM6WydibGFjayddLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86ZmFsc2UsXG4gICAgc2NhbGVzOiB7XG4gICAgICB5OiB7XG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBsZWdlbmQ6e1xuICAgICAgbGFiZWxzOntcbiAgICAgICAgZm9udFNpemU6MjYsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXY+XG4gICAgICA8TGluZVxuICAgICAgXG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgaGVpZ2h0PXsnMjEwcHgnfVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGgiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJMaW5lRWxlbWVudCIsIlBvaW50RWxlbWVudCIsIkxpbmUiLCJyZWdpc3RlciIsIkdyYXBoIiwibXlkYXRhIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsIkNvbG9ycyIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJsZWdlbmQiLCJmb250U2l6ZSIsImRpdiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/graph/graph.tsx\n"));

/***/ })

});