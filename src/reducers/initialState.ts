import { CounterState } from './Counters';
import { StatListState } from './StatList/state';

export interface AppState {
    latestId: number;
    StatList: StatListState;
    Counters: { [key: number]: CounterState; };
}

const initialState: AppState = {
    latestId: 1,
    StatList: {},
    Counters: {}
};

export default initialState;