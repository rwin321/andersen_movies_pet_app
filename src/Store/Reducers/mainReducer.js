import {
    SET_AUTH
} from '../actionsTypes'

const initialState = {
    userList: [
        { login: 'Admin', password: 123 },
        { login: 'Vladimir', password: 123 } ,
        { login: 'Ervin', password: 123 }
    ],

    isAuth:false,
}

export default function appReducer(state = initialState, action) {

    switch (action.type) {
        case SET_AUTH: return {
            ...state, isAuth: action.payload
        }
        default:
            return state
    }
}