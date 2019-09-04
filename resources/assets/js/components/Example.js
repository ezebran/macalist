import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Header from './Header';
import Aside from './Aside';
import PaisesList from './PaisesList';
import ProvinciasList from './ProvinciasList';
import LocalidadesList from './LocalidadesList';
import UsuariosList from './UsuariosList';
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
            users: [],
            pais_selected:'',
            provincia_selected:'',
            localidad_selected:''
        }
        this.traerProvincias = this.traerProvincias.bind(this);
        this.traerLocalidades = this.traerLocalidades.bind(this);
        this._loginUser = this._loginUser.bind(this);
        this._registerUser = this._registerUser.bind(this);
        this._logoutUser = this._logoutUser.bind(this);
        this.traerUsuarios = this.traerUsuarios.bind(this);

        this.selectPais = this.selectPais.bind(this);
        this.deletePais = this.deletePais.bind(this);
        this.editarPais = this.editarPais.bind(this);
        this.addPais = this.addPais.bind(this);

        this.eliminarProvincia = this.eliminarProvincia.bind(this);
        this.selectProvincia = this.selectProvincia.bind(this);
        this.editarProvincia = this.editarProvincia.bind(this);
        this.addProvincia = this.addProvincia.bind(this);

        this.selectLocalidad = this.selectLocalidad.bind(this);
        this.eliminarLocalidad = this.eliminarLocalidad.bind(this);
        this.editarLocalidad = this.editarLocalidad.bind(this);
        this.addLocalidad = this.addLocalidad.bind(this);
    }

    selectLocalidad(id_localidad){
      this.setState({
        localidad_selected: id_localidad
      })
    }

    selectPais(id_pais){
      this.setState({
        pais_selected: id_pais
      });
    }

    selectProvincia(id_provincia){
      this.setState({
        provincia_selected: id_provincia
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
        alert("An Error Occured! registerFunct" + error);
        console.log(`${formData} ${error}`);
      });
    }

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

    traerUsuarios(){
        axios
          .get("http://127.0.0.1:8000/api/usuarios/mostrar")
          .then(response => {
            console.log(response.data, "desde el example");
            let respuesta = response.data;
            this.setState({
              users: respuesta
            })
            return response;
          })
          .catch(error => {
            alert("An Error Occured! desde el traerUsuarios" + error);
            console.log(error)
          });
        
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

    eliminarProvincia(){
      var formData = new FormData();
      formData.append("id_provincia", this.state.provincia_selected);

      //Eliminamos el pais del state
      let sinLaProvi = []
      this.state.provincias.map(provi => {
        if(provi.id != this.state.provincia_selected){
          sinLaProvi.push(provi)
        }
      })
      this.setState({
        provincias: sinLaProvi
      });

      axios
        .post("http://127.0.0.1:8000/api/provincia/eliminar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo eliminar la provincia! ${error}`);
        });
    }

    editarLocalidad(provincia_id, nombre){
      var formData = new FormData();
      formData.append("id_localidad", this.state.localidad_selected);
      formData.append("provincia_id", provincia_id);
      formData.append("nombre", nombre);

      //Enviamos los datos por post
      axios
        .post("http://127.0.0.1:8000/api/localidad/editar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo editar la localidad! ${error}`);
        });
    }

    editarProvincia(pais_id , nombre){
      var formData = new FormData();
      formData.append("id_provincia", this.state.provincia_selected);
      formData.append("pais_id", pais_id);
      formData.append("nombre", nombre);

      console.log("Valores que se ejecutan desde example" ,pais_id , nombre)

      //Editamos la provincia en el state
      let provinciaTemp = this.state.provincias;
      provinciaTemp.map(provi => {
        if(provi.id == this.state.provincia_selected){
          provi.nombre = nombre;
          provi.pais_id = pais_id;
        }
      })

      this.setState({
        provincias: provinciaTemp
      })

      //Enviamos los datos por post
      axios
        .post("http://127.0.0.1:8000/api/provincia/editar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo editar la provincia! ${error}`);
        });
    }

    deletePais(){
      var formData = new FormData();
      formData.append("id_pais", this.state.pais_selected);

      //Eliminamos el pais del state
      let sinElPais = []
      this.state.paises.map(pais => {
        if(pais.id != this.state.pais_selected){
          sinElPais.push(pais)
        }
      })
      this.setState({
        paises: sinElPais
      });

      axios
        .post("http://127.0.0.1:8000/api/pais/eliminar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo eliminar el pais! ${error}`);
        });
    }

    editarPais(nombre){
      var formData = new FormData();
      formData.append("id_pais", this.state.pais_selected);
      formData.append("nombre", nombre);

      //Editamos el pais en el state
      let paisesTemp = this.state.paises;
      paisesTemp.map(pais => {
        if(pais.id == this.state.pais_selected){
          pais.nombre = nombre;
        }
      })
      this.setState({
        paises: paisesTemp
      })
      
      //Enviamos los datos por post
      axios
        .post("http://127.0.0.1:8000/api/pais/editar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo editar el pais! ${error}`);
        });
    }

    addPais(nombre){
      var formData = new FormData();
      formData.append("nombre", nombre);

      axios
        .post("http://127.0.0.1:8000/api/pais/agregar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo agregar el pais ${error}`);
        });
    }

    addProvincia(nombre, pais_id){
      var formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("pais_id", pais_id);

      axios
        .post("http://127.0.0.1:8000/api/provincia/agregar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo agregar la provincia! ${error}`);
        });
    }

    addLocalidad(nombre, provincia_id){
      var formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("provincia_id", provincia_id);

      axios
        .post("http://127.0.0.1:8000/api/localidad/agregar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo agregar la localidad! ${error}`);
        });
    }

    eliminarLocalidad(){
      var formData = new FormData();
      formData.append("id_pais", this.state.localidad_selected);

      //Eliminamos la localidad del state
      let sinLaLocalidad = []
      this.state.localidades.map(localidad => {
        if(localidad.id != this.state.localidad_selected){
          sinLaLocalidad.push(localidad)
        }
      })
      this.setState({
        localidades : sinLaLocalidad
      })

      axios
        .post("http://127.0.0.1:8000/api/localidad/eliminar/",formData)
        .catch(error => {
          alert(`Un error ocurrio, no se pudo eliminar la localidad! ${error}`);
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
                            <LocalidadesList {...props} addLocalidad = {this.addLocalidad} editarLocalidad = {this.editarLocalidad} provincias = {this.state.provincias} selectLocalidad = {this.selectLocalidad} eliminarLocalidad = {this.eliminarLocalidad} traerLocalidades = {this.traerLocalidades} localidades = {this.state.localidades} isAuthed={true} logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                    
                    <Route 
                        exact path="/pais/:id"
                        render={(props) => isLoggedIn ?
                            <ProvinciasList {...props} addProvincia = {this.addProvincia} traerProvincias = {this.traerProvincias} editarProvincia = {this.editarProvincia} paises = {this.state.paises} provincia_selected = {this.state.provincia_selected} pais_selected = {this.state.pais_selected} eliminarProvincia = {this.eliminarProvincia} selectProvincia = {this.selectProvincia} provincias = {this.state.provincias} isAuthed={true} logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                    
                    <Route 
                        exact path="/paises"
                        render={(props) => isLoggedIn ? 
                            <PaisesList pais = {this.state.paises} add_pais = {this.addPais} edit_pais = {this.editarPais} deletePais = {this.deletePais} pais_selected = {this.selectPais} traerUsuarios = { this.traerUsuarios } userData = { this.state.user.user } logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />

                    <Route 
                        exact path="/usuarios"
                        render={(props) => isLoggedIn ? 
                            <UsuariosList pais = {this.state.paises} traerLocalidades = {this.traerLocalidades} localidades = {this.state.localidades} provincias = {this.state.provincias} users = {this.state.users} traerUsuarios = {this.traerUsuarios} userData = { this.state.user.user } logOut = { this._logoutUser } />
                            : (<Redirect to="/" />) } />
                </Switch>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
