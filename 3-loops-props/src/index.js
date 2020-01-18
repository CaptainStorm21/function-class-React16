import React, { Component } from "react";
import { render } from "react-dom";
import { SlotMachine } from "./props/Slot-Machine";
import { Loop } from "./loop/loop";
import "./style.css";
import { DefaultProp } from "./default-prop/default";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Game </h1>
        <div className="background">
          <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
          <SlotMachine s1="🍒" s2="🍒" s3="🍊" />
        </div>
        <div className="background2">
          <Loop
            name="Joey"
            hobbies={["chess", "running", "sleeping", "swimming"]}
          />
        </div>
          <div className="background3" >
              <DefaultProp to="Los Angeles" />
              <DefaultProp to="Los Angeles" from = "Venice"/>
          </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
