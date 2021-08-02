let state = {
    profilePage : {
        posts : [
            {id: 1, message: "what's up, dudes", likesCount: 15},
            {id: 2, message: "going well XD", likesCount: 20},
        ],
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
        // messages : [
        //     {id: 1, name: "Misha", messages:[{id: 1, author: "Andrew", message: "Hi!"},
        //                                      {id: 2, author: "Misha", message: "Hey, how's it going?"},
        //                                      {id: 3, author: "Andrew", message: "Pretty well, I've got so much to tell you!"}]},                                            
        //     {id: 2, name: "Oleg", messages: [{id: 1, author: "Oleg", message: "Are you here?"},
        //                                      {id: 2, author: "Andrew", message: "Meet you in 10 minutes"},
        //                                      {id: 3, author: "Oleg", message: "Ok"}]},
        //     {id: 3, name: "Lena", messages: [{id: 1, author: "Lena", message: "Have you read '1984'?"},
        //                                      {id: 2, author: "Andrew", message: "Yeah, btw not long ago"},
        //                                      {id: 3, author: "Lena", message: "Same XD It reminds me current events"}]},
        //     {id: 4, name: "Denis", messages:[{id: 1, author: "Andrew", message: "I found it"},
        //                                      {id: 2, author: "Denis", message: "Nice"},
        //                                      {id: 3, author: "Denis", message: "Don't forget to bring it next time"}]},
        //     {id: 5, name: "Katya", messages: [{id: 1, author: "Katya", message: "That was hilarios"},
        //                                      {id: 2, author: "Andrew", message: "Yeah I've laughed so much"},]},
        // ]
    }    
};

export let addPost = (postMessage) => {
    debugger;
    let newPost = {id: 5, message: postMessage, likesCount: 0}; 
    state.profilePage.posts.push(newPost);
}

export default state;