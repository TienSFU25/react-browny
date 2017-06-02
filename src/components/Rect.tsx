import * as React from 'react';

export default class Rect extends React.Component<any, any> {
    render() {
        const { x, y, width, height } = this.props;

        return (
            <rect className="bar" x={x} y={y} width={width} height={height} />
        );
    }
}