
import { Component} from 'react'
import MyCars from './components/myCars.jsx';

import './App.css'

export default class App extends Component {
  
  state = {
    titre: 'Catalogue des Arnauds',
    sous_titre : '2025',
    color: 'green',
    color_sub: 'blue'
  };

  render() {
    return (
      <div>
        <MyCars 
          titre={this.state.titre} 
          sous_titre={this.state.sous_titre} 
          color = {this.state.color}
          color_sub = {this.state.color_sub}
        /> 
      </div>
        
    )
  }
}



