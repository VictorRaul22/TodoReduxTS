export interface Todo {
  name: string
  completed: boolean
}

export interface TodoWithId extends Todo {
  id: string
}
export type TodoName = TodoWithId['name']
export type TodoId = TodoWithId['id']
export type TodoList = TodoWithId[]
