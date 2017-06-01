import * as React from 'react';
import * as d3 from 'd3';

export default class Circle extends React.Component<any, any> {
    private g;

    onMouseOver(e) {
        // var pageX = d3.event.pageX;
        // var pageY = d3.event.pageY;
        console.log(d3);
        console.log(d3.event);

        // var mouseCoords = d3.mouse(this.g);
        // console.log(mouseCoords);
        console.log(12345);
        console.log(this.g);
    }

    render() {
        return (
            <g onMouseOver={this.onMouseOver.bind(this)} ref={(g) => this.g = d3.select(g)}>
                <circle cx={50} cy={50} r={50} fill="aliceblue"/>
                <text textAnchor="middle">
                    <tspan dy="1em">Random ass text here</tspan>
                </text>                
            </g>
        );
    }
}