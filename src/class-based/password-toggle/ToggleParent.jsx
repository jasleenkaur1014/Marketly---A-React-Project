import React from "react";
import Profile from "./Profile";
import Settings from "./Settings";
import Preferences from "./Preferences";
import Notify from "./Notify";
import Apps from "./Apps";
export default class ToggleParent extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSection: null,
      activeMode: "light",
    };
  }

  setActive = (section) => {
    this.setState((prev) => ({
      activeSection: prev.activeSection === section ? null : section,
    }));
  };

  componentDidMount() {
    document.body.classList.add(this.state.activeMode + "-mode");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeMode !== this.state.activeMode) {
      document.body.classList.remove("light-mode", "dark-mode");
      document.body.classList.add(this.state.activeMode + "-mode");
    }
  }

  toggleMode = () => {
    this.setState((prev) => ({
      activeMode: prev.activeMode === "light" ? "dark" : "light",
    }));
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>User Setting UI</h1>
        <Profile
          setActive={this.setActive}
          activeSection={this.state.activeSection}
        />
        <Settings
          setActive={this.setActive}
          activeSection={this.state.activeSection}
        />
        <Preferences
          setActive={this.setActive}
          activeSection={this.state.activeSection}
          toggleMode={this.toggleMode}
          activeMode={this.state.activeMode}
        />
        <Apps
          setActive={this.setActive}
          activeSection={this.state.activeSection}
        />
        <Notify
          setActive={this.setActive}
          activeSection={this.state.activeSection}
        />
      </>
    );
  }
}
