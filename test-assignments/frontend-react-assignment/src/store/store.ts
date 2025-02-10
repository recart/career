import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { colleaguesReducer } from './reducers/colleagues.reducer'

const rootReducer = combineReducers({
  colleagues: colleaguesReducer
})

export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
