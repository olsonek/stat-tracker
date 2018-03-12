import * as React from 'react';
import Counter from '../../components/Counter';
import StatGrid from '../../components/StatGrid';

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
                <Counter
                    value={this.state.counterValue}
                    updateValue={(value: number) => this.updateValue(value)}
                    maxValueDisplay={10}
                    // maxValue={10}
                    // minValue={0}
                    description={'Health'}
                />
                <StatGrid />
            </div>
        );
    }
}

export default StatView;