import React from 'react'
import Button from './Button'
import ImageContainer from './ImageContainer'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-top-part">
                <Button label="About Horizon" />
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit ex dolor nam eligendi minus fugit sit animi reiciendis? Placeat suscipit illo itaque expedita omnis tempore non est inventore et.</h4>
            </div>
            <div className="hero-center-part">
                <ImageContainer label="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ImageContainer label="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <ImageContainer label="https://images.unsplash.com/photo-1750716413381-1c9a0d94db84?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="hero-bottom-part">
                <h3>A few more  facts about us in numbers.</h3>
                <div className='section'>
                    <div>
                        <h1>12000+</h1>
                        <p>Hours of play annually</p>
                    </div>
                    <div>
                        <h1>89%</h1>
                        <p>Players Retaintion Rate</p>
                    </div>
                    <div>
                        <h1>1,200+</h1>
                        <p>Active Members</p>
                    </div>
                    <div>
                        <h1>125+</h1>
                        <p>Annual Tournaments</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero