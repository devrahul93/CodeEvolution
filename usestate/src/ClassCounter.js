import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  counterincreaser = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.counterincreaser}>
          count {this.state.count}
        </button>
      </>
    );
  }
}

export default ClassCounter;
