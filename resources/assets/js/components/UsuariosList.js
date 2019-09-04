import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';

class UsuariosList extends Component{

	constructor(props){
		super(props)

	}


	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerUsuarios();
		this.props.traerLocalidades();
		console.log(this.props.users, "desde UsuariosList")
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
										<td>{user.email}</td>
										<td>{user.nombre}</td>
										<td>{user.nombre_p}</td>
										<td>{user.nombre_pr}</td>
										<td>{user.nombre_l}</td>


										<td className="tx-right ">
											<a href="#" ><span className="icon-edit"></span></a>
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

export default withRouter(UsuariosList);