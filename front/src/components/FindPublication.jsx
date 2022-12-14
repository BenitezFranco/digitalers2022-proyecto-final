import React from "react";
import { Component } from "react";
import Publication from "./Publication";
import Login from "./Login";
import '../resources/css/principal.css'
export default class FindPublication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publications: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    signOff=()=>{
        localStorage.clear();
        window.location.href="/";  
}

    getAll = (event) => {
        const url = "http://localhost:8080/publications/findAll";
        const header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => this.setState({ publications: json }))
            .catch(error => {
                console.error(error);
                alert("No se encontraron publicaciones");
            })
            .finally(() => console.info(this.state.publications));
    }

    render() {
            return (
                <ul className="grid-layout" >
                    {
                        this.state.publications.map(
                            elem => (
                                <Publication
                                    id={elem.id}
                                    title={elem.title}
                                    body={elem.body}
                                />
                            )

                        )
                    }
                    { localStorage.length==0 &&
                    <div className="grid-login">{<Login />}</div>}
                    { localStorage.length>0 &&
                    <div className="grid-login"><button type="button" class="btn btn-outline-danger" onClick={this.signOff}>Cerrar Sesion</button></div>}
                    
                </ul>
            )
    }
}