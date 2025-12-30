import React from 'react'


const ImageContainer = (props) => {
  return (
    <div className={` ${props.Containerclass} relative overflow-hidden flex items-center `}>
        <img className={`${props.imgclass} object-cover object-top`} src={props.src} alt="" />
    </div>
  )
}

export default ImageContainer