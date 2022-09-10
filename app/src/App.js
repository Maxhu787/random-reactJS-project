import './App.css';
import React from 'react';
import resetImg from './reset.png'
import startImg from './start.png'
import stopImg from './stop.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 60,
      breakLength: 300,
      seconds: 60,
      paused: true
    };
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
    this.addSessionLength = this.addSessionLength.bind(this);
    this.subtractSessionLength = this.subtractSessionLength.bind(this);
    this.addBreakLength = this.addBreakLength.bind(this);
    this.subtractBreakLength = this.subtractBreakLength.bind(this);
  }
  toggle() {
    if (this.state.paused && this.state.seconds >= 60) {
      this.setState({
        paused: false,
      })
      this.secondsInterval = setInterval(() => {
        if (!this.state.paused && this.state.seconds > 0) {
          this.setState({
            seconds: this.state.seconds - 1
          })
        }
      }, 1000);
    } else {
      this.setState({
        paused: true
      })
      clearInterval(this.secondsInterval);
    }
  }

  reset() {
    this.setState({
      sessionLength: 60,
      breakLength: 300,
      seconds: 60,
      paused: true
    })
  }

  subtractSessionLength() {
    if (this.state.sessionLength > 60 && this.state.paused === true) {
      this.setState({
        sessionLength: this.state.sessionLength - 60,
        seconds: this.state.sessionLength - 60
      })
    }
  }
  addSessionLength() {
    if (this.state.paused === true && this.state.sessionLength < 3600) {
      this.setState({
        sessionLength: this.state.sessionLength + 60,
        seconds: this.state.sessionLength + 60
      })
    }
  }

  subtractBreakLength() {
    if (this.state.breakLength > 60 && this.state.paused === true) {
      this.setState({
        breakLength: this.state.breakLength - 60,
      })
    }
  }
  addBreakLength() {
    if (this.state.paused === true && this.state.breakLength < 3600) {
      this.setState({
        breakLength: this.state.breakLength + 60,
      })
    }
  }

  render() {
    return (
      <div>
        <h2>25 + 5 Clock</h2>
        <Controls
          subtractSessionLength={this.subtractSessionLength}
          addSessionLength={this.addSessionLength}
          subtractBreakLength={this.subtractBreakLength}
          addBreakLength={this.addBreakLength}
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
        />
        <Display
          time={this.state.seconds}
          toggle={this.toggle}
          reset={this.reset}
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
    let sessionLength = this.props.sessionLength / 60
    let breakLength = this.props.breakLength / 60
    return (
      <div style={{ padding: "200px" }}>
        <section style={{ display: "inline", float: "left" }}>
          <h3 id="break-label">Break Length</h3>
          <p id="break-length">{breakLength}</p>
          <button id="break-decrement" onClick={this.props.subtractBreakLength} style={controlBtn}>↓</button>
          <button id="break-increment" onClick={this.props.addBreakLength} style={controlBtn}>↑</button>
        </section>
        <section style={{ display: "inline", float: "right" }}>
          <h3 id="session-label">Session Length</h3>
          <p id="session-length">{sessionLength}</p>
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
    let displayTime = new Date(this.props.time * 1000).toISOString().substring(14, 19)
    return (
      <div>
        <h2 id="timer-label">Session</h2>
        <p id="time-left" style={timeStyle}>{displayTime}</p>
        <button id="start_stop" onClick={this.props.toggle}>
          <img src={startImg} alt="start" />
          <img src={stopImg} alt="stop" />
        </button>
        <button id="reset" onClick={this.props.reset}>
          <img src={resetImg} alt="reset" />
        </button>
      </div>
    )
  }
}
export default App;
