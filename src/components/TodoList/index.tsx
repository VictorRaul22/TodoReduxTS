// import { useEffect } from 'react'

import { useEffect } from 'react'

import { useAppSelector } from '../../hooks/store'
import { useCollapseActions } from '../../hooks/useCollapseActions'
import { Todo } from '../Todo'

import './styles.css'
const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos)
  const collapse = useAppSelector(state => state.collapse)
  const { toggleCollapse } = useCollapseActions()
  const classCollapse = collapse ? 'collapse' : ''

  useEffect(() => {
    if (todos.length <= 0 && !collapse) {
      toggleCollapse(true)
    } else if (collapse) {
      toggleCollapse(false)
    }
  }, [todos])
  if (todos.length === 0) return null
  return (
    <div className={`TodoList`}>
      <div className={`ScrollContainer ${classCollapse} `}>
        <div className='List '>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { TodoList }
