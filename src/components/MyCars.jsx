import { Component } from 'react';
import Car from './Cars';
import MyHeader from './MyHeader';




export default class MyCars extends Component {

    state = {
        cars:["Arnocedes", "Arnoarri", "Arnaudi"],
         colors: ["#ffffff", "#F00F00", "yellow"],

        // color1: "#ffffff",
        // color2: "#F00F00",
        // color3: "yellow"
    }
    render() {
        
        return (
            <div>
                
                <MyHeader 
                    title={this.props.titre}
                    subtitle={this.props.sous_titre}
                    titlecolor={this.props.color} 
                    subtitlecolor={this.props.color_sub}
                /> 
                
                <Car colorCar='blanc' colors= {this.state.colors[0]}> {this.state.cars[0]}</Car> 
                <Car colorCar='rouge' colors= {this.state.colors[1]}> {this.state.cars[1]}</Car>
                <Car colorCar='Yellow' colors= {this.state.colors[2]}> {this.state.cars[2]}</Car>
            </div>  
        )
    }
}

