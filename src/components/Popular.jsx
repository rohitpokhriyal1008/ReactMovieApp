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


const Popular = () => {
    document.title = "SCSDB|| Popular"
    const navigate = useNavigate()
    const [category, setcategory] = useState("movie")
    const [popular, setpopular] = useState([])  
    const [page,setpage]  = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getPopular = async() => {
        try {
            const {data} = await axios.get(`/${category}/popular?page=${page}`)
              console.log(data)
             if(data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results])
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
        if(popular.length === 0) {
            getPopular()

        } else {
            setpage(1)   
            setpopular([])
            getPopular()
        }
    }

    useEffect(() => {
        freshHandler()
    },[category])

  return popular.length > 0 ? (
    <div className='w-full h-full px-[2%] bg-[#1F1E24]'>
      <div className='flex items-center w-full'>
      <h1 className='text-xl font-bold text-zinc-400'>
       <i onClick={() => navigate(-1)} className=" mr-2 hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
        Popular
       </h1>
       <div className='flex items-center w-[95%]  '>
        <Topnav/>
        <div className='flex gap-3'>
        <Dropdown title="Category" options={["movie","tv"]} func={(e) => setcategory(e.target.value)} />
        </div>

       </div>
      </div>

      <InfiniteScroll
      dataLength={popular.length}
      next={getPopular}
      hasMore={hasmore}
      loader={<h1>Loading...</h1>}
      >
        <Card data={popular} /> 
      </InfiniteScroll>
       
    </div>
  ) : <Loader/>
}

export default Popular