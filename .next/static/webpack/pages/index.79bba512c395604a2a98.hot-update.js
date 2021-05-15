webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/wholeProperty/wholeProperty.js":
/*!********************************************************!*\
  !*** ./components/home/wholeProperty/wholeProperty.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/btn/btn */ "./components/UI/btn/btn.js");
/* harmony import */ var _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wholeProperty.module.css */ "./components/home/wholeProperty/wholeProperty.module.css");
/* harmony import */ var _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_calculateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/calculateIcon */ "./components/icons/calculateIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dataFetching_postData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dataFetching/postData */ "./dataFetching/postData.js");




var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\home\\wholeProperty\\wholeProperty.js",
    _this = undefined,
    _s = $RefreshSig$();







var WholeProperty = function WholeProperty(props) {
  _s();

  var initialProperty = props.wholeProperty.initialProperty;
  var initialPropertyInputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkOneRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkTwoRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkThreeRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(); // const difficultyHandler = (e) => {
  //   console.log(e.target.value);
  // }

  var submitWholePropertyHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var initialProperty, checkArr, selectedDifficulty, selectedCheck, wholePropertyObject, response;
      return C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              initialProperty = initialPropertyInputRef.current.value;
              checkArr = [checkOneRef, checkTwoRef, checkThreeRef];
              selectedDifficulty = null;
              selectedCheck = checkArr.forEach(function (check) {
                if (check.current.selected === true) {
                  selectedDifficulty = check.current.value;
                }
              });
              wholePropertyObject = {
                initialProperty: initialProperty,
                difficulty: selectedDifficulty
              };
              _context.next = 8;
              return Object(_dataFetching_postData__WEBPACK_IMPORTED_MODULE_7__["postData"])("http://127.0.0.2:8000/api/v1/wholeproperty", wholePropertyObject);

            case 8:
              response = _context.sent;
              alert(response.status);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitWholePropertyHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Content,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container d-flex justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        dir: "rtl",
        className: "border border-dark rounded-top p-4",
        children: ["\u0633\u0628\u062F \u0633\u0647\u0627\u0645\u06CC \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u062A\u0639\u062F\u0627\u062F 4 \u0633\u0647\u0645 \u0628\u0647 \u0645\u0628\u0644\u063A", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: initialProperty
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this), " \u0645\u06CC \u0628\u0627\u0634\u062F."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: function onClick(e) {
            return submitWholePropertyHandler(e);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_calculateIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this), "\u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "d-flex flex-column w-25",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex align-items-baseline mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "d-inline-block w-25 ml-2",
            children: "\u0633\u0631\u0645\u0627\u06CC\u0647 \u0627\u0648\u0644\u06CC\u0647"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              dir: "ltr",
              className: "input-group-text",
              children: ".00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              "aria-label": "Amount (to the nearest dollar)",
              ref: initialPropertyInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "\u062A\u0648\u0645\u0627\u0646"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "form-select",
          "aria-label": "Default select example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            defaultValue: true,
            children: "\u0644\u0637\u0641\u0627 \u0645\u06CC\u0632\u0627\u0646 \u0631\u06CC\u0633\u06A9 \u067E\u0630\u06CC\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            children: "\u06A9\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkTwoRef,
            value: "2",
            children: "\u0645\u062A\u0648\u0633\u0637"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkThreeRef,
            value: "3",
            children: "\u0632\u06CC\u0627\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, _this);
};

_s(WholeProperty, "vHdLFagIpeScIFQMcg0rUvm5q2g=");

_c = WholeProperty;
/* harmony default export */ __webpack_exports__["default"] = (WholeProperty);

var _c;

$RefreshReg$(_c, "WholeProperty");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJpbml0aWFsUHJvcGVydHkiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYiLCJ1c2VSZWYiLCJjaGVja09uZVJlZiIsImNoZWNrVHdvUmVmIiwiY2hlY2tUaHJlZVJlZiIsInN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY2hlY2tBcnIiLCJzZWxlY3RlZERpZmZpY3VsdHkiLCJzZWxlY3RlZENoZWNrIiwiZm9yRWFjaCIsImNoZWNrIiwic2VsZWN0ZWQiLCJ3aG9sZVByb3BlcnR5T2JqZWN0IiwiZGlmZmljdWx0eSIsInBvc3REYXRhIiwicmVzcG9uc2UiLCJhbGVydCIsInN0YXR1cyIsImNsYXNzZXMiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3hCQyxlQUR3QixHQUNMRCxLQUFLLENBQUNFLGFBREQsQ0FDeEJELGVBRHdCO0FBRy9CLE1BQU1FLHVCQUF1QixHQUFHQyxvREFBTSxFQUF0QztBQUNBLE1BQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHSCxvREFBTSxFQUE1QixDQU4rQixDQVMvQjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUksMEJBQTBCO0FBQUEsMFRBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pDQSxlQUFDLENBQUND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USxlQUFHLEVBQUVDLFdBQWI7QUFBMEIsaUJBQUssRUFBQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEsZUFBRyxFQUFFQyxhQUFiO0FBQTRCLGlCQUFLLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0gsQ0EzRUQ7O0dBQU1SLGE7O0tBQUFBLGE7QUE2RVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5YmJhNTEyYzM5NTYwNGEyYTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnRuIGZyb20gXCIuLi8uLi9VSS9idG4vYnRuXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vd2hvbGVQcm9wZXJ0eS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhbGN1bGF0ZUljb24gZnJvbSBcIi4uLy4uL2ljb25zL2NhbGN1bGF0ZUljb25cIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tIFwiLi4vLi4vLi4vZGF0YUZldGNoaW5nL3Bvc3REYXRhXCI7XHJcblxyXG5jb25zdCBXaG9sZVByb3BlcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2luaXRpYWxQcm9wZXJ0eX0gPSBwcm9wcy53aG9sZVByb3BlcnR5O1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcGVydHlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrT25lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUd29SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1RocmVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgY29uc3Qgc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wZXJ0eSA9IGluaXRpYWxQcm9wZXJ0eUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNoZWNrQXJyID0gW2NoZWNrT25lUmVmLCBjaGVja1R3b1JlZiwgY2hlY2tUaHJlZVJlZl07XHJcbiAgICBsZXQgc2VsZWN0ZWREaWZmaWN1bHR5ID0gbnVsbDtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2hlY2sgPSBjaGVja0Fyci5mb3JFYWNoKGNoZWNrID0+IHtcclxuICAgICAgaWYoY2hlY2suY3VycmVudC5zZWxlY3RlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gY2hlY2suY3VycmVudC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3Qgd2hvbGVQcm9wZXJ0eU9iamVjdCA9IHtcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBkaWZmaWN1bHR5OnNlbGVjdGVkRGlmZmljdWx0eVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0RGF0YShcImh0dHA6Ly8xMjcuMC4wLjI6ODAwMC9hcGkvdjEvd2hvbGVwcm9wZXJ0eVwiLHdob2xlUHJvcGVydHlPYmplY3QpO1xyXG4gICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXJrIHJvdW5kZWQtdG9wIHAtNFwiPlxyXG4gICAgICAgICAgICDYs9io2K8g2LPZh9in2YXbjCDZvtuM2LTZhtmH2KfYr9uMINio2LHYp9uMINi02YXYpyDYqti52K/Yp9ivIDQg2LPZh9mFINio2Ycg2YXYqNmE2LpcclxuICAgICAgICAgICAgPHNwYW4+e2luaXRpYWxQcm9wZXJ0eX08L3NwYW4+INmF24wg2KjYp9i02K8uXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ0biBvbkNsaWNrPXsoZSkgPT4gc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgINm+2LHYr9in2LLYtCDYp9i32YTYp9i52KfYqlxyXG4gICAgICAgICAgICA8L0J0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0yNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjUgbWwtMlwiPtiz2LHZhdin24zZhyDYp9mI2YTbjNmHPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cImx0clwiIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgLjAwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQW1vdW50ICh0byB0aGUgbmVhcmVzdCBkb2xsYXIpXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUHJvcGVydHlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPtiq2YjZhdin2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZSA+2YTYt9mB2Kcg2YXbjNiy2KfZhiDYsduM2LPaqSDZvtiw24zYsduMINix2Kcg2KfZhtiq2K7Yp9ioINqp2YbbjNivPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrT25lUmVmfSB2YWx1ZT1cIjFcIiA+2qnZhTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1R3b1JlZn0gdmFsdWU9XCIyXCI+2YXYqtmI2LPYtzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1RocmVlUmVmfSB2YWx1ZT1cIjNcIj7YstuM2KfYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob2xlUHJvcGVydHk7Il0sInNvdXJjZVJvb3QiOiIifQ==