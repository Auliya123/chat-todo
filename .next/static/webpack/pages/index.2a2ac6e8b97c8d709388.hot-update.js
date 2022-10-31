webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/common/components/Chat/ChatComponent/MessageForm.js":
/*!*********************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/MessageForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chat_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var server_api_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! server/api/chat */ "./modules/server/api/chat.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\MessageForm.js",
  _this = undefined,
  _s = $RefreshSig$();







var MessageForm = function MessageForm(_ref) {
  _s();
  var chatId = _ref.chatId,
    creds = _ref.creds;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
    value = _useState[0],
    setValue = _useState[1];
  var mutationCreate = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])("sendMessage", function (text) {
    return Object(server_api_chat__WEBPACK_IMPORTED_MODULE_4__["sendChat"])(chatId, text);
  });
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var text = value.trim();
    if (text.length > 0) mutationCreate.mutate(text);
  };
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
    className: "message-form",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
      fullWidth: true,
      className: "message-input",
      value: value,
      onChange: handleChange,
      onSubmit: handleSubmit,
      variant: "outlined",
      placeholder: "Type a new message",
      sx: {
        bottom: 0
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_chat_engine__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};
_s(MessageForm, "uJPcPI5+j4jzoNdO8RCWs3/ZJh0=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});
_c = MessageForm;
/* harmony default export */ __webpack_exports__["default"] = (MessageForm);
var _c;
$RefreshReg$(_c, "MessageForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvTWVzc2FnZUZvcm0uanMiXSwibmFtZXMiOlsiTWVzc2FnZUZvcm0iLCJjaGF0SWQiLCJjcmVkcyIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm11dGF0aW9uQ3JlYXRlIiwidXNlTXV0YXRpb24iLCJ0ZXh0Iiwic2VuZENoYXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwibXV0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQ087QUFDb0I7QUFDWDtBQUNDO0FBQUE7QUFFM0MsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsT0FBMEI7RUFBQTtFQUFBLElBQXBCQyxNQUFNLFFBQU5BLE1BQU07SUFBRUMsS0FBSyxRQUFMQSxLQUFLO0VBQ2xDLGdCQUEwQkMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBL0JDLEtBQUs7SUFBRUMsUUFBUTtFQUV0QixJQUFNQyxjQUFjLEdBQUdDLCtEQUFXLENBQUMsYUFBYSxFQUFFLFVBQUNDLElBQUk7SUFBQSxPQUNyREMsZ0VBQVEsQ0FBQ1IsTUFBTSxFQUFFTyxJQUFJLENBQUM7RUFBQSxFQUN2QjtFQUVELElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlDLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIsSUFBTUosSUFBSSxHQUFHSixLQUFLLENBQUNTLElBQUksRUFBRTtJQUV6QixJQUFJTCxJQUFJLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQUVSLGNBQWMsQ0FBQ1MsTUFBTSxDQUFDUCxJQUFJLENBQUM7RUFDbEQsQ0FBQztFQUVELElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlMLENBQUMsRUFBSztJQUMxQk4sUUFBUSxDQUFDTSxDQUFDLENBQUNNLE1BQU0sQ0FBQ2IsS0FBSyxDQUFDO0VBQzFCLENBQUM7RUFFRCxvQkFDRTtJQUFNLFNBQVMsRUFBQyxjQUFjO0lBQUMsUUFBUSxFQUFFTSxZQUFhO0lBQUEsd0JBQ3BELHFFQUFDLHVEQUFTO01BQ1IsU0FBUztNQUNULFNBQVMsRUFBQyxlQUFlO01BQ3pCLEtBQUssRUFBRU4sS0FBTTtNQUNiLFFBQVEsRUFBRVksWUFBYTtNQUN2QixRQUFRLEVBQUVOLFlBQWE7TUFDdkIsT0FBTyxFQUFDLFVBQVU7TUFDbEIsV0FBVyxFQUFDLG9CQUFvQjtNQUNoQyxFQUFFLEVBQUU7UUFBRVEsTUFBTSxFQUFFO01BQUU7SUFBRTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ2xCLGVBQ0YscUVBQUMsd0RBQU07TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBYztFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDaEI7QUFFWCxDQUFDO0FBQUMsR0FqQ0lsQixXQUFXO0VBQUEsUUFHUU8sdURBQVc7QUFBQTtBQUFBLEtBSDlCUCxXQUFXO0FBbUNGQSwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYTJhYzZlOGI5N2M4ZDcwOTM4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIGlzVHlwaW5nIH0gZnJvbSBcInJlYWN0LWNoYXQtZW5naW5lXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IHNlbmRDaGF0IH0gZnJvbSBcInNlcnZlci9hcGkvY2hhdFwiO1xyXG5cclxuY29uc3QgTWVzc2FnZUZvcm0gPSAoeyBjaGF0SWQsIGNyZWRzIH0pID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBtdXRhdGlvbkNyZWF0ZSA9IHVzZU11dGF0aW9uKFwic2VuZE1lc3NhZ2VcIiwgKHRleHQpID0+XHJcbiAgICBzZW5kQ2hhdChjaGF0SWQsIHRleHQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRleHQgPSB2YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCkgbXV0YXRpb25DcmVhdGUubXV0YXRlKHRleHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2UtZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS1pbnB1dFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG5ldyBtZXNzYWdlXCJcclxuICAgICAgICBzeD17eyBib3R0b206IDAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbj5TZW5kPC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9