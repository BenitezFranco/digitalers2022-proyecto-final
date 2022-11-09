import React from 'react';
import { Component } from 'react';



export default class Publication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            body: this.props.body
        }
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
            </>
        );
    }
}