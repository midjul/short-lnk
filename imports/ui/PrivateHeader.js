import React from 'react';
import { Accounts } from "meteor/accounts-base";
import PropTypes from 'prop-types';

class PrivateHeader extends React.Component{
  constructor(props){
          super(props);
  this.onLogout=this.onLogout.bind(this);
  }
  onLogout(){
    Accounts.logout();
   }
    render(){
        return (  <div>
                   <h1>{this.props.title}</h1>
                   <button onClick={this.onLogout}>Logout</button>
                 </div>
        )
    }
}

PrivateHeader.propTypes={
  title:PropTypes.string.isRequired
}
export default PrivateHeader;