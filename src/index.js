import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card/card";

class Main extends React.Component {
  render() {
    return (
      <div className="background">
        <Card />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
