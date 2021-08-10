import React from 'react';
import { addPostActionCreator, postUpdateActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
 
    return ( 
        <StoreContext.Consumer>
            {(store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
               
                    let onPostUpdate = (text) => {
                        let action = postUpdateActionCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts addPost={addPost} updateNewPostText={onPostUpdate} posts={state.profilePage.posts} postText={state.profilePage.postText} />;
                }
            }
        </StoreContext.Consumer>
    );
}
    

export default MyPostsContainer;