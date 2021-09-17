import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // 'API-KEY': 'b7535a46-755b-4223-beff-d967170a7d8b'
        'API-KEY': 'f90a3d97-6820-4f4c-a255-ec28d67fa806'
    }
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data);
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`, {});
    },
    userUnfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData);
    }
};