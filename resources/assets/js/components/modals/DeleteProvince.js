import React,{ Component } from 'react';

class DeleteProvince extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.deleteProvincia = this.deleteProvincia.bind(this);
	}

	deleteProvincia(e){
		e.preventDefault();
		this.props.eliminarProvincia();
		let carrito = document.getElementById('m-delete-province');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-delete-province');
		carrito.classList.toggle("hide-modal");
	}
	render(){
		return(
			<div className="modal hide-modal" id="m-delete-province">
				<div className="content-modal">
					<h3>¿ Deseas eliminar esta provincia?</h3>
					<div className="btn-foot">
						<a href="#" className="btn btn-active" onClick={this.deleteProvincia}>
							Si
						</a>
						<a href="#" className="btn" onClick={this.hideModal} >No</a>
					</div>			
				</div>
			</div>
		)
	}
}

export default DeleteProvince;
