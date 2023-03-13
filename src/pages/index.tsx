import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MoviesList from '../components/organisms/MoviesList'
import Pagination from '../components/molecules/Pagination'
import { useState, useEffect } from 'react';
import store from '../components/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Error from '../components/atoms/Error'

export async function getServerSideProps(ctx:any){
 

  const title = ctx.query.title
  const page = Number(ctx.query.page)
  if (!title) {
   const  movies = {Error: 'Enter Your movie'}
    return {
      props:{
        movies
      }
    }
  }
   const movies = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${title}&page=${page}&type=movie`
  )
    .then((res) => res.json())
    console.log(movies)
    const totalResults = Number(movies?.totalResults) || 0
    return {
      props:{
        movies,
        totalResults
      }
    }
}
interface IMovies{
  Poster: string
  Title: string
  Type: string
  imdbID: string
  Error: string
}
interface IHome{
  movies: IMovies,
  totalResults: number
}
export default function Home({movies, totalResults}:IHome) {
  const router = useRouter()
  console.log(movies)
  
  const title = useSelector((state:any) => state.search.title)
  
  const [page, setCurrentPage] = useState(1)
 
  const pageSize = 10

  const onPageChange = (page: any) => {
    setCurrentPage(page.selected+1);
  };


 useEffect(() => {
 
  router.push(`/?title=${title}&page=${page}`)

 }, [title, page])
 

  return (

    <div className=' my-auto relative  h-screen'>
      <div className='flex flex-col justify-items-center items-center'>
      <Pagination items={totalResults} currentPage={page} pageSize={pageSize} onPageChange={(page: number) => onPageChange(page)} />

      {movies?.Error && <Error>{movies.Error}</Error>}
      <MoviesList data={movies} />
      </div>
    </div>
  )
}
