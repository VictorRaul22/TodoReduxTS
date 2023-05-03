import { type ColorType } from '../filter/type'

export interface Todo {
  name: string
  completed: boolean
  color?: ColorType | null
}

export interface TodoWithId extends Todo {
  id: string
}
export type TodoName = TodoWithId['name']
export type TodoId = TodoWithId['id']
export type TodoList = TodoWithId[]
