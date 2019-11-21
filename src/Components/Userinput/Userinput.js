import React, { Component } from 'react';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="enter your name"></input>
            </div>
        );
    }
}

export default Userinput;