import React from 'react';
import { addPostActionCreator, postUpdateActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostUpdate = (text) => {
        let action = postUpdateActionCreator(text);
        props.store.dispatch(action);
    };

    return ( <MyPosts addPost={addPost} updateNewPostText={onPostUpdate} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />);
}

export default MyPostsContainer;