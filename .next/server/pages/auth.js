module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/index.js");
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

/***/ "./components/loginform/authForm.js":
/*!******************************************!*\
  !*** ./components/loginform/authForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authform_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authform.module.css */ "./components/loginform/authform.module.css");
/* harmony import */ var _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_authform_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/input/input */ "./components/UI/input/input.js");
/* harmony import */ var _UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/btn/btn */ "./components/UI/btn/btn.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/auth */ "./store/actions/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\components\\loginform\\authForm.js";









const AuthForm = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); //define state for page layout////////////////////////////

  const {
    0: loginMode,
    1: setLogInMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true);

  const switchLoginModeHandler = () => {
    setLogInMode(prevState => !prevState);
  }; ///////////////////////////////////////////////////
  // defining state for if user loged in or not


  const {
    0: isLogin,
    1: setIsLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); // change the login mode
  // defining ref///////////////////////////

  const emailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const passwordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const confrimPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const userNameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); //////////////////////////////////////////
  //function for loging in the user

  const logTheUserIn = async e => {
    e.preventDefault(); //grab data from input

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value; //send request to server

    props.onAuth(email, password);
  }; //function for creating new user


  const createUser = async e => {
    e.preventDefault();
    const newUserInfo = {
      username: userNameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      passwordConfirm: confrimPasswordInputRef.current.value
    }; // simple validation for form inputs
    //validation code....

    props.onSignUp(newUserInfo);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [loginMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FormBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u0622\u062F\u0631\u0633 \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: emailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: passwordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BtnBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onClick: e => logTheUserIn(e),
            children: "\u0648\u0631\u0648\u062F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "mt-3",
            onClick: () => switchLoginModeHandler(),
            children: "\u062B\u0628\u062A \u0646\u0627\u0645 \u0646\u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }, undefined), loginMode || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        dir: "rtl",
        className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.FormBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: userNameInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u0622\u062F\u0631\u0633 \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: emailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: passwordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dir: "rtl",
          className: "mb-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "float-right",
            children: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_input_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: "true",
              ref: confrimPasswordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _authform_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BtnBox,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onClick: () => switchLoginModeHandler(),
            children: "\u0639\u0636\u0648 \u0647\u0633\u062A\u0645!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_btn_btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onClick: e => createUser(e),
            children: "\u062B\u0628\u062A \u0646\u0627\u0645"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }, undefined)]
  }, void 0, true);
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_7__["auth"](email, password)),
    onSignUp: userCreationObj => dispatch(_store_actions_auth__WEBPACK_IMPORTED_MODULE_7__["signUp"](userCreationObj))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(AuthForm));

/***/ }),

/***/ "./components/loginform/authform.module.css":
/*!**************************************************!*\
  !*** ./components/loginform/authform.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Content": "authform_Content__A1cYe",
	"FormBox": "authform_FormBox__15n5-",
	"BtnBox": "authform_BtnBox__1x_N0"
};


/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loginform_authForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/loginform/authForm */ "./components/loginform/authForm.js");

var _jsxFileName = "C:\\Users\\mohamadhasan tabrizi\\Desktop\\capitalnext\\pages\\auth\\index.js";


const AuthPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_loginform_authForm__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

/***/ }),

/***/ "./store/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./store/actions/actionTypes.js ***!
  \**************************************/
/*! exports provided: AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH, SIGNUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_START", function() { return AUTH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SUCCESS", function() { return AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FAIL", function() { return AUTH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
const AUTH_START = "AUTH_START";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAIL = "AUTH_FAIL";
const AUTH = "AUTH";
const SIGNUP = "SIGNUP";

/***/ }),

/***/ "./store/actions/auth.js":
/*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
/*! exports provided: authStart, authSuccess, authFail, auth, signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authStart", function() { return authStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSuccess", function() { return authSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFail", function() { return authFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 //handle loading spinner

const authStart = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_START"]
  };
}; //grab the token and user info from response

const authSuccess = authData => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_SUCCESS"],
    authData
  };
}; //grab the error data from response

const authFail = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["AUTH_FAIL"],
    error
  };
}; //run asynchronous code and get response from server
//login asynchronous

const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://127.0.0.2:8000/api/v1/user/login", {
      email,
      password
    }).then(response => {
      console.log(response);
      dispatch(authSuccess(response.data));
    }).catch(err => dispatch(authFail(err)));
  };
}; //sign up asynchronous

const signUp = user => {
  return dispatch => {
    dispatch(authStart());
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://127.0.0.2:8000/api/v1/user/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm
    }).then(response => {
      dispatch(authSuccess(response.data));
    }).catch(err => dispatch(authFail(err)));
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9idG4vYnRuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvYnRuL2J0bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9pbnB1dC9pbnB1dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW5mb3JtL2F1dGhGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW5mb3JtL2F1dGhmb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdG4iLCJwcm9wcyIsImJ0blN0eWxlIiwiY2xhc3NlcyIsInR5cGUiLCJwdXNoIiwiUm91bmQiLCJqb2luIiwib25DbGljayIsImNoaWxkcmVuIiwiaW5wdXQiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJpbnB1dENsYXNzZXMiLCJJbnB1dFN0eWxlIiwiaW52YWxpZCIsInRvdWNoZWQiLCJJbnZhbGlkIiwid2lkdGgiLCJXaWR0aDQiLCJpbnB1dEVsZW1lbnQiLCJpbnB1dHR5cGUiLCJlbGVtZW50Q29uZmlnIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNoYW5nZWQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiZGlzcGxheVZhbHVlIiwibGFiZWwiLCJBdXRoRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luTW9kZSIsInNldExvZ0luTW9kZSIsInVzZVN0YXRlIiwic3dpdGNoTG9naW5Nb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwiZW1haWxJbnB1dFJlZiIsInVzZVJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJjb25mcmltUGFzc3dvcmRJbnB1dFJlZiIsInVzZXJOYW1lSW5wdXRSZWYiLCJsb2dUaGVVc2VySW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImN1cnJlbnQiLCJwYXNzd29yZCIsIm9uQXV0aCIsImNyZWF0ZVVzZXIiLCJuZXdVc2VySW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmRDb25maXJtIiwib25TaWduVXAiLCJDb250ZW50IiwiRm9ybUJveCIsIkJ0bkJveCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZXJDcmVhdGlvbk9iaiIsImNvbm5lY3QiLCJBdXRoUGFnZSIsIkFVVEhfU1RBUlQiLCJBVVRIX1NVQ0NFU1MiLCJBVVRIX0ZBSUwiLCJBVVRIIiwiU0lHTlVQIiwiYXV0aFN0YXJ0IiwiYWN0aW9uVHlwZXMiLCJhdXRoU3VjY2VzcyIsImF1dGhEYXRhIiwiYXV0aEZhaWwiLCJlcnJvciIsImF1dGgiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwic2lnblVwIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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QyxJQUFELElBQVU7QUFDNUIsU0FBTzNCLFFBQVEsSUFBSTtBQUNmQSxZQUFRLENBQUNVLFNBQVMsRUFBVixDQUFSO0FBQ0FPLGdEQUFLLENBQ0ZDLElBREgsQ0FDUSwwQ0FEUixFQUNvRDtBQUNoRHpCLGNBQVEsRUFBQ2tDLElBQUksQ0FBQ2xDLFFBRGtDO0FBRWhETixXQUFLLEVBQUN3QyxJQUFJLENBQUN4QyxLQUZxQztBQUdoREUsY0FBUSxFQUFDc0MsSUFBSSxDQUFDdEMsUUFIa0M7QUFJaERLLHFCQUFlLEVBQUNpQyxJQUFJLENBQUNqQztBQUoyQixLQURwRCxFQU9HeUIsSUFQSCxDQU9TQyxRQUFELElBQWM7QUFDbEJwQixjQUFRLENBQUNZLFdBQVcsQ0FBQ1EsUUFBUSxDQUFDRyxJQUFWLENBQVosQ0FBUjtBQUNELEtBVEgsRUFVR0MsS0FWSCxDQVVVQyxHQUFELElBQVN6QixRQUFRLENBQUNjLFFBQVEsQ0FBQ1csR0FBRCxDQUFULENBVjFCO0FBV0gsR0FiRDtBQWNILENBZk0sQzs7Ozs7Ozs7Ozs7QUN6Q1Asa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2J0bi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBCdG4gPShwcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBidG5TdHlsZSA9IFtjbGFzc2VzLkJ0bl07XHJcbiAgaWYocHJvcHMudHlwZSA9PT0gXCJyb3VuZFwiKXtcclxuICAgIGJ0blN0eWxlLnB1c2goY2xhc3Nlcy5Sb3VuZClcclxuICB9XHJcbiAgcmV0dXJuKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0blN0eWxlLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ0bjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCdG5cIjogXCJidG5fQnRuX18zVWFsbVwiLFxuXHRcIlJvdW5kXCI6IFwiYnRuX1JvdW5kX19GOEhBbVwiLFxuXHRcIkFjdGl2ZVwiOiBcImJ0bl9BY3RpdmVfXzJfekNBXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2lucHV0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGlucHV0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMscmVmKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRDbGFzc2VzID0gW2NsYXNzZXMuSW5wdXRTdHlsZV07XHJcbiAgaWYgKHByb3BzLmludmFsaWQgJiYgcHJvcHMudG91Y2hlZCkge1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goY2xhc3Nlcy5JbnZhbGlkKTtcclxuICB9XHJcbiAgaWYocHJvcHMud2lkdGgpe1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goY2xhc3Nlcy5XaWR0aDQpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IG51bGw7XHJcbiAgc3dpdGNoIChwcm9wcy5pbnB1dHR5cGUpIHtcclxuICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiaW5wdXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn0gXHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiaW5wdXRcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlbWVudENvbmZpZ31cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2VkfVxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInRleHRBcmVhXCI6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZW1lbnRDb25maWd9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlZH1cclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmVsZW1lbnRDb25maWcub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgICAgICB7b3B0aW9uLmRpc3BsYXlWYWx1ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX1cclxuICAgICAgICAgIHsuLi5wcm9wcy5lbGVtZW50Q29uZmlnfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZWR9XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWw+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlucHV0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJJbnB1dFwiOiBcImlucHV0X0lucHV0X18yR2pTSVwiLFxuXHRcIkxhYmVsXCI6IFwiaW5wdXRfTGFiZWxfXzNnRl9FXCIsXG5cdFwiV2lkdGg0XCI6IFwiaW5wdXRfV2lkdGg0X18yc0VIZlwiLFxuXHRcIklucHV0U3R5bGVcIjogXCJpbnB1dF9JbnB1dFN0eWxlX194WDFLVFwiLFxuXHRcIkludmFsaWRcIjogXCJpbnB1dF9JbnZhbGlkX18zcEFDWFwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aGZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL1VJL2lucHV0L2lucHV0XCI7XHJcbmltcG9ydCBCdG4gZnJvbSBcIi4uL1VJL2J0bi9idG5cIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3NpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2F1dGhcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9kZWZpbmUgc3RhdGUgZm9yIHBhZ2UgbGF5b3V0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgY29uc3RbbG9naW5Nb2RlLCBzZXRMb2dJbk1vZGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBzd2l0Y2hMb2dpbk1vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICBzZXRMb2dJbk1vZGUoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLy8gZGVmaW5pbmcgc3RhdGUgZm9yIGlmIHVzZXIgbG9nZWQgaW4gb3Igbm90XHJcbiAgICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjaGFuZ2UgdGhlIGxvZ2luIG1vZGVcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBkZWZpbmluZyByZWYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGNvbmZyaW1QYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB1c2VyTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvL2Z1bmN0aW9uIGZvciBsb2dpbmcgaW4gdGhlIHVzZXJcclxuICAgIGNvbnN0IGxvZ1RoZVVzZXJJbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9ncmFiIGRhdGEgZnJvbSBpbnB1dFxyXG4gICAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgY29uc3QgcGFzc3dvcmQ9IHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgLy9zZW5kIHJlcXVlc3QgdG8gc2VydmVyXHJcbiAgICAgIHByb3BzLm9uQXV0aChlbWFpbCxwYXNzd29yZCk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9mdW5jdGlvbiBmb3IgY3JlYXRpbmcgbmV3IHVzZXJcclxuICAgIGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG5ld1VzZXJJbmZvID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybTogY29uZnJpbVBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgfTtcclxuICAgICAgLy8gc2ltcGxlIHZhbGlkYXRpb24gZm9yIGZvcm0gaW5wdXRzXHJcbiAgICAgIC8vdmFsaWRhdGlvbiBjb2RlLi4uLlxyXG4gICAgICBcclxuICAgICAgcHJvcHMub25TaWduVXAobmV3VXNlckluZm8pO1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge2xvZ2luTW9kZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybUJveH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj7Yotiv2LHYsyDYp9mE2qnYqtix2YjZhtuM2qnbjDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgd2lkdGg9XCJ0cnVlXCIgcmVmPXtlbWFpbElucHV0UmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj7YsdmF2LIg2LnYqNmI2LE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17cGFzc3dvcmRJbnB1dFJlZn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkJ0bkJveH0+XHJcbiAgICAgICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhlKSA9PiBsb2dUaGVVc2VySW4oZSl9PtmI2LHZiNivPC9CdG4+XHJcbiAgICAgICAgICAgICAgICA8QnRuIGNsYXNzTmFtZT1cIm10LTNcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hMb2dpbk1vZGVIYW5kbGVyKCl9PlxyXG4gICAgICAgICAgICAgICAgICDYq9io2Kog2YbYp9mFINmG2qnYsdiv2Ycg2KfbjNivIVxyXG4gICAgICAgICAgICAgICAgPC9CdG4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7bG9naW5Nb2RlIHx8IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtQm94fT5cclxuICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPtmG2KfZhSDaqdin2LHYqNix24w8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17dXNlck5hbWVJbnB1dFJlZn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2KLYr9ix2LMg2KfZhNqp2KrYsdmI2YbbjNqp24w8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHdpZHRoPVwidHJ1ZVwiIHJlZj17ZW1haWxJbnB1dFJlZn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+2LHZhdiyINi52KjZiNixPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPtiq2qnYsdin2LEg2LHZhdiyINi52KjZiNixPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB3aWR0aD1cInRydWVcIiByZWY9e2NvbmZyaW1QYXNzd29yZElucHV0UmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQnRuQm94fT5cclxuICAgICAgICAgICAgICAgIDxCdG4gb25DbGljaz17KCkgPT4gc3dpdGNoTG9naW5Nb2RlSGFuZGxlcigpfT7Yudi22Ygg2YfYs9iq2YUhPC9CdG4+XHJcbiAgICAgICAgICAgICAgICA8QnRuIG9uQ2xpY2s9eyhlKSA9PiBjcmVhdGVVc2VyKGUpfT7Yq9io2Kog2YbYp9mFPC9CdG4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgb25BdXRoOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChhY3Rpb25zLmF1dGgoZW1haWwscGFzc3dvcmQpKSxcclxuICAgIG9uU2lnblVwOiAodXNlckNyZWF0aW9uT2JqKSA9PiBkaXNwYXRjaChhY3Rpb25zLnNpZ25VcCh1c2VyQ3JlYXRpb25PYmopKSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKEF1dGhGb3JtKTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250ZW50XCI6IFwiYXV0aGZvcm1fQ29udGVudF9fQTFjWWVcIixcblx0XCJGb3JtQm94XCI6IFwiYXV0aGZvcm1fRm9ybUJveF9fMTVuNS1cIixcblx0XCJCdG5Cb3hcIjogXCJhdXRoZm9ybV9CdG5Cb3hfXzF4X04wXCJcbn07XG4iLCJpbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xvZ2luZm9ybS9hdXRoRm9ybVwiO1xyXG5cclxuY29uc3QgQXV0aFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPExvZ2luRm9ybSAvPlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlOyIsImV4cG9ydCBjb25zdCBBVVRIX1NUQVJUID0gXCJBVVRIX1NUQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBBVVRIX1NVQ0NFU1MgPSBcIkFVVEhfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQVVUSF9GQUlMID0gXCJBVVRIX0ZBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEFVVEggPSBcIkFVVEhcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05VUCA9IFwiU0lHTlVQXCI7IiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy9oYW5kbGUgbG9hZGluZyBzcGlubmVyXHJcbmV4cG9ydCBjb25zdCBhdXRoU3RhcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuQVVUSF9TVEFSVFxyXG4gICAgfVxyXG59O1xyXG5cclxuLy9ncmFiIHRoZSB0b2tlbiBhbmQgdXNlciBpbmZvIGZyb20gcmVzcG9uc2VcclxuZXhwb3J0IGNvbnN0IGF1dGhTdWNjZXNzID0gKGF1dGhEYXRhKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOmFjdGlvblR5cGVzLkFVVEhfU1VDQ0VTUyxcclxuICAgICAgICBhdXRoRGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2dyYWIgdGhlIGVycm9yIGRhdGEgZnJvbSByZXNwb25zZVxyXG5leHBvcnQgY29uc3QgYXV0aEZhaWwgPSAoZXJyb3IpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOmFjdGlvblR5cGVzLkFVVEhfRkFJTCxcclxuICAgICAgICBlcnJvclxyXG4gICAgfVxyXG59XHJcblxyXG4vL3J1biBhc3luY2hyb25vdXMgY29kZSBhbmQgZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyXHJcbi8vbG9naW4gYXN5bmNocm9ub3VzXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhdXRoU3RhcnQoKSk7XHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly8xMjcuMC4wLjI6ODAwMC9hcGkvdjEvdXNlci9sb2dpblwiLHtlbWFpbCxwYXNzd29yZH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBkaXNwYXRjaChhdXRoRmFpbChlcnIpKSk7XHJcbiAgICB9XHJcbn1cclxuLy9zaWduIHVwIGFzeW5jaHJvbm91c1xyXG5leHBvcnQgY29uc3Qgc2lnblVwID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goYXV0aFN0YXJ0KCkpO1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAucG9zdChcImh0dHA6Ly8xMjcuMC4wLjI6ODAwMC9hcGkvdjEvdXNlci9zaWdudXBcIiwge1xyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDp1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDp1c2VyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm06dXNlci5wYXNzd29yZENvbmZpcm0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYXV0aEZhaWwoZXJyKSkpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==