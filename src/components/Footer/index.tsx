import { useMemo } from 'react'
import classNames from 'classnames'

import { useAppSelector } from '../../hooks/store'
import { useFiltersActions } from '../../hooks/useFiltersActions'
import { useTodosActions } from '../../hooks/useTodosActions'
import { COLOR_FILTERS, STATUS_FILTERS } from '../../redux/filter/consts'
import { uncompletedTodos } from '../../redux/todo/selects'

import './styles.css'
const Footer: React.FC = () => {
  const { completeTodos, clearCompleteTodos } = useTodosActions()
  const todosRemaining = useAppSelector(uncompletedTodos)
  const status = useAppSelector(state => state.filters.status)
  const { changeFilterStatus, addColor, deleteColor } = useFiltersActions()
  const suffix = useMemo(
    () => (todosRemaining === 1 ? '' : 's'),
    [todosRemaining]
  )
  return (
    <footer className='Footer'>
      <section className='Footer-section'>
        <h4 className='Footer-title'>Actions</h4>
        <button className='Footer-btn' onClick={completeTodos}>
          Mark all Completed
        </button>
        <button className='Footer-btn' onClick={clearCompleteTodos}>
          Clear Completed
        </button>
      </section>
      <section className='Footer-section'>
        <h4 className='Footer-title'>Reamaining Todos</h4>
        <p className='Footer-text'>
          {todosRemaining} item{suffix} left
        </p>
      </section>
      <section className='Footer-section Fotter-section--status'>
        <h4 className='Footer-title'>Filter by Status</h4>
        {Object.entries(STATUS_FILTERS).map(([key, value]) => {
          const classBtn = `Footer-btn Footer-btn--out ${
            status === value ? 'selected' : ''
          }`
          return (
            <button
              key={key}
              className={classBtn}
              onClick={() => {
                changeFilterStatus(value)
              }}
            >
              {value}
            </button>
          )
        })}
      </section>
      <section className='Footer-section'>
        <h4 className='Footer-title'>Filter by Color</h4>
        <div className='Footer-listGroupCheckox'>
          {Object.entries(COLOR_FILTERS).map(([key, value]) => {
            const bgClass = classNames('Footer-groupCheckbox-prev', {
              'u-bgBlue': value === COLOR_FILTERS.BLUE,
              'u-bgGreen': value === COLOR_FILTERS.GREEN,
              'u-bgOrange': value === COLOR_FILTERS.ORANGE,
              'u-bgPurple': value === COLOR_FILTERS.PURPLE,
              'u-bgRed': value === COLOR_FILTERS.RED,
            })
            return (
              <div key={`${key}`} className='Footer-groupCheckbox'>
                <input
                  id={key}
                  type='checkbox'
                  value={value}
                  onChange={e => {
                    if (e.target.checked) {
                      addColor(value)
                    } else {
                      deleteColor(value)
                    }
                  }}
                />
                <div className={bgClass}></div>
                <label htmlFor={key}>{value}</label>
              </div>
            )
          })}
        </div>
      </section>
    </footer>
  )
}

export { Footer }
