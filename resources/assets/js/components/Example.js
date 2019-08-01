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
