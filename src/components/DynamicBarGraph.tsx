import * as React from 'react';
import * as d3 from 'd3';
import TextArea from './TextArea';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Rect from './Rect';

const genArray = (n) => {
    var arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}

const calcFrequency = (str) => {
    const first = 97;
    const counts = genArray(26).map(_ => 0);

    str.split('').map((char) => {
        counts[char.toLowerCase().charCodeAt(0) - first] += 1;
    });

    return counts.map((value, index) => {
        // console.log(value);
        let letter = String.fromCharCode(index + first);

        return {
            letter,
            frequency: value / str.length
        };
    });
};

export default class DynamicBarGraph extends React.Component<any, any> {
    constructor(props) {
        super(props);

        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var freqs = calcFrequency("Please write an essay about your favorite DOM element.");

        var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        xScale.domain(freqs.map(function(d) { return d.letter; }));

        var yScale = d3.scaleLinear().rangeRound([height, 0]);

        yScale.domain([0, d3.max(freqs, function(d) { return d.frequency; })]);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            margin,
            width,
            height,
            xScale,
            yScale,
            value: "Please write an essay about your favorite DOM element.",
            freqs
        };
    }

    handleChange(event) {
        const str = event.target.value;
        const freqs = calcFrequency(str);
        const { yScale } = this.state;

        yScale.domain([0, d3.max(freqs, function(d) { return d.frequency; })]);

        this.setState({
            value: str,
            freqs
        });
    }

    componentDidMount() {
        var svg = d3.select("svg")
        let { margin, height, width, xScale, yScale, freqs } = this.state;
        
        // var y = d3.scaleLinear().rangeRound([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // y.domain([0, d3.max(freqs, function(d) { return d.frequency; })]);

        // g.append("g")
        //     .attr("class", "axis axis--x")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(d3.axisBottom(xScale));

        // var xAxis = g.append("g")
        //     .attr("class", "axis axis--x")
        //     .attr("transform", "translate(0," + height + ")");

        // var aBottom = d3.axisBottom(x);
        // console.log(aBottom);

        // window['thing'] = d3.axisLeft(yScale).ticks(10, "%");
        // window['yScale'] = yScale;

        // g.append("g")
        //     .attr("class", "axis axis--y")
        //     .call(d3.axisLeft(yScale).ticks(10, "%"))
        //     .append("text")
        //     .attr("transform", "rotate(-90)")
        //     .attr("y", 6)
        //     .attr("dy", "0.71em")
        //     .attr("text-anchor", "end")
        //     .text("Frequency");

        // g.selectAll(".bar")
        //     .data(freqs)
        //     .enter().append("rect")
        //     .attr("class", "bar")
        //     .attr("x", function(d) { return xScale(d.letter); })
        //     .attr("y", function(d) { return yScale(d.frequency); })
        //     .attr("width", xScale.bandwidth())
        //     .attr("height", function(d) { return height - yScale(d.frequency); });
    }

    render() {
        let { margin, height, width, xScale, yScale, value, freqs } = this.state;
        let barWidth = xScale.bandwidth();

        let Bars = freqs.map((letterAndFrequency, index) => {
            let { letter, frequency } = letterAndFrequency;
            return <Rect x={xScale(letter)} y={yScale(frequency)} width={barWidth} height={height - yScale(frequency)} />
        });

        return (
            <div>
                <TextArea value={value} handleChange={this.handleChange} />
                <svg height={500} width={960} >
                    <g transform={`translate(${margin.left}, ${margin.top})`}>
                        <XAxis xScale={xScale} height={height} data={freqs} />
                        <YAxis yScale={yScale} data={freqs} />
                        {Bars}
                    </g>
                </svg>
            </div>
        );
    }
}