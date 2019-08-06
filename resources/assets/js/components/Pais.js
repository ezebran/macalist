import React,{ Component } from 'react';

class Pais extends Component{
	render(){
		return(
			<tr>
				<td>{this.props.pais}</td>

				<td className="tx-right ">
					<a href="#"><span className="icon-edit"></span></a>
					<a href="#" className="i-delete"><span className="icon-trash-o"></span></a>
				</td>
			</tr>
		)
	}
}

export default Pais;