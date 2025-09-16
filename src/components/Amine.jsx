import React, {Component} from 'react'
import Arthur from './Arthur'

class Amine extends Component {

    state = {
        messageAmine: null,
        messageArthur: null
    }

    // ordrePapa =()=>{
    //    this.setState({
    //     messageAmine: 'va faire tes devoirs',
    //    })
    // }

    // reponseArthur =()=>{
    //     this.setState({
    //      messageArthur: 'Daccord papa',
    //     })
    //  }


    orderPapa = msg => this.setState({ messageAmine: msg, hidden:false });
    reponseArthur = msg => this.setState({ messageArthur: msg });
    





    render() {
        return (
            <div>
                <h1>Amine</h1>
                <button onClick={()=> this.orderPapa('va faire tes devoir  !')}>Donne l'ordre</button>
                <p>{this.state.messageAmine}</p>
                <hr /><br></br>

                <Arthur name="Arthur"
                        leState={this.state}
                        reponseArthurProps={this.reponseArthur} 
                />                      
            </div>
        )
    }
}
export default Amine
