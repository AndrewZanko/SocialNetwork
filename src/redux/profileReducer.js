import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let inintialState = {
    posts: [
        {id: 1, message: "what's up, dudes", likesCount: 15},
        {id: 2, message: "going well XD", likesCount: 20},
    ],
    postText: "New post",
    userProfile: null
};

const profileReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.postText, likesCount: 0};
            return {
                ...state,
                postText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
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

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    userProfile: profile
});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))});
};

export default profileReducer;