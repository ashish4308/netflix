import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './row.css'

function Row({title ,type}) {
    const [movies , setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/original"
    const url = "https://api.themoviedb.org/3"
    const API_KEY = "706a402988f9bfc1a4d6c347a25eeb4f"
    

    useEffect(()=>{
        async function fetch(){
            await axios.get( `${url}${type}`)
            .then((r)=>{
            setMovies(
                r.data.results
            )
        })

        }

        fetch()
    },[])

  return (
    <div >
         <div className='title'>{title}</div>
            <div className='container'>
            {movies.map(movie =>(
                
                <img key={movie.id} src= {`${image}${movie?.poster_path || movie?.backdrop_path}`} alt="item" className='img' />
            ))}
            </div>
        
    </div>
  )
}

export default Row