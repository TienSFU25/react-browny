import * as React from 'react';

export default ({color = "aliceblue", message = "YOLO"}) => {
    let w = 200;

    return (
        <svg width={2 * w} height={w}>
            <rect width={2 * w} height={w} fill={color} />
            <text x="50%" y="50%" textAnchor="middle">{message}!</text>
        </svg>
    );
};