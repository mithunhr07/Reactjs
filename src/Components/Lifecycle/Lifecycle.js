import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log('set props');
    }
    componentsDidMount(){
        console.log('after render');
    }
    componentsWillMount(){
        console.log('before render');
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <div>hello</div>
            </div>
        );
    }
}

export default Lifecycle;