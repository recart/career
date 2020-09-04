import { createStore, Store, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { colleaguesReducer, ColleaguesState } from './reducers/colleagues.reducer'

export interface AppState {
  colleagues: ColleaguesState
}

const rootReducer = combineReducers({
  colleagues: colleaguesReducer
})

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools()
)
