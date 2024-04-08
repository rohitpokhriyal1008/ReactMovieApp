import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './partials/Card'
import axios from '../utils/Axios'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component'

const Movie = () => {
    document.title = "Prime|| Movie"
    const navigate = useNavigate()
    const [category, setcategory] = useState("now_playing")
    const [movie, setmovie] = useState([])  
    const [page,setpage]  = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getMovie = async() => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`)
             if(data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results])
                //setmovie(data.results)
                setpage(page+1)
             } else {
                sethasmore(false)
             }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const freshHandler = () => {
        if(movie.length === 0) {
            getMovie()

        } else {
            setpage(1)   
            setmovie([])
            getMovie()
        }
    }

    useEffect(() => {
        freshHandler()
    },[category])

  return movie.length > 0 ? (
    <div className='w-full h-full py-4 px-2 lg:py-0 lg:px-[2%] bg-[#1F1E24]'>
      <div className='lg:flex items-center w-full'>
      <h1 className='text-2xl lg:text-xl font-bold text-zinc-400 w-full lg:w-[20%]'>
       <i onClick={() => navigate(-1)} className=" mr-32 lg:mr-2 hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
       Movies
       </h1>
       <div className='lg:hidden block'>
       <Topnav/>
       </div>
       <div className='hidden lg:flex lg:items-center  lg:w-[95%]'>
        <Topnav/>
        <div className='hidden lg:flex lg:gap-3'>
        <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e) => setcategory(e.target.value)} />
        </div>

       </div>
      </div>

      <InfiniteScroll
      dataLength={movie.length}
      next={getMovie}
      hasMore={hasmore}
      loader={<h1>Loading...</h1>}
      >
        <Card data={movie} title="movie" /> 
      </InfiniteScroll>
       
    </div>
  ) : <Loader/>
}

export default Movie