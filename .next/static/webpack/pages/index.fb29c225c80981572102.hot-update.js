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
    console.log(checkOneRef.current.selected);
    console.log(checkTwoRef.current.selected);
    console.log(checkThreeRef.current.selected);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5IiwiZGlmZmljdWx0eSIsInRlc3REIiwibmFtZSIsInZhbHVlIiwiaWQiLCJpbml0aWFsUHJvcGVydHlJbnB1dFJlZiIsInVzZVJlZiIsImNoZWNrUmVmIiwiY2hlY2tPbmVSZWYiLCJjaGVja1R3b1JlZiIsImNoZWNrVGhyZWVSZWYiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWQiLCJ3aG9sZVByb3BlcnR5T2JqZWN0IiwiY2xhc3NlcyIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLDZCQUNPQSxLQUFLLENBQUNDLGFBRGI7QUFBQSxNQUN4QkMsZUFEd0Isd0JBQ3hCQSxlQUR3QjtBQUFBLE1BQ1BDLFVBRE8sd0JBQ1BBLFVBRE87QUFHL0IsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsUUFBSSxFQUFFLE1BRFI7QUFFRUMsU0FBSyxFQUFFLENBRlQ7QUFHRUMsTUFBRSxFQUFFO0FBSE4sR0FEWSxFQU1aO0FBQ0VGLFFBQUksRUFBRSxRQURSO0FBRUVDLFNBQUssRUFBRSxDQUZUO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBTlksRUFXWjtBQUNFRixRQUFJLEVBQUUsTUFEUjtBQUVFQyxTQUFLLEVBQUUsQ0FGVDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQVhZLENBQWQ7QUFrQkEsTUFBTUMsdUJBQXVCLEdBQUdDLG9EQUFNLEVB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LGlCQUFLLEVBQUMsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLGVBQUcsRUFBRUMsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBUSxlQUFHLEVBQUVDLGFBQWI7QUFBNEIsaUJBQUssRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDSCxDQXpGRDs7R0FBTWQsYTs7S0FBQUEsYTtBQTJGU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmIyOWMyMjVjODA5ODE1NzIxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdG4gZnJvbSBcIi4uLy4uL1VJL2J0bi9idG5cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi93aG9sZVByb3BlcnR5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FsY3VsYXRlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvY2FsY3VsYXRlSWNvblwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXaG9sZVByb3BlcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2luaXRpYWxQcm9wZXJ0eSwgZGlmZmljdWx0eX0gPSBwcm9wcy53aG9sZVByb3BlcnR5O1xyXG5cclxuICBjb25zdCB0ZXN0RCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJlYXN5XCIsXHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICBpZDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibWVkaXVtXCIsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBpZDogMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaGFyZFwiLFxyXG4gICAgICB2YWx1ZTogMyxcclxuICAgICAgaWQ6IDMsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrT25lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUd29SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1RocmVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgY29uc3Qgc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsUHJvcGVydHkgPSBpbml0aWFsUHJvcGVydHlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coY2hlY2tPbmVSZWYuY3VycmVudC5zZWxlY3RlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja1R3b1JlZi5jdXJyZW50LnNlbGVjdGVkKTtcclxuICAgIGNvbnNvbGUubG9nKGNoZWNrVGhyZWVSZWYuY3VycmVudC5zZWxlY3RlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVja1JlZi5jdXJyZW50LnZhbHVlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgd2hvbGVQcm9wZXJ0eU9iamVjdCA9IHtcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBkaWZmaWN1bHR5XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh3aG9sZVByb3BlcnR5T2JqZWN0KTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXJrIHJvdW5kZWQtdG9wIHAtNFwiPlxyXG4gICAgICAgICAgICDYs9io2K8g2LPZh9in2YXbjCDZvtuM2LTZhtmH2KfYr9uMINio2LHYp9uMINi02YXYpyDYqti52K/Yp9ivIDQg2LPZh9mFINio2Ycg2YXYqNmE2LpcclxuICAgICAgICAgICAgPHNwYW4+e2luaXRpYWxQcm9wZXJ0eX08L3NwYW4+INmF24wg2KjYp9i02K8uXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ0biBvbkNsaWNrPXsoZSkgPT4gc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgINm+2LHYr9in2LLYtCDYp9i32YTYp9i52KfYqlxyXG4gICAgICAgICAgICA8L0J0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0yNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjUgbWwtMlwiPtiz2LHZhdin24zZhyDYp9mI2YTbjNmHPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cImx0clwiIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgLjAwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQW1vdW50ICh0byB0aGUgbmVhcmVzdCBkb2xsYXIpXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUHJvcGVydHlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPtiq2YjZhdin2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tSZWZ9IGRlZmF1bHRWYWx1ZSA+2YTYt9mB2Kcg2YXbjNiy2KfZhiDYsduM2LPaqSDZvtiw24zYsduMINix2Kcg2KfZhtiq2K7Yp9ioINqp2YbbjNivPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrT25lUmVmfSB2YWx1ZT1cIjFcIiA+2LLbjNin2K88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUd29SZWZ9IHZhbHVlPVwiMlwiPtmF2KrZiNiz2Lc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUaHJlZVJlZn0gdmFsdWU9XCIzXCI+2qnZhTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob2xlUHJvcGVydHk7Il0sInNvdXJjZVJvb3QiOiIifQ==