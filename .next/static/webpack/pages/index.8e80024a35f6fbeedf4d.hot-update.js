webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/common/components/Chat/ChatFeed/index.js":
/*!**********************************************************!*\
  !*** ./modules/common/components/Chat/ChatFeed/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChatComponent_MessageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ChatComponent/MessageHeader */ "./modules/common/components/Chat/ChatComponent/MessageHeader.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var server_api_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! server/api/chat */ "./modules/server/api/chat.js");
/* harmony import */ var _ChatComponent_MyMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ChatComponent/MyMessage */ "./modules/common/components/Chat/ChatComponent/MyMessage.js");
/* harmony import */ var _ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ChatComponent/TheirMessage */ "./modules/common/components/Chat/ChatComponent/TheirMessage.js");
/* harmony import */ var _ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ChatComponent/MessageForm */ "./modules/common/components/Chat/ChatComponent/MessageForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatFeed\\index.js",
  _this = undefined,
  _s = $RefreshSig$();













var ChatFeed = function ChatFeed(_ref) {
  _s();
  var setLayout = _ref.setLayout,
    messageId = _ref.messageId;
  console.log("id", messageId);
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(["dataList", "chatFeed", messageId], function () {
      return Object(server_api_chat__WEBPACK_IMPORTED_MODULE_6__["chatFeed"])(messageId);
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  console.log("data", data);
  var renderMessages = function renderMessages() {
    return data.chats.map(function (message, index) {
      var lastMessageKey = index === 0 ? null : message === null || message === void 0 ? void 0 : message.id;
      var isMyMessage = (message === null || message === void 0 ? void 0 : message.sender_username) === "Auliya Michelle";
      console.log("message", message);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        display: "grid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          className: "message-block",
          width: "100%",
          children: isMyMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              children: "You"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MyMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
              message: message.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            message: message.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, "msg".concat(index), false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this);
    });
  };
  console.log("data", data);
  if (isLoading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("b", {
    children: "Tunggu Ya"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: data.title,
      participants: data.people.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      component: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "chat-feed",
        width: "734px",
        children: renderMessages()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        height: "100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "message-form-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          chatId: messageId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};
_s(ChatFeed, "0VB955moqGTEiUXXbAcRWgIKjHQ=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});
_c = ChatFeed;
/* harmony default export */ __webpack_exports__["default"] = (ChatFeed);
var _c;
$RefreshReg$(_c, "ChatFeed");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRGZWVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXRGZWVkIiwic2V0TGF5b3V0IiwibWVzc2FnZUlkIiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiY2hhdEZlZWQiLCJkYXRhIiwiaXNMb2FkaW5nIiwicmVuZGVyTWVzc2FnZXMiLCJjaGF0cyIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImxhc3RNZXNzYWdlS2V5IiwiaWQiLCJpc015TWVzc2FnZSIsInNlbmRlcl91c2VybmFtZSIsInRleHQiLCJ0aXRsZSIsInBlb3BsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFTSDtBQUNtQztBQUNSO0FBQ1M7QUFDcEI7QUFDSTtBQUNRO0FBQ007QUFDdkI7QUFDcUI7QUFBQTtBQUFBO0FBRXZELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLE9BQWlDO0VBQUE7RUFBQSxJQUEzQkMsU0FBUyxRQUFUQSxTQUFTO0lBQUVDLFNBQVMsUUFBVEEsU0FBUztFQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFFRixTQUFTLENBQUM7RUFFNUIsZ0JBQTRCRyw0REFBUSxDQUNsQyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUVILFNBQVMsQ0FBQyxFQUNuQztNQUFBLE9BQU1JLGdFQUFRLENBQUNKLFNBQVMsQ0FBQztJQUFBLEVBQzFCO0lBSE9LLElBQUksYUFBSkEsSUFBSTtJQUFFQyxTQUFTLGFBQVRBLFNBQVM7RUFLdkJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUcsSUFBSSxDQUFDO0VBRXpCLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBYyxHQUFTO0lBQzNCLE9BQU9GLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7TUFDeEMsSUFBTUMsY0FBYyxHQUFHRCxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0QsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUVHLEVBQUU7TUFDdkQsSUFBTUMsV0FBVyxHQUFHLENBQUFKLE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFSyxlQUFlLE1BQUssaUJBQWlCO01BQ2xFZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVRLE9BQU8sQ0FBQztNQUMvQixvQkFDRSxzRUFBQyxpREFBRztRQUFxQixPQUFPLEVBQUMsTUFBTTtRQUFBLHVCQUNyQyxzRUFBQyxpREFBRztVQUFDLFNBQVMsRUFBQyxlQUFlO1VBQUMsS0FBSyxFQUFDLE1BQU07VUFBQSxVQUN4Q0ksV0FBVyxnQkFDVjtZQUFBLHdCQUNFLHNFQUFDLHdEQUFVO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBQWlCLGVBQzVCLHNFQUFDLGdFQUFTO2NBQUMsT0FBTyxFQUFFSixPQUFPLENBQUNNO1lBQUs7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUFHO1VBQUEsZ0JBQ25DLGdCQUVILHNFQUFDLG1FQUFZO1lBQUMsT0FBTyxFQUFFTixPQUFPLENBQUNNO1VBQUs7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUNyQztVQUFBO1VBQUE7VUFBQTtRQUFBO01BQ0csZ0JBVlFMLEtBQUs7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVdmO0lBRVYsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEVixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQztFQUV6QixJQUFJQyxTQUFTLEVBQUUsb0JBQU87SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBZ0I7RUFFdEMsb0JBQ0Usc0VBQUMsaURBQUc7SUFBQyxPQUFPLEVBQUMsTUFBTTtJQUFBLHdCQUNqQixzRUFBQyxvRUFBYTtNQUFDLEtBQUssRUFBRUQsSUFBSSxDQUFDWSxLQUFNO01BQUMsWUFBWSxFQUFFWixJQUFJLENBQUNhLE1BQU0sQ0FBQ0M7SUFBTztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUcsZUFDdEUsc0VBQUMsaURBQUc7TUFBQyxTQUFTLEVBQUMsTUFBTTtNQUFBLHdCQUNuQixzRUFBQyxxREFBTztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQUcsZUFDWCxzRUFBQyxpREFBRztRQUFDLFNBQVMsRUFBQyxXQUFXO1FBQUMsS0FBSyxFQUFDLE9BQU87UUFBQSxVQUNyQ1osY0FBYztNQUFFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FDYixlQUVOLHNFQUFDLGlEQUFHO1FBQUMsTUFBTSxFQUFDO01BQU87UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFHLGVBQ3RCLHNFQUFDLGlEQUFHO1FBQUMsU0FBUyxFQUFDLHdCQUF3QjtRQUFBLHVCQUNyQyxzRUFBQyxrRUFBVztVQUFDLE1BQU0sRUFBRVA7UUFBVTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUc7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUM5QjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDRjtBQUVWLENBQUM7QUFBQyxHQXBESUYsUUFBUTtFQUFBLFFBR2dCSyxvREFBUTtBQUFBO0FBQUEsS0FIaENMLFFBQVE7QUFzRENBLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlODAwMjRhMzVmNmZiZWVkZjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgQ3NzQmFzZWxpbmUsXHJcbiAgR3JpZCxcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcclxuaW1wb3J0IE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvTWVzc2FnZUhlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBjaGF0RmVlZCB9IGZyb20gXCJzZXJ2ZXIvYXBpL2NoYXRcIjtcclxuaW1wb3J0IE15TWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NeU1lc3NhZ2VcIjtcclxuaW1wb3J0IFRoZWlyTWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9UaGVpck1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NZXNzYWdlRm9ybVwiO1xyXG5cclxuY29uc3QgQ2hhdEZlZWQgPSAoeyBzZXRMYXlvdXQsIG1lc3NhZ2VJZCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpZFwiLCBtZXNzYWdlSWQpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoXHJcbiAgICBbXCJkYXRhTGlzdFwiLCBcImNoYXRGZWVkXCIsIG1lc3NhZ2VJZF0sXHJcbiAgICAoKSA9PiBjaGF0RmVlZChtZXNzYWdlSWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG5cclxuICBjb25zdCByZW5kZXJNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRhLmNoYXRzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbGFzdE1lc3NhZ2VLZXkgPSBpbmRleCA9PT0gMCA/IG51bGwgOiBtZXNzYWdlPy5pZDtcclxuICAgICAgY29uc3QgaXNNeU1lc3NhZ2UgPSBtZXNzYWdlPy5zZW5kZXJfdXNlcm5hbWUgPT09IFwiQXVsaXlhIE1pY2hlbGxlXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGtleT17YG1zZyR7aW5kZXh9YH0gZGlzcGxheT1cImdyaWRcIj5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWVzc2FnZS1ibG9ja1wiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICB7aXNNeU1lc3NhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PllvdTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxNeU1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxUaGVpck1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8Yj5UdW5nZ3UgWWE8L2I+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICA8TWVzc2FnZUhlYWRlciB0aXRsZT17ZGF0YS50aXRsZX0gcGFydGljaXBhbnRzPXtkYXRhLnBlb3BsZS5sZW5ndGh9IC8+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PVwibWFpblwiPlxyXG4gICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjaGF0LWZlZWRcIiB3aWR0aD1cIjczNHB4XCI+XHJcbiAgICAgICAgICB7cmVuZGVyTWVzc2FnZXMoKX1cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtZXNzYWdlLWZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TWVzc2FnZUZvcm0gY2hhdElkPXttZXNzYWdlSWR9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRGZWVkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9