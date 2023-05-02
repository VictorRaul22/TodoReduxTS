import { addNewTodo, removeTodo, toggleCompleteTodo } from '../redux/todo/slice'
import { type TodoId, type TodoName } from '../redux/todo/type'

import { useAppDispatch } from './store'

interface ReturnUseTodo {
  addTodo: (todo: TodoName) => void
  deleteTodo: (id: TodoId) => void
  toggleTodo: (id: TodoId) => void
}
export const useTodosActions = (): ReturnUseTodo => {
  const dispatch = useAppDispatch()
  const addTodo: ReturnUseTodo['addTodo'] = todo => {
    dispatch(addNewTodo(todo))
  }
  const deleteTodo: ReturnUseTodo['deleteTodo'] = id => {
    dispatch(removeTodo(id))
  }
  const toggleTodo: ReturnUseTodo['toggleTodo'] = id => {
    dispatch(toggleCompleteTodo(id))
  }
  return { addTodo, deleteTodo, toggleTodo }
}
