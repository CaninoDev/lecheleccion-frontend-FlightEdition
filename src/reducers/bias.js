import { BIAS_FAILURE, BIAS_SUCCESS, BIAS_REQUEST } from 'bias/constants'

const initialState = {
  data: {},
  loading: true,
  errorMessage: ""
}

export function bias(state = initialState, action) {
  switch (action.type) {
    case BIAS_REQUEST:
      return  { ...state, loading: true }
    case BIAS_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case BIAS_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    default:
        return state
  }
}