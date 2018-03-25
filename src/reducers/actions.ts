import { $call } from 'utility-types';
import { createAction } from 'typesafe-actions';

const addCounter = createAction('ADD_COUNTER');
const removeCounter = createAction('REMOVE_COUNTER', (id: number) => ({ type: 'REMOVE_COUNTER', payload: id }));
const incrementCounter = createAction('INCREMENT_COUNTER', (id: number) => ({ type: 'INCREMENT_COUNTER', payload: id }));
const decrementCounter = createAction('DECREMENT_COUNTER', (id: number) => ({ type: 'DECREMENT_COUNTER', payload: id }));

export const actions = {
    addCounter,
    removeCounter,
    incrementCounter,
    decrementCounter
};

const returnsOfActions = Object.values(actions).map($call);
type AppAction = typeof returnsOfActions[number];

export type RootAction =
    | AppAction;