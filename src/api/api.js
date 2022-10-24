import  axios  from "axios";

const instance = axios.create({
        withCredentials: true,
         headers: {
          "API-KEY":"f6dfb876-0d96-4dd8-8917-b1444b0af626",
        },
        baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export  const usersAPI = {
    getUsers(curntPage,pageSize){
        return instance.get(`users?page=${curntPage}&count${pageSize}`,)
        .then(r=>{
            return r.data
        })
    },
    authMe(){
        console.warn("ЕБАНЫЙ РОТ ЭТОГО КАЗИНО БЛЯТЬ??")
        return  AuthAPI.authMe()
    },
   unFollowAPI (id){
        return instance.delete(`follow/${id}`)
    },
    
   followAPI (id){
       return instance.post(`follow/${id}`)
    },
    getProfile(id){
        console.warn("ТЫ ЧО ДУРАК БЛЯТЬ??")
       return instance.get(`profile/${id}`)
    },
}



export  const profileAPI = {
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
    }
}



export  const AuthAPI = {
    authMe(){
        return  instance.get(`auth/me`)
        .then(r => r.data)
    },
    loginApi(email, password, remember){
        return instance.post(`auth/login`,{email, password, remember})
    },
    logiout(){
        return instance.delete(`auth/login`)
    }
}



