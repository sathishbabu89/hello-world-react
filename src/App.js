
import React from 'react';
import Greeting from './Greeting';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
function App() {
  return (
    <div className="App">
      <Greeting name="World" />
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
