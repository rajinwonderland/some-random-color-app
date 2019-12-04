import React from "react";
import ReactDOM from "react-dom";
import Colors from "./colors";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Editor Colors</h2>
      <Colors />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
