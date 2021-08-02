import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( (po, index) => {return <Post message={po.message} likes={po.likesCount} key={index}/>});

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return ( 
        <div className={p.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;