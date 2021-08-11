const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let inintialState = {
    dialogs : [
        {id: 1, name: "Misha", ava: "https://pixelbox.ru/wp-content/uploads/2018/02/john_wick_steam_avatars.jpg"},
        {id: 2, name: "Oleg", ava: "https://i.pinimg.com/736x/c2/74/aa/c274aa153d376a2365b66af27521d203.jpg"},
        {id: 3, name: "Lena", ava: "https://i.pinimg.com/564x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg"},
        {id: 4, name: "Denis", ava: "https://meragor.com/files/styles//ava_800_800_wm/vouwzf8qak4.jpg"},
        {id: 5, name: "Katya", ava: "https://game-roblox.ru/wp-content/uploads/2020/07/unnamed-2.jpg"},
    ],
    messages : [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Going well!"},
        {id: 3, message: "Any plans for tonight?"},
    ],
    messageText : "New message",
};

const dialogsReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 4, message: state.messageText};
            let stateCopy = {...state};  //no need to copy messages because only dialogsPage is immutable
            stateCopy.messages.push(newMessage);
            stateCopy.messageText = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.messageText = action.newText;
            return stateCopy;
        }
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