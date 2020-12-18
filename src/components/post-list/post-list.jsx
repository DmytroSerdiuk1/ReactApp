import React from 'react';

import PostListItem from '../post-list-item';

import "./post-list.css";
const PostFist = ({data, onDeleted, onLike, onImportant}) => {
    const element = data.map((item)=>{
        const {id, ...propsData} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...propsData} onDeleted={()=>onDeleted(id)} onLike={()=>onLike(id)} onImportant={()=>onImportant(id)}/>
            </li>
        )
    })
    return (
        <ul className = "app-list list-group">
            {element}
        </ul>
    );
}

export default PostFist;
