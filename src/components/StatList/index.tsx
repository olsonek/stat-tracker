import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';
import IconButton from 'material-ui/IconButton';

import Counter from '../Counter';
import { CounterState } from '../../reducers';

import './styles.css';
import { TextField } from 'material-ui';

interface StatListProps {
    counters: CounterState[];
    createCounter: (description?: string, minValue?: number, maxValue?: number, maxValueDisplay?: number) => void;
    deleteCounter: (id: number) => void;
    incrementCounter: (id: number) => void;
    decrementCounter: (id: number) => void;

    description?: string;
    minValue?: number;
    maxValue?: number;
    maxValueDisplay?: number;

    updateDescription: (value?: string) => void;
    updateMinValue: (value?: number) => void;
    updateMaxValue: (value?: number) => void;
    updateMaxValueDisplay: (value?: number) => void;
}

export const StatList: React.StatelessComponent<StatListProps> = (props) => {
    const listItems: JSX.Element[] = [];
    for (var i = 0; i < props.counters.length; i++) {
        const counter = props.counters[i];
        listItems.push(
            <ListItem className={'testItem'} key={'c' + counter.id}>
                <div className={'item'}>
                    <Counter
                        id={counter.id}
                        value={counter.value}
                        onIncrement={() => props.incrementCounter(counter.id)}
                        onDecrement={() => props.decrementCounter(counter.id)}
                        description={counter.description}
                        maxValueDisplay={counter.maxValueDisplay}
                    />
                    <IconButton onClick={() => props.deleteCounter(counter.id)}>
                        <ContentRemove />
                    </IconButton>
                </div>
            </ListItem>
        );
    }

    return (
        <div className={'stat-list'}>
            <div className={'toolbar'}>
                <IconButton onClick={() => props.createCounter(props.description, props.minValue, props.maxValue, props.maxValueDisplay)}>
                    <ContentAdd />
                </IconButton>
                <TextField
                    hintText="Description"
                    value={props.description}
                    onChange={(event: object, newValue: string) => props.updateDescription(newValue)}
                />
                <TextField
                    hintText="Min Value"
                    type={'number'}
                    value={props.minValue}
                    onChange={(event: object, newValue: string) => props.updateMinValue(Number(newValue))}
                />
                <TextField
                    hintText="Max Value"
                    type={'number'}
                    value={props.maxValue}
                    onChange={(event: object, newValue: string) => props.updateMaxValue(Number(newValue))}
                />
                <TextField
                    hintText="Max Value Display"
                    type={'number'}
                    value={props.maxValueDisplay}
                    onChange={(event: object, newValue: string) => props.updateMaxValueDisplay(Number(newValue))}
                />
            </div>
            <List>
                {listItems}
            </List>
        </div>
    );
};

export default StatList;