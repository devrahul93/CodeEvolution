import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementbyFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevstate) => {
        return {
          count: prevstate.count + 1,
        };
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <p>{this.state.count}</p>
          <button
            onClick={() => {
              this.setState({
                count: 0,
              });
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrement
          </button>
          <button onClick={this.incrementbyFive}>incrementbyFive</button>
        </div>
      </>
    );
  }
}

export default ClassCounterTwo;
