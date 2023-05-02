import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import {
  type TodoId,
  type TodoList,
  type TodoName,
  type TodoWithId,
} from './type'

const todosAdapter = createEntityAdapter<TodoWithId>({
  selectId: todo => todo.id,
})

const initialState: TodoList = [
  {
    id: crypto.randomUUID(),
    name: 'terminar de testear',
    completed: false,
  },
]
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoName>) => {
      const id = crypto.randomUUID()
      state.push({ id, name: action.payload, completed: false })
    },
    removeTodo: (state, action: PayloadAction<TodoId>) => {
      const index = state.findIndex(({ id }) => id === action.payload)

      state.splice(index, 1)
    },
    toggleCompleteTodo: (state, action: PayloadAction<TodoId>) => {
      const index = state.findIndex(({ id }) => id === action.payload)

      state[index].completed = !state[index].completed
    },
  },
})

export default todosSlice.reducer
export const { addNewTodo, removeTodo, toggleCompleteTodo } = todosSlice.actions
