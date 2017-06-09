import * as React from 'react';
import DynamicBarGraph from './DynamicBarGraph';

import '../styles/barGraph.scss';

export default class HomePage extends React.Component<any, any> {
    render() {
        return <DynamicBarGraph />
    }
}