import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './login.js';

class App extends Component {
	
	
  render() {
    return (
      <div className="home">
        
		<Login/>
		
      </div>
    );
  }
}

export default App;
