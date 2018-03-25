import * as React from 'react';
import { List, ListItem } from 'material-ui/List';

import Counter from '../Counter';
import { CounterState } from '../../reducers/initialState';

class StatList extends React.Component {
    render() {
        const counters: CounterState[] = [];
        const markup = [];
        for (var i = 0; i < 3; i++) {
            const counter = counters[i];
            markup.push(<Counter id={counter.id} value={counter.value} updateValue={() => {return;}} />)
        }

        return (
            <List>
                {

                }
            </List>
        );
    }
}

export default StatList;