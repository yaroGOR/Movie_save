import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <div className='max-md:hidden'>
            <ul className='flex gap-2'>
                <li><Link href='/'>Home</Link></li>
            </ul>
        </div>
    )
}


export default Menu
