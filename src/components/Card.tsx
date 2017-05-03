import * as React from 'react';

interface CardProps { 
    className: string;
}

export default class Card extends React.Component<CardProps, any> {
    render() {
        const { className } = this.props;
        const cardClass = `card card-${className}`

        return (
            <div className={cardClass}>
                <a className="card-container">
                    <div className="card-image"></div>
                        <div className="card-content">
                        <div className="kicker">Money</div>
                        <h2>Mega news story about something clicky on 3 lines but it actually runs too long</h2>
                        <p className="card-abstract">Bacon ipsum dolor amet tenderloin pork brisket burgdoggen short loin meatball tri-tip ham hock cow tongue ball tip pork loin ribeye fatback corned beef.</p>
                        </div>
                    <div className="provider">
                        <img className="provider-icon" src="http://placehold.it/16x16" />
                        <span className="provider-name">Main stream media</span>
                    </div>
                </a>
            </div>
        );
    }
}