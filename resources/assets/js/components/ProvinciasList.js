import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';

class ProvinciasList extends Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		const { history, location, match } = this.props;

		this.props.funsho(match.params.id);
	}

	render(){
		return(
			<div>
				<Header />
				<Aside />
				<section className="home">

					<main>
						<h1>Location list</h1>
						<table className="w-50">
							<thead>
								<tr>
									<th>Country</th>
									<th className="tx-right">Action</th>
								</tr>
							</thead>
							<tbody>
							{
								
								this.props.provincias.map(provi => (
									<tr key={provi.id}>
										<td><Link to={"/pais/provincia/:id" + provi.id} >{provi.nombre}</Link></td>

										<td className="tx-right ">
											<a href="#"><span className="icon-edit"></span></a>
											<a href="#" className="i-delete"><span className="icon-trash-o"></span></a>
										</td>
									</tr>
								))
							}

							</tbody>
						</table>
					</main>
				</section>
				{
							
					this.props.provincias.map(provi => (
						<p key={provi.id}>{provi.nombre}</p>
					))
				}
			</div>
		)
	}
}

export default withRouter(ProvinciasList);