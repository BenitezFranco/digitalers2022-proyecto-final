import React from "react";
import { Component } from "react";


export default class AddPublication extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            texto: ""
        }
    }

    setValues = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    cleanValues = () => {
        this.setState(
            {
                title: "",
                body: ""
            }
        );
    }

    add = (event) => {
        const url = "http://localhost:8080/publications/insert";
        const publication = {
            title: this.state.title,
            body: this.state.body
        }
        const header = {
            method: "POST",
            body: JSON.stringify(publication),
            headers: {
                "Content-Type": "application/json",
                "credential": localStorage.getItem("uuid"),
            }
        }
        fetch(url, header)
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            })
            .then(json => {
                console.log(json)
                window.location.href = "/mypublications";
            })
            .catch(error => {
                console.error(error);
                alert("No se pudo crear la publicacion");
            })
        this.cleanValues();
    }


    render() {
        return (
            <>
             <form role="form">
                        <br styles="clear:both" />
                        <div className="form-group">
                            <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7" ></textarea>
                        </div>
                        <button type="button" id="submit" name="submit" className="formButton" onClick={this.add}>Add Publication</button>
                    </form>
            </>
        )
    }
}