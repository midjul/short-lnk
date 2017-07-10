import React from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        this.setState({ error: 'Unable to login. Check email and password.' })
      } else {
        this.setState({ error: '' })
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit} noValidate className="boxed-view__form">
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
      </div>
    );
  }
}

export default Login;
