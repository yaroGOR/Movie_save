"use client";
import React, { useEffect, useState } from 'react'
import { loadState } from '../../components/redux/localStorage';
import Poster from '../../components/atoms/Poster';
import { useStore } from 'react-redux';
import MovieCard from '../../components/molecules/MovieCard';
import Head from 'next/head';


const list = () => {
  let savedMovies:any = {}
  const [domLoaded, setDomLoaded] = useState(false)
  if (typeof window !== undefined) {
    savedMovies = loadState()
  }
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <>
     <Head>
     <title>Your Movies</title>

    </Head>
    <div className='flex gap-10 flex-wrap justify-center'>
      {domLoaded && savedMovies?.movies?.movies.map((movie: any) => {
        return (
          <div key={movie?.imdbID} >
            <MovieCard data={movie} />
          </div>
        )
      })

      }

    </div>
    </>
  )
}

export default list