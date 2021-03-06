import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteUser from './modals/DeleteUser';
import EditUser from './modals/EditUser';

class UsuariosList extends Component{

	constructor(props){
		super(props)
		this.showModal = this.showModal.bind(this);
		this.showModalEdit = this.showModalEdit.bind(this);
	}

	showModal(id_user, e){
		e.preventDefault();
		this.props.selectUser(id_user)

		let carrito = document.getElementById('m-delete-user');
		carrito.classList.toggle("hide-modal");
	}

	showModalEdit(id_user, e){
		e.preventDefault();
		this.props.selectUser(id_user)
		let carrito = document.getElementById('m-edit-usuario');
		carrito.classList.toggle("hide-modal");
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerUsuarios();
		this.props.traerLocalidades();
	}

	render(){
		return(
			<div>
				<EditUser editarUser = {this.props.editarUser} paises = {this.props.pais} localidades = {this.props.localidades} provincias = {this.props.provincias} traerProvincias = { this.props.traerProvincias } traerLocalidades = {this.props.traerLocalidades}/>
				<DeleteUser delete_user = {this.props.eliminarUser} />
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
				<Aside />
				<section className="home">

					<main>
						<h1>Listado de usuarios</h1>
						{/*<a className="btn btn-active mb-btn" href="#" onClick={this.showModalAdd} >Agregar una provincia</a>*/}
						<table className="w-50">
							<thead>
								<tr>
									<th>Email</th>
									<th>Rol</th>
									<th>Pais</th>
									<th>Provincia</th>
									<th>Localidad</th>
									<th className="tx-right">Accion</th>
								</tr>
							</thead>
							<tbody>
							{
								
								this.props.users.map(user => (
									<tr key={user.id}>
										<td><Link to={"/perfil/" + user.id}>{user.email}</Link></td>
										<td>{user.nombre}</td>
										<td>{user.nombre_p}</td>
										<td>{user.nombre_pr}</td>
										<td>{user.nombre_l}</td>


										<td className="tx-right ">
											<a href="#" onClick={this.showModalEdit.bind(null, user.id)}><span className="icon-edit"></span></a>
											<a href="#" className="i-delete" onClick={this.showModal.bind(null, user.id)}><span className="icon-trash-o"></span></a>
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

export default withRouter(UsuariosList);