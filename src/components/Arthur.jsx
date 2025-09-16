import React from 'react'

const Arthur = props => {
    
    // const btnReponseArthur =  props.leState.messageAmine !== null ? (<button onClick={props.reponseArthur}> Réponse </button>) : (<button hidden> Réponse </button>)
   
     
    console.log(props);
    return (
        <div>
            
            <h2>{props.name}</h2>

             {/* {btnReponseArthur} */}

             <button    hidden={props.leState.hidden} 
                        onClick={()=> props.reponseArthurProps('je peux faire apres ?')}> Réponse </button>

             <p>{props.leState.messageArthur}</p>

        </div>

    )
}
export default Arthur