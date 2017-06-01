import * as React from 'react';
import * as d3 from 'd3';
import data from '../data/freq';
import XAxis from './XAxis';

export default class BarGraph extends React.Component<any, any> {
    constructor(props) {
        super(props);

        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        xScale.domain(data.map(function(d) { return d.letter; }));

        this.state = {
            margin,
            width,
            height,
            xScale
        };
    }

    componentDidMount() {
        var svg = d3.select("svg")
        let { margin, height, width, xScale } = this.state;
        
        var y = d3.scaleLinear().rangeRound([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

        // g.append("g")
        //     .attr("class", "axis axis--x")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(xScale));

        // var xAxis = g.append("g")
        //     .attr("class", "axis axis--x")
        //     .attr("transform", "translate(0," + height + ")");

        // var aBottom = d3.axisBottom(x);
        // console.log(aBottom);


        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(10, "%"))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return xScale(d.letter); })
            .attr("y", function(d) { return y(d.frequency); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - y(d.frequency); });
    }

    render() {
        let { margin, height, width, xScale } = this.state;

        return (
            <svg height={500} width={960} >
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <XAxis xScale={xScale} height={height} data={data} />
                </g>
            </svg>
        );
    }
}