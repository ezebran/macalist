import React,{ Component } from 'react';

class DeleteLocalidad extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.deleteLocalidad = this.deleteLocalidad.bind(this);
	}

	deleteLocalidad(e){
		e.preventDefault();
		this.props.eliminarLocalidad();
		let carrito = document.getElementById('m-delete-localidad');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-delete-localidad');
		carrito.classList.toggle("hide-modal");
	}
	render(){
		return(
			<div className="modal hide-modal" id="m-delete-localidad">
				<div className="content-modal">
					<h3>¿ Deseas eliminar esta localidad?</h3>
					<div className="btn-foot">
						<a href="#" className="btn btn-active" onClick={this.deleteLocalidad}>
							Si
						</a>
						<a href="#" className="btn" onClick={this.hideModal} >No</a>
					</div>			
				</div>
			</div>
		)
	}
}

export default DeleteLocalidad;
