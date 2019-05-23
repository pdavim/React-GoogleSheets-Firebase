import React, { Component } from "react";
import fire from "./config/Fire";
import "semantic-ui-css/semantic.min.css";
import logo from "./logo.svg";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  state = { activeItem: "home" };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color="red" inverted widths={2}>
        <Menu.Item name="home" active={activeItem === "home"}>
          <h1 className="App-title">Fengshui Portugal</h1>
        </Menu.Item>
        <Menu.Item
          name="Logout"
          active={activeItem === "Logout"}
          onClick={this.logout}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
