import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
export default function People() {
  const [trendingPerson, setTrendingPerson] = useState([])
  async function getTrending(){
    let {data}  = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=64d768e4d0a647d938254dd3d191863f`)
    setTrendingPerson(data.results)

  }
  useEffect(() => {
    getTrending()
  }, [])
  
  return (
    <>
    <Helmet>
    <title>Noxe | People</title>
    </Helmet>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h2 >Trending people <br/>To watch right now</h2>
          <p>Most watched people</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
            
        </div>
        {trendingPerson.length > 0 ? trendingPerson.filter((person) => person.profile_path !== null).slice(0,16).map((people, index)=> <MediaItem key={index} mediaType={people} /> ) : <div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>}
      </div>
    </>
  )
}
