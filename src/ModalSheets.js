import React from "react";
import _ from "lodash";

import logo from "./logo.svg";
import "./App.css";
import Tabletop from "tabletop";
import "semantic-ui-css/semantic.min.css";
import {
  Header,
  Image,
  Modal,
  Statistic,
  Icon,
  Grid,
  Checkbox
} from "semantic-ui-react";

const keyGoogleSheet = "*********************",;

class ModalSheets extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      open: false,
      domChecked: false,
      suirChecked: false,
      log: []
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

  clearLog = () => this.setState({ log: [] });

  log = (action, value) =>
    this.setState(({ log }) => ({
      log: [
        `${new Date().toLocaleTimeString()}: ${_.padEnd(
          action,
          10
        )} { checked: ${value} }`,
        ...log
      ].slice(0, 15)
    }));

  showInfo(data) {
    alert("Successfully processed!");
    console.log(data);
  }

  toggle = () =>
    this.setState(({ suirChecked }) => ({ suirChecked: !suirChecked }));

  toggleDOM = () =>
    this.setState(({ domChecked }) => ({ domChecked: !domChecked }));

  handleClick() {
    console.log("Click");
  }

  handleChange = (e, { checked }) => {
    this.log("Change", checked);
    this.toggle();
  };
  handleDOMClick = e => this.log("DOM Click", e.target.checked);

  handleDOMChange = e => {
    this.log("DOM Change", e.target.checked);
    this.toggleDOM();
  };

  render() {
    const { data } = this.state;
    var leghtArray = data.length;
    var imagem = data;
    const { domChecked, suirChecked, log } = this.state;

    return (
      <div className="App">
        // Modal Header
        <header className="App-header">
          <h2 className="Sub-title">
            <Statistic className="titulo" color="blue">
              <Statistic.Value className="titulo">
                <span>{leghtArray}</span>
              </Statistic.Value>
              <Statistic.Label>
                <span className="titulo">Subscritores</span>
              </Statistic.Label>
            </Statistic>
          </h2>
        </header>
        <div id="employee-details">
          <Grid doubling columns={4}>
            {imagem.map(obj => {
              return (
                <Modal
                  trigger={
                    <Grid.Column>
                      <Image
                        ui={true}
                        square="true"
                        src={obj["profile pic url"]}
                        size="medium"
                        centered
                      />

                      <p>
                        {obj["first name"]} {obj["last name"]}
                      </p>
                      <pageYOffset>
                        <span className="date">{obj["acção trigger"]}</span>
                      </pageYOffset>
                      <p>{obj.emailQuery}</p>

                      <pattern extra>
                        <a>
                          <Icon name="user" />
                          nº sessões: {obj["sessions"]}
                        </a>
                      </pattern>
                    </Grid.Column>
                  }
                >
                  <Modal.Header>
                    {obj["first name"]} {obj["last name"]}
                  </Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size="medium" src={obj["profile pic url"]} />
                    <Modal.Description>
                      <Header>{obj.emailQuery}</Header>
                      <p>
                        <p>nº sessões: {obj["sessions"]}</p>
                        <p>
                          {obj["gender"]} | {obj["locale"]}
                        </p>
                        <p>{obj["acção trigger"]}</p>
                        <p>{obj["acção trigger 2"]}</p>
                        <p>
                          <Checkbox
                            checked={suirChecked}
                            onChange={this.handleChange}
                            onClick={this.handleClick}
                            label={{
                              children: "Make my profile visible"
                            }}
                          />
                        </p>
                      </p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ModalSheets;
