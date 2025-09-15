import React, {Component} from 'react'
import Arthur from './Arthur'

class Amine extends Component {

    state = {
        messageAmine: null,
        messageArthur: null
    }

    ordrePapa =()=>{
       this.setState({
        messageAmine: 'va faire tes devoirs',
       })
    }

    reponseArthur =()=>{
       this.setState({
        messageArthur: 'Daccord papa',
       })
    }

    render() {
        return (
            <div>
                <h1>Amine</h1>
                <button onClick={this.ordrePapa}>Donne l'ordre</button>
                <p>{this.state.messageAmine}</p>
                <hr /><br></br>




                <Arthur name="Arthur"
                        leState={this.state}
                        reponseArthur={this.reponseArthur} 
                />
                
                        
            
            </div>
        )
    }
}
export default Amine
