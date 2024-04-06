import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshow from './components/Tvshow'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import Tvdetails from './components/Tvdetails'
import Peopledetails from './components/Peopledetails'
import Trailer from './components/partials/Trailer'
import Notfound from './components/partials/Notfound'

const App = () => {
  return (
    <>
      <div className='w-full h-full bg-[#1F1E24] lg:flex text-white'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/popular" element={<Popular/>} />

            <Route path="/movie" element={<Movie/>} />
            <Route path="/movie/details/:id" element={<Moviedetails/>}>

            <Route path="/movie/details/:id/trailer"  element={<Trailer/>}/>

            </Route>
             
            
              

            <Route path="/tv" element={<Tvshow/>} />
            <Route path="/tv/details/:id" element={<Tvdetails/>}>

            <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>

           </Route>

            <Route path="/people" element={<People/>} />
            <Route path="/people/details/:id" element={<Peopledetails/>} />
            <Route path="*" element={<Notfound/>} />
            
            
            
          </Routes>
      </div>

        </>
  )
}

export default App