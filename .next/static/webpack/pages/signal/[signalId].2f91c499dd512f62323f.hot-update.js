webpackHotUpdate_N_E("pages/signal/[signalId]",{

/***/ "./components/signal/signaldetail.js":
/*!*******************************************!*\
  !*** ./components/signal/signaldetail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\signal\\signaldetail.js",
    _this = undefined;

var SignalDetail = function SignalDetail(props) {
  var _props$signalData = props.signalData,
      name = _props$signalData.name,
      type = _props$signalData.type,
      duration = _props$signalData.duration,
      createdTime = _props$signalData.createdTime,
      target1 = _props$signalData.target1,
      target2 = _props$signalData.target2,
      target3 = _props$signalData.target3,
      stopLoss = _props$signalData.stopLoss,
      leverage = _props$signalData.leverage;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mt-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: duration
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: createdTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: target1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: target2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: target3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: stopLoss
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: leverage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }, _this);
};

_c = SignalDetail;
/* harmony default export */ __webpack_exports__["default"] = (SignalDetail);

var _c;

$RefreshReg$(_c, "SignalDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlNpZ25hbERldGFpbCIsInByb3BzIiwic2lnbmFsRGF0YSIsIm5hbWUiLCJ0eXBlIiwiZHVyYXRpb24iLCJjcmVhdGVkVGltZSIsInRhcmdldDEiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsInN0b3BMb3NzIiwibGV2ZXJhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLDBCQUM0REEsS0FBSyxDQUFDQyxVQURsRTtBQUFBLE1BQ3RCQyxJQURzQixxQkFDdEJBLElBRHNCO0FBQUEsTUFDakJDLElBRGlCLHFCQUNqQkEsSUFEaUI7QUFBQSxNQUNaQyxRQURZLHFCQUNaQSxRQURZO0FBQUEsTUFDSEMsV0FERyxxQkFDSEEsV0FERztBQUFBLE1BQ1VDLE9BRFYscUJBQ1VBLE9BRFY7QUFBQSxNQUNtQkMsT0FEbkIscUJBQ21CQSxPQURuQjtBQUFBLE1BQzZCQyxPQUQ3QixxQkFDNkJBLE9BRDdCO0FBQUEsTUFDc0NDLFFBRHRDLHFCQUNzQ0EsUUFEdEM7QUFBQSxNQUNnREMsUUFEaEQscUJBQ2dEQSxRQURoRDtBQUU1QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtSO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLGdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0U7QUFBQSxnQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRTtBQUFBLGdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBQSxnQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRTtBQUFBLGdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFILENBZkQ7O0tBQU1YLFk7QUFpQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25hbC9bc2lnbmFsSWRdLjJmOTFjNDk5ZGQ1MTJmNjIzMjNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IFNpZ25hbERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3R7bmFtZSx0eXBlLGR1cmF0aW9uLGNyZWF0ZWRUaW1lLCB0YXJnZXQxLCB0YXJnZXQyICwgdGFyZ2V0Mywgc3RvcExvc3MsIGxldmVyYWdlfSA9IHByb3BzLnNpZ25hbERhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPGgxPnt0eXBlfTwvaDE+XHJcbiAgICAgICAgPGgxPntkdXJhdGlvbn08L2gxPlxyXG4gICAgICAgIDxoMT57Y3JlYXRlZFRpbWV9PC9oMT5cclxuICAgICAgICA8aDE+e3RhcmdldDF9PC9oMT5cclxuICAgICAgICA8aDE+e3RhcmdldDJ9PC9oMT5cclxuICAgICAgICA8aDE+e3RhcmdldDN9PC9oMT5cclxuICAgICAgICA8aDE+e3N0b3BMb3NzfTwvaDE+XHJcbiAgICAgICAgPGgxPntsZXZlcmFnZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9