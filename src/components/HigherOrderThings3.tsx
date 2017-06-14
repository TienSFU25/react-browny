import * as React from 'react';
import RandomMessageShape from './RandomMessageShape';
import RandomColorShape from './RandomColorShape';
import Circle from './Circle';
import Square from './Square';

export default () => {
    let SuperCoolCircle = RandomColorShape(RandomMessageShape(Circle));
    let SuperCoolSquare = RandomMessageShape(RandomColorShape(Square));

    return (
        <div>
            <SuperCoolCircle />
            <SuperCoolSquare />
        </div>
    );
};