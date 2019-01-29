import React from 'react';

const todoList = props => {
  const mapTodos = props.todos.map(todo => (
    <h3
      style={todo.completed ? { textDecoration: 'line-through' } : null}
      key={todo.id}
      onClick={() => props.toggleCompleted(todo.id)}
    >
      {todo.task}
    </h3>
  ));

  return (
    <div className="todo-list">
      <h1>Redux Todo</h1>
      {mapTodos}
    </div>
  );
};

export default todoList;
