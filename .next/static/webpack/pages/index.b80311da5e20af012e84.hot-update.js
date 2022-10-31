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
          children: isMyMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MyMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            message: message.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            message: message.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
    lineNumber: 52,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: data.title,
      participants: data.people.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      component: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "chat-feed",
        children: renderMessages()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        height: "100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "message-form-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          chatId: messageId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRGZWVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXRGZWVkIiwic2V0TGF5b3V0IiwibWVzc2FnZUlkIiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiY2hhdEZlZWQiLCJkYXRhIiwiaXNMb2FkaW5nIiwicmVuZGVyTWVzc2FnZXMiLCJjaGF0cyIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImxhc3RNZXNzYWdlS2V5IiwiaWQiLCJpc015TWVzc2FnZSIsInNlbmRlcl91c2VybmFtZSIsInRleHQiLCJ0aXRsZSIsInBlb3BsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFTSDtBQUNtQztBQUNSO0FBQ1M7QUFDcEI7QUFDSTtBQUNRO0FBQ007QUFDdkI7QUFDcUI7QUFBQTtBQUV2RCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQztFQUFBO0VBQUEsSUFBM0JDLFNBQVMsUUFBVEEsU0FBUztJQUFFQyxTQUFTLFFBQVRBLFNBQVM7RUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUYsU0FBUyxDQUFDO0VBRTVCLGdCQUE0QkcsNERBQVEsQ0FDbEMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFSCxTQUFTLENBQUMsRUFDbkM7TUFBQSxPQUFNSSxnRUFBUSxDQUFDSixTQUFTLENBQUM7SUFBQSxFQUMxQjtJQUhPSyxJQUFJLGFBQUpBLElBQUk7SUFBRUMsU0FBUyxhQUFUQSxTQUFTO0VBS3ZCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQztFQUV6QixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBUztJQUMzQixPQUFPRixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO01BQ3hDLElBQU1DLGNBQWMsR0FBR0QsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdELE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFRyxFQUFFO01BQ3ZELElBQU1DLFdBQVcsR0FBRyxDQUFBSixPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRUssZUFBZSxNQUFLLGlCQUFpQjtNQUNsRWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFUSxPQUFPLENBQUM7TUFDL0Isb0JBQ0Usc0VBQUMsaURBQUc7UUFBcUIsT0FBTyxFQUFDLE1BQU07UUFBQSx1QkFDckMsc0VBQUMsaURBQUc7VUFBQyxTQUFTLEVBQUMsZUFBZTtVQUFDLEtBQUssRUFBQyxNQUFNO1VBQUEsVUFDeENJLFdBQVcsZ0JBQ1Ysc0VBQUMsZ0VBQVM7WUFBQyxPQUFPLEVBQUVKLE9BQU8sQ0FBQ007VUFBSztZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQUcsZ0JBRXBDLHNFQUFDLG1FQUFZO1lBQUMsT0FBTyxFQUFFTixPQUFPLENBQUNNO1VBQUs7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUNyQztVQUFBO1VBQUE7VUFBQTtRQUFBO01BQ0csZ0JBUFFMLEtBQUs7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVFmO0lBRVYsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEVixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQztFQUV6QixJQUFJQyxTQUFTLEVBQUUsb0JBQU87SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBZ0I7RUFFdEMsb0JBQ0Usc0VBQUMsaURBQUc7SUFBQyxPQUFPLEVBQUMsTUFBTTtJQUFBLHdCQUNqQixzRUFBQyxvRUFBYTtNQUFDLEtBQUssRUFBRUQsSUFBSSxDQUFDWSxLQUFNO01BQUMsWUFBWSxFQUFFWixJQUFJLENBQUNhLE1BQU0sQ0FBQ0M7SUFBTztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUcsZUFDdEUsc0VBQUMsaURBQUc7TUFBQyxTQUFTLEVBQUMsTUFBTTtNQUFBLHdCQUNuQixzRUFBQyxxREFBTztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQUcsZUFDWCxzRUFBQyxpREFBRztRQUFDLFNBQVMsRUFBQyxXQUFXO1FBQUEsVUFBRVosY0FBYztNQUFFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBTyxlQUVuRCxzRUFBQyxpREFBRztRQUFDLE1BQU0sRUFBQztNQUFPO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRyxlQUN0QixzRUFBQyxpREFBRztRQUFDLFNBQVMsRUFBQyx3QkFBd0I7UUFBQSx1QkFDckMsc0VBQUMsa0VBQVc7VUFBQyxNQUFNLEVBQUVQO1FBQVU7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFHO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FDOUI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ0Y7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ0Y7QUFFVixDQUFDO0FBQUMsR0EvQ0lGLFFBQVE7RUFBQSxRQUdnQkssb0RBQVE7QUFBQTtBQUFBLEtBSGhDTCxRQUFRO0FBaURDQSx1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODAzMTFkYTVlMjBhZjAxMmU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENzc0Jhc2VsaW5lLFxyXG4gIEdyaWQsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja1wiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlXCI7XHJcbmltcG9ydCBNZXNzYWdlSGVhZGVyIGZyb20gXCIuLi9DaGF0Q29tcG9uZW50L01lc3NhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgY2hhdEZlZWQgfSBmcm9tIFwic2VydmVyL2FwaS9jaGF0XCI7XHJcbmltcG9ydCBNeU1lc3NhZ2UgZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvTXlNZXNzYWdlXCI7XHJcbmltcG9ydCBUaGVpck1lc3NhZ2UgZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvVGhlaXJNZXNzYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVzc2FnZUZvcm0gZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvTWVzc2FnZUZvcm1cIjtcclxuXHJcbmNvbnN0IENoYXRGZWVkID0gKHsgc2V0TGF5b3V0LCBtZXNzYWdlSWQgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaWRcIiwgbWVzc2FnZUlkKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgW1wiZGF0YUxpc3RcIiwgXCJjaGF0RmVlZFwiLCBtZXNzYWdlSWRdLFxyXG4gICAgKCkgPT4gY2hhdEZlZWQobWVzc2FnZUlkKVxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWVzc2FnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5jaGF0cy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhc3RNZXNzYWdlS2V5ID0gaW5kZXggPT09IDAgPyBudWxsIDogbWVzc2FnZT8uaWQ7XHJcbiAgICAgIGNvbnN0IGlzTXlNZXNzYWdlID0gbWVzc2FnZT8uc2VuZGVyX3VzZXJuYW1lID09PSBcIkF1bGl5YSBNaWNoZWxsZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBrZXk9e2Btc2cke2luZGV4fWB9IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYmxvY2tcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgICAge2lzTXlNZXNzYWdlID8gKFxyXG4gICAgICAgICAgICAgIDxNeU1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxUaGVpck1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8Yj5UdW5nZ3UgWWE8L2I+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICA8TWVzc2FnZUhlYWRlciB0aXRsZT17ZGF0YS50aXRsZX0gcGFydGljaXBhbnRzPXtkYXRhLnBlb3BsZS5sZW5ndGh9IC8+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PVwibWFpblwiPlxyXG4gICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJjaGF0LWZlZWRcIj57cmVuZGVyTWVzc2FnZXMoKX08L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtZXNzYWdlLWZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TWVzc2FnZUZvcm0gY2hhdElkPXttZXNzYWdlSWR9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRGZWVkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9