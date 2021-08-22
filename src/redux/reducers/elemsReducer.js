import { CREATE_ELEMENT } from "../constants/constants"
const initialState = {
    elems: [
        {
        elem: "button", 
        color: "secondary2",
        defaultPos: {x: 100, y: 100},
        id: "1",
        item: "",
        name: "secondary2",
        },
        {
        elem: "switch", 
        color: "secondary2",
        defaultPos: {x: 200, y: 200},
        id: "1",
        item: "",
        name: "secondary2",
        },
        // {
        // elem: "checkboses", 
        // color: "secondary2",
        // defaultPos: {x: 300, y: 200},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        // {
        // elem: "icons", 
        // color: "secondary2",
        // defaultPos: {x: 50, y: 100},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        // {
        // elem: "inputs", 
        // color: "secondary2",
        // defaultPos: {x: 400, y: 300},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        // {
        // elem: "multiselect", 
        // color: "secondary2",
        // defaultPos: {x: 200, y: 100},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        // {
        // elem: "ultiselect", 
        // color: "secondary2",
        // defaultPos: {x: 400, y: 300},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        {
        elem: "radiogroup", 
        color: "secondary2",
        defaultPos: {x: 100, y: 100},
        id: "1r",
        item: "",
        name: "secondary2",
        },
        // {
        // elem: "tabs", 
        // color: "secondary2",
        // defaultPos: {x: 100, y: 100},
        // id: "1",
        // item: "",
        // name: "secondary2",
        // },
        
        
    ],
}

export const elemsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CREATE_POST:
        //     // return {...state, posts: state.posts.concat(action.payload)}
        //     return { ...state, posts: [...state.posts, action.payload] }
        case CREATE_ELEMENT:
        //     // return {...state, posts: state.posts.concat(action.payload)}
            return { ...state, elems: [...state.elems, action.payload] }
        // case FETCH_POST:
        //     return {...state, fetchedPosts: action.payload}
        // case FETCH_POST_PAGINATION:
        //     return {...state, fetchedPosts: action.payload}
        default:
            return state
    }
}