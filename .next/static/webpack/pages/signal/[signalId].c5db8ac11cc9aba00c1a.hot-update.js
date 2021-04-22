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
/* harmony import */ var _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signaldetail.module.css */ "./components/signal/signaldetail.module.css");
/* harmony import */ var _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1__);


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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: createdTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: target1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: target2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: target3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: stopLoss
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: leverage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlNpZ25hbERldGFpbCIsInByb3BzIiwic2lnbmFsRGF0YSIsIm5hbWUiLCJ0eXBlIiwiZHVyYXRpb24iLCJjcmVhdGVkVGltZSIsInRhcmdldDEiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsInN0b3BMb3NzIiwibGV2ZXJhZ2UiLCJjbGFzc2VzIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSwwQkFDNERBLEtBQUssQ0FBQ0MsVUFEbEU7QUFBQSxNQUN0QkMsSUFEc0IscUJBQ3RCQSxJQURzQjtBQUFBLE1BQ2pCQyxJQURpQixxQkFDakJBLElBRGlCO0FBQUEsTUFDWkMsUUFEWSxxQkFDWkEsUUFEWTtBQUFBLE1BQ0hDLFdBREcscUJBQ0hBLFdBREc7QUFBQSxNQUNVQyxPQURWLHFCQUNVQSxPQURWO0FBQUEsTUFDbUJDLE9BRG5CLHFCQUNtQkEsT0FEbkI7QUFBQSxNQUM2QkMsT0FEN0IscUJBQzZCQSxPQUQ3QjtBQUFBLE1BQ3NDQyxRQUR0QyxxQkFDc0NBLFFBRHRDO0FBQUEsTUFDZ0RDLFFBRGhELHFCQUNnREEsUUFEaEQ7QUFFNUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsT0FBdkI7QUFBQSw4QkFDRTtBQUFBLGtCQUFLVjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFBLGtCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFPRTtBQUFBLGtCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0U7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUgsQ0FqQkQ7O0tBQU1YLFk7QUFtQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25hbC9bc2lnbmFsSWRdLmM1ZGI4YWMxMWNjOWFiYTAwYzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zaWduYWxkZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2lnbmFsRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdHtuYW1lLHR5cGUsZHVyYXRpb24sY3JlYXRlZFRpbWUsIHRhcmdldDEsIHRhcmdldDIgLCB0YXJnZXQzLCBzdG9wTG9zcywgbGV2ZXJhZ2V9ID0gcHJvcHMuc2lnbmFsRGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICA8aDE+e3R5cGV9PC9oMT5cclxuICAgICAgICAgIDxoMT57ZHVyYXRpb259PC9oMT5cclxuICAgICAgICAgIDxoMT57Y3JlYXRlZFRpbWV9PC9oMT5cclxuICAgICAgICAgIDxoMT57dGFyZ2V0MX08L2gxPlxyXG4gICAgICAgICAgPGgxPnt0YXJnZXQyfTwvaDE+XHJcbiAgICAgICAgICA8aDE+e3RhcmdldDN9PC9oMT5cclxuICAgICAgICAgIDxoMT57c3RvcExvc3N9PC9oMT5cclxuICAgICAgICAgIDxoMT57bGV2ZXJhZ2V9PC9oMT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9