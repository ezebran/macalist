import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteUser from './modals/DeleteUser';
import EditUser from './modals/EditUser';

class UsuariosListNormal extends Component{

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
									<th>Nombre</th>
								</tr>
							</thead>
							<tbody>
							{
								
								this.props.users.map(user => (
									<tr key={user.id}>
										<td><Link to={"/perfil/" + user.id}>{user.email}</Link></td>
										<td>{user.name}</td>


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

export default withRouter(UsuariosListNormal);