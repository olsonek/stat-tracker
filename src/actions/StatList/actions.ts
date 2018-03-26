import Types from './types';

export interface UpdateDescription {
    type: Types.UPDATE_DESCRIPTION;
    payload?: string;
}

export interface UpdateMinValue {
    type: Types.UPDATE_MIN_VALUE;
    payload?: number;
}

export interface UpdateMaxValue {
    type: Types.UPDATE_MAX_VALUE;
    payload?: number;
}

export interface UpdateMaxDisplayValue {
    type: Types.UPDATE_MAX_DISPLAY_VALUE;
    payload?: number;
}

type actions =
    | UpdateDescription
    | UpdateMinValue
    | UpdateMaxValue
    | UpdateMaxDisplayValue;

export default actions;
