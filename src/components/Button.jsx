import React from 'react'

export const Button = ({text,handleClick}) => {
  return (
    <div className='mt-6 '>
        <button className='bg-gray-700 px-6 py-4 rounded-lg text-white font-semibold' onClick={handleClick}>{text}</button>
    </div>
  )
}
