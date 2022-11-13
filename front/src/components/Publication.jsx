import React from 'react';
import { Component } from 'react';

import '../resources/css/publication.css'
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
                        <div className ='card bg-info'>
                            <div className='card-body'>
                            <h4 className ='card-header'>{this.state.title}</h4>
                            <p className ='card-text'> {this.state.body}</p>
                            </div>
                        </div>
            </>
        );
    }
}