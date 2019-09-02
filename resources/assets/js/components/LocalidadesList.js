import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteLocalidad from './modals/DeleteLocalidad';
import EditLocalidad from './modals/EditLocalidad';

class LocalidadesList extends Component{

	constructor(props){
		super(props)
		this.showModal = this.showModal.bind(this)
		this.showModalEdit = this.showModalEdit.bind(this)
	}

	showModal(id_localidad, e){
		e.preventDefault();
		this.props.selectLocalidad(id_localidad)

		let carrito = document.getElementById('m-delete-localidad');
		carrito.classList.toggle("hide-modal");
	}

	showModalEdit( id_localidad , id_provincia , e){
		e.preventDefault();
		this.props.selectLocalidad(id_localidad)
		console.log("desde el showModaledit de localidades", id_localidad ,id_provincia)
		let carrito = document.getElementById('m-edit-localidad');
		carrito.classList.toggle("hide-modal");
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerLocalidades(match.params.id);
	}

	render(){
		return(
			<div>
				<EditLocalidad editarLocalidad = {this.props.editarLocalidad} provincias = {this.props.provincias} />
				<DeleteLocalidad eliminarLocalidad = {this.props.eliminarLocalidad} />
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
				<Aside />
				<section className="home">

					<main>
						<h1>Listado de localidades</h1>
						<a className="btn btn-active mb-btn" href="#">Agregar una localidad</a>
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
											<a href="#" onClick={this.showModalEdit.bind(null, localidad.id, localidad.provincia_id)} ><span className="icon-edit"></span></a>
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