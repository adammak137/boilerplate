import { combineReducers } from 'redux'
import { ADD_JEANS } from '../action-creators/jeans'
import { LOGIN, FETCHING, REGISTER } from '../action-creators/user'

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

const userReducer = (state = { userInfo: { id: Infinity } }, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        userInfo: action.user,
        created: action.created
      }
    case LOGIN:
      return {
        userInfo: action.user
      }
    case FETCHING:
      return {
        userInfo: action.user
      }
    default: return state
  }
}

const rootReducer = combineReducers({ pants: pantsReducer, clothes: clothesReducer, user: userReducer })

export default rootReducer
