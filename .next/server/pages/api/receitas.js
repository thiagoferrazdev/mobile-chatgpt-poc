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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`https://api.zaffari.com.br/site-shopping/receitas?idCategoria=1&pageSize=99999`, {\n            headers: {\n                \"Ocp-Apim-Subscription-Key\": \"0bfe8e7ea79245e484e3dca6668137f9\"\n            }\n        });\n        res.status(200).json(response.data);\n    } catch (error) {\n        res.status(error.response?.status || 500).json({\n            error: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjZWl0YXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLGlEQUFTLENBQUMsQ0FBQyw4RUFBOEUsQ0FBQyxFQUFDO1lBQzlHTSxTQUFTO2dCQUNQLDZCQUE2QjtZQUM3QjtRQUNOO1FBQ0FILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKLFNBQVNLLElBQUk7SUFDcEMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RQLElBQUlJLE1BQU0sQ0FBQ0csTUFBTU4sUUFBUSxFQUFFRyxVQUFVLEtBQUtDLElBQUksQ0FBQztZQUFFRSxPQUFPQSxNQUFNQyxPQUFPO1FBQUM7SUFDeEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLWNoYXRncHQvLi9wYWdlcy9hcGkvcmVjZWl0YXMudHM/OTE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS56YWZmYXJpLmNvbS5ici9zaXRlLXNob3BwaW5nL3JlY2VpdGFzP2lkQ2F0ZWdvcmlhPTEmcGFnZVNpemU9OTk5OTlgLHtcbiAgICAgICAgaGVhZGVyczogeyBcbiAgICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6ICcwYmZlOGU3ZWE3OTI0NWU0ODRlM2RjYTY2NjgxMzdmOScsIFxuICAgICAgICAgIH1cbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/receitas.ts\n");

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