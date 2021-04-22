webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/_app.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _components_wholeProperty_wholeProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/wholeProperty/wholeProperty */ "./components/wholeProperty/wholeProperty.js");
/* harmony import */ var _components_property_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/property/property */ "./components/property/property.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _components_layoutselector_layoutselector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layoutselector/layoutselector */ "./components/layoutselector/layoutselector.js");
/* harmony import */ var _components_dailyproperty_dailyproperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/dailyproperty/dailyproperty */ "./components/dailyproperty/dailyproperty.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");


var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();












var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("property"),
      layout = _useState[0],
      setLayout = _useState[1];

  var changeToProperty = function changeToProperty() {
    setLayout("property");
  };

  var changeToDailyProperty = function changeToDailyProperty() {
    setLayout("dailyproperty");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.Content,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: [layout && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_wholeProperty_wholeProperty__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layoutselector_layoutselector__WEBPACK_IMPORTED_MODULE_7__["default"], {
        changeToDailyProperty: changeToDailyProperty,
        changeToProperty: changeToProperty
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), layout === "property" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_property_property__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 34
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dailyproperty_dailyproperty__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 49
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "aEq6sFdcC2ebAasChRHWTtf7nPw=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImxheW91dCIsInNldExheW91dCIsImNoYW5nZVRvUHJvcGVydHkiLCJjaGFuZ2VUb0RhaWx5UHJvcGVydHkiLCJjbGFzc2VzIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsVUFBRCxDQURaO0FBQUEsTUFDZEMsTUFEYztBQUFBLE1BQ1BDLFNBRE87O0FBRXJCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QkQsYUFBUyxDQUFDLFVBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBR0EsTUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDRixhQUFTLENBQUMsZUFBRCxDQUFUO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsd0RBQU8sQ0FBQ0MsT0FBeEI7QUFBQSwyQkFDRSxxRUFBQyxrRUFBRDtBQUFBLGlCQUNHTCxNQUFNLGlCQUFJLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYixlQUVFLHFFQUFDLGlGQUFEO0FBQ0UsNkJBQXFCLEVBQUVHLHFCQUR6QjtBQUVFLHdCQUFnQixFQUFFRDtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsRUFNR0YsTUFBTSxLQUFLLFVBQVgsZ0JBQXdCLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeEIsZ0JBQXVDLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FwQkQ7O0dBQU1GLFE7O0tBQUFBLFE7QUFzQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjMTc0ZjQwY2Q5N2QwMzcyZWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXInO1xyXG5pbXBvcnQgV2hvbGVQcm9wZXJ0eSBmcm9tICcuLi9jb21wb25lbnRzL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eSc7XHJcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9jb21wb25lbnRzL3Byb3BlcnR5L3Byb3BlcnR5JztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XHJcbmltcG9ydCBMYXlvdXRTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzZWxlY3Rvci9sYXlvdXRzZWxlY3RvclwiO1xyXG5pbXBvcnQgRGFpbHlQcm9wZXJ0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYWlseXByb3BlcnR5L2RhaWx5cHJvcGVydHlcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xheW91dCxzZXRMYXlvdXRdPXVzZVN0YXRlKFwicHJvcGVydHlcIik7XHJcbiAgY29uc3QgY2hhbmdlVG9Qcm9wZXJ0eSA9ICgpID0+IHtcclxuICAgIHNldExheW91dChcInByb3BlcnR5XCIpO1xyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VUb0RhaWx5UHJvcGVydHkgPSAoKSA9PiB7XHJcbiAgICBzZXRMYXlvdXQoXCJkYWlseXByb3BlcnR5XCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIHtsYXlvdXQgJiYgPFdob2xlUHJvcGVydHkgLz59XHJcbiAgICAgICAgPExheW91dFNlbGVjdG9yXHJcbiAgICAgICAgICBjaGFuZ2VUb0RhaWx5UHJvcGVydHk9e2NoYW5nZVRvRGFpbHlQcm9wZXJ0eX1cclxuICAgICAgICAgIGNoYW5nZVRvUHJvcGVydHk9e2NoYW5nZVRvUHJvcGVydHl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7bGF5b3V0ID09PSBcInByb3BlcnR5XCIgPyA8UHJvcGVydHkgLz4gOiA8RGFpbHlQcm9wZXJ0eSAvPn1cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==