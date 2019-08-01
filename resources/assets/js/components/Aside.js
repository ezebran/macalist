import React,{ Component } from 'react';

class Aside extends Component{
	render(){
		return(
		<aside>
			<ul>
				<li>
					<a href="#">
						<span className="icon-user-o">
						</span>USERS</a>
				</li>
				<li>
					<a href="#">
					<span className="icon-map-o">
					</span>LOCATIONS</a>
				</li>
			</ul>
		</aside>
		)
	}
}

export default Aside;