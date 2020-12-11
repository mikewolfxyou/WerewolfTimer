import { combineReducers } from 'redux';

import {
    TIMER_START,
    TIMER_END,
    TIMER_CANCEL,
    TIMER_DECREMENT,
    TIMER_RESET,
    TOGGLE_MODAL,
    TIMER_START_ERROR,
    TIMER_KEY, TIMER_EXTEND, TIMER_CONFIG, TIMER_SET
} from '../actions/actions'

// default speak time 2 minutes 30 seconds: 150 sec
export const DEFAULT_TIMER_VALUE = 150;
export const DEFAULT_EXTEND_VALUE = 60;

export const selectors = {
    value: state => state.talkerTimerApp[TIMER_KEY].value,
    status: state => state.talkerTimerApp[TIMER_KEY].status
};

const initialState = {
    value: DEFAULT_TIMER_VALUE,
    extendValue: DEFAULT_EXTEND_VALUE,
    status: 'stopped',
    presetValue: DEFAULT_TIMER_VALUE
};

function timer(state = initialState, action) {
    switch (action.type) {
        case TIMER_START:
            return {
                ...state,
                status: 'started',
                value: state.value,
            };

        case TIMER_CANCEL:
            return {
                ...state,
                status: 'stopped'
            };

        case TIMER_RESET:
            return {
                ...state,
                status: 'stopped',
                value: state.presetValue,
            };

        case TIMER_END:
            return {
                ...state,
                status: 'stopped',
                value: state.presetValue,
            };

        case TIMER_DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };

        case TIMER_START_ERROR:
            return {
                ...state,
                status: action.payload.message
            };

        case TIMER_EXTEND:
            return {
                ...state,
                value: state.value + state.extendValue
            };

        case TIMER_SET:
            return {
                value: action.talkingTime,
                presetValue: action.talkingTime,
                extendValue: action.extendTime,
                status: 'stopped'
            };
        default:
            return state;
    }
}

function isModalOpen(state = false, action) {
    return (action.type === TOGGLE_MODAL) ? action.isModalOpen : state;
}

function isConfigOpen(state = false, action) {
    return (action.type === TIMER_CONFIG) ? action.isConfigOpen : state;
}

const talkerTimerApp = combineReducers({
    timer,
    isModalOpen,
    isConfigOpen
});

export default talkerTimerApp;