import React, { useState } from "react";
import Layout from "./Hoc/Layout/Layout";
import Home from "./Pages/Home/Home";
import Async from "./Pages/Async/Async";
import ReactPage from "./Pages/ReactPage/ReactPage";
import CODProfile from "./Pages/CODProfile/CODProfile";
import "./App.css";

const App = () => {
  const [currStep, setCurrStep] = useState(1);

  let routes = null;

  switch (currStep) {
    case 1:
      routes = <CODProfile />;
      break;
    case 2:
      routes = <Async />;
      break;
    case 3:
      routes = <ReactPage />;
      break;
    case 4:
      routes = <CODProfile />;
      break;
    default:
      routes = <Home />;
  }

  return (
    <div>
      <Layout>
        {routes}
        <div className="buttonContainer">
          {currStep > 1 ? (
            <div className="prev">
              <button
                className="butPrev"
                onClick={() => setCurrStep(currStep - 1)}
              >
                Prev
              </button>
            </div>
          ) : null}
          {currStep < 4 ? (
            <div className="next">
              <button
                className="butNext"
                onClick={() => setCurrStep(currStep + 1)}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </Layout>
    </div>
  );
};

export default App;
