import initialState, { AppState, CounterState } from './initialState';
import { getType } from 'typesafe-actions';
import { RootAction, actions } from './actions';

const RootReducer = (state: AppState = initialState, action: RootAction) => {
    switch (action.type) {
        case getType(actions.addCounter):
            return addCounter(state);
        case getType(actions.removeCounter):
            return removeCounter(state, action.payload);
        case getType(actions.incrementCounter):
            return incrementCounter(state, action.payload);
        case getType(actions.decrementCounter):
            return decrementCounter(state, action.payload);
        default:
            return state;
    }
};

export default RootReducer;

function addCounter(state: AppState): AppState {
    const newState = { ...state, latestId: state.latestId + 1 };
    const newCounterState: CounterState = { id: state.latestId, value: 0 };
    newState.Counters[state.latestId] = newCounterState;
    return newState;
}

function removeCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    if (newState.Counters[id]) {
        delete newState.Counters[id];
    }
    return newState;
}

function incrementCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    const oldCounter = state.Counters[id];
    if(newState.Counters[id] != null){
        newState.Counters[id].value = oldCounter.value + getIncrement(oldCounter);
    }
    return newState;
}

function decrementCounter(state: AppState, id: number): AppState {
    const newState = { ...state };
    const oldCounter = state.Counters[id];
    if(newState.Counters[id] != null){
        newState.Counters[id].value = oldCounter.value - getIncrement(oldCounter);
    }
    return newState;
}

function getIncrement(state: CounterState){
    return (state.increment == null) ? 1 : state.increment;
}