import * as React from 'react';
import "../css/sports.scss";

interface Props {
    className: string;
}

export default class SportsCard extends React.Component<Props, any> {
    render() {
        const { className } = this.props;
        const cardClass = `card card-${className}`;

        return (
            <section className="river">
                <div className="river-container river-1a">
                    <div className={cardClass}>
                        <a className="card-container match">
                            <div className="l">
                                <img alt="Los Angeles Angels Logo" src="http://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2cHvJ?f=PNG" className="loaded"/>
                                <span className="teamname">LAA</span>
                            </div>
                            <div className="m">
                                <div>
                                    <span className="leaguename">
                                        May 4
                                    </span>
                                    <span className="dateandscore ">
                                        2 - 8
                                    </span>
                                    <span className="matchstate">
                                        Top of 8th
                                    </span>
                                </div>
                            </div>
                            <div className="r">
                                <img alt="Seattle Mariners Logo" src="http://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2cS3i?f=PNG" className="loaded"/>
                                <span className="teamname">Sea</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}