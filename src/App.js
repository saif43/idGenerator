import React, { Component } from "react";
import Mainpage from "./components/Main/Mainpage";
import Header from "./components/template/Header";
import Sidebar from "./components/template/Sidebar/Sidebar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Mainpage />
      </div>
    );
  }
}
