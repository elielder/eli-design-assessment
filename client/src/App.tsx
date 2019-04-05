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
  color?: Color;
  type?: Color[];
}

export interface Color {
  hexCode: string,
  colorType: string,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      colors: undefined,
      color: undefined,
      type: undefined
    }
  }

  componentDidMount() {
    axios.get('/colors/')
      .then((res) => {
        console.log(res)
        this.setState({
          colors: res.data
        })
        console.log('res all', res.data)
      })
      .catch(err => console.log('err', err));

    axios.get('/colors/hex/%23FFFFFF')
      .then((res) => {
        console.log(res)
        this.setState({
          color: res.data
        })
        console.log('res one', res.data)
      })
      .catch(err => console.log('err', err));

      axios.get('/colors/type/red')
      .then((res) => {
        console.log(res)
        this.setState({
          type: res.data
        })
        console.log('res type', res.data)
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
              {this.state.colors ? this.state.colors.length : 5}
              {/* {this.state.color ? this.state.color : 'gggg'} */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
