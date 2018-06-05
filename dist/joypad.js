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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n// Global constants \n\nvar EVENTS = {\n    GAMEPAD_CONNECT: 'gamepadconnected',\n    GAMEPAD_DISCONNECT: 'gamepaddisconnected'\n};\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n// Joypad events\n\n\n\n\nwindow.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].GAMEPAD_CONNECT, function (e) {\n    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].GAMEPAD_CONNECT, e);\n});\n\nwindow.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].GAMEPAD_DISCONNECT, function (e) {\n    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].GAMEPAD_DISCONNECT, e);\n});\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\n; (function (w) {\n    if (w.navigator.getGamepads) {\n        console.log(w.navigator.getGamepads());\n\n        function Joypad() {\n            this.joypads = [];\n        }\n\n        Joypad.prototype.on = function (event, cb) {\n            switch (event) {\n                case 'connect':\n                    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('gamepadconnected', cb);\n                    break;\n                case 'disconnect':\n                    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('gamepaddisconnected', cb);\n                    break;\n                case 'gamepadpress':\n                    _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('gamepadpress', cb);\n                    break;\n            }\n        };\n\n        window.main = function () {\n            window.requestAnimationFrame(main);\n            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;\n            if (pressed) {\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('gamepadpress', pressed);\n            }\n        };\n\n        main();\n\n        var joypad = new Joypad();\n\n        joypad.on('connect', function (e) {\n            console.log(e.gamepad);\n            window.g = e.gamepad;\n        });\n        joypad.on('disconnect', function (e) {\n            console.log(e);\n        });\n        joypad.on('gamepadpress', function (e) {\n            console.log(e);\n        });\n    }\n})(window);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });