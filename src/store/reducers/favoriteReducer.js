import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/actionTypes";
import { omit } from "lodash";
import { getLocalStorage } from '../../utils/localStorage'

const initialState = getLocalStorage('store')

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_FAVORITE:
      return omit(state, [action.payload])
    default:
      return state
  }
}

export default favoriteReducer