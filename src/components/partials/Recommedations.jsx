import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'


const Recommendations = ({data}) => {
  

  return (
     
     <div className='w-full h-[37vh] lg:h-[40vh] flex overflow-x-auto p-2'> 
         { data.length > 0 && data.map((item,index) => (
            <Link to={`/${window.location.pathname.includes('movie') ? 'movie' : 'tv'}/details/${item.id}`} key={index} className='min-w-[53%] lg:min-w-[20%] mr-3 mb-2  bg-zinc-900  rounded-md overflow-hidden hover:scale-105 shadow-md transition-transform duration-300 ease-in-out'>
            <img className='h-[55%] w-full object-cover' src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}` : noimage} alt="" />
            <div className='h-[45%] mt-2 w-full  pl-2'>
            <h1 className='text-white  font-semibold  my-2 '>
                {item.name || item.original_name || item.title || item.original_title}
                </h1>
          <p className='text-white '>
            {item.overview.slice(0,50)}... 
            <span className='text-zinc-400  font-bold cursor-pointer underline'>
                more
                </span>
                 </p>   
            </div>
         </Link>
         ))}
     </div>
  )

}

export default Recommendations