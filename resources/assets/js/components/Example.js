import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';
import ProvinciasList from './ProvinciasList';
import LocalidadesList from './LocalidadesList';
import Login from './log/Login';
import axios from 'axios';




export default class Example extends Component {

    constructor(props){
        super(props)

        this.state = {
            paises: [],
            provincias: [],
            localidades: [],
            isLoggedIn: false,
            user: {}
        }
        this.traerProvincias = this.traerProvincias.bind(this);
        this.traerLocalidades = this.traerLocalidades.bind(this);
        this._loginUser = this._loginUser.bind(this);
    }

    async traerProvincias(idpais){
 
        try{
            let url_pais = `http://127.0.0.1:8000/api/pais/${idpais}`;

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

    async traerLocalidades(idprovincia){
 
        try{
            let url_pais = `http://127.0.0.1:8000/api/pais/provincia/${idprovincia}`;

            await fetch(url_pais)
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(localidades => {
                    this.setState({
                        localidades: localidades
                    })
                })

        }catch(error){
            this.setState({
                error
            })
        }
    }

    _loginUser(email, password){

    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:8000/api/user/login/", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert("Login Successful!");

          let userData = {
            name: json.data.data.name,
            id: json.data.data.id,
            email: json.data.data.email,
            auth_token: json.data.data.auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        } else alert("Login Failed!");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
      });
  };

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
                    exact path="/pais/provincia/:id"
                    render={(props) => <LocalidadesList {...props} traerLocalidades = {this.traerLocalidades} localidades = {this.state.localidades} isAuthed={true} />} />
                    
                    <Route 
                    exact path="/pais/:id"
                    render={(props) => <ProvinciasList {...props} traerProvincias = {this.traerProvincias} provincias = {this.state.provincias} isAuthed={true} />} />
                    
                    <Route 
                        exact path="/paises" 
                        component={() => <PaisesList pais = {this.state.paises}  />} />

                    <Route 
                        exact path="/"
                        render={(props) => <Login {...props} _loginUser = { this._loginUser } />} />
                    />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
