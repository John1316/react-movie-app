import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
import { MediaContext } from '../MediaContext/MediaContext';
export default function Movies() {
  let {trendingMovies} = useContext(MediaContext);
  
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
