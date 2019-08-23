import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
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

  	componentDidMount(){
  		var id_paisDelete;
  	}

	showModal(id_pais, e){
		e.preventDefault();
		this.props.pais_selected(id_pais)

		let carrito = document.getElementById('m-delete-country');
		carrito.classList.toggle("hide-modal");
	}

	render(){
		return(
			<div>
			<DeleteCountry delete_pais = {this.props.deletePais} />
			<Header userData = {this.props.userData} logOut = {this.props.logOut}/>
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
										<a href="#"  ><span className="icon-edit"></span></a>
										<a href="#" className="i-delete" onClick={this.showModal.bind(null, pais.id)} id={pais.id}><span className="icon-trash-o"></span></a>
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