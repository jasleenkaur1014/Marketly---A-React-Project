import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  handleDecrement = () => {
    if (this.state.counter <= 0) return;
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>+</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }
}
