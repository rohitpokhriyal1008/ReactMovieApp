import React from 'react'
import  loader from '/loader.gif'

const Loader = () => {
  return (
    <div className='h-screen w-screen bg-[#000000]'>
        <img className='h-full w-full object-contain'  src={loader} alt="" />
    </div>
  )
}

export default Loader