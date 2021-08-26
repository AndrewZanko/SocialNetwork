import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let inintialState = {
    posts: [
        {id: 1, message: 'what\'s up, dudes', likesCount: 15},
        {id: 2, message: 'going well XD', likesCount: 20},
    ],
    postText: 'New post',
    userProfile: null,
    status: ''
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
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

const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});


export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }        
    })
};

export default profileReducer;