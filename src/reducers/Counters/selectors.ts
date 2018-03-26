// import { createSelector } from 'reselect';
import { AppState } from '../initialState';

export const getCounters = (state: AppState) => Object.values(state.Counters);
export const getCounter = (state: AppState, id: number) => state.Counters[id];

export const getCounterIncrement = function (state: AppState, id: number): number {
    const counter = getCounter(state, id);
    return (counter == null || counter.increment == null) ? 1 : counter.increment;
};