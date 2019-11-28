import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <a href='/'>task1</a>
                <a href='/Lifecycle'>task2</a>
                <a href='/Operation'>task3</a>
                <a href='/Bind'>task4</a>
                <a href='/useroutput'>task5</a>
            </div>
        );
    }
}

export default Navbar;