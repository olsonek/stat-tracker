import * as React from 'react';
import './App.css';
import StatView from './scenes/StatView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <StatView />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
