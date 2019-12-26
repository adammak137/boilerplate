import { combineReducers } from 'redux'
import { ADD_JEANS } from '../action-creators/jeans'
import { LOGIN } from '../action-creators/user'

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

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      }
    default: return state
  }
}

const rootReducer = combineReducers({ pants: pantsReducer, clothes: clothesReducer, user: userReducer })

export default rootReducer
