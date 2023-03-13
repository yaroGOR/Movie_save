import Image from 'next/image'
import React from 'react'
interface IPoster {
    width: number | undefined
    height: number | undefined
    src: string

}
const Poster = ({ width = 400, height = 400, src }:any) => {
    if (src == 'N/A') {
        src = '/noimage.jpg'
    }
    return (
        <Image placeholder='blur' blurDataURL='/noimage.jpg' alt='img' className='object-cover self-center object-center rounded-2xl shadow-md' width={height} height={width} src={src} />
    )
}

export default Poster