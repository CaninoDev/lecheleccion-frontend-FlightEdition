import fetch from 'cross-fetch'
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from 'news/constants'

function requestNews () {
    return {
        type: NEWS_REQUEST
    }
}

function receivedNews (data) {
    return {
    type: NEWS_SUCCESS,
    data: data
    }
}

function failureNews (error) {
    return {
        type: NEWS_FAILURE,
        errorMessage: error
    }
}

export default function () {
    return dispatch => {
        dispatch(requestNews)
        return fetch('/api/articles')
           .then(response => response.json())
           .then(data => dispatch(receivedNews(data)))
    }
}