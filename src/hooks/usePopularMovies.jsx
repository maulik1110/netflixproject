import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies } from '../utils/movieSlice';
import { optiAPI_OPTIONS } from '../utils/constfile';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    //api calls
  
    const getPopularMovies = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", optiAPI_OPTIONS)
      const json = await data.json()
      // console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }  
  
    useEffect(()=>{
      getPopularMovies()
    },[])
}

export default usePopularMovies