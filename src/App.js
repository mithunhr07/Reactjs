import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Lifecycle from './Components/Lifecycle/Lifecycle';
function App() {
  return (
    <div className="App">
      {/* <Router>
   <switch> */}
     {/* <Route exact path='/' component={Signup}></Route>
     <Route exact path='/signin' component={Signin}></Route> */}
    {/* </switch>
     </Router> */}
    <Lifecycle/>
    </div>
  );
}

export default App;
