import React, { Component } from "react";
import ItemList from "./ItemList/ItemList";

class ReactPage extends Component {
  state = {
    skills: [
      { language: "c++", rate: 5, level: "expert" },
      { language: "python", rate: 5, level: "expert" },
      { language: "javascript", rate: 5, level: "expert" },
      { language: "node.js", rate: 5, level: "expert" },
      { language: "react", rate: 5, level: "expert" },
      { language: "html5", rate: 5, level: "expert" },
      { language: "css", rate: 5, level: "expert" },
      { language: "mongodb", rate: 5, level: "expert" },
      { language: "git", rate: 5, level: "expert" }
    ]
  };

  render() {
    let skills = this.state.skills.map((item, i) => {
      return (
        <div key={item + i}>
          {item.language}
          <span key={item + i}>{item.rate}</span>
          <span key={item + i}>{item.level}</span>
        </div>
      );
    });
    return (
      <div>
        <h1>React</h1>
        {/*<ItemList skills={this.state.skills} /> */}
        {skills}
      </div>
    );
  }
}

export default ReactPage;
