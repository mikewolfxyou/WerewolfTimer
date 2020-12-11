import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import logic from './rootLogic';
import talkerTimerApp from './reducers/reducers';


const logicMiddleware = createLogicMiddleware(logic);

const middleware = applyMiddleware(
    logicMiddleware
);

export default function configureStore() {
    return createStore(combineReducers({
        talkerTimerApp
    }), middleware);
}