import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { optiAPI_OPTIONS } from '../utils/constfile'
import { addTrailer } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideo = async()=>{
        // const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`,optiAPI_OPTIONS)
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?",optiAPI_OPTIONS)
        const json = await data.json();
        // console.log(json);

        const filteredtrailervideo  = json.results.filter(v=>v.type === "Trailer")
        const trailer = filteredtrailervideo.length ? filteredtrailervideo[0] : json.results[0];
        // did this v=bcz movies might have 1+ trailer 
        // console.log(trailer);
        dispatch(addTrailer(trailer))
    }

    useEffect(()=>{
        getMovieVideo()
    },[])
}

export default useMovieTrailer