import React from 'react';
import {Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';


export default class Signup extends React.Component{
    constructor(props){
        super(props);
     this.state={
         error:''
     }
  this.onSubmit=this.onSubmit.bind(this);
    }
 onSubmit(e){
     e.preventDefault();
     let email=this.refs.email.value;
     let password=this.refs.password.value;

    Accounts.createUser({email, password}, (err)=>{
        console.log('Signup callback', err); 
    }); 
    /* this.setState({
         error:'Something went wrong'
     })
     */
 } 
    render(){
        return (<div>
            <h1>Join Short Link</h1>
            {this.state.error? <p>{this.state.error}</p> : undefined }
            <form onSubmit={this.onSubmit}>
               <input type="email" ref="email" name="email" placeholder="Email" /> 
                <input type="password" ref="password" name="password" placeholder="Password" />
                <button>Create Account</button>
            </form>
           <Link to="/">Already have an account?</Link> 
        </div>)
    }
}