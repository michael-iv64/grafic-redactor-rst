import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SWITCH_ELEMENT, SWITCH_BUTTON, SWITCH_ICONS } from '../constants/constants';
const initialState = {
    loading: false,
    alert: null,
    addButtons: false,
    addIcons: false,
    addcCheckboses: false,
    addRadiogroup: false,
    addMultiselect: false,
    addTypografic: false,
    addInputs: false,
    addTabs: false,
    addHolsts: false
    
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        // case SWITCH_ELEMENT:
        //     return {...state, ...action.payload}
        case SWITCH_BUTTON:
            return {
                ...state,
                addButtons: true,
                addIcons: false,
                addcCheckboses: false,
                addRadiogroup: false,
                addMultiselect: false,
                addTypografic: false,
                addInputs: false,
                addTabs: false,
                addHolsts: false
            }
        case SWITCH_ICONS:
            return {
                ...state,
                addIcons: true,
                addButtons: false,
                addcCheckboses: false,
                addRadiogroup: false,
                addMultiselect: false,
                addTypografic: false,
                addInputs: false,
                addTabs: false,
                addHolsts: false
            }
        case HIDE_ALERT:
            return { ...state, alert: null }
        // case CHANGE_URL:
        //     return {...state,  ...action.payload}
        default: return state
    }

}