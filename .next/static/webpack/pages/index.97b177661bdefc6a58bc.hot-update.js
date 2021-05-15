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
    var checkArr = [checkOneRef, checkTwoRef, checkThreeRef];
    var selectedDifficulty = null;
    var selectedCheck = checkArr.forEach(function (check) {
      if (check.current.selected === true) {
        selectedDifficulty = check.current.value;
      }
    });
    var wholePropertyObject = {
      initialProperty: initialProperty,
      difficulty: selectedDifficulty
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
          lineNumber: 64,
          columnNumber: 13
        }, _this), " \u0645\u06CC \u0628\u0627\u0634\u062F."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
              lineNumber: 69,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this), "\u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
            lineNumber: 76,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              dir: "ltr",
              className: "input-group-text",
              children: ".00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              "aria-label": "Amount (to the nearest dollar)",
              ref: initialPropertyInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "\u062A\u0648\u0645\u0627\u0646"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
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
            lineNumber: 91,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            children: "\u0632\u06CC\u0627\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkTwoRef,
            value: "2",
            children: "\u0645\u062A\u0648\u0633\u0637"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkThreeRef,
            value: "3",
            children: "\u06A9\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5IiwiZGlmZmljdWx0eSIsInRlc3REIiwibmFtZSIsInZhbHVlIiwiaWQiLCJpbml0aWFsUHJvcGVydHlJbnB1dFJlZiIsInVzZVJlZiIsImNoZWNrUmVmIiwiY2hlY2tPbmVSZWYiLCJjaGVja1R3b1JlZiIsImNoZWNrVGhyZWVSZWYiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJjaGVja0FyciIsInNlbGVjdGVkRGlmZmljdWx0eSIsInNlbGVjdGVkQ2hlY2siLCJmb3JFYWNoIiwiY2hlY2siLCJzZWxlY3RlZCIsIndob2xlUHJvcGVydHlPYmplY3QiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLDZCQUNPQSxLQUFLLENBQUNDLGFBRGI7QUFBQSxNQUN4QkMsZUFEd0Isd0JBQ3hCQSxlQUR3QjtBQUFBLE1BQ1BDLFVBRE8sd0JBQ1BBLFVBRE87QUFHL0IsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsUUFBSSxFQUFFLE1BRFI7QUFFRUMsU0FBSyxFQUFFLENBRlQ7QUFHRUMsTUFBRSxFQUFFO0FBSE4sR0FEWSxFQU1aO0FBQ0VGLFFBQUksRUFBRSxRQURSO0FBRUVDLFNBQUssRUFBRSxDQUZUO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBTlksRUFXWjtBQUNFRixRQUFJLEVBQUUsTUFEUjtBQUVFQyxTQUFLLEVBQUUsQ0FG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O0FBQUEsa0NBQ0U7QUFBUSxlQUFHLEVBQUVFLFFBQWI7QUFBdUIsd0JBQVksTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGVBQUcsRUFBRUMsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBUSxlQUFHLEVBQUVDLFdBQWI7QUFBMEIsaUJBQUssRUFBQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEsZUFBRyxFQUFFQyxhQUFiO0FBQTRCLGlCQUFLLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0gsQ0E5RkQ7O0dBQU1kLGE7O0tBQUFBLGE7QUFnR1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3YjE3NzY2MWJkZWZjNmE1OGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnRuIGZyb20gXCIuLi8uLi9VSS9idG4vYnRuXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vd2hvbGVQcm9wZXJ0eS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhbGN1bGF0ZUljb24gZnJvbSBcIi4uLy4uL2ljb25zL2NhbGN1bGF0ZUljb25cIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgV2hvbGVQcm9wZXJ0eSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpbml0aWFsUHJvcGVydHksIGRpZmZpY3VsdHl9ID0gcHJvcHMud2hvbGVQcm9wZXJ0eTtcclxuXHJcbiAgY29uc3QgdGVzdEQgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZWFzeVwiLFxyXG4gICAgICB2YWx1ZTogMSxcclxuICAgICAgaWQ6IDEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm1lZGl1bVwiLFxyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgaWQ6IDIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImhhcmRcIixcclxuICAgICAgdmFsdWU6IDMsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGluaXRpYWxQcm9wZXJ0eUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja09uZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrVHdvUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUaHJlZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBcclxuICAvLyBjb25zdCBkaWZmaWN1bHR5SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfVxyXG4gIGNvbnN0IHN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbFByb3BlcnR5ID0gaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgY2hlY2tBcnIgPSBbY2hlY2tPbmVSZWYsIGNoZWNrVHdvUmVmLCBjaGVja1RocmVlUmVmXTtcclxuICAgIGxldCBzZWxlY3RlZERpZmZpY3VsdHkgPSBudWxsO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDaGVjayA9IGNoZWNrQXJyLmZvckVhY2goY2hlY2sgPT4ge1xyXG4gICAgICBpZihjaGVjay5jdXJyZW50LnNlbGVjdGVkID09PSB0cnVlKXtcclxuICAgICAgICBzZWxlY3RlZERpZmZpY3VsdHkgPSBjaGVjay5jdXJyZW50LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IHdob2xlUHJvcGVydHlPYmplY3QgPSB7XHJcbiAgICAgIGluaXRpYWxQcm9wZXJ0eSxcclxuICAgICAgZGlmZmljdWx0eTpzZWxlY3RlZERpZmZpY3VsdHlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHdob2xlUHJvcGVydHlPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxoNiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWRhcmsgcm91bmRlZC10b3AgcC00XCI+XHJcbiAgICAgICAgICAgINiz2KjYryDYs9mH2KfZhduMINm+24zYtNmG2YfYp9iv24wg2KjYsdin24wg2LTZhdinINiq2LnYr9in2K8gNCDYs9mH2YUg2KjZhyDZhdio2YTYulxyXG4gICAgICAgICAgICA8c3Bhbj57aW5pdGlhbFByb3BlcnR5fTwvc3Bhbj4g2YXbjCDYqNin2LTYry5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlcihlKX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPENhbGN1bGF0ZUljb24gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAg2b7Ysdiv2KfYsti0INin2LfZhNin2LnYp9iqXHJcbiAgICAgICAgICAgIDwvQnRuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTI1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNSBtbC0yXCI+2LPYsdmF2KfbjNmHINin2YjZhNuM2Yc8L2g2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGlyPVwibHRyXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAuMDBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBbW91bnQgKHRvIHRoZSBuZWFyZXN0IGRvbGxhcilcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2luaXRpYWxQcm9wZXJ0eUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+2KrZiNmF2KfZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1JlZn0gZGVmYXVsdFZhbHVlID7ZhNi32YHYpyDZhduM2LLYp9mGINix24zYs9qpINm+2LDbjNix24wg2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tPbmVSZWZ9IHZhbHVlPVwiMVwiID7YstuM2KfYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1R3b1JlZn0gdmFsdWU9XCIyXCI+2YXYqtmI2LPYtzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1RocmVlUmVmfSB2YWx1ZT1cIjNcIj7aqdmFPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hvbGVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9