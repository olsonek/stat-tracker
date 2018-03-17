
export interface CounterState {
    id: number;
    increment?: number;
    minValue?: number;
    maxValue?: number;
    maxValueDisplay?: number;
    description?: string;
}

export interface AppState {
    latestId: number;
    Counters: 	{ [key: number]: CounterState; };
}

const initialState: AppState = {
    latestId: 1,
    Counters: {}
};

export default initialState;