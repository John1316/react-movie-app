import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
export default function Home() {
  const [trendingMovies, setMovies] = useState([])
  const [trendingTv, setTreningTv] = useState([])
  const [trendingPerson, setTrendingPerson] = useState([])
  async function getTrending(media_type, callback){
    let {data}  = await axios.get(`https://api.themoviedb.org/3/trending/${media_type}/week?api_key=64d768e4d0a647d938254dd3d191863f`)
    callback(data.results)

  }
  useEffect(() => {
    getTrending('movie', setMovies)
    getTrending('person', setTrendingPerson)
    getTrending('tv', setTreningTv)
  }, [])
  
  return (
    <>
    <Helmet>
    <title>Noxe | Home</title>
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
        {trendingMovies.length > 0 ? trendingMovies.slice(0,10).map((movies, index)=> <MediaItem key={index} mediaType={movies} /> ):<div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h2 >Trending Tv <br/>To watch right now</h2>
          <p>Most watched Tv</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
            
        </div>
        {trendingTv.length > 0 ? trendingTv.slice(0,10).map((tv, index)=> <MediaItem key={index} mediaType={tv} /> ): <div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h2 >Trending People <br/>To watch right now</h2>
          <p>Most watched People</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
            
        </div>
        {trendingPerson.length > 0 ? trendingPerson.filter((person) => person.profile_path !== null).slice(0,10).map((people, index)=> <MediaItem key={index} mediaType={people} /> ) : <div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
    </>
  )
}
