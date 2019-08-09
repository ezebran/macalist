import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';
import ProvinciasList from './ProvinciasList';
import Coso from './Coso';



export default class Example extends Component {

    constructor(props){
        super(props)

        this.state = {
            paises: [],
            provincias: [],
            localidades: 'Sin localidades'
        }
        this.cosoFunshon = this.cosoFunshon.bind(this);
    }

    async cosoFunshon(idpais){
 
        try{
            let url_pais = `http://127.0.0.1:8000/api/pais/${idpais}`;
            var cosas = []
            await fetch(url_pais)
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(provincias => {
                    this.setState({
                        provincias: provincias
                    })
                })

        }catch(error){
            this.setState({
                error
            })
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
    }
    render() {

        return (
            <BrowserRouter>
           
                <Switch>
                    <Route 
                    path="/pais/:id"
                    render={(props) => <ProvinciasList {...props} funsho = {this.cosoFunshon} provincias = {this.state.provincias} isAuthed={true} />} />
                    <Route 
                        path="/" 
                        component={() => <PaisesList pais = {this.state.paises}  />} />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
