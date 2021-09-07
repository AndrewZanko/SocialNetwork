import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'what\'s up, dudes', likesCount: 15},
        {id: 2, message: 'going well XD', likesCount: 20},
    ],
};

test('length of posts should be incremented', () => {
    //1. arrange
    let action = addPostActionCreator('hello');   
    //2. act
    let newState = profileReducer(state, action);
    //3. assert
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    //1. arrange
    let action = addPostActionCreator('hello');   
    //2. act
    let newState = profileReducer(state, action);
    //3. assert
    expect(newState.posts[2].message).toBe('hello');
});
  
test('length of posts should be decremented after deleting', () => {
    //1. arrange
    let action = deletePost(1);   
    //2. act
    let newState = profileReducer(state, action);
    //3. assert
    expect(newState.posts.length).toBe(1);
});

test('length of posts shouldn\'t be decremented after deleting unexisting post', () => {
    //1. arrange
    let action = deletePost(200);   
    //2. act
    let newState = profileReducer(state, action);
    //3. assert
    expect(newState.posts.length).toBe(2);
});