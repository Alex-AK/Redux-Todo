import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../store/actions';

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoInput);
  };

  render() {
    return (
      <div className="todo-container">
        <TodoList todos={this.props.todos} />
        <TodoForm
          value={this.state.todoInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapActionsToProps = {
  addTodo,
  toggleCompleted
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoContainer);
