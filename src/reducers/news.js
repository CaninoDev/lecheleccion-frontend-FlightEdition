import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from 'news/constants'

const initialState = {
    loading: true,
    data: {
        Articles: [],
        Librt: 1,
        Grn: 1,
        Lbrl: 1,
        Cnsvrt: 1
    },
    errorMessage: null
}

export function news(state = initialState, action) {
    switch (action.type) {
        case NEWS_REQUEST:
            return { ...state, loading: true }
        case NEWS_SUCCESS:
            return { ...state, loading: false, data: action.data }
        case NEWS_FAILURE:
            return { ...state, loading: false, errorMessage: action.data }
        default:
            return state
    }
}