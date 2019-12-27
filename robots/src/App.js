import React, { Component } from "react";
import "./styles.css";
import CardRobot from "./CardRobot";
import State from "./data.js";

export default class App extends Component {
  onChangeSome = event => {
    const search = event.target.value;
    let Robot = State.Data.filter(item => {
      return item.nomUser.indexOf(search) > -1;
    });

    this.setState(
      {
        Robot
      },
      console.log(Robot)
    );
  };
  render() {
    return (
      <div className="App">
        <CardRobot />
      </div>
    );
  }
}
