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
        width: "734px",
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
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRGZWVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXRGZWVkIiwic2V0TGF5b3V0IiwibWVzc2FnZUlkIiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiY2hhdEZlZWQiLCJkYXRhIiwiaXNMb2FkaW5nIiwicmVuZGVyTWVzc2FnZXMiLCJjaGF0cyIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImxhc3RNZXNzYWdlS2V5IiwiaWQiLCJpc015TWVzc2FnZSIsInNlbmRlcl91c2VybmFtZSIsInRleHQiLCJ0aXRsZSIsInBlb3BsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFTSDtBQUNtQztBQUNSO0FBQ1M7QUFDcEI7QUFDSTtBQUNRO0FBQ007QUFDdkI7QUFDcUI7QUFBQTtBQUV2RCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQztFQUFBO0VBQUEsSUFBM0JDLFNBQVMsUUFBVEEsU0FBUztJQUFFQyxTQUFTLFFBQVRBLFNBQVM7RUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUYsU0FBUyxDQUFDO0VBRTVCLGdCQUE0QkcsNERBQVEsQ0FDbEMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFSCxTQUFTLENBQUMsRUFDbkM7TUFBQSxPQUFNSSxnRUFBUSxDQUFDSixTQUFTLENBQUM7SUFBQSxFQUMxQjtJQUhPSyxJQUFJLGFBQUpBLElBQUk7SUFBRUMsU0FBUyxhQUFUQSxTQUFTO0VBS3ZCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVHLElBQUksQ0FBQztFQUV6QixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsR0FBUztJQUMzQixPQUFPRixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO01BQ3hDLElBQU1DLGNBQWMsR0FBR0QsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUdELE9BQU8sYUFBUEEsT0FBTyx1QkFBUEEsT0FBTyxDQUFFRyxFQUFFO01BQ3ZELElBQU1DLFdBQVcsR0FBRyxDQUFBSixPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRUssZUFBZSxNQUFLLGlCQUFpQjtNQUNsRWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFUSxPQUFPLENBQUM7TUFDL0Isb0JBQ0Usc0VBQUMsaURBQUc7UUFBcUIsT0FBTyxFQUFDLE1BQU07UUFBQSx1QkFDckMsc0VBQUMsaURBQUc7VUFBQyxTQUFTLEVBQUMsZUFBZTtVQUFDLEtBQUssRUFBQyxNQUFNO1VBQUEsVUFDeENJLFdBQVcsZ0JBQ1Ysc0VBQUMsaURBQUc7WUFBQyxPQUFPLEVBQUMsTUFBTTtZQUFBLHdCQUNqQixzRUFBQyx3REFBVTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUFpQixlQUM1QixzRUFBQyxnRUFBUztjQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDTTtZQUFLO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FBRztVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FDaEMsZ0JBRU4sc0VBQUMsbUVBQVk7WUFBQyxPQUFPLEVBQUVOLE9BQU8sQ0FBQ007VUFBSztZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ3JDO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFDRyxnQkFWUUwsS0FBSztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBV2Y7SUFFVixDQUFDLENBQUM7RUFDSixDQUFDO0VBRURWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUcsSUFBSSxDQUFDO0VBRXpCLElBQUlDLFNBQVMsRUFBRSxvQkFBTztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFnQjtFQUV0QyxvQkFDRSxzRUFBQyxpREFBRztJQUFDLE9BQU8sRUFBQyxNQUFNO0lBQUEsd0JBQ2pCLHNFQUFDLG9FQUFhO01BQUMsS0FBSyxFQUFFRCxJQUFJLENBQUNZLEtBQU07TUFBQyxZQUFZLEVBQUVaLElBQUksQ0FBQ2EsTUFBTSxDQUFDQztJQUFPO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBRyxlQUN0RSxzRUFBQyxpREFBRztNQUFDLFNBQVMsRUFBQyxNQUFNO01BQUEsd0JBQ25CLHNFQUFDLHFEQUFPO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRyxlQUNYLHNFQUFDLGlEQUFHO1FBQUMsU0FBUyxFQUFDLFdBQVc7UUFBQyxLQUFLLEVBQUMsT0FBTztRQUFBLFVBQ3JDWixjQUFjO01BQUU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNiLGVBRU4sc0VBQUMsaURBQUc7UUFBQyxTQUFTLEVBQUMsd0JBQXdCO1FBQUEsdUJBQ3JDLHNFQUFDLGtFQUFXO1VBQUMsTUFBTSxFQUFFUDtRQUFVO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBRztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQzlCO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUNGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNGO0FBRVYsQ0FBQztBQUFDLEdBbkRJRixRQUFRO0VBQUEsUUFHZ0JLLG9EQUFRO0FBQUE7QUFBQSxLQUhoQ0wsUUFBUTtBQXFEQ0EsdUVBQVEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhmNGNkNDhiNjY5NDQ2NzMyNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBDc3NCYXNlbGluZSxcclxuICBHcmlkLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVwiO1xyXG5pbXBvcnQgTWVzc2FnZUhlYWRlciBmcm9tIFwiLi4vQ2hhdENvbXBvbmVudC9NZXNzYWdlSGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IGNoYXRGZWVkIH0gZnJvbSBcInNlcnZlci9hcGkvY2hhdFwiO1xyXG5pbXBvcnQgTXlNZXNzYWdlIGZyb20gXCIuLi9DaGF0Q29tcG9uZW50L015TWVzc2FnZVwiO1xyXG5pbXBvcnQgVGhlaXJNZXNzYWdlIGZyb20gXCIuLi9DaGF0Q29tcG9uZW50L1RoZWlyTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2VGb3JtIGZyb20gXCIuLi9DaGF0Q29tcG9uZW50L01lc3NhZ2VGb3JtXCI7XHJcblxyXG5jb25zdCBDaGF0RmVlZCA9ICh7IHNldExheW91dCwgbWVzc2FnZUlkIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcImlkXCIsIG1lc3NhZ2VJZCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShcclxuICAgIFtcImRhdGFMaXN0XCIsIFwiY2hhdEZlZWRcIiwgbWVzc2FnZUlkXSxcclxuICAgICgpID0+IGNoYXRGZWVkKG1lc3NhZ2VJZClcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlck1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGEuY2hhdHMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBsYXN0TWVzc2FnZUtleSA9IGluZGV4ID09PSAwID8gbnVsbCA6IG1lc3NhZ2U/LmlkO1xyXG4gICAgICBjb25zdCBpc015TWVzc2FnZSA9IG1lc3NhZ2U/LnNlbmRlcl91c2VybmFtZSA9PT0gXCJBdWxpeWEgTWljaGVsbGVcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3gga2V5PXtgbXNnJHtpbmRleH1gfSBkaXNwbGF5PVwiZ3JpZFwiPlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtZXNzYWdlLWJsb2NrXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgIHtpc015TWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Zb3U8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8TXlNZXNzYWdlIG1lc3NhZ2U9e21lc3NhZ2UudGV4dH0gLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VGhlaXJNZXNzYWdlIG1lc3NhZ2U9e21lc3NhZ2UudGV4dH0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGI+VHVuZ2d1IFlhPC9iPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgPE1lc3NhZ2VIZWFkZXIgdGl0bGU9e2RhdGEudGl0bGV9IHBhcnRpY2lwYW50cz17ZGF0YS5wZW9wbGUubGVuZ3RofSAvPlxyXG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm1haW5cIj5cclxuICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY2hhdC1mZWVkXCIgd2lkdGg9XCI3MzRweFwiPlxyXG4gICAgICAgICAge3JlbmRlck1lc3NhZ2VzKCl9XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibWVzc2FnZS1mb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE1lc3NhZ2VGb3JtIGNoYXRJZD17bWVzc2FnZUlkfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0RmVlZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==