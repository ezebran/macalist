import React,{ Component } from 'react';
import Header from './Header';
import Aside from './Aside';

class ProvinciasList extends Component{
	render(){
		return(
			<div>
			<Header />
			<Aside />
			<section className="home">

				<main>
					<h1>Provincias list</h1>
					<table className="w-50">
						<thead>
							<tr>
								<th>Country</th>
								<th className="tx-right">Action</th>
							</tr>
						</thead>
						<tbody>


						</tbody>
					</table>
				</main>
			</section>
			</div>
		)
	}
}

export default ProvinciasList;