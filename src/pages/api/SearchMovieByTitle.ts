import { useState, useEffect } from 'react'

export function SearchMovieByTitle(title:string) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  console.log('title in search', title)
const page = 1
  useEffect(() => {
    setLoading(true)
    fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [title])

  if (isLoading) return {msg: "loading..."}
  if (!data) return {msg:"No data"}

  return data
}