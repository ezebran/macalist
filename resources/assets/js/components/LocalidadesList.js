import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteLocalidad from './modals/DeleteLocalidad';

class LocalidadesList extends Component{

	constructor(props){
		super(props)
		this.showModal = this.showModal.bind(this)
	}

	showModal(id_localidad, e){
		e.preventDefault();
		this.props.selectLocalidad(id_localidad)

		let carrito = document.getElementById('m-delete-localidad');
		carrito.classList.toggle("hide-modal");
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerLocalidades(match.params.id);
	}

	render(){
		return(
			<div>
				<DeleteLocalidad eliminarLocalidad = {this.props.eliminarLocalidad} />
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
				<Aside />
				<section className="home">

					<main>
						<h1>Listado de localidades</h1>
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
											<a href="#" ><span className="icon-edit"></span></a>
											<a href="#" className="i-delete" onClick={this.showModal.bind(null, localidad.id)}><span className="icon-trash-o"></span></a>
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