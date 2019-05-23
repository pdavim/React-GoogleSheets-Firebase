import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import ModalSheets from "./ModalSheets";
import NavBar from "./NavBar";
import Header from "./Header";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <Header />
        <ModalSheets />
      </div>
    );
  }
}

export default HomePage;
