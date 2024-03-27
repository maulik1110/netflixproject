import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='h-full aspect-video pt-[18%] px-12 w-1/2 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='font-normal py-4 text-lg leading-6'>{overview}</p>
        <div className='py-2 flex gap-2'>
            <button className='rounded-lg bg-white text-black px-8 py-2 font-semibold hover:opacity-50 ease-linear'>▹Play</button>
            <button className='rounded-lg bg-white text-black px-8 py-2 font-semibold'>More Information</button>
        </div>
    </div>
  )
}

export default VideoTitle