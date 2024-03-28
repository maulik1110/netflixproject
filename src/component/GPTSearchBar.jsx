import React from 'react'
import lang from '../utils/languageconst'

const GPTSearchBar = () => {
  return (
    <div className='pt-[5%] w-1/2 m-auto flex justify-center'>
        <form className=' bg-black grid grid-cols-12 rounded-md'>
            <input className='m-1 px-4 py-2 outline-2 col-span-10 rounded-lg' type="text" name="" id="" placeholder={lang.hindi.gptsearchplaceholder} />
            <button className='m-1 px-4 py-2 bg-red-700 rounded-lg col-span-2 text-white'>{lang.hindi.Search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar