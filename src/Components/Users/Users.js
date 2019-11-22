import React, { Component } from 'react';

class Users extends Component {
state = {
Users: [
{ name: "jhon", age: 20 },
{ name: "jill", age: 30 },  
{ name: "mic", age: 40 },
{ name: "angel", age: 50 }
],
title: "User list"
}
makeMeYounger = () => {
const newState = this.state.Users.map((User) => {
const tempUser = User;
tempUser.age -= 10;
return tempUser;
})
console.log(newState);
this.setState({ newState });
}
render() {
return (
<div>
<button onClick={this.makeMeYounger}>make us 10 years younger</button>
<br />
<h1>{this.state.title}</h1>
{
this.state.Users.map((User) => (
<div>User Age={User.age} name={User.name}</div>
))
}
</div>
)
}
}


export default Users;