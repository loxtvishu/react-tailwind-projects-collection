import React from 'react'
import Button from './Button'
import Link from './Link'

const Nav = () => {
    return (
        // h-15 ko badal kar h-20 kiya aur items-center add kiya
        <div className="h-20 w-full flex justify-between items-center">
            <span className='text-4xl font-medium text-white'>DVSY</span>

            <div className='flex gap-5 items-center'>
                <Link Label="DESIGNERS" />
                <Link Label="COLLABS" />
                <Link Label="EVENTS" />
                <Link Label="BLOG" />
                <Link Label="CARD" />
                <Button Label="GET IN TOUCH" />
            </div>
        </div>
    )
}
export default Nav