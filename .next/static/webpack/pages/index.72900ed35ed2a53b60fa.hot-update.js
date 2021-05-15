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
  var initialPropertyInputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
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
          lineNumber: 65,
          columnNumber: 13
        }, _this), " \u0645\u06CC \u0628\u0627\u0634\u062F."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
              lineNumber: 70,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this), "\u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
            lineNumber: 77,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              dir: "ltr",
              className: "input-group-text",
              children: ".00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              "aria-label": "Amount (to the nearest dollar)",
              ref: initialPropertyInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "\u062A\u0648\u0645\u0627\u0646"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "form-select",
          "aria-label": "Default select example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            defaultValue: true,
            children: "\u0644\u0637\u0641\u0627 \u0645\u06CC\u0632\u0627\u0646 \u0631\u06CC\u0633\u06A9 \u067E\u0630\u06CC\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            children: "\u0632\u06CC\u0627\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkTwoRef,
            value: "2",
            children: "\u0645\u062A\u0648\u0633\u0637"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkThreeRef,
            value: "3",
            children: "\u06A9\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5IiwiZGlmZmljdWx0eSIsInRlc3REIiwibmFtZSIsInZhbHVlIiwiaWQiLCJpbml0aWFsUHJvcGVydHlJbnB1dFJlZiIsInVzZVJlZiIsImNoZWNrUmVmIiwiY2hlY2tPbmVSZWYiLCJjaGVja1R3b1JlZiIsImNoZWNrVGhyZWVSZWYiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJjaGVja0FyciIsInNlbGVjdGVkRGlmZmljdWx0eSIsInNlbGVjdGVkQ2hlY2siLCJmb3JFYWNoIiwiY2hlY2siLCJzZWxlY3RlZCIsIndob2xlUHJvcGVydHlPYmplY3QiLCJwb3N0RGF0YSIsInJlc3BvbnNlIiwiYWxlcnQiLCJzdGF0dXMiLCJjbGFzc2VzIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSw2QkFDT0EsS0FBSyxDQUFDQyxhQURiO0FBQUEsTUFDeEJDLGVBRHdCLHdCQUN4QkEsZUFEd0I7QUFBQSxNQUNQQyxVQURPLHdCQUNQQSxVQURPO0FBRy9CLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFFBQUksRUFBRSxNQURSO0FBRUVDLFNBQUssRUFBRSxDQUZUO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBRFksRUFNWjtBQUNFRixRQUFJLEVBQUUsUUFEUjtBQUVFQyxTQUFLLEVBQUUsQ0FGVDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQU5ZLEVBV1o7QUFDRUYs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O0FBQUE7QUFBQSxxQkFKRixlQVVFO0FBQU0sdUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWdCRTtBQUFRLG1CQUFTLEVBQUMsYUFBbEI7QUFBZ0Msd0JBQVcsd0JBQTNDO0FBQUEsa0NBQ0U7QUFBUSx3QkFBWSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEsZUFBRyxFQUFFRyxXQUFiO0FBQTBCLGlCQUFLLEVBQUMsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLGVBQUcsRUFBRUMsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBUSxlQUFHLEVBQUVDLGFBQWI7QUFBNEIsaUJBQUssRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDSCxDQTlGRDs7R0FBTWQsYTs7S0FBQUEsYTtBQWdHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzI5MDBlZDM1ZWQyYTUzYjYwZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdG4gZnJvbSBcIi4uLy4uL1VJL2J0bi9idG5cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi93aG9sZVByb3BlcnR5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FsY3VsYXRlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvY2FsY3VsYXRlSWNvblwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gXCIuLi8uLi8uLi9kYXRhRmV0Y2hpbmcvcG9zdERhdGFcIjtcclxuXHJcbmNvbnN0IFdob2xlUHJvcGVydHkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7aW5pdGlhbFByb3BlcnR5LCBkaWZmaWN1bHR5fSA9IHByb3BzLndob2xlUHJvcGVydHk7XHJcblxyXG4gIGNvbnN0IHRlc3REID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImVhc3lcIixcclxuICAgICAgdmFsdWU6IDEsXHJcbiAgICAgIGlkOiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJtZWRpdW1cIixcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJoYXJkXCIsXHJcbiAgICAgIHZhbHVlOiAzLFxyXG4gICAgICBpZDogMyxcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcGVydHlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tPbmVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1R3b1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrVGhyZWVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgXHJcbiAgLy8gY29uc3QgZGlmZmljdWx0eUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH1cclxuICBjb25zdCBzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbFByb3BlcnR5ID0gaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgY2hlY2tBcnIgPSBbY2hlY2tPbmVSZWYsIGNoZWNrVHdvUmVmLCBjaGVja1RocmVlUmVmXTtcclxuICAgIGxldCBzZWxlY3RlZERpZmZpY3VsdHkgPSBudWxsO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDaGVjayA9IGNoZWNrQXJyLmZvckVhY2goY2hlY2sgPT4ge1xyXG4gICAgICBpZihjaGVjay5jdXJyZW50LnNlbGVjdGVkID09PSB0cnVlKXtcclxuICAgICAgICBzZWxlY3RlZERpZmZpY3VsdHkgPSBjaGVjay5jdXJyZW50LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCB3aG9sZVByb3BlcnR5T2JqZWN0ID0ge1xyXG4gICAgICBpbml0aWFsUHJvcGVydHksXHJcbiAgICAgIGRpZmZpY3VsdHk6c2VsZWN0ZWREaWZmaWN1bHR5XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3REYXRhKFwiaHR0cDovLzEyNy4wLjAuMjo4MDAwL2FwaS92MS93aG9sZXByb3BlcnR5XCIsd2hvbGVQcm9wZXJ0eU9iamVjdCk7XHJcbiAgICBhbGVydChyZXNwb25zZS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxoNiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWRhcmsgcm91bmRlZC10b3AgcC00XCI+XHJcbiAgICAgICAgICAgINiz2KjYryDYs9mH2KfZhduMINm+24zYtNmG2YfYp9iv24wg2KjYsdin24wg2LTZhdinINiq2LnYr9in2K8gNCDYs9mH2YUg2KjZhyDZhdio2YTYulxyXG4gICAgICAgICAgICA8c3Bhbj57aW5pdGlhbFByb3BlcnR5fTwvc3Bhbj4g2YXbjCDYqNin2LTYry5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlcihlKX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPENhbGN1bGF0ZUljb24gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAg2b7Ysdiv2KfYsti0INin2LfZhNin2LnYp9iqXHJcbiAgICAgICAgICAgIDwvQnRuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTI1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNSBtbC0yXCI+2LPYsdmF2KfbjNmHINin2YjZhNuM2Yc8L2g2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGlyPVwibHRyXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAuMDBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBbW91bnQgKHRvIHRoZSBuZWFyZXN0IGRvbGxhcilcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2luaXRpYWxQcm9wZXJ0eUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+2KrZiNmF2KfZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlID7ZhNi32YHYpyDZhduM2LLYp9mGINix24zYs9qpINm+2LDbjNix24wg2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tPbmVSZWZ9IHZhbHVlPVwiMVwiID7YstuM2KfYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1R3b1JlZn0gdmFsdWU9XCIyXCI+2YXYqtmI2LPYtzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja1RocmVlUmVmfSB2YWx1ZT1cIjNcIj7aqdmFPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hvbGVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9