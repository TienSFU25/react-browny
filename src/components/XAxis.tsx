import * as React from 'react';
import Tick from './Tick';

export default class XAxis extends React.Component<any, any> {
    render() {
        const { xScale, data, height } = this.props;

        let Ticks = data.map((letterAndFrequency, index) => {
            let { letter } = letterAndFrequency;
            return <Tick letter={letter} translateX={xScale(letter)} key={index} />
        });

        return (
            <g className="axis axis--x" transform={`translate(0, ${height})`} fontSize={10} textAnchor="middle">
                {Ticks}
            </g>
        );
    }
}