import { Component } from 'react';
import Car from './Cars';

class Form extends Component {
    state = {
        username: '',
    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }

  render() {
    return (
      <div>
        <Car color="red" height="400" /> 
        <h1>Commentaire</h1>
        <form>
            <div>
                <label>Pseudo</label>
                <input type='text' value={this.state.username} onChange={this.handlePseudo}></input>
            </div>
            <div>
                <label>Couleur</label>
                <select>
                    <option value="vert">Vert</option>
                    <option value="rouge">Rouge</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
        </form>
        
    </div>
    )
  }
}

export default Form;