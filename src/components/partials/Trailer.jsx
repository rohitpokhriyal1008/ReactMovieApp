import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Notfound from './Notfound'

const Trailer = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const category = pathname.includes("movie") ? "movie" : "tv"
    const { videos } = useSelector(state => state[category].info)

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center'>
            <i onClick={() => navigate(-1)} className="hidden lg:block lg:absolute lg:top-4 lg:right-12 lg:text-3xl lg:text-white lg:cursor-pointer ri-close-line"></i>
            <div className="w-full h-[40vh] lg:h-full max-w-screen-lg">
                {videos ? (
                    <ReactPlayer
                        controls
                        url={`https://www.youtube.com/watch?v=${videos.key}`}
                        width="100%"
                        height="100%"
                    />
                ) : (
                    <Notfound />
                )}
            </div>
        </div>
    )
}

export default Trailer
