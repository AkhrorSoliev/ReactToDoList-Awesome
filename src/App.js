import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  useEffect(() => {
    filterHandler()
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Akhror's To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos1={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
