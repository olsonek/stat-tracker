import { UpdateDescription, UpdateMinValue, UpdateMaxValue, UpdateMaxDisplayValue } from './actions';
import Types from './types';

export const updateCounterDescription = (description?: string): UpdateDescription => ({ type: Types.UPDATE_DESCRIPTION, payload: description });
export const updateCounterMinValue = (id?: number): UpdateMinValue => ({ type: Types.UPDATE_MIN_VALUE, payload: id });
export const updateCounterMaxValue = (id?: number): UpdateMaxValue => ({ type: Types.UPDATE_MAX_VALUE, payload: id });
export const updateCounterMaxValueDisplay = (id?: number): UpdateMaxDisplayValue => ({ type: Types.UPDATE_MAX_DISPLAY_VALUE, payload: id });