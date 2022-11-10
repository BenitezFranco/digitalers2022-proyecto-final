import { wait } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Component } from "react";


export default class AddPublication extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            title:"",
            body:""
        }
    }

    setValueTitle = (event) => {
        this.setState({
                title:event.target.title
        });
    }
    setValueBody = (event) => {
        this.setState({
                body:event.target.body
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


    add =(event) =>{
        const url = "http://localhost:8080/publications/insert";
        const publication = {
            title: this.state.title,
            body: this.state.body
        }
        const header ={
            method: "POST",
            body: JSON.stringify(publication),
            headers: {
                "Content-Type": "application/json",
                "credential": localStorage.getItem("uuid")
            }

        }
        fetch(url,header)
        .then(json=>{
            console.log(json)
                window.location.href="/mypublications";
        })
        .catch(error=>{
            console.error(error);
                localStorage.clear();
                alert("No se puedo crear la publicacion");
        })
        this.cleanValues();
    }
    
    
    render() {
        return (
          <div className="col-md-5">
            <div className="form-area">  
                <form role="form">
                <br styles="clear:both" />
                  <div className="form-group">
                    <input type="text" className="form-control" id="title" name="title" placeholder="Title" required />
                  </div>
                  
                  <div className="form-group">
                  <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                  </div>
                     
                <button type="button" id="submit" name="submit" className="formButton" onClick={this.add}>Add Publication</button>
                </form>
            </div>
          </div>
        )
      }
}