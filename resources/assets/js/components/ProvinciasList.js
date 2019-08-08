import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';

class ProvinciasList extends Component{

	async componentDidMount(){

		const { history, location, match } = this.props;
        try{
            let url_pais = `http://127.0.0.1:8000/api/pais/${match.params.id}`;
            let res = await fetch(url_pais);
            let data = await res.json();
            this.setState({
            	provincias: data
            })
            bind(data)
        }catch(error){
            this.setState({
                error
            })
        }
	}
	render(){
		return(
			<div>
				<h1>Listado de provincias</h1>
			</div>
		)
	}
}

export default withRouter(ProvinciasList);