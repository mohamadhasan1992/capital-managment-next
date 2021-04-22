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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "badge bg-success",
          children: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: duration
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: createdTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: target1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: target2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: target3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: stopLoss
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: leverage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlNpZ25hbERldGFpbCIsInByb3BzIiwic2lnbmFsRGF0YSIsIm5hbWUiLCJ0eXBlIiwiZHVyYXRpb24iLCJjcmVhdGVkVGltZSIsInRhcmdldDEiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsInN0b3BMb3NzIiwibGV2ZXJhZ2UiLCJjbGFzc2VzIiwiQ29udGVudCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsMEJBQzREQSxLQUFLLENBQUNDLFVBRGxFO0FBQUEsTUFDdEJDLElBRHNCLHFCQUN0QkEsSUFEc0I7QUFBQSxNQUNqQkMsSUFEaUIscUJBQ2pCQSxJQURpQjtBQUFBLE1BQ1pDLFFBRFkscUJBQ1pBLFFBRFk7QUFBQSxNQUNIQyxXQURHLHFCQUNIQSxXQURHO0FBQUEsTUFDVUMsT0FEVixxQkFDVUEsT0FEVjtBQUFBLE1BQ21CQyxPQURuQixxQkFDbUJBLE9BRG5CO0FBQUEsTUFDNkJDLE9BRDdCLHFCQUM2QkEsT0FEN0I7QUFBQSxNQUNzQ0MsUUFEdEMscUJBQ3NDQSxRQUR0QztBQUFBLE1BQ2dEQyxRQURoRCxxQkFDZ0RBLFFBRGhEO0FBRTVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUVDLCtEQUFPLENBQUNDLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRCwrREFBTyxDQUFDRSxJQUF2QjtBQUFBLG1CQUNHWCxJQURILGVBRUU7QUFBTSxtQkFBUyxFQUFDLGtCQUFoQjtBQUFBLG9CQUFvQ0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUksaUJBQVMsRUFBRVEsK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJUO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQUksaUJBQVMsRUFBRU8sK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJSO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQUksaUJBQVMsRUFBRU0sK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJQO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFO0FBQUksaUJBQVMsRUFBRUssK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJOO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVNFO0FBQUksaUJBQVMsRUFBRUksK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJMO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFO0FBQUksaUJBQVMsRUFBRUcsK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJKO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQVdFO0FBQUksaUJBQVMsRUFBRUUsK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxrQkFBOEJIO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkgsQ0FuQkQ7O0tBQU1YLFk7QUFxQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25hbC9bc2lnbmFsSWRdLmRhMGIyMTA1NTIxZTA0ZTAyMmRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zaWduYWxkZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2lnbmFsRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdHtuYW1lLHR5cGUsZHVyYXRpb24sY3JlYXRlZFRpbWUsIHRhcmdldDEsIHRhcmdldDIgLCB0YXJnZXQzLCBzdG9wTG9zcywgbGV2ZXJhZ2V9ID0gcHJvcHMuc2lnbmFsRGF0YTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXN1Y2Nlc3NcIj57dHlwZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT57ZHVyYXRpb259PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuSXRlbX0+e2NyZWF0ZWRUaW1lfTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLkl0ZW19Pnt0YXJnZXQxfTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLkl0ZW19Pnt0YXJnZXQyfTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLkl0ZW19Pnt0YXJnZXQzfTwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLkl0ZW19PntzdG9wTG9zc308L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT57bGV2ZXJhZ2V9PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9