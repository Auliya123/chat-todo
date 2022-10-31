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
          children: isMyMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            display: "grid",
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
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_TheirMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        children: renderMessages()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "message-form-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatComponent_MessageForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          chatId: messageId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRGZWVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXRGZWVkIiwic2V0TGF5b3V0IiwibWVzc2FnZUlkIiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiY2hhdEZlZWQiLCJkYXRhIiwiaXNMb2FkaW5nIiwicmVuZGVyTWVzc2FnZXMiLCJjaGF0cyIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImxhc3RNZXNzYWdlS2V5IiwiaWQiLCJpc015TWVzc2FnZSIsInNlbmRlcl91c2VybmFtZSIsInRleHQiLCJ0aXRsZSIsInBlb3BsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFTSDtBQUNtQztBQUNSO0FBQ1M7QUFDcEI7QUFDSTtBQUNRO0FBQ007QUFDdkI7QUFDcUI7QUFBQTtBQUV2RCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQztFQUFBO0VBQUEsSUFBM0JDLFNBQVMsUUFBVEEsU0FBUztJQUFFQyxTQUFTLFFBQVRBLFNBQVM7RUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUYsU0FBUyxDQUFDO0VBRTVCLGdCQUE0QkcsNERBQVEsQ0FDbEMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFSCxTQUFTLENBQUMsRUFDbkM7TUFBQSxPQUFNSSxnRUFBUSxDQUFDSixTQUFTLENBQUM7SUFBQSxFQUMxQjtJQUhPSyxJQUFJLGFBQUpBLElBQUk7SUFBRUMsU0FBUyxhQUFUQSxTQUFTO0VBS3ZCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQztFQUV6QixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBUztJQUMzQixPQUFPRixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO01BQ3hDLElBQU1DLGNBQWMsR0FBR0QsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdELE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFRyxFQUFFO01BQ3ZELElBQU1DLFdBQVcsR0FBRyxDQUFBSixPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRUssZUFBZSxNQUFLLGlCQUFpQjtNQUNsRWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFUSxPQUFPLENBQUM7TUFDL0Isb0JBQ0Usc0VBQUMsaURBQUc7UUFBcUIsT0FBTyxFQUFDLE1BQU07UUFBQSx1QkFDckMsc0VBQUMsaURBQUc7VUFBQyxTQUFTLEVBQUMsZUFBZTtVQUFDLEtBQUssRUFBQyxNQUFNO1VBQUEsVUFDeENJLFdBQVcsZ0JBQ1Ysc0VBQUMsaURBQUc7WUFBQyxPQUFPLEVBQUMsTUFBTTtZQUFBLHdCQUNqQixzRUFBQyx3REFBVTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUFpQixlQUM1QixzRUFBQyxnRUFBUztjQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDTTtZQUFLO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FBRztVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FDaEMsZ0JBRU4sc0VBQUMsbUVBQVk7WUFBQyxPQUFPLEVBQUVOLE9BQU8sQ0FBQ007VUFBSztZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ3JDO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFDRyxnQkFWUUwsS0FBSztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBV2Y7SUFFVixDQUFDLENBQUM7RUFDSixDQUFDO0VBRURWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUcsSUFBSSxDQUFDO0VBRXpCLElBQUlDLFNBQVMsRUFBRSxvQkFBTztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFnQjtFQUV0QyxvQkFDRSxzRUFBQyxpREFBRztJQUFDLE9BQU8sRUFBQyxNQUFNO0lBQUEsd0JBQ2pCLHNFQUFDLG9FQUFhO01BQUMsS0FBSyxFQUFFRCxJQUFJLENBQUNZLEtBQU07TUFBQyxZQUFZLEVBQUVaLElBQUksQ0FBQ2EsTUFBTSxDQUFDQztJQUFPO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBRyxlQUN0RSxzRUFBQyxpREFBRztNQUFDLFNBQVMsRUFBQyxNQUFNO01BQUEsd0JBQ25CLHNFQUFDLHFEQUFPO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRyxlQUNYLHNFQUFDLGlEQUFHO1FBQUMsU0FBUyxFQUFDLFdBQVc7UUFBQSxVQUFFWixjQUFjO01BQUU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFPLGVBR25ELHNFQUFDLGlEQUFHO1FBQUMsU0FBUyxFQUFDLHdCQUF3QjtRQUFBLHVCQUNyQyxzRUFBQyxrRUFBVztVQUFDLE1BQU0sRUFBRVA7UUFBVTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUc7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUM5QjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDRjtBQUVWLENBQUM7QUFBQyxHQWxESUYsUUFBUTtFQUFBLFFBR2dCSyxvREFBUTtBQUFBO0FBQUEsS0FIaENMLFFBQVE7QUFvRENBLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0NGYxZjE5M2JjMWE0M2U2NDY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIEJveCxcclxuICBDb250YWluZXIsXHJcbiAgQ3NzQmFzZWxpbmUsXHJcbiAgR3JpZCxcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcclxuaW1wb3J0IE1lc3NhZ2VIZWFkZXIgZnJvbSBcIi4uL0NoYXRDb21wb25lbnQvTWVzc2FnZUhlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBjaGF0RmVlZCB9IGZyb20gXCJzZXJ2ZXIvYXBpL2NoYXRcIjtcclxuaW1wb3J0IE15TWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NeU1lc3NhZ2VcIjtcclxuaW1wb3J0IFRoZWlyTWVzc2FnZSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9UaGVpck1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NZXNzYWdlRm9ybVwiO1xyXG5cclxuY29uc3QgQ2hhdEZlZWQgPSAoeyBzZXRMYXlvdXQsIG1lc3NhZ2VJZCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpZFwiLCBtZXNzYWdlSWQpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoXHJcbiAgICBbXCJkYXRhTGlzdFwiLCBcImNoYXRGZWVkXCIsIG1lc3NhZ2VJZF0sXHJcbiAgICAoKSA9PiBjaGF0RmVlZChtZXNzYWdlSWQpXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG5cclxuICBjb25zdCByZW5kZXJNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRhLmNoYXRzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbGFzdE1lc3NhZ2VLZXkgPSBpbmRleCA9PT0gMCA/IG51bGwgOiBtZXNzYWdlPy5pZDtcclxuICAgICAgY29uc3QgaXNNeU1lc3NhZ2UgPSBtZXNzYWdlPy5zZW5kZXJfdXNlcm5hbWUgPT09IFwiQXVsaXlhIE1pY2hlbGxlXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGtleT17YG1zZyR7aW5kZXh9YH0gZGlzcGxheT1cImdyaWRcIj5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWVzc2FnZS1ibG9ja1wiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICB7aXNNeU1lc3NhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+WW91PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPE15TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlLnRleHR9IC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRoZWlyTWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlLnRleHR9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxiPlR1bmdndSBZYTwvYj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgIDxNZXNzYWdlSGVhZGVyIHRpdGxlPXtkYXRhLnRpdGxlfSBwYXJ0aWNpcGFudHM9e2RhdGEucGVvcGxlLmxlbmd0aH0gLz5cclxuICAgICAgPEJveCBjb21wb25lbnQ9XCJtYWluXCI+XHJcbiAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImNoYXQtZmVlZFwiPntyZW5kZXJNZXNzYWdlcygpfTwvQm94PlxyXG5cclxuICAgICAgICB7LyogPEJveCBoZWlnaHQ9XCIxMDBweFwiIC8+ICovfVxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWVzc2FnZS1mb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE1lc3NhZ2VGb3JtIGNoYXRJZD17bWVzc2FnZUlkfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0RmVlZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==