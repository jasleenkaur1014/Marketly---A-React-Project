import React from "react";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jasleen",
      email: "jasleen@example.com",
      about: "Coder",
    };
  }

  render() {
    return (
      <>
        <button onClick={() => this.props.setActive("profile")}>
          {this.props.activeSection === "profile" ? "▼ Profile" : "▶ Profile"}
        </button>
        <div>
          {this.props.activeSection === "profile" && (
            <div>
              <p>
                <strong>Name: </strong> {this.state.name}
              </p>

              <p>
                <strong>Email: </strong> {this.state.email}
              </p>

              <small>
                <strong>About: </strong>
                {this.state.about}
              </small>
            </div>
          )}
        </div>
      </>
    );
  }
}
