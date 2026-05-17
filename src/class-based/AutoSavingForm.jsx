import React from "react";

export default class AutoSavingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.email !== this.state.email) {
      localStorage.setItem("email", JSON.stringify(this.state.email));
    }
    if (prevState.name !== this.state.name) {
      localStorage.setItem("name", JSON.stringify(this.state.name));
    }
  }

  componentDidMount() {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");

    this.setState({
      name: name ? JSON.parse(name) : "",
      email: email ? JSON.parse(email) : "",
    });
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          placeholder="Enter your name..."
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="email"
          value={this.state.email}
          placeholder="Enter your email..."
          onChange={(e) => this.setState({ email: e.target.value })}
        />

        <br />

        <hr />

        <br />

        <h1>{this.state.name}</h1>
        <p>{this.state.email}</p>
      </>
    );
  }
}
