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

const Trending = () => {  
    document.title = "GaurPrime|| Trending"
    const navigate = useNavigate()   
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState([])  
    const [page,setpage]  = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getTrending = async() => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`)
             if(data.results.length > 0) {
                settrending((prevState) => [...prevState, ...data.results])
                //settrending(data.results)
                setpage(page+1)
             } else {
                sethasmore(false)
             }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const freshHandler = () => {
        if(trending.length === 0) {
            getTrending()

        } else {
            setpage(1)   
            settrending([])
            getTrending()
        }
    }

    useEffect(() => {
        freshHandler()
    },[category,duration])

  return trending.length > 0 ? (
    <div className='w-full h-full py-4 px-2 lg:py-0 lg:px-[2%] bg-[#1F1E24]'>
      <div className='lg:flex items-center w-full '>
      <h1 className='text-2xl lg:text-xl font-bold text-zinc-400'>
       <i onClick={() => navigate(-1)} className=" mr-32 lg:mr-2  hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
        Trending
       </h1>
       <div className='flex items-center w-full lg:w-[95%]  '>
        <Topnav/>
        <div className='hidden lg:flex lg:gap-3'>
        <Dropdown title="Category" options={["all","movie","tv"]} func={(e) => setcategory(e.target.value)} />
        <Dropdown title="Duration" options={["day","week"]} func={(e) => setduration(e.target.value)} />
        </div>

       </div>
      </div>

      <InfiniteScroll
      dataLength={trending.length}
      next={getTrending}
      hasMore={hasmore}
      loader={<h1>Loading...</h1>}
      >
        <Card data={trending} title={category} /> 
      </InfiniteScroll>
       
    </div>
  ) : <Loader/>
}

export default Trending