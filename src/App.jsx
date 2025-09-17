import { Component } from 'react';
import Amine from './components/Amine';
import './App.css';
import Mycars from './components/Mycars';
import Form from './components/Form'

class App extends Component {

  state = {
    titre: 'Arnautomobil Collection',
  }

  render() {
    return (
      <div className='App'>

        <Mycars 
          titre={this.state.titre}/>
        <Form/>

        <Amine />
      </div>
    )
  }
}

export default App;