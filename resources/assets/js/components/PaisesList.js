import React,{ Component } from 'react';
import Pais from './Pais';

class PaisesList extends Component{
	render(){
		return(
			<section className="home">

				<main>
					<h1>Location list</h1>
					<table>
						<thead>
							<tr>
								<th>Country</th>
								<th>Province</th>
								<th>Location</th>
								<th>Users</th>
								<th className="tx-center">Action</th>
							</tr>
						</thead>
						<tbody>
							<Pais 
								pais = {this.props.pais}
                    			provincia = {this.props.provincia}
                    			localidad = {this.props.localidad}
							/>
						</tbody>
					</table>
				</main>
			</section>
		)
	}
}

export default PaisesList;