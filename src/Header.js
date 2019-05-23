import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabletop from "tabletop";
import "semantic-ui-css/semantic.min.css";
import { Header, Image, Modal, Statistic, Icon, Grid } from "semantic-ui-react";
import NavBar from "./NavBar";
import Clock from 'react-live-clock'

const keyGoogleSheet = "*********************",;

class ModalSheets extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      open: false
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: keyGoogleSheet,
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  showInfo(data) {
    alert("Successfully processed!");
    console.log(data);
  }

  render() {
    const { data } = this.state;
    var leghtArray = data.length;

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Clock className="clockClass" format={'HH:mm:ss'} ticking={true} timezone={'PT/Europe'} />
        </header>
      </div>
    );
  }
}

export default ModalSheets;
