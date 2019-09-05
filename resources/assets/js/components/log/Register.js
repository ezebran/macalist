import React,{ Component } from 'react';
import Logo from './../static/logo.png';
import { Link, withRouter } from "react-router-dom";

class Login extends Component{
	constructor(props){
		super(props)
		this.handleRegister = this.handleRegister.bind(this);
		this.handlePaisChange = this.handlePaisChange.bind(this);
		this.handleProvinciaChange = this.handleProvinciaChange.bind(this);
	}
	handleRegister(e){
		e.preventDefault();

		let name = this._name.value;
		let email = this._email.value;
		let pass = this._password.value;
		let localidad = parseInt(this._localidad.value);
		this.props._registerUser(name,email,pass,1,localidad);		
	}

	handlePaisChange(e){
		this.props.traerProvincias(e.target.value)
	}

	handleProvinciaChange(e){
		this.props.traerLocalidades(e.target.value)
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
					<select name="" className="auth-input" onChange={this.handlePaisChange}>
						<option value="p1">Selecciona un pais</option>
						{
							this.props.pais.map(pais => (
								<option key={pais.id} value={pais.id} >{pais.nombre_p}</option>
								)
							)
						}
					</select>
					<select name="" className="auth-input" onChange={this.handleProvinciaChange}>
						<option value="p1">Selecciona un provincia</option>
						{
							this.props.provincias.map(provin => (
								<option key={provin.id} value={provin.id} >{provin.nombre_pr}</option>
								)
							)
						}
						
					</select>
					<select name="" className="auth-input" ref={input => (this._localidad = input)}>
						<option value="p1">Selecciona una localidad</option>
						{
							this.props.localidades.map(local => (
								<option key={local.id} value={local.id} >{local.nombre_l
								}</option>
								)
							)
						}
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