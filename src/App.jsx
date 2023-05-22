import React from "react";
import Content from "./Content";
import Heading from "./Heading";
import Services from "./services";

function App() {
  return (
    <div className="content">
      <div className="container">
        <Heading />
        <div className="worksContainer">
          <Services />
          <Content />
        </div>
      </div>
      <div class="background-container"></div>
    </div>
  );
}

export default App;
