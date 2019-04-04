import {BIAS_FAILURE, BIAS_REQUEST, BIAS_SUCCESS} from 'bias/constants'
import fetch from 'cross-fetch'

function requestBias () {
  return {
    type: BIAS_REQUEST
  }
}

function receivedBias (data) {
  return {
    type: BIAS_SUCCESS,
    data: data
  }
}

function failureBias (error) {
  return {
    type: BIAS_FAILURE,
    errorMessage: error
  }
}

export default function (articleID) {
  return dispatch => {
    dispatch(requestBias)
    return fetch(`/api/bias/${articleID}`)
       .then(response=> response.json())
       .then(data => dispatch(receivedBias(data)))
  }

}