import React from 'react'
import ImageContainer from './ImageContainer'

const ActionBar = (props) => {
  return (
    <div className=' flex justify-between h-[20%] w-full '>
         <i className="p-4 ri-star-line text-3xl text-black"></i>
         <ImageContainer  Containerclass = "h-[100px] w-[100px] border-3 -mt-[15px]  rounded-full" src={props.profileImg}/>
         <i className="p-4 ri-more-fill text-3xl text-black"></i>
    </div>
  )
}

export default ActionBar