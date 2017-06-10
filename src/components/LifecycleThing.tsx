import * as React from 'react';

export default class StatefulThing extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }

    componentWillMount() {
        let {value} = this.props;
        
        console.log(`Thing ${value} will mount...`);
    }

    componentDidMount() {
        let {value} = this.props;
        
        console.log(`Thing ${value} did mount...`);
    }

    componentWillUpdate() {
        let {value} = this.props;
        
        console.log(`Thing ${value} will update...`);
    }

    componentDidUpdate() {
        let {value} = this.props;
        
        console.log(`Thing ${value} did update...`);
    }

    componentWillUnmount() {
        let {value} = this.props;
        
        console.log(`Thing ${value} will unmount...`);
    }

    render() {
        let {value} = this.props;

        return (
            <div>
                I am stateful thing number {value}
            </div>
        );
    }
}