const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let inintialState = {
    posts : [
        {id: 1, message: "what's up, dudes", likesCount: 15},
        {id: 2, message: "going well XD", likesCount: 20},
    ],
    postText : "New post",
};

const profileReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.postText, likesCount: 0};
            let stateCopy = {...state};
            stateCopy.posts = [...stateCopy.posts];
            stateCopy.posts.push(newPost);
            stateCopy.postText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.postText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const postUpdateActionCreator = (text) => ({
        type: UPDATE_POST_TEXT,
        newText: text
});

export default profileReducer;