import React from "react";
import ReactDOM from "react-dom";
import Layer1 from "./Div_layers/Layer1";
import Layer2 from "./Div_layers/Layer2";
import Layer3 from "./Div_layers/Layer3";

function App() {
  return <div>
  
    <Layer1 />
    <Layer2 />
    <Layer3 />
  </div>
};

ReactDOM.render(<App />, document.querySelector("#root"));
