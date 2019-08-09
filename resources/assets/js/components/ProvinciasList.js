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
				<h1>Listado de provincias</h1>
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