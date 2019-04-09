import { BIAS_FAILURE, BIAS_SUCCESS, BIAS_REQUEST } from 'biases/constants'

const initialState = {
  data: {
    Librt: 1,
    Grn: 1,
    Lbrl: 1,
    Cnsvrt: 1
  },
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