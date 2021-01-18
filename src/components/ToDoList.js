import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todos1, setTodos, filteredTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todos) => (
            <Todo
              setTodos={setTodos}
              todos1={todos1}
              todo={todos}
              key={todos.id}
              text={todos.text}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList
