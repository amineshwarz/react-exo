
import { Component} from 'react'
import MyCars from './MyCars.jsx';

import './App.css'

export default class App extends Component {
  
  state = {
    titre: 'Arnautomobil Collection',
    sous_titre : 'Année 2025',
    color: 'green',
    color_sub: 'blue'
  };

  changeTitleBtn =()=>{
    this.setState({
      titre: 'je sapel Arnaud',
      sous_titre : 'Okééééééééééééééé',
      color: 'red',
      color_sub: 'orange'
    })
  }

  changeViaParam =(titre)=>{
    this.setState({
      titre: titre
    })
  }

  changeViaBind =(param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput =(e)=>{
    this.setState({
      titre: e.target.value
    })
  }


  render() {
    return (
      <div>
        <MyCars 
          titre={this.state.titre} 
          sous_titre={this.state.sous_titre} 
          color = {this.state.color}
          color_sub = {this.state.color_sub}
        /> 

        <button onClick={this.changeTitleBtn}>Changer le nom de titre </button>
        <button onClick={()=> this.changeViaParam('Titre via parm')}>via param</button>
        <button onClick={this.changeViaBind.bind(this,'Titre via Bind')}>via bind</button> <br></br>
        <input type="text" onChange={this.changeViaInput} Value={this.state.titre}/>
      </div>
        
    )
  }
}



