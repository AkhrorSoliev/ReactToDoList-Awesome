import React from 'react'

const Todo = ({ text, todo, todos1, setTodos }) => {
  const deletHandler = () => {
    setTodos(todos1.filter((el) => el.id !== todo.id))
  }

  const completeHeader = () => {
    setTodos(
      todos1.map((item) => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      }),
    )
  }

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {text}
        </li>
        <button onClick={completeHeader} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deletHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default Todo
