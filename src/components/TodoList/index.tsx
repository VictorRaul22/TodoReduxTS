import { useAppSelector } from '../../hooks/store'
import { selectTodosFiltered } from '../../redux/todo/selects'
import { Todo } from '../Todo'

import './styles.css'
const TodoList: React.FC = () => {
  const todos = useAppSelector(state => selectTodosFiltered(state))

  const collapse = useAppSelector(state => state.todos.collapse)
  const classCollapse = collapse ? 'collapse' : ''

  if (todos == null || todos.length === 0) return null
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
