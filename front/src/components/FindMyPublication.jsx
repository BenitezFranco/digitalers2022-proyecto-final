import React from "react";
import { Component } from "react";
import MyPublication from "./MyPublication";
import '../resources/css/mypublication.css'
export default class FindPublication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publications: []
        }
    }

    componentDidMount() {
        this.getByUser();
    }
    getByUser = (event) => {
        var uuid = localStorage.getItem("uuid");
        const url = "http://localhost:8080/publications/findByUserId/" + uuid;
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
            })
            .finally(() => console.info(this.state.publications));
    }
    render(){
        return(
            <ul className="grid-layout" >
            {
                this.state.publications.map(
                    elem => (
                        <MyPublication
                            id={elem.id}
                            title={elem.title}
                            body={elem.body}
                        />
                    )
                    
                )
            }
        </ul>
        )
    }
}