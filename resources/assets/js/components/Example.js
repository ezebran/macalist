import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';
import ProvinciasList from './ProvinciasList';



export default class Example extends Component {

    

    constructor(props){
        super(props)

        const URL = 'http://127.0.0.1:8000'

        this.state = {
            paises: [],
            paisId: 1,
            provincias: 'Sin provincias',
            localidades: 'Sin localidades'
        }
    }

    async componentDidMount(){
        try{
            let res = await fetch('http://127.0.0.1:8000/api/paises/mostrar')
            let data = await res.json()
            this.setState({
                paises: data
            })
        }catch(error){
            this.setState({
                error
            })
        }

        try{
            let url_pais = `http://127.0.0.1:8000/api/pais/${this.state.paisId}`;
            let res = await fetch(url_pais)
            let data = await res.json()
            this.setState({
                provincias: data
            })
            console.log(data)
        }catch(error){
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
           
                <Switch>
                    <Route 
                        exact path="/" 
                        component={() => <PaisesList pais = {this.state.paises} />} />
                    <Route path="/pais/:id" component="ProvinciasList" />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
