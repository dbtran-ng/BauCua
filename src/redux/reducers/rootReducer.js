import { combineReducers } from 'redux';
import DemoReduxReducers from './DemoReduxReducers'
import GameBauCuaReducer from './GameBauCuaReducer'
export const rootReducer = combineReducers({
    DemoReduxReducers,
    GameBauCuaReducer
})