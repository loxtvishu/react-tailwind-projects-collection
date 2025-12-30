import React from 'react'

const Button = (props) => {
  return (
    <button className='text-[20px] bg-amber-950 p-2.5 rounded-2xl'>{props.value}</button>
  )
}

export default Button