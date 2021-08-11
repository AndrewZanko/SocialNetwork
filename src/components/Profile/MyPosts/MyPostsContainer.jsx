import { connect } from 'react-redux';
import { addPostActionCreator, postUpdateActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {
 
//     return ( 
//         <StoreContext.Consumer>
//             {(store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
               
//                     let onPostUpdate = (text) => {
//                         let action = postUpdateActionCreator(text);
//                         store.dispatch(action);
//                     };

//                     return <MyPosts addPost={addPost} updateNewPostText={onPostUpdate} posts={state.profilePage.posts} postText={state.profilePage.postText} />;
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(postUpdateActionCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
    
export default MyPostsContainer;