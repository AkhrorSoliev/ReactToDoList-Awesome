import React from 'react'

const Todo = ({ text }) => {
  return (
    <div>
      <div className="todo">
        <li className="todo">{text}</li>
        <button className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default Todo
