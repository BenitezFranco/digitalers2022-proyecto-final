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
                window.location.href = "/mypublications";
            })
            .catch(error => {
                console.error(error);
                alert("Credenciales incorrectas");
            });
    }

    render() {
        return (
            <>
                <div className='card bg-info'>
                    <div className='card-body'>
                        <h4 className='card-header' >{this.state.title}</h4>
                        <p className='card-text'> {this.state.body}</p>
                    </div>
                    <a className="btn btn-outline-secondary rounded-0" onClick={this.deletePublication}>
                        Borrar Publicacion
                    </a>
                </div>
            </>
        );
    }
}