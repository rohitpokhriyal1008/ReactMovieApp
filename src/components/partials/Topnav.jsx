import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/Axios'
import { useEffect } from 'react'
import noimage from '/noimage.jpg'

const Topnav = () => {
             const [query, setquery] = useState("")

             const [search, setsearch] = useState([])

             const getsearches = async() => {
                try {
                    const {data} = await axios.get(`/search/multi?query=${query}`)
                    setsearch(data.results)
                } catch (error) {
                    console.log("error:", error)
                }
             }
             useEffect(() => {
                getsearches()
             },[query])

             
 
  return (
    <div className='w-full h-[10vh] flex justify-center items-center text-white relative flex flex-col mb-3'>
        <div className=' w-[50%] rounded-full py-2 px-4 mt-4'>
        <i className=" text-2xl ri-search-line"></i>
        <input onChange={(e) => setquery(e.target.value) } value={query}
        className='text-xl mx-8 mr-[35%] w-[40%] border-none outline-none bg-transparent ' type="text" placeholder="movies,tv show"/>
         {query.length > 0 && <i onClick={() => setquery("")} className="text-2xl ri-close-large-fill"></i> }
        
        </div>

        <div className='absolute rounded w-[50%] bg-zinc-200 max-h-[50vh] top-[100%] text-xl text-zinc-700 overflow-auto z-20 '>
            {search.map((item,index) => (
                      <Link to={`/${item.media_type}/details/${item.id}`}  key={index} className='w-full  font-semibold flex justify-start items-center bg-zinc-100 py-8 border-b-2 border-white hover:bg-zinc-300 hover:text-black '>
                      <img className='w-[20vh] h-[15vh] object-cover rounded shadow-lg' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` 
                      : noimage} alt="" />
                      <h1 className='ml-4'>{item.name || item.original_name || item.title || item.original_title}</h1>
                   </Link>
            ))}
           
            
            
        </div>
    </div>
  )
}

export default Topnav