import * as React from 'react';
import LifecycleThing from './LifecycleThing';
import { genArray } from '../utils';

export default class StatefulThings extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            numbers: genArray(10)
        };

        this._handleAddButtonClick = this._handleAddButtonClick.bind(this);
        this._handleRemoveButtonClick = this._handleRemoveButtonClick.bind(this);
    }

    render() {
        const {numbers} = this.state;

        const Things = numbers.map((value, index) => {
            return <LifecycleThing value={value} key={index} />;
        });

        return (
            <div>
                <button onClick={this._handleAddButtonClick}>Add a thing</button>
                <button onClick={this._handleRemoveButtonClick}>Remove a thing</button>
                {Things}
            </div>
        );
    }

    _handleAddButtonClick() {
        const {numbers} = this.state;
        
        // clone the old array
        const lastNumber = numbers[numbers.length - 1];
        const newNumbers = [...numbers, lastNumber + 1];

        this.setState({
            numbers: newNumbers
        });
    }

    _handleRemoveButtonClick() {
        const {numbers} = this.state;
        
        // clone the old array
        const newNumbers = numbers.slice(0);
        newNumbers.pop();

        this.setState({
            numbers: newNumbers
        });
    }
};