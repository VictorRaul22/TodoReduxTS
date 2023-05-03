import {
  createEntityAdapter,
  // createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { type ColorType } from '../filter/type'

import { type TodoId, type TodoName, type TodoWithId } from './type'

export const todosAdapter = createEntityAdapter<TodoWithId>({
  // selectId: todo => todo.id,
})
interface payloadColor {
  color?: ColorType
  id: TodoId
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    collapse: true,
  }),
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoName>) => {
      const id = crypto.randomUUID()
      todosAdapter.addOne(state, { id, name: action.payload, completed: false })
      if (state.ids.length === 1) state.collapse = false
    },
    removeTodo: (state, action: PayloadAction<TodoId>) => {
      todosAdapter.removeOne(state, action.payload)
      if (state.ids.length === 0 && !state.collapse) state.collapse = true
    },
    toggleCompleteTodo: (state, action: PayloadAction<TodoId>) => {
      const existingTodo = state.entities[action.payload]
      if (existingTodo != null) {
        existingTodo.completed = !existingTodo.completed
      }
    },
    changeCollapse: (state, action: PayloadAction<boolean>) => {
      state.collapse = action.payload
      // return action.payload
    },
    completeAll: state => {
      Object.entries(state.entities).forEach(([_, todo]) => {
        if (todo != null) {
          if (!todo.completed) {
            todo.completed = true
          }
        }
      })
    },
    clearCompletedAll: state => {
      Object.entries(state.entities).forEach(([_, todo]) => {
        if (todo != null) {
          if (todo.completed) {
            todo.completed = false
          }
        }
      })
    },
    changeColor: (state, action: PayloadAction<payloadColor>) => {
      const { color = null, id } = action.payload
      const existingTodo = state.entities[id]
      if (existingTodo != null) {
        existingTodo.color = color
      }
    },
  },
})

export default todosSlice.reducer
export const {
  addNewTodo,
  removeTodo,
  toggleCompleteTodo,
  changeCollapse,
  completeAll,
  clearCompletedAll,
  changeColor,
} = todosSlice.actions
