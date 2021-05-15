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
/* harmony import */ var _dataFetching_postData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dataFetching/postData */ "./dataFetching/postData.js");


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
    var response = Object(_dataFetching_postData__WEBPACK_IMPORTED_MODULE_5__["postData"])("127.0.0.2:8000/api/v1/wholeproperty", wholePropertyObject);
    console.log(response);
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

/***/ }),

/***/ "./dataFetching/postData.js":
/*!**********************************!*\
  !*** ./dataFetching/postData.js ***!
  \**********************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 //post function via axios

var postData = /*#__PURE__*/function () {
  var _ref = Object(C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, data) {
    var response;
    return C_Users_mohamadhasan_tabrizi_Desktop_capitalnext_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3dob2xlUHJvcGVydHkvd2hvbGVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vZGF0YUZldGNoaW5nL3Bvc3REYXRhLmpzIl0sIm5hbWVzIjpbIldob2xlUHJvcGVydHkiLCJwcm9wcyIsIndob2xlUHJvcGVydHkiLCJpbml0aWFsUHJvcGVydHkiLCJkaWZmaWN1bHR5IiwidGVzdEQiLCJuYW1lIiwidmFsdWUiLCJpZCIsImluaXRpYWxQcm9wZXJ0eUlucHV0UmVmIiwidXNlUmVmIiwiY2hlY2tSZWYiLCJjaGVja09uZVJlZiIsImNoZWNrVHdvUmVmIiwiY2hlY2tUaHJlZVJlZiIsInN1Ym1pdFdob2xlUHJvcGVydHlIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImNoZWNrQXJyIiwic2VsZWN0ZWREaWZmaWN1bHR5Iiwic2VsZWN0ZWRDaGVjayIsImZvckVhY2giLCJjaGVjayIsInNlbGVjdGVkIiwid2hvbGVQcm9wZXJ0eU9iamVjdCIsInJlc3BvbnNlIiwicG9zdERhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIkNvbnRlbnQiLCJ1cmwiLCJkYXRhIiwiYXhpb3MiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSw2QkFDT0EsS0FBSyxDQUFDQyxhQURiO0FBQUEsTUFDeEJDLGVBRHdCLHdCQUN4QkEsZUFEd0I7QUFBQSxNQUNQQyxVQURPLHdCQUNQQSxVQURPO0FBRy9CLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFFBQUksRUFBRSxNQURSO0FBRUVDLFNBQUssRUFBRSxDQUZUO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBRFksRUFNWjtBQUNFRixRQUFJLEVB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QUNPLElBRkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmMTk3Y2JjMDJmM2UzZDhkNzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnRuIGZyb20gXCIuLi8uLi9VSS9idG4vYnRuXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vd2hvbGVQcm9wZXJ0eS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhbGN1bGF0ZUljb24gZnJvbSBcIi4uLy4uL2ljb25zL2NhbGN1bGF0ZUljb25cIjtcclxuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tIFwiLi4vLi4vLi4vZGF0YUZldGNoaW5nL3Bvc3REYXRhXCI7XHJcblxyXG5jb25zdCBXaG9sZVByb3BlcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2luaXRpYWxQcm9wZXJ0eSwgZGlmZmljdWx0eX0gPSBwcm9wcy53aG9sZVByb3BlcnR5O1xyXG5cclxuICBjb25zdCB0ZXN0RCA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJlYXN5XCIsXHJcbiAgICAgIHZhbHVlOiAxLFxyXG4gICAgICBpZDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibWVkaXVtXCIsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBpZDogMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaGFyZFwiLFxyXG4gICAgICB2YWx1ZTogMyxcclxuICAgICAgaWQ6IDMsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFByb3BlcnR5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNoZWNrT25lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2hlY2tUd29SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjaGVja1RocmVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIFxyXG4gIC8vIGNvbnN0IGRpZmZpY3VsdHlIYW5kbGVyID0gKGUpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9XHJcbiAgY29uc3Qgc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsUHJvcGVydHkgPSBpbml0aWFsUHJvcGVydHlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBjaGVja0FyciA9IFtjaGVja09uZVJlZiwgY2hlY2tUd29SZWYsIGNoZWNrVGhyZWVSZWZdO1xyXG4gICAgbGV0IHNlbGVjdGVkRGlmZmljdWx0eSA9IG51bGw7XHJcbiAgICBjb25zdCBzZWxlY3RlZENoZWNrID0gY2hlY2tBcnIuZm9yRWFjaChjaGVjayA9PiB7XHJcbiAgICAgIGlmKGNoZWNrLmN1cnJlbnQuc2VsZWN0ZWQgPT09IHRydWUpe1xyXG4gICAgICAgIHNlbGVjdGVkRGlmZmljdWx0eSA9IGNoZWNrLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IHdob2xlUHJvcGVydHlPYmplY3QgPSB7XHJcbiAgICAgIGluaXRpYWxQcm9wZXJ0eSxcclxuICAgICAgZGlmZmljdWx0eTpzZWxlY3RlZERpZmZpY3VsdHlcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHBvc3REYXRhKFwiMTI3LjAuMC4yOjgwMDAvYXBpL3YxL3dob2xlcHJvcGVydHlcIix3aG9sZVByb3BlcnR5T2JqZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXJrIHJvdW5kZWQtdG9wIHAtNFwiPlxyXG4gICAgICAgICAgICDYs9io2K8g2LPZh9in2YXbjCDZvtuM2LTZhtmH2KfYr9uMINio2LHYp9uMINi02YXYpyDYqti52K/Yp9ivIDQg2LPZh9mFINio2Ycg2YXYqNmE2LpcclxuICAgICAgICAgICAgPHNwYW4+e2luaXRpYWxQcm9wZXJ0eX08L3NwYW4+INmF24wg2KjYp9i02K8uXHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ0biBvbkNsaWNrPXsoZSkgPT4gc3VibWl0V2hvbGVQcm9wZXJ0eUhhbmRsZXIoZSl9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgINm+2LHYr9in2LLYtCDYp9i32YTYp9i52KfYqlxyXG4gICAgICAgICAgICA8L0J0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0yNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjUgbWwtMlwiPtiz2LHZhdin24zZhyDYp9mI2YTbjNmHPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cImx0clwiIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgLjAwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQW1vdW50ICh0byB0aGUgbmVhcmVzdCBkb2xsYXIpXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtpbml0aWFsUHJvcGVydHlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPtiq2YjZhdin2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZSA+2YTYt9mB2Kcg2YXbjNiy2KfZhiDYsduM2LPaqSDZvtiw24zYsduMINix2Kcg2KfZhtiq2K7Yp9ioINqp2YbbjNivPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiByZWY9e2NoZWNrT25lUmVmfSB2YWx1ZT1cIjFcIiA+2LLbjNin2K88L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUd29SZWZ9IHZhbHVlPVwiMlwiPtmF2KrZiNiz2Lc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHJlZj17Y2hlY2tUaHJlZVJlZn0gdmFsdWU9XCIzXCI+2qnZhTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdob2xlUHJvcGVydHk7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy9wb3N0IGZ1bmN0aW9uIHZpYSBheGlvc1xyXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyh1cmwsIGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsZGF0YSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==