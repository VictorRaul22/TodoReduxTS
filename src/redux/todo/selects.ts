import { createSelector } from '@reduxjs/toolkit'

import { STATUS_FILTERS } from '../filter/consts'
import { allFilters } from '../filter/selects'
import { type StatusType } from '../filter/type'
import { type RootState } from '../types'

import { todosAdapter } from './slice'
import { type TodoList } from './type'

export const { selectAll: selectAllTodos } = todosAdapter.getSelectors(
  (state: RootState) => state.todos
)
const filterStatus: Record<StatusType, (todos: TodoList) => TodoList> = {
  [STATUS_FILTERS.ALL]: todos => todos,
  [STATUS_FILTERS.COMPLETED]: todos => todos.filter(todo => todo.completed),
  [STATUS_FILTERS.ACTIVE]: todos => todos.filter(todo => !todo.completed),
}

export const selectTodosFiltered = createSelector(
  selectAllTodos,
  allFilters,
  (todos, filters) => {
    let todosFilteredByStatus = filterStatus[filters.status](todos)
    const colors = filters.colors

    if (colors != null && colors.length > 0) {
      todosFilteredByStatus = todosFilteredByStatus.filter(todo => {
        const color = todo.color
        if (color != null) {
          return colors.includes(color)
        } else {
          return false
        }
      })
    }

    return todosFilteredByStatus
  }
)
export const uncompletedTodos = createSelector(selectAllTodos, todos => {
  return todos.filter(todo => !todo.completed).length
})
