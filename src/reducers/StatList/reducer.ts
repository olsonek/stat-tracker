import { AppState } from '../initialState';
import { StatListAction, StatListActionTypes } from 'actions';

const statListReducer = (state: AppState, action: StatListAction) => {
    switch (action.type) {
        case StatListActionTypes.UPDATE_DESCRIPTION:
            return updateDescription(state, action.payload);
        case StatListActionTypes.UPDATE_MIN_VALUE:
            return updateMinValue(state, action.payload);
        case StatListActionTypes.UPDATE_MAX_VALUE:
            return updateMaxValue(state, action.payload);
        case StatListActionTypes.UPDATE_MAX_DISPLAY_VALUE:
            return updateMaxValueDisplay(state, action.payload);
        default:
            return state;
    }
};

export default statListReducer;

function updateDescription(state: AppState, value?: string) {
    const newState = { ...state };
    if (value == null) {
        delete newState.StatList.description;
    } else {
        newState.StatList.description = value;
    }
    return newState;
}

function updateMinValue(state: AppState, value?: number) {
    const newState = { ...state };
    if (value == null) {
        delete newState.StatList.minValue;
    } else {
        newState.StatList.minValue = value;
    }
    return newState;
}

function updateMaxValue(state: AppState, value?: number) {
    const newState = { ...state };
    if (value == null) {
        delete newState.StatList.maxValue;
    } else {
        newState.StatList.maxValue = value;
    }
    return newState;
}

function updateMaxValueDisplay(state: AppState, value?: number) {
    const newState = { ...state };
    if (value == null) {
        delete newState.StatList.maxValueDisplay;
    } else {
        newState.StatList.maxValueDisplay = value;
    }
    return newState;
}