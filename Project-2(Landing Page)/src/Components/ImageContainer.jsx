import React from 'react'

const ImageContainer = ({label}) => {
  return (
    <div className='ImageContainer'>
        <img src={label} alt="" />
    </div>
  )
}

export default ImageContainer