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
    createCounter: () => void;
    deleteCounter: (id: number) => void;
    incrementCounter: (id: number) => void;
    decrementCounter: (id: number) => void;
    counterDescription: string;
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
                        description={props.counterDescription}
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
                <IconButton onClick={() => props.createCounter()}>
                    <ContentAdd />
                </IconButton>
                <TextField hintText="Description" />
                <TextField hintText="Min Value" type={'number'} />
                <TextField hintText="Max Value" type={'number'} />
                <TextField hintText="Max Value Display" type={'number'} />
            </div>
            <List>
                {listItems}
            </List>
        </div>
    );
};

export default StatList;