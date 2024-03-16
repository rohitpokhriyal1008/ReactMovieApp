import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <>
    <div className='w-[20%] h-full p-4 border-r-[1px] border-zinc-400'>
            <h1 className='flex items-center gap-2 text-white text-2xl my-3'>
                <i class="text-[#6556CD] ri-tv-fill"></i>
             <span>SCSDB</span>
             </h1>
             <nav className='text-[1.4vw] text-zinc-400 flex flex-col'>
                <h1 className='text-white my-5 text-[1.6vw]'>News Feeds</h1>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500' >
             <i class="mr-2 ri-fire-fill"></i>
               Trending
             </Link>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i class="mr-2 ri-bard-fill"></i>
               Popular
             </Link>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i class="mr-2 ri-clapperboard-fill"></i>
             Movies
             </Link>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i class="mr-2 ri-slideshow-fill"></i>
             TV Shows
             </Link>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i class="mr-2 ri-team-fill"></i>
             People
             </Link>

             <hr className='w-[95%] my-3' />

             <h1 className='text-white my-5 text-[1.6vw]'>Website Information</h1>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500' >
             <i class="mr-2 ri-information-2-fill"></i>
               About SCSDB
             </Link>

             <Link className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration:500'>
             <i class="mr-2 ri-contacts-fill"></i>
               Contact Us
             </Link>

             
             </nav>
    </div>
    </>
  )
}

export default Sidenav