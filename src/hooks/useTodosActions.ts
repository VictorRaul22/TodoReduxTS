import { type ColorType } from '../redux/filter/type'
import {
  addNewTodo,
  changeCollapse,
  changeColor,
  clearCompletedAll,
  completeAll,
  removeTodo,
  toggleCompleteTodo,
} from '../redux/todo/slice'
import { type TodoId, type TodoName } from '../redux/todo/type'

import { useAppDispatch, useAppSelector } from './store'

interface ReturnUseTodo {
  addTodo: (todo: TodoName) => void
  deleteTodo: (id: TodoId) => void
  toggleTodo: (id: TodoId) => void
  toggleCollapse: (state?: boolean) => void
  completeTodos: () => void
  clearCompleteTodos: () => void
  changeColorTodo: (id: TodoId, color?: ColorType) => void
}
export const useTodosActions = (): ReturnUseTodo => {
  const dispatch = useAppDispatch()
  const collapse = useAppSelector(state => state.todos.collapse)

  const addTodo: ReturnUseTodo['addTodo'] = todo => {
    dispatch(addNewTodo(todo))
  }
  const deleteTodo: ReturnUseTodo['deleteTodo'] = id => {
    dispatch(removeTodo(id))
  }
  const toggleTodo: ReturnUseTodo['toggleTodo'] = id => {
    dispatch(toggleCompleteTodo(id))
  }
  const toggleCollapse: ReturnUseTodo['toggleCollapse'] = state => {
    if (state != null) {
      dispatch(changeCollapse(state))
    } else {
      dispatch(changeCollapse(!collapse))
    }
  }
  const completeTodos: ReturnUseTodo['completeTodos'] = () => {
    dispatch(completeAll())
  }
  const clearCompleteTodos: ReturnUseTodo['clearCompleteTodos'] = () => {
    dispatch(clearCompletedAll())
  }
  const changeColorTodo: ReturnUseTodo['changeColorTodo'] = (id, color) => {
    if (color != null) {
      dispatch(changeColor({ id, color }))
    } else {
      dispatch(changeColor({ id }))
    }
  }
  return {
    addTodo,
    deleteTodo,
    toggleTodo,
    toggleCollapse,
    completeTodos,
    clearCompleteTodos,
    changeColorTodo,
  }
}
