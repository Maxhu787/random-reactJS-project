import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "25:00"
    };
    //this.incremental = this.incremental.bind(this);
  }
  render() {
    return (
      <div>
        <h2>25 + 5 Clock</h2>
        <Controls />
        <Display time={this.state.test}/>
      </div>
    )
  }
}

class Controls extends React.Component {
  render() {
    const controlBtn = {
      color: "000",
      padding: "20px",
      "font-size": "40px",
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
    return (
      <div>
        <h2>Session</h2>
        <p>{this.props.time}</p>
        <button>⏯️</button>
      </div>
    )
  }
}
export default App;
