import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from 'news/constants'

export function requestNews () {
    return {
        type: NEWS_REQUEST
    }
}

export function receivedNews (data) {
    return {
    type: NEWS_SUCCESS,
    data: data
    }
}

export function failureNews (error) {
    return {
        type: NEWS_FAILURE,
        errorMessage: error
    }
}
