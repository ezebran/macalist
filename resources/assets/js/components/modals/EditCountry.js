import React,{ Component } from 'react';

class EditCountry extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.editPais = this.editPais.bind(this);
	}

	editPais(e){
		e.preventDefault();
		let nombre = this._nombrePais.value;
		this.props.edit_pais(nombre);
		let carrito = document.getElementById('m-editar-country');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-editar-country');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-editar-country">
				<div className="content-modal">
					<h3>Editar datos del pais</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.editPais} >
							<input type="text" ref={input => (this._nombrePais = input)} placeholder="nombre del pais" className="auth-input" />
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

export default EditCountry;
