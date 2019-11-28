import React, { Component } from 'react';
Const User ={props} => {
    let age= props.age>=0? props.age: "NA";
    if(props.children){
       return(
           <li>
    <span> name:{props.children} | age: {age}</span>
    <button onClick={props.delEvent}>Delete</button>
           </li>
       )
    }else{
        return(
            <li>Invalid Entry</li>
        )
    }
}




export default Pratice;