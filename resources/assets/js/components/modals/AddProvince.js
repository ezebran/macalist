import React,{ Component } from 'react';

class AddProvince extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.addProvince = this.addProvince.bind(this);
	}

	addProvince(e){
		e.preventDefault();
		let nombre = this._nombreProvincia.value;
		let pais = this._pais.value;
		this.props.addProvincia(nombre, pais);
		let carrito = document.getElementById('m-add-province');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-add-province');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div className="modal hide-modal" id="m-add-province">
				<div className="content-modal">
					<h3>Agregar provincia</h3>
					<div className="btn-foot">
						<form action="" onSubmit={this.addProvince} className="edit-form" >
							<input type="text" ref={input => (this._nombreProvincia = input)} placeholder="nombre de la provincia" className="auth-input" />
							
							<select name="" className="auth-input" ref={input => (this._pais = input)}>

								{
									this.props.paises.map(pais => (
											<option key={pais.id} value={pais.id} >{pais.nombre}</option>
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
