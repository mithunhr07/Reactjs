import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
class Operation extends Component {
  state = {
    n1: 20,
    n2: 20,
    n3: 20
  }

  subtraction = () => {
    if (this.state.n1 > 0) {
      this.setState({
        n1: this.state.n1 - 5
      })
    }
  }
  addition = () => {
    this.setState({
      n2: this.state.n2 + 5
    })
  }
  multiplication = () => {
    this.setState({
      n3: this.state.n3 * 5
    })
  }
  render() {
    return (
      <div>
        <Navbar/>
        <button onClick={this.subtraction}>sub</button>
        <div>{this.state.n1}</div>
        <button onClick={this.addition}>add</button>
        <div>{this.state.n2}</div>
        <button onClick={this.multiplication}>mul</button>
        <div>{this.state.n3}</div>
      </div>
    );
  }
}
export default Operation;