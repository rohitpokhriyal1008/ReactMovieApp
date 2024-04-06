import React from 'react'
import notfound from '/404error.gif'

const Notfound = () => {
  return (
    <div className='h-screen w-screen bg-[#000000]'>
      <img className='h-full w-full object-contain'  src={notfound} alt="" />
    </div>
  )
}

export default Notfound