import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 60,
      seconds: 60,
      paused: true
    };
    this.toggle = this.toggle.bind(this);
    this.addSessionLength = this.addSessionLength.bind(this);
    this.subtractSessionLength = this.subtractSessionLength.bind(this);
  }
  toggle() {
    if(this.state.paused && this.state.seconds >= 60) {
      this.setState({
        paused: false,
        seconds: this.state.sessionLength
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

  subtractSessionLength() {
    if(this.state.seconds > 0) {
      this.setState({
        sessionLength: this.state.sessionLength - 60,
        seconds: this.state.sessionLength - 60
      })
    }
  }

  addSessionLength() {
    this.setState({
      sessionLength: this.state.sessionLength + 60,
      seconds: this.state.sessionLength + 60
    })
  }

  render() {
    return (
      <div>
        <h2>25 + 5 Clock</h2>
        <Controls 
          subtractSessionLength={this.subtractSessionLength}
          addSessionLength={this.addSessionLength}
          breakLength={"test"}
          sessionLength={this.state.sessionLength}
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
          <p>{this.props.breakLength}</p>
          <button style={controlBtn}>↓</button>
          <button style={controlBtn}>↑</button>
        </section>
        <section style={{ display: "inline", float: "right"}}>
          <h3>Session Length</h3>
          <p>{this.props.sessionLength}</p>
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
