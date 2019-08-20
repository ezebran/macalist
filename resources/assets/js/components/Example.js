import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';
import ProvinciasList from './ProvinciasList';
import LocalidadesList from './LocalidadesList';
import Login from './log/Login';
import Register from './log/Register';
import axios from 'axios';




export default class Example extends Component {

    constructor(props){
        super(props)

        this.state = {
            paises: [],
            provincias: [],
            localidades: [],
            isLoggedIn: false,
            user: {},
            token:{},
            users: []
        }
        this.traerProvincias = this.traerProvincias.bind(this);
        this.traerLocalidades = this.traerLocalidades.bind(this);
        this._loginUser = this._loginUser.bind(this);
        this._registerUser = this._registerUser.bind(this);
        this._logoutUser = this._logoutUser.bind(this);
        this.traerUsuarios = this.traerUsuarios.bind(this);
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



    traerUsuarios(){
        axios
          .get(`http://127.0.0.1:8000/api/users/list?token=${this.state.token}`)
          .then(response => {
            console.log(response);
            return response;
          })
          .then(json => {
            if (json.data.success) {
              this.setState({ users: json.data.data });
              //alert("Login Successful!");
            } else alert("Login Failed!");
          })
          .catch(error => {
            alert(`An Error Occured! ${error}`);
          });
    }

    _loginUser(email, password){

    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://127.0.0.1:8000/api/user/login/", formData)
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

     _registerUser(name, email, password, rol_id, localidad_id){
    var formData = new FormData(); 
    formData.append("password", password);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("rol_id", rol_id);
    formData.append("localidad_id", localidad_id);

    axios
      .post("http://127.0.0.1:8000/api/user/register", formData)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert(`Registration Successful!`);

          let userData = {
            name: json.data.data.name,
            id: json.data.data.id,
            email: json.data.data.email,
            auth_token: json.data.data.auth_token,
            rol_id: json.data.data.rol_id,
            localidad_id: json.data.data.localidad_id,
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
        } else {
          alert(`Registration Failed!`);
          $("#email-login-btn")
            .removeAttr("disabled")
            .html("Register");
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
        console.log(`${formData} ${error}`);
      });
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
    };


    _logoutUser(){
        let appState = {
          isLoggedIn: false,
          user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        console.log("Ejecuta desloguear desde el example")
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
        let state = localStorage["appState"];
        if (state) {
          let AppState = JSON.parse(state);

          this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }
    render() {
        const isLoggedIn = JSON.parse(localStorage["appState"]).isLoggedIn;

        return (
            <BrowserRouter>
           
                <Switch>

                    <Route 
                        exact path="/register"
                        render={(props) => isLoggedIn ? 
                            (<Redirect to="/paises" />)
                            : <Register {...props} _registerUser = { this._registerUser } pais = {this.state.paises} localidades = {this.state.localidades} provincias = {this.state.provincias} traerProvincias = { this.traerProvincias } traerLocalidades = {this.traerLocalidades} /> } />

                    <Route 
                        exact path="/"
                        render={(props) => isLoggedIn ? 
                            (<Redirect to="/paises" />) :
                            <Login {...props} _loginUser = { this._loginUser } /> } />

                    <Route 
                        exact path="/pais/provincia/:id"
                        render={(props) => isLoggedIn ? 
                            <LocalidadesList {...props} traerLocalidades = {this.traerLocalidades} localidades = {this.state.localidades} isAuthed={true} logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                    
                    <Route 
                        exact path="/pais/:id"
                        render={(props) => isLoggedIn ?
                            <ProvinciasList {...props} traerProvincias = {this.traerProvincias} provincias = {this.state.provincias} isAuthed={true} logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                    
                    <Route 
                        exact path="/paises"
                        render={(props) => isLoggedIn ? 
                            <PaisesList pais = {this.state.paises} traerUsuarios = { this.traerUsuarios } userData = { this.state.user.user } logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
