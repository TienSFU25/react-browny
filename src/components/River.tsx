import * as React from 'react';

import cardMap from '../config/cardMap';
import Card from './Card';

interface RiverProps {
    columns: number,
    renderType: string
}

export default class River extends React.Component<RiverProps, any> {
    render() {
        const { columns, renderType } = this.props;

        const numCards = parseInt(renderType[0]);

        // create an index array
        const cards = [];

        for (let i = 0; i < numCards; i++) {
            cards.push(i);
        }

        // map into Cards
        const renderedCards = cards.map((index) => {
            const cardClass = cardMap[renderType][columns][index];
            return <Card className={cardClass} key={index}/>
        });

        const riverClass = `river-container river-${renderType}`;

        return (
            <section className="river">
                <div className={riverClass}>
                    {renderedCards}
                </div>
            </section>
        );
    }
}