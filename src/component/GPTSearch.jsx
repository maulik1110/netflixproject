import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggesion from './GPTMovieSuggesion'
import { BG_IMG } from '../utils/constfile'

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute -z-10 w-full h-full">
        <img
          src= {BG_IMG}
          alt="banner"
        />
      </div>
        <GPTSearchBar/>
        <GPTMovieSuggesion/>
    </div>
  )
}

export default GPTSearch