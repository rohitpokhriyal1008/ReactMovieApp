import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <>
    <div className='w-[20%] h-full p-4 border-r-[1px] border-zinc-400'>
            <h1 className='flex font-extrabold items-center gap-2 text-white text-2xl my-3 ml-4'>
                <i className="text-[#6556CD] ri-tv-fill"></i>
             <span>PrimeTime</span>
             </h1>
             <nav className='text-[2vw] text-zinc-400  flex flex-col mt-10 gap-y-8'>
                <h1 className='text-zinc-100 my-5 text-[1.8vw]'>News Feeds</h1>

             <Link to="/trending" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500' >
             <i className="mr-2 ri-fire-fill"></i>
               Trending
             </Link>

             <Link to="/popular" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i className="mr-2 ri-bard-fill"></i>
               Popular
             </Link>

             <Link to="/movie" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i className="mr-2 ri-clapperboard-fill"></i>
             Movies
             </Link>

             <Link to="/tv" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i className="mr-2 ri-slideshow-fill"></i>
             TV Shows
             </Link>

             <Link to="/people" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i className="mr-2 ri-team-fill"></i>
             People
             </Link>

             
             </nav>
    </div>
    </>
  )
}

export default Sidenav