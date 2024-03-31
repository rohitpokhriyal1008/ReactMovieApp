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

const App = () => {
  return (
    <>
      <div className='w-full h-full bg-[#1F1E24] flex text-white'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/popular" element={<Popular/>} />

            <Route path="/movie" element={<Movie/>} />
            <Route path="/movie/details/:id" element={<Moviedetails/>} />

            <Route path="/tv" element={<Tvshow/>} />
            <Route path="/tv/details/:id" element={<Tvdetails/>} />

            <Route path="/people" element={<People/>} />
            <Route path="/people/details/:id" element={<Peopledetails/>} />

            
            
          </Routes>
      </div>

        </>
  )
}

export default App