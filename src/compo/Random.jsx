import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './ramdom.css'


function Random() {
    const [movies , setMovies] = useState([])
    const image = "https://image.tmdb.org/t/p/original"
    const url = "https://api.themoviedb.org/3"
    const API_KEY = "706a402988f9bfc1a4d6c347a25eeb4f"

    useEffect(()=>{
        async function fetch(){
            await axios.get( `${url}/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((r)=>{
            setMovies(
                r.data.results[ Math.floor(Math.random() * r.data.results.length-1)]
                
            )
        })

        }

        fetch()
        console.log(movies)
        
    },[])
    
  return (
    <header className='back' style={{
        
        backgroundImage: `url("${image}${movies?.backdrop_path}")`,
        // backgroundSize:"cover",
        // backgroundPosition:"center center",
       
    }}>
        <div className='back-body'>
            <h1>{ movies?.title || movies?.original_title || movies?.name || movies?.original_name }</h1>
            <button className='btn'>Play</button>
            <button className = "btn">My List</button>
            <div className='des'>
                {movies.overview}
            </div>
        </div>

    </header>
  )
}

export default Random