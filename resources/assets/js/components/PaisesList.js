import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Pais from './Pais';
import Header from './Header';
import Aside from './Aside';
import DeleteCountry from './modals/DeleteCountry';
import $ from "jquery";

class PaisesList extends Component{
  constructor(props) {
    super(props);
    const { history } = props;

    this.showModal = this.showModal.bind(this);
  }

  showModal(id_pais, e){
  	e.preventDefault();
  	console.log(id_pais);
  }

	render(){
		return(
			<div>
			<DeleteCountry />
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
							
							this.props.pais.map(pais => (
								<tr key={pais.id}>
									<td><Link to={"/pais/" + pais.id} >{pais.nombre}</Link></td>

									<td className="tx-right ">
										<a href="#" onClick={this.showModal.bind(null, pais.id)} id={pais.id} ><span className="icon-edit"></span></a>
										<a href="#" className="i-delete"><span className="icon-trash-o"></span></a>
									</td>
								</tr>
							))
						}

						</tbody>
					</table>
				</main>
			</section>
			</div>
		)
	}
}

export default withRouter(PaisesList);