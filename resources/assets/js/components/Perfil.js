import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import DeleteUser from './modals/DeleteUser';
import EditUser from './modals/EditUser';

class Perfil extends Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.traerPerfil(match.params.id);
	}

	render(){
		return(
			<div>
				<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
				<Aside />
				<section className="home">
					{this.props.perfil.map(user => (
					<main key={user.id}>
						
							<h1>{user.name}</h1>

							<ul className="ubicacion">
								<li><span className="icon-location2"></span>Pais: <i>{user.nombre_p}</i></li>
								<li><span className="icon-location2"></span>Provincia: <i>{user.nombre_pr}</i></li>
								<li><span className="icon-location2"></span>Localidad: <i>{user.nombre_l}</i></li>
							</ul>
							<div className="sub-info-perfil">
								<h4>Correo: {user.email}</h4>
								<h4>Rol: <b>{user.nombre}</b></h4>
							</div>
						
					</main>
					))}
				</section>
			</div>
		)
	}
}

export default withRouter(Perfil);