import React,{ Component } from 'react';

class AddProvince extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.addLocalidad = this.addLocalidad.bind(this);
	}

	addLocalidad(e){
		e.preventDefault();
		let nombre = this._nombreLocalidad.value;
		let provincia = this._provincia.value;
		this.props.addLocalidad(nombre, provincia);
		let carrito = document.getElementById('m-add-localidad');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-add-localidad');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-add-localidad">
				<div className="content-modal">
					<h3>Agregar localidad</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.addLocalidad} className="edit-form" >
							<input type="text" ref={input => (this._nombreLocalidad = input)} placeholder="nombre de la localidad" className="auth-input" />
							
							<select name="" className="auth-input" ref={input => (this._provincia = input)}>

								{
									this.props.provincias.map(provi => (
											<option key={provi.id} value={provi.id} >{provi.nombre}</option>
										)
									)
								}
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

export default AddProvince;
