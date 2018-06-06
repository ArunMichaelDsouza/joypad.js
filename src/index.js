// Entry point

import './events';
import loop from './loop';
import Joypad from './Joypad';
import emmitter from './emitter';
import { EVENTS } from './constants';

window.Joypad = Joypad;
loop.start();