import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0
    };
    this.incremental = this.incremental.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  incremental() {
    this.setState({
      test: this.state.test + 1
    })
  }
  decrement() {
    this.setState({
      test: this.state.test - 1
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.test}</p>
        <button onClick={this.incremental}>incremental</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
export default App;
