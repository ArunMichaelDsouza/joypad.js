/*
    joypad.js v2.0.1
    Copyright (c) 2019 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/
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
/*! exports provided: EVENTS, STICKS, DIRECTIONS, BUTTON_MAPPING, AXIS_MOVEMENT_THRESHOLD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STICKS\", function() { return STICKS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTON_MAPPING\", function() { return BUTTON_MAPPING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AXIS_MOVEMENT_THRESHOLD\", function() { return AXIS_MOVEMENT_THRESHOLD; });\n// Global constants \n\nconst EVENTS = {\n    CONNECT: {\n        NATIVE: 'gamepadconnected',\n        ALIAS: 'connect'\n    },\n    DISCONNECT: {\n        NATIVE: 'gamepaddisconnected',\n        ALIAS: 'disconnect'\n    },\n    BUTTON_PRESS: {\n        NATIVE: null,\n        ALIAS: 'button_press'\n    },\n    AXIS_MOVEMENT: {\n        NATIVE: null,\n        ALIAS: 'axis_move'\n    }\n};\nconst STICKS = {\n    LEFT: {\n        NAME: 'left_stick',\n        AXES: {\n            X: 0,\n            Y: 1\n        }\n    },\n    RIGHT: {\n        NAME: 'right_stick',\n        AXES: {\n            X: 2,\n            Y: 3\n        }\n    }\n};\nconst DIRECTIONS = {\n    LEFT: 'left',\n    RIGHT: 'right',\n    TOP: 'top',\n    BOTTOM: 'bottom'\n};\nconst BUTTON_MAPPING = {\n    'button_0': 0,\n    'button_1': 1,\n    'button_2': 2,\n    'button_3': 3,\n    'button_4': 4,\n    'button_5': 5,\n    'button_6': 6,\n    'button_7': 7,\n    'button_8': 8,\n    'button_9': 9,\n    'button_10': 10,\n    'button_11': 11,\n    'button_12': 12,\n    'button_13': 13,\n    'button_14': 14,\n    'button_15': 15,\n    'button_16': 16,\n    'button_17': 17\n};\nconst AXIS_MOVEMENT_THRESHOLD = 0.8;\n\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/emitter.js":
/*!************************!*\
  !*** ./src/emitter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Events emitter\n\nconst emitter = {\n    events: {},\n    publish: function (event, data) {\n        if (this.events.hasOwnProperty(event)) {\n            this.events[event].forEach(listener => {\n                return listener(data);\n            });\n        }\n    },\n    subscribe: function (event, listener) {\n        if (!this.events.hasOwnProperty(event)) {\n            this.events[event] = [];\n        }\n        this.events[event].push(listener);\n\n        return {\n            unsubscribe: function () {\n                this.events[event].splice(this.events[event].indexOf(listener), 1);\n            }.bind(this)\n        };\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (emitter);\n\n//# sourceURL=webpack:///./src/emitter.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: listenToButtonEvents, listenToAxisMovements, handleButtonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenToButtonEvents\", function() { return listenToButtonEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenToAxisMovements\", function() { return listenToAxisMovements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleButtonEvent\", function() { return handleButtonEvent; });\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop */ \"./src/loop.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Joypad events\n\n\n\n\n\n\n\nconst initEventListeners = () => {\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].CONNECT.NATIVE, e => {\n        _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].CONNECT.ALIAS, e);\n\n        // Start loop on gamepad connection if not already started\n        if (!_joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loopStarted) {\n            _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loopStarted = true;\n            return _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start();\n        }\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].DISCONNECT.NATIVE, e => {\n        _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].DISCONNECT.ALIAS, e);\n\n        // Remove instance and reset events on gamepad disconnection\n        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(e.gamepad.index);\n        _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonEvents.joypad[e.gamepad.index] = null;\n\n        // Stop loop if all gamepads have been disconnected\n        if (!Object.keys(_joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].instances).length) {\n            _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loopStarted = false;\n            return _loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].stop(_loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id);\n        }\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, e => {\n        return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, e);\n    });\n    window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, e => {\n        return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, e);\n    });\n};\nconst listenToButtonEvents = gamepad => {\n    gamepad.buttons.forEach((button, index) => {\n        const { customButtonMapping } = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].settings;\n        const buttonMapping = customButtonMapping ? customButtonMapping : _constants__WEBPACK_IMPORTED_MODULE_3__[\"BUTTON_MAPPING\"];\n        const keys = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"findButtonMapping\"])(index, buttonMapping);\n        const { buttonEvents } = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n        if (keys && keys.length) {\n            keys.forEach(key => {\n\n                // If button is pressed then set press status of button\n                if (button.pressed) {\n                    if (!buttonEvents.joypad[gamepad.index][key]) {\n                        buttonEvents.joypad[gamepad.index][key] = {\n                            pressed: true,\n                            hold: false,\n                            released: false\n                        };\n                    }\n\n                    // Set button event data\n                    buttonEvents.joypad[gamepad.index][key].button = button;\n                    buttonEvents.joypad[gamepad.index][key].index = index;\n                    buttonEvents.joypad[gamepad.index][key].gamepad = gamepad;\n                }\n\n                // If button is not pressed then set release status of button\n                else if (!button.pressed && buttonEvents.joypad[gamepad.index][key]) {\n                    buttonEvents.joypad[gamepad.index][key].released = true;\n                    buttonEvents.joypad[gamepad.index][key].hold = false;\n                }\n            });\n        }\n    });\n};\nconst listenToAxisMovements = gamepad => {\n    const axisMovementEvent = eventData => new CustomEvent(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, { detail: eventData });\n    const { axisMovementThreshold } = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"].settings;\n    const { axes } = gamepad;\n    const totalAxisIndexes = axes.length;\n    const totalSticks = totalAxisIndexes / 2;\n\n    axes.forEach((axis, index) => {\n        if (Math.abs(axis) > axisMovementThreshold) {\n            let stickMoved = null;\n            let directionOfMovement = null;\n            let axisMovementValue = axis;\n\n            if (index < totalSticks) {\n                stickMoved = _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.NAME;\n            } else {\n                stickMoved = _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.NAME;\n            }\n\n            if (index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.AXES.X || index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.AXES.X) {\n                directionOfMovement = axis < 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].LEFT : _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].RIGHT;\n            }\n            if (index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].LEFT.AXES.Y || index === _constants__WEBPACK_IMPORTED_MODULE_3__[\"STICKS\"].RIGHT.AXES.Y) {\n                directionOfMovement = axis < 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].TOP : _constants__WEBPACK_IMPORTED_MODULE_3__[\"DIRECTIONS\"].BOTTOM;\n            }\n\n            const eventData = { gamepad, totalSticks, stickMoved, directionOfMovement, axisMovementValue, axis: index };\n            return window.dispatchEvent(axisMovementEvent(eventData));\n        }\n    });\n};\nconst handleButtonEvent = (buttonName, buttonEvents) => {\n    // Fire button press event\n    if (buttonEvents[buttonName].pressed) {\n        const buttonPressEvent = eventData => new CustomEvent(_constants__WEBPACK_IMPORTED_MODULE_3__[\"EVENTS\"].BUTTON_PRESS.ALIAS, { detail: eventData });\n        const { index, gamepad } = buttonEvents[buttonName];\n        const eventData = {\n            buttonName,\n            button: buttonEvents[buttonName].button,\n            index,\n            gamepad\n        };\n        window.dispatchEvent(buttonPressEvent(eventData));\n\n        // Reset button usage flags\n        buttonEvents[buttonName].pressed = false;\n        buttonEvents[buttonName].hold = true;\n    }\n\n    // Button being held\n    else if (buttonEvents[buttonName].hold) { }\n\n    // Button being released\n    else if (buttonEvents[buttonName].released) {\n        delete buttonEvents[buttonName];\n    }\n};\n\ninitEventListeners();\n\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: log, findButtonMapping, hasVibrationSupport, hasGamepadApiSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findButtonMapping\", function() { return findButtonMapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasVibrationSupport\", function() { return hasVibrationSupport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasGamepadApiSupport\", function() { return hasGamepadApiSupport; });\n// Helper functions\n\nconst log = message => {\n    if (console.warn && typeof console.warn === 'function') {\n        console.warn(message);\n    } else {\n        console.log(message);\n    }\n};\nconst findButtonMapping = (index, mapping) => {\n    let results = [];\n\n    Object.keys(mapping).forEach(key => {\n        if (mapping[key] === index) {\n            results.push(key);\n        } else if (Array.isArray(mapping[key]) && mapping[key].indexOf(index) !== -1) {\n            results.push(key);\n        }\n    });\n\n    return results;\n};\nconst hasVibrationSupport = vibrationActuator => {\n    return vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function' ? true : false;\n};\nconst hasGamepadApiSupport = () => {\n    return window.navigator.getGamepads && typeof window.navigator.getGamepads === 'function' ? true : false;\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Entry point\n\n\n\n\n\nif (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasGamepadApiSupport\"])()) {\n    window.joypad = _joypad__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n} else {\n    window.joypad = {};\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"log\"])('Your browser does not support the Gamepad API - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/joypad.js":
/*!***********************!*\
  !*** ./src/joypad.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"./src/emitter.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Joypad instance\n\n\n\n\n\nconst joypad = {\n    loopStarted: false,\n    instances: {},\n    buttonEvents: {\n        joypad: []\n    },\n    settings: {\n        axisMovementThreshold: _constants__WEBPACK_IMPORTED_MODULE_1__[\"AXIS_MOVEMENT_THRESHOLD\"]\n    },\n    remove: function (index) {\n        return delete this.instances[index];\n    },\n    on: function (event, callback) {\n        switch (event) {\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].BUTTON_PRESS.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].BUTTON_PRESS.ALIAS, callback);\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS:\n                _emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(_constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].AXIS_MOVEMENT.ALIAS, callback);\n                break;\n        }\n    },\n    vibrate: function (gamepadInstance, options) {\n        const { vibrationActuator } = gamepadInstance;\n        const vibrationSettings = options ? options : this.settings.vibration;\n\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasVibrationSupport\"])(vibrationActuator)) {\n            const { type } = vibrationActuator;\n\n            return gamepadInstance.vibrationActuator.playEffect(type, vibrationSettings);\n        } else {\n            Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"log\"])('No vibration actuator interface found - https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator');\n        }\n    },\n    set: function (settings) {\n        const { axisMovementThreshold, vibration, customButtonMapping } = settings;\n        const parsedValue = parseFloat(axisMovementThreshold);\n\n        if (!isNaN(parsedValue)) {\n            this.settings.axisMovementThreshold = parsedValue;\n        }\n        this.settings.vibration = vibration;\n        this.settings.customButtonMapping = customButtonMapping;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joypad);\n\n\n//# sourceURL=webpack:///./src/joypad.js?");

/***/ }),

/***/ "./src/loop.js":
/*!*********************!*\
  !*** ./src/loop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _joypad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./joypad */ \"./src/joypad.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n// Main loop\n\n\n\n\nconst loop = {\n    id: null,\n    start: function () {\n        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;\n        const { buttonEvents } = _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        let gamepads = window.navigator.getGamepads();\n        gamepads = Array.prototype.slice.call(gamepads);\n\n        // Loop all the gamepads on each frame\n            gamepads.forEach((gamepad, index) => {\n                if (gamepad) {\n                    // Initialise joypad instance events if not present\n                    if (!buttonEvents.joypad[index]) {\n                        buttonEvents.joypad[index] = {};\n                    }\n\n                    // Update gamepad instance data\n                    _joypad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instances[index] = gamepad;\n\n                    // Listen to button press events\n                    Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"listenToButtonEvents\"])(gamepad);\n\n                    // Listen to axis movement events\n                    Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"listenToAxisMovements\"])(gamepad);\n                }\n            });\n\n        // Handle button events on each frame\n        buttonEvents.joypad.forEach(events => {\n            if (events) {\n                Object.keys(events).forEach(key => {\n                    Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"handleButtonEvent\"])(key, events);\n                });\n            }\n        });\n\n        // Set loop start flag and recursively call the start function on each frame\n        this.id = requestAnimationFrame(this.start.bind(this));\n    },\n    stop: function (id) {\n        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;\n\n        return cancelAnimationFrame(id);\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loop);\n\n//# sourceURL=webpack:///./src/loop.js?");

/***/ })

/******/ });