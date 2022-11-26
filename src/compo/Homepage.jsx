import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Homepage() {
    const [movies , setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=706a402988f9bfc1a4d6c347a25eeb4f&language=en-US")
        .then((r)=>{
            setMovies(r.data.results)
        })
    },[])

  return (
    <div>
        
            {movies.map(movie =>(
                
                // <h1 key={movie.id}> {movie.title}</h1>
                <img src= {`${image}${movie.poster_path}`} alt="item" />
            ))}
        
    </div>
  )
}

export default Homepage