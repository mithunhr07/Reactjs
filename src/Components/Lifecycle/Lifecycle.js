import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    debugger;
    console.log('set props');
  }
  componentWillMount() {
    // debugger;
    console.log('after render');
  }
  componentDidMount() {
    // debugger;
    console.log('before render');
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <div>hello</div>
      </div>
    );
  }
}
export default Lifecycle;