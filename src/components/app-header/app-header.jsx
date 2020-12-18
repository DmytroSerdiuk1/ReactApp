import React, {Component} from 'react';

import "./app-header.css";

export default class AppHeader extends Component{
    render(){
        const {liked, allItem} = this.props;
        return (
            <div className="app-header d-flex">
                <h1>Serdiuk Dmitriy</h1>
                <h2>{allItem} записей, из них понравилось {liked}</h2>
            </div>
        );
    }
};
