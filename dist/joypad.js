/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n// Global constants \n\nvar EVENTS = {\n    NATIVE: {\n        CONNECT: 'gamepadconnected',\n        DISCONNECT: 'gamepaddisconnected'\n    },\n    OTHER: {\n        CONNECT: 'connect',\n        DISCONNECT: 'disconnect',\n        BUTTON_PRESS: 'press'\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/emitter.js":
/*!************************!*\
  !*** ./src/emitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Pub-sub module\n\nvar emmitter = {\n    events: {},\n    publish: function (event, data) {\n        if (this.events.hasOwnProperty(event)) {\n            this.events[event].forEach(function (listener) {\n                listener(data);\n            });\n        }\n    },\n    subscribe: function (event, listener) {\n        if (!this.events.hasOwnProperty(event)) {\n            this.events[event] = [];\n        }\n        this.events[event].push(listener);\n\n        return {\n            unsubscribe: function () {\n                this.events[event].splice(this.events[event].indexOf(listener), 1);\n            }.bind(this)\n        };\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (emmitter);\n\n//# sourceURL=webpack:///./src/emitter.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n// Joypad events\n\n\n\n\nwindow.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NATIVE.CONNECT, function (e) {\n    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.CONNECT, e);\n});\n\nwindow.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NATIVE.DISCONNECT, function (e) {\n    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.DISCONNECT, e);\n});\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n// Entry point\n\n\n\n\nwindow.joypad = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/joypad.js":
/*!***********************!*\
  !*** ./src/joypad.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop */ \"./src/loop.js\");\n// Joypad instance\n\n\n\n\n\nvar joypad = {\n    on: function (event, cb) {\n        switch (event) {\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NATIVE.CONNECT:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.CONNECT, cb);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NATIVE.DISCONNECT:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.DISCONNECT, cb);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.BUTTON_PRESS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.BUTTON_PRESS, cb);\n                break;\n        }\n    },\n    stop: function () {\n        _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(_loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id);\n    },\n    start: function () {\n        _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start();\n    }.call()\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joypad);\n\n//# sourceURL=webpack:///./src/joypad.js?");

/***/ }),

/***/ "./src/loop.js":
/*!*********************!*\
  !*** ./src/loop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n// Main loop\n\n\n\n\nvar loop = {\n    id: null,\n    start: function () {\n        this.id = window.requestAnimationFrame(this.start.bind(this));\n        if (window.navigator.getGamepads()[0]) {\n            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;\n            if (pressed) {\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].OTHER.BUTTON_PRESS, pressed);\n            }\n        }\n    },\n    cancel: function (id) {\n        window.cancelAnimationFrame(id);\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loop);\n\n//# sourceURL=webpack:///./src/loop.js?");

/***/ })

/******/ });