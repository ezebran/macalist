import React,{ Component } from 'react';
import Logo from './../static/logo.png';
import { Link, withRouter } from "react-router-dom";

class Login extends Component{
	render(){
		return(
			<section className="auth">
				<div className="white-side"></div>
				<form className="auth-form login">
					<img src={Logo} />

					<h3>Log in</h3>

					<input type="text" className="auth-input" placeholder="Enter your email.." />
					<input type="text" className="auth-input" placeholder="Enter your password.." />

					<div className="auth-foot">
						<div className="remember">
							<input type="checkbox" />
							<h6>Remember me</h6>
						</div>
						<a href="#">Forgot your password?</a>
					</div>

					<div className="auth-foot">
						<button type="submit" className="btn btn-active">
			                Enter
			            </button>
			            <a href="register.html" className="btn">Or register</a>
					</div>
				</form>
			</section>
		)
	}
}

export default Login;