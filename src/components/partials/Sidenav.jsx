import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleBackClick = () => {
    setIsNavOpen(false); 
  };


  return (
    <>
      {/* Navigation for larger screens */}
      <div className='hidden lg:block lg:w-[20%] lg:h-full lg:p-4 lg:border-r-[1px] lg:border-zinc-400'>
        <h1 className='flex font-extrabold items-center gap-2 text-white text-2xl my-3 ml-4'>
          <i className="text-[#6556CD] ri-tv-fill"></i>
          <span>Prime</span>
        </h1>
        <nav className='text-[2vw] text-zinc-400  flex flex-col mt-10 gap-y-8'>
          <h1 className='text-zinc-100 my-5 text-[1.8vw]'>News Feeds</h1>
          <Link to="/trending" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' >
            <i className="mr-2 ri-fire-fill"></i>
            Trending
          </Link>
          <Link to="/popular" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500'>
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link to="/movie" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500'>
            <i className="mr-2 ri-clapperboard-fill"></i>
            Movies
          </Link>
          <Link to="/tv" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500'>
            <i className="mr-2 ri-slideshow-fill"></i>
            TV Shows
          </Link>
          <Link to="/people" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500'>
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>
      </div>

      {/* Icon for smaller screens */}
      <div className='lg:hidden py-2 flex gap-8'>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className='text-white'>
          {isNavOpen ? (
            <i className="text-[#6556CD] ri-close-line text-3xl ml-4"></i>
          ) : (
            <i className="text-zinc-300 ri-menu-3-line text-3xl ml-4"></i>
          )}
        </button>
        <h1 className='flex font-extrabold items-center gap-2 text-white text-xl my-3 ml-10'>
              <i className="text-[#6556CD] ri-tv-fill"></i>
              <span className='mr-28'>Prime</span> 
            </h1>
      </div>

      {/* Side navigation for smaller screens */}
      {isNavOpen && (
        <div className='lg:hidden fixed top-3 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
          <div className='absolute top-0 left-0 w-[80%] h-full bg-[#1F1E24]'>
            <div className='flex font-extrabold items-center justify-between text-white text-xl my-3 ml-4 px-2'>
              <h1 className=' flex gap-2'>
              <i className="text-[#6556CD] ri-tv-fill"></i>
              <span className=''>Prime</span> 
              </h1>
            <p>
            <i onClick={() => handleBackClick()} className=" hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
            </p>

            </div>
            <nav className='text-xl text-zinc-400  flex flex-col mt-10 gap-y-8'>
              <Link to="/trending" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' onClick={() => setIsNavOpen(false)}>
                <i className="mr-2 ri-fire-fill"></i>
                Trending
              </Link>
              <Link to="/popular" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' onClick={() => setIsNavOpen(false)}>
                <i className="mr-2 ri-bard-fill"></i>
                Popular
              </Link>
              <Link to="/movie" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' onClick={() => setIsNavOpen(false)}>
                <i className="mr-2 ri-clapperboard-fill"></i>
                Movies
              </Link>
              <Link to="/tv" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' onClick={() => setIsNavOpen(false)}>
                <i className="mr-2 ri-slideshow-fill"></i>
                TV Shows
              </Link>
              <Link to="/people" className='p-6 rounded-lg hover:bg-[#6556cd] hover:text-white duration-500' onClick={() => setIsNavOpen(false)}>
                <i className="mr-2 ri-team-fill"></i>
                People
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidenav;
