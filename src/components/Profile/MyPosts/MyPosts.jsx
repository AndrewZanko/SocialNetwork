import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "what's up, dudes", likesCount: 15},
        {id: 2, message: "going well XD", likesCount: 20},
    ];

    let postsElements = posts.map( p => {return <Post message={p.message} likes={p.likesCount} />});

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
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;