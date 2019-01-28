import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export class TodoContainer extends Component {
  state = {
    todoInput: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, id) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <TodoList />
        <TodoForm
          value={this.state.todoInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoContainer;
