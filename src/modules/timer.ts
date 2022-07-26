import { ref } from 'vue'
import { SECOND_IN_MILLISECONDS, MINUTE_IN_MILLISECONDS } from '../constants'

export default class Timer {
  private _time: number
  private _seconds
  private _minutes
  private _interval: any
  private _addZero
  private _showMainMenu

  constructor() {
    this._time = 0
    this._seconds = ref(0)
    this._minutes = ref(0)
    this._addZero = ref(false)
    this._showMainMenu = ref(true)
  }

  startTimer(time: number) {
    this._time = time
    this._calculateTime()
    this._interval = setInterval(
      this._calculateTime.bind(this),
      SECOND_IN_MILLISECONDS
    )
    this._showMainMenu.value = false
  }

  private _calculateTime() {
    this._countdown()
    if (this._time !== 0) {
      this._getSeconds()
      this._getMinutes()
    }
  }

  private _countdown() {
    this._time === 0 ? (this._time = 0) : (this._time -= SECOND_IN_MILLISECONDS)
    if (this._time === 0) {
      clearInterval(this._interval)
      this._seconds.value = 0
      this._showMainMenu.value = true
    }
  }

  private _getSeconds() {
    this._seconds.value -= 1
    if (this._seconds.value < 0) {
      this._seconds.value = 59
    }
    this._seconds.value < 10
      ? (this._addZero.value = true)
      : (this._addZero.value = false)
  }

  private _getMinutes() {
    this._minutes.value = Math.floor(this._time / MINUTE_IN_MILLISECONDS)
  }

  get showMainMenu() {
    return this._showMainMenu.value
  }

  get mins() {
    return this._minutes.value
  }

  get secs() {
    return this._seconds.value
  }

  get addZero() {
    return this._addZero.value
  }
}
