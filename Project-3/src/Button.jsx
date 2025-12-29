import React from 'react'

const Button = (props) => {
  return (
    /* text-black add kiya aur padding sahi ki */
    <button className='px-4 py-2 text-black rounded-[10px] text-[22px] bg-[#EC7155] font-semibold'>
      {props.Label} 
    </button>
  )
}

export default Button