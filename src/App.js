import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <AddressApp></AddressApp>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
