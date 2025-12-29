import React from 'react'
import Button from './Button'

const FooterSection = () => {
    return (
        <div className='mt-[20px] flex flex-col'>
            <div className='py-[20px] px-[50px] text-[#F4F3F1] text-[50px] font-semibold'>
                OUR ADVANTAGES
            </div>
            <section className='h-[70vh] w-full flex justify-between'>
                <div className='h-full w-[49%] rounded-[10px] overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1723672927511-03f69242a054?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='h-full w-[49%] flex flex-col justify-between rounded-[10px]'>
                    <div className='bg-[#1E1E1E] flex flex-col justify-around px-8 py-4 rounded-[10px] h-[49%]'>
                        <h1 className='text-[#737373] text-[30px]'>INDEPENDENT DESIGNERS</h1>
                        <div className=' flex justify-between h-fit w-full '>
                            <p className='w-[85%] text-[#737373] h-fit'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, odio. adipisicing elit. Earum maxime amet nemo repellendus quis saepe quod aperiam perspiciatis facilis eius consectetur, veritatis m</p>
                        </div>
                    </div>
                    <div className='bg-[#1E1E1E] flex flex-col justify-around px-8 py-4 rounded-[10px] h-[49%]'>
                        <h1 className='text-[#737373] text-[30px]'>EXCLUSIVE & UNIQUITY</h1>
                        <div className=' flex justify-between h-fit w-full '>
                            <p className='w-[85%] text-[#737373] h-fit'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, odio. adipisicing elit. Earum maxime amet nemo repellendus quis saepe quod aperiam perspiciatis facilis eius consectetur, veritatis m</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-[70vh] w-full flex justify-between mt-[20px]'>
                <div className='h-full w-[49%] flex flex-col justify-between rounded-[10px]'>
                    <div className='bg-[#1E1E1E] flex flex-col justify-around px-8 py-4 rounded-[10px] h-[49%]'>
                        <h1 className='text-[#737373] text-[30px]'>HIGH QUALITY</h1>
                        <div className=' flex justify-between h-fit w-full '>
                            <p className='w-[85%] text-[#737373] h-fit'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, odio. adipisicing elit. Earum maxime amet nemo repellendus quis saepe quod aperiam perspiciatis facilis eius consectetur, veritatis m</p>
                        </div>
                    </div>
                    <div className='bg-[#1E1E1E] flex flex-col justify-around px-8 py-4 rounded-[10px] h-[49%]'>
                        <h1 className='text-[#737373] text-[30px]'>ECO-FRIENDLY</h1>
                        <div className=' flex justify-between h-fit w-full '>
                            <p className='w-[85%] text-[#737373] h-fit'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, odio. adipisicing elit. Earum maxime amet nemo repellendus quis saepe quod aperiam perspiciatis facilis eius consectetur, veritatis m</p>
                        </div>
                    </div>
                </div>
                <div className='h-full w-[49%] rounded-[10px] overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661610898547-d19e5b6462a2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </section>
        </div>
    )
}

export default FooterSection