import React,{ Component } from 'react';

class EditProvince extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.editProvince = this.editProvince.bind(this);
	}

	editProvince(e){
		e.preventDefault();
		let nombre = this._nombreProvincia.value;
		this.props.edit_provincia(nombre);
		let carrito = document.getElementById('m-edit-province');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-edit-province');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-edit-province">
				<div className="content-modal">
					<h3>Editar datos de la provincia</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.editProvince} >
							<input type="text" ref={input => (this._nombreProvincia = input)} placeholder="nombre de la provincia" className="auth-input" />
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

export default EditProvince;
