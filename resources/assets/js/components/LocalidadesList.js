import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';

class LocalidadesList extends Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerLocalidades(match.params.id);
	}

	render(){
		return(
			<div>
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
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
								
								this.props.localidades.map(localidad => (
									<tr key={localidad.id}>
										<td>{localidad.nombre}</td>

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

export default withRouter(LocalidadesList);