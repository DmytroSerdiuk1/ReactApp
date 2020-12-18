import React, {Component} from 'react';

import "./post-list-item.css";

export default class PostListItem extends Component {
    render() {
        const {text, onDeleted, onImportant, onLike, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        if(important){
            classNames += " important";
        }
        if(like){
            classNames += " like"
        }

        return (
            <div className={classNames} >
                <span onClick={onLike} className="app-list-item-label">
                    {text}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onImportant} className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button onClick={onDeleted} className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}