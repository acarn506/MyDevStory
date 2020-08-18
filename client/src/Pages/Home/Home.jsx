import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div className="homeContainer">
      <h1>Home</h1>
      <div>
        <ul>
          <li>React</li>
          <li>Warzone Stats</li>
          <li>Async/Promise</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
