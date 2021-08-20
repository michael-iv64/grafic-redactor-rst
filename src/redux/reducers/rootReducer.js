import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { appReducer } from './appReducer';
import { postReducer } from './postReducer'
import { authReducer } from './authReducer';
import { elemsReducer } from './elemsReducer';

export const rootReducer = combineReducers({
    data: dataReducer,
    app: appReducer,
    post: postReducer,
    auth: authReducer,
    elems: elemsReducer
})