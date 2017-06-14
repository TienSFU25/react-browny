import * as React from 'react';
import RandomColorShape from './RandomColorShape';
import Circle from './Circle';
import Square from './Square';

export default () => {
    let RandomColorCircle = RandomColorShape(Circle);
    let RandomColorSquare = RandomColorShape(Square);

    return (
        <div>
            <RandomColorCircle />
            <RandomColorSquare />
        </div>
    );
};