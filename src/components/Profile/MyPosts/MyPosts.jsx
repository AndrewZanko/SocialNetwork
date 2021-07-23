import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return ( 
        <div className={p.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                <Post message="what's up, dudes" likes="15" />
                <Post message="going well XD" likes="20" />
            </div>
        </div>)
}

export default MyPosts;