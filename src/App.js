import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Let's talk about the people here
          </p>
          <p>
            Are they even good?
          </p>
          <p>
            That's incredibly suspicious
          </p>
          <p>
            He's a creative genius!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Labryinth is in town again!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
