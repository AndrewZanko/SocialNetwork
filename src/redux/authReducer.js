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
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state;
    };
};

const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, login, email}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;