import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "what's up, dudes", likesCount: 15},
        {id: 2, message: "going well XD", likesCount: 20},
    ];

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
                <Post message={postsData[0].message} likes={postsData[0].likesCount} />
                <Post message={postsData[1].message} likes={postsData[1].likesCount} />
            </div>
        </div>)
}

export default MyPosts;