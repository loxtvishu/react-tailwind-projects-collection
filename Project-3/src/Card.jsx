import React from 'react'

const Card = (props) => {
  return (
    <div className={`px-8 py-8 ${props.customClass} w-[24%] rounded-[10px] flex flex-col gap-4`}>
        <h3 className={`${props.h3Class}`} >{props.label}</h3>
        <p className={`${props.pClass}`}>{props.para}</p>
        <div>
            <span className='text-[#B0B0B0]'>{props.visit}</span>
        </div>
    </div>
  )
}

export default Card