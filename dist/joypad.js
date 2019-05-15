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
/*! exports provided: EVENTS, BUTTON_PRESS_THRESHOLD, AXIS_MOVEMENT_THRESHOLD, STICKS, DIRECTIONS, KEY_MAPPING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON_PRESS_THRESHOLD\", function() { return BUTTON_PRESS_THRESHOLD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AXIS_MOVEMENT_THRESHOLD\", function() { return AXIS_MOVEMENT_THRESHOLD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STICKS\", function() { return STICKS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_MAPPING\", function() { return KEY_MAPPING; });\n// Global constants \n\nconst EVENTS = {\n    CONNECT: {\n        NATIVE: 'gamepadconnected',\n        ALIAS: 'connect'\n    },\n    DISCONNECT: {\n        NATIVE: 'gamepaddisconnected',\n        ALIAS: 'disconnect'\n    },\n    BUTTON_PRESS: {\n        NATIVE: null,\n        ALIAS: 'button_press'\n    },\n    AXIS_MOVEMENT: {\n        NATIVE: null,\n        ALIAS: 'axis_move'\n    }\n};\nconst BUTTON_PRESS_THRESHOLD = 150;\nconst AXIS_MOVEMENT_THRESHOLD = 0.8;\nconst STICKS = {\n    LEFT: {\n        NAME: 'left_stick',\n        AXES: {\n            X: 0,\n            Y: 1\n        }\n    },\n    RIGHT: {\n        NAME: 'right_stick',\n        AXES: {\n            X: 2,\n            Y: 3\n        }\n    }\n};\nconst DIRECTIONS = {\n    LEFT: 'left',\n    RIGHT: 'right',\n    TOP: 'top',\n    BOTTOM: 'bottom'\n};\nconst KEY_MAPPING = {\n    'button_1': 0,\n    'button_2': 1,\n    'button_3': 2,\n    'button_4': 3,\n    'shoulder_left_1': 4,\n    'shoulder_right_1': 5,\n    'shoulder_left_2': 6,\n    'shoulder_right_2': 7,\n    'select': 8,\n    'start': 9,\n    'left_stick': 10,\n    'right_right': 11,\n    'd_pad_up': 12,\n    'd_pad_down': 13,\n    'd_pad_left': 14,\n    'd_pad_right': 15,\n    'vendor': 16,\n    'vendor': 17\n};\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/emitter.js":
/*!************************!*\
  !*** ./src/emitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Pub-sub module\n\nconst emmitter = {\n    events: {},\n    publish: function (event, data) {\n        if (this.events.hasOwnProperty(event)) {\n            this.events[event].forEach(listener => {\n                return listener(data);\n            });\n        }\n    },\n    subscribe: function (event, listener) {\n        if (!this.events.hasOwnProperty(event)) {\n            this.events[event] = [];\n        }\n        this.events[event].push(listener);\n\n        return {\n            unsubscribe: function () {\n                this.events[event].splice(this.events[event].indexOf(listener), 1);\n            }.bind(this)\n        };\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (emmitter);\n\n//# sourceURL=webpack:///./src/emitter.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: listenToButtonEvents, listenToAxisMovements, handleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenToButtonEvents\", function() { return listenToButtonEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenToAxisMovements\", function() { return listenToAxisMovements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEvent\", function() { return handleEvent; });\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop */ \"./src/loop.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Joypad events\n\n\n\n\n\n\n\nconst initEventListeners = () => {\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].CONNECT.NATIVE, e => {\n        _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].CONNECT.ALIAS, e);\n        if (!_joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loopStarted) {\n            return _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start();\n        }\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].DISCONNECT.NATIVE, e => {\n        _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].DISCONNECT.ALIAS, e);\n        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(e.gamepad.index);\n        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[e.gamepad.index] = null;\n        if (!Object.keys(_joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].instances).length) {\n            _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loopStarted = false;\n            return _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop(_loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id);\n        }\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, e => {\n        return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, e);\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, e => {\n        return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, e);\n    });\n};\nconst handleEvent = (key, events, player) => {\n    if (events[key].pressed) {\n        console.log('press');\n        // this.trigger('press', key, events[key].value, player);\n        events[key].pressed = false;\n        events[key].hold = true;\n    } else if (events[key].hold) {\n        // this.trigger('hold', key, events[key].value, player);\n    } else if (events[key].released) {\n        // this.trigger('release', key, events[key].value, player);\n        delete events[key];\n    }\n};\nconst listenToButtonEvents = id => {\n    const buttonPressEvent = eventData => new CustomEvent(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, { detail: eventData });\n\n    return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"loopGamepadInstances\"])(gamepad => {\n        gamepad.buttons.forEach((button, index) => {\n            const keys = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"findKeyMapping\"])(index, _constants__WEBPACK_IMPORTED_MODULE_3__[\"KEY_MAPPING\"]);\n\n            if (keys) {\n                keys.forEach(key => {\n                    if (button.pressed) {\n                        if (!_joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key]) {\n                            _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key] = {\n                                pressed: true,\n                                hold: false,\n                                released: false,\n                                player: gamepad.index\n                            };\n                        }\n                        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key].value = button.value;\n                    } else if (!button.pressed && _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key]) {\n                        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key].released = true;\n                        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.joypad[gamepad.index][key].hold = false;\n                    }\n                });\n            }\n\n            // if (button.pressed) {\n            //     const eventData = { button, index, gamepad };\n\n            //     window.dispatchEvent(buttonPressEvent(eventData));\n            //     return loop.restart(id);\n            // }\n        });\n    });\n};\nconst listenToAxisMovements = () => {\n    const axisMovementEvent = eventData => new CustomEvent(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, { detail: eventData });\n    const { axisMovementThreshold } = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].settings;\n\n    return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"loopGamepadInstances\"])(gamepad => {\n        const { axes } = gamepad;\n        const totalAxisIndexes = axes.length;\n        const totalSticks = totalAxisIndexes / 2;\n\n        axes.forEach((axis, index) => {\n            if (Math.abs(axis) > axisMovementThreshold) {\n                let stickMoved = null;\n                let directionOfMovement = null;\n                let axisMovementValue = axis;\n\n                if (index < totalSticks) {\n                    stickMoved = _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.NAME;\n                } else {\n                    stickMoved = _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.NAME;\n                }\n\n                if (index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.AXES.X || index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.AXES.X) {\n                    directionOfMovement = axis < 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].LEFT : _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].RIGHT;\n                }\n                if (index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.AXES.Y || index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.AXES.Y) {\n                    directionOfMovement = axis < 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].TOP : _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].BOTTOM;\n                }\n\n                const eventData = { gamepad, totalSticks, stickMoved, directionOfMovement, axisMovementValue };\n                return window.dispatchEvent(axisMovementEvent(eventData));\n            }\n        });\n    });\n};\n\ninitEventListeners();\n\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: loopGamepadInstances, log, findKeyMapping, hasVibrationSupport, hasGamepadApiSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loopGamepadInstances\", function() { return loopGamepadInstances; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findKeyMapping\", function() { return findKeyMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasVibrationSupport\", function() { return hasVibrationSupport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasGamepadApiSupport\", function() { return hasGamepadApiSupport; });\n// Helper functions\n\nconst loopGamepadInstances = callback => {\n    const gamepads = window.navigator.getGamepads();\n\n    if (Object.keys(gamepads).length) {\n        Object.keys(gamepads).forEach(index => {\n            const gamepad = gamepads[index];\n\n            if (gamepad) {\n                return callback(gamepad, index);\n            }\n        });\n    }\n};\nconst log = message => {\n    if (console.warn && typeof console.warn === 'function') {\n        console.warn(message);\n    } else {\n        console.log(message);\n    }\n};\nconst findKeyMapping = (index, mapping) => {\n    let results = [];\n\n    Object.keys(mapping).forEach(function (key) {\n        if (mapping[key] === index) {\n            results.push(key);\n        } else if (Array.isArray(mapping[key]) && mapping[key].indexOf(index) !== -1) {\n            results.push(key);\n        }\n    });\n\n    return results;\n};\nconst hasVibrationSupport = vibrationActuator => vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function';\nconst hasGamepadApiSupport = () => window.navigator.getGamepads && typeof window.navigator.getGamepads === 'function';\n\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Entry point\n\n\n\n\n\nif (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasGamepadApiSupport\"])()) {\n    window.joypad = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n} else {\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"log\"])('Your browser does not support the Gamepad API - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/joypad.js":
/*!***********************!*\
  !*** ./src/joypad.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Joypad instance\n\n\n\n\n\nconst joypad = {\n    loopStarted: false,\n    instances: {},\n    events: { \n        joypad: [] \n    },\n    settings: {\n        buttonPressThreshold: _constants__WEBPACK_IMPORTED_MODULE_1__[\"BUTTON_PRESS_THRESHOLD\"],\n        axisMovementThreshold: _constants__WEBPACK_IMPORTED_MODULE_1__[\"AXIS_MOVEMENT_THRESHOLD\"]\n    },\n    remove: function (index) {\n        return delete this.instances[index];\n    },\n    on: function (event, callback) {\n        switch (event) {\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].BUTTON_PRESS.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].BUTTON_PRESS.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, callback);\n                break;\n        }\n    },\n    vibrate: function (gamepadInstance, options) {\n        const { vibrationActuator } = gamepadInstance;\n\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasVibrationSupport\"])(vibrationActuator)) {\n            const { type } = vibrationActuator;\n\n            return gamepadInstance.vibrationActuator.playEffect(type, options);\n        } else {\n            Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"log\"])('No vibration actuator interface found - https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator');\n        }\n    },\n    set: function (settings) {\n        const { buttonPressThreshold, axisMovementThreshold } = settings;\n\n        this.settings.buttonPressThreshold = buttonPressThreshold;\n        this.settings.axisMovementThreshold = axisMovementThreshold;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joypad);\n\n\n//# sourceURL=webpack:///./src/joypad.js?");

/***/ }),

/***/ "./src/loop.js":
/*!*********************!*\
  !*** ./src/loop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Main loop\n\n\n\n\n\nconst loop = {\n    id: null,\n    updateGamepadInstances: function () {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"loopGamepadInstances\"])((gamepad, index) => {\n            return _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instances[index] = gamepad;\n        });\n    },\n    start: function () {\n        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;\n        this.id = requestAnimationFrame(this.start.bind(this));\n        _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loopStarted = true;\n\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"loopGamepadInstances\"])((gamepad, index) => {\n            if (!_joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events.joypad[index]) {\n                _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events.joypad[index] = {};\n            }\n        });\n        this.updateGamepadInstances();\n        Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"listenToButtonEvents\"])(this.id);\n        Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"listenToAxisMovements\"])();\n\n        _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].events.joypad.forEach((gamepad, player) => {\n            if (gamepad) {\n                Object.keys(gamepad).forEach(key => {\n                    Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"handleEvent\"])(key, gamepad, player);\n                });\n            }\n        });\n    },\n    stop: function (id) {\n        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;\n\n        return cancelAnimationFrame(id);\n    },\n    restart: function (id) {\n        const { buttonPressThreshold } = _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].settings;\n\n        this.stop(id);\n        return setTimeout(() => { this.start(); }, buttonPressThreshold);\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loop);\n\n//# sourceURL=webpack:///./src/loop.js?");

/***/ })

/******/ });