import * as React from 'react';
import * as d3 from 'd3';

const c20b = d3.schemeCategory20c;

export default function(WrappedComponnent) {
    return class RandomColorShape extends React.Component<any, any> {
        constructor(props) {
            super(props);

            this.state = {color: undefined};
        }

        onClick() {
            const randomColor = c20b[Math.floor(Math.random()*c20b.length)];

            this.setState({
                color: randomColor
            });
        }

        render() {
            const {...props} = this.props;
            const { color } = this.state;

            return (
                <div onClick={this.onClick.bind(this)} >
                    <WrappedComponnent {...props} color={color} />
                </div>
            );
        }
    };
}
