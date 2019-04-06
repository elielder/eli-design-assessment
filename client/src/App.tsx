import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Body from './components/Body';
import { BrowserRouter as Router} from 'react-router-dom';

interface Props {

}

export interface Color {
  hexCode: string,
  colorType: string,
}


class App extends Component<Props> {

  render() {
    return (
      <Router>
        <div className="App">
          <Header title='New Engen' />
          <div className='App-body'>
            <LeftNav />
            <Body />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
