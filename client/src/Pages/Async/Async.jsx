import React, { Component } from "react";
import "./Async.css";

const normal = {
  backgroundColor: "#896753"
};

const highlight = {
  background: "#FCE300",
  mixBlendMode: "hard-light",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
};

class Async extends Component {
  state = {
    branches: [
      { key: 0, className: "branch", style: normal },
      { key: 1, className: "branch", style: normal },
      { key: 2, className: "branch", style: normal },
      { key: 3, className: "branch", style: normal },
      { key: 4, className: "branch", style: normal }
    ]
  };

  highlightController = items => {
    const [current, ...rest] = items;

    this.highlightHandler(current.key);

    if (items.length - 1) {
      setTimeout(() => {
        this.highlightController(rest);
      }, 1000);
    }

    if (items.length === 1) {
      console.log("here");
      setTimeout(() => {
        this.resetHighlight();
      }, 3000);
    }
  };

  highlightHandler = key => {
    let branchKey = this.state.branches.findIndex(branch => {
      return branch.key == key;
    });

    let newBranches = [...this.state.branches];
    newBranches[branchKey].style = highlight;

    this.setState({
      branches: newBranches
    });
  };

  resetHighlight = () => {
    let branches = this.state.branches;

    branches.forEach(branch => {
      branch.style = normal;
    });

    this.setState({
      branches: branches
    });
  };

  render() {
    let branches = this.state.branches.map(branch => {
      return (
        <div
          key={branch.key}
          className={branch.className}
          style={branch.style}
        ></div>
      );
    });
    return (
      <div className="mainCont">
        <h1>Async</h1>
        <div className="displayCont">{branches}</div>
        <button onClick={() => this.highlightController(branches)}>
          Test Display
        </button>
      </div>
    );
  }
}

export default Async;
