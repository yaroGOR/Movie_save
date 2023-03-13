import React from 'react'
import { ReactNode } from 'react';

interface IYear {
    children: ReactNode
}

const Year = ({ children }: IYear) => {
    return (
        <p className='text-sm text-gray-600'>Year: {children}</p>
    )
}

export default Year