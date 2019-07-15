import React, { Component } from "react";

class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let photos = data.results.map(pic => {
          return pic.picture.large;
          //    (
          // <div key={pic.login.uuid}>
          //   {console.log("RESULTS KEYS ARE", pic.login.uuid)}
          //   <img src={pic.picture.large} />
          // </div>
          //   );
        });
        this.setState({ pictures: photos });
        console.log("state", this.state.pictures);
      });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">{this.state.pictures}</div>
      </div>
    );
  }
}

export default Background;
