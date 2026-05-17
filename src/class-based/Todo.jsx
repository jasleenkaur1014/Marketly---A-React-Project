import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }

  addTodo = (newItem) => {
    this.setState((prev) => ({
      todo: [...prev.todo, { name: newItem, id: Date.now() }],
    }));
  };

  removeTodo = (item) => {
    this.setState((prev) => ({
      todo: prev.todo.filter((todo) => todo.name !== item),
    }));
  };

  render() {
    return (
      <>
        <h1>To Do App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList removeTodo={this.removeTodo} todo={this.state.todo} />
      </>
    );
  }
}
