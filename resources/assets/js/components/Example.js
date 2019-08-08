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

        const URL = 'http://127.0.0.1:8000'

        this.state = {
            paises: [],
            paisId: 0,
            provincias: [],
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

        
    }



    render() {
        return (
            <BrowserRouter>
           
                <Switch>
                    <Route 
                    path="/pais/:id"
                    component={ProvinciasList} />
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
