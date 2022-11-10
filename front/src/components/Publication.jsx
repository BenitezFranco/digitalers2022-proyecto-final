import React from 'react';
import { Component } from 'react';

import '../resources/css/publication.css';

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
                    <div className='text'>
                        <text >
                    <h1 >{this.state.title}</h1>
                    <h3> {this.state.body}</h3>
                        </text>
                    </div>
                </body>
            </>
        );
    }
}