import { Component } from "react";

class ClassMouse extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <>
        <div>
          <h2>X:{this.state.x}</h2>
          <h2>Y:{this.state.y}</h2>
        </div>
      </>
    );
  }
}

export default ClassMouse;