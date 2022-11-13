import React, { Component } from "react"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import './resources/css/menu.css';

import AddPublication from "./components/AddPublication";
import FindPublication from "./components/FindPublication";
import FindMyPublication from "./components/FindMyPublication";
import AddUser from "./components/AddUser";

export default class App extends Component {

    constructor(props) {
        super(props);
    }
    
    printUUID=()=>{
        console.log(localStorage);
    }

    signOff=()=>{
            localStorage.clear();
            window.location.href="/";
    }
    

    render() {
        return (
            < div className="App">
            <BrowserRouter>

                <nav className="menu">
                    <NavLink className="enlace" to="/" >Principal</NavLink>

                    <NavLink className="enlace" to="/mypublications" >Mis Publicaciones</NavLink>

                    <NavLink className="enlace" to="/createpublication" >Crear Publicacion</NavLink>   

                    <NavLink className="enlace" to="/signoff" >Cerrar Sesion</NavLink> 

                    <NavLink className="enlace" to="/createuser" >Crear usuario</NavLink>

                    <NavLink className="enlace" to="/comments" >Comentarios</NavLink>
                </nav>


                <Routes>
                    <Route path="/" element={<FindPublication />} />

                    <Route path="/mypublications" element={<FindMyPublication/>}/>

                    <Route path="/createpublication" element={<AddPublication />} />

                    <Route path="/signoff" element={<button type="button" class="btn btn-outline-danger" onClick={this.signOff}>Cerrar Sesion</button>} />
                    
                    <Route path="/createuser" element={<AddUser />} />

                    <Route path="/comments" element={<button onClick={this.printUUID}>Mostrar UUID</button>} />
                    
                    <Route path="*" element={<NotFound />} />
                    
                    <Route />
                </Routes>

            </BrowserRouter>
        </div>
        );
    }
}