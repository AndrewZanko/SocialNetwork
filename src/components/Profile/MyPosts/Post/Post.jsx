import React from 'react';
import p from './Post.module.css';

const Post = () => {
    return (
        <div className={p.item}>
            <img src='https://samp-rp.su/data/avatars/l/901/901430.jpg?1542946651' alt='avatar' />
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>)
}

export default Post;