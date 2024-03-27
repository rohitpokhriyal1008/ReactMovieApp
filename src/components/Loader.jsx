import React from 'react'
import  loader from '/loader.gif'

const Loader = () => {
  return (
    <div>
        <img className='h-full w-[100vw]'  src={loader} alt="" />
    </div>
  )
}

export default Loader