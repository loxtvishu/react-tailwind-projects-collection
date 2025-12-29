import React from 'react'

const ImageContainer = (props) => {
    return (
        <div className='mt-[20px] w-full h-[80vh] relative rounded-[10px] overflow-hidden'>
            <img src={props.label} className='object-cover object-top w-full h-full' />
            <h1 className='text-white absolute top-30 left-25 text-[100px] font-light' >DESIGN</h1>
            <h1 className='text-white absolute top-55 left-55 text-[100px] font-light'>& FREEDOM</h1>
            <p className='text-white absolute top-90 left-55 text-[20px] font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisus <br /> provident tempora rem officia earum!</p>
        </div>
    )
}

export default ImageContainer