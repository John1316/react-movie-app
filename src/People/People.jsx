import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
import { MediaContext } from '../MediaContext/MediaContext';
export default function People() {
  let {trendingPerson} = useContext(MediaContext);


  
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
