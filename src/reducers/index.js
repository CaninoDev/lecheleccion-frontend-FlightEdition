import { combineReducers } from 'redux'
import { news } from './news'
import { bias } from './bias'
import { default as modals } from './modals'


const rootReducer = combineReducers({
  news: news,
  biases: bias,
  modals: modals
})

export default rootReducer