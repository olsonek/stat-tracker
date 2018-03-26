import { CreateCounterAction, DeleteCounterAction, IncrementCounterAction, DecrementCounterAction } from './actions';
import Types from './types';

export const createCounter = (): CreateCounterAction => ({ type: Types.CREATE_COUNTER });
export const deleteCounter = (id: number): DeleteCounterAction => ({ type: Types.DELETE_COUNTER, payload: id });
export const incrementCounter = (id: number): IncrementCounterAction => ({ type: Types.INCREMENT_COUNTER, payload: id });
export const decrementCounter = (id: number): DecrementCounterAction => ({ type: Types.DECREMENT_COUNTER, payload: id });