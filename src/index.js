import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card/card";

// class Card extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-title">
//           hello!
//           <div className="card-content">Test</div>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

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
