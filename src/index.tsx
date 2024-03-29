import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
// import Demo from "./patterns/structural/adapter/Demo";
// import Demo from "./patterns/structural/bridge/Demo";
import Demo from "./patterns/creational/builder/Demo";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Dessign Patterns TS</h1>
      </div>
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
