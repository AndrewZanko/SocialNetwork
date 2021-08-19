import { connect } from 'react-redux';
import { addPostActionCreator, postUpdateActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


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