import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
export default function Movies() {
  const [trendingMovies, setMovies] = useState([])
  async function getTrending(){
    let {data}  = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=64d768e4d0a647d938254dd3d191863f`)
    setMovies(data.results)

  }
  useEffect(() => {
    getTrending()
  }, [])
  
  return (
    <>
    <Helmet>
    <title>Noxe | Movies</title>
    </Helmet>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h2 >Trending movies <br/>TO watch right now</h2>
          <p>Most watched movies</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
            
        </div>
        {trendingMovies.length > 0 ? trendingMovies.slice(0,16).map((movies, index)=> <MediaItem key={index} mediaType={movies} /> ):<div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
    </>
  )
}
