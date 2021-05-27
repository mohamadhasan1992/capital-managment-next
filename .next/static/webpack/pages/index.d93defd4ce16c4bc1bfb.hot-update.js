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





 // calculatin each property value

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
};

var WholeProperty = function WholeProperty(props) {
  _s();

  var initialProperty = props.wholeProperty.initialProperty;
  var initialPropertyInputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkOneRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkTwoRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var checkThreeRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(); // const difficultyHandler = (e) => {
  //   console.log(e.target.value);
  // }

  var selectedDifficulty = "";
  var eachPropVal = "";

  var submitWholePropertyHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var initialProperty, checkArr, selectedCheck, wholePropertyObject, response;
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
          lineNumber: 66,
          columnNumber: 13
        }, _this), " \u0645\u06CC \u0628\u0627\u0634\u062F."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
              lineNumber: 71,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this), "\u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
            lineNumber: 78,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              dir: "ltr",
              className: "input-group-text",
              children: ".00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              "aria-label": "Amount (to the nearest dollar)",
              ref: initialPropertyInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "\u062A\u0648\u0645\u0627\u0646"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          className: "form-select",
          "aria-label": "Default select example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            defaultValue: true,
            children: "\u0644\u0637\u0641\u0627 \u0645\u06CC\u0632\u0627\u0646 \u0631\u06CC\u0633\u06A9 \u067E\u0630\u06CC\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkOneRef,
            value: "1",
            children: "\u06A9\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkTwoRef,
            value: "2",
            children: "\u0645\u062A\u0648\u0633\u0637"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            ref: checkThreeRef,
            value: "3",
            children: "\u0632\u06CC\u0627\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJlYWNoUHJvcGVydHlWYWx1ZUNhbGN1bGF0aW9uIiwiaW5pdGlhbFByb3BlcnR5Iiwic2VsZWN0ZWREaWZmIiwiV2hvbGVQcm9wZXJ0eSIsInByb3BzIiwid2hvbGVQcm9wZXJ0eSIsImluaXRpYWxQcm9wZXJ0eUlucHV0UmVmIiwidXNlUmVmIiwiY2hlY2tPbmVSZWYiLCJjaGVja1R3b1JlZiIsImNoZWNrVGhyZWVSZWYiLCJzZWxlY3RlZERpZmZpY3VsdHkiLCJlYWNoUHJvcFZhbCIsInN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiY2hlY2tBcnIiLCJzZWxlY3RlZENoZWNrIiwiZm9yRWFjaCIsImNoZWNrIiwic2VsZWN0ZWQiLCJ3aG9sZVByb3BlcnR5T2JqZWN0IiwiZGlmZmljdWx0eSIsInBvc3REYXRhIiwicmVzcG9uc2UiLCJhbGVydCIsInN0YXR1cyIsImNsYXNzZXMiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDRSxJQUFNQSw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNDLGVBQUQsRUFBa0JDLFlBQWxCLEVBQW1DO0FBQ3RFLFVBQVFBLFlBQVI7QUFDRSxTQUFLLEdBQUw7QUFDRSxhQUFPRCxlQUFlLEdBQUcsQ0FBekI7O0FBQ0YsU0FBSyxHQUFMO0FBQ0UsYUFBT0EsZUFBZSxHQUFHLENBQXpCOztBQUNGLFNBQUssR0FBTDtBQUNFLGFBQU9BLGVBQWUsR0FBRyxDQUF6Qjs7QUFDRjtBQUNFLGFBQU9BLGVBQWUsR0FBRyxDQUF6QjtBQVJKO0FBVUQsQ0FYRDs7QUFhRixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdC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QTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLHVCQUFTLEVBQUMsY0FGWjtBQUdFLDRCQUFXLGdDQUhiO0FBSUUsaUJBQUcsRUFBRVI7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBVUU7QUFBTSx1QkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBZ0JFO0FBQVEsbUJBQVMsRUFBQyxhQUFsQjtBQUFnQyx3QkFBVyx3QkFBM0M7QUFBQSxrQ0FDRTtBQUFRLHdCQUFZLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxlQUFHLEVBQUVFLFdBQWI7QUFBMEIsaUJBQUssRUFBQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEsZUFBRyxFQUFFQyxXQUFiO0FBQTBCLGlCQUFLLEVBQUMsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFRLGVBQUcsRUFBRUMsYUFBYjtBQUE0QixpQkFBSyxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNILENBakZEOztHQUFNUCxhOztLQUFBQSxhO0FBbUZTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTNkZWZkNGNlMTZjNGJjMWJmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ0biBmcm9tIFwiLi4vLi4vVUkvYnRuL2J0blwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3dob2xlUHJvcGVydHkubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDYWxjdWxhdGVJY29uIGZyb20gXCIuLi8uLi9pY29ucy9jYWxjdWxhdGVJY29uXCI7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtwb3N0RGF0YX0gZnJvbSBcIi4uLy4uLy4uL2RhdGFGZXRjaGluZy9wb3N0RGF0YVwiO1xyXG5cclxuLy8gY2FsY3VsYXRpbiBlYWNoIHByb3BlcnR5IHZhbHVlXHJcbiAgY29uc3QgZWFjaFByb3BlcnR5VmFsdWVDYWxjdWxhdGlvbiA9IChpbml0aWFsUHJvcGVydHksIHNlbGVjdGVkRGlmZikgPT4ge1xyXG4gICAgc3dpdGNoIChzZWxlY3RlZERpZmYpIHtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gNDtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gMztcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gMjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gaW5pdGlhbFByb3BlcnR5IC8gNDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuY29uc3QgV2hvbGVQcm9wZXJ0eSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpbml0aWFsUHJvcGVydHl9ID0gcHJvcHMud2hvbGVQcm9wZXJ0eTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja09uZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrVHdvUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUaHJlZVJlZiA9IHVzZVJlZigpO1xyXG4gIFxyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgbGV0IHNlbGVjdGVkRGlmZmljdWx0eSA9IFwiXCI7XHJcbiAgbGV0IGVhY2hQcm9wVmFsID0gXCJcIjtcclxuICBjb25zdCBzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlciA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wZXJ0eSA9IGluaXRpYWxQcm9wZXJ0eUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyBncmFiIHRoZSBzZWxlY3RlZCBkcm9wZG93biBvcHRpb25cclxuICAgIGNvbnN0IGNoZWNrQXJyID0gW2NoZWNrT25lUmVmLCBjaGVja1R3b1JlZiwgY2hlY2tUaHJlZVJlZl07XHJcbiAgICBjb25zdCBzZWxlY3RlZENoZWNrID0gY2hlY2tBcnIuZm9yRWFjaChjaGVjayA9PiB7XHJcbiAgICAgIGlmKGNoZWNrLmN1cnJlbnQuc2VsZWN0ZWQgPT09IHRydWUpe1xyXG4gICAgICAgIHNlbGVjdGVkRGlmZmljdWx0eSA9IGNoZWNrLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBjcmVhdGVkIG9iamVjdFxyXG4gICAgY29uc3Qgd2hvbGVQcm9wZXJ0eU9iamVjdCA9IHtcclxuICAgICAgaW5pdGlhbFByb3BlcnR5LFxyXG4gICAgICBkaWZmaWN1bHR5OnNlbGVjdGVkRGlmZmljdWx0eVxyXG4gICAgfTtcclxuICAgIC8vIHByZXBhcmluZyByZXN1bHQgYm94IGluZm9ybWF0aW9uXHJcbiAgICBlYWNoUHJvcFZhbCA9IGVhY2hQcm9wZXJ0eVZhbHVlQ2FsY3VsYXRpb24oXHJcbiAgICAgIGluaXRpYWxQcm9wZXJ0eSxcclxuICAgICAgc2VsZWN0ZWREaWZmaWN1bHR5XHJcbiAgICApO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3REYXRhKFwiaHR0cDovLzEyNy4wLjAuMjo4MDAwL2FwaS92MS93aG9sZXByb3BlcnR5XCIsd2hvbGVQcm9wZXJ0eU9iamVjdCk7XHJcbiAgICBhbGVydChyZXNwb25zZS5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxoNiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWRhcmsgcm91bmRlZC10b3AgcC00XCI+XHJcbiAgICAgICAgICAgINiz2KjYryDYs9mH2KfZhduMINm+24zYtNmG2YfYp9iv24wg2KjYsdin24wg2LTZhdinINiq2LnYr9in2K8ge3NlbGVjdGVkRGlmZmljdWx0eX0g2LPZh9mFINio2Ycg2YXYqNmE2Loge2VhY2hQcm9wVmFsfVxyXG4gICAgICAgICAgICA8c3Bhbj57aW5pdGlhbFByb3BlcnR5fTwvc3Bhbj4g2YXbjCDYqNin2LTYry5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhlKSA9PiBzdWJtaXRXaG9sZVByb3BlcnR5SGFuZGxlcihlKX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPENhbGN1bGF0ZUljb24gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAg2b7Ysdiv2KfYsti0INin2LfZhNin2LnYp9iqXHJcbiAgICAgICAgICAgIDwvQnRuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTI1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNSBtbC0yXCI+2LPYsdmF2KfbjNmHINin2YjZhNuM2Yc8L2g2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGlyPVwibHRyXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAuMDBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBbW91bnQgKHRvIHRoZSBuZWFyZXN0IGRvbGxhcilcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2luaXRpYWxQcm9wZXJ0eUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+2KrZiNmF2KfZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlID7ZhNi32YHYpyDZhduM2LLYp9mGINix24zYs9qpINm+2LDbjNix24wg2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tPbmVSZWZ9IHZhbHVlPVwiMVwiID7aqdmFPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrVHdvUmVmfSB2YWx1ZT1cIjJcIj7Zhdiq2YjYs9i3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrVGhyZWVSZWZ9IHZhbHVlPVwiM1wiPtiy24zYp9ivPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hvbGVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9