import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='w-full h-full  p-[3%] flex flex-wrap gap-10'>    
        {data.map((item,index) => (
            <Link key={index} className='w-[20vw] h-[40vh] my-7 relative'>
            <img className='w-full h-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path}`} alt="" />
            <h1 className='text-2xl my-2 text-zinc-300 px-2 font-semibold'>
                {item.name || item.original_name || item.title || item.original_title}
                </h1>
                {item.vote_average && <div className='flex justify-center items-center absolute right-[-10%] bottom-[15%] w-[4vw] h-[7vh] text-zinc-800 rounded-[50%] bg-yellow-400'>
                    {(item.vote_average*10).toFixed()} <sup>%</sup>
                    </div>}
             
       </Link>
        ))}
    </div>
  )
}

export default Card