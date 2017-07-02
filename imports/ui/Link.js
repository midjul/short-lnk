import React from 'react';
import {browserHistory} from 'react-router';

class Link extends React.Component{
    constructor(){
        super();
        this.onLogout=this.onLogout.bind(this);
    }
    onLogout(){
    browserHistory.push('/');
    }
    render(){
        return(
            <div>
            <h1>Your Links</h1>
              <button onClick={this.onLogout}>Logout</button> 
            </div>
        )
    }
}


export default Link;