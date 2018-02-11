import React, {Component} from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="container login">
    <h5 className="login__title primary-text-color">Login / Signup</h5>
    <div className="z-depth-1 row form-container">
        <form className="col s12">
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <a id="btn-signup" className="col s5 offset-s1 accent-color btn waves-effect waves-light">Signup
                    </a>
                    <a id="btn-login" className="col s5 offset-s1 accent-color btn waves-effect waves-light">Login
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
    );
  }
}
export default Login;
