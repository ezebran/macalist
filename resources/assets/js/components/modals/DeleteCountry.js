import React,{ Component } from 'react';

class DeleteCountry extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.deletePais = this.deletePais.bind(this);
	}

	deletePais(e){
		e.preventDefault();
		this.props.delete_pais();
		let carrito = document.getElementById('m-delete-country');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-delete-country');
		carrito.classList.toggle("hide-modal");
	}
	render(){
		return(
			<div className="modal hide-modal" id="m-delete-country">
				<div className="content-modal">
					<h3>Delete this country?</h3>
					<div className="btn-foot">
						<a href="#" className="btn btn-active" onClick={this.deletePais}>
							Yes
						</a>
						<a href="#" className="btn" onClick={this.hideModal} >No</a>
					</div>			
				</div>
			</div>
		)
	}
}

export default DeleteCountry;
