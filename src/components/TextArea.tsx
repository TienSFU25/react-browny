import * as React from 'react';

export default class TextArea extends React.Component<any, any> {
  render() {
    return (
      <form>
        <label>War and Peace</label>
        <textarea value={this.props.value} onChange={this.props.handleChange} />
      </form>
    );
  }
}