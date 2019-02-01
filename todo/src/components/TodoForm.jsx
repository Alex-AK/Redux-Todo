import React from 'react';

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form onSubmit={props.handleSubmit}>
        <input
          required
          type="text"
          value={props.todoInput}
          name="todoInput"
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button className="clear-completed" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
