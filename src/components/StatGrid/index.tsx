import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './styles.css';

import Counter from '../Counter';

class StatGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 1, isResizable: false },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, minH: 2, maxH: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <ReactGridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
                compactType={null}
            >
                <div key="a">a</div>
                <div key="b"><Counter
                    value={200}
                    updateValue={() => { return; }}
                /></div>
                <div key="c">c</div>
            </ReactGridLayout>
        );
    }
}

export default StatGrid;