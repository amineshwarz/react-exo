import React from 'react';
import Wrapper from './Wrapper.jsx';
import car1 from './5ece697eaa71d_20200527_144439.jpg';

import car3 from './A7307796.jpg';


const Car = ({color, children, year, age}) => {

    const colorInfo = color ? <p> Couleur:  
                                    <span style={{fontWeight:  'bold'}}>{color}</span> 
                            </p> : <p>Couleur: "Néant"</p>;
   

    if (children) {
        return (
            
            <Wrapper>
                <p>Marque: 
                    <span style={{fontWeight:  'bold'}}> {children} </span>
                </p>

                <p>Année: 
                    <span style={{fontWeight:  'bold'}}>{ year} </span>
                    
                </p>
                <p>Age :
                    <span style={{fontWeight:  'bold'}}>{ age} </span>
                    
                </p>
                {colorInfo}

                <img src={car1}/>

                <img src={car3}/>
            </Wrapper>
            
        )
    }

}

export default Car
