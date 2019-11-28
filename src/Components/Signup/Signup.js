import React, { Component } from 'react';
import './Signup.css';
import Navbar from '../Navbar/Navbar';

class Signup extends Component {
    render() {
        return (
            <div className="form-color">
                <Navbar/>
                <div>Signup form</div><br></br>
                <div><input type="text" name="Name" placeholder="First name" /></div><br></br>
                <div><input type="text" name="Name" placeholder="Last name" /></div><br></br>
                <div><input type="text" name="gmail" placeholder="mithunhrm07@gamil.com" /></div><br></br>
                <div><input type="text" name="Number" placeholder="enter your phone number" /></div><br></br>
                <div><input type="text" name="Password" placeholder="enter your password" /></div><br></br>
                <div><input type="text" name="conformation" placeholder="conform password" /></div><br></br>
                <div><input type="checkbox" />I agree to terms and privacy policy</div><br></br>
                <button id="background-color" type="submit" value="Submit" class="submit">Signup</button>
                <div><a href="/signin">Signin</a></div>
            </div>
        );
    }
}

export default Signup;