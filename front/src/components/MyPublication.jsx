import React from 'react';
import { Component } from 'react';



export default class MyPublication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body
        }
    }


    deletePublication = (event) => {


        const url = "http://localhost:8080/publications/delete";
        const publication = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        const header = {
            method: "DELETE",
            body: JSON.stringify(publication),
            headers: {
                "Content-Type": "application/json",
                "credential": localStorage.getItem("uuid")
            }
        }

        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            }
            )
            .then(json => {
                console.log(json);
                window.location.href = "/publications";
            })
            .catch(error => {
                console.error(error);
                localStorage.clear();
                alert("Credenciales incorrectas");
            });
    }

    render(){
        return(
            <>
                <body>
                <text>
                    <h2>{this.state.title}</h2>
                    <h3> {this.state.body}</h3>
                </text>
                </body>
                <div>
                    <button onClick={this.deletePublication}> Borrar Publicacion</button>
                </div>
            </>
        );
    }
}