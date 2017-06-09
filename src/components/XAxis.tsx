import * as React from 'react';
import Tick from './Tick';

export default class XAxis extends React.Component<any, any> {
    render() {
        console.log(`rerendering x axis`);
        const { xScale, data, height } = this.props;

        let Ticks = data.map((letterAndFrequency, index) => {
            let { letter } = letterAndFrequency;
            return <Tick text={letter} transform={`translate(${xScale(letter) + 15.5},0)`} key={index} />
        });

        return (
            <g className="axis axis--x" transform={`translate(0, ${height})`} fontSize={10} textAnchor="middle">
                {Ticks}
            </g>
        );
    }
}