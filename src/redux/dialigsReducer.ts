

const SEND_MASSAGE = 'SEND-MASSAGE'

type userType ={
    name: string|null
    id: number|null
    img:string|null
}

type massageType ={
    massage: string|null
    id: number|null
}

let initialState = {
    massageData: [{
        massage: "Как дела",
        id: 1
    },
    {
        massage: "Как семья",
        id: 2
    },
    {
        massage: "Как маашина",
        id: 3
    },
] as Array<massageType>,
    userData: [{
        name: "Димон",
        id: 1,
        img: 'https://cdnn1.img.sputniknews-uz.com/img/07e6/01/19/22379869_213:0:1920:1280_1920x0_80_0_0_92536f3b9e90c51a3657bb5935a3d89e.jpg'
    },
    {
        name: "Андрей",
        id: 2,
        img: 'https://static.mk.ru/upload/entities/2020/07/16/19/articles/detailPicture/82/d0/d8/fa/5f5f9269ec396f253bf1fcc7fa80fd7d.jpg'
    },
    {
        name: "Даша",
        id: 3,
        img: 'https://img.gazeta.ru/files3/949/12549949/kitty-pic905-895x505-61908.jpg'
    },
    {
        name: "Кирилл",
        id: 4,
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/32/754598726300328.jpeg'
    }] as Array<userType>,

}
export type initialStateTypeDialog = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateTypeDialog => {

    switch (action.type) {

        case SEND_MASSAGE: {
            let body = action.newTextMassage;
            return {
                ...state,
                massageData: [...state.massageData, {
                id: 11,
                massage: body
                }],
            }
        }

        default:
            return state;
    }
}

 type sendMassageCreatorType ={
    type: typeof SEND_MASSAGE,
    newTextMassage: string
 }

export const sendMassageCreator = (newTextMassage:string):sendMassageCreatorType => ({
    type: SEND_MASSAGE,
    newTextMassage
})


export default dialogsReducer;