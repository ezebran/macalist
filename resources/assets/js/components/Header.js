import React,{ Component } from 'react';

class Header extends Component{
	render(){
		return(
			<header>
				<img src="assets/images/logo.png" />
				<h5>Welcome <b>Root!</b></h5>
			</header>
		)
	}
}

export default Header;