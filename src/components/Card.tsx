import * as React from 'react';

interface CardProps {
    story: any,
    className: string;
}

export default class Card extends React.Component<CardProps, any> {
    render() {
        const { className, story } = this.props;
        const cardClass = `card card-${className}`;

        const cardImage = story.images.length ? story.images[0].url : "";
        const cardTitle = story.title;
        const abstract = story.abstract.length > 75 ? story.abstract.substr(0.75) : story.abstract;
        const kicker = story.categories[0].product;
        const providerUrl = story.provider.logo ? story.provider.logo.url : "";
        const providerName = story.provider.name;

        return (
            <div className={cardClass}>
                <a className="card-container">
                    <div className="card-image" style={{backgroundImage: `url(${cardImage})`}}></div>
                        <div className="card-content">
                        <div className="kicker">{kicker}</div>
                        <h2>{cardTitle}</h2>
                        <p className="card-abstract">{abstract}</p>
                        </div>
                    <div className="provider">
                        <img className="provider-icon" src={providerUrl} />
                        <span className="provider-name">{providerName}</span>
                    </div>
                </a>
            </div>
        );
    }
}