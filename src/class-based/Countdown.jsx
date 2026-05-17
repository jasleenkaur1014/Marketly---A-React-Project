import React from "react";

export default class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      countdown: 60,
    };
    this.timer = "";
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => {
        if (prev.countdown === 1) {
          clearInterval(this.timer); // stop timer
          return { countdown: 0 }; // final value
        }

        return { countdown: prev.countdown - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const total = this.state.countdown;

    const hours = String(Math.floor(total / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    return (
      <>
        <h1>
          {hours}:{minutes}:{seconds}
        </h1>
      </>
    );
  }
}
