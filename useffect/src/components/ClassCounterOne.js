import React, { Component } from "react";

class ClassCounterone extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating document");
      document.title = `clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count {this.state.count}
        </button>
        My name is {this.state.name}
        <div></div>
      </>
    );
  }
}

export default ClassCounterone;
