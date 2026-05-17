import React from "react";
export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleSubmit = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Enter your todo.."
            onChange={(e) => this.setState({ input: e.target.value })}
            value={this.state.input}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
