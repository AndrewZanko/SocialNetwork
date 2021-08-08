const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {id: 4, message: state.messageText};
            state.messages.push(newMessage);
            state.messageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.newText;
            return state;
        default: 
        return state;
    };
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const messageUpdateActionCreator = (text) => ({
        type: UPDATE_MESSAGE_TEXT,
        newText: text
});

export default dialogsReducer;