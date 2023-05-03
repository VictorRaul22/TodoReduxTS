import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filter/slice'
import todoReducer from './todo/slice'
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
})
