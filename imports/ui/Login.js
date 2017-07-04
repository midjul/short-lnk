import React from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.onSubmit=this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    Meteor.loginWithPassword({ email }, password, err => {
      console.log("Login callback", err);

    });
  }
  render() {
    return (
      <div>
        <h1>Short Link</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/signup">Have an Acount?</Link>
      </div>
    );
  }
}

export default Login;
