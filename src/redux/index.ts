import { configureStore } from '@reduxjs/toolkit'

import collapseReducer from './collapse/slice'
import todoReducer from './todo/slice'
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    collapse: collapseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
