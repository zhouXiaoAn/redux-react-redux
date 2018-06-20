import React, { Component } from 'react';
import Home from './components/home'
import Counter from './components/counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">666 React</h1>
        </header>
        <Home />
        <Counter />
      </div>
    );
  }
}

export default App;
