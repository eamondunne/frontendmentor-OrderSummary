import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`orderButton ${this.props.styleName}`}
        onClick={() => console.log("Button!")}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
