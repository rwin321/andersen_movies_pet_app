import {
    SET_AUTH
} from '../actionsTypes'

export function setAuth(data) {
    return {
        type: SET_AUTH,
        payload: data
    }
}