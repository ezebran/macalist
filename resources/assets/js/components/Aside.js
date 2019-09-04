import React,{ Component } from 'react';
import { Link } from "react-router-dom";

class Aside extends Component{
	render(){
		return(
		<aside>
			<ul>
				<li>
					<Link to={"/usuarios"}>
						<span className="icon-user-o">
						</span>USUARIOS</Link>
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