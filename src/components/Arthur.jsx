import React, {Component} from 'react'

const Arthur = (props) => {
    props.letState.messageAmine !== null ? (<button> Réponse </button>) : (<button disabled> Réponse </button>)
    const btnReponseArthur = props.letState.messageAmine
    return (
        <div>
            <h1>{props.name}</h1>
            {btnReponseArthur}
            <p>{props.letState.messageArthur}</p>
        </div>
    )
}
export default Arthur