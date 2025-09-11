import { Component } from 'react';
import Mycars from './components/myCars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Arnautomobile Collection'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
      </div>
    )
  }
}

export default App;