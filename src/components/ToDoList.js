import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todo }) => {
  console.log(todo)
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todo.map((todos) => (
            <Todo text={todos.text} id={todos.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList
