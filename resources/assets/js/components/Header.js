import React,{ Component } from 'react';
import Logo from './static/logo.png';

class Header extends Component{
	constructor(props){
		super(props)
		this.logOutUser = this.logOutUser.bind(this);
	}

	logOutUser(e){
		e.preventDefault();

		this.props.logOut()

	}

	render(){
		return(
			<header>
				<img src={Logo} />
				<h5>Welcome <b> {JSON.parse(localStorage["appState"]).user.name} !! <i><a href="#" onClick={this.logOutUser}>Salir</a></i></b></h5>
			</header>
		)
	}
}

export default Header;