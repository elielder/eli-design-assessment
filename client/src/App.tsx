import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import ColorPage from './components/ColorPage';
import { BrowserRouter } from 'react-router-dom';

interface Props {

}
interface State {
  colors?: Color[];
}

export interface Color {
  hexCode: string,
  colorType: string,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      colors: undefined
    }
  }

  componentDidMount() {
    axios.get('/colors/')
      .then((res) => {
        console.log(res)
        this.setState({
          colors: res.data
        })
        console.log('res', res.data)
      })
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header title='New Engen' />
          <div className='App-body'>
            <LeftNav />
            <ColorPage />
            <div>
              {this.state.colors? this.state.colors.length : 5}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
