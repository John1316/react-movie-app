import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'
import { Helmet } from "react-helmet";
import { MediaContext } from '../MediaContext/MediaContext';
export default function Tv() {
  let {trendingTv} = useContext(MediaContext);

  
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
