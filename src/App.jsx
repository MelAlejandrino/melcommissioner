import React from "react";
import Content from "./Content";
import Heading from "./Heading";

function App() {
  return (
    <div className="content">
      <div className="container">
        <Heading />
        <div className="worksContainer">
          <Content />
        </div>
      </div>
      <div class="background-container"></div>
    </div>
  );
}

export default App;
