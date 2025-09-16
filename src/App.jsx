import { Component } from 'react';
import Amine from './components/Amine';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre: 'Arnautomobil Collection',
  }

  render() {
    return (
      <div className='App'>
        
        <Mycars 
        titre={this.state.titre}/>
        <br/>

        <Amine />
      </div>
    )
  }
}

export default App;