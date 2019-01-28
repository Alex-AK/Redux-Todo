import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input
          type="input"
          value={props.todoInput}
          name="todoInput"
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
