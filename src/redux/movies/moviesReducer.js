import {
    SET_SEARCH_HISTORY,
    SET_CURRENT_SEARCH
} from './moviesAction'


const initialState = {
    searchHistory: ['asdasdasd'],
    currentSearch: 'mfndjngjdf'
}

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_HISTORY:
            return {
                ...state,
                searchHistory: [...state.searchHistory, action.payload]
            }

        case SET_CURRENT_SEARCH:
            return {
                ...state,
                currentSearch: action.payload
            }
        default:
            return state
    }
}