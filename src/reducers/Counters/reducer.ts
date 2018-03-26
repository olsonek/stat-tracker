import { getCounter, getCounterIncrement } from './selectors';
import { AppState } from '../initialState';
import { CountersActionTypes, CountersAction } from 'actions';
import { CounterState } from './state';

const countersReducer = (state: AppState, action: CountersAction) => {
    switch (action.type) {
        case CountersActionTypes.CREATE_COUNTER:
            return createCounter(state, action.payload);
        case CountersActionTypes.DELETE_COUNTER:
            return deleteCounter(state, action.payload);
        case CountersActionTypes.INCREMENT_COUNTER:
            return incrementCounter(state, action.payload);
        case CountersActionTypes.DECREMENT_COUNTER:
            return decrementCounter(state, action.payload);
        default:
            return state;
    }
};

export default countersReducer;

function createCounter(state: AppState, payload: { description?: string, minValue?: number, maxValue?: number, maxValueDisplay?: number }): AppState {
    const newState = { ...state, latestId: state.latestId + 1 };
    const newCounterState: CounterState = {
        id: state.latestId,
        value: 0,
        description: payload.description,
        minValue: payload.minValue,
        maxValue: payload.maxValue,
        maxValueDisplay: payload.maxValueDisplay
    };
    newState.Counters[state.latestId] = newCounterState;
    return newState;
}

function deleteCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    if (getCounter(state, id)) {
        delete newState.Counters[id];
    }
    return newState;
}

function incrementCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    const counter = getCounter(state, id);

    if (counter == null) {
        return state;
    }

    if (counter.maxValue != null && (counter.value + getCounterIncrement(state, id)) <= counter.maxValue) {
        newState.Counters[id].value = counter.value + getCounterIncrement(state, id);
    }

    return newState;
}

function decrementCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    const counter = getCounter(state, id);

    if (counter == null) {
        return state;
    }

    if (counter.minValue != null && (counter.value - getCounterIncrement(state, id) >= counter.minValue)) {
        newState.Counters[id].value = counter.value - getCounterIncrement(state, id);
    }

    return newState;
}