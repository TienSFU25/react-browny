import * as React from 'react';

export default class HomePage extends React.Component<any, any> {
    render() {
        console.log(`render was run`);

        return (
            <div className="animated bounceInRight">I am a div!</div>
        );
    }
}