import React, { Component } from 'react';
import './Signin.css';
import images from "../img.jpeg";
import { SocialIcon } from 'react-social-icons';
import Navbar from '../Navbar/Navbar';
class Signin extends Component {
  render() {
    return (
      <div class="container">
        <Navbar/>
        <div class="sign1">
          Signin form</div><br></br>
        <img className="images" src={images}></img>
        <form>
          <input class="name1" type="text" name="email" placeholder="Name or Email"></input><br></br>
          <input class="pass1" type="text" name="password" placeholder="Password"></input>
        </form>
        <div><br></br>

          <input class="check1" type="checkbox"></input>
          Remember me
             </div>
        <div class="pass2">
          ForgetPassword?
                 <div><br></br>
            <button class="sign2">Signin</button>
            <div class="account1"><br></br>
              Create a New accout<br></br>
              (or)
              <div class="icons1">
                <SocialIcon className="icons" url="http://twitter.com/jaketrent" />
                <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
                <SocialIcon className="icons" url="http://google.com/jaketrent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;