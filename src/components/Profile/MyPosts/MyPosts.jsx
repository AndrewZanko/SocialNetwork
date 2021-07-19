import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return ( 
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={p.posts}>
                <Post message="what's up, dudes" likes="15" />
                <Post message="going well XD" likes="20" />
            </div>
        </div>)
}

export default MyPosts;