webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/property/propertyInput.js":
/*!***************************************************!*\
  !*** ./components/home/property/propertyInput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/input/input */ "./components/UI/input/input.js");
/* harmony import */ var _property_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.module.css */ "./components/home/property/property.module.css");
/* harmony import */ var _property_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_property_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dataFetching_postData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dataFetching/postData */ "./dataFetching/postData.js");




var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\home\\property\\propertyInput.js",
    _this = undefined,
    _s = $RefreshSig$();






var PropertyInput = function PropertyInput() {
  _s();

  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var buyDateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var valueInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var stopInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var targetInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var sellDateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var enteryPointInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var submitHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var newProperty, response;
      return C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newProperty = {
                name: nameInputRef.current.value,
                buyDate: buyDateInputRef.current.value,
                value: valueInputRef.current.value,
                enteryPoint: enteryPointInputRef.current.value,
                stopLimit: stopInputRef.current.value,
                target: targetInputRef.current.value,
                sellDate: sellDateInputRef.current.value,
                bought: true
              };
              _context.prev = 1;
              _context.next = 4;
              return Object(_dataFetching_postData__WEBPACK_IMPORTED_MODULE_6__["postData"])("http://127.0.0.2:8000/api/v1/property", newProperty);

            case 4:
              response = _context.sent;
              console.log(response.status);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function submitHandler() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Direction,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        inputtype: "input",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: nameInputRef,
        children: "\u0646\u0627\u0645 \u0646\u0645\u0627\u062F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: buyDateInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: valueInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: stopInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: enteryPointInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: targetInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "",
        className: _property_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.InputStyle,
        ref: sellDateInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      dir: "ltr",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: function onClick() {
          return submitHandler();
        },
        children: "\u062B\u0628\u062A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
      scope: "row"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(PropertyInput, "aaRMO7LMQ3YAyGA9KQ9L0XxW/DI=");

_c = PropertyInput;
/* harmony default export */ __webpack_exports__["default"] = (PropertyInput);

var _c;

$RefreshReg$(_c, "PropertyInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3Byb3BlcnR5L3Byb3BlcnR5SW5wdXQuanMiXSwibmFtZXMiOlsiUHJvcGVydHlJbnB1dCIsIm5hbWVJbnB1dFJlZiIsInVzZVJlZiIsImJ1eURhdGVJbnB1dFJlZiIsInZhbHVlSW5wdXRSZWYiLCJzdG9wSW5wdXRSZWYiLCJ0YXJnZXRJbnB1dFJlZiIsInNlbGxEYXRlSW5wdXRSZWYiLCJlbnRlcnlQb2ludElucHV0UmVmIiwic3VibWl0SGFuZGxlciIsIm5ld1Byb3BlcnR5IiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImJ1eURhdGUiLCJlbnRlcnlQb2ludCIsInN0b3BMaW1pdCIsInRhcmdldCIsInNlbGxEYXRlIiwiYm91Z2h0IiwicG9zdERhdGEiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJjbGFzc2VzIiwiRGlyZWN0aW9uIiwiSW5wdXRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUdELG9EQUFNLEVBQTlCO0FBQ0EsTUFBTUUsYUFBYSxHQUFHRixvREFBTSxFQUE1QjtBQUNBLE1BQU1HLFlBQVksR0FBR0gsb0RBQU0sRUFBM0I7QUFDQSxNQUFNSSxjQUFjLEdBQUdKLG9EQUFNLEVBQTdCO0FBQ0EsTUFBTUssZ0JBQWdCLEdBQUdMLG9EQUFNLEVBQS9CO0FBQ0EsTUFBTU0sbUJBQW1CLEdBQUdOLG9EQUFNLEVBQWxDOztBQUVBLE1BQU1PLGFBQWE7QUFBQSwwVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMseUJBRGMsR0FDQTtBQUNsQkMsb0JBQUksRUFBRVYsWUFBWSxDQUFDVyxPQUFi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O0FBQUEsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuREYsZUE2REU7QUFBSSxXQUFLLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUVELENBOUZEOztHQUFNVCxhOztLQUFBQSxhO0FBZ0dTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OGMxY2EwNDljMmZjNGIzZTVmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vVUkvaW5wdXQvaW5wdXQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9wZXJ0eS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gXCIuLi8uLi8uLi9kYXRhRmV0Y2hpbmcvcG9zdERhdGFcIjsgXHJcblxyXG5cclxuY29uc3QgUHJvcGVydHlJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBidXlEYXRlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB2YWx1ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgc3RvcElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGFyZ2V0SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBzZWxsRGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZW50ZXJ5UG9pbnRJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHtcclxuICAgICAgbmFtZTogbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGJ1eURhdGU6IGJ1eURhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICB2YWx1ZTogdmFsdWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBlbnRlcnlQb2ludDogZW50ZXJ5UG9pbnRJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBzdG9wTGltaXQ6IHN0b3BJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICB0YXJnZXQ6IHRhcmdldElucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIHNlbGxEYXRlOiBzZWxsRGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGJvdWdodDp0cnVlXHJcbiAgICB9O1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3REYXRhKFwiaHR0cDovLzEyNy4wLjAuMjo4MDAwL2FwaS92MS9wcm9wZXJ0eVwiLG5ld1Byb3BlcnR5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc2VzLkRpcmVjdGlvbn0+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGlucHV0dHlwZT1cImlucHV0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dFN0eWxlfVxyXG4gICAgICAgICAgcmVmPXtuYW1lSW5wdXRSZWZ9XHJcbiAgICAgICAgPtmG2KfZhSDZhtmF2KfYrzwvSW5wdXQ+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dFN0eWxlfVxyXG4gICAgICAgICAgcmVmPXtidXlEYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5JbnB1dFN0eWxlfVxyXG4gICAgICAgICAgcmVmPXt2YWx1ZUlucHV0UmVmfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRTdHlsZX1cclxuICAgICAgICAgIHJlZj17c3RvcElucHV0UmVmfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRTdHlsZX1cclxuICAgICAgICAgIHJlZj17ZW50ZXJ5UG9pbnRJbnB1dFJlZn1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLklucHV0U3R5bGV9XHJcbiAgICAgICAgICByZWY9e3RhcmdldElucHV0UmVmfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW5wdXRTdHlsZX1cclxuICAgICAgICAgIHJlZj17c2VsbERhdGVJbnB1dFJlZn1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgPC90ZD5cclxuICAgICAgXHJcbiAgICAgIDx0ZCBkaXI9XCJsdHJcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEhhbmRsZXIoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDYq9io2KpcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90ZD5cclxuXHJcbiAgICAgIDx0aCBzY29wZT1cInJvd1wiPjwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eUlucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9