import React,{ Component } from 'react';
import Logo from './static/logo.png';

class Header extends Component{
	render(){
		return(
			<header>
				<img src={Logo} />
				<h5>Welcome <b>Root!</b></h5>
			</header>
		)
	}
}

export default Header;