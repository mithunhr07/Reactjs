import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Signup from './Components/Signup/Signup';
// import Signin from './Components/Signin/Signin';
// import {BrowserRouter as Router , Route } from 'react-router-dom';
// import Userinput from './Components/Userinput/Userinput';
// import Useroutput from './Components/Useroutput/Useroutput';
import Lifecycle from './Components/Lifecycle/Lifecycle';
import Users from './Components/Users/Users';
import Operation from './Components/Operation/Operation';

class App extends Component  {
  state={
    Useroutput:[{
      name:"Mithun", age:"24"
    }]
  }
  buttonClickHandler=()=>{
    console.log('clicked');
    this.setState({
      Useroutput:[{
        name: 'Bindu', age:'23'
      }]
    })
  }
  render(){
  return (
    <div className="App">
    {/* <button onClick={this.buttonClickHandler}>click here</button>
    <p>i am {this.state.Useroutput[0].name} my age is {this.state.Useroutput[0].age}</p>
    <Userinput/>
    <Useroutput name="Mithun" age="24"/>
    <Useroutput name="Mithun" age="24"/> */}
    {/* <Lifecycle/> */}
    {/* <Users/> */}
    <Operation/>
    
    
   </div>
  );
}
}
export default App;
