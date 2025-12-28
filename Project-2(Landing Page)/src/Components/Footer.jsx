import React from 'react'
import Button from './Button'
import ImageContainer from './ImageContainer'

const Footer = () => {
    return (
        <footer>
            <div className='left-footer'>
                <Button label="Services" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum provident praesentium ea magnam quos aliquam minima. Dolor doloribus amet repellat libero veritatis iusto nemo dolorum quas, nulla molestiae, natus quidem.</p>
                <Button className="second-button" label="Explore Now" />
            </div>
            <div className='mid-footer'>
                <ImageContainer label="https://plus.unsplash.com/premium_photo-1722122220380-20fe434c9b8d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className='right-footer'>
                <ImageContainer label="https://images.unsplash.com/photo-1595210382266-2d0077c1f541?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </footer>
    )
}

export default Footer