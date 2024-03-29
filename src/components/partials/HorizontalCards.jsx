import React from 'react'
import { Link } from 'react-router-dom'


const HorizontalCards = ({data}) => {

  return (
     
     <div className='w-full h-[40vh] flex overflow-x-auto p-2'> 
         {data.map((item,index) => (
            <div key={index} className='min-w-[20%] mr-3 mb-2  bg-zinc-900  rounded-md overflow-hidden hover:scale-105 shadow-md transition-transform duration-300 ease-in-out'>
            <img className='h-[55%] w-full object-cover' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt="" />
            <div className='h-[45%] mt-2 w-full  pl-2'>
            <h1 className='text-white  font-semibold font-black my-2 '>
                {item.name || item.original_name || item.title || item.original_title}
                </h1>
          <p className='text-white '>
            {item.overview.slice(0,50)}... 
            <Link className='text-zinc-400  font-bold cursor-pointer underline'>
                more
                </Link> </p>   
            </div>
         </div>
         ))}
     </div>
  )

}

export default HorizontalCards