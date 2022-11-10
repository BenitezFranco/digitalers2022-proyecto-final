import React from 'react';
import { Component } from 'react';

import '../resources/css/publication.css';

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
                alert("Credenciales incorrectas");
            });
    }

    render(){
        return(
            <>
                <body>
                <div className='text'>
                        <text >
                    <h1 >{this.state.title}</h1>
                    <h3> {this.state.body}</h3>
                        </text>
                    </div>
                </body>
                <div className='button'>
                    <button onClick={this.deletePublication}> Borrar Publicacion</button>
                </div>
            </>
        );
    }
}