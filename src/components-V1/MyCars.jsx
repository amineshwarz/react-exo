import { Component } from 'react';
import Car from './Cars';
import MyHeader from './MyHeader';
import Wrapper from './Wrapper';




export default class MyCars extends Component {
    state = {
        cars:["Arnocedes", "Arnopel", "Arnaudi"],
         colors: ["#ffffff", "#F00F00", "yellow"],
         model: ["class A", "Corsa", "A3"],
       
    }

    addStyle =(e)=>{
        if (e.target.classList.contains ("styled")){
            e.target.classList.remove("styled");
        }
        else{
            e.target.classList.add("styled");
        }
    }


    noCopy =()=>{
        alert("laisse les arnauds tranquil, copier pas mes arnauds!!!");
    }


    render() {
        
        return (
            <div>
                
                <MyHeader 
                    title={this.props.titre}
                    subtitle={this.props.sous_titre}
                    titlecolor={this.props.color} 
                    subtitlecolor={this.props.color_sub}
                    test={this.addStyle}
                /> 

                <Wrapper>
                    <p onCopy={this.noCopy}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quis excepturi possimus sunt, autem aut maiores, 
                        dicta ea obcaecati neque inventore, impedit quam nemo eligendi eaque ipsum cupiditate ab. Molestiae!</p>
                </Wrapper>

                <Car    colorCar='blanc' 
                        colors= {this.state.colors[0]} 
                        model={this.state.model[0]}
                >       
                    {this.state.cars[0]} 
                </Car> 

                <Car    colorCar='rouge' 
                        colors= {this.state.colors[1]} 
                        model={this.state.model[1]}
                > 
                    {this.state.cars[1]}
                </Car>

                <Car    colorCar='jaune' 
                        colors= {this.state.colors[2]} 
                        model={this.state.model[2]}
                > 
                    {this.state.cars[2]}
                </Car>
            </div>  
        )
    }
}

