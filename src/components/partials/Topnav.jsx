import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
             const [query, setquery] = useState("")
             console.log(query)

  return (
    <div className='w-full h-[10vh] flex justify-center items-center text-white relative flex flex-col'>
        <div className='border-2 border-zinc-500 w-[60%] rounded-full py-2 px-4 mt-8'>
        <i class=" text-2xl ri-search-line"></i>
        <input onChange={(e) => setquery(e.target.value) } value={query}
        className='text-xl mx-5 w-[80%] border-none outline-none bg-transparent ' type="text" placeholder="movies,actors,genre.."/>
         {query.length > 0 && <i onClick={() => setquery("")} class="text-2xl ml-10 ri-close-large-fill"></i> }
        
        </div>

        <div className='absolute rounded w-[50%] bg-zinc-200 max-h-[50vh] top-[100%] text-xl text-zinc-700 overflow-auto '>
            {/* <Link className='w-full  font-semibold flex justify-start items-center bg-zinc-100 py-8 border-b-2 border-white hover:bg-zinc-300 hover:text-black '>
               <img src="" alt="" />
               <h1 className='ml-4'>hello everyone</h1>
            </Link> */}
            
            
        </div>
    </div>
  )
}

export default Topnav