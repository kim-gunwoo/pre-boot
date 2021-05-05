import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
    this.setState((current) => ({
      count: current.count ** 2,
    }));
  };
  minus = () => {
    console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };

  /*
  실행 - Render Mount
  setState - Render Update
  페이지 나갈 때 - Will Umnount
 */
  componentDidMount() {
    console.log(`>> componentDidMount`);
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log(`>> componentDidUpdate`);
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log(`>> componentWillUnmount`);
    console.log("Goodbye, cruel world");
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
