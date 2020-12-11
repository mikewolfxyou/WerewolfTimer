import {DEFAULT_EXTEND_VALUE, DEFAULT_TIMER_VALUE} from "../reducers/reducers";

export const TIMER_START = 'TIMER_START';
export const TIMER_DECREMENT = 'TIMER_DECREMENT';
export const TIMER_END = 'TIMER_END';
export const TIMER_CANCEL = 'TIMER_CANCEL';
export const TIMER_RESET = 'TIMER_RESET';
export const TIMER_START_ERROR = 'TIMER_START_ERROR';
export const TIMER_EXTEND = 'TIMER_EXTEND';
export const TIMER_CONFIG = 'TIMER_CONFIG';
export const TIMER_SET = 'TIMER_SET';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const TIMER_KEY = 'timer';

export function startTimer() {
    return {
        type: TIMER_START
    }
}

export function extendTimer(timeInSec) {
    return {
        type: TIMER_EXTEND,
        extendValue: timeInSec
    }
}

export function resetTimer() {
    return {
        type: TIMER_RESET
    }
}

export function endTimer() {
    return {
        type: TIMER_END
    }
}

export function setTimer(talkingTime, extendTime) {
    return {
        type: TIMER_SET,
        talkingTime: talkingTime >= 0 ? talkingTime : DEFAULT_TIMER_VALUE,
        extendTime: extendTime >= 0 ? extendTime : DEFAULT_EXTEND_VALUE
    }
}
export function decrementTimer() {
    return {
        type: TIMER_DECREMENT
    }
}

export function throwTimerStartError(err) {
    return {
        type: TIMER_START_ERROR,
        payload: err,
        error: true
    }
}

export function toggleModal(isModalOpen) {
    return {
        type: TOGGLE_MODAL,
        isModalOpen
    }
}

export function configTimer(isConfigOpen) {
    return {
        type: TIMER_CONFIG,
        isConfigOpen
    }
}