import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome'
import MyHeader from './MyHeader'
import car1 from './merco.jpg'
import car2 from './opel.jpg'
import car3 from './A3.jpg'

class Mycars extends Component {

    state = {
        cars: [
            
            {   name: "Arnocedes", 
                color: "white", 
                year: 2018,
                img :car1
            },

            {   name: "Arnopel", 
                color: "red", 
                year: 2020,
                img :car2
            },

            {   name: "Arnaudi", 
                color: "green", 
                year: 2024,
                img :car3
            }
        ]
    }
//---------------    fonction qui change les annéées des voitures avec un boutton 
    addTenYears = () => {
        const updatedCars = this.state.cars.map((param) => {
            return param.year -= 10;
        })

        this.setState( { updatedCars } )
    }
// --------------    fonction qui calcule l'age de la voiture en fonction de l'année courante
    getAge = year => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;

        let frenchYearStr = "";
        if (age > 1) {
            frenchYearStr = "ans";
        } else {
            frenchYearStr = "an";
        }
        return `${age} ${frenchYearStr}`;
    }
//---------------    le render ------------------
    render() {
        
        return (
            <div>
                <MyHeader title={this.props.titre}/>

                <button onClick={this.addTenYears}> +18 </button>


                {
                    this.state.cars.map(({name, color, year, img}, index) => {
                        return (
                            <Car    key= {index}
                                    color= {color} 
                                    year= {year}
                                    age= {this.getAge(year)}
                                    img= {img}
                            > 
                                {name}
                            </Car>
                        )
                    })
                } 

                <Welcome />



            </div>
           
        )
       
    }
}

export default Mycars





                {/* <Car    color= {this.state.cars[0].color} 
                        year={year - this.state.cars[0].year } 
                > 
                    {this.state.cars[0].name}
                </Car>


                <Car    color= {this.state.cars[1].color} 
                        year={ year - this.state.cars[1].year}
                > 
                    {this.state.cars[1].name}
                </Car>


                <Car    color= {this.state.cars[2].color} 
                        year={year - this.state.cars[2].year}
                > 
                    {this.state.cars[2].name}
                </Car>
 */}