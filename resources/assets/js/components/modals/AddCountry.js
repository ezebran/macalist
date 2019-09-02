import React,{ Component } from 'react';

class AddCountry extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.addPais = this.addPais.bind(this);
	}

	addPais(e){
		e.preventDefault();
		let nombre = this._nombrePais.value;
		this.props.add_pais(nombre);
		let carrito = document.getElementById('m-add-country');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-add-country');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-add-country">
				<div className="content-modal">
					<h3>Agregar pais</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.addPais} className="edit-form" >
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

export default AddCountry;
