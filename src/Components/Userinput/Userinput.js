import React, { Component } from 'react';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
    state={
        Useroutput:[{
          name:"bindu", age:"23"
        }] 
      }
      buttonClickHandler=()=>{
        console.log('hi');
        this.setState({
          Useroutput:[{
            name:'hithu' , age:'24'
          }]
        })
      }
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="enter your name"></input>
                <p>i am {this.state.Useroutput[0].name} my age is {this.state.Useroutput[0].age}</p>
    <button onClick={this.buttonClickHandler}>click me</button>
    <Useroutput name="bindu" age="23"/>
    <Useroutput name="bindu" age="23"/>
            </div>
        );
    }
}

export default Userinput;