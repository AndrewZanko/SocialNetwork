import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src='https://avatars.githubusercontent.com/u/16020403?v=4' alt='avatar' />           
            <div>
                <span>{props.message} </span>
                <span className={p.likes}> {props.likes} likes</span>
            </div>
        </div>)
}

export default Post;