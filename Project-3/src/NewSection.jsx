import React from 'react'

const NewSection = () => {
    return (
        <section className='h-[70vh] w-full mt-[20px] flex justify-between'>
            <div className='h-full w-[49%] bg-[#1E1E1E] h-[45%] flex flex-col justify-around rounded-[10px] px-4'>
                <div className='flex flex-col justify-between h-[45%]'>
                    <h3 className=' text-[20px] font-semibold text-[#F4F4F4]'>ABOUT</h3>
                    <h1 className='text-[40px] font-[400] text-[#F4F4F4]'>WHERE DESIGNERS MEETS FREEDOM</h1>
                </div>
                <div className='h-fit text-[#918c8c] flex justify-between  w-full'>
                    <p className='h-full w-[45%] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing ee ipsam, nam officiis libero nisi facilis optio alias perspiciatis magnam. Dolor, placeat incidunt illum commodi suscipit unde fugit illo?</p>
                    <p className='h-full w-[49%] '>Lorem, ipsum dolor sit amet consectetur adipisicing ea officiis laudantium necessitatibus molestiae? Dolor libero velit esse voluptates hic, unde reprehenderit illum? Quas!</p>
                </div>
            </div>
            <div className='h-full w-[49%] bg-amber-50 h-[45%] rounded-[10px]'>
                <img className='h-full w-full object-cover overflow-hidden' src="https://plus.unsplash.com/premium_photo-1663091769346-215f459f964c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </section>
    )
}

export default NewSection