import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { AppState, CounterState } from '../reducers';
import { StatList } from '../components/StatList';
import { incrementCounter, decrementCounter, createCounter, deleteCounter } from '../actions';

interface StateFromProps {
    counters: CounterState[];
    counterDescription: string;
}

interface DispatchFromProps {
    createCounter: () => void;
    deleteCounter: (id: number) => void;
    incrementCounter: (id: number) => void;
    decrementCounter: (id: number) => void;
}

const mapStateToProps = (state: AppState) => ({
    counters: Object.values(state.Counters),
    counterDescription: 'description'
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        createCounter: bindActionCreators(createCounter, dispatch),
        deleteCounter: bindActionCreators(deleteCounter, dispatch),
        incrementCounter: bindActionCreators(incrementCounter, dispatch),
        decrementCounter: bindActionCreators(decrementCounter, dispatch)
    };
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(StatList);