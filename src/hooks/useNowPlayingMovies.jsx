import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { optiAPI_OPTIONS } from '../utils/constfile';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    //api calls
  
    const getNowPlayingMovies = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", optiAPI_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }  
  
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies