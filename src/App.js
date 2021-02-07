import './App.css';
import { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web!
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
