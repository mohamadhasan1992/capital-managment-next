module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signal/newsignal/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UI/btn/btn.js":
/*!**********************************!*\
  !*** ./components/UI/btn/btn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _btn_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn.module.css */ "./components/UI/btn/btn.module.css");
/* harmony import */ var _btn_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_btn_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\UI\\btn\\btn.js";


const Btn = props => {
  const btnStyle = [_btn_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Btn];

  if (props.type === "round") {
    btnStyle.push(_btn_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Round);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: btnStyle.join(" "),
    onClick: props.onClick,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ }),

/***/ "./components/UI/btn/btn.module.css":
/*!******************************************!*\
  !*** ./components/UI/btn/btn.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Btn": "btn_Btn__3Ualm",
	"Round": "btn_Round__F8HAm",
	"Active": "btn_Active__2_zCA"
};


/***/ }),

/***/ "./components/UI/input/input.js":
/*!**************************************!*\
  !*** ./components/UI/input/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.module.css */ "./components/UI/input/input.module.css");
/* harmony import */ var _input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\UI\\input\\input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const inputClasses = [_input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.InputStyle];

  if (props.invalid && props.touched) {
    inputClasses.push(_input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Invalid);
  }

  if (props.width) {
    inputClasses.push(_input_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Width4);
  }

  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
        type: "input",
        className: inputClasses.join(" ")
      }, props.elementConfig), {}, {
        value: props.value,
        placeholder: props.placeholder,
        ref: ref,
        required: true
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined);
      break;

    case "input":
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
        className: inputClasses.join(" ")
      }, props.elementConfig), {}, {
        value: props.value,
        placeholder: props.placeholder,
        onChange: props.changed,
        ref: ref,
        required: true
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined);
      break;

    case "textArea":
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", _objectSpread(_objectSpread({
        className: inputClasses.join(" ")
      }, props.elementConfig), {}, {
        value: props.value,
        onChange: props.changed,
        ref: ref,
        required: true
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined);
      break;

    case "select":
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        className: inputClasses.join(" "),
        value: props.value,
        onChange: props.changed,
        children: props.elementConfig.options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: option.value,
          children: option.displayValue
        }, option.value, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined);
      break;

    default:
      inputElement = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
        className: inputClasses.join(" ")
      }, props.elementConfig), {}, {
        value: props.value,
        onChange: props.changed,
        ref: ref,
        required: true
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined);
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: props.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), inputElement]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./components/UI/input/input.module.css":
/*!**********************************************!*\
  !*** ./components/UI/input/input.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Input": "input_Input__2GjSI",
	"Label": "input_Label__3gF_E",
	"Width4": "input_Width4__2sEHf",
	"InputStyle": "input_InputStyle__xX1KT",
	"Invalid": "input_Invalid__3pACX"
};


/***/ }),

/***/ "./components/signal/signalForm.js":
/*!*****************************************!*\
  !*** ./components/signal/signalForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/input/input */ "./components/UI/input/input.js");
/* harmony import */ var _UI_btn_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/btn/btn */ "./components/UI/btn/btn.js");
/* harmony import */ var _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signaldetail.module.css */ "./components/signal/signaldetail.module.css");
/* harmony import */ var _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\signal\\signalForm.js";







const postData = async (url, data) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, data).then(res => res.data);
    return response;
  } catch (err) {
    return err;
  }
};

const signalForm = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //ref definition

  const nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const typeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const timeframeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const createdTimeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const enteryPointInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const target1InputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const target2InputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const target3InputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const stopLossInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  const leverageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  const submitHandler = async e => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const type = typeInputRef.current.value;
    const timeframe = timeframeInputRef.current.value;
    const createdTime = createdTimeInputRef.current.value;
    const enteryPoint = enteryPointInputRef.current.value;
    const target1 = target1InputRef.current.value;
    const target2 = target2InputRef.current.value;
    const target3 = target3InputRef.current.value;
    const stopLoss = stopLossInputRef.current.value;
    const leverage = leverageInputRef.current.value;
    const signalObject = {
      name,
      type,
      timeframe,
      createdTime,
      enteryPoint,
      target1,
      target2,
      target3,
      stopLoss,
      leverage
    };
    const response = await postData("http://127.0.0.2:8000/api/v1/signal", signalObject);

    if (response.status === "success") {
      router.push("/signal");
    } else {
      alert(response.status);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Form,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dir: "rtl",
      className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FormBox,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "d-block mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0646\u0627\u0645"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: nameInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "long or short"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: typeInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "timeFrame"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: timeframeInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u062A\u0627\u0631\u06CC\u062E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: createdTimeInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0645\u062D\u062F\u0648\u062F\u0647 \u06CC \u0648\u0631\u0648\u062F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: enteryPointInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0647\u062F\u0641 \u0627\u0648\u0644"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: target1InputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0647\u062F\u0641 \u062F\u0648\u0645"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: target2InputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0647\u062F\u0641 \u0633\u0648\u0645"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: target3InputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u062D\u062F \u0636\u0631\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: stopLossInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: "mb-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "float-right",
          children: "\u0627\u0647\u0631\u0645"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            width: "true",
            ref: leverageInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _signaldetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.BtnBox,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: event => submitHandler(event),
          children: "\u0627\u0641\u0632\u0648\u062F\u0646!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (signalForm);

/***/ }),

/***/ "./components/signal/signaldetail.module.css":
/*!***************************************************!*\
  !*** ./components/signal/signaldetail.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Content": "signaldetail_Content__2MZK-",
	"Item": "signaldetail_Item__SUZBB",
	"Form": "signaldetail_Form__RPfkm",
	"FormBox": "signaldetail_FormBox__37NPN",
	"BtnBox": "signaldetail_BtnBox__2GD0q"
};


/***/ }),

/***/ "./pages/signal/newsignal/index.js":
/*!*****************************************!*\
  !*** ./pages/signal/newsignal/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_signal_signalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/signal/signalForm */ "./components/signal/signalForm.js");

var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\pages\\signal\\newsignal\\index.js";


const signalCreation = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_signal_signalForm__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (signalCreation);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9idG4vYnRuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvYnRuL2J0bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9pbnB1dC9pbnB1dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lnbmFsL3NpZ25hbEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsZGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbmFsL25ld3NpZ25hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdG4iLCJwcm9wcyIsImJ0blN0eWxlIiwiY2xhc3NlcyIsInR5cGUiLCJwdXNoIiwiUm91bmQiLCJqb2luIiwib25DbGljayIsImNoaWxkcmVuIiwiaW5wdXQiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJpbnB1dENsYXNzZXMiLCJJbnB1dFN0eWxlIiwiaW52YWxpZCIsInRvdWNoZWQiLCJJbnZhbGlkIiwid2lkdGgiLCJXaWR0aDQiLCJpbnB1dEVsZW1lbnQiLCJpbnB1dHR5cGUiLCJlbGVtZW50Q29uZmlnIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNoYW5nZWQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiZGlzcGxheVZhbHVlIiwibGFiZWwiLCJwb3N0RGF0YSIsInVybCIsImRhdGEiLCJyZXNwb25zZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJzaWduYWxGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZUlucHV0UmVmIiwidXNlUmVmIiwidHlwZUlucHV0UmVmIiwidGltZWZyYW1lSW5wdXRSZWYiLCJjcmVhdGVkVGltZUlucHV0UmVmIiwiZW50ZXJ5UG9pbnRJbnB1dFJlZiIsInRhcmdldDFJbnB1dFJlZiIsInRhcmdldDJJbnB1dFJlZiIsInRhcmdldDNJbnB1dFJlZiIsInN0b3BMb3NzSW5wdXRSZWYiLCJsZXZlcmFnZUlucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwidGltZWZyYW1lIiwiY3JlYXRlZFRpbWUiLCJlbnRlcnlQb2ludCIsInRhcmdldDEiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsInN0b3BMb3NzIiwibGV2ZXJhZ2UiLCJzaWduYWxPYmplY3QiLCJzdGF0dXMiLCJhbGVydCIsIkZvcm0iLCJGb3JtQm94IiwiQnRuQm94IiwiZXZlbnQiLCJzaWduYWxDcmVhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QyxtREFBRDtBQUFLLGlCQUFPLEVBQUdDLEtBQUQsSUFBV25CLGFBQWEsQ0FBQ21CLEtBQUQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxRUgsQ0EzSEQ7O0FBNkhlakMseUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBLE1BQU1rQyxjQUFjLEdBQUcsTUFBTTtBQUN6QixzQkFBTyxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUZEOztBQUllQSw2RUFBZixFOzs7Ozs7Ozs7OztBQ05BLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3NpZ25hbC9uZXdzaWduYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ25hbC9uZXdzaWduYWwvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9idG4ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnRuID0ocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgYnRuU3R5bGUgPSBbY2xhc3Nlcy5CdG5dO1xyXG4gIGlmKHByb3BzLnR5cGUgPT09IFwicm91bmRcIil7XHJcbiAgICBidG5TdHlsZS5wdXNoKGNsYXNzZXMuUm91bmQpXHJcbiAgfVxyXG4gIHJldHVybihcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5TdHlsZS5qb2luKFwiIFwiKX0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdG47IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQnRuXCI6IFwiYnRuX0J0bl9fM1VhbG1cIixcblx0XCJSb3VuZFwiOiBcImJ0bl9Sb3VuZF9fRjhIQW1cIixcblx0XCJBY3RpdmVcIjogXCJidG5fQWN0aXZlX18yX3pDQVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbnB1dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBpbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLHJlZikgPT4ge1xyXG4gIGNvbnN0IGlucHV0Q2xhc3NlcyA9IFtjbGFzc2VzLklucHV0U3R5bGVdO1xyXG4gIGlmIChwcm9wcy5pbnZhbGlkICYmIHByb3BzLnRvdWNoZWQpIHtcclxuICAgIGlucHV0Q2xhc3Nlcy5wdXNoKGNsYXNzZXMuSW52YWxpZCk7XHJcbiAgfVxyXG4gIGlmKHByb3BzLndpZHRoKXtcclxuICAgIGlucHV0Q2xhc3Nlcy5wdXNoKGNsYXNzZXMuV2lkdGg0KTtcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dEVsZW1lbnQgPSBudWxsO1xyXG4gIHN3aXRjaCAocHJvcHMuaW5wdXR0eXBlKSB7XHJcbiAgICBjYXNlIFwiaW5wdXRcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImlucHV0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlZH1cclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJ0ZXh0QXJlYVwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5lbGVtZW50Q29uZmlnLm9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAge29wdGlvbi5kaXNwbGF5VmFsdWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICB7aW5wdXRFbGVtZW50fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSW5wdXRcIjogXCJpbnB1dF9JbnB1dF9fMkdqU0lcIixcblx0XCJMYWJlbFwiOiBcImlucHV0X0xhYmVsX18zZ0ZfRVwiLFxuXHRcIldpZHRoNFwiOiBcImlucHV0X1dpZHRoNF9fMnNFSGZcIixcblx0XCJJbnB1dFN0eWxlXCI6IFwiaW5wdXRfSW5wdXRTdHlsZV9feFgxS1RcIixcblx0XCJJbnZhbGlkXCI6IFwiaW5wdXRfSW52YWxpZF9fM3BBQ1hcIlxufTtcbiIsImltcG9ydCBJbnB1dCBmcm9tIFwiLi4vVUkvaW5wdXQvaW5wdXRcIjtcclxuaW1wb3J0IEJ0biBmcm9tIFwiLi4vVUkvYnRuL2J0blwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zaWduYWxkZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBwb3N0RGF0YSA9IGFzeW5jKHVybCxkYXRhKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBzaWduYWxGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy9yZWYgZGVmaW5pdGlvblxyXG4gICAgY29uc3QgbmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB0eXBlSW5wdXRSZWYgPXVzZVJlZigpO1xyXG4gICAgY29uc3QgdGltZWZyYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGNyZWF0ZWRUaW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGVudGVyeVBvaW50SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHRhcmdldDFJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgdGFyZ2V0MklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB0YXJnZXQzSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHN0b3BMb3NzSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGxldmVyYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWVmcmFtZSA9IHRpbWVmcmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZFRpbWUgPSBjcmVhdGVkVGltZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZW50ZXJ5UG9pbnQgPSBlbnRlcnlQb2ludElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0MSA9IHRhcmdldDFJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldDIgPSB0YXJnZXQySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXJnZXQzID0gdGFyZ2V0M0lucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3RvcExvc3MgPSBzdG9wTG9zc0lucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbGV2ZXJhZ2UgPSBsZXZlcmFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZ25hbE9iamVjdCA9IHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgdGltZWZyYW1lLFxyXG4gICAgICAgICAgY3JlYXRlZFRpbWUsXHJcbiAgICAgICAgICBlbnRlcnlQb2ludCxcclxuICAgICAgICAgIHRhcmdldDEsXHJcbiAgICAgICAgICB0YXJnZXQyLFxyXG4gICAgICAgICAgdGFyZ2V0MyxcclxuICAgICAgICAgIHN0b3BMb3NzLFxyXG4gICAgICAgICAgbGV2ZXJhZ2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3REYXRhKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjI6ODAwMC9hcGkvdjEvc2lnbmFsXCIsXHJcbiAgICAgICAgICAgIHNpZ25hbE9iamVjdFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ25hbFwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQocmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxyXG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1Cb3h9PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJkLWJsb2NrIG1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2YbYp9mFPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQgd2lkdGg9XCJ0cnVlXCIgcmVmPXtuYW1lSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+bG9uZyBvciBzaG9ydDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17dHlwZUlucHV0UmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPnRpbWVGcmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17dGltZWZyYW1lSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2KrYp9ix24zYrjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17Y3JlYXRlZFRpbWVJbnB1dFJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj7Zhdit2K/ZiNiv2Ycg24wg2YjYsdmI2K88L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e2VudGVyeVBvaW50SW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2YfYr9mBINin2YjZhDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17dGFyZ2V0MUlucHV0UmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPtmH2K/ZgSDYr9mI2YU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e3RhcmdldDJJbnB1dFJlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj7Zh9iv2YEg2LPZiNmFPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQgd2lkdGg9XCJ0cnVlXCIgcmVmPXt0YXJnZXQzSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2K3YryDYttix2LE8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e3N0b3BMb3NzSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2KfZh9ix2YU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e2xldmVyYWdlSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5CdG5Cb3h9PlxyXG4gICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhldmVudCkgPT4gc3VibWl0SGFuZGxlcihldmVudCl9Ptin2YHYstmI2K/ZhiE8L0J0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25hbEZvcm07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGVudFwiOiBcInNpZ25hbGRldGFpbF9Db250ZW50X18yTVpLLVwiLFxuXHRcIkl0ZW1cIjogXCJzaWduYWxkZXRhaWxfSXRlbV9fU1VaQkJcIixcblx0XCJGb3JtXCI6IFwic2lnbmFsZGV0YWlsX0Zvcm1fX1JQZmttXCIsXG5cdFwiRm9ybUJveFwiOiBcInNpZ25hbGRldGFpbF9Gb3JtQm94X18zN05QTlwiLFxuXHRcIkJ0bkJveFwiOiBcInNpZ25hbGRldGFpbF9CdG5Cb3hfXzJHRDBxXCJcbn07XG4iLCJpbXBvcnQgU2lnbmFsRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zaWduYWwvc2lnbmFsRm9ybVwiO1xyXG5cclxuY29uc3Qgc2lnbmFsQ3JlYXRpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFNpZ25hbEZvcm0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25hbENyZWF0aW9uOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9