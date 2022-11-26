import React from 'react'
import Row from './Row'
import './row.css'

function Body() {
  return (
    <div className='b'>

        <Row title="Trending" type= '/trending/all/week?api_key=706a402988f9bfc1a4d6c347a25eeb4f&language=en-US'/>
        <Row title="NetflixOriginals" type="/discover/tv?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_networks=213"/>
        <Row title="Top Rated" type="/movie/top_rated?api_key=706a402988f9bfc1a4d6c347a25eeb4f&language=en-US"/>
        <Row title="Action Movies" type="/discover/movie?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_genres=28"/>
        <Row title="Comedy Movies" type="/discover/movie?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_genres=35"/>
        <Row title="Horror Movies" type="/discover/movie?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_genres=27"/>
        <Row title="Romance Movies" type="/discover/movie?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_genres=10749"/>
        <Row title="Documantaries" type="/discover/movie?api_key=706a402988f9bfc1a4d6c347a25eeb4f&with_genres=99"/>




    </div>
  )
}

export default Body