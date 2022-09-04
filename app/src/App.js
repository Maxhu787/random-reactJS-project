import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      paused: true
    };
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    let test = setInterval(() => {
      if (!this.state.paused) {
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
  render() {
    return (
      <div>
        <h2>25 + 5 Clock</h2>
        <Controls />
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
          <button style={controlBtn}>↓</button>
          <button style={controlBtn}>↑</button>
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
