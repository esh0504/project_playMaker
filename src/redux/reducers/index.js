import { MARKERCLICK } from '../actions/index';
import { combineReducers } from 'redux';

const counterInitialState = { isLogin: false, marker_clicked: false };

const markerClick = (state = counterInitialState, action) => {
    switch (action.type) {
        case MARKERCLICK:
            return state = {
                ...state,
                marker_clicked : !state.marker_clicked
            }
        default: return state;
    }
}


export const reducer = combineReducers({ markerClick });

