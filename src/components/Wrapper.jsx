import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'pink', 
        width: '400px', 
        padding: '5px', 
        margin: '10px auto',
        }}
    >
        {children}
    </div>
  )
}

export default Wrapper
