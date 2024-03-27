import React from 'react'
import { Link } from 'react-router-dom'



const Header = ({data}) => {

 

  return (
    <div className='w-full h-[50vh] bg-black-900 relative'>
      <img className='w-full h-full object-fit bg-no-repeat' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`} alt="" />
       <div className='details ml-6 absolute w-[70%] top-[25%] p-8 z-10 '>
          <h1 className='text-white text-5xl m-2 font-bold font-black'>{data.name || data.original_name || data.title || data.original_title}</h1>
          <p className='text-white m-2'>{data.overview.slice(0,200)}... <Link className='text-blue-800  font-bold cursor-pointer underline'>more</Link> </p>
          <p className='text-white mb-5 m-2'>
          <i className="text-yellow-500 ri-megaphone-fill"></i>{" "} 
          {data.release_date || "Not Available"} {" "}
          <i className="text-yellow-500 ml-5 mr-1 ri-album-fill"></i>
          {data.media_type.toUpperCase()} 
          </p>
          <Link className='text-white p-3 ml-2 rounded-md bg-[#6556cd]'>
          Watch Trailer
          </Link>
       </div>
    </div>
  )
}

export default Header