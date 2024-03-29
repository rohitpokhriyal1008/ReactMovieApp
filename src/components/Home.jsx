import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import { useState } from 'react'
import axios from '../utils/Axios'
import { useEffect } from 'react'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'

const Home = () => {
    document.title  = "HomePage"
     
    const [wallpaper,setwallpaper] = useState(null)
    const [trending,settrending] = useState(null)
   const [category,setcategory] = useState("all")
    

    const getWallpaper = async() => {
        try {
            const {data} = await axios.get(`/trending/all/week`)
            const randomData = data.results[(Math.random()* data.results.length).toFixed()]
              setwallpaper(randomData)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    const getTrending = async() => {
        try {
            const {data} = await axios.get(`/trending/${category}/week`)
            console.log(data.results)
              settrending(data.results)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    

    useEffect(() => {
        getTrending()
       !wallpaper && getWallpaper()
      
    },[category])
    

 return wallpaper && trending ?  (
    <>
          <Sidenav/>

       <div className='w-[80%] h-screen overflow-y-auto'>
        <Topnav/>
        <Header data={wallpaper} />
        <div className='p-6 flex justify-between items-center'>
       <h1 className='text-3xl text-zinc-300'>
        Trending
       </h1>
       <Dropdown title="Filter" options={["all","movie","tv"]} func={(e) => setcategory(e.target.value)} />
     </div>
        <HorizontalCards data={trending} />
       </div>
            
    </>
  ) : <Loader/>

}

export default Home