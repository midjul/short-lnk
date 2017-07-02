import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component{
    render(){
        return (
            <div>
            <h1>Login to SHort Link</h1>
             login from here 

             <Link to="/signup">Have an Acount?</Link> 
            </div>
        )
    }
}

export default Login;