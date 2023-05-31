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
exports.id = "pages/api/receitas";
exports.ids = ["pages/api/receitas"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/receitas.ts":
/*!*******************************!*\
  !*** ./pages/api/receitas.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(process.env.SITE_RECEITAS, {\n            headers: {\n                \"Ocp-Apim-Subscription-Key\": process.env.SITE_RECEITAS_TOKEN\n            }\n        });\n        res.status(200).json(response.data);\n    } catch (error) {\n        res.status(error.response?.status || 500).json({\n            error: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjZWl0YXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLGlEQUFTLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYSxFQUFDO1lBQ3ZEQyxTQUFTO2dCQUNQLDZCQUE2QkgsUUFBUUMsR0FBRyxDQUFDRyxtQkFBbUI7WUFDNUQ7UUFDTjtRQUNBUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUixTQUFTUyxJQUFJO0lBQ3BDLEVBQUUsT0FBT0MsT0FBTztRQUNkWCxJQUFJUSxNQUFNLENBQUNHLE1BQU1WLFFBQVEsRUFBRU8sVUFBVSxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBT0EsTUFBTUMsT0FBTztRQUFDO0lBQ3hFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1jaGF0Z3B0Ly4vcGFnZXMvYXBpL3JlY2VpdGFzLnRzPzkxN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5TSVRFX1JFQ0VJVEFTLHtcbiAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHByb2Nlc3MuZW52LlNJVEVfUkVDRUlUQVNfVE9LRU4sIFxuICAgICAgICAgIH1cbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJTSVRFX1JFQ0VJVEFTIiwiaGVhZGVycyIsIlNJVEVfUkVDRUlUQVNfVE9LRU4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/receitas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/receitas.ts"));
module.exports = __webpack_exports__;

})();