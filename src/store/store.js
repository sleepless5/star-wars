import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { setLocalStorage } from '../utils/localStorage'

const store = createStore(rootReducer)
store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer)
})
export default store