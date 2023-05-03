import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

import './app.css'
function App(): JSX.Element {
  return (
    <div className='App'>
      <h1 className='title'>Todo List</h1>
      <div className='Container'>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  )
}

export default App
