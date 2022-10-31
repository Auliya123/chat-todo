webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/common/components/Chat/ChatComponent/MessageHeader.js":
/*!***********************************************************************!*\
  !*** ./modules/common/components/Chat/ChatComponent/MessageHeader.js ***!
  \***********************************************************************/
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\michelle\\chat-todo\\modules\\common\\components\\Chat\\ChatComponent\\MessageHeader.js",
  _this = undefined;





var MessageHeader = function MessageHeader(_ref) {
  var title = _ref.title,
    participants = _ref.participants,
    setLayout = _ref.setLayout;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    color: "transparent",
    component: "nav",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: function onClick() {
          return setLayout("list");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
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
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: function onClick() {
          return setLayout("list");
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};
_c = MessageHeader;
/* harmony default export */ __webpack_exports__["default"] = (MessageHeader);
var _c;
$RefreshReg$(_c, "MessageHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21tb24vY29tcG9uZW50cy9DaGF0L0NoYXRDb21wb25lbnQvTWVzc2FnZUhlYWRlci5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlSGVhZGVyIiwidGl0bGUiLCJwYXJ0aWNpcGFudHMiLCJzZXRMYXlvdXQiLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBU0g7QUFDbUM7QUFDUjtBQUFBO0FBRWxELElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxPQUEyQztFQUFBLElBQXJDQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsWUFBWSxRQUFaQSxZQUFZO0lBQUVDLFNBQVMsUUFBVEEsU0FBUztFQUNyRCxvQkFDRSxxRUFBQyxvREFBTTtJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsU0FBUyxFQUFDLEtBQUs7SUFBQSx1QkFDekMscUVBQUMscURBQU87TUFBQSx3QkFDTixxRUFBQyxvRUFBYTtRQUFDLE9BQU8sRUFBRTtVQUFBLE9BQU1BLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFBQTtNQUFDO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRyxlQUNuRCxxRUFBQyxrREFBSTtRQUFDLFNBQVM7UUFBQyxPQUFPLEVBQUMsTUFBTTtRQUFDLEVBQUUsRUFBQyxRQUFRO1FBQUEsd0JBQ3hDLHFFQUFDLGtEQUFJO1VBQUMsSUFBSTtVQUFBLHVCQUNSLHFFQUFDLHdEQUFVO1lBQUMsRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRTtZQUFlLENBQUU7WUFBQyxPQUFPLEVBQUMsV0FBVztZQUFBLFVBQzNESDtVQUFLO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFDSztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBQ1IsZUFDUCxxRUFBQyxrREFBSTtVQUFDLElBQUk7VUFBQSx1QkFDUixxRUFBQyx3REFBVTtZQUFDLEVBQUUsRUFBRTtjQUFFSSxRQUFRLEVBQUU7WUFBUyxDQUFFO1lBQUEsV0FDcENILFlBQVk7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ0Y7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUNSO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNGLGVBQ1AscUVBQUMsZ0VBQVM7UUFBQyxPQUFPLEVBQUU7VUFBQSxPQUFNQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQUE7TUFBQztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQUc7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQ3ZDO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDSDtBQUViLENBQUM7QUFBQyxLQXJCSUgsYUFBYTtBQXVCSkEsNEVBQWEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTBjNzJmMzJhODA2NGFlNWM1OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgQm94LFxyXG4gIENvbnRhaW5lcixcclxuICBDc3NCYXNlbGluZSxcclxuICBHcmlkLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVwiO1xyXG5cclxuY29uc3QgTWVzc2FnZUhlYWRlciA9ICh7IHRpdGxlLCBwYXJ0aWNpcGFudHMsIHNldExheW91dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBCYXIgY29sb3I9XCJ0cmFuc3BhcmVudFwiIGNvbXBvbmVudD1cIm5hdlwiPlxyXG4gICAgICA8VG9vbGJhcj5cclxuICAgICAgICA8QXJyb3dCYWNrSWNvbiBvbkNsaWNrPXsoKSA9PiBzZXRMYXlvdXQoXCJsaXN0XCIpfSAvPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXNwbGF5PVwiZ3JpZFwiIG1sPVwiMTcuN3B4XCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogXCJwcmltYXJ5Lm1haW5cIiB9fSB2YXJpYW50PVwic3VidGl0bGUyXCI+XHJcbiAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogXCIxMC45cHhcIiB9fT5cclxuICAgICAgICAgICAgICB7cGFydGljaXBhbnRzfSBQYXJ0aWNpcGFudHNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8Q2xvc2VJY29uIG9uQ2xpY2s9eygpID0+IHNldExheW91dChcImxpc3RcIil9IC8+XHJcbiAgICAgIDwvVG9vbGJhcj5cclxuICAgIDwvQXBwQmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9