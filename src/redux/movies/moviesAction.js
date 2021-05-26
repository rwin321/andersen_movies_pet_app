export const SET_SEARCH_HISTORY = 'SET_SEARCH_HISTORY'
export const SET_CURRENT_SEARCH = 'SET_CURRENT_SEARCH'

export function setSearchHistory(data) {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_HISTORY,
            payload: data
        })
    }
}

export function setCurrentSearch(data) {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_SEARCH,
            payload: data
        })
    }
}