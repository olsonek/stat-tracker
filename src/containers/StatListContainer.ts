import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { AppState, CounterState } from '../reducers';
import { StatList } from '../components/StatList';
import {
    incrementCounter, decrementCounter, createCounter, deleteCounter,
    updateCounterDescription, updateCounterMinValue, updateCounterMaxValue, updateCounterMaxValueDisplay
} from '../actions';

interface StateFromProps {
    counters: CounterState[];
    description?: string;
    minValue?: number;
    maxValue?: number;
    maxValueDisplay?: number;
}

interface DispatchFromProps {
    createCounter: (description?: string, minValue?: number, maxValue?: number, maxValueDisplay?: number) => void;
    deleteCounter: (id: number) => void;
    incrementCounter: (id: number) => void;
    decrementCounter: (id: number) => void;

    updateDescription: (value?: string) => void;
    updateMinValue: (value?: number) => void;
    updateMaxValue: (value?: number) => void;
    updateMaxValueDisplay: (value?: number) => void;
}

const mapStateToProps = (state: AppState) => ({
    counters: Object.values(state.Counters),
    description: state.StatList.description,
    minValue: state.StatList.minValue,
    maxValue: state.StatList.maxValue,
    maxValueDisplay: state.StatList.maxValueDisplay
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        createCounter: bindActionCreators(createCounter, dispatch),
        deleteCounter: bindActionCreators(deleteCounter, dispatch),
        incrementCounter: bindActionCreators(incrementCounter, dispatch),
        decrementCounter: bindActionCreators(decrementCounter, dispatch),

        updateDescription: bindActionCreators(updateCounterDescription, dispatch),
        updateMinValue: bindActionCreators(updateCounterMinValue, dispatch),
        updateMaxValue: bindActionCreators(updateCounterMaxValue, dispatch),
        updateMaxValueDisplay: bindActionCreators(updateCounterMaxValueDisplay, dispatch)
    };
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(StatList);