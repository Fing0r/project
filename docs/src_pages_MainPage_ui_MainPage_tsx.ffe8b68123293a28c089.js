"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var shared_ui_ButtonError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/ButtonError */ "./src/shared/ui/ButtonError/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var MainPage = function MainPage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('main').t;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [t('Главная'), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_ButtonError__WEBPACK_IMPORTED_MODULE_1__.ButtonError, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/ButtonError/ui/ButtonError.tsx":
/*!******************************************************!*\
  !*** ./src/shared/ui/ButtonError/ui/ButtonError.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonError": () => (/* binding */ ButtonError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var ButtonError = function ButtonError() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showError = _a[0],
      setShowError = _a[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (showError) {
      throw new Error();
    }
  }, [showError]);

  var handleError = function handleError() {
    setShowError(true);
  };

  return (// eslint-disable-next-line i18next/no-literal-string
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, __assign({
      onClick: handleError
    }, {
      children: "\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443"
    }))
  );
};



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/shared/ui/ButtonError/index.ts":
/*!********************************************!*\
  !*** ./src/shared/ui/ButtonError/index.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonError": () => (/* reexport safe */ _ui_ButtonError__WEBPACK_IMPORTED_MODULE_0__.ButtonError)
/* harmony export */ });
/* harmony import */ var _ui_ButtonError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ButtonError */ "./src/shared/ui/ButtonError/ui/ButtonError.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC5mZmU4YjY4MTIzMjkzYTI4YzA4OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQUlNLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7RUFDdkIsSUFBSUMsQ0FBQyxHQUFHSCw2REFBYyxDQUFDLE1BQUQsQ0FBZCxDQUF1QkcsQ0FBL0I7RUFDQSxPQUFRSix1REFBSyxDQUFDLEtBQUQsRUFBUTtJQUFFSyxRQUFRLEVBQUUsQ0FBQ0QsQ0FBQyxDQUFDLFNBQUQsQ0FBRixFQUFlTixzREFBSSxDQUFDSSw4REFBRCxFQUFjLEVBQWQsQ0FBbkI7RUFBWixDQUFSLENBQWI7QUFDSCxDQUhEOztBQUlBLGlFQUFlQyxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFJRyxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBZCxJQUEyQixZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixVQUFTSixDQUFULEVBQVk7SUFDcEMsS0FBSyxJQUFJSyxDQUFKLEVBQU9DLENBQUMsR0FBRyxDQUFYLEVBQWNDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFqQyxFQUF5Q0gsQ0FBQyxHQUFHQyxDQUE3QyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUQsQ0FBYjs7TUFDQSxLQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtRQUFpQixJQUFJRixNQUFNLENBQUNRLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFDYlYsQ0FBQyxDQUFDVSxDQUFELENBQUQsR0FBT0wsQ0FBQyxDQUFDSyxDQUFELENBQVI7TUFESjtJQUVIOztJQUNELE9BQU9WLENBQVA7RUFDSCxDQVBEOztFQVFBLE9BQU9FLFFBQVEsQ0FBQ1ksS0FBVCxDQUFlLElBQWYsRUFBcUJOLFNBQXJCLENBQVA7QUFDSCxDQVZEOztBQVdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJVixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0VBQzFCLElBQUlvQixFQUFFLEdBQUdGLCtDQUFRLENBQUMsS0FBRCxDQUFqQjtFQUFBLElBQTBCRyxTQUFTLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQXhDO0VBQUEsSUFBNkNFLFlBQVksR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBOUQ7O0VBQ0FILGdEQUFTLENBQUMsWUFBWTtJQUNsQixJQUFJSSxTQUFKLEVBQWU7TUFDWCxNQUFNLElBQUlFLEtBQUosRUFBTjtJQUNIO0VBQ0osQ0FKUSxFQUlOLENBQUNGLFNBQUQsQ0FKTSxDQUFUOztFQUtBLElBQUlHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7SUFDMUJGLFlBQVksQ0FBQyxJQUFELENBQVo7RUFDSCxDQUZEOztFQUdBLE9BQ0E7SUFDQTFCLHNEQUFJLENBQUN1QiwyREFBRCxFQUFTZixRQUFRLENBQUM7TUFBRXFCLE9BQU8sRUFBRUQ7SUFBWCxDQUFELEVBQTJCO01BQUVyQixRQUFRLEVBQUU7SUFBWixDQUEzQixDQUFqQjtFQUZKO0FBR0gsQ0FiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9wYWdlcy9NYWluUGFnZS91aS9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zaGFyZWQvdWkvQnV0dG9uRXJyb3IvdWkvQnV0dG9uRXJyb3IudHN4Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvc2hhcmVkL3VpL0J1dHRvbkVycm9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IEJ1dHRvbkVycm9yIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbkVycm9yJztcclxudmFyIE1haW5QYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbignbWFpbicpLnQ7XHJcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFt0KCfQk9C70LDQstC90LDRjycpLCBfanN4KEJ1dHRvbkVycm9yLCB7fSldIH0pKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nO1xyXG52YXIgQnV0dG9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIHNob3dFcnJvciA9IF9hWzBdLCBzZXRTaG93RXJyb3IgPSBfYVsxXTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNob3dFcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2hvd0Vycm9yXSk7XHJcbiAgICB2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0U2hvd0Vycm9yKHRydWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaTE4bmV4dC9uby1saXRlcmFsLXN0cmluZ1xyXG4gICAgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogaGFuZGxlRXJyb3IgfSwgeyBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQ0QlxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0VcXHUwNDQ4XFx1MDQzOFxcdTA0MzFcXHUwNDNBXFx1MDQ0M1wiIH0pKSk7XHJcbn07XHJcbmV4cG9ydCB7IEJ1dHRvbkVycm9yIH07XHJcbiIsImV4cG9ydCB7IEJ1dHRvbkVycm9yIH0gZnJvbSAnLi91aS9CdXR0b25FcnJvcic7XHJcbiJdLCJuYW1lcyI6WyJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwidXNlVHJhbnNsYXRpb24iLCJCdXR0b25FcnJvciIsIk1haW5QYWdlIiwidCIsImNoaWxkcmVuIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIl9hIiwic2hvd0Vycm9yIiwic2V0U2hvd0Vycm9yIiwiRXJyb3IiLCJoYW5kbGVFcnJvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9