import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted, clearCompleted } from '../store/actions';

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
    console.log(this.state.todoInput);
    this.props.addTodo(this.state.todoInput);
    this.setState({ todoInput: '' }, () => console.log(this.state.todoInput));
  };

  toggleCompleted = todo => {
    this.props.toggleCompleted(todo);
  };

  clearCompleted = () => {
    this.props.clearCompleted();
  };

  render() {
    return (
      <div className="todo-container">
        <TodoList
          todos={this.props.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
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
  toggleCompleted,
  clearCompleted
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoContainer);
