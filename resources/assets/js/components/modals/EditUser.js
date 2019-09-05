import React,{ Component } from 'react';

class EditUser extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.editUser = this.editUser.bind(this);
		this.handlePaisChange = this.handlePaisChange.bind(this);
		this.handleProvinciaChange = this.handleProvinciaChange.bind(this);
	}

	editUser(e){
		e.preventDefault();
		let name = this._name.value;
		let email = this._email.value;
		let localidad = parseInt(this._localidad.value);
		let rol = parseInt(this._rol.value);	
		this.props.editarUser(name,email,rol,localidad);
		let carrito = document.getElementById('m-edit-usuario');
		carrito.classList.toggle("hide-modal");
	}

	handlePaisChange(e){
		this.props.traerProvincias(e.target.value)
	}

	handleProvinciaChange(e){
		this.props.traerLocalidades(e.target.value)
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-edit-usuario');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-edit-usuario">
				<div className="content-modal">
					<h3>Editar datos de la localidad</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.editUser} className="edit-form" >
							<input type="text" ref={input => (this._name = input)} className="auth-input" placeholder="Enter your name.." />
							<input type="text" ref={input => (this._email = input)} className="auth-input" placeholder="Enter your email.." />
							<select name="" className="auth-input" onChange={this.handlePaisChange}>
								<option value="p1">Selecciona un pais</option>
								{
									this.props.paises.map(pais => (
										<option key={pais.id} value={pais.id} >{pais.nombre_p}</option>
										)
									)
								}
							</select>
							<select name="" className="auth-input" onChange={this.handleProvinciaChange}>
								<option value="p1">Selecciona un provincia</option>
								{
									this.props.provincias.map(provin => (
										<option key={provin.id} value={provin.id} >{provin.nombre_pr}</option>
										)
									)
								}
								
							</select>
							<select name="" className="auth-input" ref={input => (this._localidad = input)}>
								<option value="p1">Selecciona una localidad</option>
								{
									this.props.localidades.map(local => (
										<option key={local.id} value={local.id} >{local.nombre_l
										}</option>
										)
									)
								}
							</select>

							<select  name="" className="auth-input" ref={input => (this._rol = input)}>
								<option value="1">root</option>
								<option value="2">normal</option>
							</select>

							<div className="auth-foot">
								<button type="submit" className="btn btn-active">
					                Guardar
					            </button>
					            <a href="#" className="btn" onClick={this.hideModal} >Cancelar</a>
							</div>
							
						</form>
						
					</div>			
				</div>
			</div>
		)
	}
}

export default EditUser;
