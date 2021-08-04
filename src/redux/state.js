let store = {
    _state: {
        profilePage : {
            posts : [
                {id: 1, message: "what's up, dudes", likesCount: 15},
                {id: 2, message: "going well XD", likesCount: 20},
            ],
            postText : "New post",
        },
        dialogsPage : {
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
        }
    },

    _callSubscriber() {
        
    },

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {id: 5, message: this._state.profilePage.postText, likesCount: 0}; 
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.postText = '';
        this._callSubscriber(this._state);
    },

    updatePostText(newText) {
        this._state.profilePage.postText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {id: 4, message: this._state.dialogsPage.messageText};
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.messageText = '';
        this._callSubscriber(this._state);
    },

    updateMessageText(newText) {
        this._state.dialogsPage.messageText = newText;
        this._callSubscriber(this._state); 
    },

    subscribe(observer) {
        this._callSubscriber = observer; 
    }
}

export default store;