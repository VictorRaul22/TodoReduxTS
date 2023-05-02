import { useTodosActions } from '../../hooks/useTodosActions'
import { Check } from '../Icons/Check'
import { Trash } from '../Icons/Trash'

import { type Props } from './type'

import './styles.css'
const Todo: React.FC<Props> = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useTodosActions()
  const { id, completed, name } = todo
  return (
    <div className='Todo'>
      <div className='TodoItem'>
        <button
          className={`Btn-icon Btn-checkbox ${completed ? 'checked' : ''} `}
          onClick={() => {
            toggleTodo(id)
          }}
        >
          {completed ? <Check /> : ''}
        </button>
        <p className={`Text Text-todo ${completed ? 'completed' : ''}`}>
          {name}
        </p>
      </div>
      <button
        type='button'
        className='BtnDanger'
        onClick={() => {
          deleteTodo(id)
        }}
      >
        <Trash />
      </button>
    </div>
  )
}

export { Todo }
