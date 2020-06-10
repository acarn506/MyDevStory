import React, { Component } from "react";
import ItemList from "./ItemList/ItemList";
import "./ReactPage.css";

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
        <div key={item + i} className="lan">
          {item.language}
          <span key={item} className="rate">
            {item.rate}
          </span>
          <span key={item + i} className="level">
            {item.level}
          </span>
        </div>
      );
    });
    return (
      <div className="reactPageCont">
        <h1>React</h1>
        {/*<ItemList skills={this.state.skills} /> */}
        <div className="skillsContainer">{skills}</div>
      </div>
    );
  }
}

export default ReactPage;
