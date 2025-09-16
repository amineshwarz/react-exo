import React from 'react'

const Welcome =() => {

    
    const bonjour = () => console.log("Bonjour");
       
    const bonsoir = msg => console.log(msg);
    
    
  return (
    <div>
        <button onClick={bonjour}>Invoquer une fonction</button>
        <button onClick={()=> bonsoir('bonsoir')}>Invoquer une fonction avec arg "Bonsoir"</button>
        <button onClick={()=> console.log('bonne nuit')}> Clg sur le bouton</button>

      
    </div>
  )
}

export default Welcome
