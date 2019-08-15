import React,{ Component } from 'react';

class DeleteCountry extends Component{
	render(){
		return(
			<div className="modal hide-modal" id="m-delete-country">
				<div className="content-modal">
					<h3>Delete this country?</h3>
					<div className="btn-foot">
						<form action="">
							<button className="btn btn-active">
								Yes
							</button>
						</form>
						
						<a href="#" className="btn">No</a>
					</div>			
				</div>
			</div>
		)
	}
}

export default DeleteCountry;
