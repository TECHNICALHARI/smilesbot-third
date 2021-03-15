import React, { Component } from "react";
import './Loader.css';

export class Loader extends Component{
    render(){
        return(
            <div className={`loader_container ${this.props.status ? 'active_loader' : '' }`}>
                <div className="loader"></div>
            </div>
        )
    }
}

export default Loader