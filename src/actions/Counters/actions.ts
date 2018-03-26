import Types from './types';

export interface CreateCounterAction {
    type: Types.CREATE_COUNTER;
}

export interface DeleteCounterAction {
    type: Types.DELETE_COUNTER;
    payload: number;
}

export interface IncrementCounterAction {
    type: Types.INCREMENT_COUNTER;
    payload: number;
}

export interface DecrementCounterAction {
    type: Types.DECREMENT_COUNTER;
    payload: number;
}

type actions =
    | CreateCounterAction
    | DeleteCounterAction
    | IncrementCounterAction
    | DecrementCounterAction;

export default actions;