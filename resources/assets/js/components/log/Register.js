import React,{ Component } from 'react';
import Logo from './../static/logo.png';
import { Link, withRouter } from "react-router-dom";

class Login extends Component{
	constructor(props){
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
	}
	handleRegister(e){
		e.preventDefault();

		let name = this._name.value;
		let email = this._email.value;
		let pass = this._password.value;
		this.props._registerUser(name,email,pass);
	}
	componentDidMount(){
		const { history, location, match } = this.props;
	}
	render(){
		return(
			<section className="auth">
				<div className="white-side"></div>
				<form className="auth-form login" id="login-form" action="" onSubmit={this.handleRegister} method="post">
					<img src={Logo} />

					<h3>Register</h3>

					<input type="text" ref={input => (this._name = input)} className="auth-input" placeholder="Enter your name.." />
					<input type="text" ref={input => (this._email = input)} className="auth-input" placeholder="Enter your email.." />
					<input type="password" ref={input => (this._password = input)} className="auth-input" placeholder="Enter a password.." />
					<select name="" className="auth-input">
						<option value="p1">Select a country</option>
					</select>
					<select name="" className="auth-input">
						<option value="p1">Select a province</option>
					</select>
					<select name="" className="auth-input">
						<option value="p1">Select a location</option>
					</select>

					<div className="auth-foot">
						<button type="submit" className="btn btn-active">
			                Register
			            </button>
			            
			            <Link to={"/"} >Or log in</Link>
					</div>
				</form>
			</section>
		)
	}
}

export default Login;