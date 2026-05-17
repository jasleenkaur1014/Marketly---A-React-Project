import React from "react";

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <h1>TODOLIST</h1>
        {this.props.todo.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => this.props.removeTodo(item.name)}>
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
}
