import { useState, useEffect } from 'react'

export function SearchMovie(title:any, page:any = 2) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  console.log('page', page)
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${title}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [page, title])

  if (isLoading) return {isLoading: true}
  if (!data) return {isError:true}

  return data
}