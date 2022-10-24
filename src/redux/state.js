// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialigsReducer";
// import sidebarReducer from "./sidebarReducer";;

// let store = {
//     _state: {
//         dialogPage: {
//             massageData: [{
//                     massage: "Как дела",
//                     id: 1
//                 },
//                 {
//                     massage: "Как семья",
//                     id: 2
//                 },
//                 {
//                     massage: "Как маааашина",
//                     id: 3
//                 },

//             ],
//             userData: [{
//                     name: "Димон",
//                     id: 1,
//                     img: 'https://cdnn1.img.sputniknews-uz.com/img/07e6/01/19/22379869_213:0:1920:1280_1920x0_80_0_0_92536f3b9e90c51a3657bb5935a3d89e.jpg'
//                 },
//                 {
//                     name: "Андрей",
//                     id: 2,
//                     img: 'https://static.mk.ru/upload/entities/2020/07/16/19/articles/detailPicture/82/d0/d8/fa/5f5f9269ec396f253bf1fcc7fa80fd7d.jpg'
//                 },
//                 {
//                     name: "Даша",
//                     id: 3,
//                     img: 'https://img.gazeta.ru/files3/949/12549949/kitty-pic905-895x505-61908.jpg'
//                 },
//                 {
//                     name: "Русская свинья",
//                     id: 4,
//                     img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/32/754598726300328.jpeg'
//                 }
//             ],

//             newMassageBody: "",

//         },
//         postPage: {
//             postData: [{
//                     massage: "Я бля ненавижу этих тупорылых  людей",
//                     id: 1
//                 },
//                 {
//                     massage: "Мы просто куча атомов с мимолетным жалким существованием",
//                     id: 2
//                 },
//                 {
//                     massage: "Мы все умрем",
//                     id: 3
//                 },
//                 {
//                     massage: "Можно закончить все быстрее",
//                     id: 4
//                 },
//             ],
//             newPostText: "",
//         },
//         sideBar: {}
//     },

//     getState() {
//         return this._state
//     },

//     reRender() {
//         console.log(`wewe`)
//     },

//     subscribe(observer) {
//         this.reRender = observer;
//         console.log(`wewe`)
//     },

//     dispatch(action) {

//         this._state.postPage = profileReducer(this._state.postPage, action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
//         this.reRender(this._state);


//     }
// }


// export default store;

// window.store = store;
// var i = 0
// let array = [1, 2, 3, 4]
// for (var i = 0; i < array.length; i++) {
//     setTimeout(() => {
//         console.log(i, array[i])
//     }, 10)
// }

// console.log(array[0])

// let object = {a:3}
// let v = 4;
// // v = 6
// (function(obj, number){
//     obj[`a`] = 7
//     number = 6
// })(object, v)

// console.log(object[`a`])
// console.log(v)

// let array = [ { 'score':8, 'value':14}, { 'score':8, 'value':33},
// { 'score':3, 'value':55},{ 'score':5, 'value':66},{ 'score':8, 'value':19},{ 'score':3, 'value':12},]

// let f = (arr, sortWord)=>{

// }

// let r = array.map((e)=>{
//   return {
//      8: [{d:1}]
//   }
// })

// console.log( r )

let ra = [10, 2, 12, 24, 51, 61]

const divisibleBy = (numbers, divisor) => {
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] % divisor === 0){
            console.log(numbers[i])
        }
    }
  }

  divisibleBy(ra, 2)

 