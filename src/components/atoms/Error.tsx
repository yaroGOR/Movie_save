import React, { ReactNode } from 'react'
interface IError {
    children: ReactNode;
}
const Error = ({ children }: IError) => {
    return (
        <div className='mt-10 text-xl'>{children}</div>
    )
}

export default Error