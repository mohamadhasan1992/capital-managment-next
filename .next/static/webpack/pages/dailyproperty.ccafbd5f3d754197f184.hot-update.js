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
      value: propertyInputRefcurrent.value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2RhaWx5cHJvcGVydHkvZGFpbHlwcm9wZXJ0eWlucHV0LmpzIl0sIm5hbWVzIjpbIkRhaWx5UHJvcGVydHlJbnB1dCIsImRhdGVJbnB1dFJlZiIsInVzZVJlZiIsInByb3BlcnR5SW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3RGFpbHlQcm9wZXJ0eSIsImRhdGUiLCJjdXJyZW50IiwidmFsdWUiLCJwcm9wZXJ0eUlucHV0UmVmY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiRGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdELG9EQUFNLEVBQS9COztBQUNBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsVUFBSSxFQUFFUCxZQUFZLENBQUNRLE9BQWIsQ0FBcUJDLEtBREo7QUFFdkJBLFdBQUssRUFBRUMsdUJBQXVCLENBQUNEO0FBRlIsS0FBekI7QUFLQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlOLGdCQUFaO0FBQ0QsR0FSRDs7QUFTQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFTyxnRUFBTyxDQUFDQyxTQUF2QjtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQU8sV0FBRyxFQUFFZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFJLGVBQVMsRUFBRWEsZ0VBQU8sQ0FBQ0MsU0FBdkI7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUFPLFdBQUcsRUFBRVo7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBT0U7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxtQkFGWjtBQUdFLGVBQU8sRUFBRSxpQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPRCxhQUFhLENBQUNDLENBQUQsQ0FBcEI7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFtQkQsQ0EvQkQ7O0dBQU1MLGtCOztLQUFBQSxrQjtBQWdDU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFpbHlwcm9wZXJ0eS5jY2FmYmQ1ZjNkNzU0MTk3ZjE4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9VSS9pbnB1dC9pbnB1dFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9kYWlseXByb3BlcnR5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRGFpbHlQcm9wZXJ0eUlucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByb3BlcnR5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld0RhaWx5UHJvcGVydHkgPSB7XHJcbiAgICAgIGRhdGU6IGRhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICB2YWx1ZTogcHJvcGVydHlJbnB1dFJlZmN1cnJlbnQudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG5ld0RhaWx5UHJvcGVydHkpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy5EaXJlY3Rpb259PlxyXG4gICAgICAgIDxJbnB1dCByZWY9e2RhdGVJbnB1dFJlZn0gLz5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy5EaXJlY3Rpb259PlxyXG4gICAgICAgIDxJbnB1dCByZWY9e3Byb3BlcnR5SW5wdXRSZWZ9IC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXRIYW5kbGVyKGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgINir2KjYqlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYWlseVByb3BlcnR5SW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==