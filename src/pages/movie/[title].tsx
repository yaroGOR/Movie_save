import { useRouter } from 'next/router'
import React from 'react'
import { SearchMovieByTitle } from '../api/SearchMovieByTitle';
import Poster from '../../components/atoms/Poster';
import Title from '../../components/atoms/Title';
import Year from '../../components/atoms/Year';
import { Tab } from '@headlessui/react'
import type {
  GetServerSidePropsContext,
} from "next";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context)
  const title = context.params?.title
  const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`)
    .then((res) => res.json())
  return {
    props: {
      data
    }
  }
}


const Movie = ({ data }: any) => {
  const router = useRouter()
  const { title }: any = router.query
  
  return (
    <div className='h-screen text-gray-600 body-font overflow-hidden'>
     


      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <Poster src={data.Poster} />
        
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <Title>{title}</Title>
            <Year>{data.Year}</Year>

            <Tab.Group defaultIndex={0}>
              <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }>Details</Tab>
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }>Actors</Tab>
                <Tab className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }>Awards</Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel >
                  <p> {data.Runtime}</p>

                  <p className='leading-relaxed'>
                    {data.Plot}

                  </p>

                </Tab.Panel>
                <Tab.Panel>
                  <p>
                    {data.Actors}
                  </p>
                </Tab.Panel>
                <Tab.Panel>
                  <p className=''>
                  {data.Awards}
                  </p>
                  <ul>
                  {data.Ratings?.map((rating: any, index: number) => {
                    return (
                      <li key={index} className='flex justify-between'>
                        <p>  {rating.Source}</p>
                        <p>  {rating.Value}</p>
                      </li>)
                  })}
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>



            {/* {data.BoxOffice}
      {data.Country}
      {data.DVD}
      {data.Director}
      {data.Genre}
      {data.Language}
      {data.Metascore}
      
      {data.Production}  */}


            {/* {data.Released}
      {data.Response}
      {data.type}
      {data.Website}
      {data.Writer}
      {data.Year}
      {data.imbdID}
       */}


          </div>
        </div>
      </div>
    </div>

  )
}

export default Movie