import React from 'react'

const MyHeader = ({ title, titlecolor, subtitlecolor, subtitle }) => {
  return (
    <>
        <h1 style={{ color: titlecolor}} > 
            {title} 
        </h1>

        <h2 style={{ color: subtitlecolor}} >
            {subtitle}
        </h2>
    </>
  )
}

export default MyHeader
