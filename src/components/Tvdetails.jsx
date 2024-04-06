import React from 'react'
import { asyncloadtv,removetv } from '../store/actions/TvActions'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import Recommendations from './partials/Recommedations'
import noimage from '/noimage.jpg'

const Tvdetails = () => {
          const navigate = useNavigate()
          const dispatch = useDispatch()
          const {pathname} =useLocation()
          const {info} = useSelector((state) => state.tv)
          const {id} = useParams()

          useEffect(()=>{
          dispatch(asyncloadtv(id))
          return () => {
          dispatch(removetv())
            }
            },[id])

  return info ? ( 
       <>
    {/* navigation for small screen */}
     
    <nav className='lg:hidden px-[4%]  h-[7vh]  flex items-center justify-between '>
      <div>
       <i onClick={() => navigate(-1)} className=" text-2xl hover:text-violet-800 ri-arrow-left-line"></i>
      <a target="_blank"  href={info.detail.homepage}><i title="moviepage" className="ml-12  hover:text-blue-800 text-xl  ri-external-link-line"></i></a>
       <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i title="wikidata" className="ml-4  hover:text-blue-800 text-xl ri-dribbble-fill"></i></a>
       <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className="ml-4 hover:text-blue-800 text-xl ">imdb</a>
       </div>
       <Link to="/" className='text-xl hover:text-blue-800'> Home
       </Link>
      </nav>

    <div style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
    url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path ||info.detail.poster_path})`,
     backgroundPositon:"center",
     backgroundSize:"contain",
     backgroundRepeat:"no-repeat"}} 
    className='h-full w-screen  px-[3%] bg-blue-200'>
     
        {/* navigation for large screen */}
      <nav className='hidden lg:h-[10vh]  lg:flex lg:items-center lg:justify-between '>
      <div>
       <i onClick={() => navigate(-1)} className=" text-2xl hover:text-violet-800 ri-arrow-left-line"></i>
      <a target="_blank"  href={info.detail.homepage}><i title="moviepage" className="ml-12 lg:ml-24 hover:text-blue-800 text-xl lg:text-2xl ri-external-link-line"></i></a>
       <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i title="wikidata" className="ml-4 lg:ml-8  hover:text-blue-800 text-xl lg:text-2xl ri-dribbble-fill"></i></a>
       <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className="ml-4 lg:ml-8  hover:text-blue-800 text-xl lg:text-2xl">imdb</a>
       </div>
       <Link to="/" className='text-xl lg:text-2xl hover:text-blue-800'> Home
       </Link>
      </nav>
          
          {/* main */}
      <div className='lg:mt-32 ml-4'>
      <h1 className='text-3xl lg:text-6xl mt-10 font-extrabold text-[#ffffff]'>{info.detail.name || info.detail.original_name || info.detail.title || info.detail.original_title}</h1>
      <p className='mt-5 lg:mt-10 w-[90%] text-xm lg:text-xl tracking-wide text-zinc-300 '>{info.detail.overview}</p>
       <div className='mt-32 lg:mt-10 mb-12 text-[1rem] lg:text-2xl flex items-center gap-x-6 lg:gap-x-20 text-zinc-300 font-extrabold tracking-wider'>
       <h1 className='flex justify-center items-center   w-[13vw] h-[6vh]  lg:w-[4vw] lg:h-[7vh] font-bold text-zinc-800 rounded-[50%] bg-yellow-400'>
          {(info.detail.vote_average*10).toFixed()} <sup>%</sup>
       </h1>
       <h1 className='text-xm lg:text-xl '>{info.detail.number_of_seasons} Seasons</h1>
       <h1>{info.detail.first_air_date.split("-")[0]}</h1>
       <h1>{info.detail.genres.map(gen => gen.name).join("  -  ")}</h1> 
       </div>
       <Link className='p-2 lg:p-4 bg-[#6556CD] rounded-lg text-xm lg:text-xl' to={`${pathname}/trailer`}>
        <i className="mr-1 ri-play-fill"></i>
             Watch Trailer
         </Link>
       <div className='flex flex-col'>
           {info.watchproviders && info.watchproviders.flatrate && 
           <div className='flex items-center mt-10 gap-x-4 lg:gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available on platforms </h1>
           {info.watchproviders.flatrate.map((item,index) =>
           <img className='w-[3vh] h-[3vh] lg:w-[6vh] lg:h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}

           {info.watchproviders && info.watchproviders.rent && 
           <div className='flex items-center mt-10 gap-x-4 lg:gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available on rent</h1>
           {info.watchproviders.rent.map((item,index) =>
           <img className='w-[3vh] h-[3vh] lg:w-[6vh] lg:h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}

           {info.watchproviders && info.watchproviders.buy && 
           <div className='flex items-center mt-10 gap-x-4 lg:gap-x-8'> 
           <h1 className='font-semibold text-[1.2rem]'>Available to buy</h1>
           {info.watchproviders.buy.map((item,index) =>
           <img className='w-[3vh] h-[3vh] lg:w-[6vh] lg:h-[6vh] object-cover rounded-md'  key={index} src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} alt="" />
            )}
           </div>}
           
       </div>
        <div className='flex items-center gap-x-16'>
          <h1 className='font-semibold text-[1.2rem]'>Translations</h1>
          <p className='mt-10 w-[75%] text-xs lg:text-xl tracking-wide text-zinc-300 '>{info.translations.slice(1,30).join(" , ")}</p>

        </div>
        
      </div>
      <hr className='my-4' />

      <h1 className='text-3xl my-4'> Seasons</h1>
      { info.detail.seasons.length > 0 && <div className='w-full h-[30vh] lg:h-[50vh] gap-x-2 flex overflow-x-auto p-2'>
      
         { info.detail.seasons.map((item,index) => (
            <div key={index} className='min-w-[50%] lg:min-w-[20%] mr-3 mb-2  bg-zinc-900  rounded-md overflow-hidden hover:scale-105 shadow-md transition-transform duration-300 ease-in-out'>
            <img className='h-full w-full object-cover' src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : noimage} alt="" />
         </div>
         
         ))}
     </div>}

      { info.recommendations.length > 0 && <div> 
        <h1 className='text-3xl my-4'> Recommended TV shows</h1>
     <Recommendations data={info.recommendations ? info.recommendations : info.similar}/>
        </div>}
        <h1 className=' lg:hidden flex font-extrabold justify-center items-center gap-2 text-white text-2xl pt-20 pb-6 ml-4'>
          <i className="text-[#6556CD] ri-tv-fill"></i>
          <span>GaurPrime</span>
        </h1>
         <Outlet/>
      </div>
      </>
    
  ) : <Loader/>
}

export default Tvdetails