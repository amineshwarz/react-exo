import React from 'react';
import Wrapper from './Wrapper.jsx';




 const Car = ({children, colorCar, colors}) =>{

    const colorInfo = colorCar ? colorCar : " Non précisée";

    return children && (

      <Wrapper>
        <p> Marque: {children} </p>
        <p > Couleur:  
          <span style={{color:colors}}>{colorInfo}</span>
        </p>
      </Wrapper>

    )
};
export default Car