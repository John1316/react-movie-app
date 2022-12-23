import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
    // first choiice for call let params = useParams();
    let {id , media_type} = useParams();
    const [details, setDetails] = useState([])
    async function getDetails(id , media_type){
        // first choiice for call let {data} = await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=64d768e4d0a647d938254dd3d191863f&language=en-US`)
        let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=64d768e4d0a647d938254dd3d191863f&language=en-US`)
        console.log(data)
        setDetails(data)
    }
    useEffect(() => {
    //  district
        getDetails(id, media_type)
    //   getDetails()
    }, [])
  return (
    <>
        <Helmet>
    <title>Noxe | Details | {`${media_type == 'movie' ? details.title : details.name}`}</title>
    </Helmet>
        <div className="row align-items-center">
            <div className="col-md-3">
            {details.profile_path ?  <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+ details.profile_path} alt=""/>:  <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+details.poster_path} alt={details.media_type == 'movie' ? details.title : details.name}/> }

            </div>
            <div className="col-md-9">
                <h3 title={details.media_type == 'movie' ? details.title : details.name} className="card-title h2">{media_type == 'movie' ? details.title : details.name}</h3>
                <p className='text-muted py-2'>{details.overview}</p>
                <p className='text-wihte py-2'>Vote average : {details.vote_average && details.vote_average?.toFixed(1)}</p>
                <p className='text-wihte py-2'>Vote count : {details.vote_count && details.vote_count?.toFixed(1)}</p>
                
            </div>
        </div>
    </>
  )
}
