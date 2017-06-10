import * as React from 'react';

export default function(WrappedComponnent) {
    return class Shape extends React.Component<any, any> {
        private g;

        onClick() {
            console.log("clicked the shape!");
        }

        render() {
            const {...props} = this.props;

            return (
                <g onClick={this.onClick.bind(this)} ref={g => this.g = g}>
                    <WrappedComponnent {...props} />
                </g>
            );
        }
    };
}
