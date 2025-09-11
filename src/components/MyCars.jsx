import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        cars: [
            
            {   name: "Arnocedes", 
                color: "white", 
                year: 2018
            },

            {   name: "Arnopel", 
                color: "red", 
                year: 2020
            },

            {   name: "Arnaudi", 
                color: "green", 
                year: 2016
            }
        ]
    }

    addTenYears = () => {
        const updatedCars = this.state.cars.map((param) => {
            return param.year -= 10;
        })

        this.setState( { updatedCars } )
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <button onClick={this.addTenYears}> +18 </button>
                    
                <Car    color= {this.state.cars[0].color} 
                        year={this.state.cars[0].year } 
                > 
                    {this.state.cars[0].name}
                </Car>


                <Car    color= {this.state.cars[1].color} 
                        year={this.state.cars[1].year}
                > 
                    {this.state.cars[1].name}
                </Car>


                <Car    color= {this.state.cars[2].color} 
                        year={this.state.cars[2].year}
                > 
                    {this.state.cars[2].name}
                </Car>


            </div>
           
        )
       
    }
}

export default Mycars