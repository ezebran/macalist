import React,{ Component } from 'react';
import Logo from './../static/logo.png';
import { Link, withRouter } from "react-router-dom";

class Login extends Component{
	constructor(props){
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleLogin(e){
		e.preventDefault();

		let email = this._email.value;
		let pass = this._password.value;
		this.props._loginUser(email,pass);
	}
	componentDidMount(){
		const { history, location, match } = this.props;

		

		// this.props._loginUser(match.params.id);
	}
	render(){
		return(
			<section className="auth">
				<div className="white-side"></div>
				<form className="auth-form login" id="login-form" action="" onSubmit={this.handleLogin} method="post" >
					<img src={Logo} />

					<h3>Log in</h3>

					<input type="text" ref={input => (this._email = input)} className="auth-input" placeholder="Enter your email.." />
					<input type="password" ref={input => (this._password = input)} className="auth-input" placeholder="Enter your password.." />

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
			            <Link to={"/register"} >Or register</Link>
					</div>
				</form>
			</section>
		)
	}
}

export default Login;