import React, { useState } from 'react'
import { asyncloadpeople,removepeople } from '../store/actions/PeopleActions'
import { Link,useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'

const Peopledetails = () => {

            const [category,setcategory] = useState("movie")
            const navigate = useNavigate()
            const dispatch = useDispatch()
            const {pathname} =useLocation()
            const {info} = useSelector((state) => state.people)
            const {id} = useParams()

            useEffect(()=>{
            dispatch(asyncloadpeople(id))
            return () => {
            dispatch(removepeople())
              }
              },[id])


        return info ? (
          <div className='w-full h-full bg-[#1F1E24] p-[3%]'>
              <nav className='mb-10'>
             <i onClick={() => navigate(-1)} className=" text-2xl hover:text-blue-800 ri-arrow-left-line"></i>
             </nav>
             <div className=' w-full px-[5%] flex gap-x-[4%]'>
              <div className='left-part w-[25%] h-full'>
              <img className='h-full w-full object-cover rounded-md ' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
              <hr className='my-8' />
       <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i title="wikidata" className="ml-4 hover:text-blue-800 text-2xl ri-dribbble-fill"></i></a>
       <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i title="wikidata" className="ml-12 hover:text-blue-800 text-2xl ri-facebook-circle-fill"></i></a>
       <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i title="wikidata" className="ml-12  hover:text-blue-800 text-2xl ri-instagram-fill"></i></a>
       <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i title="wikidata" className="ml-12  hover:text-blue-800 text-2xl ri-twitter-x-fill"></i></a>
          <div className='text-zinc-300 my-5 flex flex-col'>
          <h1 className='text-2xl mb-3'>Personal Information</h1>
           <h2 className='text-xl'>Known for </h2>
             <h3 className='mb-3'>{info.detail.known_for_department}</h3>
             <h2 className='text-xl'>Gender </h2>
             <h3 className='mb-3'>{info.detail.gender === 2 ? "male" : "female" }</h3>
             <h2 className='text-xl'>Birthday </h2>
             <h3 className='mb-3'>{info.detail.birthday}</h3>
             {info.detail.deathday && (
                        <>
                    <h2 className='text-xl'>Deathday</h2>
                    <h3>{info.detail.deathday}</h3>
                      </>
                      )}

             <h2 className='text-xl'>Place of Birth </h2>
             <h3 className='mb-3'>{info.detail.place_of_birth}</h3>
             <h2 className='text-xl'>Also known as </h2>
             <h3>{info.detail.also_known_as.join(" , ")}</h3>
          </div>
              </div>
              <div className='right-part h-full w-[79%] '>
                 <h1 className='text-5xl font-extrabold my-7 '>{info.detail.name}</h1>
                 <h1 className='text-2xl text-zinc-300 mb-4'>Biography</h1>
                 <p className='text-zinc-100 mb-4'>{info.detail.biography}</p>
                 <h1 className='text-2xl   text-zinc-300 mb-4'>Known for </h1>
                 <HorizontalCards data={info.combined.cast} />
                 <div className='flex w-full justify-between items-center mt-6'>
                  <h1 className='text-xl text-zinc-300 '>Acting</h1>
                  <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)}/>
                 </div>
                 <div className='w-full mt-6  overflow-y-auto border border-zinc-300 h-[60vh] shadow-lg shadow-[rgba(255,255,255,.7)] p-[2%]'>
                      
                      {info[category].cast.map((item,index) => <Link key={index}>
                        <li className='hover:bg-[#19191d] hover:text-white '>
                        <span  className='text-zinc-200 '>{item.original_title || item.original_name || item.name}</span>
                        <span className='ml-5 block mb-4 text-zinc-300'>Character Name: {item.character}</span>
                        </li> 
                        </Link>)}
                     
                    
                     
                 </div>
                   
              </div>
             </div>
          </div>
        ) : <Loader/>
}

export default Peopledetails