import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteProvince from './modals/DeleteProvince';
import EditProvince from './modals/EditProvince';
import AddProvince from './modals/AddProvince';


class ProvinciasList extends Component{

	constructor(props){
		super(props)
		this.showModal = this.showModal.bind(this);
		this.showModalEdit = this.showModalEdit.bind(this);
		this.showModalAdd = this.showModalAdd.bind(this);
	}

	showModal(id_provincia, e){
		e.preventDefault();
		this.props.selectProvincia(id_provincia)

		let carrito = document.getElementById('m-delete-province');
		carrito.classList.toggle("hide-modal");
	}

	showModalEdit( id_provincia , pais_id , e){
		e.preventDefault();
		this.props.selectProvincia(id_provincia)

		let carrito = document.getElementById('m-edit-province');
		carrito.classList.toggle("hide-modal");
	}

	showModalAdd(e){
		e.preventDefault();

		let carrito = document.getElementById('m-add-province');
		carrito.classList.toggle("hide-modal");
	}

	componentDidMount(){
		const { history, location, match } = this.props;
		this.props.traerProvincias(match.params.id);
	}

	render(){
		return(
			<div>
				<AddProvince addProvincia = {this.props.addProvincia} paises = {this.props.paises} />
				<DeleteProvince eliminarProvincia = {this.props.eliminarProvincia} />
				<EditProvince pais_selected = {this.props.pais_selected} paises = {this.props.paises} editarProvincia = {this.props.editarProvincia}/>
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
				<Aside />
				<section className="home">

					<main>
						<h1>Listado de provincias</h1>
						<a className="btn btn-active mb-btn" href="#" onClick={this.showModalAdd} >Agregar una provincia</a>
						<table className="w-50">
							<thead>
								<tr>
									<th>Country</th>
									<th className="tx-right">Action</th>
								</tr>
							</thead>
							<tbody>
							{
								
								this.props.provincias.map(provi => (
									<tr key={provi.id}>
										<td><Link to={"/pais/provincia/" + provi.id} >{provi.nombre_pr}</Link></td>

										<td className="tx-right ">
											<a href="#" onClick={this.showModalEdit.bind(null, provi.id, provi.pais_id)}><span className="icon-edit"></span></a>
											<a href="#" className="i-delete" onClick={this.showModal.bind(null, provi.id)}><span className="icon-trash-o"></span></a>
										</td>
									</tr>
								))
							}

							</tbody>
						</table>
					</main>
				</section>
				{
							
					this.props.provincias.map(provi => (
						<p key={provi.id}>{provi.nombre}</p>
					))
				}
			</div>
		)
	}
}

export default withRouter(ProvinciasList);