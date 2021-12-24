import { Component } from "react";

class IntervalClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.click, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  click = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
      </>
    );
  }
}

export default IntervalClassCounter;
