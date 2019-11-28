import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router , Route } from 'react-router-dom';
// import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';
import Lifecycle from './Components/Lifecycle/Lifecycle';
import Operation from './Components/Operation/Operation';
import Bind from './Components/Bind/Bind';
import Users from './Components/API/Users';

class App extends Component  {
 
  render(){
  return (
    <div className="App">
    
    <Router> 
   <switch>
   {/* <Route exact path='/' component={Signup}></Route> */}
   <Route exact path='/Signin' component={Signin}></Route>
   <Route exact path='/Lifecycle' component={Lifecycle}></Route>
   <Route exact path='/Operation' component={Operation}></Route> 
   <Route exact path='/Bind' component={Bind}></Route>
   <Route exact path='/useroutput' component={Useroutput}></Route>
   <Route exact path='/' component={Users}></Route>
   </switch>
 </Router>
    
   </div> 
  );
}
}
export default App;





