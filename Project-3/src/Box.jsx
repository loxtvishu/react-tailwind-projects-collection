import React from 'react'

const Box = (props) => {
    return (
        <div className='w-[24%]  h-fit flex justify-center leading-10 p-2'>
            <div className='h-[100px] w-fit'>
                <p className='text-[20px] font-[500] text-[#757372]'>{props.para}</p>
                <h3 className='text-[70px] text-[#F2F0EF] '>{props.number}</h3>
            </div>
        </div>
    )
}

export default Box