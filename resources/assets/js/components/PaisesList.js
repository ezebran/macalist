import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteCountry from './modals/DeleteCountry';
import EditCountry from './modals/EditCountry';
import AddCountry from './modals/AddCountry';
import $ from "jquery";

class PaisesList extends Component{
  constructor(props) {
    super(props);
    const { history } = props;

    this.showModal = this.showModal.bind(this);
    this.showModalEdit = this.showModalEdit.bind(this);
    this.selectPais = this.selectPais.bind(this);
    this.showModalAdd = this.showModalAdd.bind(this);
  }

  	selectPais(id_pais, e){
		// e.preventDefault();
		this.props.pais_selected(id_pais)
  	}

	showModal(id_pais, e){
		e.preventDefault();
		this.props.pais_selected(id_pais)

		let carrito = document.getElementById('m-delete-country');
		carrito.classList.toggle("hide-modal");
	}

	showModalEdit(id_pais, e){
		e.preventDefault();
		this.props.pais_selected(id_pais)

		let editar = document.getElementById('m-editar-country');
		editar.classList.toggle("hide-modal");
	}

	showModalAdd(e){
		e.preventDefault();

		let carrito = document.getElementById('m-add-country');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div>
			<AddCountry add_pais = {this.props.add_pais} />
			<DeleteCountry delete_pais = {this.props.deletePais} />
			<EditCountry edit_pais = {this.props.edit_pais} />
			<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
			<Aside />
			<section className="home">

				<main>
					<h1>Listado de paises</h1>
					<a className="btn btn-active mb-btn" href="#" onClick={this.showModalAdd}>Agregar un pais</a>
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
									<td><Link to={"/pais/" + pais.id} onClick={this.selectPais.bind(null, pais.id)} >{pais.nombre}</Link></td>

									<td className="tx-right ">
										<a href="#" className="edit-country-class" onClick={this.showModalEdit.bind(null, pais.id)} ><span className="icon-edit"></span></a>
										<a href="#" className="i-delete" onClick={this.showModal.bind(null, pais.id)} id={pais.id}><span className="icon-trash-o"></span></a>
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

export default withRouter(PaisesList);