import * as React from 'react';

const Messages = [
    "Exercise is good",
    "Vegetables is good",
    "Prime is good",
    "Life is good",
    "Cheese is good",
    "YOLOOOOOOOOOOOOOOOO"
];

export default function(WrappedComponnent) {
    return class LoggingShape extends React.Component<any, any> {
        constructor(props) {
            super(props);

            this.state = {message: undefined};
        }

        onClick() {
            const randomMessage = Messages[Math.floor(Math.random()*Messages.length)];

            this.setState({
                message: randomMessage
            });
        }

        render() {
            const {...props} = this.props;
            const {message} = this.state;

            return (
                <div onClick={this.onClick.bind(this)} >
                    <WrappedComponnent {...props} message={message} />
                </div>
            );
        }
    };
}
