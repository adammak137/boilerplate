import { combineReducers } from 'redux'
import { ADD_JEANS } from '../action-creators/jeans'

const pantsReducer = (state = ['jeans'], action) => {
  switch (action.type) {
    case ADD_JEANS:
      return [...state, action.name]
    default: return state
  }
}

const clothesReducer = (state = { tshirt: 'Bohemian' }, action) => {
  switch (action.type) {
    default: return state
  }
}

const rootReducer = combineReducers({ pants: pantsReducer, clothes: clothesReducer })

export default rootReducer
