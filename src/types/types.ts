export type photoType = {
    small: string | null
    large: string | null
}

export type postDataType = {
    massage: string
    id: number
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type profileType = {
    userId: number | null 
    lookingForAJob: boolean | null 
    lookingForAJobDescription: string | null 
    fullName: string | null 
    contacts: contactsType | null 
    photos: photoType
}

export type userType = {
    followed: boolean
    id: number
    name: string
    photos: photoType
    status: string | null
    uniqueUrlName: string | null
}