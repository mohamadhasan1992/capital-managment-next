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
/* harmony import */ var _UI_btn_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/btn/btn */ "./components/UI/btn/btn.js");
/* harmony import */ var _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wholeProperty.module.css */ "./components/home/wholeProperty/wholeProperty.module.css");
/* harmony import */ var _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_calculateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/calculateIcon */ "./components/icons/calculateIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\home\\wholeProperty\\wholeProperty.js",
    _this = undefined,
    _s = $RefreshSig$();






var WholeProperty = function WholeProperty(props) {
  _s();

  var _props$wholeProperty = props.wholeProperty,
      initialProperty = _props$wholeProperty.initialProperty,
      difficulty = _props$wholeProperty.difficulty;
  var testD = [{
    name: "easy",
    value: 1,
    id: 1
  }, {
    name: "medium",
    value: 2,
    id: 2
  }, {
    name: "hard",
    value: 3,
    id: 3
  }];
  var initialPropertyInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var checkRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var checkOneRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var checkTwoRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var checkThreeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // const difficultyHandler = (e) => {
  //   console.log(e.target.value);
  // }

  var submitWholePropertyHandler = function submitWholePropertyHandler(e) {
    e.preventDefault();
    var initialProperty = initialPropertyInputRef.current.value;
    console.log(checkOneRef.current.value);
    console.log(checkTwoRef.current.value);
    console.log(checkThreeRef.current.value);
    console.log(checkRef.current.value);
    var wholePropertyObject = {
      initialProperty: initialProperty,
      difficulty: difficulty
    };
    console.log(wholePropertyObject);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _wholeProperty_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Content,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container d-flex justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        dir: "rtl",
        className: "border border-dark rounded-top p-4",
        children: ["\u0633\u0628\u062F \u0633\u0647\u0627\u0645\u06CC \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u062A\u0639\u062F\u0627\u062F 4 \u0633\u0647\u0645 \u0628\u0647 \u0645\u0628\u0644\u063A", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: initialProperty
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), " \u0645\u06CC \u0628\u0627\u0634\u062F."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: function onClick(e) {
            return submitWholePropertyHandler(e);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_calculateIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, _this), "\u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
            lineNumber: 71,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              dir: "ltr",
              className: "input-group-text",
              children: ".00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              "aria-label": "Amount (to the nearest dollar)",
              ref: initialPropertyInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "\u062A\u0648\u0645\u0627\u0646"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "form-select",
          "aria-label": "Default select example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkRef,
            defaultValue: true,
            children: "\u0644\u0637\u0641\u0627 \u0645\u06CC\u0632\u0627\u0646 \u0631\u06CC\u0633\u06A9 \u067E\u0630\u06CC\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            selected: "true",
            children: "\u0632\u06CC\u0627\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkTwoRef,
            value: "2",
            children: "\u0645\u062A\u0648\u0633\u0637"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkThreeRef,
            value: "3",
            children: "\u06A9\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 7
  }, _this);
};

_s(WholeProperty, "n3tW3PgAIbEwNThZLIWCGqhwtGg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5IiwiZGlmZmljdWx0eSIsInRlc3REIiwibmFtZSIsInZhbHVlIiwiaWQiLCJpbml0aWFsUHJvcGVydHlJbnB1dFJlZiIsInVzZVJlZiIsImNoZWNrUmVmIiwiY2hlY2tPbmVSZWYiLCJjaGVja1R3b1JlZiIsImNoZWNrVGhyZWVSZWYiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwid2hvbGVQcm9wZXJ0eU9iamVjdCIsImNsYXNzZXMiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSw2QkFDT0EsS0FBSyxDQUFDQyxhQURiO0FBQUEsTUFDeEJDLGVBRHdCLHdCQUN4QkEsZUFEd0I7QUFBQSxNQUNQQyxVQURPLHdCQUNQQSxVQURPO0FBRy9CLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFFBQUksRUFBRSxNQURSO0FBRUVDLFNBQUssRUFBRSxDQUZUO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBRFksRUFNWjtBQUNFRixRQUFJLEVBQUUsUUFEUjtBQUVFQyxTQUFLLEVBQUUsQ0FGVDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQU5ZLEVBV1o7QUFDRUYsUUFBSSxFQUFFLE1BRFI7QUFFRUMsU0FBSyxFQUFFLENBRlQ7QUFHRUMsTUFBRSxFQUFFO0FBSE4sR0FYWSxDQUFkO0FBa0JBLE1BQU1DLHVCQUF1QixHQUFHQyxvREFBTSxFQUF0QztBQUNBLE1B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LEdBQWhDO0FBQW9DLG9CQUFRLEVBQUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLGVBQUcsRUFBRUMsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBUSxlQUFHLEVBQUVDLGFBQWI7QUFBNEIsaUJBQUssRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDSCxDQXpGRDs7R0FBTWQsYTs7S0FBQUEsYTtBQTJGU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTI4YTA5NThiNjYwZGI0OTc0NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdG4gZnJvbSBcIi4uLy4uL1VJL2J0bi9idG5cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi93aG9sZVByb3BlcnR5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FsY3VsYXRlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvY2FsY3VsYXRlSWNvblwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXaG9sZVByb3BlcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2luaXRpYWxQcm9wZXJ0eSwgZGlmZmljdWx0eX0gPSBwcm9wcy53aG9sZVByb3BlcnR5O1xyXG5cclxuICBjb25zdCB0ZXN0RCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJlYXN5XCIsXHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICBpZDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibWVkaXVtXCIsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBpZDogMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaGFyZFwiLFxyXG4gICAgICB2YWx1ZTogMyxcclxuICAgICAgaWQ6IDMsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrT25lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUd29SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1RocmVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgY29uc3Qgc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsUHJvcGVydHkgPSBpbml0aWFsUHJvcGVydHlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tPbmVSZWYuY3VycmVudC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja1R3b1JlZi5jdXJyZW50LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrVGhyZWVSZWYuY3VycmVudC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja1JlZi5jdXJyZW50LnZhbHVlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2hvbGVQcm9wZXJ0eU9iamVjdCA9IHtcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBkaWZmaWN1bHR5XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh3aG9sZVByb3BlcnR5T2JqZWN0KTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXJrIHJvdW5kZWQtdG9wIHAtNFwiPlxyXG4gICAgICAgICAgICDYs9io2K8g2LPZh9in2YXbjCDZvtuM2LTZhtmH2KfYr9uMINio2LHYp9uMINi02YXYpyDYqti52K/Yp9ivIDQg2LPZh9mFINio2Ycg2YXYqNmE2LpcclxuICAgICAgICAgICAgPHNwYW4+e2luaXRpYWxQcm9wZXJ0eX08L3NwYW4+INmF24wg2KjYp9i02K8uXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ0biBvbkNsaWNrPXsoZSkgPT4gc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgINm+2LHYr9in2LLYtCDYp9i32YTYp9i52KfYqlxyXG4gICAgICAgICAgICA8L0J0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0yNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjUgbWwtMlwiPtiz2LHZhdin24zZhyDYp9mI2YTbjNmHPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cImx0clwiIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgLjAwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQW1vdW50ICh0byB0aGUgbmVhcmVzdCBkb2xsYXIpXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUHJvcGVydHlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPtiq2YjZhdin2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tSZWZ9IGRlZmF1bHRWYWx1ZSA+2YTYt9mB2Kcg2YXbjNiy2KfZhiDYsduM2LPaqSDZvtiw24zYsduMINix2Kcg2KfZhtiq2K7Yp9ioINqp2YbbjNivPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrT25lUmVmfSB2YWx1ZT1cIjFcIiBzZWxlY3RlZD1cInRydWVcIj7YstuM2KfYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1R3b1JlZn0gdmFsdWU9XCIyXCI+2YXYqtmI2LPYtzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1RocmVlUmVmfSB2YWx1ZT1cIjNcIj7aqdmFPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hvbGVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9