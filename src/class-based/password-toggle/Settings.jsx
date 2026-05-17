import React from "react";

export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "Jassu1234",
      showPassword: false,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.props.setActive("settings")}>
          {this.props.activeSection === "settings"
            ? "▼ Settings"
            : "▶ Settings"}
        </button>
        <div>
          {this.props.activeSection === "settings" && (
            <div>
              <p>
                {this.state.showPassword ? this.state.password : "*********"}
              </p>
              <button
                onClick={() =>
                  this.setState((prev) => ({
                    showPassword: !prev.showPassword,
                  }))
                }
              >
                {this.state.showPassword ? "Hide" : "Show"}
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
