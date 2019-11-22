import React, { Component } from 'react';

class Operation extends Component {
  state = {
    Users: [
      { add: 20 },
    ],
    Users1: [
      { sub: 40 },

    ],
    Users2: [
      { mul: 5 },

    ],
    title: "User list"
  }

  makeMeYounger = () => {
    const newState = this.state.Users.map((User) => {
      const tempUser = User;
      tempUser.add += 5;
      return tempUser;
    })
    console.log(newState);
    this.setState({ newState });
  }
  makeMeYounger1 = () => {
    const newState1 = this.state.Users1.map((User1) => {
      const tempUser1 = User1;

      tempUser1.sub -= 5;

      return tempUser1;

    })
    console.log(newState1);
    this.setState({ newState1 });
  }
  makeMeYounger2 = () => {
    const newState2 = this.state.Users2.map((User2) => {
      const tempUser2 = User2;
      tempUser2.mul *= 5;
      return tempUser2;
    })
    console.log(newState2);
    this.setState({ newState2 });
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.makeMeYounger}>add</button>
          <br />

          <h1>{this.state.title}</h1>
          {
            this.state.Users.map((User) => (
              <div>Addition Operation={User.add}</div>
            ))
          }
        </div>




        <div>
          <button onClick={this.makeMeYounger1}>sub</button>
          <br />

          <h1>{this.state.title}</h1>
          {
            this.state.Users1.map((User1) => (
              <div>Subtraction Operation={User1.sub}</div>
            ))
          }
        </div>
        <div>
          <button onClick={this.makeMeYounger2}>Multiply</button>
          <br />

          <h1>{this.state.title}</h1>
          {
            this.state.Users2.map((User2) => (
              <div>Multiplication Operation={User2.mul}</div>
            ))
          }
        </div>
      </div>
    )
  }
}



export default Operation;