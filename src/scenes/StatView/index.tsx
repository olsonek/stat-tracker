import * as React from 'react';
import StatListContainer from '../../containers/StatListContainer';

interface StatViewProps { }

interface StatViewState {
    counterValue: number;
}

class StatView extends React.Component<StatViewProps, StatViewState> {

    constructor(props: StatViewProps) {
        super(props);
        this.state = { counterValue: 0 };
    }

    updateValue(value: number) {
        this.setState({ counterValue: value });
    }

    render() {
        return (
            <div className="StatView">
                <StatListContainer />
            </div>
        );
    }
}

export default StatView;