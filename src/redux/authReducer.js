import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let inintialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = inintialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    };
};

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;