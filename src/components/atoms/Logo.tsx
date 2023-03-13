import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className=''>
            <Link href='/'><h1 className='text-3xl max-md:text-sm'>Your Movie Library</h1></Link>
        </div>
    )
}

export default Logo