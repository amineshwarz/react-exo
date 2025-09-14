import React from 'react';
import Wrapper from './Wrapper.jsx';




 const Car = ({children, colorCar, colors, model}) =>{

    const colorInfo = colorCar ? colorCar : " Non précisée";

    return children && (

      <Wrapper>
        <p> Marque: 
        <span style={{fontWeight: 'bold'}}> {children}  </span>
        </p>
        <p > Model:  
          <span style={{fontWeight: 'bold'}}>   {model} </span>
        </p>
        <p > Couleur:  
          <span style={{color:colors}}> {colorInfo}</span>
        </p>
      </Wrapper>

    )
};
export default Car