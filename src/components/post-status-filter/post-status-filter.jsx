import React, {Component} from 'react';

import "./post-status-filter.css";
class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: "all", text: "Все"},
            {name: "like", text: "Понравилось"}
        ]
    }
    render(){
        const {filter, onFilterSelect} = this.props;
        const renderBtn = this.buttons.map(({name, text}) => {
            const active = filter === name;
            const classe = active ? "btn-info" : "btn-outline-secondary"
            return (
                <button key={name} onClick={()=> onFilterSelect(name)} type="button" className={`btn ${classe}`}>{text}</button>
            )
        });
        return (
            <div className="btn-group">
                {renderBtn}
            </div>
        );
    }
}

export default PostStatusFilter;
