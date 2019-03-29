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

export default function fetchNews() {
    return (dispatch) => {
        return fetch('/api/articles', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ type: 'quantity', payload: 50 }),
        }).then((response) => {
            if (!response.ok) {
                return throw response.json()
            } else {
                return dispatch(receivedNews(response.json()))
            }
        }).catch(error => dispatch(failureNews(error)))
    }
}