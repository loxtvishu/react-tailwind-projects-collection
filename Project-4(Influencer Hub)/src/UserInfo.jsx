import React from 'react'

const UserInfo = (props) => {
  return (
    <div className='px-5 h-[25%] w-full flex flex-col  text-center'>
        <h3 className='font-semibold text-3xl text-[#5a5b5e]'>{props.username}</h3>
        <span className='text-[#979c9b] font-[500]'>{props.fullName}</span>
        <p className='text-[#777a7c] font-[700]'>{props.bio}</p>
    </div>
  )
}

export default UserInfo