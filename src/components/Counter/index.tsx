import * as React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';
import IconButton from 'material-ui/IconButton';
import './styles.css';

interface CounterProps {
    id: number;
    value: number;
    maxValueDisplay?: number;
    onDecrement: () => void;
    onIncrement: () => void;
    description?: string;
}

const Counter: React.StatelessComponent<CounterProps> = (props) => {
    return (
        <div className="Counter">
            <IconButton onClick={() => props.onDecrement()}>
                <ContentRemove />
            </IconButton>
            <h1>{props.value}{props.maxValueDisplay != null && ('/' + props.maxValueDisplay)}</h1>
            <IconButton onClick={() => props.onIncrement()}>
                <ContentAdd />
            </IconButton>
            {props.description &&
                <h2>{props.description}</h2>
            }
        </div>
    );
};

export default Counter;