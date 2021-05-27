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
  var checkThreeRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(); // calculatin each property value

  var eachPropertyValueCalculation = function eachPropertyValueCalculation(initialProperty, selectedDiff) {
    switch (selectedDiff) {
      case "1":
        return initialProperty / 4;

      case "1":
        return initialProperty / 3;

      case "1":
        return initialProperty / 2;

      default:
        return initialProperty / 4;
    }
  }; // const difficultyHandler = (e) => {
  //   console.log(e.target.value);
  // }


  var submitWholePropertyHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var initialProperty, checkArr, selectedDifficulty, selectedCheck, wholePropertyObject, eachPropVal, response;
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
              eachPropVal = eachPropertyValueCalculation(initialProperty, selectedDifficulty);
              console.log(eachPropVal);
              _context.next = 10;
              return Object(_dataFetching_postData__WEBPACK_IMPORTED_MODULE_7__["postData"])("http://127.0.0.2:8000/api/v1/wholeproperty", wholePropertyObject);

            case 10:
              response = _context.sent;
              alert(response.status);

            case 12:
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
            children: "\u06A9\u0645"
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
            children: "\u0632\u06CC\u0627\u062F"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJpbml0aWFsUHJvcGVydHkiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYiLCJ1c2VSZWYiLCJjaGVja09uZVJlZiIsImNoZWNrVHdvUmVmIiwiY2hlY2tUaHJlZVJlZiIsImVhY2hQcm9wZXJ0eVZhbHVlQ2FsY3VsYXRpb24iLCJzZWxlY3RlZERpZmYiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImNoZWNrQXJyIiwic2VsZWN0ZWREaWZmaWN1bHR5Iiwic2VsZWN0ZWRDaGVjayIsImZvckVhY2giLCJjaGVjayIsInNlbGVjdGVkIiwid2hvbGVQcm9wZXJ0eU9iamVjdCIsImRpZmZpY3VsdHkiLCJlYWNoUHJvcFZhbCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0RGF0YSIsInJlc3BvbnNlIiwiYWxlcnQiLCJzdGF0dXMiLCJjbGFzc2VzIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN4QkMsZUFEd0IsR0FDTEQsS0FBSyxDQUFDRSxhQURELENBQ3hCRCxlQUR3QjtBQUcvQixNQUFNRSx1QkFBdUIsR0FBR0Msb0RBQU0sRUFBdEM7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHRixvREFBTSxFQUExQjtBQUNBLE1BQU1HLGFBQWEsR0FBR0gsb0RBQU0sRUFBNUIsQ0FOK0IsQ0FRL0I7O0FBQ0EsTUFBTUksNEJBQTRC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QUFBLHFCQURGLGVBSUU7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSx1QkFBUyxFQUFDLGNBRlo7QUFHRSw0QkFBVyxnQ0FIYjtBQUlFLGlCQUFHLEVBQUVSO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQVVFO0FBQU0sdUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWdCRTtBQUFRLG1CQUFTLEVBQUMsYUFBbEI7QUFBZ0Msd0JBQVcsd0JBQTNDO0FBQUEsa0NBQ0U7QUFBUSx3QkFBWSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEsZUFBRyxFQUFFRSxXQUFiO0FBQTBCLGlCQUFLLEVBQUMsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLGVBQUcsRUFBRUMsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBUSxlQUFHLEVBQUVDLGFBQWI7QUFBNEIsaUJBQUssRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDSCxDQTlGRDs7R0FBTVIsYTs7S0FBQUEsYTtBQWdHU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmE2M2FjZDYzYWI1MTNkOTk5ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdG4gZnJvbSBcIi4uLy4uL1VJL2J0bi9idG5cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi93aG9sZVByb3BlcnR5Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ2FsY3VsYXRlSWNvbiBmcm9tIFwiLi4vLi4vaWNvbnMvY2FsY3VsYXRlSWNvblwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cG9zdERhdGF9IGZyb20gXCIuLi8uLi8uLi9kYXRhRmV0Y2hpbmcvcG9zdERhdGFcIjtcclxuXHJcbmNvbnN0IFdob2xlUHJvcGVydHkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7aW5pdGlhbFByb3BlcnR5fSA9IHByb3BzLndob2xlUHJvcGVydHk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxQcm9wZXJ0eUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tPbmVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1R3b1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrVGhyZWVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY2FsY3VsYXRpbiBlYWNoIHByb3BlcnR5IHZhbHVlXHJcbiAgY29uc3QgZWFjaFByb3BlcnR5VmFsdWVDYWxjdWxhdGlvbiA9IChpbml0aWFsUHJvcGVydHksIHNlbGVjdGVkRGlmZikgPT4ge1xyXG4gICAgc3dpdGNoIChzZWxlY3RlZERpZmYpIHtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gNDtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gMztcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gMjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gNDtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgY29uc3Qgc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIgPSBhc3luYyhlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wZXJ0eSA9IGluaXRpYWxQcm9wZXJ0eUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNoZWNrQXJyID0gW2NoZWNrT25lUmVmLCBjaGVja1R3b1JlZiwgY2hlY2tUaHJlZVJlZl07XHJcbiAgICBsZXQgc2VsZWN0ZWREaWZmaWN1bHR5ID0gbnVsbDtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2hlY2sgPSBjaGVja0Fyci5mb3JFYWNoKGNoZWNrID0+IHtcclxuICAgICAgaWYoY2hlY2suY3VycmVudC5zZWxlY3RlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gY2hlY2suY3VycmVudC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3Qgd2hvbGVQcm9wZXJ0eU9iamVjdCA9IHtcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBkaWZmaWN1bHR5OnNlbGVjdGVkRGlmZmljdWx0eVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGVhY2hQcm9wVmFsID0gZWFjaFByb3BlcnR5VmFsdWVDYWxjdWxhdGlvbihcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBzZWxlY3RlZERpZmZpY3VsdHlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhlYWNoUHJvcFZhbCk7XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdERhdGEoXCJodHRwOi8vMTI3LjAuMC4yOjgwMDAvYXBpL3YxL3dob2xlcHJvcGVydHlcIix3aG9sZVByb3BlcnR5T2JqZWN0KTtcclxuICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGg2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFyayByb3VuZGVkLXRvcCBwLTRcIj5cclxuICAgICAgICAgICAg2LPYqNivINiz2YfYp9mF24wg2b7bjNi02YbZh9in2K/bjCDYqNix2KfbjCDYtNmF2Kcg2KrYudiv2KfYryA0INiz2YfZhSDYqNmHINmF2KjZhNi6XHJcbiAgICAgICAgICAgIDxzcGFuPntpbml0aWFsUHJvcGVydHl9PC9zcGFuPiDZhduMINio2KfYtNivLlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdG4gb25DbGljaz17KGUpID0+IHN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyKGUpfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FsY3VsYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICDZvtix2K/Yp9iy2LQg2KfYt9mE2KfYudin2KpcclxuICAgICAgICAgICAgPC9CdG4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMjVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1IG1sLTJcIj7Ys9ix2YXYp9uM2Ycg2KfZiNmE24zZhzwvaDY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XCJsdHJcIiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIC4wMFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFtb3VudCAodG8gdGhlIG5lYXJlc3QgZG9sbGFyKVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5pdGlhbFByb3BlcnR5SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj7YqtmI2YXYp9mGPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWUgPtmE2LfZgdinINmF24zYstin2YYg2LHbjNiz2qkg2b7YsNuM2LHbjCDYsdinINin2YbYqtiu2KfYqCDaqdmG24zYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja09uZVJlZn0gdmFsdWU9XCIxXCIgPtqp2YU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUd29SZWZ9IHZhbHVlPVwiMlwiPtmF2KrZiNiz2Lc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUaHJlZVJlZn0gdmFsdWU9XCIzXCI+2LLbjNin2K88L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9sZVByb3BlcnR5OyJdLCJzb3VyY2VSb290IjoiIn0=