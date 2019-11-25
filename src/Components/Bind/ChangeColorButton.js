import React, { Component } from 'react';

class ChangeColorButton extends Component {
        constructor(props) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
          this.props.clickHandler();
        }
        render() {
          return (
            <button onClick={this.handleClick}>I dont like {this.props.currentColor}</button>
          );
        }
      } 
      

export default ChangeColorButton;