import React from 'react'
import Button from './Button'
import Link from './Link'
const Navbar = () => {
    return (
        <div className='Nav'>
            <h1>Horizon Courts</h1>
            <div className="center-nav">
                <Button label="About us" />
                <Link label="Services" />
                <Link label="Coaches" />
                <Link label="Events" />
                <Link label="Contacts" />
            </div>
            <Button label="Book Now" />
        </div>
    )
}

export default Navbar