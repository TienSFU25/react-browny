import * as React from 'react';

import cardMap from '../config/cardMap';
import SportsCard from './SportsCard';

// just a test class
interface RiverProps {
    renderType: string
}

export default class SportsRiver extends React.Component<RiverProps, any> {
    render() {
        const { renderType } = this.props;

        const cardClass = cardMap[renderType][1][0];
        const riverClass = `river-container river-${renderType}`;

        return (
            <section className="river">
                <div className={riverClass}>
                    <SportsCard className={cardClass} />
                </div>
            </section>
        );
    }
}