import React, { useEffect } from 'react'
import { optiAPI_OPTIONS } from '../utils/constfile';
import { useDispatch, useSelector } from 'react-redux';
import {addTrailer} from "../utils/movieSlice"

const VideoBackground = ({movieId}) => {
    const selector  = useSelector(store=>store.movies.trailerVideo)
    const dispatch = useDispatch()

    const getMovieVideo = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`,optiAPI_OPTIONS)
        const json = await data.json();
        // console.log(json);

        const filteredtrailervideo  = json.results.filter(v=>v.type === "Trailer")
        const trailer = filteredtrailervideo.length ? filteredtrailervideo[0] : json.results[0];
        // did this v=bcz movies might have 1+ trailer 
        console.log(trailer);
        dispatch(addTrailer(trailer))
    }

    useEffect(()=>{
        getMovieVideo()
    },[])
  return (
    <div>
       <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+selector?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground