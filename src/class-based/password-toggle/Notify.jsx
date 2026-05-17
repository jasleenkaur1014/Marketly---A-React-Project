import React from "react";

export default class Notify extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.setActive("notify")}>
          {this.props.activeSection === "notify"
            ? "▼ Notifications"
            : "▶ Notifications"}
        </button>

        {this.props.activeSection === "notify" && (
          <div>
            <label htmlFor="insta">Instagram</label>
            <input type="checkbox" id="insta" defaultChecked />
            <br />
            <label htmlFor="whats">Whatsapp</label>
            <input type="checkbox" id="whats" />
            <br />
            <label htmlFor="yt">Youtube</label>
            <input type="checkbox" id="yt" />
            <br />
            <label htmlFor="link">LinkedIn</label>
            <input type="checkbox" id="link" defaultChecked />
            <br />
            <label htmlFor="netflix">Netflix</label>
            <input type="checkbox" id="netflix" />
            <br />
            <label htmlFor="amazon">Amazon</label>
            <input type="checkbox" id="amazon" />
          </div>
        )}
      </>
    );
  }
}
