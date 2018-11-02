import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
      <h1>Mo Bamba!</h1>
      </div>
  </ThemeProvider>
  
    );
  }
}

export default App;
