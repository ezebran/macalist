import React,{ Component } from 'react';
import { Link } from "react-router-dom";

class Aside extends Component{
	render(){
		return(
		<aside>
			<ul>
				<li>
					<a href="#">
						<span className="icon-user-o">
						</span>USUARIOS</a>
				</li>
				<li>
					<Link to={"/paises"}>
					<span className="icon-map-o">
					</span>PAISES</Link>
				</li>
			</ul>
		</aside>
		)
	}
}

export default Aside;