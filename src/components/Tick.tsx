import * as React from 'react';

export default class Tick extends React.Component<any, any> {
    render() {
        const { letter, translateX } = this.props;

        return (
            <g className="tick" opacity="1" transform={`translate(${translateX + 15.5}, 0)`}>
                <line stroke="#000" y2="6"></line>
                <text fill="#000" y="9" dy="0.71em">{letter}</text>
            </g>
        );
    }
}