import React from 'react'

const Arthur = props => {
    const btnReponseArthur = props.leState.messageArthur
    // props.leState.messageAmine !== null ? (<button onClick={props.reponseArthur}> Réponse </button>) : (<button disabled> Réponse </button>)
     
    console.log(props);
    return (
        <div>
            
            <h2>{props.name}</h2>

             {btnReponseArthur}
            <p> {props.leState.messageAmine !== null ? (
                <button onClick={props.reponseArthur}> Réponse </button>) : (<button hidden> Réponse </button>)}
            </p>
        </div>
    //     <div>
    //     <h2>{props.name}</h2>
    //     {props.leState.messageAmine !== null ? (
    //         <button onClick={props.reponseArthur}>Réponse</button>
    //     ) : (
    //         <button disabled>Réponse</button>
    //     )}
    //     <p>{props.leState.messageArthur}</p> 
    // </div>
    )
}
export default Arthur