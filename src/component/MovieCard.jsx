import React from 'react'
import { IMG_CDN } from '../utils/constfile'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-2'>
        <img className='rounded hover:scale-[0.95] transition-transform' src={IMG_CDN+posterpath} alt="poster" />
    </div>
  )
}

export default MovieCard