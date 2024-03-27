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


const Tvshow = () => {
    document.title = "SCSDB|| TV Shows"
    const navigate = useNavigate()
    const [category, setcategory] = useState("airing_today")
    const [tv, settv] = useState([])  
    const [page,setpage]  = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getTv = async() => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`)
              console.log(data)
             if(data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results])
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
        if(tv.length === 0) {
            getTv()

        } else {
            setpage(1)   
            settv([])
            getTv()
        }
    }

    useEffect(() => {
        freshHandler()
    },[category])

  return tv.length > 0 ? (
    <div className='w-full h-full px-[2%] bg-[#1F1E24]'>
      <div className='flex items-center w-full'>
      <h1 className='text-xl font-bold text-zinc-400 w-[20%]'>
       <i onClick={() => navigate(-1)} className=" mr-2 hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
        Tv Shows <small className='text-xs'>({category})</small>
       </h1>
       <div className='flex items-center w-[95%]  '>
        <Topnav/>
        <div className='flex gap-3'>
        <Dropdown title="Category" options={["on_the_air","popular","top_rated","airing_today"]} func={(e) => setcategory(e.target.value)} />
        </div>

       </div>
      </div>

      <InfiniteScroll
      dataLength={tv.length}
      next={getTv}
      hasMore={hasmore}
      loader={<h1>Loading...</h1>}
      >
        <Card data={tv} /> 
      </InfiniteScroll>
       
    </div>
  ) : <Loader/>
}


export default Tvshow