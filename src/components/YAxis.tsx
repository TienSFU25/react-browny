import * as React from 'react';
import Tick from './Tick';

export default class YAxis extends React.Component<any, any> {
    render() {
        const { maxFreq, yScale, data } = this.props;
        const existingPercentages = {};

        let Ticks = data
        .filter((letterAndFrequency, index) => {
            let { frequency } = letterAndFrequency;
            let asPercentage = Math.round(frequency * 100);

            const existsAlready = existingPercentages[asPercentage];
            existingPercentages[asPercentage] = true;

            return !existsAlready;
        })
        .map((letterAndFrequency, index) => {
            let { frequency } = letterAndFrequency;
            let asPercentage = Math.round(frequency * 100);
            return <Tick text={asPercentage + "%"} transform={`translate(0,${yScale(frequency)})`} key={index} />
        });

        return (
            <g className="axis axis--y" fontSize={10} textAnchor="end">
                <path className="domain" stroke="#000" d="M-6,450.5H0.5V0.5H-6" fill="none" />
                {Ticks}
            </g>
        );
    }
}