import { CounterState } from './Counters';

export interface AppState {
    latestId: number;
    Counters: { [key: number]: CounterState; };
}

const initialState: AppState = {
    latestId: 1,
    Counters: {}
};

export default initialState;