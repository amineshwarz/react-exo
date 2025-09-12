const Car = ({color, children, year, age}) => {

    const colorInfo = color ? <p> Couleur:  
                                    <span style={{fontWeight:  'bold'}}>{color}</span> 
                            </p> : <p>Couleur: "Néant"</p>;
   

    if (children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                
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
                
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
