import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';



class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
      <h1>Gucci Mane</h1>
      <Button label="Select" raised primary />
      </div>
  </ThemeProvider>
  
    );
  }
}

export default App;
