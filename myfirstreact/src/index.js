import React from "react";
import ReactDOM from "react-dom";
import Splash from "./components/Splash";

const myfirstelement = (
  <React.Fragment>
    <h1>Hello Isaj!</h1>
    <p>This sis a paragaraph</p>
  </React.Fragment>
);

ReactDOM.render(myfirstelement, document.getElementById("title"));
