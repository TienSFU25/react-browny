import * as React from 'react';

export default class TextArea extends React.Component<any, any> {
  render() {
    return (
      <form>
        <textarea value={this.props.value} onChange={this.props.handleChange} />
      </form>
    );
  }
}