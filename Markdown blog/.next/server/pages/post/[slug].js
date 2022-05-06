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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ PostPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync('posts');\n    const paths = files.map((fileName)=>({\n            params: {\n                slug: fileName.replace('.md', '')\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`posts/${slug}.md`, 'utf-8');\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);\n    return {\n        props: {\n            frontmatter,\n            content\n        }\n    };\n}\nfunction PostPage({ frontmatter , content  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"prose mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: frontmatter.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Downloads\\\\next-markdown-blog-master\\\\Markdown blog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Downloads\\\\next-markdown-blog-master\\\\Markdown blog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Downloads\\\\next-markdown-blog-master\\\\Markdown blog\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUI7QUFDYTtBQUNKO0FBRXJCLGVBQWVHLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHSixxREFBYyxDQUFDLENBQU87SUFDcEMsS0FBSyxDQUFDTSxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBRyxFQUFFQyxRQUFRLElBQU0sQ0FBQztZQUN0Q0MsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLElBQUksRUFBRUYsUUFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBSyxNQUFFLENBQUU7WUFDbEMsQ0FBQztRQUNILENBQUM7O0lBQ0QsTUFBTSxDQUFDLENBQUM7UUFDTkwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUVNLGVBQWVDLGNBQWMsQ0FBQyxDQUFDLENBQUNKLE1BQU0sRUFBRSxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsS0FBSyxDQUFDRixRQUFRLEdBQUdSLHNEQUFlLEVBQUUsTUFBTSxFQUFFVSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQU87SUFDNUQsS0FBSyxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxFQUFFQyxXQUFXLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdoQixrREFBTSxDQUFDTyxRQUFRO0lBQ3RELE1BQU0sQ0FBQyxDQUFDO1FBQ05VLEtBQUssRUFBRSxDQUFDO1lBQ05GLFdBQVc7WUFDWEMsT0FBTztRQUNULENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVjLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQ0gsV0FBVyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBZTs7d0ZBQzNCQyxDQUFFOzBCQUFFTixXQUFXLENBQUNPLEtBQUs7Ozs7Ozt3RkFDckJILENBQUc7Z0JBQUNJLHVCQUF1QixFQUFFLENBQUM7b0JBQUNDLE1BQU0sRUFBRXZCLGtEQUFFLEdBQUd3QixNQUFNLENBQUNULE9BQU87Z0JBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBR3BFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2cvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBtZCBmcm9tICdtYXJrZG93bi1pdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygncG9zdHMnKTtcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogZmlsZU5hbWUucmVwbGFjZSgnLm1kJywgJycpLFxuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xuICBjb25zdCBmaWxlTmFtZSA9IGZzLnJlYWRGaWxlU3luYyhgcG9zdHMvJHtzbHVnfS5tZGAsICd1dGYtOCcpO1xuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZU5hbWUpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmcm9udG1hdHRlcixcbiAgICAgIGNvbnRlbnQsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2UoeyBmcm9udG1hdHRlciwgY29udGVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb3NlIG14LWF1dG8nPlxuICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1kKCkucmVuZGVyKGNvbnRlbnQpIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJtYXR0ZXIiLCJtZCIsImdldFN0YXRpY1BhdGhzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInBhdGhzIiwibWFwIiwiZmlsZU5hbWUiLCJwYXJhbXMiLCJzbHVnIiwicmVwbGFjZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiZnJvbnRtYXR0ZXIiLCJjb250ZW50IiwicHJvcHMiLCJQb3N0UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();