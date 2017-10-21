import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Comment from '../components/Comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn-warning">
          Warning!
        </button>
        <Comment author={{name: "Kiran Gopinathan",  avatarUrl: 'https://avatars1.githubusercontent.com/u/23038502?s=460&v=4'}} date={new Date()} text="This is a react component"/>
      </div>
    );
  }
}

export default App;
