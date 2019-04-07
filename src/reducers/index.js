import { combineReducers } from 'redux'
import { news } from './news'
import { bias } from './bias'
import { newsBias } from './newsbias'

const rootReducer = combineReducers({
  news: news,
  biases: bias,
  newsBias: newsBias
})

export default rootReducer