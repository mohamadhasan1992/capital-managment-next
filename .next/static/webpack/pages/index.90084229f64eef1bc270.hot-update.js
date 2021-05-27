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


  var selectedDifficulty = "";

  var submitWholePropertyHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var initialProperty, checkArr, selectedCheck, wholePropertyObject, eachPropVal, response;
      return C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              initialProperty = initialPropertyInputRef.current.value; // grab the selected dropdown option

              checkArr = [checkOneRef, checkTwoRef, checkThreeRef];
              selectedCheck = checkArr.forEach(function (check) {
                if (check.current.selected === true) {
                  selectedDifficulty = check.current.value;
                }
              }); // created object

              wholePropertyObject = {
                initialProperty: initialProperty,
                difficulty: selectedDifficulty
              }; // preparing result box information

              eachPropVal = eachPropertyValueCalculation(initialProperty, selectedDifficulty);
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
        children: ["\u0633\u0628\u062F \u0633\u0647\u0627\u0645\u06CC \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u062A\u0639\u062F\u0627\u062F ", selectedDifficulty, " \u0633\u0647\u0645 \u0628\u0647 \u0645\u0628\u0644\u063A ", eachPropVal, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: function onClick(e) {
            return submitWholePropertyHandler(e);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_calculateIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
            defaultValue: true,
            children: "\u0644\u0637\u0641\u0627 \u0645\u06CC\u0632\u0627\u0646 \u0631\u06CC\u0633\u06A9 \u067E\u0630\u06CC\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            children: "\u06A9\u0645"
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
            children: "\u0632\u06CC\u0627\u062F"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJXaG9sZVByb3BlcnR5IiwicHJvcHMiLCJpbml0aWFsUHJvcGVydHkiLCJ3aG9sZVByb3BlcnR5IiwiaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYiLCJ1c2VSZWYiLCJjaGVja09uZVJlZiIsImNoZWNrVHdvUmVmIiwiY2hlY2tUaHJlZVJlZiIsImVhY2hQcm9wZXJ0eVZhbHVlQ2FsY3VsYXRpb24iLCJzZWxlY3RlZERpZmYiLCJzZWxlY3RlZERpZmZpY3VsdHkiLCJzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImNoZWNrQXJyIiwic2VsZWN0ZWRDaGVjayIsImZvckVhY2giLCJjaGVjayIsInNlbGVjdGVkIiwid2hvbGVQcm9wZXJ0eU9iamVjdCIsImRpZmZpY3VsdHkiLCJlYWNoUHJvcFZhbCIsInBvc3REYXRhIiwicmVzcG9uc2UiLCJhbGVydCIsInN0YXR1cyIsImNsYXNzZXMiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3hCQyxlQUR3QixHQUNMRCxLQUFLLENBQUNFLGFBREQsQ0FDeEJELGVBRHdCO0FBRy9CLE1BQU1FLHVCQUF1QixHQUFHQyxvREFBTSxFQUF0QztBQUNBLE1BQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7QUFDQSxNQUFNRSxXQUFXLEdBQUdGLG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHSCxvREFBTSxFQUE1QixDQU4rQixDQVEvQjs7QUFDQSxNQUFNSSw0QkFBNEIsR0FBRyxTQUEvQkEsNEJB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QSxxQkFERixlQUlFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsdUJBQVMsRUFBQyxjQUZaO0FBR0UsNEJBQVcsZ0NBSGI7QUFJRSxpQkFBRyxFQUFFVDtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFVRTtBQUFNLHVCQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFnQkU7QUFBUSxtQkFBUyxFQUFDLGFBQWxCO0FBQWdDLHdCQUFXLHdCQUEzQztBQUFBLGtDQUNFO0FBQVEsd0JBQVksTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGVBQUcsRUFBRUUsV0FBYjtBQUEwQixpQkFBSyxFQUFDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBUSxlQUFHLEVBQUVDLFdBQWI7QUFBMEIsaUJBQUssRUFBQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEsZUFBRyxFQUFFQyxhQUFiO0FBQTRCLGlCQUFLLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0gsQ0E3RkQ7O0dBQU1SLGE7O0tBQUFBLGE7QUErRlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwMDg0MjI5ZjY0ZWVmMWJjMjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnRuIGZyb20gXCIuLi8uLi9VSS9idG4vYnRuXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vd2hvbGVQcm9wZXJ0eS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhbGN1bGF0ZUljb24gZnJvbSBcIi4uLy4uL2ljb25zL2NhbGN1bGF0ZUljb25cIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tIFwiLi4vLi4vLi4vZGF0YUZldGNoaW5nL3Bvc3REYXRhXCI7XHJcblxyXG5jb25zdCBXaG9sZVByb3BlcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2luaXRpYWxQcm9wZXJ0eX0gPSBwcm9wcy53aG9sZVByb3BlcnR5O1xyXG5cclxuICBjb25zdCBpbml0aWFsUHJvcGVydHlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrT25lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUd29SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1RocmVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIGNhbGN1bGF0aW4gZWFjaCBwcm9wZXJ0eSB2YWx1ZVxyXG4gIGNvbnN0IGVhY2hQcm9wZXJ0eVZhbHVlQ2FsY3VsYXRpb24gPSAoaW5pdGlhbFByb3BlcnR5LCBzZWxlY3RlZERpZmYpID0+IHtcclxuICAgIHN3aXRjaCAoc2VsZWN0ZWREaWZmKSB7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxQcm9wZXJ0eSAvIDQ7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxQcm9wZXJ0eSAvIDM7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxQcm9wZXJ0eSAvIDI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxQcm9wZXJ0eSAvIDQ7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBjb25zdCBkaWZmaWN1bHR5SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfVxyXG4gIGxldCBzZWxlY3RlZERpZmZpY3VsdHkgPSBcIlwiO1xyXG4gIGNvbnN0IHN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5pdGlhbFByb3BlcnR5ID0gaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIC8vIGdyYWIgdGhlIHNlbGVjdGVkIGRyb3Bkb3duIG9wdGlvblxyXG4gICAgY29uc3QgY2hlY2tBcnIgPSBbY2hlY2tPbmVSZWYsIGNoZWNrVHdvUmVmLCBjaGVja1RocmVlUmVmXTtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2hlY2sgPSBjaGVja0Fyci5mb3JFYWNoKGNoZWNrID0+IHtcclxuICAgICAgaWYoY2hlY2suY3VycmVudC5zZWxlY3RlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5ID0gY2hlY2suY3VycmVudC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIGNyZWF0ZWQgb2JqZWN0XHJcbiAgICBjb25zdCB3aG9sZVByb3BlcnR5T2JqZWN0ID0ge1xyXG4gICAgICBpbml0aWFsUHJvcGVydHksXHJcbiAgICAgIGRpZmZpY3VsdHk6c2VsZWN0ZWREaWZmaWN1bHR5XHJcbiAgICB9O1xyXG4gICAgLy8gcHJlcGFyaW5nIHJlc3VsdCBib3ggaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGVhY2hQcm9wVmFsID0gZWFjaFByb3BlcnR5VmFsdWVDYWxjdWxhdGlvbihcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBzZWxlY3RlZERpZmZpY3VsdHlcclxuICAgICk7XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdERhdGEoXCJodHRwOi8vMTI3LjAuMC4yOjgwMDAvYXBpL3YxL3dob2xlcHJvcGVydHlcIix3aG9sZVByb3BlcnR5T2JqZWN0KTtcclxuICAgIGFsZXJ0KHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGg2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFyayByb3VuZGVkLXRvcCBwLTRcIj5cclxuICAgICAgICAgICAg2LPYqNivINiz2YfYp9mF24wg2b7bjNi02YbZh9in2K/bjCDYqNix2KfbjCDYtNmF2Kcg2KrYudiv2KfYryB7c2VsZWN0ZWREaWZmaWN1bHR5fSDYs9mH2YUg2KjZhyDZhdio2YTYuiB7ZWFjaFByb3BWYWx9XHJcbiAgICAgICAgICAgIDxzcGFuPntpbml0aWFsUHJvcGVydHl9PC9zcGFuPiDZhduMINio2KfYtNivLlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdG4gb25DbGljaz17KGUpID0+IHN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyKGUpfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FsY3VsYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICDZvtix2K/Yp9iy2LQg2KfYt9mE2KfYudin2KpcclxuICAgICAgICAgICAgPC9CdG4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMjVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1IG1sLTJcIj7Ys9ix2YXYp9uM2Ycg2KfZiNmE24zZhzwvaDY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkaXI9XCJsdHJcIiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIC4wMFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFtb3VudCAodG8gdGhlIG5lYXJlc3QgZG9sbGFyKVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5pdGlhbFByb3BlcnR5SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj7YqtmI2YXYp9mGPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWUgPtmE2LfZgdinINmF24zYstin2YYg2LHbjNiz2qkg2b7YsNuM2LHbjCDYsdinINin2YbYqtiu2KfYqCDaqdmG24zYrzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gcmVmPXtjaGVja09uZVJlZn0gdmFsdWU9XCIxXCIgPtqp2YU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUd29SZWZ9IHZhbHVlPVwiMlwiPtmF2KrZiNiz2Lc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUaHJlZVJlZn0gdmFsdWU9XCIzXCI+2LLbjNin2K88L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG9sZVByb3BlcnR5OyJdLCJzb3VyY2VSb290IjoiIn0=