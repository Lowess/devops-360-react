import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoGear from 'react-icons/lib/go/gear'

const palettes = {
  // From https://coolors.co/app/52489c-ef476f-ffd166-86bbd8-06d6a0
  "set_1": [
    "rgba(207, 255, 179, 1)",
    "rgba(173, 226, 93, 1)",
    "rgba(253, 196, 41, 1)",
    "rgba(59, 112, 128, 1)",
    "rgba(58, 87, 67, 1)"
  ],

  // From https://coolors.co/app/006d75-00c1b5-c9e8dd-c6003d-4f213a
  "set_2": [
    "rgba(50, 199, 135, 1)",
    "rgba(171, 225, 136, 1)",
    "rgba(63, 167, 214, 1)",
    "rgba(250, 192, 94, 1)",
    "rgba(247, 239, 153, 1)"
  ]
}

const subjects = {
  "devops": [
    "Automation",
    "Infrastructure as Code",
    "Continuous integration",
    "Continuous deployment",
    "Working with Developers",
    "Monitoring",
    "Alerting"
 ]
}


class App extends Component {
  constructor(props){
    super(props);

    // Set the list of subjects to display
    this.subjects = subjects["devops"]
    // Set the palette style
    this.palette = palettes["set_2"]


    this.state = {
      subject: this.randomSubject(this.subjects),
      style: {
       color: this.randomColor(this.palette)
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
          <h1><GoGear /> DevOps is all about
          </h1>
          <h3 style={this.state.style}>
            - {this.state.subject} -
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
