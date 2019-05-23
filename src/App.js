import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabletop from "tabletop";
import "semantic-ui-css/semantic.min.css";
import { Header, Image, Table, Modal, Statistic } from "semantic-ui-react";
import ModalSheets from "./ModalSheets";
import Login from "./Login";
import HomePage from "./HomePage";
import fire from "./config/Fire";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      data: []
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">{this.state.user ? <HomePage /> : <Login />}</div>
    );
  }
}

export default App;
