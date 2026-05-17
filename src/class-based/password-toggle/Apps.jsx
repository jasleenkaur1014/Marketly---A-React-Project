import React from "react";

export default class Apps extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.setActive("apps")}>
          {this.props.activeSection === "apps" ? "▼ Apps" : "▶ Apps"}
        </button>
        {this.props.activeSection === "apps" && (
          <div>
            <p>Most Used: Instagram</p>
            <p>Most Watched: Netflix</p>
            <p>Most Shopped: Amazon</p>
            <p>Least Used: Linkedin</p>
          </div>
        )}
      </>
    );
  }
}
