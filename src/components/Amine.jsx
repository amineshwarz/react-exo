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
                <hr />
                <Arthur name="Toto" letState={this.state} />
                <Arthur name="Toto" letState={this.state} reponseArthur={this.reponseToto} />
                <button onClick={this.reponseArthur} disabled={this.state.messageAmine === null ? true : false}>Réponse</button>
            
            </div>
        )
    }
}
export default Amine
