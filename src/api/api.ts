import { profileType } from './../types/types';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f6dfb876-0d96-4dd8-8917-b1444b0af626",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(curntPage: number, pageSize: number, term: string = '', friend: string | boolean = `null`) {

        return instance.get(`users?page=${curntPage}&count${pageSize}&term=${term}` + (friend === `null` ? '': `&friend=${friend}`))
            .then(r => {
                return r.data
            })
    },
    authMe() {
        return AuthAPI.authMe()
    },
    unFollowAPI(id: number) {
        return instance.delete(`follow/${id}`)
    },

    followAPI(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(id: number) {
        return instance.get(`profile/${id}`)
    },
}



export const profileAPI = {
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
    },

    getSumbitInfo(data: profileType) {
        return instance.put(`profile`, data)
    }
}

 export enum ResultCodeEnum  {
    Success = 0,
    Error = 1,

}


type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const AuthAPI = {
    authMe() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(r => r.data)
    },
    loginApi(email: string, password: string, remember: boolean) {
        return instance.post(`auth/login`, { email, password, remember })
    },
    logiout() {
        return instance.delete(`auth/login`)
    }
}


