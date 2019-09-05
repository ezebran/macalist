import React,{ Component } from 'react';

class DeleteUser extends Component{
	constructor(props){
		super(props);
		this.hideModal = this.hideModal.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	deleteUser(e){
		e.preventDefault();
		this.props.delete_user();
		let carrito = document.getElementById('m-delete-user');
		carrito.classList.toggle("hide-modal");
	}

	hideModal(e){
		e.preventDefault();
		let carrito = document.getElementById('m-delete-user');
		carrito.classList.toggle("hide-modal");
	}
	render(){
		return(
			<div className="modal hide-modal" id="m-delete-user">
				<div className="content-modal">
					<h3>¿ Desea eliminar este usuario?</h3>
					<div className="btn-foot">
						<a href="#" className="btn btn-active" onClick={this.deleteUser}>
							Si
						</a>
						<a href="#" className="btn" onClick={this.hideModal} >No</a>
					</div>			
				</div>
			</div>
		)
	}
}

export default DeleteUser;
