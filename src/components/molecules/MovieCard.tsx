import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Year from '../atoms/Year'
import Title from '../atoms/Title'
import Poster from '../atoms/Poster'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../redux/store'
import { saveState, loadState } from '../redux/localStorage';
import { Search } from '../organisms/Search';

interface IMovie {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

interface IMovieCardProps {
    data: IMovie

}
//any may be added types

const isInStorage = (movie: IMovie) => {
    const items = loadState()?.movies
    console.log(movie)
    const index = items?.movies.findIndex((item: any) => item.imdbID == movie.imdbID)
    if (index == -1) {
        return false
    } else { return true }
}

const MovieCard = ({ data }: IMovieCardProps) => {
    const dispatch = useDispatch()
    console.log(data)
    const [saved, setSaved] = useState(isInStorage(data))
    const handleSave = (movie:IMovie) => {
        setSaved(!saved)
        if (!saved) {
            console.log('save action')
            dispatch({ type: 'SAVE_MOVIE', payload: movie })
            saveState({
                movies: store.getState().movies
            })
        }
        if (saved) {
            console.log('delete action')
            dispatch({ type: 'DELETE_MOVIE', payload: data })

        }
    }
    return (
        <div className='wrapper relative max-w-lg max-h-lg flex flex-col  antialiased text-gray-900'>

            <Poster src={data.Poster} />
            <div className='absolute top-5 right-5' onClick={() => handleSave(data)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill={saved ? "red" : "transparent"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
            </div>

            <div className=' relative flex justify-center px-4 -mt-16'>
                <div className=' w-3/4 bg-white p-6 rounded-lg shadow-lg'>
                    <Link href={`/movie/${data.Title}`}>
                        <Title>{data.Title} </Title>
                    </Link>

                    <Year> {data.Year}</Year>
                </div>

            </div>




        </div>
    )
}

export default MovieCard