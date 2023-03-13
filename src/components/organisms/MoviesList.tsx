import React from 'react'
import MovieCard from '../molecules/MovieCard'
import { Search } from './Search';
const MoviesList = ({ data }: any) => {
  return (
    <div className='mt-10 grid grid-cols-3 max-md:grid-cols-2	max-sm:grid-cols-1 gap-10 justify-center'>
      {data?.Search?.map((item: any, index: any) => {
        return <MovieCard key={index} data={item} />
      })}

    </div>
  )
}

export default MoviesList
