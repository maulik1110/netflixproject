import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGpt = useSelector(store=>store.Gpt.showgpt)
  //custom hook
  useNowPlayingMovies()
  usePopularMovies()
  
  return (
    <div>
      <Header/>
      {showGpt ? 
      <GPTSearch/> : 
      <>
      <MainContainer/> <SecondaryContainer/>
      </>
      }
      
    </div>
  )
}

export default Browse