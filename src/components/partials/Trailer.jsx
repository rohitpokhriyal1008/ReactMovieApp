import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Notfound from './Notfound'

const Trailer = () => {

        const navigate = useNavigate()
        const {pathname} = useLocation()
        const category = pathname.includes("movie") ? "movie" : "tv"
        const {videos} = useSelector(state => state[category].info)


  return (
    <div className='absolute z-100 bg-[rgba(0,0,0,.9)] top-0 left-0  w-screen h-[56vh] lg:h-full flex justify-center items-center'>
       <i onClick={() => navigate(-1)} className=" lg:block hidden absolute  top-4 right-10 text-5xl cursor-pointer hover:text-violet-800 ri-close-fill"></i>

            {videos ? (<ReactPlayer
            controls
            url={`https://www.youtube.com/watch?v=${videos.key}`}
             height={"800px"}
             width={"1200px"}
            />): <Notfound/>}
    </div>
  )
}

export default Trailer