import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import Pais from './Pais';
import Header from './Header';
import Aside from './Aside';

class PaisesList extends Component{
	render(){
	// function selectPais(e) {
	// 	// e.preventDefault();
	// 	this.setState({
	// 		paisId: pais.id
	// 	})
	// }
		return(
			<div>
			<Header />
			<Aside />
			<section className="home">

				<main>
					<h1>Location list</h1>
					<table className="w-50">
						<thead>
							<tr>
								<th>Country</th>
								<th className="tx-right">Action</th>
							</tr>
						</thead>
						<tbody>
						{
							
							this.props.pais.map(pais => (
								<tr key={pais.id}>
									<td><Link to={"/pais/" + pais.id} >{pais.nombre}</Link></td>

									<td className="tx-right ">
										<a href="#"><span className="icon-edit"></span></a>
										<a href="#" className="i-delete"><span className="icon-trash-o"></span></a>
									</td>
								</tr>
							))
						}

						</tbody>
					</table>
				</main>
			</section>
			</div>
		)
	}
}

export default PaisesList;