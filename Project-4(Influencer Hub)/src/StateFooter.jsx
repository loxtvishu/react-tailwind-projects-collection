import React from 'react'

const StateFooter = (props) => {
  return (
    <div className='px-5 flex text-center justify-between items-center h-[20%] w-full'>
      <div>
        <h1 className='font-bold text-slate-900 text-base'>{props.Media}</h1>
        <span className='text-1xl font-bold text-gray-500'>Media</span>
      </div>
      <div>
        <h1 className='font-bold text-slate-900 text-base'>{props.followers}</h1>
        <span className='text-1xl font-bold text-gray-500'>Followers</span>
      </div>
      <div >
        <h1 className='font-bold text-slate-900 text-base'>{props.following}</h1>
        <span className='text-1xl font-bold text-gray-500 '>Following</span>
      </div>
    </div>
  )
}

export default StateFooter