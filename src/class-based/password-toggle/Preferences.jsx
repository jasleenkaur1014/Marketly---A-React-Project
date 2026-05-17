import React from "react";

export default class Preferences extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.setActive("preferences")}>
          {this.props.activeSection === "preferences"
            ? "▼ Preferences"
            : "▶ Preferences"}
        </button>

        {this.props.activeSection === "preferences" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                gap: "20px",
              }}
            >
              <p>
                Default Theme: <em>{this.props.activeMode}</em>
              </p>
              <button onClick={this.props.toggleMode}>
                {this.props.activeMode === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
            <p>
              Default Language: <em>English</em>
            </p>

            <p>
              Default Browser: <em>Chrome</em>
            </p>
          </>
        )}
      </>
    );
  }
}
