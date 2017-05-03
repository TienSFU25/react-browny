import * as React from 'react';

import River from './River';
import cardMap from '../config/cardMap';

interface HomePageProps { }

export default class HomePage extends React.Component<HomePageProps, any> {
    constructor() {
        super();

        this.state = {
            cols: 1
        };
    }
    
    updateDimensions() {
        // console.log(this.state.colType);
        var widthRem = window.innerWidth / 10 * 0.625 + 1;

        if (widthRem < 43.75) {
            this.setState({
                cols: 1
            });
        } else if (widthRem < 58.875) {
            this.setState({
                cols: 2
            });
        } else if (widthRem < 79) {
            this.setState({
                cols: 3
            });
        } else {
            this.setState({
                cols: 4
            });
        }        
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const { cols } = this.state;

        return (
            <div >
                <h1>This is the home page</h1>
                <River renderType="1a" columns={cols} />
                <River renderType="1b" columns={cols} />
                <River renderType="2a" columns={cols} />
                <River renderType="3a" columns={cols} />
                <River renderType="8a" columns={cols} />
                <River renderType="8b" columns={cols} />
            </div>
        );
    }
}