import classNames from 'classnames'

import { useTodosActions } from '../../hooks/useTodosActions'
import { COLOR_FILTERS } from '../../redux/filter/consts'
import { type ColorType } from '../../redux/filter/type'
import { Check } from '../Icons/Check'
import { Trash } from '../Icons/Trash'

import { type Props } from './type'

import './styles.css'
const Todo: React.FC<Props> = ({ todo }) => {
  const { deleteTodo, toggleTodo, changeColorTodo } = useTodosActions()
  const { id, completed, name, color = null } = todo
  const btnCheckClass = classNames('Btn Btn--checkbox', {
    checked: completed,
  })
  const textTodoClass = classNames('Text TodoItem-text', {
    completed,
    'u-colorBlue': color === COLOR_FILTERS.BLUE,
    'u-colorGreen': color === COLOR_FILTERS.GREEN,
    'u-colorOrange': color === COLOR_FILTERS.ORANGE,
    'u-colorPurple': color === COLOR_FILTERS.PURPLE,
    'u-colorRed': color === COLOR_FILTERS.RED,
  })
  return (
    <div className='Todo'>
      <div className='TodoItem'>
        <button
          className={btnCheckClass}
          onClick={() => {
            toggleTodo(id)
          }}
        >
          {completed ? <Check /> : ''}
        </button>
        <p className={textTodoClass}>{name}</p>
      </div>
      <div className='TodoItem-actions'>
        <select
          name=''
          id=''
          className='Select'
          onChange={e => {
            const colorTarget = e.target.value
            if (colorTarget === 'default') {
              changeColorTodo(id)
            } else {
              const isCorrectColor = Object.entries(COLOR_FILTERS).some(
                ([_, name]) => name === colorTarget
              )
              if (isCorrectColor) {
                changeColorTodo(id, colorTarget as ColorType)
              }
            }
          }}
        >
          <option value='default' selected={color == null}>
            default
          </option>
          {Object.entries(COLOR_FILTERS).map(([color, name]) => {
            return (
              <option key={color} value={name} selected={color === name}>
                {name}
              </option>
            )
          })}
        </select>
        <button
          type='button'
          className='Btn Btn--danger'
          onClick={() => {
            deleteTodo(id)
          }}
        >
          <Trash />
        </button>
      </div>
    </div>
  )
}

export { Todo }
