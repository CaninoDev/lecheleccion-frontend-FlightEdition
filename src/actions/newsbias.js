import {NEWS_BIAS_FAILURE, NEWS_BIAS_REQUEST, NEWS_BIAS_SUCCESS} from 'biases/constants'
import fetch from 'cross-fetch'

function requestNewsBias () {
  return {
    type: NEWS_BIAS_REQUEST
  }
}

function receivedNewsBias (data) {
  return {
    type: NEWS_BIAS_SUCCESS,
    data: data
  }
}

function failureNewsBias (error) {
  return {
    type: NEWS_BIAS_FAILURE,
    errorMessage: error
  }
}

export default function () {
  return dispatch => {
    dispatch(requestNewsBias)
    return fetch(`/api/articles/averages`)
       .then(response=> response.json())
       .then(data => dispatch(receivedNewsBias(data)))
  }

}