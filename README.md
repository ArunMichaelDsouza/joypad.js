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

Once joypad.js is installed and included in your project it becomes available on the global window scope - ``window.joypad``.

```javascript
console.log(window.joypad); // {loopStarted: false, instances: {…}, buttonEvents: {…}, settings: {…}, remove: ƒ, …}
```

If you're working with ``ES6`` modules you can include the library as follows -

```javascript
import * as joypad from 'joypad.js';
```

Once set up you can start listening to joypad events like so -

```javascript
joypad.on('connect', e => {
    const { id } = e.gamepad;

    console.log(`${id} connected!`);
});
```

<br/>

## API