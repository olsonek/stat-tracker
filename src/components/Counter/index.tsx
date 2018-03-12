import * as React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';
import IconButton from 'material-ui/IconButton';
import './styles.css';

interface CounterProps {
    value: number;
    increment?: number;
    minValue?: number;
    maxValue?: number;
    maxValueDisplay?: number;
    updateValue: (value: number) => void;
    description?: string;
}

interface CounterState { }

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
    }

    getIncrement(): number {
        return this.props.increment || 1;
    }

    incrementValue() {
        if (this.valueInRange(this.props.value, true)) {
            this.props.updateValue(this.props.value + this.getIncrement());
        }
    }

    decrementValue() {
        if (this.valueInRange(this.props.value, false)) {
            this.props.updateValue(this.props.value - this.getIncrement());
        }
    }

    valueInRange(value: number, isIncrement: boolean) {
        let newValue = isIncrement ? value + this.getIncrement() : value - this.getIncrement();

        if (isIncrement) {
            return (this.props.maxValue == null || newValue <= this.props.maxValue);
        } else {
            return (this.props.minValue == null || newValue >= this.props.minValue);
        }
    }

    render() {
        return (
            <div className="Counter">
                <IconButton onClick={() => this.decrementValue()}>
                    <ContentRemove />
                </IconButton>
                <h1>{this.props.value}{this.props.maxValueDisplay != null && ('/' + this.props.maxValueDisplay)}</h1>
                <IconButton onClick={() => this.incrementValue()}>
                    <ContentAdd />
                </IconButton>
                {this.props.description &&
                    <h2>{this.props.description}</h2>
                }
            </div>
        );
    }
}

export default Counter;