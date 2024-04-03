import React from 'react'
import { asyncloadmovie,removemovie } from '../store/actions/MovieActions'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import HorizontalCards from './partials/HorizontalCards'

const Moviedetails = () => {
          const navigate = useNavigate()
          const dispatch = useDispatch()
          const {pathname} =useLocation()
          console.log(pathname)
          const {info} = useSelector((state) => state.movie)
          console.log(info)
          const {id} = useParams()

          useEffect(()=>{
          dispatch(asyncloadmovie(id))
          return () => {
          dispatch(removemovie())
            }
            },[id])

  return info ? ( 
     
    <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
    url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path ||info.detail.poster_path})`,
     backgroundPositon:"center",
     backgroundSize:"contain",
     backgroundRepeat:"no-repeat"}} 
    className='h-full w-screen px-[3%]'> 
     
        {/* navigation */}
      <nav className='h-[10vh]  flex items-center '>
       <i onClick={() => navigate(-1)} className=" text-2xl hover:text-violet-800 ri-arrow-left-line"></i>
      <a target="_blank"  href={info.detail.homepage}><i title="moviepage" className="ml-24 hover:text-blue-800  text-2xl ri-external-link-line"></i></a>
       <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i title="wikidata" className="ml-8  hover:text-blue-800 text-2xl ri-dribbble-fill"></i></a>
       <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className="ml-8  hover:text-blue-800 text-2xl">imdb</a>
      </nav>
          
          {/* main */}
      <div className='mt-32 ml-4'>
      <h1 className='text-6xl mt-10 font-extrabold text-[#ffffff]'>{info.detail.name || info.detail.original_name || info.detail.title || info.detail.original_title}</h1>
      <p className='mt-10 w-[90%] text-xl tracking-wide text-zinc-300 '>{info.detail.overview}</p>
       <div className='mt-10 mb-12 text-2xl flex items-center gap-x-20 text-zinc-300 font-extrabold tracking-wider'>
       <h1 className='flex justify-center items-center  w-[4vw] h-[7vh] font-bold text-zinc-800 rounded-[50%] bg-yellow-400'>
          {(info.detail.vote_average*10).toFixed()} <sup>%</sup>
       </h1>
       <h1 className='text-xl '>{info.detail.runtime} min</h1>
       <h1>{info.detail.release_date.split("-")[0]}</h1>
       <h1>{info.detail.genres.map(gen => gen.name).join("  -  ")}</h1> 
       </div>
       <Link className='p-4 bg-[#6556CD] rounded-lg text-xl' to={`${pathname}/trailer`}>
        <i className="mr-1 ri-play-fill"></i>
             Watch Trailer
         </Link>
       <div className='flex flex-col'>
           {info.watchproviders && info.watchproviders.flatrate && 
           <div className='flex items-center mt-10 gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available on platforms </h1>
           {info.watchproviders.flatrate.map((item,index) =>
           <img className='w-[6vh] h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}

           {info.watchproviders && info.watchproviders.rent && 
           <div className='flex items-center mt-10 gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available on rent</h1>
           {info.watchproviders.rent.map((item,index) =>
           <img className='w-[6vh] h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}

           {info.watchproviders && info.watchproviders.buy && 
           <div className='flex items-center mt-10 gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available to buy</h1>
           {info.watchproviders.buy.map((item,index) =>
           <img className='w-[6vh] h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}
           
       </div>
        <div className='flex items-center gap-x-16'>
          <h1 className='font-semibold text-[1.2rem]'>Translations</h1>
          <p className='mt-10 w-[75%] text-xl tracking-wide text-zinc-300 '>{info.translations.slice(1,30).join(" , ")}</p>

        </div>
        
      </div>
      <hr className='my-4' />
      <h1 className='text-3xl my-4'> Recommended Movies</h1>
     <HorizontalCards data={info.recommedations > 0 ? info.recommendations : info.similar}/>
         <Outlet/>
      </div>
    
  ) : <Loader/>
}

export default Moviedetails