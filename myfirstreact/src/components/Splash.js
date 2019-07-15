import React, { Component } from "react";
import ReactDOM from "react-dom";

import Background from "./Background";

class Splash extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="bodydiv">
        <div className="titlediv">
          {/* <img className="logo" alt="logo" src={"NewMotherFuckingLogo.png"} /> */}

          <p>Don't do you... Do Nu.</p>
        </div>
        <div className="buttondiv" />
        <Background />
      </div>
    );
  }
}

export default Splash;

ReactDOM.render(<Splash />, document.getElementById("root"));
