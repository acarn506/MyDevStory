import React, { Component } from "react";
import ItemList from "./ItemList/ItemList";
import Item from "./ItemList/Item/Item";
import Dropdown from "./Dropdown/Dropdown";
import "./ReactPage.css";

class ReactPage extends Component {
  state = {
    skills: [
      { language: "c", rate: 5, level: "proficient" },
      { language: "python", rate: 5, level: "proficient" },
      { language: "javascript", rate: 5, level: "excellent" },
      { language: "nodejs", rate: 5, level: "familiar" },
      { language: "react", rate: 5, level: "proficient" },
      { language: "html5", rate: 5, level: "excellent" },
      { language: "css", rate: 5, level: "expert" },
      { language: "mongodb", rate: 5, level: "familiar" },
      { language: "git", rate: 5, level: "familiar" }
    ],
    show: "standard"
  };

  showHandler = event => {
    console.log("event", event);
    this.setState({
      show: event
    });
  };

  render() {
    const skills = this.state.skills;

    let skillsList = skills.map((item, i) => {
      return (
        <div key={item + i} className="lan">
          {item.language}
          <span key={item} className="rate">
            {item.rate}
          </span>
          <span key={item + i} className="lev">
            {item.level}
          </span>
        </div>
      );
    });

    let levels = skills
      .reduce(
        (list, item) =>
          list.includes(item.level) ? list : [...list, item.level],
        []
      )
      .map((level, i) => (
        <div key={level + i} className={`level${i}`} id="level">
          {level}
        </div>
      ));

    let familiar = skills
      .filter(item => {
        return item.level === "familiar";
      })
      .reduce((list, item) => {
        return list.concat(item.language);
      }, [])
      .map((lan, i) => {
        return <Item key={lan + i} language={lan} name={`${lan}`} />;
      });

    let proficient = skills
      .filter(item => {
        return item.level === "proficient";
      })
      .reduce((list, item) => {
        return list.concat(item.language);
      }, [])
      .map((lan, i) => {
        return <Item key={lan + i} language={lan} name={`${lan}`} />;
      });

    let excellent = skills
      .filter(item => {
        return item.level === "excellent";
      })
      .reduce((list, item) => {
        return list.concat(item.language);
      }, [])
      .map((lan, i) => {
        return <Item key={lan + i} language={lan} name={`${lan}`} />;
      });

    let expert = skills
      .filter(item => {
        return item.level === "expert";
      })
      .reduce((list, item) => {
        return list.concat(item.language);
      }, [])
      .map((lan, i) => {
        return <Item key={lan + i} language={lan} name={`${lan}`} />;
      });

    //Conditional Display
    let show = this.state.show;
    let display = null;

    if (show === "plain") {
      display = (
        <div className="lanContainer">
          <ItemList skills={this.state.skills} />
        </div>
      );
    } else if (show === "graph") {
      display = (
        <div>
          <div className="levelContainer">
            {familiar}
            {proficient}
            {excellent}
            {expert}
            {levels}
          </div>
          <Dropdown>
            <p>Testing!</p>
          </Dropdown>
        </div>
      );
    } else {
      display = <div className="skillContainer">{skillsList}</div>;
    }

    return (
      <div className="reactPageCont">
        <h1>React</h1>
        {display}
        <div className="buttonControls">
          <button
            className="buttonA"
            onClick={() => this.showHandler("standard")}
          ></button>
          <h4>ButtonA</h4>
          <button
            className="buttonB"
            onClick={() => this.showHandler("plain")}
          ></button>
          <h4>ButtonB</h4>
          <button
            className="buttonC"
            onClick={() => this.showHandler("graph")}
          ></button>
          <h4>ButtonC</h4>
        </div>
      </div>
    );
  }
}

export default ReactPage;
