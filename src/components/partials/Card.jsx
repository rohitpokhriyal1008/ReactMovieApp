import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

const Card = ({data,title}) => {
  return (
    <div className='w-full h-full  p-[3%] flex flex-wrap gap-8'>    
        {data.map((item,index) => (
            <Link to={`/${item.media_type || title }/details/${item.id}`} key={index} className='w-[90vw] lg:w-[20vw] h-[50vh] lg:h-[40vh] my-9 lg:my-7 relative hover:scale-125 transition-transform duration-300 ease-in-out hover:z-10'>
            <img className='w-full h-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg' src={item.poster_path || item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path}`: noimage} alt="" />
            <h1 className='text-2xl my-2 text-zinc-300 px-4 lg:px-2 font-semibold'>
                {item.name || item.original_name || item.title || item.original_title}
                </h1>
                {item.vote_average > 0 && <div className='flex justify-center items-center absolute right-[1%] lg:right-[-8%] bottom-[5%] lg:bottom-[15%] w-[13vw] h-[7vh] lg:w-[4vw] lg:h-[7vh] font-bold text-zinc-800 rounded-[50%] bg-yellow-400'>
                    {(item.vote_average*10).toFixed()} <sup>%</sup>
                    </div>}
             
       </Link>
        ))}
    </div>
  )
}

export default Card