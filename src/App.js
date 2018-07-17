import React, { Component } from 'react';
import Form from './form/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <h1 id="title">Survey Form</h1>
          </header>
          <main className="main">
            <p id="description">Let us know how we can improve freeCodeCamp</p>
            <Form />
          </main>
          <footer>
            <p>This site was created for freecodecamp.org project</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
