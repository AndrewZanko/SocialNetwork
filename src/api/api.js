import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b7535a46-755b-4223-beff-d967170a7d8b'
    }
});

export const usersAPI = {
    getUsers (pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data);
    },
    userFollow (userId) {
        return instance.post(`follow/${userId}`,{});
    },
    userUnfollow (userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const authAPI = {
    getAuthMe () {
        return instance.get(`auth/me`).then(response => response.data);
    }
};

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
};
