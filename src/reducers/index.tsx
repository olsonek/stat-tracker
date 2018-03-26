import initialState, { AppState } from './initialState';
import { CountersReducer } from './Counters';
import {
    Action, OtherAction,
    CountersActionTypes, CountersAction,
    StatListActionTypes, StatListAction,
} from '../actions';
import { StatListReducer } from 'reducers/StatList';

const RootReducer = (state: AppState = initialState, action: Action = OtherAction) => {
    if (action.type in CountersActionTypes) {
        return CountersReducer(state, action as CountersAction);
    }
    if (action.type in StatListActionTypes) {
        return StatListReducer(state, action as StatListAction);
    }
    return state;
};

export default RootReducer;

export * from './initialState';
export * from './Counters';
export * from './StatList';
