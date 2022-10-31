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
  var chatId = _ref.chatId;
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
      className: "message-input",
      value: value,
      onChange: handleChange,
      onSubmit: handleSubmit,
      variant: "outlined",
      placeholder: "Type a new message",
      sx: {
        bottom: 0,
        width: 580,
        marginLeft: 10
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "contained",
      children: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvTWVzc2FnZUZvcm0uanMiXSwibmFtZXMiOlsiTWVzc2FnZUZvcm0iLCJjaGF0SWQiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJtdXRhdGlvbkNyZWF0ZSIsInVzZU11dGF0aW9uIiwidGV4dCIsInNlbmRDaGF0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImxlbmd0aCIsIm11dGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImJvdHRvbSIsIndpZHRoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN4QjtBQUNPO0FBQ1k7QUFDSDtBQUNDO0FBQUE7QUFFM0MsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsT0FBbUI7RUFBQTtFQUFBLElBQWJDLE1BQU0sUUFBTkEsTUFBTTtFQUMzQixnQkFBMEJDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQS9CQyxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsY0FBYyxHQUFHQywrREFBVyxDQUFDLGFBQWEsRUFBRSxVQUFDQyxJQUFJO0lBQUEsT0FDckRDLGdFQUFRLENBQUNQLE1BQU0sRUFBRU0sSUFBSSxDQUFDO0VBQUEsRUFDdkI7RUFFRCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxDQUFDLEVBQUs7SUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQU1KLElBQUksR0FBR0osS0FBSyxDQUFDUyxJQUFJLEVBQUU7SUFFekIsSUFBSUwsSUFBSSxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUFFUixjQUFjLENBQUNTLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDO0VBQ2xELENBQUM7RUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJTCxDQUFDLEVBQUs7SUFDMUJOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDTSxNQUFNLENBQUNiLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBRUQsb0JBQ0U7SUFBTSxTQUFTLEVBQUMsY0FBYztJQUFDLFFBQVEsRUFBRU0sWUFBYTtJQUFBLHdCQUNwRCxxRUFBQyx1REFBUztNQUNSLFNBQVMsRUFBQyxlQUFlO01BQ3pCLEtBQUssRUFBRU4sS0FBTTtNQUNiLFFBQVEsRUFBRVksWUFBYTtNQUN2QixRQUFRLEVBQUVOLFlBQWE7TUFDdkIsT0FBTyxFQUFDLFVBQVU7TUFDbEIsV0FBVyxFQUFDLG9CQUFvQjtNQUNoQyxFQUFFLEVBQUU7UUFBRVEsTUFBTSxFQUFFLENBQUM7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFBRUMsVUFBVSxFQUFFO01BQUc7SUFBRTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQzlDLGVBQ0YscUVBQUMsb0RBQU07TUFBQyxPQUFPLEVBQUMsV0FBVztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFjO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNwQztBQUVYLENBQUM7QUFBQyxHQWhDSW5CLFdBQVc7RUFBQSxRQUdRTSx1REFBVztBQUFBO0FBQUEsS0FIOUJOLFdBQVc7QUFrQ0ZBLDBFQUFXLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmMTRiNWQ1OTJjNGFkMmYwYTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaXNUeXBpbmcgfSBmcm9tIFwicmVhY3QtY2hhdC1lbmdpbmVcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgc2VuZENoYXQgfSBmcm9tIFwic2VydmVyL2FwaS9jaGF0XCI7XHJcblxyXG5jb25zdCBNZXNzYWdlRm9ybSA9ICh7IGNoYXRJZCB9KSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgbXV0YXRpb25DcmVhdGUgPSB1c2VNdXRhdGlvbihcInNlbmRNZXNzYWdlXCIsICh0ZXh0KSA9PlxyXG4gICAgc2VuZENoYXQoY2hhdElkLCB0ZXh0KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gdmFsdWUudHJpbSgpO1xyXG5cclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIG11dGF0aW9uQ3JlYXRlLm11dGF0ZSh0ZXh0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaW5wdXRcIlxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBuZXcgbWVzc2FnZVwiXHJcbiAgICAgICAgc3g9e3sgYm90dG9tOiAwLCB3aWR0aDogNTgwLCBtYXJnaW5MZWZ0OiAxMCB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5TZW5kPC9CdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9