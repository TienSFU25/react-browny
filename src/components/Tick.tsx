import * as React from 'react';

export default class Tick extends React.Component<any, any> {
    render() {
        const { text, transform } = this.props;

        return (
            <g className="tick" opacity="1" transform={transform}>
                <line stroke="#000" y2="6"></line>
                <text fill="#000" y="9" dy="0.71em">{text}</text>
            </g>
        );
    }
}