import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      paused: true
    };
    this.toggle = this.toggle.bind(this);
    this.addSessionLength = this.addSessionLength.bind(this);
    this.subtractSessionLength = this.subtractSessionLength.bind(this);
  }
  toggle() {
    let secondsInterval = setInterval(() => {
      if (!this.state.paused && this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1
        })
      }
    }, 1000);

    if(this.state.paused) {
      this.setState({
        paused: false
      })
    } else {
      this.setState({
        paused: true
      })
    }
  }
  subtractSessionLength() {
    if(this.state.seconds > 0) {
      this.setState({
        seconds: this.state.seconds - 60
      })
    }
  }

  addSessionLength() {
    this.setState({
      seconds: this.state.seconds + 60
    })
  }

  render() {
    return (
      <div>
        <h2>25 + 5 Clock</h2>
        <Controls 
          subtractSessionLength={this.subtractSessionLength}
          addSessionLength={this.addSessionLength}
        />
        <Display 
          time={this.state.seconds}
          toggle={this.toggle}
        />
      </div>
    )
  }
}

class Controls extends React.Component {
  render() {
    const controlBtn = {
      color: "000",
      padding: "20px",
      "fontSize": "40px",
      cursor: "pointer",
    }
    return (
      <div style={{padding: "200px"}}>
        <section style={{display: "inline", float: "left"}}>
          <h3>Break Length</h3>
          <button style={controlBtn}>↓</button>
          <button style={controlBtn}>↑</button>
        </section>
        <section style={{ display: "inline", float: "right"}}>
          <h3>Session Length</h3>
          <button onClick={this.props.subtractSessionLength} style={controlBtn}>↓</button>
          <button onClick={this.props.addSessionLength} style={controlBtn}>↑</button>
        </section>
      </div>
    )
  }
}
class Display extends React.Component {
  render() {
    const timeStyle = {
      fontSize: "50px"
    }
    return (
      <div>
        <h2>Session</h2>
        <p style={timeStyle}>{this.props.time}</p>
        <button onClick={this.props.toggle}>⏯️</button>
      </div>
    )
  }
}
export default App;
