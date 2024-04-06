import React from 'react'

const Dropdown = ({ title,func,options }) => {
  return (
    <div className=''>
        <select onChange={func} defaultValue="0" name="format" id="format" className='w-32 lg:w-56  lg:h-8  outline-none text-zinc-500 px-2 rounded-md' >
            <option className='' value="0" disabled >
                {title}
            </option>
            {options.map((item,index) => (
                <option key={index} value={item}>
                    
                    {item.toUpperCase()}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown