import { CREATE_POST, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, UPDATE_ELEMENT, CREATE_ELEMENT } from "../constants/constants";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER   
    }
}
export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT   
    }
}

// GRAFIC REDACTOR 

export function updateElement(data) {
    return {
        type: UPDATE_ELEMENT,
        payload: data
    }
}
export function createElementAction(data) {
    return {
        type: CREATE_ELEMENT,
        payload: data
    }
}