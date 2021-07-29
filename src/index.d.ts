export interface ButtonPressEvent extends CustomEvent {
  detail: {
    button: GamepadButton
    buttonName: string
    gamepad: Gamepad
    /**
     * @case 0: A
     * @case 1: B
     * @case 2: X
     * @case 3: Y
     * @case 4: LT
     * @case 5: RT
     * @case 6: LB
     * @case 7: RB
     * @case 8: SELECT
     * @case 9: START
     * @case 10: Left stick pressed button
     * @case 11: Right stick pressed button
     * @case 12: D-pad up
     * @case 13: D-pad down
     * @case 14: D-pad left
     * @case 15: D-pad right
     * @case 16: Vendor button 1
     * @case 17: Vendor button 2
     */
    index: number
  }
}

export type DirectionOfMovement = 'top' | 'bottom' | 'left' | 'right'
export type StickMoved = 'left_stick' | 'right_stick'

export interface AxisMoveEvent extends CustomEvent {
  detail: {
    /**
     * @case 0: Horizontal axis for left stick (negative left/positive right)
     * @case 1: Vertical axis for left stick (negative up/positive down)
     * @case 2: Horizontal axis for right stick (negative left/positive right)
     * @case 3: Vertical axis for right stick (negative up/positive down)
     */
    axis: number
    axisMovementValue: number
    directionOfMovement: DirectionOfMovement
    gamepad: Gamepad
    stickMoved: StickMoved
    totalSticks: number
  }
}

export type JoypadEventName = 'connect' | 'disconnect' | 'button_press' | 'axis_move'

export type JoypadEvent<T> = T extends 'connect' | 'disconnect'
  ? GamepadEvent
  : T extends 'button_press'
  ? ButtonPressEvent
  : T extends 'axis_move'
  ? AxisMoveEvent
  : CustomEvent

export interface JoypadSettings {
  vibration?: {
    startDelay: 500,
    duration: 3000,
    weakMagnitude: 1,
    strongMagnitude: 1
  }
  axisMovementThreshold?: 0.3
  customButtonMapping?: () => any
}

export type Joypad = {
  on: <T extends JoypadEventName>(event: T, cb: (evt: JoypadEvent<T>) => void) => void
  set: (set: JoypadSettings) => void
  vibrate: (gamepad: Gamepad, options: JoypadSettings['vibration']) => void
  settings: JoypadSettings
  instances: Gamepad[]
}

declare const joypad: Joypad
export default joypad