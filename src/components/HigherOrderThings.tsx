import * as React from 'react';
import RandomMessageShape from './RandomMessageShape';
import Circle from './Circle';
import Square from './Square';

export default () => {
    let RandomMessageCircle = RandomMessageShape(Circle);
    let RandomMessageSquare = RandomMessageShape(Square);

    return (
        <div>
            <RandomMessageCircle />
            <RandomMessageSquare />
        </div>
    );
};