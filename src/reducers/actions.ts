import { $call } from 'utility-types';
import { createAction } from 'typesafe-actions';

const addCounter = createAction('ADD_COUNTER');
const removeCounter = createAction('REMOVE_COUNTER', (id: number) => ({ type: 'REMOVE_COUNTER', payload: id }));

export const actions = {
    addCounter,
    removeCounter
};

const returnsOfActions = Object.values(actions).map($call);
type AppAction = typeof returnsOfActions[number];

export type RootAction =
    | AppAction;