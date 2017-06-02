import * as React from 'react';
import Shape from './Shape';
import Circle from './Circle';
import Square from './Square';
import BarGraph from './BarGraph';
import DynamicBarGraph from './DynamicBarGraph';

import '../styles/barGraph.scss';

export default class HomePage extends React.Component<any, any> {
    render() {
        let LoggingCircle = Shape(Circle);
        let LoggingSquare = Shape(Square);
        
        // return (
        //     <svg>
        //         <LoggingCircle />
        //         <LoggingSquare />
        //     </svg>
        // );

        return <DynamicBarGraph />
    }
}