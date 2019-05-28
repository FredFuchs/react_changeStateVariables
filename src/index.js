import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      clicked: false
      // creating state explicitly on the state object.
    };
  }

  handleInputChange = event => {
    this.setState({ message: event.target.value });
  };

  onClickMe = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log("Rendered again!");
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        {/*// Reading component state */}
        <input
          name="message"
          onChange={this.handleInputChange}
          placeholder="Change me"
          type="text"
          value={this.state.message}
        />
        {/*// updating component state */}
        <button onClick={this.onClickMe}>Create State</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
