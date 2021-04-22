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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-inline-block",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Name: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "badge bg-success ml-3",
            children: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "TimeFrame: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this), duration]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Date: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this), createdTime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Target-1: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this), target1]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Target-2: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), target2]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Target-3: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), target3]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "StopLoss: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this), stopLoss]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Leverage: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this), leverage]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlNpZ25hbERldGFpbCIsInByb3BzIiwic2lnbmFsRGF0YSIsIm5hbWUiLCJ0eXBlIiwiZHVyYXRpb24iLCJjcmVhdGVkVGltZSIsInRhcmdldDEiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsInN0b3BMb3NzIiwibGV2ZXJhZ2UiLCJjbGFzc2VzIiwiQ29udGVudCIsIkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsMEJBQzREQSxLQUFLLENBQUNDLFVBRGxFO0FBQUEsTUFDdEJDLElBRHNCLHFCQUN0QkEsSUFEc0I7QUFBQSxNQUNqQkMsSUFEaUIscUJBQ2pCQSxJQURpQjtBQUFBLE1BQ1pDLFFBRFkscUJBQ1pBLFFBRFk7QUFBQSxNQUNIQyxXQURHLHFCQUNIQSxXQURHO0FBQUEsTUFDVUMsT0FEVixxQkFDVUEsT0FEVjtBQUFBLE1BQ21CQyxPQURuQixxQkFDbUJBLE9BRG5CO0FBQUEsTUFDNkJDLE9BRDdCLHFCQUM2QkEsT0FEN0I7QUFBQSxNQUNzQ0MsUUFEdEMscUJBQ3NDQSxRQUR0QztBQUFBLE1BQ2dEQyxRQURoRCxxQkFDZ0RBLFFBRGhEO0FBRTVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsMkJBQ0U7QUFBSSxlQUFTLEVBQUVDLCtEQUFPLENBQUNDLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRCwrREFBTyxDQUFDRSxJQUF2QjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGtDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQSxzQkFBS1g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBLGVBR0E7QUFBTSxxQkFBUyxFQUFDLHVCQUFoQjtBQUFBLHNCQUF5Q0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUFJLGlCQUFTLEVBQUVRLCtEQUFPLENBQUNFLElBQXZCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR1QsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVlFO0FBQUksaUJBQVMsRUFBRU8sK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHUixXQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBZ0JFO0FBQUksaUJBQVMsRUFBRU0sK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHUCxPQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQW9CRTtBQUFJLGlCQUFTLEVBQUVLLCtEQUFPLENBQUNFLElBQXZCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR04sT0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUF3QkU7QUFBSSxpQkFBUyxFQUFFSSwrREFBTyxDQUFDRSxJQUF2QjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdMLE9BRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBNEJFO0FBQUksaUJBQVMsRUFBRUcsK0RBQU8sQ0FBQ0UsSUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHSixRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRixlQWdDRTtBQUFJLGlCQUFTLEVBQUVFLCtEQUFPLENBQUNFLElBQXZCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0gsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNILENBM0NEOztLQUFNWCxZO0FBNkNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduYWwvW3NpZ25hbElkXS5jZWQ2NzU5M2NjOTE1NTA2NTg4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc2lnbmFsZGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFNpZ25hbERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3R7bmFtZSx0eXBlLGR1cmF0aW9uLGNyZWF0ZWRUaW1lLCB0YXJnZXQxLCB0YXJnZXQyICwgdGFyZ2V0Mywgc3RvcExvc3MsIGxldmVyYWdlfSA9IHByb3BzLnNpZ25hbERhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5hbWU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1zdWNjZXNzIG1sLTNcIj57dHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuSXRlbX0+XHJcbiAgICAgICAgICAgIDxzcGFuPlRpbWVGcmFtZTogPC9zcGFuPlxyXG4gICAgICAgICAgICB7ZHVyYXRpb259XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAgPHNwYW4+RGF0ZTogPC9zcGFuPlxyXG4gICAgICAgICAgICB7Y3JlYXRlZFRpbWV9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAgPHNwYW4+VGFyZ2V0LTE6IDwvc3Bhbj5cclxuICAgICAgICAgICAge3RhcmdldDF9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAgPHNwYW4+VGFyZ2V0LTI6IDwvc3Bhbj5cclxuICAgICAgICAgICAge3RhcmdldDJ9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAgPHNwYW4+VGFyZ2V0LTM6IDwvc3Bhbj5cclxuICAgICAgICAgICAge3RhcmdldDN9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5JdGVtfT5cclxuICAgICAgICAgICAgPHNwYW4+U3RvcExvc3M6IDwvc3Bhbj5cclxuICAgICAgICAgICAge3N0b3BMb3NzfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuSXRlbX0+XHJcbiAgICAgICAgICAgIDxzcGFuPkxldmVyYWdlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgIHtsZXZlcmFnZX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==