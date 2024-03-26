import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-32 px-12 w-1/2'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='font-normal py-4 text-lg leading-6'>{overview}</p>
        <div className='py-2 flex gap-2'>
            <button className='rounded-lg bg-black text-white px-8 py-2 font-semibold'>▹Play</button>
            <button className='rounded-lg bg-black text-white px-8 py-2 font-semibold'>More Information</button>
        </div>
    </div>
  )
}

export default VideoTitle