import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoGear from 'react-icons/lib/go/gear'

const palettes = {
  // Multicolor
  "multicolor": [
    "rgba(248, 255, 229, 1)",
    "rgba(6, 214, 160, 1)",
    "rgba(27, 154, 170, 1)",
    "rgba(213, 41, 65, 1)",
    "rgba(255, 196, 61, 1)"
  ],

  // Blue theme
  "blue": [
    "rgba(201, 228, 202, 1)",
    "rgba(42, 157, 143, 1)",
    "rgba(135, 187, 162, 1)",
    "rgba(59, 96, 100, 1)",
    "rgba(54, 73, 88, 1)"
  ],

  // Red theme
  "red": [
    "rgba(191, 0, 0, 1)",
    "rgba(197, 34, 51, 1)",
    "rgba(167, 51, 63, 1)",
    "rgba(116, 18, 29, 1)",
    "rgba(88, 12, 31, 1)"
  ],

  // Yellow theme
  "yellow": [
    "rgba(252, 216, 52, 1)",
    "rgba(228, 195, 29, 1)",
    "rgba(188, 157, 4, 1)",
    "rgba(208, 154, 4, 1)",
    "rgba(175, 134, 10, 1)"
  ]
}

const subjects = {
  "devops": [
    "Alerting",
    "Automation",
    "Continuous deployment",
    "Continuous integration",
    "Delivery",
    "Deployment frequency",
    "Infrastructure as Code",
    "Integration",
    "Monitoring",
    "Orchestration",
    "Pipeline",
    "Practices",
    "Working with Developers"
 ]
}


class App extends Component {
  constructor(props){
    super(props);

    // Set the list of subjects to display
    this.subjects = subjects["devops"]

    // Set the palette style
    this.palette = palettes["blue"]

    this.state = {
      subject: this.randomSubject(this.subjects),
      style: {
       color: this.randomColor(this.palette)
      },
      server_style: {
        color: "lighgrey"
      }
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1500
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  randomSubject(subjects) {
    return subjects[Math.floor(Math.random() * subjects.length)]
  }

  randomColor(palette) {
    return palette[Math.floor(Math.random() * palette.length)]
  }

  tick() {
    this.setState({
      subject: this.randomSubject(this.subjects),
      style: {
        color: this.randomSubject(this.palette)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DevOps-360-CI-CD</h1>
        </header>
        <div className="App-fullpage">
          <h2><GoGear /> DevOps is all about...</h2>
          <h3 style={this.state.style}>
            - {this.state.subject} -
          </h3>
          <hr />
          <small>
            Served by <span style={this.state.server_style}></span>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
