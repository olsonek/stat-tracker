import initialState, { AppState } from './initialState';
import { CountersReducer } from './Counters';
import { CountersActionTypes, Action } from '../actions';

const RootReducer = (state: AppState = initialState, action: Action) => {
    switch (typeof action) {
        case typeof CountersActionTypes:
            return CountersReducer(state, action);
        default:
            return state;
    }
};

export default RootReducer;

export * from './initialState';
export * from './Counters';
