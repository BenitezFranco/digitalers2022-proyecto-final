import React, { Component } from "react"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import './resources/css/menu.css';

import AddPublication from "./components/AddPublication";
import FindPublication from "./components/FindPublication";
import FindMyPublication from "./components/FindMyPublication";

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
            <BrowserRouter>

                <nav class="menu">
                    <NavLink className="enlace" to="/" >Principal</NavLink>

                    <NavLink className="enlace" to="/publications" >Publicaciones</NavLink>

                    <NavLink className="enlace" to="/mypublications" >Mis Publicaciones</NavLink>

                    <NavLink className="enlace" to="/createpublication" >Crear Publicacion</NavLink>   

                    <NavLink className="enlace" to="/cerrarsesion" >Cerrar Sesion</NavLink> 

                    <NavLink className="enlace" to="/comments" >Comentarios</NavLink>
                </nav>


                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/publications" element={<FindPublication/>} />
                    <Route path="/mypublications" element={<FindMyPublication/>}/>
                    <Route path="/createpublication" element={<AddPublication />} />
                    <Route path="/cerrarsesion" element={<button onClick={this.signOff}>Cerrar Sesion</button>} />
                    <Route path="/comments" element={<button onClick={this.printUUID}>Mostrar UUID</button>} />
                    <Route path="*" element={<NotFound />} />
                    <Route />
                </Routes>

            </BrowserRouter>

        );
    }
}