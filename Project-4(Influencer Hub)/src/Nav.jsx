import React from 'react'
import Links from './Links'
import ImageContainer from './ImageContainer'
import myImage from './assets/download2.png'
import Button from './Button'

const Nav = () => {
   const arr = ["Dashboard", "Find Influencers", "Campaigns", "Analytics"]
    return (
        <nav className='h-[100px] shadow-md z-50 w-full fixed top-0 p-3 bg-slate-900 flex justify-between items-center'>
            <div className="left">
                <ImageContainer imgclass = "h-[70px] w-fit" src={myImage} />
            </div>
            <div className="middle w-fit flex gap-4">
                {
                    arr.map(function (elem) {
                        return <Links value={elem} />
                    })
                }
            </div>
            <div className="right flex gap-3 items-center">
                <i className = "ri-search-ai-line p-2 text-2xl"></i>
                <Button value = "Get in Touch" />
                <ImageContainer imgclass ="h-[50px] w-[50px] rounded-[50%] overflow-hidden" src = "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </nav>
    )
}

export default Nav