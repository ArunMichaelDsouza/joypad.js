<img src="https://github.com/ArunMichaelDsouza/joypad.js/blob/master/icon.png?raw=true" width="250" height="auto" alt="joypad.js icon"/>

# joypad.js
JavaScript library that lets you connect and use various gaming controllers with browsers that support the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).
> Less than 5KB in size with zero dependencies and support for button press, axis movement events and vibration play effect.

<br/>

## Installation

#### via npm

```bash
npm install joypad.js --save
```

#### via yarn

```bash
yarn add joypad.js
```

Or, [download](https://github.com/ArunMichaelDsouza/joypad.js/releases) the latest version and include ``joypad.min.js`` to your project.

<br/>

## Usage

Once joypad.js is installed and included in your project it becomes available on the global scope - ``window.joypad``. 

If you're working with ``ES6`` modules you can include the library as follows -

```javascript
import * as joypad from 'joypad.js';
```

Once set up you can start listening to joypad.js events like so -

```javascript
joypad.on('connect', e => {
    const { id } = e.gamepad;

    console.log(`${id} connected!`);
});
```

<br/>

## API

### ``joypad.instances {object}``

Lists all the connected [Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) instances. Each instance defines an individual gamepad or controller with access to information such as button presses, axis positions, id, index etc.

### ``joypad.on(event, callback) {method}``

Used to attach event listeners to joypad.js events. It takes 2 parameters, an ``event`` name (which is a string) and a ``callback`` function which is fired whenever the specified event is triggered. View all of the supported events [here](#user-content-events).

### ``joypad.set({settings}) {method}``

Used to set the global settings for joypad.js such as the threshold for axis movement and options for vibration play effect. It expects a single parameter, which is an object with the required setting values to be applied.

### ``joypad.settings {object}``

Lists all the global settings applied to joypad.js.

### ``joypad.vibrate(gamepad, options) {method}``

Triggers the vibration play effect for a particular ``gamepad`` (which is an instance of [Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad)). The ``options`` parameter needs to be an object with the required vibration setting values to be applied.

<br/>

## Events