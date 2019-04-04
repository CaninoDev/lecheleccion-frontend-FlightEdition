import { combineReducers } from 'redux'
import { news } from './news'
import { bias } from './bias'

const rootReducer = combineReducers({
  news: news,
  biases: bias
})

export default rootReducer