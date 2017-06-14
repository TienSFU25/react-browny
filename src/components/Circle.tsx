import * as React from 'react';

export default ({color = "aliceblue", message = "YOLO"}) => {
    let w = 200;

    return (
        <svg width={w} height={w}>
            <circle cx={w / 2} cy={w / 2} r={w / 2} fill={color} />
            <text x="50%" y="50%" textAnchor="middle">{message}</text>
        </svg>
    );
};