import { useAppSelector } from '../../hooks/store'
import { useTodosActions } from '../../hooks/useTodosActions'
import { type TodoName } from '../../redux/todo/type'
import { CheckvronDown } from '../Icons/CheckvronDown'

import './styles.css'
const Header: React.FC = () => {
  const { addTodo } = useTodosActions()
  const { toggleCollapse } = useTodosActions()
  const collapse = useAppSelector(state => state.todos.collapse)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get('name') as TodoName
    if (name != null && name !== '') {
      addTodo(name)
    }
    form.reset()
  }

  return (
    <div className='Header'>
      <button
        className={`Btn-icon Btn-toggleArrow ${collapse ? 'collapse' : ''}`}
        onClick={() => {
          toggleCollapse()
        }}
      >
        <CheckvronDown />
      </button>
      <form className='Form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          className='Input'
          placeholder='What needs to be done?'
        />
      </form>
    </div>
  )
}

export { Header }
