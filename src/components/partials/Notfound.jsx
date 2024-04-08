import React from 'react'
import notfound from '/404error.gif'

const Notfound = () => {
  return (
    <div className='h-full lg:h-screen w-full flex justify-center items-center bg-[#000000]'>
      <img className='h-full w-full object-contain'  src={notfound} alt="" />
    </div>
  )
}

export default Notfound