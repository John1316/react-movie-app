import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext('');

export default function MediaContextProvider(props) {
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
  
  return <MediaContext.Provider value={{trendingMovies , trendingPerson , trendingTv}}>
    {props.children}
  </MediaContext.Provider>
}
