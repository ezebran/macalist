import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';

export default class Example extends Component {

    constructor(props){
        super(props)

        this.state = {
            paises: 'Sin paises',
            provincias: 'Sin provincias',
            localidades: 'Sin localidades'
        }
    }

    async componentDidMount(){
        try{
            let res = await fetch('http://127.0.0.1:8000/api/paises/mostrar')
            let data = await res.json()
            this.setState({
                paises: data.paises[0].nombre
            })
            // console.log(data.paises[0].nombre)
        }catch(error){
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Aside />
                <PaisesList
                    pais = {this.state.paises}
                    provincia = {this.state.provincias}
                    localidad = {this.state.localidades}
                />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
