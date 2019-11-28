import React, { Component } from 'react';
import Contacts from './Contacts';

class Users extends Component {
  render() {
    return (
      <Contacts list1={this.state.list1} list={this.state.list} />
    )
  }
  state = {
    list: ' ',
    list1: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
        // console.log(this.state.list);
      })
      .catch(console.log)
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((hello) => {
        this.setState({ list1: hello })
        // console.log(this.state.list1);
      })
      .catch(console.log)
  }
}
export default Users;