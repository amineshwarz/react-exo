import { Component } from 'react';
import Amine from './components/Amine';
import './App.css';

class App extends Component {

  state = {
    titre: null,
  }

  render() {
    return (
      <div className='App'>
        <Amine />
      </div>
    )
  }
}

export default App;