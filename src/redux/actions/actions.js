import { CREATE_POST, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, UPDATE_ELEMENT, CREATE_ELEMENT, SAVE_PROJECT, SWITCH_ELEMENT, SWITCH_BUTTON, SWITCH_ICONS } from "../constants/constants";
import axios from 'axios'


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
export function switchElement(data) {
    return {
        type: SWITCH_ELEMENT,
        payload: data
    }
}
export function switchBattonAction() {
    return {
        type: SWITCH_BUTTON,
    }
}
export function switchIconsAction() {
    return {
        type: SWITCH_ICONS,
    }
}



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

// ---- data for save --- проверить 
export function saveProject(data) {
    const url= 'http://la4z.xyz:8080/upload'
    return async dispatch => {
        try {
            dispatch(showLoader())

            axios.post(url, data)
            .then(res => {

                console.log(res)
                if (res) {
                    setTimeout(() => {
                    },1000)
                    return dispatch(showAlert('Вы успешно сохранили проект!'))
                }
                return dispatch(showAlert('Что-то пошло не так!'))
            })
            // .catch(function (error) {
            //     console.log(error);
            //     return dispatch(showAlert('Ошибка при записи файла!', error))
            // });






            // const response = await fetch('http://la4z.xyz:8080/upload')
            // const json = await response.json()
            // setTimeout(() => {
            //     dispatch({type: SAVE_PROJECT, payload: json})
            //     dispatch(hideLoader())
            // }, 500) // -- искусственная задержка 

        } catch(error) {
            dispatch(showAlert('Ошибка при записи файла!', error))
            dispatch(hideLoader())


        }
    }
}