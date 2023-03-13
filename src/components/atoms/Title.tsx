import React from 'react'
import { ReactNode } from 'react';
interface ITitle {
    children: ReactNode
}
const Title = ({ children  }:ITitle) => {
    return (
        <h4 className='mt-1 text-md font-semibold uppercase leading-tight'> {children} </h4>
    )
}

export default Title