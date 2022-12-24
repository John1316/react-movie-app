import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
export default function Tv() {
  const [trendingTv, setTrendingTv] = useState([])
  async function getTrending(){
    let {data}  = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=64d768e4d0a647d938254dd3d191863f`)
    setTrendingTv(data.results)

  }
  useEffect(() => {
    getTrending()
  }, [])
  
  return (
    <>
    <Helmet>
    <title>Noxe | Tv show</title>
    </Helmet>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h2 >Trending tv show <br/>To watch right now</h2>
          <p>Most watched tv show</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
            
        </div>
        {trendingTv.length > 0 ? trendingTv.slice(0,16).map((tv, index)=> <MediaItem key={index} mediaType={tv} /> ) : <div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
    </>
  )
}
