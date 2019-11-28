import React, { Component } from 'react';
import Pratice from './Component/Pratice';
import UniqueID from 'react-html-id';

class Pratice1 extends Component{
    constructor(){
        super();
        UniqueID.enableUniqueIds(this);
        this.state={
            Users:[
                {id:this.nextUniqueId(), name:'Mithun', age:24},
                {id:this.nextUniqueId(), name:'Rajashekar', age:40},
                {id:this.nextUniqueId(), name:'Vicky', age:50},
            ]
        };
    }
    deleteUser=(index, e)=>{
        console.log(index);
        Const Users =Object.assign([], this.state.Users);
        Users.Splice(index, 1);
        this.setState({Users:Users});
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.Users.map((User, index)=>{
                            return(<div><User delEvent={this.deleteUser.bind(this, index)}
                        age={User, age}>{User.name}</User></div>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Pratice1;