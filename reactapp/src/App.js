import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
import Home from "./Pages/Home/Home";
import "./App.css";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
  return (
    <div>
      <Layout>
        <Router>{routes}</Router>
      </Layout>
    </div>
  );
};

export default App;
