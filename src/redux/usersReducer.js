const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let inintialState = {
    users : [
        {id: 1, fullName: 'Slava', isFollowed: true, status: 'Street racer', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://uznayvse.ru/images/celebs/2018/1/vyacheslav-chepurchenko_big.jpg'},
        {id: 2, fullName: 'Marina', isFollowed: false, status: 'Professional photographer', location: {city: 'Moscow', country: 'Russia'}, photoUrl: 'https://uznayvse.ru/images/celebs/2020/2/marina-orlova_big.jpg'},
        {id: 3, fullName: 'Gleb', isFollowed: true, status: 'Insert status here', location: {city: 'Brest', country: 'Belarus'}, photoUrl: 'https://fcminsk.by/wp-content/uploads/2001/05/gleb-gurban.png'},
    ],
};

const usersReducer = (state = inintialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: true};
                    };
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: false};
                    };
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
    };
};

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;