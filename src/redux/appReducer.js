import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let inintialState = {
    initialized: false
};

const appReducer = (state = inintialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    };
};

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //other promises
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;