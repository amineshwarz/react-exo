import React from 'react';
import Wrapper from './Wrapper.jsx';


const Car = ({color, children, year, age, img}) => {

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

                <img src={img}/>
                
                <svg width="100" height="100" src='./mercedes-benz-svgrepo-com.svg'>
                    <g>
                        <title>Background</title>
                        <rect fill="#ffffff"  id="cancas_background"/>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <rect fill="#222222" fill-rule="nonzero" strokeWidth="0" x="0" y="0" width="100" height="100"/>
                    </g>
                </svg>
            </Wrapper>
            
        )
    }

}

export default Car
