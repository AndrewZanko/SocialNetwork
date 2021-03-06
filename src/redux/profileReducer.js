import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let inintialState = {
    posts: [
        {id: 1, message: 'what\'s up, dudes', likesCount: 15},
        {id: 2, message: 'going well XD', likesCount: 20},
    ],
    userProfile: null,
    status: ''
};

const profileReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: state.posts.length + 1, message: action.newText, likesCount: 0};
            return {
                ...state,
                postText: action.newText,
                posts: [...state.posts, newPost]
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} 
            }
        }
        default:
            return state;
    };
};

export const addPostActionCreator = (text) => ({
    type: ADD_POST,
    newText: text
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    userProfile: profile
});

const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});

const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }        
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }        
};

export default profileReducer;