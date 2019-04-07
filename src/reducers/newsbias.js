import { NEWS_BIAS_FAILURE, NEWS_BIAS_SUCCESS, NEWS_BIAS_REQUEST } from 'biases/constants'

const initialState = {
  data: {},
  loading: true,
  errorMessage: ""
}

export function newsBias(state = initialState, action) {
  switch (action.type) {
    case NEWS_BIAS_REQUEST:
      return  { ...state, loading: true }
    case NEWS_BIAS_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case NEWS_BIAS_FAILURE:
      return { ...state, loading: false, errorMessage: action.error }
    default:
      return state
  }
}