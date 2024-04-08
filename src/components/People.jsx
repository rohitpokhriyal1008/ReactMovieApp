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

const People = () => {
    document.title = "Prime| People"
    const navigate = useNavigate()
    const [category, setcategory] = useState("popular")
    const [person, setperson] = useState([])  
    const [page,setpage]  = useState(1)
    const [hasmore, sethasmore] = useState(true)

    const getPerson = async() => {
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`)
             if(data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results])
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
        if(person.length === 0) {
            getPerson()

        } else {
            setpage(1)   
            setperson([])
            getPerson()
        }
    }

    useEffect(() => {
        freshHandler()
    },[category])

  return person.length > 0 ? (
    <div className='w-full h-full px-4 py-4 lg:py-0 lg:px-[2%] bg-[#1F1E24]'>
      <div className='lg:flex items-center w-full'>
      <h1 className='text-2xl lg:text-xl font-bold text-zinc-400 w-[20%]'>
       <i onClick={() => navigate(-1)} className="mr-28 lg:mr-2 hover:text-[#6556CD] ri-arrow-left-line rounded "></i>
        People 
       </h1>
       <div className='flex items-center w-full lg:w-[95%]'>
        <Topnav/>
        <div className='flex gap-3'>
        </div>

       </div>
      </div>

      <InfiniteScroll
      dataLength={person.length}
      next={getPerson}
      hasMore={hasmore}
      loader={<h1>Loading...</h1>}
      >
        <Card data={person} title="people" /> 
      </InfiniteScroll>
       
    </div>
  ) : <Loader/>
}


export default People