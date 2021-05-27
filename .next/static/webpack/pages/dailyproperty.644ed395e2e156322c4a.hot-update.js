webpackHotUpdate_N_E("pages/dailyproperty",{

/***/ "./components/home/dailyproperty/dailypropertyinput.js":
/*!*************************************************************!*\
  !*** ./components/home/dailyproperty/dailypropertyinput.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/input/input */ "./components/UI/input/input.js");
/* harmony import */ var _dailyproperty_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyproperty.module.css */ "./components/home/dailyproperty/dailyproperty.module.css");
/* harmony import */ var _dailyproperty_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dailyproperty_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\home\\dailyproperty\\dailypropertyinput.js",
    _this = undefined,
    _s = $RefreshSig$();





var DailyPropertyInput = function DailyPropertyInput() {
  _s();

  var dateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var propertyInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var newDailyProperty = {
      date: dateInputRef.current.value,
      value: propertyInputRef.current.value
    };
    console.log(newDailyProperty);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: _dailyproperty_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Direction,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: dateInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: _dailyproperty_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Direction,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ref: propertyInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: function onClick(e) {
          return submitHandler(e);
        },
        children: "\u062B\u0628\u062A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DailyPropertyInput, "VNA99oPDYjfkKWjNgJ7mJin/80Y=");

_c = DailyPropertyInput;
/* harmony default export */ __webpack_exports__["default"] = (DailyPropertyInput);

var _c;

$RefreshReg$(_c, "DailyPropertyInput");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2RhaWx5cHJvcGVydHkvZGFpbHlwcm9wZXJ0eWlucHV0LmpzIl0sIm5hbWVzIjpbIkRhaWx5UHJvcGVydHlJbnB1dCIsImRhdGVJbnB1dFJlZiIsInVzZVJlZiIsInByb3BlcnR5SW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3RGFpbHlQcm9wZXJ0eSIsImRhdGUiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIkRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxFQUEvQjs7QUFDQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJDLFVBQUksRUFBRVAsWUFBWSxDQUFDUSxPQUFiLENBQXFCQyxLQURKO0FBRXZCQSxXQUFLLEVBQUVQLGdCQUFnQixDQUFDTSxPQUFqQixDQUF5QkM7QUFGVCxLQUF6QjtBQUtBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsZ0JBQVo7QUFDRCxHQVJEOztBQVNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVNLGdFQUFPLENBQUNDLFNBQXZCO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFBTyxXQUFHLEVBQUViO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUksZUFBUyxFQUFFWSxnRUFBTyxDQUFDQyxTQUF2QjtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQU8sV0FBRyxFQUFFWDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFPRTtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxpQkFBUyxFQUFDLG1CQUZaO0FBR0UsZUFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsaUJBQU9ELGFBQWEsQ0FBQ0MsQ0FBRCxDQUFwQjtBQUFBLFNBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQW1CRCxDQS9CRDs7R0FBTUwsa0I7O0tBQUFBLGtCO0FBZ0NTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYWlseXByb3BlcnR5LjY0NGVkMzk1ZTJlMTU2MzIyYzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uL1VJL2lucHV0L2lucHV0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2RhaWx5cHJvcGVydHkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEYWlseVByb3BlcnR5SW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJvcGVydHlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3RGFpbHlQcm9wZXJ0eSA9IHtcclxuICAgICAgZGF0ZTogZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIHZhbHVlOiBwcm9wZXJ0eUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG5ld0RhaWx5UHJvcGVydHkpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy5EaXJlY3Rpb259PlxyXG4gICAgICAgIDxJbnB1dCByZWY9e2RhdGVJbnB1dFJlZn0gLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy5EaXJlY3Rpb259PlxyXG4gICAgICAgIDxJbnB1dCByZWY9e3Byb3BlcnR5SW5wdXRSZWZ9IC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXRIYW5kbGVyKGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgINir2KjYqlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYWlseVByb3BlcnR5SW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==