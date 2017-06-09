import * as React from 'react';
import * as d3 from 'd3';
import TextArea from './TextArea';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Rect from './Rect';

export default class DynamicBarGraph extends React.Component<any, any> {
    constructor(props) {
        super(props);

        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        const defaultText = "Please write an essay about your favorite DOM element.";
        var freqs = this._calcFrequency(defaultText);

        var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
        var yScale = d3.scaleLinear().rangeRound([height, 0]);

        this._updateDomains(xScale, yScale, freqs);

        this.state = {
            margin,
            width,
            height,
            xScale,
            yScale,
            value: defaultText,
            freqs
        };

        // bind event handlers
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const str = event.target.value;
        const freqs = this._calcFrequency(str);
        const { xScale, yScale } = this.state;

        this._updateDomains(xScale, yScale, freqs);

        this.setState({
            value: str,
            freqs
        });
    }

    render() {
        let { margin, height, width, xScale, yScale, value, freqs } = this.state;
        let barWidth = xScale.bandwidth();

        let Bars = freqs.map((letterAndFrequency, index) => {
            let { letter, frequency } = letterAndFrequency;
            return <Rect x={xScale(letter)} y={yScale(frequency)} width={barWidth} height={height - yScale(frequency)} key={index} index={index} />
        });

        return (
            <div>
                <svg height={500} width={960} >
                    <g transform={`translate(${margin.left}, ${margin.top})`}>
                        <XAxis xScale={xScale} height={height} data={freqs} />
                        <YAxis yScale={yScale} data={freqs} />
                        {Bars}
                    </g>
                </svg>
                <TextArea value={value} handleChange={this.handleChange} />
            </div>
        );
    }

    _updateDomains(xScale, yScale, freqs) {
        xScale.domain(freqs.map(function(d) { return d.letter; }));
        yScale.domain([0, d3.max(freqs, function(d) { return d.frequency; })]);
    }

    _genArray = (n) => {
        var arr = [];

        for (let i = 0; i < n; i++) {
            arr.push(i);
        }

        return arr;
    }

    _calcFrequency = (str) => {
        const first = 97;
        const counts = this._genArray(26).map(_ => 0);

        str.split('').map((char) => {
            counts[char.toLowerCase().charCodeAt(0) - first] += 1;
        });

        return counts.map((value, index) => {
            // console.log(value);
            let letter = String.fromCharCode(index + first);

            return {
                letter,
                frequency: str.length > 0 ? value / str.length : 0
            };
        });
    };    
}