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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/common/components/Chat/ChatComponent/ChatCard.js":
/*!******************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/ChatCard.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/PersonOutlineOutlined */ "@mui/icons-material/PersonOutlineOutlined");
/* harmony import */ var _mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ "moment/moment");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\ChatCard.js";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const GroupIcon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: "51px",
    height: "34px",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      sx: {
        width: "34px",
        height: "34px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      sx: {
        width: "34px",
        height: "34px",
        ml: "-20px",
        bgcolor: "primary.main"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};
const PersonalIcon = ({
  name
}) => {
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "primary.main"
      },
      children: `${name.split(" ")[0][0]}`
    };
  }
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Avatar"], _objectSpread(_objectSpread({}, stringAvatar(name)), {}, {
    sx: {
      width: 34,
      height: 34
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 10
  }, undefined);
};
const ChatCard = ({
  groupChat,
  title,
  last_message,
  created
}) => {
  console.log("groupChat", groupChat);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    mt: "26px",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: "51px",
      children: groupChat ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(GroupIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 22
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(PersonalIcon, {
        name: "FastVisa Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "grid",
      ml: "16px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        display: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          sx: {
            color: "primary.main",
            fontWeight: "bold",
            maxWidth: "415px"
          },
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          ml: "16px",
          children: last_message.created ? moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(last_message.created).format("DD/mm/yyyy hh:mm") : moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(created).format("DD/mm/yyyy hh:mm")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        display: "grid",
        children: [groupChat && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          sx: {
            fontWeight: "bold"
          },
          children: last_message === null || last_message === void 0 ? void 0 : last_message.sender_username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          children: [last_message === null || last_message === void 0 ? void 0 : last_message.text, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ChatCard);

/***/ }),

/***/ "./modules/common/components/Chat/ChatComponent/MessageForm.js":
/*!*********************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/MessageForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chat_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chat-engine */ "react-chat-engine");
/* harmony import */ var react_chat_engine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chat_engine__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var server_api_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! server/api/chat */ "./modules/server/api/chat.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\MessageForm.js";







const MessageForm = ({
  chatId
}) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const mutationCreate = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])("sendMessage", text => Object(server_api_chat__WEBPACK_IMPORTED_MODULE_4__["sendChat"])(chatId, text));
  const handleSubmit = e => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) mutationCreate.mutate(text);
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
    className: "message-form",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
      className: "message-input",
      value: value,
      onChange: handleChange,
      onSubmit: handleSubmit,
      variant: "outlined",
      placeholder: "Type a new message",
      sx: {
        bottom: 0,
        width: 580,
        marginLeft: 3,
        marginRight: 2
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "contained",
      sx: {
        width: 34,
        height: 40
      },
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (MessageForm);

/***/ }),

/***/ "./modules/common/components/Chat/ChatComponent/MessageHeader.js":
/*!***********************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/MessageHeader.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "@mui/icons-material/ArrowBack");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Close */ "@mui/icons-material/Close");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\MessageHeader.js";





const MessageHeader = ({
  title,
  participants,
  setLayout
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: "transparent",
    component: "nav",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: () => setLayout("list")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        display: "grid",
        ml: "17.7px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            sx: {
              color: "primary.main"
            },
            variant: "subtitle2",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            sx: {
              fontSize: "10.9px"
            },
            children: [participants, " Participants"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: () => setLayout("list")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (MessageHeader);

/***/ }),

/***/ "./modules/common/components/Chat/ChatComponent/MyMessage.js":
/*!*******************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/MyMessage.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\MyMessage.js";



const MyMessage = ({
  message
}) => {
  console.log("message", message);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "message",
    float: "right",
    ml: "18px",
    bgcolor: "chats.purple",
    width: "fit-content",
    p: "10px 18.2px 10px 10px",
    maxWidth: "518px",
    marginTop: "16.4px",
    marginBottom: "25.9px",
    style: {
      float: "right"
    },
    children: message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (MyMessage);

/***/ }),

/***/ "./modules/common/components/Chat/ChatComponent/TheirMessage.js":
/*!**********************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/TheirMessage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\TheirMessage.js";



const TheirMessage = ({
  message
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "message",
    float: "left",
    backgroundColor: "chats.orange",
    marginLeft: "4px",
    width: "fit-content",
    p: "10px 18.2px 10px 10px",
    maxWidth: "518px",
    style: {
      float: "left"
    },
    marginTop: "16.4px",
    marginBottom: "25.9px",
    children: message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (TheirMessage);

/***/ }),

/***/ "./modules/common/components/Chat/ChatFeed/index.js":
/*!**********************************************************!*\
  !*** ./modules/common/components/Chat/ChatFeed/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "@mui/icons-material/ArrowBack");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Close */ "@mui/icons-material/Close");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChatComponent_MessageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ChatComponent/MessageHeader */ "./modules/common/components/Chat/ChatComponent/MessageHeader.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var server_api_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! server/api/chat */ "./modules/server/api/chat.js");
/* harmony import */ var _ChatComponent_MyMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ChatComponent/MyMessage */ "./modules/common/components/Chat/ChatComponent/MyMessage.js");
/* harmony import */ var _ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ChatComponent/TheirMessage */ "./modules/common/components/Chat/ChatComponent/TheirMessage.js");
/* harmony import */ var _ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ChatComponent/MessageForm */ "./modules/common/components/Chat/ChatComponent/MessageForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatFeed\\index.js";












const ChatFeed = ({
  setLayout,
  messageId
}) => {
  console.log("id", messageId);
  const {
    data,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(["dataList", "chatFeed", messageId], () => Object(server_api_chat__WEBPACK_IMPORTED_MODULE_6__["chatFeed"])(messageId));
  console.log("data", data);
  const renderMessages = () => {
    return data.chats.map((message, index) => {
      const lastMessageKey = index === 0 ? null : message === null || message === void 0 ? void 0 : message.id;
      const isMyMessage = (message === null || message === void 0 ? void 0 : message.sender_username) === "Auliya Michelle";
      console.log("message", message);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        display: "grid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          className: "message-block",
          width: "100%",
          children: isMyMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MyMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            message: message.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            message: message.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, `msg${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined);
    });
  };
  console.log("data", data);
  if (isLoading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("b", {
    children: "Tunggu Ya"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: data.title,
      participants: data.people.length,
      setLayout: setLayout
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      component: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "chat-feed",
        width: "734px",
        children: renderMessages()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "message-form-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          chatId: messageId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ChatFeed);

/***/ }),

/***/ "./modules/common/components/Chat/ChatList/index.js":
/*!**********************************************************!*\
  !*** ./modules/common/components/Chat/ChatList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Search */ "@mui/icons-material/Search");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var server_api_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! server/api/chat */ "./modules/server/api/chat.js");
/* harmony import */ var _ChatComponent_ChatCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChatComponent/ChatCard */ "./modules/common/components/Chat/ChatComponent/ChatCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatList\\index.js";








const LoadingComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    height: "650px",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
        color: "inherit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        align: "center",
        children: "Loading Chats..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};
const ChatList = ({
  setLayout,
  setMessageId
}) => {
  const {
    data,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(["dataList, chats"], () => Object(server_api_chat__WEBPACK_IMPORTED_MODULE_4__["chatList"])());
  console.log("data", data);
  console.log("isLoading", isLoading);

  // groupchat = people.length > 2

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100%",
    pt: "20px",
    pl: "29px",
    pr: "39px",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["OutlinedInput"], {
      fullWidth: true,
      placeholder: "Search",
      id: "outlined-adornment-password",
      endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["InputAdornment"], {
        position: "end",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined),
      size: "small",
      sx: {
        height: "32px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(LoadingComponent, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: data.map(message => {
        const groupChat = message.people.length > 2;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            onClick: () => {
              setLayout("feed");
              setMessageId(message.id);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ChatComponent_ChatCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
              groupChat: groupChat,
              title: message.title,
              last_message: message.last_message,
              created: message.created
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
            sx: {
              mt: "37px",
              backgroundColor: "primary.gray"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, undefined)]
        }, void 0, true);
      })
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ }),

/***/ "./modules/common/components/Chat/index.js":
/*!*************************************************!*\
  !*** ./modules/common/components/Chat/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chat_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chat-engine */ "react-chat-engine");
/* harmony import */ var react_chat_engine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chat_engine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_components_Chat_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/components/Chat/ChatList */ "./modules/common/components/Chat/ChatList/index.js");
/* harmony import */ var common_components_Chat_ChatFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/Chat/ChatFeed */ "./modules/common/components/Chat/ChatFeed/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\index.js";






const Chat = () => {
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("list");
  const {
    0: messageId,
    1: setMessageId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    children: [layout === "list" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(common_components_Chat_ChatList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setLayout: setLayout,
      setMessageId: setMessageId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), layout === "feed" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(common_components_Chat_ChatFeed__WEBPACK_IMPORTED_MODULE_3__["default"], {
      messageId: messageId,
      setLayout: setLayout
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./modules/common/components/FloatingButton/index.js":
/*!***********************************************************!*\
  !*** ./modules/common/components/FloatingButton/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Bolt */ "@mui/icons-material/Bolt");
/* harmony import */ var _mui_icons_material_Bolt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Bolt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_QuestionAnswerOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/QuestionAnswerOutlined */ "@mui/icons-material/QuestionAnswerOutlined");
/* harmony import */ var _mui_icons_material_QuestionAnswerOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_QuestionAnswerOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ChromeReaderModeOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ChromeReaderModeOutlined */ "@mui/icons-material/ChromeReaderModeOutlined");
/* harmony import */ var _mui_icons_material_ChromeReaderModeOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChromeReaderModeOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material */ "@mui/icons-material");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Chat */ "./modules/common/components/Chat/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\FloatingButton\\index.js";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const FloatingButton = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [icon, setIcon] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Bolt__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 42
  }, undefined));
  const {
    0: openChat,
    1: setOpenChat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const actions = [{
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_QuestionAnswerOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
      sx: {
        color: "indicator.purple"
      },
      onClick: e => handleOpenChat(e)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined),
    name: "Chats"
  }, {
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_ChromeReaderModeOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      sx: {
        color: "indicator.orange"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined),
    name: "Task"
  }];

  // const handleClick = () => {
  //   handleClose();
  //   window.open(SocialLinks[network], '_blank');
  // };

  const handleOpenChat = event => {
    console.log("event", event);
    setOpenChat(event.currentTarget);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // setOpen(false);
    setIcon( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Bolt__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined));
  };
  const chatOpened = Boolean(openChat);
  const id = chatOpened ? "simple-popover" : undefined;
  return (
    /*#__PURE__*/
    // <Box
    //   position="absolute"
    //   display="flex"
    //   gap="26px"
    //   bottom={27}
    //   right={27}
    //   alignItems="flex-end"
    // >
    //   {/* <Box display="grid">
    //     <Typography color="white" variant="caption" textAlign="center">
    //       Task
    //     </Typography>
    //     <Fab aria-label="chats" sx={{ bgcolor: "white" }}>
    //       <ChromeReaderModeOutlinedIcon sx={{ color: "indicator.orange" }} />
    //     </Fab>
    //   </Box>
    //   <Box display="grid">
    //     <Typography color="white" variant="caption" textAlign="center">
    //       Inbox
    //     </Typography>
    //     <Fab aria-label="chats" sx={{ bgcolor: "white" }}>
    //       <QuestionAnswerOutlinedIcon sx={{ color: "indicator.purple" }} />
    //     </Fab>
    //   </Box>
    //   <Fab color="primary" aria-label="add">
    //     <BoltIcon />
    //   </Fab> */}
    // </Box>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      position: "fixed",
      bottom: 27,
      right: 27,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["SpeedDial"], {
        direction: "left",
        ariaLabel: "SpeedDial",
        position: "absolute",
        icon: icon,
        onClose: handleClose,
        onOpen: handleOpen,
        open: open,
        FabProps: {
          color: "primary",
          size: "medium"
        },
        children: actions.map(action => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["SpeedDialAction"], {
          id: action.name,
          icon: action.icon,
          tooltipTitle: action.name,
          tooltipPlacement: "top-start"
        }, action.name, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Popper"], {
        open: openChat,
        anchorEl: openChat,
        placement: "top-end",
        transition: true,
        children: ({
          TransitionProps
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Fade"], _objectSpread(_objectSpread({}, TransitionProps), {}, {
          timeout: 350,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
            sx: {
              marginBottom: "15px",
              width: "734px",
              height: "737px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Chat__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, undefined)
  );
};
/* harmony default export */ __webpack_exports__["default"] = (FloatingButton);

/***/ }),

/***/ "./modules/common/components/Layout/index.js":
/*!***************************************************!*\
  !*** ./modules/common/components/Layout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "@mui/material/Box");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Drawer */ "@mui/material/Drawer");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ "@mui/material/CssBaseline");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchHeader */ "./modules/common/components/SearchHeader/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Layout\\index.js";








const drawerWidth = 285;
function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
    sx: {
      display: "flex",
      bgcolor: "layout.gray"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      position: "fixed",
      sx: {
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        height: 58,
        bgcolor: "primary.black"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_SearchHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
      sx: {
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "layout.gray",
          borderColor: "white"
        }
      },
      variant: "permanent",
      anchor: "left"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {
      component: "main",
      sx: {
        flexGrow: 1,
        p: 3,
        height: "100vh"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./modules/common/components/SearchHeader/index.js":
/*!*********************************************************!*\
  !*** ./modules/common/components/SearchHeader/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Search */ "@mui/icons-material/Search");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\SearchHeader\\index.js";




const SearchHeader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    fullWidth: true,
    disableUnderline: true,
    id: "input-with-icon-adornment",
    startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
      position: "start",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          color: "white"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SearchHeader);

/***/ }),

/***/ "./modules/server/api/chat.js":
/*!************************************!*\
  !*** ./modules/server/api/chat.js ***!
  \************************************/
/*! exports provided: chatList, chatFeed, sendChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatList", function() { return chatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatFeed", function() { return chatFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendChat", function() { return sendChat; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function chatList() {
  return await fetch(`http://localhost:3000/api/chats`).then(response => {
    return response.json();
  });
}
async function chatFeed(id) {
  return await fetch(`http://localhost:3000/api/chats/${id}`).then(response => {
    return response.json();
  });
}
async function sendChat(id, text) {
  console.log("id", id);
  console.log("text", text);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://api.chatengine.io/chats/${id}/messages`, {
    text: "hallo"
  }, {
    headers: {
      "Project-ID": "e6ec3c5e-784a-4e8e-a39c-3f544022765c",
      "User-Name": "Michelle",
      "User-Secret": "123"
    }
  }).then(response => {
    return response.json();
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/components/Layout */ "./modules/common/components/Layout/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Add */ "@mui/icons-material/Add");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/components/FloatingButton */ "./modules/common/components/FloatingButton/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\michelle\\chat-todo\\pages\\index.js";





const HomePage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(common_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Container"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(common_components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ "@mui/icons-material/Add":
/*!******************************************!*\
  !*** external "@mui/icons-material/Add" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ "@mui/icons-material/ArrowBack":
/*!************************************************!*\
  !*** external "@mui/icons-material/ArrowBack" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ArrowBack");

/***/ }),

/***/ "@mui/icons-material/Bolt":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Bolt" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Bolt");

/***/ }),

/***/ "@mui/icons-material/ChromeReaderModeOutlined":
/*!***************************************************************!*\
  !*** external "@mui/icons-material/ChromeReaderModeOutlined" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ChromeReaderModeOutlined");

/***/ }),

/***/ "@mui/icons-material/Close":
/*!********************************************!*\
  !*** external "@mui/icons-material/Close" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ "@mui/icons-material/PersonOutlineOutlined":
/*!************************************************************!*\
  !*** external "@mui/icons-material/PersonOutlineOutlined" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/PersonOutlineOutlined");

/***/ }),

/***/ "@mui/icons-material/QuestionAnswerOutlined":
/*!*************************************************************!*\
  !*** external "@mui/icons-material/QuestionAnswerOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/QuestionAnswerOutlined");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/Drawer":
/*!***************************************!*\
  !*** external "@mui/material/Drawer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment/moment":
/*!********************************!*\
  !*** external "moment/moment" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chat-engine":
/*!************************************!*\
  !*** external "react-chat-engine" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chat-engine");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvQ2hhdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvTWVzc2FnZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvTWVzc2FnZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL0NoYXQvQ2hhdENvbXBvbmVudC9NeU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvVGhlaXJNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29tbW9uL2NvbXBvbmVudHMvQ2hhdC9DaGF0RmVlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NvbW1vbi9jb21wb25lbnRzL0NoYXQvQ2hhdExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29tbW9uL2NvbXBvbmVudHMvRmxvYXRpbmdCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9TZWFyY2hIZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zZXJ2ZXIvYXBpL2NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0JvbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Nocm9tZVJlYWRlck1vZGVPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbk91dGxpbmVPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUXVlc3Rpb25BbnN3ZXJPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudC9tb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXQtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJHcm91cEljb24iLCJ3aWR0aCIsImhlaWdodCIsIm1sIiwiYmdjb2xvciIsIlBlcnNvbmFsSWNvbiIsIm5hbWUiLCJzdHJpbmdBdmF0YXIiLCJzeCIsImNoaWxkcmVuIiwic3BsaXQiLCJDaGF0Q2FyZCIsImdyb3VwQ2hhdCIsInRpdGxlIiwibGFzdF9tZXNzYWdlIiwiY3JlYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXhXaWR0aCIsIm1vbWVudCIsImZvcm1hdCIsInNlbmRlcl91c2VybmFtZSIsInRleHQiLCJNZXNzYWdlRm9ybSIsImNoYXRJZCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIm11dGF0aW9uQ3JlYXRlIiwidXNlTXV0YXRpb24iLCJzZW5kQ2hhdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsZW5ndGgiLCJtdXRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJib3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJNZXNzYWdlSGVhZGVyIiwicGFydGljaXBhbnRzIiwic2V0TGF5b3V0IiwiZm9udFNpemUiLCJNeU1lc3NhZ2UiLCJtZXNzYWdlIiwiZmxvYXQiLCJUaGVpck1lc3NhZ2UiLCJDaGF0RmVlZCIsIm1lc3NhZ2VJZCIsImRhdGEiLCJpc0xvYWRpbmciLCJ1c2VRdWVyeSIsImNoYXRGZWVkIiwicmVuZGVyTWVzc2FnZXMiLCJjaGF0cyIsIm1hcCIsImluZGV4IiwibGFzdE1lc3NhZ2VLZXkiLCJpZCIsImlzTXlNZXNzYWdlIiwicGVvcGxlIiwiTG9hZGluZ0NvbXBvbmVudCIsIkNoYXRMaXN0Iiwic2V0TWVzc2FnZUlkIiwiY2hhdExpc3QiLCJtdCIsImJhY2tncm91bmRDb2xvciIsIkNoYXQiLCJsYXlvdXQiLCJGbG9hdGluZ0J1dHRvbiIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJpY29uIiwic2V0SWNvbiIsIm9wZW5DaGF0Iiwic2V0T3BlbkNoYXQiLCJhY3Rpb25zIiwiaGFuZGxlT3BlbkNoYXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJjaGF0T3BlbmVkIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsInNpemUiLCJhY3Rpb24iLCJUcmFuc2l0aW9uUHJvcHMiLCJtYXJnaW5Cb3R0b20iLCJkcmF3ZXJXaWR0aCIsIkxheW91dCIsImRpc3BsYXkiLCJmbGV4U2hyaW5rIiwiYm94U2l6aW5nIiwiYm9yZGVyQ29sb3IiLCJmbGV4R3JvdyIsInAiLCJTZWFyY2hIZWFkZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBdmF0YXIsXHJcbiAgQXZhdGFyR3JvdXAsXHJcbiAgQm94LFxyXG4gIERpdmlkZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBQZXJzb25PdXRsaW5lT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbk91dGxpbmVPdXRsaW5lZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQvbW9tZW50XCI7XHJcblxyXG5jb25zdCBHcm91cEljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiB3aWR0aD1cIjUxcHhcIiBoZWlnaHQ9XCIzNHB4XCI+XHJcbiAgICAgIDxBdmF0YXIgc3g9e3sgd2lkdGg6IFwiMzRweFwiLCBoZWlnaHQ6IFwiMzRweFwiIH19PlxyXG4gICAgICAgIDxQZXJzb25PdXRsaW5lT3V0bGluZWRJY29uIC8+XHJcbiAgICAgIDwvQXZhdGFyPlxyXG4gICAgICA8QXZhdGFyXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjM0cHhcIixcclxuICAgICAgICAgIGhlaWdodDogXCIzNHB4XCIsXHJcbiAgICAgICAgICBtbDogXCItMjBweFwiLFxyXG4gICAgICAgICAgYmdjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBlcnNvbk91dGxpbmVPdXRsaW5lZEljb24gLz5cclxuICAgICAgPC9BdmF0YXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUGVyc29uYWxJY29uID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgZnVuY3Rpb24gc3RyaW5nQXZhdGFyKG5hbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN4OiB7XHJcbiAgICAgICAgYmdjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgfSxcclxuICAgICAgY2hpbGRyZW46IGAke25hbWUuc3BsaXQoXCIgXCIpWzBdWzBdfWAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxBdmF0YXIgey4uLnN0cmluZ0F2YXRhcihuYW1lKX0gc3g9e3sgd2lkdGg6IDM0LCBoZWlnaHQ6IDM0IH19IC8+O1xyXG59O1xyXG5cclxuY29uc3QgQ2hhdENhcmQgPSAoeyBncm91cENoYXQsIHRpdGxlLCBsYXN0X21lc3NhZ2UsIGNyZWF0ZWQgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiZ3JvdXBDaGF0XCIsIGdyb3VwQ2hhdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBtdD1cIjI2cHhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxCb3ggd2lkdGg9XCI1MXB4XCI+XHJcbiAgICAgICAge2dyb3VwQ2hhdCA/IDxHcm91cEljb24gLz4gOiA8UGVyc29uYWxJY29uIG5hbWU9XCJGYXN0VmlzYSBTdXBwb3J0XCIgLz59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJncmlkXCIgbWw9XCIxNnB4XCI+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnkubWFpblwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjQxNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgbWw9XCIxNnB4XCI+XHJcbiAgICAgICAgICAgIHtsYXN0X21lc3NhZ2UuY3JlYXRlZFxyXG4gICAgICAgICAgICAgID8gbW9tZW50KGxhc3RfbWVzc2FnZS5jcmVhdGVkKS5mb3JtYXQoXCJERC9tbS95eXl5IGhoOm1tXCIpXHJcbiAgICAgICAgICAgICAgOiBtb21lbnQoY3JlYXRlZCkuZm9ybWF0KFwiREQvbW0veXl5eSBoaDptbVwiKX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAgICAgICB7Z3JvdXBDaGF0ICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICB7bGFzdF9tZXNzYWdlPy5zZW5kZXJfdXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPntsYXN0X21lc3NhZ2U/LnRleHR9IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENhcmQ7XHJcbiIsImltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpc1R5cGluZyB9IGZyb20gXCJyZWFjdC1jaGF0LWVuZ2luZVwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBzZW5kQ2hhdCB9IGZyb20gXCJzZXJ2ZXIvYXBpL2NoYXRcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2VGb3JtID0gKHsgY2hhdElkIH0pID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBtdXRhdGlvbkNyZWF0ZSA9IHVzZU11dGF0aW9uKFwic2VuZE1lc3NhZ2VcIiwgKHRleHQpID0+XHJcbiAgICBzZW5kQ2hhdChjaGF0SWQsIHRleHQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCkgbXV0YXRpb25DcmVhdGUubXV0YXRlKHRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG5ldyBtZXNzYWdlXCJcclxuICAgICAgICBzeD17eyBib3R0b206IDAsIHdpZHRoOiA1ODAsIG1hcmdpbkxlZnQ6IDMsIG1hcmdpblJpZ2h0OiAyIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7IHdpZHRoOiAzNCwgaGVpZ2h0OiA0MCB9fT5cclxuICAgICAgICBTZW5kXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENzc0Jhc2VsaW5lLFxyXG4gIEdyaWQsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja1wiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlXCI7XHJcblxyXG5jb25zdCBNZXNzYWdlSGVhZGVyID0gKHsgdGl0bGUsIHBhcnRpY2lwYW50cywgc2V0TGF5b3V0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBjb2xvcj1cInRyYW5zcGFyZW50XCIgY29tcG9uZW50PVwibmF2XCI+XHJcbiAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgIDxBcnJvd0JhY2tJY29uIG9uQ2xpY2s9eygpID0+IHNldExheW91dChcImxpc3RcIil9IC8+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpc3BsYXk9XCJncmlkXCIgbWw9XCIxNy43cHhcIj5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiBcInByaW1hcnkubWFpblwiIH19IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiBcIjEwLjlweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtwYXJ0aWNpcGFudHN9IFBhcnRpY2lwYW50c1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxDbG9zZUljb24gb25DbGljaz17KCkgPT4gc2V0TGF5b3V0KFwibGlzdFwiKX0gLz5cclxuICAgICAgPC9Ub29sYmFyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VIZWFkZXI7XHJcbiIsImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE15TWVzc2FnZSA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBjbGFzc05hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgZmxvYXQ9XCJyaWdodFwiXHJcbiAgICAgIG1sPVwiMThweFwiXHJcbiAgICAgIGJnY29sb3I9XCJjaGF0cy5wdXJwbGVcIlxyXG4gICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgICAgcD1cIjEwcHggMTguMnB4IDEwcHggMTBweFwiXHJcbiAgICAgIG1heFdpZHRoPVwiNTE4cHhcIlxyXG4gICAgICBtYXJnaW5Ub3A9XCIxNi40cHhcIlxyXG4gICAgICBtYXJnaW5Cb3R0b209XCIyNS45cHhcIlxyXG4gICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICA+XHJcbiAgICAgIHttZXNzYWdlfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TWVzc2FnZTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGhlaXJNZXNzYWdlID0gKHsgbWVzc2FnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgIGZsb2F0PVwibGVmdFwiXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cImNoYXRzLm9yYW5nZVwiXHJcbiAgICAgIG1hcmdpbkxlZnQ9XCI0cHhcIlxyXG4gICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgICAgcD1cIjEwcHggMTguMnB4IDEwcHggMTBweFwiXHJcbiAgICAgIG1heFdpZHRoPVwiNTE4cHhcIlxyXG4gICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgbWFyZ2luVG9wPVwiMTYuNHB4XCJcclxuICAgICAgbWFyZ2luQm90dG9tPVwiMjUuOXB4XCJcclxuICAgID5cclxuICAgICAge21lc3NhZ2V9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlaXJNZXNzYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgQ3NzQmFzZWxpbmUsXHJcbiAgR3JpZCxcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcclxuaW1wb3J0IE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvTWVzc2FnZUhlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBjaGF0RmVlZCB9IGZyb20gXCJzZXJ2ZXIvYXBpL2NoYXRcIjtcclxuaW1wb3J0IE15TWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NeU1lc3NhZ2VcIjtcclxuaW1wb3J0IFRoZWlyTWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9UaGVpck1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NZXNzYWdlRm9ybVwiO1xyXG5cclxuY29uc3QgQ2hhdEZlZWQgPSAoeyBzZXRMYXlvdXQsIG1lc3NhZ2VJZCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpZFwiLCBtZXNzYWdlSWQpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoXHJcbiAgICBbXCJkYXRhTGlzdFwiLCBcImNoYXRGZWVkXCIsIG1lc3NhZ2VJZF0sXHJcbiAgICAoKSA9PiBjaGF0RmVlZChtZXNzYWdlSWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG5cclxuICBjb25zdCByZW5kZXJNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRhLmNoYXRzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbGFzdE1lc3NhZ2VLZXkgPSBpbmRleCA9PT0gMCA/IG51bGwgOiBtZXNzYWdlPy5pZDtcclxuICAgICAgY29uc3QgaXNNeU1lc3NhZ2UgPSBtZXNzYWdlPy5zZW5kZXJfdXNlcm5hbWUgPT09IFwiQXVsaXlhIE1pY2hlbGxlXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGtleT17YG1zZyR7aW5kZXh9YH0gZGlzcGxheT1cImdyaWRcIj5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWVzc2FnZS1ibG9ja1wiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICB7aXNNeU1lc3NhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPE15TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlLnRleHR9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRoZWlyTWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlLnRleHR9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxiPlR1bmdndSBZYTwvYj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgIDxNZXNzYWdlSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgcGFydGljaXBhbnRzPXtkYXRhLnBlb3BsZS5sZW5ndGh9XHJcbiAgICAgICAgc2V0TGF5b3V0PXtzZXRMYXlvdXR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PVwibWFpblwiPlxyXG4gICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjaGF0LWZlZWRcIiB3aWR0aD1cIjczNHB4XCI+XHJcbiAgICAgICAgICB7cmVuZGVyTWVzc2FnZXMoKX1cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtZXNzYWdlLWZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TWVzc2FnZUZvcm0gY2hhdElkPXttZXNzYWdlSWR9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRGZWVkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBPdXRsaW5lZElucHV0LFxyXG4gIEJveCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEdyaWQsXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgY2hhdExpc3QgfSBmcm9tIFwic2VydmVyL2FwaS9jaGF0XCI7XHJcbmltcG9ydCBDaGF0Q2FyZCBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9DaGF0Q2FyZFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ0NvbXBvbmVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGhlaWdodD1cIjY1MHB4XCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0gbWFyZ2luPVwiYXV0b1wiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5Mb2FkaW5nIENoYXRzLi4uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENoYXRMaXN0ID0gKHsgc2V0TGF5b3V0LCBzZXRNZXNzYWdlSWQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShbXCJkYXRhTGlzdCwgY2hhdHNcIl0sICgpID0+IGNoYXRMaXN0KCkpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgY29uc29sZS5sb2coXCJpc0xvYWRpbmdcIiwgaXNMb2FkaW5nKTtcclxuXHJcbiAgLy8gZ3JvdXBjaGF0ID0gcGVvcGxlLmxlbmd0aCA+IDJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiIHB0PVwiMjBweFwiIHBsPVwiMjlweFwiIHByPVwiMzlweFwiPlxyXG4gICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICBpZD1cIm91dGxpbmVkLWFkb3JubWVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMzJweFwiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRpbmdDb21wb25lbnQgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2RhdGEubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwQ2hhdCA9IG1lc3NhZ2UucGVvcGxlLmxlbmd0aCA+IDI7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExheW91dChcImZlZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZUlkKG1lc3NhZ2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hhdENhcmRcclxuICAgICAgICAgICAgICAgICAgICBncm91cENoYXQ9e2dyb3VwQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWVzc2FnZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0X21lc3NhZ2U9e21lc3NhZ2UubGFzdF9tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e21lc3NhZ2UuY3JlYXRlZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IFwiMzdweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeS5ncmF5XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDaGF0RW5naW5lV3JhcHBlcixcclxuICBTb2NrZXQsXHJcbiAgQ2hhdENhcmQsXHJcbiAgQ2hhdEVuZ2luZSxcclxufSBmcm9tIFwicmVhY3QtY2hhdC1lbmdpbmVcIjtcclxuaW1wb3J0IENoYXRMaXN0IGZyb20gXCJjb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRMaXN0XCI7XHJcbmltcG9ydCBDaGF0RmVlZCBmcm9tIFwiY29tbW9uL2NvbXBvbmVudHMvQ2hhdC9DaGF0RmVlZFwiO1xyXG5cclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IENoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwibGlzdFwiKTtcclxuICBjb25zdCBbbWVzc2FnZUlkLCBzZXRNZXNzYWdlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHtsYXlvdXQgPT09IFwibGlzdFwiICYmIChcclxuICAgICAgICA8Q2hhdExpc3Qgc2V0TGF5b3V0PXtzZXRMYXlvdXR9IHNldE1lc3NhZ2VJZD17c2V0TWVzc2FnZUlkfSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7bGF5b3V0ID09PSBcImZlZWRcIiAmJiAoXHJcbiAgICAgICAgPENoYXRGZWVkIG1lc3NhZ2VJZD17bWVzc2FnZUlkfSBzZXRMYXlvdXQ9e3NldExheW91dH0gLz5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmFiLFxyXG4gIEdyaWQsXHJcbiAgU3BlZWREaWFsLFxyXG4gIFNwZWVkRGlhbEFjdGlvbixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIFBvcG92ZXIsXHJcbiAgUG9wcGVyLFxyXG4gIEZhZGUsXHJcbiAgUGFwZXIsXHJcbiAgT3V0bGluZWRJbnB1dCxcclxuICBJbnB1dEFkb3JubWVudCxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQm9sdEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQm9sdFwiO1xyXG5pbXBvcnQgUXVlc3Rpb25BbnN3ZXJPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUXVlc3Rpb25BbnN3ZXJPdXRsaW5lZFwiO1xyXG5pbXBvcnQgQ2hyb21lUmVhZGVyTW9kZU91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaHJvbWVSZWFkZXJNb2RlT3V0bGluZWRcIjtcclxuaW1wb3J0IHsgRmF2b3JpdGVPdXRsaW5lZCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuLi9DaGF0XCI7XHJcblxyXG5jb25zdCBGbG9hdGluZ0J1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ljb24sIHNldEljb25dID0gUmVhY3QudXNlU3RhdGUoPEJvbHRJY29uIC8+KTtcclxuICBjb25zdCBbb3BlbkNoYXQsIHNldE9wZW5DaGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYWN0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxRdWVzdGlvbkFuc3dlck91dGxpbmVkSWNvblxyXG4gICAgICAgICAgc3g9e3sgY29sb3I6IFwiaW5kaWNhdG9yLnB1cnBsZVwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3BlbkNoYXQoZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSxcclxuICAgICAgbmFtZTogXCJDaGF0c1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWNvbjogPENocm9tZVJlYWRlck1vZGVPdXRsaW5lZEljb24gc3g9e3sgY29sb3I6IFwiaW5kaWNhdG9yLm9yYW5nZVwiIH19IC8+LFxyXG4gICAgICBuYW1lOiBcIlRhc2tcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgLy8gICBoYW5kbGVDbG9zZSgpO1xyXG4gIC8vICAgd2luZG93Lm9wZW4oU29jaWFsTGlua3NbbmV0d29ya10sICdfYmxhbmsnKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQ2hhdCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudCk7XHJcbiAgICBzZXRPcGVuQ2hhdChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIC8vIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SWNvbig8Qm9sdEljb24gLz4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYXRPcGVuZWQgPSBCb29sZWFuKG9wZW5DaGF0KTtcclxuICBjb25zdCBpZCA9IGNoYXRPcGVuZWQgPyBcInNpbXBsZS1wb3BvdmVyXCIgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8Qm94XHJcbiAgICAvLyAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgLy8gICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAvLyAgIGdhcD1cIjI2cHhcIlxyXG4gICAgLy8gICBib3R0b209ezI3fVxyXG4gICAgLy8gICByaWdodD17Mjd9XHJcbiAgICAvLyAgIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiXHJcbiAgICAvLyA+XHJcbiAgICAvLyAgIHsvKiA8Qm94IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAvLyAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ3aGl0ZVwiIHZhcmlhbnQ9XCJjYXB0aW9uXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAvLyAgICAgICBUYXNrXHJcbiAgICAvLyAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgLy8gICAgIDxGYWIgYXJpYS1sYWJlbD1cImNoYXRzXCIgc3g9e3sgYmdjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgLy8gICAgICAgPENocm9tZVJlYWRlck1vZGVPdXRsaW5lZEljb24gc3g9e3sgY29sb3I6IFwiaW5kaWNhdG9yLm9yYW5nZVwiIH19IC8+XHJcbiAgICAvLyAgICAgPC9GYWI+XHJcbiAgICAvLyAgIDwvQm94PlxyXG4gICAgLy8gICA8Qm94IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAvLyAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ3aGl0ZVwiIHZhcmlhbnQ9XCJjYXB0aW9uXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAvLyAgICAgICBJbmJveFxyXG4gICAgLy8gICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIC8vICAgICA8RmFiIGFyaWEtbGFiZWw9XCJjaGF0c1wiIHN4PXt7IGJnY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgIC8vICAgICAgIDxRdWVzdGlvbkFuc3dlck91dGxpbmVkSWNvbiBzeD17eyBjb2xvcjogXCJpbmRpY2F0b3IucHVycGxlXCIgfX0gLz5cclxuICAgIC8vICAgICA8L0ZhYj5cclxuICAgIC8vICAgPC9Cb3g+XHJcbiAgICAvLyAgIDxGYWIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cImFkZFwiPlxyXG4gICAgLy8gICAgIDxCb2x0SWNvbiAvPlxyXG4gICAgLy8gICA8L0ZhYj4gKi99XHJcblxyXG4gICAgLy8gPC9Cb3g+XHJcbiAgICA8Qm94IHBvc2l0aW9uPVwiZml4ZWRcIiBib3R0b209ezI3fSByaWdodD17Mjd9PlxyXG4gICAgICA8U3BlZWREaWFsXHJcbiAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgYXJpYUxhYmVsPVwiU3BlZWREaWFsXCJcclxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIEZhYlByb3BzPXt7XHJcbiAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7YWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gKFxyXG4gICAgICAgICAgPFNwZWVkRGlhbEFjdGlvblxyXG4gICAgICAgICAgICBpZD17YWN0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIGtleT17YWN0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIGljb249e2FjdGlvbi5pY29ufVxyXG4gICAgICAgICAgICB0b29sdGlwVGl0bGU9e2FjdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3BlZWREaWFsPlxyXG5cclxuICAgICAgPFBvcHBlclxyXG4gICAgICAgIG9wZW49e29wZW5DaGF0fVxyXG4gICAgICAgIGFuY2hvckVsPXtvcGVuQ2hhdH1cclxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3AtZW5kXCJcclxuICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgID5cclxuICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzIH0pID0+IChcclxuICAgICAgICAgIDxGYWRlIHsuLi5UcmFuc2l0aW9uUHJvcHN9IHRpbWVvdXQ9ezM1MH0+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsIHdpZHRoOiBcIjczNHB4XCIsIGhlaWdodDogXCI3MzdweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUG9wcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nQnV0dG9uO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EcmF3ZXJcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcclxuXHJcbmltcG9ydCBTZWFyY2hIZWFkZXIgZnJvbSBcIi4uL1NlYXJjaEhlYWRlclwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyODU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGJnY29sb3I6IFwibGF5b3V0LmdyYXlcIiB9fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICAgICAgICBtbDogYCR7ZHJhd2VyV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1OCxcclxuICAgICAgICAgIGJnY29sb3I6IFwicHJpbWFyeS5ibGFja1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxTZWFyY2hIZWFkZXIgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICBcIiYgLk11aURyYXdlci1wYXBlclwiOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICAgICAgYmdjb2xvcjogXCJsYXlvdXQuZ3JheVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICA+PC9EcmF3ZXI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICBwOiAzLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcclxuaW1wb3J0IHsgSW5wdXQsIElucHV0QWRvcm5tZW50IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0XHJcbiAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfVxyXG4gICAgICBpZD1cImlucHV0LXdpdGgtaWNvbi1hZG9ybm1lbnRcIlxyXG4gICAgICBzdGFydEFkb3JubWVudD17XHJcbiAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cclxuICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICB9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hIZWFkZXI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGF0TGlzdCgpIHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2hhdHNgKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYXRGZWVkKGlkKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NoYXRzLyR7aWR9YCkudGhlbihcclxuICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kQ2hhdChpZCwgdGV4dCkge1xyXG4gIGNvbnNvbGUubG9nKFwiaWRcIiwgaWQpO1xyXG4gIGNvbnNvbGUubG9nKFwidGV4dFwiLCB0ZXh0KTtcclxuICByZXR1cm4gYXhpb3NcclxuICAgIC5wb3N0KFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuY2hhdGVuZ2luZS5pby9jaGF0cy8ke2lkfS9tZXNzYWdlc2AsXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcImhhbGxvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIlByb2plY3QtSURcIjogXCJlNmVjM2M1ZS03ODRhLTRlOGUtYTM5Yy0zZjU0NDAyMjc2NWNcIixcclxuICAgICAgICAgIFwiVXNlci1OYW1lXCI6IFwiTWljaGVsbGVcIixcclxuICAgICAgICAgIFwiVXNlci1TZWNyZXRcIjogXCIxMjNcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcImNvbW1vbi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZhYiwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFwiO1xyXG5pbXBvcnQgRmxvYXRpbmdCdXR0b24gZnJvbSBcImNvbW1vbi9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uXCI7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29udGFpbmVyPjwvQ29udGFpbmVyPlxyXG4gICAgICA8RmxvYXRpbmdCdXR0b24gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL0JvbHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaHJvbWVSZWFkZXJNb2RlT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbk91dGxpbmVPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL1F1ZXN0aW9uQW5zd2VyT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnQvbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXQtZW5naW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9